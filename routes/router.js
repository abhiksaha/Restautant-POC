var express = require('express');
var path = require("path");
var router = express.Router();
var request = require('request');

var api_url = 'https://developers.zomato.com/api/v2.1';


var headers = { 
	'Content-Type': 'application/json; charset=utf-8',
	'user-key': '906dd4e7ebc7a51f7270c7a5df4f9bff'
};


router.post('/getCityList', function (req, res) {
    request({
		url: api_url+'/cities',
		qs: {q: req.body.locationSuggest}, //Query string data
		method: 'GET', // specify the request type
		headers: headers
	}, function(error, response, body){
		var respObj = {
			status:(response) ? response.statusCode : null,
			data: ''
		}
		if(error) {
			respObj.error = error;
			res.send(respObj);
		} else {
			respObj.data = JSON.parse(body);
			res.send(respObj);
		}
	});
});

router.post('/getRestaurantList', function (req, res) {
    request({
		url: api_url+'/search',
		qs: {
			entity_id : req.body.entityID, 
			entity_type : 'city', 
			q: req.body.searchQuery
		}, //Query string data
		method: 'GET', // specify the request type
		headers: headers
	}, function(error, response, body){
		var respObj = {
			status:(response) ? response.statusCode : null,
			data: ''
		}
		if(error) {
			respObj.error = error;
			res.send(respObj);
		} else {
			respObj.data = JSON.parse(body);
			res.send(respObj);
		}
	});
});
router.post('/getRestaurantDetails', function (req, res) {
    request({
		url: api_url+'/restaurant',
		qs: {
			res_id : req.body.id
		}, //Query string data
		method: 'GET', // specify the request type
		headers: headers
	}, function(error, response, body){
		var respObj = {
			status:(response) ? response.statusCode : null,
			data: ''
		}
		if(error) {
			respObj.error = error;
			res.send(respObj);
		} else {
			respObj.data = JSON.parse(body);
			res.send(respObj);
		}
	});
});

router.post('/getRestaurantReviews', function (req, res) {
    request({
		url: api_url+'/reviews',
		qs: {
			res_id : req.body.id
		}, //Query string data
		method: 'GET', // specify the request type
		headers: headers
	}, function(error, response, body){
		var respObj = {
			status:(response) ? response.statusCode : null,
			data: ''
		}
		if(error) {
			respObj.error = error;
			res.send(respObj);
		} else {
			respObj.data = JSON.parse(body);
			res.send(respObj);
		}
	});
});

module.exports = router;