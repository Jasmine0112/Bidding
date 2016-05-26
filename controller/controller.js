var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: "Rasheed08",
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
  res.render('index', { title: 'Express' });
});

<!--note to self put hbs file name int he section after render. hsb ending needed-->
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Map' });
});

router.get('/buyer', function(req, res, next) {
  res.render('UserlandingPage', { title: 'Buyer' });
});

router.get('/Manufacturer', function(req, res, next) {
//	connection.query('select * from table name  WHERE colume=?',[req.session.instudy], function (error, results, fields) {

console.log(req.session)
  res.render('ManfacturerLandingPage', { data: results });

	//})
});

router.get('/Regristration', function(req, res, next) {
  res.render('Regristrationpage', { title: 'Regristration' });
});

router.post('/Regristration', function(req, res, next) {
	connection.query('INSERT INTO users (Insert all form fields but a common each) values(req.body value name')
 });

router.get('/login', function(req, res, next){

  res.render('login', { title: 'Sign In' });

});


router.post('/login-process', function(req, res, next){


//res.send("Got form")
//  res.render('login', { title: 'Sign In' });


///  Get the login form contents
console.log(req.body);

/// Check if the username and password is in the data to see if this is a valid user
connection.query("SELECT * FROM user_regristration WHERE email=? AND password=?", [req.body.email, req.body.password], function(err,result){

console.log(err)
console.log(result);

if(result.length>0){
        /// If it is a valid user then show them either the manufacturer page or the creator custom page

        req.session.logged_in=true;
        req.session.email=result[0].email;
        req.session.id=result[0].id;

        if(result[0].user_type=="manufacturer"){


          console.log("got manu")
          res.redirect('/Manufacturer');

        }
        if(result[0].user_type=="creator"){
          res.redirect('/buyer')
        }


}else{
/// If it is not a valid send them back to the login page (/login)
res.render('login',{user_message:"Invalid Login. Please try again"})

}


});






});


module.exports = router;
