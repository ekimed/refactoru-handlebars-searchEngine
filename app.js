var express = require('express');
var bodyParser = require('body-parser');
var dummyData = require('./public/models/dummy.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/search', function(req, res){

	var searchTerm = req.query.searchTerm;

	for(var language in dummyData.programming){
		if(language.toLowerCase() === searchTerm.toLowerCase()){
			var description = dummyData.programming[language].desc
			res.send({lang: language, desc: description});
		}
	}

})

var server = app.listen(8545, function() {
	console.log('Express server listening on port ' + server.address().port);
});
