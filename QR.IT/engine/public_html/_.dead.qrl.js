var express = require('express')
  , http/*s*/ = require('http'/*+'s'*/)
  , app = express();
  

http/*s*/.globalAgent.maxSockets = 100000;


var $=require('jquery');

app.all('/',function(req,res,next){res.header("Access-Control-Allow-Origin","*");res.header("Access-Control-Allow-Headers","X-Requested-With");next();});

app.get('/ping', function(req, res){//reconnect
    res.send('pong');
});



  
/*
var options={
  key: fs.readFileSync('/home/engine/ssl.key'),
  cert: fs.readFileSync('/home/engine/ssl.cert')
  };*/

var server = http/*s*/.createServer(/*options,*/app)
  , io = require('socket.io').listen(server);


io.set('log level', 2);
io.set('browser client minification', true);  // send minified client
io.set('browser client etag', true);          // apply etag caching logic based on version number
io.enable('browser client gzip');             // gzip the file




var quickreportit=require('../private_js/p.qrl.js')(io);



server.listen(8001);