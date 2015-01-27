var http = require('http');
var concat_stream = require('concat-stream');

function get_from_source(http_address){
	http.get(http_address, function http_callback(response){
		response.pipe(concat_stream(function(data){
			var data_string = data.toString();
			console.log(data_string.length);
			console.log(data_string);
		}));
	});
}

get_from_source(process.argv[2]);
