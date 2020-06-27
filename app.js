var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors')

var indexRouter = require('./routes/index');
var busRouter = require('./routes/bus');

//passport confiq
require('./config/passport')(passport)


var app = express();


//React


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use(express.static(path.join(__dirname, 'public')));

//DB
const db=require('./config/keys').MongoURI;
//connect to mongodb
mongoose.connect(db,{useNewUrlParser:true})
    .then(()=>console.log("nogodb connected"))
    .catch(err=> console.log(err))
//body   Parser
app.use(express.urlencoded({extended:false}));
//passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;
