var http = require('http');
var url  = require('url');

var api_part           = '/api/'
var parse_time_request = api_part + 'parsetime';
var unix_time_request  = api_part + 'unixtime';

var success_header = 200;
var success_type   = {'Content-Type': 'application/json'};

function return_iso_time(date_item){
	return {
		hour: date_item.getHours(),
		minute: date_item.getMinutes(),
		second: date_item.getSeconds()
	};
}

function return_unix_time(date_item){
	return {unixtime: date_item.gtTime()};
}

var server = http.createServer(function (request, response){
	if(request.method == 'GET'){
		var parsed_url = url.parse(request.url, true);

		if(parsed_url.pathname == parse_time_request){
			response.writeHead(success_header, success_type);

			var date_response = new Date(parsed_url.query.iso);
			response.end(JSON.stringify(return_iso_time(date_response)));
		}
		else if(parsed_url.pathname == unix_time_request){
			response.writeHead(success_header, success_type);
			
			var date_response = new Date(parsed_url.query.iso);
			var json_response = return_unix_time(date_response);
		
			response.end(JSON.stringify(return_unix_time(date_response)));
		}
		else{
			response.writeHead(404);
		}
	}
});

server.listen(process.argv[2]);
