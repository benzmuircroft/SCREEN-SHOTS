module.exports = function (ss,s,PARTITION,uid){
	
	
	//console.log(CLI);
	

function RED(col){return '\033[1;37;41m'+col+'\033[0;36;40m';}
function red(col){return '\033[1;31;40m'+col+'\033[0;36;40m';}
function yel(col){return '\033[1;33;40m'+col+'\033[0;36;40m';}
function wht(col){return '\033[1;37;40m'+col+'\033[0;36;40m';}
//	
var nodemailer = require("../public_html/node_modules/nodemailer");var gmail=nodemailer.createTransport("SMTP",{service:'Gmail','auth':{'user':'scanpedia.com@gmail.com','pass':'lrlsuuaajhvibyvy'}});
//
var fs = require('fs');
//
var Canvas = require('../public_html/node_modules/canvas');
//
//var atob = require('../public_html/node_modules/atob');//decode base 64
var yenc=require('../public_html/node_modules/yenc/yenc.js');
//
var JSONC=require('../public_html/node_modules/jsoncomp/src/JSONC.js');
//
var qr = require('../public_html/node_modules/qr.js');
//
var anyDB = require('../public_html/node_modules/any-db');
//
var scanipedia_sql = anyDB.createConnection('mysql://quickrep_user:53S){~Fl6NJW@quickreport.it/quickrep_scanipedia',function(e,r){console.log('SQL: '+e+' '+r);});
//var SendGrid=require('../public_html/node_modules/sendgrid').SendGrid;
//var sendgrid=new SendGrid('benzmuircroft','Summers;;::7');
var FTPClient = require('../public_html/node_modules/ftp');
var ftpkey={
    host    : "scanpedia.com",
    user    : "quickrep",
    port    : 21,
    password: "James;;;:::Bond007"
    }
//var natural=require("../public_html/node_modules/synonym/node_modules/natural"),wordnet=new natural.WordNet();
var WatchJS=require('../public_html/node_modules/watchjs'),
    watch=WatchJS.watch,
    unwatch=WatchJS.unwatch,
    callWatchers=WatchJS.callWatchers;
var LOGLEVEL=1;
//
function hexE(data,line){data=data.toString();if(LOGLEVEL>1){console.dir(data);console.log(data+' :'+line);}var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
//
function hexD(data,line){data=data.toString();if(LOGLEVEL>1){console.dir(data);console.log(data+' :'+line);}var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
 

var mw = require('../public_html/node_modules/memwatch');
mw.on('leak',function(info){console.log('LEAK: ',info);});
mw.on('stats',function(info){console.dir(info);});
mw.on('gc',function(trash){console.dir({'trash':trash})});

	
	
	
	


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	var s_room='home'
		, once=0
		, n12
		, qrcode
		, cells
		, num
		, qrsize
		, canvas
		, ctx
		, img
		, bg
		, m25={'n':10,'m':0}
		, mb={'n':10,'m':0}
		, way25='up'
		, wayb='down'
		, editing=false;
	
	
	
	
	
	var CLIENT={
	
	scanpedia:function(){console.log('scanpedia');
	
	//==========================================================LOGIN & REGISTER
	
	s[1].WHEN['>logmem']=function(_){
  		scanipedia_sql.query("UPDATE login SET mem='"+_.mem+"' WHERE (name='"+_.ename+"' OR email='"+_.ename+"') AND (pass='"+_.pass+"')");
  		};


	s[1].WHEN['?login']=function(_){
		console.log('--'+_.sock+' =?login');
		var result='not_set';
  		scanipedia_sql.query("SELECT pid,name,ref,mem FROM login WHERE (name='"+_.ename+"' OR email='"+_.ename+"') AND (pass='"+_.pass+"' OR mem='"+_.mem+"')").on('row',function(r){
      		console.log(r.ref);
      		if(r.ref==='a'){
        		result='active';console.log(result);
        		//s[1][uid].LEAVE(s[1].nickname);
        		//s[1].nickname=_.uid;
        		//s[1].JOIN(s[1].nickname);
        		s[1].clientname=hexD(r.name);
        		console.log(wht('s[')+red(1)+wht(']')+' clientnamed: '+yel(hexD(r.name)));
        		s[1].WIRE('!login',{'name':r.name,'pid':r.pid});
        		}
      		else{
        		result='unverified';console.log(result);
        		s[1].WIRE('!login',{'result':'unverified'});
        		}
    	}).on('end',function(){
     		if(result==='not_set'){
        	s[1].WIRE('!login',{'name':'not_set'});
        	}});};
        
    
    
    
    
	s[1].WHEN['scanpedia_registration_check']=function(_){
		console.log(' =scanpedia_registration_check');
  		var result='not_set';
  		scanipedia_sql.query("SELECT * FROM login WHERE (email='"+_.remail+"' OR name='"+_.rname+"')").on('row',function(r){
    		//console.log(r.email+' \ '+_.remail);
    		if(r.email===_.remail){
      			result='email_exists';
      			s[1].WIRE('scanpedia_registration_result',{'result':result});
      			}
    		else if(r.name===_.rname){
      			result='name_exists';
      			s[1].WIRE('scanpedia_registration_result',{'result':result});
      			}
    	}).on('end',function(){
    		if(result==='not_set'){
      			function _ref(){var text='';var possible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';for(var i=0;i<10;i++){text+=possible.charAt(Math.floor(Math.random()*possible.length));}return text;}
      			var ref=_ref();
      			scanipedia_sql.query("INSERT INTO login (email,name,pass,ref) VALUES ('"+_.remail+"','"+_.rname+"','"+_.rpass+"','"+hexE(ref,104)+"')");
      			gmail.sendMail({
      				subject:'Verify your account',
      				from:'scanpedia.com@gmail.com',
      				to:hexDecode(_.remail,108),
      				html:
                          '<div class="PAGE"style="position:relative;height:300px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:10px;text-align:left;">'+
                          '<h1>Scanpedia</h1>'+
                          'Click this <b><a href="http://scanpedia.com?ref='+ref+'">link</a></b> to complete your registration.'+
                          '<br><br>'+
                          '<b>Have a nice day!</b>'+
                          '<br><br>'+
                          'The Scanpedia Team'+
                          '<br><br>'+
                          '<br><br>'+
                          '<table><tbody><tr><td style="background:#eeeeee;width:320px;border-bottom:5px solid #FF0000;">'+
                          '<div style="color:#C8C8C8;margin:auto;width:320px;font-size:10px;">'+
                          '<b style="color:#999999;">Disclaimer:</b>'+
                          '<br><br>'+
                          'This e-mail, its content and any files transmitted with it are intended solely for the addressee(s) and may be legally privileged and/or confidential. '+
                          'Access by any other party is unauthorised without the express written permission of the sender.'+
                          'If you have received this e-mail in error you may not copy, forward or use the contents, attachments or information in any way.'+
                          'Please delete this e-mail from your system and contact the sender on:&nbsp;+44 (0)7729 455 151&nbsp; Any quotation contained in this '+
                          'e-mail is subject to our standard terms and conditions of sale, a copy of which is available on request. '+
                          'Although any attachments to this e-mail have been virus checked, the sender cannot accept liability in respect of any virus which has not been detected.'+
                          '<br><br></div></td><td></td></tr></tbody></table>'+
                          '</div>'},function(error,response){if(error){console.log(error+'!!!!!!!!!!!!');}else{console.log("Message sent: " + response.message);}});
                  }});};
                  
                  
    
    
    
    
    
    //==============================================================================================QRs

function qr_gen(){
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'rgba(0,0,0,0.13)':'rgba(255,255,255,0.13)';
      ctx.fillRect((x*num),(y*num),num,num);
      ctx.fillStyle=row[x]?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.5)';
      ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));
      if(x===6&&y===6||x===(cells.length-1)&&y===6||x===6&&y===(cells.length-1)){
        ctx.fillStyle='#000';
        ctx.fillRect((x-6)*num,(y-6)*num,(num*7),(num*7));
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-5)*num,(y-5)*num,(num*5),(num*5));
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,(num*3),(num*3));
        }
      if(y>4&&
         cells[y-0][x-4]===true &&cells[y-0][x-3]===true &&cells[y-0][x-2]===true &&cells[y-0][x-1]===true &&cells[y-0][x-0]===true &&
         cells[y-1][x-4]===true &&cells[y-1][x-3]===false&&cells[y-1][x-2]===false&&cells[y-1][x-1]===false&&cells[y-1][x-0]===true &&
         cells[y-2][x-4]===true &&cells[y-2][x-3]===false&&cells[y-2][x-2]===true &&cells[y-2][x-1]===false&&cells[y-2][x-0]===true &&
         cells[y-3][x-4]===true &&cells[y-3][x-3]===false&&cells[y-3][x-2]===false&&cells[y-3][x-1]===false&&cells[y-3][x-0]===true &&
         cells[y-4][x-4]===true &&cells[y-4][x-3]===true &&cells[y-4][x-2]===true &&cells[y-4][x-1]===true &&cells[y-4][x-0]===true
         ){
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,num*5,num*5);
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-3)*num,(y-3)*num,num*3,num*3);
        ctx.fillStyle='#000';
        ctx.fillRect((x-2)*num,(y-2)*num,num*1,num*1);
        }
      }}return;}
      






function qr_simple(){
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'#000':'#FFF';
      ctx.fillRect((x*num),(y*num),num,num);
      }}return;}
      
      
      
      
function qr_mod(){
  ctx.fillStyle='rgba(225,225,225,0.3)';
  ctx.fillRect(0,0,164,164);
  if(way25==='up'){m25.n=m25.n + 5;if(m25.n>=50){way25='down';}}else{m25.n=m25.n - 5;if(m25.n<=10){way25='up';}}
  if(wayb==='up'){mb.n=mb.n + 5;if(mb.n>=180){wayb='down';}}else{mb.n=mb.n - 5;if(mb.n<=0){wayb='up';}}
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    var c1=Math.floor(Math.random() * cells.length) + 0;
    var c2=Math.floor(Math.random() * cells.length) + 0;
    var c3=Math.floor(Math.random() * cells.length) + 0;
    var c4=Math.floor(Math.random() * cells.length) + 0;
    var c5=Math.floor(Math.random() * cells.length) + 0;
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'rgba('+mb.n+','+mb.n+','+mb.n+',0.'+m25.n+')':'rgba(255,255,255,0.'+m25.n+')';ctx.fillRect((x*num),(y*num),num,num);ctx.fillStyle=row[x]?'rgba('+mb.n+','+mb.n+','+mb.n+',0.'+m25.n+')':'rgba(255,255,255,0.'+m25.n+ 10 +')';ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));
      if(x===c1||x===c2||x===c3||x===c4||x===c5){
        ctx.fillStyle=row[x]?'#000':'#FFF';ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));
        }
      if(x===6&&y===6||x===(cells.length-1)&&y===6||x===6&&y===(cells.length-1)){
        ctx.fillStyle='rgba('+mb.n+','+mb.n+','+mb.n+',1)';//'rgb(127,127,127)';
        ctx.fillRect((x-6)*num,(y-6)*num,(num*7),(num*7));
        ctx.fillStyle='#FFF';//'rgb(255,255,255)';
        ctx.fillRect((x-5)*num,(y-5)*num,(num*5),(num*5));
        ctx.fillStyle='rgba('+mb.n+','+mb.n+','+mb.n+',1)';//'rgb(127,127,127)';
        ctx.fillRect((x-4)*num,(y-4)*num,(num*3),(num*3));
        }
      if(y>4&&
         cells[y-0][x-4]===true &&cells[y-0][x-3]===true &&cells[y-0][x-2]===true &&cells[y-0][x-1]===true &&cells[y-0][x-0]===true &&
         cells[y-1][x-4]===true &&cells[y-1][x-3]===false&&cells[y-1][x-2]===false&&cells[y-1][x-1]===false&&cells[y-1][x-0]===true &&
         cells[y-2][x-4]===true &&cells[y-2][x-3]===false&&cells[y-2][x-2]===true &&cells[y-2][x-1]===false&&cells[y-2][x-0]===true &&
         cells[y-3][x-4]===true &&cells[y-3][x-3]===false&&cells[y-3][x-2]===false&&cells[y-3][x-1]===false&&cells[y-3][x-0]===true &&
         cells[y-4][x-4]===true &&cells[y-4][x-3]===true &&cells[y-4][x-2]===true &&cells[y-4][x-1]===true &&cells[y-4][x-0]===true
         ){
        ctx.fillStyle='rgba('+mb.n+','+mb.n+','+mb.n+',1)';//'rgb(127,127,127)';
        ctx.fillRect((x-4)*num,(y-4)*num,num*5,num*5);
        ctx.fillStyle='#FFF';//'rgb(255,255,255)';
        ctx.fillRect((x-3)*num,(y-3)*num,num*3,num*3);
        ctx.fillStyle='rgba('+mb.n+','+mb.n+','+mb.n+',1)';//'rgb(127,127,127)';
        ctx.fillRect((x-2)*num,(y-2)*num,num*1,num*1);
        }
      }}return;}
    
    
    
    
    
    
    s[4].WHEN['m']=function(_){
  		function numbertwelve(n){n=n.toString();if(n.length<12){var twelve = 12 - n.length;for(var i=1;i<=twelve;i++){n='0'+n;}return n;}else{return n;}}
  		n12=numbertwelve(_.q);//_.qr
  		qrcode = qr('scanpedia.com/'+_.p+'.php?'+n12+'&'+_.u);//_.uid
  		cells = qrcode.modules;
  		num=4;
  		qrsize=cells.length*num;
  		canvas=new Canvas(qrsize,qrsize);
  		ctx = canvas.getContext('2d');
		ctx.patternQuality='fast';ctx.textDrawingMode='glyph';
    	qr_mod();
    	s[4].WIRE('m',{'m':ONEIMG(canvas.toDataURL()),'q':_.q});
  		};
    
    
    
    s[4].WHEN['s']=function(_){
  		function numbertwelve(n){n=n.toString();if(n.length<12){var twelve = 12 - n.length;for(var i=1;i<=twelve;i++){n='0'+n;}return n;}else{return n;}}
  		n12=numbertwelve(_.q);
  		qrcode = qr('scanpedia.com/'+_.p+'.php?'+n12+'&'+_.u);
  		cells = qrcode.modules;
  		num=4;
  		qrsize=cells.length*num;
  		canvas=new Canvas(qrsize,qrsize);
  		ctx = canvas.getContext('2d');
  		qr_simple();
  		s[4].WIRE('s',{'s':ONEIMG(canvas.toDataURL()),'q':_.q});
  		};
  	
  	
  	
   
    function ONEIMG(i){return '1IMG'+yenc.encode(i.replace('data:image/png;base64,',''))+'IMG1'}//move these to REWIRE
	function TWOIMG(i){return '2IMG'+yenc.encode(i.replace('data:image/png;base64,',''))+'IMG2'}
    
    
    
    
    
	//==============================================================NAVIGATION

	
	
	
	//paging
	s[1].WHEN['paging']=function(_){console.dir(_);
		var doterror=0;
		if(_.paging.indexOf('.')===-1){
			if(_.paging.indexOf('user')!==-1){_.paging=_.paging.replace('user','.user');}
			else if(_.paging.indexOf('key')!==-1){_.paging=_.paging.replace('key','.key');}
			else if(_.paging.indexOf('tag')!==-1){_.paging=_.paging.replace('tag','.tag');}
			else if(_.paging.indexOf('group')!==-1){_.paging=_.paging.replace('group','.group');}
			doterror=1;
			}
		/*else if(_.paging.indexOf('.user')!==-1&&_.paging.indexOf('.key')!==-1&&_.paging.indexOf('.tag')!==-1&&_.paging.indexOf('.group')!==-1){//no type!!
			doterror=2;
			scanipedia_sql.query("SELECT pid FROM login WHERE (name='"+hexE(_.paging,292)+"')").on('row',function(r){
				s[1].WIRE('paging',{'paging':r.pid,'type':'user','doterror':doterror});
				});
			scanipedia_sql.query("SELECT type FROM keytags WHERE (title='"+_.paging+"')").on('row',function(r){
				s[1].WIRE('paging',{'paging':_.paging,'type':(r.type===0)?'key':'tag','doterror':doterror});
				});
			scanipedia_sql.query("SELECT gid FROM groups WHERE (groupname='"+_.paging+"')").on('row',function(r){
				s[1].WIRE('paging',{'paging':r.gid,'type':'group','doterror':doterror});
				});
			}*/
		if(_.paging.indexOf('.user')!==-1){
			_.paging=_.paging.replace('.user','');
			scanipedia_sql.query("SELECT pid FROM login WHERE (name='"+hexE(_.paging,305)+"')").on('row',function(r){
				s[1].WIRE('paging',{'paging':r.pid,'type':'user','doterror':doterror});
				});
			}
		else if(_.paging.indexOf('.key')!==-1){_.paging=_.paging.replace('.key','');s[1].WIRE('paging',{'paging':_.paging,'type':'key','doterror':doterror});}
		else if(_.paging.indexOf('.tag')!==-1){_.paging=_.paging.replace('.tag','');s[1].WIRE('paging',{'paging':_.paging,'type':'tag','doterror':doterror});}
		else if(_.paging.indexOf('.group')!==-1){
			_.paging=_.paging.replace('.group','');
			scanipedia_sql.query("SELECT gid FROM groups WHERE (name='"+_.paging+"')").on('row',function(r){
				s[1].WIRE('paging',{'paging':r.gid,'type':'group','doterror':doterror});
				});
			}
		else{//error
			if(doterror!==1){doterror=404;}
			s[1].WIRE('paging',{'paging':1,'type':'group','doterror':doterror});
			}
		};
	
	//
	
	
						 
	var tempv=0;
						 
	
	s[1].WHEN['fnd']=function(_){//console.log('--'+_.sock+' =fqr finding');//get all qr one by one
  		//
  		if(s_room!=='room:'+_.search){s[1].LEAVE(s_room);s_room='room:'+_.search;s[1].JOIN(s_room);console.log('in- '+s_room);}
  		//
  		var search="qr.id";
  		if(_.type==='user'){
  			search="login.pid='"+_.search+"' OR login.name=' "+hexE(_.search,331)+" '";
  			}
  		else if(_.type==='k'){
			search= "qr.kt1='"+hexD(_.search,334.1)+".k' OR "+
					"qr.kt2='"+hexD(_.search,334.1)+".k' OR "+
					"qr.kt3='"+hexD(_.search,334.1)+".k' OR "+
					"qr.kt4='"+hexD(_.search,334.1)+".k' OR "+
					"qr.kt5='"+hexD(_.search,334.1)+".k'";
			
			//search="qr.k LIKE '%."+hexD(_.search,334.1)+".%' OR qr.k='."+hexD(_.search,334.2)+".'";
  			}
  		else if(_.type==='t'){
			search= "qr.kt1='"+hexD(_.search,334.1)+".t' OR "+
					"qr.kt2='"+hexD(_.search,334.1)+".t' OR "+
					"qr.kt3='"+hexD(_.search,334.1)+".t' OR "+
					"qr.kt4='"+hexD(_.search,334.1)+".t' OR "+
					"qr.kt5='"+hexD(_.search,334.1)+".t'";
			//search="qr.t LIKE '%."+hexD(_.search,336)+".%' OR qr.t='."+hexD(_.search,336.1)+".'";
  			}
  		else{//group
 			}
 		var gun={};
 		var bullets=[];
  		scanipedia_sql.query("SELECT login.pid,login.name, qr.id,qr.end,qr.react,qr.win,qr.stock,qr.num,qr.ratio,qr.u,qr.kt1,qr.kt2,qr.kt3,qr.kt4,qr.kt5,qr.scans,qr.d "+
  			 							     "FROM login,qr WHERE login.pid=qr.u AND ("+search+") ORDER BY qr.d DESC LIMIT "+_.off+",15").on('row',function(r){			     	
  			bullets.push(r.id);
			var kt='';
			kt=((r.kt1)?kt=((kt!=='')?(kt+','+r.kt1):r.kt1):kt);
			kt=((r.kt2)?kt+','+r.kt2:kt);
			kt=((r.kt3)?kt+','+r.kt3:kt);
			kt=((r.kt4)?kt+','+r.kt4:kt);
			kt=((r.kt5)?kt+','+r.kt5:kt);
  			//console.log(_.search+' '+search);
  			var omit='';if(_.type!=='group'&&_.search!==1)omit=(_.type==='user')?hexD(r.name,342):hexD(_.search,342.1);
  			gun['_'+r.id]=	{
      				'L':0,/*'qrsize':164,*/'rid':r.id,'react':r.react,'fire':_.fire,
      				'u':r.name,'upid':r.pid,
      				//'k':r.k,'t':r.t,
					'kt':kt,
      				'scn':r.scans,'om':omit,//scans //omit
      				'w':((r.win)?true:false),'stk':r.stock,'num':r.num,'rat':r.ratio//stock // ratio
      				};
    		}).on('end',function(){
    			s[1].WIRE('fire:end',{'fire':_.fire,'bullets':bullets});
				mw.gc();
    			//console.log(_.sock);
    			for(var v in gun){
    				//var ierr=0;
    				var rid=gun[v].rid;
    				var rname=gun[v].u;
    				function numbertwelve(n){n=n.toString();if(n.length<12){var twelve = 12 - n.length;for(var i=1;i<=twelve;i++){n='0'+n;}return n;}else{return n;}}
    				n12=numbertwelve(rid);
    				qrcode=qr('scanpedia.com/b.php?'+n12+'&'+uid);//one more character for uid!
    				cells=qrcode.modules;
    				num=4;
    				qrsize=cells.length*num;
    				canvas=new Canvas(qrsize,qrsize);
    				ctx=canvas.getContext('2d');
    				img=new Canvas.Image;
    				img.onload=function(){
    					ctx.drawImage(img,0,0,164,164);
    					bg=canvas.toDataURL();
    					qr_gen();
						//if(tempv===0){tempv=1;/*console.log(canvas.toDataURL());*//*console.log('\r\n');*/console.log(1+atob(canvas.toDataURL().replace('data:image/png;base64,',''))+1);}
    					gun[v]['img']=ONEIMG(canvas.toDataURL());
    					gun[v]['bg']=TWOIMG(bg);
    					s[_.sock].WIRE('>qr'+_.fire,gun[v]);
    					}
    				img.onerror=function(e){
    					img.onload=function(){
    						ctx.drawImage(img,0,0,164,164);
    						bg=canvas.toDataURL();
    						gun[v]['img']=ONEIMG(bg);
    						gun[v]['bg']=TWOIMG(bg);
    						s[_.sock].WIRE('>qr'+_.fire,gun[v]);
    						}
    					img.src='/home/engine/public_html/img/scanpedia/codes/imgerror.png';
    					};
    				img.src='/home/engine/public_html/img/scanpedia/codes/'+rid+'.png';
    				}//for
    			});//sql
  			};









						 
						 
						 
	//profile image getter / setter
	s[2].WHEN['?cov']=function(_){//get cover
		if(_.el!=='#group_bg'){
  			//uploading
  			if(_.file!=='defaultcover'){
  				var data=_.file.replace(/^data:image\/\w+;base64,/,"");
  				var buffer=new Buffer(data,'base64');
  				fs.writeFile('/home/engine/public_html/img/scanpedia/cover/'+_.pid+'.png',buffer,function(err){
    				canvas=new Canvas(930,200);
    				ctx = canvas.getContext('2d');
    				img = new Canvas.Image;
    				img.onload=function(){
      					ctx.drawImage(img,0,0,930,200);
      					s[2].WIRE('=cov'+_.firec,{'png':ONEIMG(canvas.toDataURL()),'el':_.el});//console.log('_foundcover'+_.firec);
    					}
    				img.src='/home/engine/public_html/img/scanpedia/cover/'+_.pid+'.png';
    				});
   		 			}
  			else{//finding
  				console.log("SELECT name FROM login WHERE pid='"+_.pid+"'");
  				scanipedia_sql.query("SELECT name FROM login WHERE pid='"+_.pid+"' AND pid!='"+(new Date().getTime())+"'").on('row',function(r){
  					fs.exists('/home/engine/public_html/img/scanpedia/cover/'+_.pid+'.png',function(exists){console.log('in');
  					var defaultcover='defaultcover';
  					if(exists===true){defaultcover=_.pid;}
        			canvas=new Canvas(930,200);
        			ctx = canvas.getContext('2d');
       				img = new Canvas.Image;
        			img.onload=function(){
          				ctx.drawImage(img,0,0,930,200);
          				s[2].WIRE('=cov'+_.firec,{'png':ONEIMG(canvas.toDataURL()),'el':_.el,'name':r.name});//console.log('~foundcover'+r.name);
          				}
        			img.src='/home/engine/public_html/img/scanpedia/cover/'+defaultcover+'.png';
      				});});}}
  		else{
    		//console.log("SELECT * FROM groups WHERE (gid='"+_.gid+"' OR groupname='"+_.gid+""'')");
    		scanipedia_sql.query("SELECT * FROM groups WHERE gid='"+_.gid+"'").on('row',function(r){
      			fs.exists('/home/engine/public_html/img/scanpedia/group/'+_.gid+'.png',function(exists){
        			if(exists===true){
          				canvas=new Canvas(930,200);
          				ctx = canvas.getContext('2d');
          				img = new Canvas.Image;
          				img.onload=function(){
            				ctx.drawImage(img,0,0,930,200);
            				s[2].WIRE('=gcov'+_.firec,{'png':ONEIMG(canvas.toDataURL()),'el':_.el,'groupname':r.groupname});//console.log('foundgroupcover'+_.firec);
            				}
          				img.src='/home/engine/public_html/img/scanpedia/group/'+_.gid+'.png';}
          				});});}};
    
    
    
    
    
    
    
    
    
          				
	//profile image getter / setter
	s[3].WHEN['?face']=function(_){
  		var react='not_set';
  		scanipedia_sql.query("SELECT uid,react FROM coverlinks WHERE uid='"+_.pid+"'")
    	.on('row',function(r){react=r.react;})
    	.on('end',function(){
  		if(_.file==='not_upload'){
    		fs.exists('/home/engine/public_html/img/scanpedia/people/'+_.pid+'.png',function(exists){
      			console.log('--end =!face <'+exists);
      			function numberzeros(n,zeros){n=n.toString();if(n.length<12){zeros = zeros - n.length;for(var i=1;i<=zeros;i++){n='0'+n;}return n;}else{return n;}}
      			var ooopid=numberzeros(_.pid,12);
      			qrcode = qr('scanpedia.com/'+_.page+'.php?='+ooopid+'='+_.uid);//qrcode = qr('quickreport.it/pid.php?qr='+ooopid);//qr total length is 45.... quickreport.it = 14
      			console.log('scanpedia.com/'+_.page+'.php?='+ooopid+'='+_.uid);
      			cells = qrcode.modules;
      			num=4;
      			qrsize=cells.length*num;
      			canvas=new Canvas(qrsize,qrsize);
      			ctx = canvas.getContext('2d');
      			img = new Canvas.Image;
      			img.onload=function(){
        			ctx.drawImage(img,0,0,164,164);
        			bg=canvas.toDataURL();
        			qr_gen();
        			s[3].WIRE('!face',{'png':ONEIMG(canvas.toDataURL()),'bg':TWOIMG(bg),'el':_.el,'react':react});
					}
      			if(exists===true){img.src='/home/engine/public_html/img/scanpedia/people/'+_.pid+'.png';}
      			else{img.src='/home/engine/public_html/img/scanpedia/people/face.png';}
    			});}
  		else{
    		var data=_.file.replace(/^data:image\/\w+;base64,/,"");
    		var buffer=new Buffer(data,'base64');
    		fs.writeFile('/home/engine/public_html/img/scanpedia/people/'+_.pid+'.png',buffer,function(err){
      			function numberzeros(n,zeros){n=n.toString();if(n.length<12){zeros = zeros - n.length;for(var i=1;i<=zeros;i++){n='0'+n;}return n;}else{return n;}}
      			var ooopid=numberzeros(_.pid,12);
      			qrcode = qr('scanpedia.com/'+_.page+'.php?='+ooopid+'='+_.uid);//qrcode = qr('quickreport.it/pid.php?qr='+ooopid);//qr total length is 45.... quickreport.it = 14
      			console.log('scanpedia.com/'+_.page+'.php?='+ooopid+'='+_.uid);
      			cells = qrcode.modules;
      			num=4;
      			qrsize=cells.length*num;
      			canvas=new Canvas(qrsize,qrsize);
      			ctx = canvas.getContext('2d');
      			img = new Canvas.Image;
      			img.onload=function(){
        			ctx.drawImage(img,0,0,164,164);
        			bg=canvas.toDataURL();
        			qr_gen();
        			s[3].WIRE('!face',{'png':ONEIMG(canvas.toDataURL()),'bg':TWOIMG(bg),'el':_.el,'react':react});//console.log('face '+_.el);
        			makeicons(_);
        			}
      			img.src='/home/engine/public_html/img/scanpedia/people/'+_.pid+'.png';
      			});
      			}
      			});
      			};
      			
      			
    s[4].WHEN['?links']=function(_){
  		var done=0;
  		var r;
  		scanipedia_sql.query("SELECT * FROM coverlinks WHERE uid='"+_.uid+"'")
   		.on('row',function(q){r=q;done=1;})
    	.on('end',function(){
      		if(done===1){s[4].WIRE('=links',{'h1':r.h1,'h2':r.h2,'h3':r.h3,'h4':r.h4,'h5':r.h5,'h6':r.h6,'h7':r.h7,'h8':r.h8,'h9':r.h9,'h10':r.h10,'h11':r.h11,'h12':r.h12,'h13':r.h13,'h14':r.h14, 'l1':r.l1,'l2':r.l2,'l3':r.l3,'l4':r.l4,'l5':r.l5,'l6':r.l6,'l7':r.l7,'l8':r.l8,'l9':r.l9,'l10':r.l10,'l11':r.l11,'l12':r.l12,'l13':r.l13,'l14':r.l14,'react':r.react});}
      		else{s[4].WIRE('=links',{'h1':'http://kickstarter.com','h2':'','h3':'','h4':'','h5':'','h6':'','h7':'','h8':'','h9':'','h10':'','h11':'','h12':'','h13':'','h14':'', 'l1':'Back us on kickstarter','l2':'','l3':'','l4':'','l5':'','l6':'','l7':'','l8':'','l9':'','l10':'','l11':'','l12':'','l13':'','l14':''});}
      		});};
						 
						 
	
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
						 
	s[1].WHEN['?status']=function(_){
		//_=json.parse(_);
		//_=_.d;
		_.itm=ss;//[_.itm];
		console.dir(_.itm);
		s[1].EJSON('=status',{'cmd':_.cmd,'itm':_.itm});
		};
						 
						 
						 
						 
      		
    
    
    },//scanedia PARTITION
    b:function(){
    	
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////B.php 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      		
	s[4].WHEN['reaction']=function(_){console.log(_);
  		var xuid=_.u;
  		var qr=_.q;//(qr!=='000000000000')?_.q.replace(/^0+/,''):0;
  		console.log('r: '+xuid+qr);
  		if(editing===false&&(qr!==0)){
    		s[1].SHOUT('play',{'uid':xuid,'qr':qr},{'TO':[xuid]});
    		scanipedia_sql.query("SELECT * FROM qr WHERE id='"+qr+"'").on('row',function(r){
      			function R(min,max){return Math.floor(Math.random() * (max - min + 1)) + min;}
      			if(r.win && (r.stock > r.num)){
        			if(R(1,r.ratio)===1){
          				s[4].WIRE('playing',{'end':r.win});
          				var numwins=r.num;
          				var stock=r.stock;
          				scanipedia_sql.query("UPDATE qr SET num='"+(numwins + 1)+"' WHERE id='"+qr+"' ").on('row',function(r){
          					s[4].SHOUT('scanpedia_winner',{'qr':qr,'stock':stock,'num':(numwins + 1)});//io.sockets.emit('scanpedia_winner',{'qr':qr,'stock':stock,'num':(numwins + 1)});
          					});
          				}
       				else{
       					s[4].WIRE('playing',{'end':r.end});//socket.emit('scanpedia_playing',{'end':r.end});
       					}
        			}
      			else{
      				s[4].WIRE('playing',{'end':r.end});//socket.emit('scanpedia_playing',{'end':r.end});
      				}
      			var scans=r.scans;
      			scanipedia_sql.query("UPDATE qr SET scans='"+(scans + 1)+"' WHERE id='"+qr+"' ").on('row',function(r){
      				s[4].SHOUT('scanpedia_scanned',{'qr':qr,'scans':(scans + 1)});//io.sockets.emit('scanpedia_scanned',{'qr':qr,'scans':(scans + 1)});
      				});
      			});}
  		if(editing===true||qr===0){
    		scanipedia_sql.query("SELECT * FROM test WHERE uid='"+xuid+"'").on('row',function(r){
      			s[1].SHOUT('play',{'uid':xuid,'qr':0},{'TO':[xuid]});//io.sockets.in(uid).emit('scanpedia_play',{'uid':uid,'qr':0});
      			s[4].WIRE('playing',{'end':r.end});//socket.emit('scanpedia_playing',{'end':r.end});
      			});}};
  
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  	}//b PARTITION
  
  
	};console.log(PARTITION);CLIENT[PARTITION]();//CLIENT functions PARTITIONS




}//module.exports