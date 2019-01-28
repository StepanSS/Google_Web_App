
var url = "https://docs.google.com/spreadsheets/d/1z4Jp2nD5tNpc4Z88mvaP45L6FQyMpTDJbwy3MiiF1fw/edit#gid=0";

function doGet(e){
  
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Options");
  var last_row = ws.getRange("A1").getDataRegion().getLastRow();
  var list = ws.getRange(1, 1,last_row , 1).getValues();
  
  var htmlListArray = list.map(function(r){return '<option>'+r[0]+'</option>';});
  Logger.log(htmlListArray); 
  
  var tmp = HtmlService.createTemplateFromFile("page"); 
  tmp.title = "My Title";
  tmp.list = htmlListArray;
  
  Logger.log(tmp.list);
  return tmp.evaluate();
}

function userClicked(userInfo){
      
      
      var ss = SpreadsheetApp.openByUrl(url);
      var ws = ss.getSheetByName("Data");
  
      ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, userInfo.zip, userInfo.est, new Date()]);
  
      //Logger.log(name+" Clicked the button") ;
}

function getCost(zipCode){
      var ss = SpreadsheetApp.openByUrl(url);
      var ws = ss.getSheetByName("Estimate");
      var last_row = ws.getRange(1,1).getDataRegion().getLastRow();
      var data = ws.getRange(1, 1, last_row, 2).getValues();
  
  var zipCodeList = data.map(function(r){return r[0];});
  var costList = data.map(function(r){return r[1];});
  
  var position = zipCodeList.indexOf(zipCode);
  
  if(position>-1){
    
    return "$" + costList[position].toFixed(2);
    
  }else{
    return "Unavalable";
  }
  
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent(); 
}