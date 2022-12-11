/* Copywrite 2013 Scanpedia
 * 		This code the intellectual property of 
 * 		Ben Muircroft (benzmuircroft@gmail.com) 
 * 		& 
 * 		Jon Varley (jon_varley@hotmail.co.uk)
 * 
 * Private Licence
 * 		No code (not including third party scripts) can be used and/or 
 * 		copied by anyone not with out written and signed concent from
 * 		both Ben Muircroft and Jon Varley.
 * 
 * Contributors
 * 		Fabio Gangarossa on Server configuration, Node.js and Lib Cario setup.
 * 
 * Additional ownerships and copywrite for sub sections of this project 
 * listed below are property of their named owners and are to be used both by
 * Scanpedia project and their respective owners only unless written 
 * permission from the respective owner is given.
 * 		None.
 * 
 */
var express = require('express')
  , http = require('http')//, https = require('https')
  , app = express()
  , util=require("util")
  , colors=require("colors")
  , forget = require('socket.io/lib/stores/memory')
  , $ = require('jquery');
http.globalAgent.maxSockets = 100000;//https.globalAgent.maxSockets = 100000;








app.all('/',function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");res.header("Access-Control-Allow-Headers","X-Requested-With");next();
  });

var flash=false;

app.get('/*',function(req,res,next){
  if(req.method==='GET'&&req.headers.referer.indexOf('http://scanpedia.com/')===0&&req.url==='/crossdomain.xml'){
    console.log(blu('/crossdomain.xml'));
    flash=true;
    var body='<?xml version="1.0"?><!DOCTYPE cross-domain-policy SYSTEM "/xml/dtds/cross-domain-policy.dtd"><cross-domain-policy> <allow-access-from domain="scanpedia.com" to-ports="8002" secure="false"/></cross-domain-policy>';
    console.log(wht(body));
    res.writeHead(/*200,{'Content-Length':body.length,*/{'Content-Type':'text/x-cross-domain-policy'});
    res.write(body);
    res.end();
    }
  else if(req.method==='GET'){console.log(red(req.headers.referer+' '+req.url));/*console.dir(req);*/}
  });

/*app.get('/socket.io/1/',function(req, res){
  console.log('/<?!------------------------------');
  console.dir(req);
  //res.send('hello world');
});
*/


//console.log('ben'+document.location.href);

//var options={
//  key: fs.readFileSync('/home/engine/ssl.key'),
//  cert: fs.readFileSync('/home/engine/ssl.cert')
//  };

//var server = http.createServer(app);
var io = require('socket.io').listen(8002);//var io = require('socket.io').listen(server);
io.configure(function(){
    io.set('store', new forget());
    io.set('log level', 2);
    io.set('browser client minification', true);  
    io.set('browser client etag', true);          
    io.enable('browser client gzip');
    //io.set('flash policy port','843');
    //io.set('heartbeat timeout',300);
    //io.set('heartbeat interval',60);
    io.set('close timeout', 60*60*24);
    io.set('transports', ['websocket','htmlfile','xhr-polling','jsonp-polling','flashsocket']);
});







  
  
  



//var one=0;
io.sockets.on('error', function (reason){
  console.error('Unable to connect Socket.IO', reason);
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

console.log('...');
var scanpedia=require('../private_js/p.scanpedia.js')(io);


