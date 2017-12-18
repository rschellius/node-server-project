// routes_v1.js
var express = require('express');
var routes = express.Router();

routes.get('/status', function (req, res) {
	res.status(200);
	res.json({
		status: 'OK'
	}).end();
});

module.exports = routes;