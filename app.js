//exporting  methods http from external npm module
var http=require('http');
var url='http://samples.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=2716aee8a09933dab78798f982a865d6';
var server=http.createServer(function(request,response){
  var request=require('request');
  request(url,function(err,res,body){
    //console.log(body);
  var data=JSON.parse(body);
  response.write("<html><body><div  id='container'>");
  response.write("<h1>"+'City name'+data.name+"</h1><br>");
  response.write("<h1>"+'City temp'+data.main.temp+"</h1>");
  response.write("</div></body><html>");
  response.end();
});

}).listen(8000);
