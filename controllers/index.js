var express = require('express')
var router = express.Router();

router.use('/', require('./carro'))

router.get('/', function (req, res) {
	res.send('<h1>\\\\\\Concessionária</h1><h4>Lorem ipsum dolor.</h4>');
});

module.exports = router
