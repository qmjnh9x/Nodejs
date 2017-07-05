'use strict' 
var mongo = require('mongodb');
var select = require('./mongodb/select');
var insert = require('./mongodb/insert');
var update = require('./mongodb/update');

var mongoClient = mongo.MongoClient;
var url = 'mongodb://localhost:27017/linax'; //Tao database linax
mongoClient.connect(url,function(err, db){
	if(err){
		console.log('Unable to connect to the mongoDB server',err);
	}
	else{
		console.log('connection established to ', url);
		select.select('zips');
		//Tao table zips
		/*
		db.createCollection("zips",function(err,res){
			if(err) throw err;
			console.log("table created");
			db.close();
		});
		var myObj = {name : "minh",age : 27};
		db.collection("zips").insertOne(myObj,function(err,res){
			if(err)throw err;
			console.log("1record inserted");
			db.close();
		});
		*/
	}
});