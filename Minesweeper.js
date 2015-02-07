var board = {
  rc0101: 0,
  rc0102: 0,
  rc0103: 0,
  rc0104: 0,
  rc0105: 0,
  rc0106: 0,
  rc0107: 0,
  rc0108: 0,
  rc0109: 0,
  rc0110: 0,
  rc0111: 0,
  rc0112: 0,
  rc0113: 0,
  rc0114: 0,
  rc0115: 0,

  rc0201: 0,
  rc0202: 0,
  rc0203: 0,
  rc0204: 0,
  rc0205: 0,
  rc0206: 0,
  rc0207: 0,
  rc0208: 0,
  rc0209: 0,
  rc0210: 0,
  rc0211: 0,
  rc0212: 0,
  rc0213: 0,
  rc0214: 0,
  rc0215: 0,

  rc0301: 0,
  rc0302: 0,
  rc0303: 0,
  rc0304: 0,
  rc0305: 0,
  rc0306: 0,
  rc0307: 0,
  rc0308: 0,
  rc0309: 0,
  rc0310: 0,
  rc0311: 0,
  rc0312: 0,
  rc0313: 0,
  rc0314: 0,
  rc0315: 0,

  rc0401: 0,
  rc0402: 0,
  rc0403: 0,
  rc0404: 0,
  rc0405: 0,
  rc0406: 0,
  rc0407: 0,
  rc0408: 0,
  rc0409: 0,
  rc0410: 0,
  rc0411: 0,
  rc0412: 0,
  rc0413: 0,
  rc0414: 0,
  rc0415: 0,

  rc0501: 0,
  rc0502: 0,
  rc0503: 0,
  rc0504: 0,
  rc0505: 0,
  rc0506: 0,
  rc0507: 0,
  rc0508: 0,
  rc0509: 0,
  rc0510: 0,
  rc0511: 0,
  rc0512: 0,
  rc0513: 0,
  rc0514: 0,
  rc0515: 0,

  rc0601: 0,
  rc0602: 0,
  rc0603: 0,
  rc0604: 0,
  rc0605: 0,
  rc0606: 0,
  rc0607: 0,
  rc0608: 0,
  rc0609: 0,
  rc0610: 0,
  rc0611: 0,
  rc0612: 0,
  rc0613: 0,
  rc0614: 0,
  rc0615: 0,

  rc0701: 0,
  rc0702: 0,
  rc0703: 0,
  rc0704: 0,
  rc0705: 0,
  rc0706: 0,
  rc0707: 0,
  rc0708: 0,
  rc0709: 0,
  rc0710: 0,
  rc0711: 0,
  rc0712: 0,
  rc0713: 0,
  rc0714: 0,
  rc0715: 0,

  rc0801: 0,
  rc0802: 0,
  rc0803: 0,
  rc0804: 0,
  rc0805: 0,
  rc0806: 0,
  rc0807: 0,
  rc0808: 0,
  rc0809: 0,
  rc0810: 0,
  rc0811: 0,
  rc0812: 0,
  rc0813: 0,
  rc0814: 0,
  rc0815: 0,

  rc0901: 0,
  rc0902: 0,
  rc0903: 0,
  rc0904: 0,
  rc0905: 0,
  rc0906: 0,
  rc0907: 0,
  rc0908: 0,
  rc0909: 0,
  rc0910: 0,
  rc0911: 0,
  rc0912: 0,
  rc0913: 0,
  rc0914: 0,
  rc0915: 0,

  rc1001: 0,
  rc1002: 0,
  rc1003: 0,
  rc1004: 0,
  rc1005: 0,
  rc1006: 0,
  rc1007: 0,
  rc1008: 0,
  rc1009: 0,
  rc1010: 0,
  rc1011: 0,
  rc1012: 0,
  rc1013: 0,
  rc1014: 0,
  rc1015: 0,

  rc1101: 0,
  rc1102: 0,
  rc1103: 0,
  rc1104: 0,
  rc1105: 0,
  rc1106: 0,
  rc1107: 0,
  rc1108: 0,
  rc1109: 0,
  rc1110: 0,
  rc1111: 0,
  rc1112: 0,
  rc1113: 0,
  rc1114: 0,
  rc1115: 0,

  rc1201: 0,
  rc1202: 0,
  rc1203: 0,
  rc1204: 0,
  rc1205: 0,
  rc1206: 0,
  rc1207: 0,
  rc1208: 0,
  rc1209: 0,
  rc1210: 0,
  rc1211: 0,
  rc1212: 0,
  rc1213: 0,
  rc1214: 0,
  rc1215: 0,

  rc1301: 0,
  rc1302: 0,
  rc1303: 0,
  rc1304: 0,
  rc1305: 0,
  rc1306: 0,
  rc1307: 0,
  rc1308: 0,
  rc1309: 0,
  rc1310: 0,
  rc1311: 0,
  rc1312: 0,
  rc1313: 0,
  rc1314: 0,
  rc1315: 0,

  rc1401: 0,
  rc1402: 0,
  rc1403: 0,
  rc1404: 0,
  rc1405: 0,
  rc1406: 0,
  rc1407: 0,
  rc1408: 0,
  rc1409: 0,
  rc1410: 0,
  rc1411: 0,
  rc1412: 0,
  rc1413: 0,
  rc1414: 0,
  rc1415: 0,

  rc1501: 0,
  rc1502: 0,
  rc1503: 0,
  rc1504: 0,
  rc1505: 0,
  rc1506: 0,
  rc1507: 0,
  rc1508: 0,
  rc1509: 0,
  rc1510: 0,
  rc1511: 0,
  rc1512: 0,
  rc1513: 0,
  rc1514: 0,
  rc1515: 0,
};
var numMines;

function newGame() {
  numMines = prompt("How many mines?");
  if(numMines == null) {
    return;
  }
  for(i=1; i<=15; i++) {
    for(j=1; j<=15; j++) {
      r = ("0" + String(i)).slice(-2);
      c = ("0" + String(j)).slice(-2);
      board["rc" + r + c] = 0;
    }
  }
  if(numMines < 1) {
    alert("Too few mines!");
    return;
  }
  if(numMines > 224) {
    alert("Too many mines!");
    return;
  }
  placeMines();
};
function placeMine() {
  r = ("0" + String(Math.floor(Math.random() * 15 + 1))).slice(-2);
  c = ("0" + String(Math.floor(Math.random() * 15 + 1))).slice(-2);
  if(board["rc" + r + c] == 0) {
    board["rc" + r + c] = 1;
    return;
  }
  else {
    placeMine();
  }
}
function placeMines() {
  for(i=1; i<=numMines; i++) {
    placeMine();
  }
};

function displayAll() {
  //For debugging and testing, this displays the locations of mines
  //Please don't cheat :P
  for(i=1; i<=15; i++) {
    for(j=1; j<=15; j++) {
      r = ("0" + String(i)).slice(-2);
      c = ("0" + String(j)).slice(-2);
      $("#rc" + r + c + " p").html(String(board["rc" + r + c]));
      if(board["rc" + r + c] == 0) {
        $("#rc" + r + c + " p").html("&nbsp;");
      }
    }
  }
}

$("#new").click(function() {
  newGame();
  displayAll();
});
