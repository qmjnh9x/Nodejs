var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/linax';

exports.update = function(table,condition)
	mongoClient.connect(url,function(err,db){
		if(err) throw err;
		else{
			var collection = db.collection(table);
			condition = {name : 'minh',$set : {name : 'minh123' } };
			collection.update(codition,function(err,numb){
				if(err) throw err;
				else if (numb){
					console.log("updated successfully %d docs",numb);
				} else{
					console.log('No docs found with...');	
				}				
			});
		}
	});