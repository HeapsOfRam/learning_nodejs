var fs = require('fs');

function newline_count(file_name){
	fs.readFile(file_name, function doneReading(err, file_contents){
		var contents_array = file_contents.toString().split('\n');
		console.log(contents_array.length - 1);	
	});
};

newline_count(process.argv[2]);
