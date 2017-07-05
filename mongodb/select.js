var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/linax';
exports.select = function(table){
	//console.log('function select');
	
mongoClient.connect(url,function(err,db){
	if(err) throw err;
	//Bat dau lay du lieu trong table zips (hay collection zips)
		var collection = db.collection(table);
		/*
		collection.find().toArray() -->Lay tat ca cac ket qua trong collection
		collection.find({'state' : 'MA' , 'pop' : 1234}).toArray() -->Them dieu kien query
		collection.find({'address.zipcode' : 10075}).toArray() -->Neu co chua cac cap field:value lo^ng` trong cap field:value
		collection.find({pop:{$gt:9600}}).toArray() -->dieu kien lon hon voi field pop
		collection.find({pop:{$lt:9600}}).toArray() -->dieu kien nho hon field pop
		collection.find({$or: [{'state' : 'MA'},{'pop' : {$gt:40992}}]}).toArray() --> phep toan OR
		*/
		collection.find().toArray(
			function(err,result){
				if(err){
					console.log(err);
				}
				console.log(result);
				db.close();
			}
		);
});

};