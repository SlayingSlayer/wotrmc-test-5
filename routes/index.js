//var express = require('express');
//var router = express.Router();

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



var test = 0;




router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

//module.exports = router;

//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 3000');

// router.get('/test', function(req, res, next) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   fs.readFile('./index.html', null, function(error, data) {
//     if(error) {
//       res.writeHead(404);
//       res.write("File not found");
//     } else {
//       res.write(data);
//     }
//     res.end();

//   })
//}



