module.exports = function (url,sockets,ports,app){
	





/*
The MIT License (MIT)

REWIRE.io Copyright (c) 2013 benzmuircroft benzmuircroft@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


//ANSI console colors
function RED(col){return '\033[1;37;41m'+col+'\033[0;36;40m';}
function red(col){return '\033[1;31;40m'+col+'\033[0;36;40m';}
function yel(col){return '\033[1;33;40m'+col+'\033[0;36;40m';}
function wht(col){return '\033[1;37;40m'+col+'\033[0;36;40m';}
console.log(' '+RED('RE')+wht('WIRE')+wht('.io ')+yel(' Hello World.'));
console.log('Opening all sockets...');


var polport=843;
if(url.indexOf('@')!==-1){
	polport=url.split('@');
	url=polport[0];
	polport=parseInt(polport[1]);
	}


var pf=require('policyfile').createServer(['http://'+url,url,url+':*']);pf.listen(polport,function(){console.log(wht('policy file')+' listening on port:'+polport)});

//----------On first install edit these items
//location of your node modules
var $=require('jquery'),
		json = require('json-stringify-safe');
		json.parse=require('try-json-parse');
var WebSocketServer = require('ws').Server;
//done edits





//array control
function pull(arr,val){for(var i = 0, j = 0, l = arr.length; i < l; i++){if(arr[i]!==val){arr[j++]=arr[i];}}arr.length=j;}
if(!Array.prototype.every){Array.prototype.every=function(fun){var len = this.length;if(typeof fun!="function")throw new TypeError();var thisp=arguments[1];for(var i=0;i<len;i++){if(i in this &&!fun.call(thisp,this[i],i,this))return false;}return true;};}

		
var ss={};var s={};

var env='web';
var HANDSHAKEN=0;



function exists(socket,i,arr){
	//console.log((s[socket]!==undefined)+' s['+socket+'] exists? REFRESH==='+REFRESH);
	return (s[socket]&&s[socket]!==undefined);
	}
function ready(socket,i,arr){
	//console.log((s[socket].readyState===1)+' s['+socket+'] ready? REFRESH==='+REFRESH);
	return (s[socket].readyState===1);
	}






//console.log(sockets,ports);
var m=sockets[0];//master
var m_port=ports[0];
var w=sockets;pull(w,w[0]);//workers
var w_ports=ports;pull(w_ports,w_ports[0]);
sockets.unshift(m);
ports.unshift(m_port);
//console.log(sockets,ports);


var REFRESH=0;//browser refresh error fix


var ONCE=0;//POWER ONCE





//setup master



if(!ss[m]||!ss[m]._server){
	ss[m]=new WebSocketServer({port:m_port});
	ss[m].on('connection',function(soc){
		ONCE=0;
		ONCE=m;
		s[m]=soc;
		s[m].sid=m;
		console.log(wht('s[')+red(m)+wht(']')+' open (the master socket)');
		s[m].on('message', function(_){
			_=json.parse(_);
			//console.dir(_);
			if(s[m].env!=='swf'&&_.func==='FLASH'){
				s[m].env='swf';
				sockets=[m];//reduce sockets if connected to swf
				if(_.data.nickname==='not_set'||_.data.nickname===''||_.data.nickname===undefined){
					console.log(RED('[warn]')+wht(': data.nickname not_set. Your just a flash port and will be left out of all broadcasts!'));
					}
				else{
					console.log(wht('s[')+red(m)+wht(']')+' nicknamed: '+yel(_.data.nickname));
					s[m].nickname=_.data.nickname;
					}
				console.log(yel('env')+'='+RED('swf'));
				REFRESH=1;
				env='swf';
				power();
				}});
		/*s[m].on('close',function(){ss[m]=null;$(w).each(function(i,v){ss[v]=null;});});*/
		if(sockets.every(exists)&&sockets.every(ready)&&(REFRESH===0||env!=='swf')&&(ONCE===sockets.length)){REFRESH=1;s[m].env='web';power();}
		});}
else if(sockets.every(exists)&&sockets.every(ready)&&(REFRESH===0||env!=='swf')&&(ONCE===sockets.length)){REFRESH=1;s[m].env='web';power();}




//setup workers

$(w).each(function(i,v){
	if(!ss[v]||!ss[v]._server){
		ss[v]=new WebSocketServer({port:w_ports[i]});
		ss[v].on('connection',function(soc){
			ONCE=v;
			s[v]=soc;
			s[v].sid=v;
			s[v].env='web';
			console.log(wht('s[')+yel(v)+wht(']')+' open (a worker socket)');
			console.log(ONCE+'___'+sockets.length);
			if(sockets.every(exists)&&sockets.every(ready)&&(ONCE===sockets.length)){power();}
			});}
	else if(sockets.every(exists)&&sockets.every(ready)&&(ONCE===sockets.length)){power();}
	});











function power(){console.log(wht('>')+yel('>')+red('POWER')+yel('<')+wht('<')+' '+RED('[All sockets alive]'));
	$(sockets).each(function(i,v){
		//PORT NOT NEW CLIENT
		if(v!==m){s[v].nickname='_port';}
		var ii=v;
		console.log('Attaching API to '+wht('s[')+((v!==m)?yel(v):red(v))+wht(']'));
		//============================================================================================
    	//API WHEN
   		s[v].WHEN=[];
   		s[v].WHEN['sid']=v;
    	//API SAY
   		s[v].WIRE=function(func,data){console.log(RED('WIRE '+func));
   			var _={func:func,data:data};
   			this.send(json(_));
   			return;}
    	//API SAY
    	s[v].SAY=function(func,data,to){
    		ss[ii].broadcast = function(){
    			for(var oo in ss[ii].clients){
    				var nn=ss[ii].clients[oo].nickname;
    				var cl=ss[ii].clients[oo];
    				console.log(nn);
    				if(to){if(to.indexOf(nn)!==-1&&cl.nickname!=='_port'){
    					var _={func:func,data:data,to:nn,from:ws.nickname};
   						//console.dir(_);
   						if(cl.nickname!=='_port'){cl.send(json(_));}
    					}}}};
			ss[ii].broadcast();
			return;
   			};
   		//API SHOUT func, nickname who about, leave user out or bypass to everyone
    	s[v].SHOUT=function(func,data){
   			ss[ii].broadcast = function(){
    			if(data.rooms){
    				for(var oo in ss[ii].clients){
    					var nn=ss[ii].clients[oo].nickname;
    					var cl=ss[ii].clients[oo];
    					var _={func:func,data:data,client:cl,room:'?',to:nn,from:s[ii].nickname};
    					for(var r in data.rooms){
    						_.data.room=data.rooms[r];
    						if(data.not){if(data.not.indexOf(nn)===-1&&cl.nickname!=='_port'&&cl.ROOMS.indexOf(_.data.room)!==-1){
    							cl.send(json(_));
    							}}
    						else{
    							/*-----------------------------------------------------------------*///console.log((cl.nickname!=='_port'&&cl.ROOMS.indexOf(_.data.room)!==-1)+' --> '+(cl.nickname+'_'+cl.ROOMS.indexOf(_.data.room)+'_'+_.data.room+'_'+cl.ROOMS));
    							if(cl.nickname!=='_port'&&cl.ROOMS.indexOf(_.data.room)!==-1){cl.send(json(_));}
    							}
    						}};}
    				else{
    					for(var oo in ss[ii].clients){
    						var nn=ss[ii].clients[oo].nickname;
    						var cl=ss[ii].clients[oo];
    						var _={func:func,data:data,client:cl,to:nn,from:s[ii].nickname};
    						if(data.not){if(data.not.indexOf(nn)===-1&&cl.nickname!=='_port'){
    							cl.send(json(_));
    							}}
    						else{if(cl.nickname!=='_port'){cl.send(json(_));}}
    						};}}	;
				ss[ii].broadcast();
				return;};
   		//API PASS ON SAY_TO FROM CLIENT
   		s[v].WHEN['SAY']=function(_){//console.log('SAY passing data... '+_.data.to);
   			s[v].SAY(_.data.pass,_.data.data,_.data.to);
   			};
   		//API ROOMS
   		s[v].ROOMS=[];
		//API JOIN
   		s[v].JOIN=function(room){//console.log('push '+this.ROOMS);
   			if(this.ROOMS.indexOf(room)===-1){this.ROOMS.push(room);}
   			this.WIRE('ROOMS',{rooms:this.ROOMS});
   			return;}
   		//API LEAVE
   		s[v].LEAVE=function(room){//console.log('pull '+this.ROOMS);
   			pull(this.ROOMS,room);
   			this.WIRE('ROOMS',{rooms:this.ROOMS});
   			return;}
		//API ROOMS
   		s[v].WHEN['ROOMS']=function(_){//console.log('ROOMS: '+this.ROOMS);
   			var r=_.rooms;
   			if(r){for(var x=0;x<r.length;x++){
   				s[v].JOIN(r[x]);
   				}
   			return;}}
   		//API CONN
   		s[v].WHEN['CONN']=function(_){//console.log('CONN: s['+this.sid+']');
   			//console.log(wss.clients);
   			//console.log(RED(s));console.dir(s[v]);console.log('-------------------------');
   			//we could get all other users? to show users already online before you
   			if(_.func!=='private.connect'){s[v].SHOUT(_.func,{'nickname':_.nickname,'not':_.not});}//func,user,leave.me.out, data for exra info
   			else{s[v].nickname=(_.nickname!=='not_set')?_.nickname:'_port';
   				if(_.nickname==='not_set'){console.log(RED('[warn]')+wht(': data.nickname not_set. Your just a bunch of ports and will be left out of all broadcasts!'));}else{console.log(wht('s[')+red(m)+wht(']')+' nicknamed: '+yel(_.nickname));}
   				}
   			return;}
   		//
   		if(v===m){
   			s[m].WHEN['HANDSHAKEN']=function(){HANDSHAKEN=1;};
   			if(HANDSHAKEN===0){console.log('Sending HANDSHAKE..');s[m].send('HANDSHAKE');}
   			}
   		//
   		if(s[v].env==='swf'){s[v].WIRE('flash.connect',{'nickname':s[v].nickname,'testing':123});}
   		
		});//}
	//API^
   	//============================================================================================
   	//============================================================================================
   	//============================================================================================
   	//============================================================================================
	
	//s[4].WIRE('func',{data:'simple'});																							//client - sever cup & string
	
	//s[4].SAY('func',{data:'simple'},to:['user0','user1']);															//say something to a few people
	
	//s[4].SHOUT('func',{simple:data,not:[nickname,'user0'],rooms:['room0','room1']});		//shout something as a broadcast to rooms leaving one other user out
	
	//s[4].SHOUT('func',{simple:data,not:[nickname,'user0']});												//shout as a broadcast to all users leaving one other user out
	
	//s[4].SHOUT('func',{simple:data});																						//shout to all users including self
	
	//s[4].WHEN['func']=function(_){console.dir(_);}																	//all custom events
	
	//s[4].WHEN['func']=null;																											//don't pile up functions
	
	//s[4].JOIN('room0');																												//join a room
	
	//s[4].LEAVE('room0');																												//leave a room
	
	
	//#####################################################################################[START]
	console.log(wht('[START]:')+RED(' '+app+' '));
	require('../private_js/'+app+'')(ss,s);
	//#######################################################################################[END]
    //===========================================================================================
    //===========================================================================================
    //===========================================================================================
    //===========================================================================================
    /*API WHEN*/
   $(sockets).each(function(i,v){
   		s[v].on('message', function(_){
   			console.log('RAW:: '+_+this.sid);
   			_=json.parse(_);
   			if(_.func){
   				if(_.func==='SAY'){
    				//console.log('SAY catching data... '+_.data.to);
    				this.WHEN['SAY'](_);
    				}
    			else if(_.func==='SHOUT'){
    				var func=_.data.func;
    				delete _.data.func;
    				this.WHEN[func](_.data);
    				}
    			else if(_.func==='HANDSHAKE'){
    				console.log('Replying to Client HANDSHAKE..');s[m].send('HANDSHAKE');
    				}
    			else if(this.WHEN[_.func]){
    				this.WHEN[_.func](_.data);
    				}
    			else{
    				console.log(red('NO EVENT: ')+_.func);console.dir(_);
    				}}
    		else{console.log(red('NO _.func! '));console.dir(_);}
    	});});
	
	}//power










}