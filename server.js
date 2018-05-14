var express = require('express'),
	route = require('./routes/router'),
	bodyParser = require("body-parser"),
	app = express(),
	path = require("path");



app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));    // to support URL-encoded bodies; 
app.use('/', route);
app.use(express.static(path.join(__dirname, 'dist')));

// app.get("*", function (req, res) {
	// res.sendFile(__dirname + '/src/index.html')
// })

app.listen(8099, function (error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> Server is Ready.....")
	}
})