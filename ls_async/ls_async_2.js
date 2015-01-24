var fs = require('fs');
var path = require('path');

function directory_filter(directory_path, ext_filter){
	fs.readdir(directory_path, function callback(err, filename_list){
		filename_list.forEach(function (file){
			if(path.extname(file) == '.' + ext_filter)
				console.log(file);
		});
	});
};

directory_filter(process.argv[2], process.argv[3]);
