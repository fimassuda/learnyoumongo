var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var firstName = process.argv[2]
var lastName = process.argv[3]

mongo.connect(url, function (err, db){
	if (err)
		console.error(err)
	
	var collection = db.collection('docs')
	var doc = {
			firstName: firstName,
			lastName: lastName
		};
	
	collection.insert(
		doc
	, function(err, data){
		if (err)
			console.error(err)
		console.log(JSON.stringify(doc))
		db.close()
	})
});
