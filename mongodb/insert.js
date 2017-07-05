var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/linax';

exports.insert = function(table,item) {
	mongoClient.connect(url,function(err,db){
		if(err) throw err;
		else{
			var collection = db.collection(table);
			collection.insertOne(item,function(err,result){
				if(err) throw err;
				else{
					console.log('1 record inserted');
				}
				db.close();
			});
		}
	});
}