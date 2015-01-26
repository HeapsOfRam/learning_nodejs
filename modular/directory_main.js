var df = require('./directory_filter_module');

var directory_path = process.argv[2];
var ext_filter = process.argv[3];

df(directory_path, ext_filter, function callback_function(err, filename_list){ 
	if(err)
		return console.error("ERROR: " + err);
	else{
		filename_list.forEach(function (file){
			console.log(file);
		});
	}
});
