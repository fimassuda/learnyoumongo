var mongo = require('mongodb').MongoClient
var dbName = process.argv[2]
var url = 'mongodb://localhost:27017/' + dbName
var collectionName = process.argv[3]

mongo.connect(url, function (err, db){
	if (err)
		console.error(err)

	var collection = db.collection(collectionName)

	collection.remove({
		_id: process.argv[4]
	}
	, function(err, data){
		if (err)
			console.error(err)
		
		db.close()
	})
});
