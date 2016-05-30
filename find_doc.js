var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function (err, db){
	if (err)
		console.error(err)
	
	var collection = db.collection('docs')
	
	collection.find({
		
	}).toArray(function(err, data){
		if (err)
			console.error(err)
		console.log(data)
		db.close()
	})
});
