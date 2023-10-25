var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res, next) {

  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      console.log(data.fact);
      res.render('cat/fact', { title: 'Cat Facts', catFact: data.fact }); 
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Error fetching cat fact'); 
    });
});