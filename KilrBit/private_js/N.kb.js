process.on('uncaughtException', function (err) {
	console.log( "[Inside 'uncaughtException' event] " + err.stack || err.message );
	});


var $=require('../node_modules/jquery'),/*bug fix node-jquery*/getJSON=function(options,callback){var https=require("https");var req=https.request(options,function(res){var buffer='';res.setEncoding('utf8');res.on('data',function(chunk){buffer+=chunk;});res.on('end',function(){try{var data=JSON.parse(buffer);callback(data,res.statusCode);}catch(e){console.log(e);}});});req.end();};
var Canvas = require('../node_modules/canvas');
var fs=require("fs");
//	### ----------------- ###
//	###     little.js     ###
//	### ----------------- ###
var Time=function(){
	this.v  =undefined;//value object
	this.ev =undefined;//time event
	this.on =function(f,v,time){this.v=v;function dof(){f();};this.ev=setTimeout(function(){dof();},time);};//timeout
	this.iv =function(f,v,time){this.v=v;function dof(){f();};this.ev=setInterval(function(){dof();},time);};//interval
	this.x  =function(){clearTimeout(this.ev);clearInterval(this.ev);};//clear
	}
//$.fn.focusEnd=function(){$(this).focus();var tmp=$('<span />').appendTo($(this)),node=tmp.get(0),range=null,sel=null;if(document.selection){range=document.body.createTextRange();range.moveToElementText(node);range.select();}else if(window.getSelection){range=document.createRange();range.selectNode(node);sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);}tmp.remove();return this;}
function int(n){return parseInt(n);}
Array.prototype.pull=function(){var what,a=arguments,L=a.length,ax;while(L&&this.length){what=a[--L];while((ax=this.indexOf(what))!==-1){this.splice(ax,1);}}return this;};
Array.prototype.has=function(x){return this.indexOf(x)!==-1;};//['find','a','string','or',obj,'match'].has('match')
String.prototype.rem=function(x){try{return this.replace(new RegExp(x,'g'),'');}catch(err){return this.replace(x,'');}}//'sentence with word and extra words'.rem('word');
String.prototype.is=function(x){return $(x).hasClass(this);}//'class'.is(this) //'el'.is('.el')
String.prototype.in=function(x){return (x.indexOf(this)!==-1||this.indexOf(x)!==-1);};//console.log(('word').in('sentence with word'))
String.prototype.like=function(x){function _like(z){var v=x;var r=false;if((v.charAt(v.length-1)==='%')&&(v.charAt(0)==='%')){r=(z.indexOf(v.replace('%','').replace('%',''))!==-1);return r;}if(v.indexOf('%')===v.length-1){v=v.replace('%','');for(var i=0;i<v.length;i++){if(z.charAt(i)===v.charAt(i)){r=true;}else{r=false;break;}}return r;}else if(v.indexOf('%')===-1||v.indexOf('%')===0){v=v.replace('%','');z=z.slice(-v.length);for(var i=v.length-1;i>=0;i--){if(z.charAt(i)===v.charAt(i)){r=true;}else{r=false;break;}}return r;}}var y=x;if(y.toString().indexOf(',')!==-1){x=this.toString();var a=false;for(var j=0;j<y.length;j++){y[j]=y[j].toString();if(_like(y[j])){a=j;break;}}return a;}else{y=x.toString();x=this.toString();return _like(y);}}
String.prototype.or=function(x){var t=this;x=x.toString().split(',');var r=t;for(var i=0;i<x.length;i++){r=(t.indexOf(x[i])!==-1)?x[i]:t;}return r;}
Array.prototype.avgstr=function(x,pos){var y=this;var m=(x.indexOf('-')===0)?0:1;x=(['+','-'].has(x.charAt(0)))?x.substr(1,x.length):x;var p=0;for(var i=0;i<y.length;i++){p=(pos===-1)?y[i].length+1:pos;if(m===1){y[i]=(y[i].indexOf(x)!==p)?y[i].substring(0,p)+x+y[i].substring(p,y[i].length):y[i];}else{y[i]=(y[i].indexOf(x)===p)?y[i].slice(p-x.length, p)+y[i].slice(p+x.length):y[i];}}return y;}
Array.prototype.spil=function(x,max){if(this.length>=max){this.splice(0,this.length-max);this.shift();this.push(x);}else{this.push(x);}return this;}
//$.fn.xcss=function(x){var css=$(this).attr('style');css=css.split(';').avgstr('+ ',0);for(var i=0;i<x.length;i++){var like=(x[i]+':%').like(css);if(like!==false){css.pull(css[like]);}}$(this).attr({'style':css.join(';')});}
//$.fn.mass=function(size,msec,c){msec=msec/1000;var t___=new Time();$(this).css({'-webkit-transform':'scale('+size+')','-moz-transform':'scale('+size+')','-o-transform':'scale('+size+')','-ms-transform':'scale('+size+')','transform':'scale('+size+')','-webkit-transition':'all '+msec+'s linear','-moz-transition':'all '+msec+'s linear','-o-transition':'all '+msec+'s linear','-ms-transition':'all '+msec+'s linear','transition':'all '+msec+'s linear'});if(size===1){t___.on(function(){$(t___.v).xcss(['-webkit-transform','-moz-transform','-o-transform','-ms-transform','transform','-webkit-transition','-moz-transition','-o-transition','-ms-transition','transition']);},this,msec*1000);}if(c){c.call(this);}return this;}
Array.prototype.last=function(){return (this.length!==0)?this[this.length-1]:-1;}
Array.prototype.append0s=function(big){if(this.length<big.length){var dif=big.length-this.length;for(var i=0;i<=dif-1;i++){this.unshift(0);}return this;}};//mathch lendth by adding zeros at start
Array.prototype.fill= function(what, L){while(L) this[--L]= what;return this;}
//	### ----------------- ###
//	### ----------------- ###
//	### ----------------- ###







function KILRBIT(){
	require('../private_js/s.REWIRE2.js')('137.74.145.40',8005,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],[8006,8007,8008,8009,8010,8011,8012,8013,8014,8015,8016,8017,8018,8019,8020,8021],'S.kb.js',G);
	}




var JSON=require('../node_modules/JSON');
/*{
	https:require('https')
,	parse:require('../node_modules/try-json-parse')
,	stringify:require('../node_modules/json-stringify-safe')
,	queryify:function(obj,sep,eq,name){var q=function(v){switch(typeof v){case 'string':return v;case 'boolean':return v?'true':'false';case 'number':return isFinite(v)?v:'';default:return '';}};sep=sep||'&';eq=eq||'=';if(obj===null){obj=undefined;}if(typeof obj==='object'){return Object.keys(obj).map(function(k){var ks=encodeURIComponent(q(k))+eq;if(Array.isArray(obj[k])){return obj[k].map(function(v){return ks+encodeURIComponent(q(v));}).join(sep);}else{return ks+encodeURIComponent(q(obj[k]));}}).join(sep);}if(!name)return '';return encodeURIComponent(q(name))+eq+encodeURIComponent(q(obj));}
,	clone:function(o){return JSON.parse(JSON.stringify(o));}
,	get:function(url,callback){process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";var req=JSON.https.request(url,function(res){var buffer='';res.setEncoding('utf8');res.on('data',function(chunk){buffer+=chunk;});res.on('end',function(){try{var data=JSON.parse(buffer);callback(data,res.statusCode);}catch(e){console.log(e);}});});req.end();}
,	post:function(url,path,data,type,callback){if(!callback){callback=type;type=undefined;}data=JSON.stringify(data);var options={hostname:url,path:path,method:'POST',headers:{'Content-Type':type||'application/json','Content-Length':data.length}};console.dir([options,data]);var req=JSON.https.request(options,function(res){var buffer='';res.setEncoding('utf8');res.on('data',function(chunk){buffer+=chunk;});res.on('end',function(){try{var data=JSON.parse(buffer);callback(data,res.statusCode);}catch(e){console.log(e);}});});req.write(data);req.end();}
	};*/



var L={//expireing array for logins
	timeout:3600000
,	db:[]
,	delay:5
,	scheduleGC:function(){if(L.nextGC){return;}var ts=L.db.length?L.db[0][0]-Date.now()+L.delay:L.timeout;L.nextGC=setTimeout(L.gc.bind(L),ts);if(L.nextGC.unref){L.nextGC.unref();}}
,	gc:function(){while(L.db.length&&L.db[0][0]<Date.now()){L.db.shift();}L.nextGC=null;L.scheduleGC();}
,	push:function(elm){if(!L.db.length){L.scheduleGC();}L.db.push([Date.now()+L.timeout,elm]);}
,	shift:function(){var elm=L.db.shift();if(L.nextGC){clearTimeout(L.nextGC);L.nextGC=null;}L.scheduleGC();return elm&&elm[1];}//remove the first
,	all:function(){var db=JSON.clone(L.db);for(var i=0;i<db.length;++i){db[i]=db[i][1];}return db;}//to array
	};


var G={
	cache:false
,	million:[404]
,	login:L
,	BAN:{ip:function(s,msg,f,d){console.log('BAN',msg,f,d);return;}}
	};




//function crashDumpCB(){
	if(!G.cache){KILRBIT();}
	else{
		require('../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(err,KB){
			console.dir({'mongodb(ERR)':err});
			kb=KB;
			million=kb.collection('million');
			console.log('loading db cache..');
			million.find({$query:{},$orderby:{_id:1}}).toArray(function(e,r){
				console.log(e||'done');
				G.million=G.million.concat(r);
				KILRBIT();
				});});}//}


var Ə={
	gmail:require("../node_modules/nodemailer").createTransport({service:'Gmail','auth':{'user':'login.killrbit@gmail.com','pass':'a76703455784d52586270513d3d'}})
,	crashDump:function(d,cb){
		Ə.gmail.sendMail({
			subject:'CRASH_DUMP'
		,	from:'login.killrbit@gmail.com'
		,	to:'benzmuircroft@gmail.com'
		,	html:d
			},function(e,r){cb(e?true:false);});
		}}




/*fs.readFile('../logs/million.log',function read(e,d){
	fs.writeFile('../logs/million.log','',function refresh(e){
		Ə.crashDump(d,crashDumpCB);
		});});*/
