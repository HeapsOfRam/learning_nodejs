var http = require('http');

function get_from_source(http_address){
	http.get(http_address, function http_callback(response){
		response.setEncoding('utf8');
		response.on("data", console.log);
		response.on("error", console.error);
	});
}

get_from_source(process.argv[2]);
