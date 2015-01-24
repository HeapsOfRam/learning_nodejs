var fs = require('fs');

function directory_filter(directory_path, ext_filter){
	fs.readdir(directory_path, function path_ls_complete(err, filename_list){
		for(var i = 0; i < filename_list.length; i++){
			var file_split = filename_list[i].split('.');
			if(file_split[1] == ext_filter){
				console.log(filename_list[i]);
			}
		}
	});
};

directory_filter(process.argv[2], process.argv[3]);
