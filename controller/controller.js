var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: "Ibrahim02",
    database: "bidding_project"
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<!--note to self put hbs file name int he section after render. hsb ending needed-->
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'myMap' });
});

router.get('/register', function(req, res, next){
	res.render('register', {title: 'Register'});	 
});


router.post('/register-process', function(req, res, next){



	res.render('register', {title: 'Register'});	 
});

router.get('/buyer', function(req, res, next) {
  res.render('UserlandingPage', { title: 'Buyer' });
});

router.get('/Manufacturer', function(req, res, next) {
	connection.query('select * from table name  WHERE colume=?',[req.session.instudy], function (error, results, fields) {


  res.render('ManfacturerLandingPage', { data: results });

	})
});

router.get('/Regristration', function(req, res, next) {
  res.render('Regristrationpage', { title: 'Regristration' });
});

router.post('/Regristration', function(req, res, next) {
	connection.query('INSERT INTO users (Insert all form fields but a common each) values(req.body value name')
 });


module.exports = router;
