var http = require('http');
var fs = require('fs');
var path = require('path');
var cache = {}; 
var server=http.createServer(function(req,res){
  var filepath=false;
  switch (req.url){
    case '/':
    filepath='/index.html';
    break;
    default :
    filepath = req.url;
    break;
  } 
  console.log(filepath);
  var abspath='.' + filepath;
  serverStatic(res, cache, abspath);
});
server.listen(8888, function(){
  console.log('localhost:8888 server is started');
});
function rend404(response) {
  response.writeHead(404, {"Content-Type":'text/plain'});
  response.write('ERROR:404 source not found.');
  response.end();
}
function rendFile(response, filePath, fileContents) {  
  //response.writeHead(200, {"Content-Type": mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}
function serverStatic(response, cache, absPath) {
  if(cache[absPath]) {
    rendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function(exists) {
      if(exists){
        fs.readFile(absPath, function(err, data) {
          if(err) {
            rend404(response);
          } else {
            cache[absPath] = data;
            rendFile(response, absPath, data);
          }
        })
      } else {
        rend404(response);
      }
    });
  }
}