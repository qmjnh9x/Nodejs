'use strict'
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var path = require('path');
var ip = require('ip');
const port = 8080;
//Chap nhan cac file thuoc folder /public
app.use(express.static(__dirname + '/public'));
 /*
app.get('/', function(req, res){
	//res.sendFile(__dirname + '/public/index.html');
	res.redirect(__dirname + '/index1.html');
});
*/
var user_count = 0;

//Mo ket noi socket IO
io.sockets.on('connection', function(socket){
	console.log('1 user connected!');
	socket.emit('message',{
		message : "welcome to socket IO server 123!"
	});
	//Socket.on = receive message from client
	socket.on('add user',function(msg){
		socket.username = msg;
		console.log("new user:"+msg+" logged.");
		socket.emit('add user',{
			username: socket.username
		});
	});

	//監聽新訊息事件
	socket.on('chat message', function(msg){

		console.log(socket.username+":"+msg);

  		//發佈新訊息
		io.emit('chat message', {
			username : socket.username,
			msg : msg
		});
	});

	//left
	socket.on('disconnect',function(){
		console.log(socket.username+" left.");
		io.emit('user left',{
			username:socket.username
		});
	});

});

//指定port
http.listen(process.env.PORT || port, function(){
	console.log('Server listening on '+ip.address()+':'+port);
});