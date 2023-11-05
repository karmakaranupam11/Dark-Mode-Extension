function darkMode() {
   SpreadsheetApp.getActive().getRange('A1:Z').setBackground("#333333").setFontColor("#ffffff").setFontFamily("Google Sans").setBorder(false, false, false, false, true, true, "#444444", SpreadsheetApp.BorderStyle.SOLID);
}

function lightMode() {
   SpreadsheetApp.getActive().getRange('A1:Z').setBackground("#ECF0F1").setFontColor("#A3E4D7").setFontFamily("Google Sans").setBorder(false, false, false, false, true, true, "#444444", SpreadsheetApp.BorderStyle.SOLID);
}

function blueMode() {
   SpreadsheetApp.getActive().getRange('A1:Z').setBackground("#3498db").setFontColor("#ffffff").setFontFamily("Google Sans").setBorder(false, false, false, false, true, true, "#444444", SpreadsheetApp.BorderStyle.SOLID);
}

function greenMode() {
   SpreadsheetApp.getActive().getRange('A1:Z').setBackground("#27ae60").setFontColor("#ffffff").setFontFamily("Google Sans").setBorder(false, false, false, false, true, true, "#444444", SpreadsheetApp.BorderStyle.SOLID);
}

function purpleMode() {
   SpreadsheetApp.getActive().getRange('A1:Z').setBackground("#8e44ad").setFontColor("#ffffff").setFontFamily("Google Sans").setBorder(false, false, false, false, true, true, "#444444", SpreadsheetApp.BorderStyle.SOLID);
}


function onOpen(){
  SpreadsheetApp.getUi()
    .createMenu('Style')
    .addItem("Dark","darkMode")
    .addItem("Light","lightMode")
    .addItem("Blue","blueMode")
    .addItem("Green","greenMode")
    .addItem("Purple","purpleMode")
    .addToUi();
}

onOpen()
