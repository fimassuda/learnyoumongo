var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function (err, db){
	if (err)
		console.error(err)

	var collection = db.collection('prices')

	collection.aggregate([
		{ $match: { size: process.argv[2]}},
		{ $group: {
			_id: 'avg',
			avg: {
				$avg: '$price'
			}
		}}
	]).toArray(function(err, avg){
		if (err)
			console.error(err)

		console.log(Number(avg[0].avg).toFixed(2))
		
		db.close()
	});
});
