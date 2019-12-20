//var express = require('express');
//var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



var test = 0;


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/test', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, function(error, data) {
    if(error) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }
    res.end();

  })
});

//module.exports = router;

