var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/chores');
var choresCollection = db.get('chores');

router.get('/chores', function(req, res){
  res.render('chores/index');
});
//NEW PT 1
router.get('/chores/new', function(req, res){
  res.render('chores/new');
});
//NEW PT 2
router.post('/chores', function(req, res) {
  res.redirect('/chores');
});
//NEW PT 3
router.post('/chores', function(req, res){
  choresCollection.insert({ chore: req.body.chores});
  res.redirect('/chores');
})
//SHOW
router.get('/chores', function(req, res) {
  choresCollection.find({}, function(err, records) {
    res.render('chores/index', {allChores: records});
  });
});

module.exports = router;
