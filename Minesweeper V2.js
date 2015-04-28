var mines = {};
var count = {};
var searched = {};
var whereAmI = null;
var easyMode = false;
var boardSize = null;

function startNewGame() {
  boardSize = prompt("How big do you want the board to be?\n(From 2 to 99)");
  if(boardSize == null) {
    return;
  }
  if(isNaN(boardSize)) {
    alert("Please only enter numbers.");
    return;
  }
  else {
    boardSize = Number(boardSize);
  }

  if(boardSize > 99) {
    alert("That's too large!\nThe maximum board size is 99.");
    return;
  }
  else if(boardSize > 37) {
    alert("WARNING\nThis may be too big for your screen.");
  }
  else if(boardSize < 2) {
    alert("That's too small!\nYou must have at least a size 2 board.");
    return;
  }
  numMines = prompt("How many mines do you want?\n(This must be between 0 and the number of squares on the board.)");
  if(numMines == null) {
    return;
  }
  if(isNaN(numMines)) {
    alert("Please only enter numbers.");
    return;
  }
  else {
    numMines = Number(numMines);
  }
  if(numMines > (boardSize*boardSize)-1) {
    alert("That's too many mines!\nThe most you can have for a size " + String(boardSize) + " board is " + String((boardSize*boardSize)-1) + ".");
    return;
  }
  else if(numMines < 1) {
    alert("That's too few mines!\nYou must have at least 1 mine.");
  }

  generateBoard(boardSize);
  clearBoard();
  placeMines(numMines);
  loadCount();

  if(easyMode) {
    check = 0;
    success = false;
    while(check <= 5000) {
      r = Math.floor(Math.random() * boardSize + 1);
      c = Math.floor(Math.random() * boardSize + 1);
      rc = toRC(r, c);
      if(count[rc] == 0 && !mines[rc]) {
        check = 9001; //It's over 9000!!!!!
        spaceClick(rc);
        success = true;
      }
      else {
        check++;
      }
    }
    if(!success) {
      alert("There are too many mines for quickstart!\nUse fewer mines, a larger board, or start yourself.");
    }
  }
  updateNumMines();
}
function placeMines(m) {
  for(i=0; i<m; i++) {
    placeMine();
  }
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      if(mines[rc] == null) {
        mines[rc] = false;
      }
    }
  }
}
function placeMine() {
  r = Math.floor(Math.random() * boardSize + 1);
  c = Math.floor(Math.random() * boardSize + 1);
  rc = toRC(r, c);
  if(mines[rc] == true) {
    placeMine();
  }
  else if(mines[rc] == false || mines[rc] == null) {
    mines[rc] = true;
    return;
  }
}
function loadCount() {
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      m = 0;
      toSearch = [
        toRC(i+1, j+1),
        toRC(i+1, j),
        toRC(i+1, j-1),
        toRC(i, j+1),
        toRC(i, j-1),
        toRC(i-1, j+1),
        toRC(i-1, j),
        toRC(i-1, j-1)
      ]
      for(k=0; k<8; k++) {
        if(mines[toSearch[k]] == true) {
          m++;
        }
      }
      count[rc] = m;
      if(mines[rc] == true) {
        count[rc] = 0;
      }
    }
  }
}
function clearBoard() {
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      mines[rc] = null;
      count[rc] = null;
      searched[rc] = false;
      $("#" + rc).css("background-color", "#dddddd");
      $("#" + rc + " p").css("color", "black").html("<img src='Blank.png'></img>");
    }
  }
}

function generateBoard(size) {
  $("#gameBoard").empty();
  for(i=1; i<=size; i++) {
    for(j=1; j<=size; j++) {
      $("#gameBoard").append('<div class="space" id="' + toRC(i, j) + '"><p><img src="Blank.png"></img></p></div>');
      mines[toRC(i, j)] = null;
      count[toRC(i, j)] = null;
      searched[toRC(i, j)] = false;
      temp = document.getElementById(toRC(i, j));
      temp.addEventListener("click", function() {
        attr = this.getAttribute("id");
        spaceClick(attr);
      });
      temp.addEventListener("mouseenter", function() {
        attr = this.getAttribute("id");
        spaceMouseEnter(attr);
      });
      temp.addEventListener("mouseleave", function() {
        attr = this.getAttribute("id");
        spaceMouseLeave(attr);
      });
    }
    $("#gameBoard").append('<br>');
  }
  $("#gameBoard").css("width", boardSize * 32 + 200);
}

function toRC(r, c) {
  newR = ("0" + String(r)).slice(-2);
  newC = ("0" + String(c)).slice(-2);
  return "rc" + newR + newC;
}

function displayMineCountOnBoard() {
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      if(mines[rc]) {
        $("#" + rc + " p").html("<img src='Mine.png'></img>").css("color", "black");
        $("#" + rc).css("background-color", "#dddddd");
      }
      else if(count[rc] == 0) {
        $("#" + rc + " p").html("<img src='Blank.png'></img>").css("color", "black");
        $("#" + rc).css("background-color", "#cccccc");
      }
      else {
        c = count[rc];
        var color;
        switch(count[rc]) {
          case 1:
            color = "blue";
            break;
          case 2:
            color = "green";
            break;
          case 3:
            color = "red";
            break;
          case 4:
            color = "#000099";
            break;
          case 5:
            color = "#993300";
            break;
          case 6:
            color = "#6600ff";
            break;
          case 7:
            color = "#cc33ff";
            break;
          case 8:
            color = "#003300";
            break;
        }
        $("#" + rc + " p").html(String(c)).css("color", color);
        $("#" + rc).css("background-color", "#cccccc");
      }
    }
  }
}

function updateNumMines() {
  flag = 0;
  total = 0;
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      if(mines[rc]) {
        total++;
      }
      temp = $("#" + rc + " p").html();
      if(temp == "<img src='Flag.png'>") {
        flag++;
      }
    }
  }
  $("#numMines p").html(String(total-flag));
}
function endGame(spot) {
  displayMineCountOnBoard();
  $("#" + spot).css("background-color", "red");
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      mines[rc] = null;
      count[rc] = null;
    }
  }
  $("#" + spot).css("width", "30px");
  $("#" + spot).css("height", "30px");
  $("#" + spot + " p").css("padding", "7px 0px");
  $("#" + spot).css("border", "0px");
}
function safeLeftClick(spot) {
  switch(count[spot]) {
    case 0:
      $("#" + spot + " p").html("<img src='Blank.png'></img>").css("color", "black");
      break;
    case 1:
      $("#" + spot + " p").html(String(count[spot])).css("color", "blue");
      break;
    case 2:
      $("#" + spot + " p").html(String(count[spot])).css("color", "green");
      break;
    case 3:
      $("#" + spot + " p").html(String(count[spot])).css("color", "red");
      break;
    case 4:
      $("#" + spot + " p").html(String(count[spot])).css("color", "#000099");
      break;
    case 5:
      $("#" + spot + " p").html(String(count[spot])).css("color", "#993300");
      break;
    case 6:
      $("#" + spot + " p").html(String(count[spot])).css("color", "#6600ff");
      break;
    case 7:
      $("#" + spot + " p").html(String(count[spot])).css("color", "#cc33ff");
      break;
    case 8:
      $("#" + spot + " p").html(String(count[spot])).css("color", "#003300");
      break;
  }
  $("#" + spot).css("background-color", "#cccccc");
}
function zeroPropogate(r, c) {
  rc = toRC(r, c);
  if(searched[rc]) {
    return;
  }
  searched[rc] = true;
  if(count[rc] == 0) {
    $("#" + rc).css("background-color", "#cccccc");
    $("#" + rc + " p").html("<img src='Blank.png'></img>");
    zeroPropogate(r+1, c+1);
    zeroPropogate(r+1, c);
    zeroPropogate(r+1, c-1);
    zeroPropogate(r, c+1);
    zeroPropogate(r, c-1);
    zeroPropogate(r-1, c+1);
    zeroPropogate(r-1, c);
    zeroPropogate(r-1, c-1);
  }
  else if(count[rc] > 0) {
    safeLeftClick(rc);
  }
  console.log("checked " + rc);
}
function checkForWin() {
  var isWin = true;
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      cont = $("#" + rc + " p").html();
      if(mines[rc] == true && cont != '<img src="Flag.png">') {
        isWin = false;
      }
      if(mines[rc] == false && cont == '<img src="Flag.png">') {
        isWin = false;
      }
    }
  }
  if(isWin) {
    win();
  }
}
function win() {
  alert("You've found all of the mines!\nYou win!");
  for(i=1; i<=boardSize; i++) {
    for(j=1; j<=boardSize; j++) {
      rc = toRC(i, j);
      mines[rc] = null;
      count[rc] = null;
      $("#" + rc).css("width", "30px");
      $("#" + rc).css("height", "30px");
      $("#" + rc + " p").css("padding", "7px 0px");
      $("#" + rc).css("border", "0px");
    }
  }
}

function spaceClick(rc) {
  r = Number(rc.slice(2, 4));
  c = Number(rc.slice(4, 6));
  if(mines[rc] == null || count[rc] == null) {
    return;
  }
  cont = $("#" + rc + " p").html();
  if(cont == '<img src="Flag.png">') {
    return;
  }
  if(cont == "?") {
    if(!confirm("That could be a mine!\nAre you sure you want to go there?")) {
      return;
    }
  }
  if(mines[rc]) {
    alert("Oh no! A mine!");
    endGame(rc);
  }
  else {
    if(count[rc] != 0) {
      safeLeftClick(rc);
    }
    else {
      zeroPropogate(r, c);
    }
  }
}
function spaceMouseEnter(rc) {
  r = Number(rc.slice(2, 4));
  c = Number(rc.slice(4, 6));
  if(mines[rc] == null || count[rc] == null) {
    return;
  }
  whereAmI = rc;
  $("#" + rc).css("width", "26px");
  $("#" + rc).css("height", "26px");
  $("#" + rc + " p").css("padding", "5px 0px");
  $("#" + rc).css("border", "2px solid #aaaaaa");

}
function spaceMouseLeave(rc) {
  r = Number(rc.slice(2, 4));
  c = Number(rc.slice(4, 6));
  whereAmI = null;
  if(mines[rc] == null || count[rc] == null) {
    return;
  }
  $("#" + rc).css("width", "30px");
  $("#" + rc).css("height", "30px");
  $("#" + rc + " p").css("padding", "7px 0px");
  $("#" + rc).css("border", "0px");

}

$("#new").click(function() {
  startNewGame();
});

$(document).keydown(function(event) {
  if(event.which == 78) {
    startNewGame();
  }
  if(event.which == 81) {
    easyMode = true;
    $("#reg").css("background-color", "#ddddff");
    $("#fast").css("background-color", "#66ff66");
  }
  if(event.which == 82) {
    easyMode = false;
    $("#reg").css("background-color", "#6666ff");
    $("#fast").css("background-color", "#ddffdd");
  }
  if(mines[whereAmI] == null || count[whereAmI] == null || whereAmI == null) {
    return;
  }
  numMines = Number($("#numMines p").html());
  if(event.which == 16) {
    cont = $("#" + whereAmI + " p").html();
    if(cont == '<img src="Blank.png">' && !searched[whereAmI]) {
      $("#" + whereAmI + " p").html("<img src='Flag.png'></img>").css("color", "red");
      numMines--;
    }
    else if(cont == '<img src="Flag.png">') {
      $("#" + whereAmI + " p").html("?").css("color", "purple");
      numMines++;
    }
    else if(cont == "?") {
      $("#" + whereAmI + " p").html("<img src='Blank.png'></img>").css("color", "black");
    }
    else {
      return;
    }
  }
  $("#numMines p").html(String(numMines));
  if(numMines == 0) {
    checkForWin();
  }
});
$("#reg").click(function() {
  easyMode = false;
  $("#reg").css("background-color", "#6666ff");
  $("#fast").css("background-color", "#ddffdd");
});
$("#fast").click(function() {
  easyMode = true;
  $("#reg").css("background-color", "#ddddff");
  $("#fast").css("background-color", "#66ff66");
});
