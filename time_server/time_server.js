var net = require('net');

var server = net.createServer(function (socket){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if(month.toString().length < 2)
		month = "0" + month;
	var day = date.getDate();
	if(day.toString().length < 2)
		day = "0" + day;
	var hours = date.getHours();
	if(hours.toString().length < 2)
		hours = "0" + hours;
	var minutes = date.getMinutes();
	if(minutes.toString().length < 2)
		minutes = "0" + minutes;

	socket.end(year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n");
});

server.listen(process.argv[2]);
