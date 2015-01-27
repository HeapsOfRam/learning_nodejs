var http = require('http');
var bl = require('bl');

function collect_all_from_source(http_address){
	http.get(http_address, function http_callback(response){
		response.pipe(bl(function(err, data){
			if(err)
				return console.error(err);
			var data_string = data.toString();
			console.log(data_string.length);
			console.log(data_string);
		}));
	});
}

collect_all_from_source(process.argv[2]);
