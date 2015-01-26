var fs = require('fs');
var path = require('path');

module.exports = function directory_filter(directory_path, ext_filter, callback_function){
	return fs.readdir(directory_path, function (err, list){
		if(err){
			return callback_function(err);
		}
		else{
			var filelist = new Array();

			list.forEach(function (file){
				if(path.extname(file) == '.' + ext_filter)
					filelist.push(file);
			});
		}

		return callback_function(null, filelist);
	});
};

