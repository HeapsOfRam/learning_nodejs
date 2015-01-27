var http = require('http');
var bl = require('bl');

var response_queue = [];
var count = 0;
var argument_count = process.argv.length - 2;

function print_results(){
	for(var i = 0; i < argument_count; i++){
		console.log(response_queue[i]);
	}
}

function collect_all_from_source(index){
	http.get(process.argv[2 + index], function (response){
		response.pipe(bl(function(err, data){
			if(err)
				return console.error(err);
			
			response_queue[index] = data.toString();
			count++;
			
			if(count >= argument_count)
				print_results();
		}));
	});
}

for(var q = 0; q < argument_count; q++)
	collect_all_from_source(q);
