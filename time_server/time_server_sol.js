var net = require('net');

function zerofill(date_element){
	return ((date_element < 10) ? '0' : '') + date_element
}

function get_now_timestamp(){
	var date = new Date();
	
	return date.getFullYear() + '-' + zerofill(date.getMonth() + 1) + '-' + zerofill(date.getDate()) + ' ' + zerofill(date.getHours()) + ':' + zerofill(date.getMinutes()) + '\n';
}

var server = net.createServer(function (socket){
	socket.end(get_now_timestamp());
});

server.listen(process.argv[2]);
