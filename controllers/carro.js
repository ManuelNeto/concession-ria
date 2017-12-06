var express = require('express');
var router = express.Router();


var Carro = require("../models/carro");
var fs = require('fs');
var path = require('path');

router.post('/carro', function (req, res) {
    
    var carro = new Carro(req.body);
        carro.save(function (err, next) {
          	if (err) {
            	return next(err);
           	}
          res.end()
     	});
    
});

router.get('/carros', function (req, res) {

    Carro.find(function (err, carro) {
            if (err) return console.error(err);
            res.send(carro);
        });
    
});

// :carro = id
router.get('/carro/:carro', function(req, res, next) {
    
  var carro = req.carro;

  Carro.find(function(err) {
    if (err) {
      res.sendStatus(404);
      return next(err);
    }
      var r = res.send(carro);
      console.log(r.data);

      return next();
  });
  
});

router.post('/carro', function (req, res) {
    
    var carroID = req.body.carro;
      Carro.find({carro: carroID}, function (err, room) {
            if (err) return console.error(err);
            res.send(carro);
        });
    
});

router.delete('/carro/:carro', function(req, res, next) {
    
  Carro.remove({_id: req.params.carro}, function(err) {
    if (err) {
      res.sendStatus(404);

       return next(err);
    }
    res.end();

    return next();
  });
    
});


router.param('carro', function (req, res, next, _id) {
  var query = Carro.findById(_id);

  query.exec(function (err, carro) {
    if (err) {
      res.sendStatus(code404);
      return next(err);
    }
    if (!carro) {
      res.sendStatus(code404);
      return next(new Error('can\'t find carro'));
    }

    req.carro = carro;
    return next();
  });
});



module.exports = router;