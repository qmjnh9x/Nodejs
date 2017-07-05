'use strict'
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var user_count = 0;
exports.connectss = function(){
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

	//goi tin nhan
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
};