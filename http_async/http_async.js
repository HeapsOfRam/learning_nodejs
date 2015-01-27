var http = require('http');
var bl = require('bl');

var http_group = new Array();
var process_array = new Array();
var location_array = new Array();

function collect_all_from_source(http_address){
	http.get(http_address, function http_callback(response){
		response.pipe(bl(function(err, data){
			if(err)
				return console.error(err);

			process_array.push(data.toString());
			
			for(var i = 0; i < http_group.length; i++){
				if(http_group[i] == http_address){
					location_array.push(i);
				}
			}

			if(process_array.length >= process.argv.length - 2){
				print_from_queue(process_array);
			}
		}));
	});
}

function queue_collections(http_addresses){
	http_addresses.forEach(function (address){
		collect_all_from_source(address);	
	});
}

function print_from_queue(printing_queue){
	for(var i = 0; i < printing_queue.length; i++){
		var true_location = -1;
		for(var q = 0; q < location_array.length; q++){
			if(i == location_array[q])
				true_location = q;
		}	
		console.log(printing_queue[true_location]);
	}
}

for(var i = 2; i < process.argv.length; i++){
	http_group.push(process.argv[i]);
}

queue_collections(http_group);
