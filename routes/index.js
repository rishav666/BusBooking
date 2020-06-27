var express = require('express');
var router = express.Router();
const User = require('../models/User');
  const Bus = require('../models/Bus');
  const Traveller=require('../models/Traveller')
const bcrypt = require('bcrypt');
const passport = require('passport');




const path = require('path');





/* GET home page. */

router.get('/', function(req, res) {
  res.redirect('/signup')
  // res.render('index', { title: 'Express' });
});




router.get('/login', function(req, res) {
  res.sendFile(__dirname+'/frontpage/login.html');
});
router.get('/signup', function(req, res) {
  res.sendFile(__dirname+'/frontpage/signup.html');
});
router.post('/signup',(req,res)=>{
  const {name,email,password,phone} = req.body;
  const newUser= new User({
    name,
    email,
    password,
    phone
  });
  console.log(newUser);


  bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()

      .then(user=>{
        res.redirect('./login');
      })
      .catch(err=> console.log(err));
    });
  });
});

router.post('/login',(req,res,next)=>{
  passport.authenticate('local',{
    successRedirect:'/dashboard',
    failureRedirect:'/login',

  })(req,res,next);
})



router.get('/dashboard',(req,res,next)=>{
res.redirect('http://localhost:3000/Bookticket')
})

// router.get()
router.get('/data/busdata', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});




router.post('/traveller/post',(req,res)=>{
  console.log(req.body);
  const value=req.body;
  console.log(value);
req.body.map(x=>{

  const newTraveller= new Traveller({
    name:x.name,
    age:x.age,
    gender:x.gender,
    busid:x.busid
  })

  newTraveller.save()

})
})


module.exports = router
