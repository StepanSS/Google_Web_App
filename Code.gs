function doGet(e){
  
  //Logger.log(e);
 var tmp = HtmlService.createTemplateFromFile("page"); 
 tmp.title = "My Title";
 return tmp.evaluate();
  
  
}


function userClicked(userInfo){
      
      var url = "https://docs.google.com/spreadsheets/d/1z4Jp2nD5tNpc4Z88mvaP45L6FQyMpTDJbwy3MiiF1fw/edit#gid=0";
      var ss = SpreadsheetApp.openByUrl(url);
      var ws = ss.getSheetByName("Data");
  
      ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, new Date()]);
  
      //Logger.log(name+" Clicked the button") ;
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent(); 
}