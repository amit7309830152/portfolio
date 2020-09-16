var express = require('express');
var query = require('../modules/query');
const { db } = require('../modules/query');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
    // res.send(query.display());
    query.query_model.find({}, function(err, queries) {
        if (err) {
            res.send('There is some error');
            console.log(`there is some error ${err}`);
        } else {
            res.render('query_view', { detials: queries });
        }
    });
});
router.post('/submit_query', function(req, res, next) {
    var query_insert = new query.query_model({ name: req.body.name, email: req.body.email, query: req.body.query })
    query_insert.save(function(err) {
        if (err) {
            console.log("there is some error while saving");
        } else {
            res.render('index');
            console.log("data is successfully saved");
        }
    });
});

module.exports = router;