var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res) {

   res.render('index', { title: 'Express' });
});



module.export=router;
