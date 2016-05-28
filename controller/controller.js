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

module.exports = connection;

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'CustomRize'});
});

//<!--note to self put hbs file name int he section after render. hsb ending needed-->
router.get('/map', function(req, res, next) {
 res.render('map', { title: 'Map' });
});

router.get('/buyer', function(req, res, next) {
 res.render('UserlandingPage', { title: 'Buyer' });
});

router.get('/Manufacturer', function(req, res, next) {
	res.render('ManufacturerLandingPage', {title: 'Manufacturer'});
});

router.get('/Manufacturerform ', function(req,res, next){
  res.render('ManfacturerLandingPage', { data: results });
});


 //<!-- connection.query('select * from table name  WHERE colume=?',[req.session.instudy], function (error, results, fields) {-->


router.get('/register', function(req, res, next) {
 res.render('RegristrationPage', { title: 'Regristration' });
});

router.post('/register-process', function(req, res, next) {
    connection.query('INSERT INTO users (email,password,first_name,last_name,phone,company_name,price, comments,Quantity) values(req.body.lastname,req.body.passwordinput, req.body.email, req.body.phone, req.body company_name, req.body street, req. body state, req.body country,req.body industry, req.body radio ')
});


router.get('/Manufacturer', function(req, res, next) {
 res.render('ManufacturerLandingPage', { title: 'Manufacturer' });
});
router.post('/request project', function(req, res, next) {
    connection.query('post INTO users (first_name,last_name, email,phone,company_name,asking price,comments,Quantitys) values(req.body.First Name, req.body Last Name req.body.email, req.body.phone, req.body.company_name, req.body asking price, req.body comments, req. body Quantitys, req.body country,req.body industry, req.body radio ')
module.exports = router;