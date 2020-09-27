var http = require('http');
var fs = require('fs');
var url = require('url');



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const pathname = url.parse(req.url, true).pathname;
  const fileToOpen = pathname === '/' ? 'index.html' : pathname + '.html'
  fs.readFile("./" + fileToOpen, function(err, data){
      if(err) {
          fs.readFile('./404.html', function(err, data){
            res.end(data)
          })
      }else{
          res.write(data);
          res.end();
      }
  })
}).listen(8080); 