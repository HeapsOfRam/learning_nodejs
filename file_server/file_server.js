var http = require('http');
var fs   = require('fs');

var path = process.argv[3];

var server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.createReadStream(path).pipe(response);
});

server.listen(process.argv[2]);
