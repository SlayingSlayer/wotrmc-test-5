var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('/views/index.html', null, function(error, data) {
    if(error) {
      response.writeHead(404);
      response.write("File not found");
    } else {
      response.write(data);
    }
    response.end();

  })
});

module.exports = router;
