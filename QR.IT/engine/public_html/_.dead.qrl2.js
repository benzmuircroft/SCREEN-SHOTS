var $=require('jquery'),
		json = require('json-stringify-safe');
		json.parse=require('try-json-parse');
		
var ss={};var s={};

var sA=4;//low also first main socket
var sZ=5;//last
		
function pull(arr,val){for(var i = 0, j = 0, l = arr.length; i < l; i++){if(arr[i]!==val){arr[j++]=arr[i];}}arr.length=j;}

var WebSocketServer = require('ws').Server;

if(!ss[4]||!ss[4]._server){
	ss[4]=new WebSocketServer({port:8004});
	ss[4].on('connection',function(soc){
		s[4]=soc;
		s[4].sid=4;
		console.log('4open');
		if(s[4]&&s[5]&&s[4].readyState===1&&s[5].readyState===1){power();}
		});}
else if(s[4]&&s[5]&&s[4].readyState===1&&s[5].readyState===1){power();}

if(!ss[5]||!ss[5]._server){
	ss[5]=new WebSocketServer({port:8005});
	ss[5].on('connection',function(soc){
		s[5]=soc;
		s[5].sid=5;
		console.log('5open');
		if(s[4]&&s[5]&&s[4].readyState===1&&s[5].readyState===1){power();}
		});}
else if(s[4]&&s[5]&&s[4].readyState===1&&s[5].readyState===1){power();}
//add another socket port
/*
if(!ss[6]||!ss[6]._server){
	ss[6]=new WebSocketServer({port:8006});
	ss[6].on('connection',function(soc){
		s[6]=soc;
		s[6].sid=6;
		console.log('6open');
		if(s[4]&&s[5]&&s[6]&&s[4].readyState===1&&s[5].readyState===1&&s[6].readyState===1){power();}
		});}
else if(s[4]&&s[5]&&s[6]&&s[4].readyState===1&&s[5].readyState===1&&s[6].readyState===1){power();}
*/


//the client will ask to be built or the client will provide a previous build of the client
//setup API
//then do nothing and wait for client

function power(){console.log('>POWER<');
	for(var i=sA;i<=sZ;i++){
		/*PORT NOT NEW CLIENT*/if(i!==4){s[i].nickname='_port';}
		var ii=i;
		console.log('api '+i);
		//============================================================================================
    	/*API WHEN*/
   		s[i].WHEN=[];
   		s[i].WHEN['sid']=i;
    	/*API SAY*/
   		s[i].WIRE=function(func,data){console.log('WIRE'+func);
   			var _={func:func,data:data};
   			this.send(json(_));
   			return;}
    	/*API SAY*/
    	s[i].SAY=function(func,data,to){
    		ss[ii].broadcast = function(){
    			for(var oo in this.clients){
    				var nn=this.clients[oo].nickname;
    				var cl=this.clients[oo];
    				console.log(nn);
    				if(to){if(to.indexOf(nn)!==-1&&cl.nickname!=='_port'){
    					var _={func:func,data:data,to:nn,from:ws.nickname};
   						console.dir(_);
   						if(cl.nickname!=='_port'){cl.send(json(_));}
    					}}}};
			ss[ii].broadcast();
			return;
   			};
   		/*API SHOUT func, nickname who about, leave user out or bypass to everyone*/
    	s[i].SHOUT=function(func,data){
   			ss[ii].broadcast = function(){
    			if(data.rooms){
    				for(var oo in this.clients){
    					var nn=this.clients[oo].nickname;
    					var cl=this.clients[oo];
    					var _={func:func,data:data,client:cl,room:'?',to:nn,from:s[ii].nickname};
    					for(var r in data.rooms){
    						_.data.room=r;
    						if(data.not){if(data.not.indexOf(nn)===-1&&cl.nickname!=='_port'&&cl.ROOMS.indexOf(r)!==-1){
    							cl.send(json(_));
    							}}
    						else{if(cl.nickname!=='_port'&&cl.ROOMS.indexOf(r)!==-1){cl.send(json(_));}}
    						}};}
    				else{
    					for(var oo in this.clients){
    						var nn=this.clients[oo].nickname;
    						var cl=this.clients[oo];
    						var _={func:func,data:data,client:cl,to:nn,from:s[ii].nickname};
    						if(data.not){if(data.not.indexOf(nn)===-1&&cl.nickname!=='_port'){
    							cl.send(json(_));
    							}}
    						else{if(cl.nickname!=='_port'){cl.send(json(_));}}
    						};}}	;
				ss[ii].broadcast();
				return;};
   		/*API PASS ON SAY_TO FROM CLIENT*/
   		s[i].WHEN['SAY']=function(_){console.log('SAY passing data... '+_.data.to);
   			this.SAY(_.data.pass,_.data.data,_.data.to);
   			};
   		/*API ROOMS*/
   		s[i].ROOMS=[];
		/*API JOIN*/
   		s[i].JOIN=function(room){console.log('push '+this.ROOMS);
   			if(this.ROOMS.indexOf(room)===-1){this.ROOMS.push(room);}
   			this.WIRE('ROOMS',{rooms:this.ROOMS});
   			return;}
   		/*API LEAVE*/
   		s[i].LEAVE=function(room){console.log('pull '+this.ROOMS);
   			pull(this.ROOMS,room);
   			this.WIRE('ROOMS',{rooms:this.ROOMS});
   			return;}
		/*API ROOMS*/
   		s[i].WHEN['ROOMS']=function(_){console.log('ROOMS: '+this.ROOMS);
   			var r=_.rooms;
   			if(r){for(var i=0;i<r.length;i++){this.JOIN(r[i]);}
   			return;}}
   		/*API CONN*/
   		s[i].WHEN['CONN']=function(_){console.log('CONN: s['+this.sid+']');
   			//ws.nickname=(_.func!=='user.died')?_.nickname:'';
   			//console.log(wss.clients);
   			//get all other users? to show users already online // not good for reconnect
   			if(_.func!=='private.connect'){s[this.sid].SHOUT(_.func,{'nickname':_.nickname,'not':_.not});}//func,user,leave.me.out, data for exra info
   			else{s[this.sid].nickname=_.nickname;}
   			return;}
		}
	//API^
   	//============================================================================================
   	//============================================================================================
   	//============================================================================================
   	//============================================================================================
	
	//s[4].WIRE('func',{data:'simple'});																							//client - sever cup & string
	
	//s[4].SAY('func',{data:'simple'},to:['user0','user1']);															//say something to a few people
	
	//s[4].SHOUT('func',{simple:data,not:[nickname,'user0'],rooms:['room0',room1]});		//shout something as a broadcast to rooms leaving one other user out
	
	//s[4].SHOUT('func',{simple:data,not:[nickname,user0]});													//shout as a broadcast to all users leaving one other user out
	
	//s[4].SHOUT('func',{simple:data});																						//shout to all users including self
	
	//s[4].WHEN['func']=function(_){console.dir(_);}																	//all custom events
	
	//delete s[4].WHEN['func']																										//don't pile up functions
	
	//s[4].JOIN('*');																														//join a room
	
	//s[4].LEAVE('*');																														//leave a room
	
	
	//#####################################################################################[START]
	
	var fs = require('fs');
	
	var anyDB = require('any-db');
	var hotel_issues = anyDB.createConnection('mysql://quickrep_user:53S){~Fl6NJW@quickreport.it/quickrep_issues',function(e,r){console.log('hotel.sqlerr: '+e);});
	var sqlvar;
	
	var nodemailer = require("nodemailer");
	var gmail=nodemailer.createTransport("SMTP",{service:'Gmail','auth':{'user':'quickreport.it@gmail.com','pass':'rrjfbaogsfzsplrr'}});
	var hotmail=nodemailer.createTransport("SMTP",{service:'Hotmail','auth':{'user':' quickreport.it@hotmail.com','pass':'Summers7'}});//33pnidjq43vx6opb
	
	var qr = require('qr.js');
	
	var FTPClient = require('ftp');
	var ftpkey={
    	host    : "quickreport.it",
    	user    : "quickrep",
    	port    : 21,
    	password: "James;;;:::Bond007"
    	}
	
	function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
	function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
 	
 	//------------------------------------------------------------------------------------------------thailand

var co='not_set';//=company from db array

var adminemail='quickreport.it@gmail.com';


function theday(){
    var today = new Date();
    var first = new Date(today.getFullYear(), 0, 1);
	return theDay = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
    }


var secroom='_';//for security alwasys store room on server session
var cid=0;


s[4].WHEN['http:??']=function(_){//socket.on('http:??',function(_){
	console.log('hi');
	cid=_.c;
	var r='';
	hotel_issues.query("SELECT * FROM customers WHERE app='multi-language-hotel-mobile' AND id='"+_.c+"'")
		.on('row',function(r){
			co=r.users;
			console.log('>>>>>> '+co);
			s[4].WIRE('http:!!',{//socket.emit('http:!!',{
				'c':co,'cn':r.longname,
				'css':r.css
				});//starts app for both admin and room
			});
}//});




s[4].WHEN['thailand_room.security']=function(_){//socket.on('thailand_room.security',function(_){
	console.dir(_);
	//var r='';
	//hotel_issues.query("SELECT * FROM customers WHERE app='multi-language-hotel-mobile'").on('row',function(res){r=(res)?res:{'users':'none'};}).on('end',function(){companys=r.users.split(',');co=($.inArray(_.c,companys)!==-1)?_.c:co;
	if(co!=='not_set'){sqlvar=hotel_issues;}
	var r='';
	if(sqlvar){sqlvar.query("SELECT * FROM "+co+" WHERE room='"+_.roomid+"' OR room='0'").on('row',function(res){console.log('res.room'+res.room+' '+(res.room==='0'));if(res.room==='0'){console.dir(res);adminemail=res.email;}else{r=res;}}).on('end',function(){
		if(((r)?r.user:'<*&^$££:::_=~###£%*()>')===_.user){
			secroom=_.roomid;
			console.dir(r);
			console.log('.................................................'+adminemail+' co='+co);
			s[4].WIRE('thailand_security.ok',{//socket.emit('thailand_security.ok',{
				'wakeup':r.wakeup,
				'minibar':r.minibar,
				'clean':r.clean,
				'laundry':r.laundry,
				'taxi':r.taxi,
				'feedback':r.feedback,
				'img':r.img,
				'email':((r.email!==undefined)?r.email:'not_set')
				});
			console.log('ok');
			s[4].JOIN(co+'_'+_.roomid);//socket.join(co+'_'+_.roomid);
			//
			sqlvar.query("SELECT * FROM ads WHERE "+co+"!='' ORDER BY "+co).on('row',function(r){if(r.co!==0){
				s[4].WIRE('ads',{'ad':r.id+'@'+r.href});//socket.emit('ads',{'ad':r.id+'@'+r.href});
				}})
			}
		else{
			s[4].WIRE('thailand_security.error');//socket.emit('thailand_security.error');
			console.log('err2');
			}
	 	});}
	 	}//});




s[4].WHEN['thailand_admin.security']=function(_){//socket.on('thailand_admin.security',function(_){
	//var r='';
	//1
	//hotel_issues.query("SELECT * FROM customers WHERE app='multi-language-hotel-mobile'").on('row',function(res){r=(res)?res:{'users':'none'};}).on('end',function(){companys=r.users.split(',');co=($.inArray(_.c,companys)!==-1)?_.c:co;
	if(co!=='not_set'){sqlvar=hotel_issues;}
	var r='';
	if(sqlvar){sqlvar.query("SELECT * FROM "+co/*_.c*/+" WHERE room='0'").on('row',function(res){r=res;}).on('end',function(){
		console.log('_'+r.user+'_'+_.user);
		if(r.user===_.user){
			adminemail=r.email;
			console.log('.................................................'+adminemail+' co='+co);
			//
			qrcode = qr('quickreport.it/a.php?=0='+cid);
  			cells = qrcode.modules;
  			num=5;
  			qrsize=cells.length*num;
  			Canvas = require('canvas');
  			canvas=new Canvas(qrsize,qrsize);
  			ctx = canvas.getContext('2d');
  			for(var y = 0; y < cells.length ; ++y){
    			var row = cells[y];
    			for(var x = 0; x < row.length ; ++x){
      				ctx.fillStyle=row[x]?'#000':'#FFF';
      				ctx.fillRect((x*num),(y*num),num,num);
      				}}
  				s[4].WIRE('admin_qr:set',{'simple':canvas.toDataURL(),'url':'?=0='+cid});//socket.emit('admin_qr:set',{'simple':canvas.toDataURL(),'url':'?=0='+cid});
				//
			s[4].WIRE('thailand_security.ok');//socket.emit('thailand_security.ok');
			sqlvar.query("SELECT * FROM "+co/*_.c*/+" WHERE room!='0'").on('row',function(r){console.log(r.id);
			s[4].WIRE('thailand_admin.get.rooms',{//socket.emit('thailand_admin.get.rooms',{//---------------------------------------------------------------------------------------------------------------------!
				'room':r.room,
				'wakeup':r.wakeup,
				'minibar':r.minibar,
				'clean':r.clean,
				'laundry':r.laundry,
				'taxi':r.taxi,
				'feedback':r.feedback,
				'img':r.img,
				'timesent':r.time,
				'user':r.user
				});
			console.log('ok');
			s[4].JOIN(co+'_'+r.room);//socket.join(co+'_'+r.room);
			console.log('socket.join('+r.room+');');
			});
			s[4].JOIN(co/*_.c*/);//socket.join(co/*_.c*/);
			}
		else{
			s[4].WIRE('thailand_security.error');//socket.emit('thailand_security.error');
			console.log('err');
			}
	 	});}
	 	}//});
	
	
var uploadedimg=0;


s[4].WHEN['thailand_upload_part']=function(_){//socket.on('thailand_upload_part',function(_){console.log('hi0');
  //if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  //else{}
  //console.log(_.roomid);
  sqlvar.query("UPDATE "+co/*_.c*/+" SET img='"+_.roomid+".png' WHERE room='"+_.roomid+"'").on('end',function(r){
    console.log('hi1');
    var data=_.file.replace(/^data:image\/\w+;base64,/,"");
    console.log('hi2');
    var buffer=new Buffer(data,'base64');
    fs.writeFile('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png',buffer,function(err){
      if(err){console.log(err+'!');}else{
      console.log('hi3');
      uploadedimg=1;
      s[4].WIRE('thailand_upload_part_done',{'id':0});//socket.emit('thailand_upload_part_done',{'id':0});//only one image box
      /*
      var c=new FTPClient();
      c.on('ready',function(){
        c.put('/home/engine/public_html/img/phuket/temp.'+_.c+'/'+_.roomid+'.png','/public_html/img/'+_.c+'/'+_.roomid+'.png',function(err){
          if (err) throw err;
          c.end();
          fs.unlink('/home/engine/public_html/img/phuket/temp.'+_.c+'/'+_.roomid+'.png',function(err){
            socket.emit('thailand_upload_part_done',{'id':0});//only one image box
            });
          });
        });
      c.connect(ftpkey);
      */
      }});
    });
  }//});



s[4].WHEN['thailand_send>']=function(_){//socket.on('thailand_send>',function(_){
    //if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
  	_.room=secroom;
  	_.roomid=secroom;
  	var d=new Date();
  	var thaitime=d.getUTCHours();
  	for(var i=1;i<=7;i++){console.log(i);if(thaitime<22){thaitime=thaitime+1;}else{thaitime=0;}}
  	_.timesent=(
  		((thaitime<10)?"0"+thaitime.toString():thaitime )+
  		':'+
  		((d.getUTCMinutes()<10)?"0"+d.getUTCMinutes().toString():d.getUTCMinutes())+
  		((thaitime<11)?'am':'pm')
  		);
  	_.day=theday();
  	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"wakeup='"+_.wakeup+"', "+
  	"minibar='"+_.minibar+"', "+
  	"clean='"+_.clean+"', "+
  	"laundry='"+_.laundry+"', "+
  	"taxi='"+_.taxi+"', "+
  	"feedback='"+_.feedback+"', "+
  	"time='"+_.timesent+"', "+
  	"day='"+_.day+"' "+
  	"WHERE room='"+_.roomid+"'").on('end',function(){
  		var rr='not_set';//where is img
  		sqlvar.query("SELECT img FROM "+co/*_.c*/+" WHERE room='"+_.room+"'").on('row',function(rr){
  			r=rr;
  		}).on('end',function(){
  			_.img=(r.img!==undefined)?r.img:r;
  		//_.room=secroom;
  		if(uploadedimg===1){
      		var ftp=new FTPClient();
      		ftp.on('ready',function(){
        		ftp.put('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png','/public_html/img/'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
         			if (err) throw err;
          			ftp.end();
          			//fs.unlink('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
          				_.rooms=[co+'_'+secroom];
            			s[4].SHOUT('thailand_sent>',_);//io.sockets.in(co+'_'+secroom).emit('thailand_sent>',_);//socket.emit('thailand_upload_part_done',{'id':0});//only one image box
            			adminfeedbackemailattachment(secroom,((_.feedback!=='no')?_.feedback:'An image was sent...'));
            		//});
            		});});
      		ftp.connect(ftpkey);
  			}
  		else{
  			_.rooms=[co+'_'+secroom];
  			s[4].SHOUT('thailand_sent>',_);//io.sockets.in(co+'_'+secroom).emit('thailand_sent>',_);
  			if(_.feedback!=='no'){adminfeedbackemail(secroom,_.feedback);}
  			}
  		});//where is img e
  		});													
	}//});




s[4].WHEN['saveemail']=function(_){//socket.on('saveemail',function(_){
	//if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"email='"+_.email+"' "+
  	"WHERE room='"+secroom+"'").on('end',function(r){console.log('email saved!');});
	}//});



s[4].WHEN['thailand_admin-send>']=function(_){//socket.on('thailand_admin-send>',function(_){
    //if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
  	var d=new Date();
  	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	//"wakeup='"+_.wakeup+"', "+
  	"minibar='"+_.minibar+"', "+
  	"clean='"+_.clean+"', "+
  	"laundry='"+_.laundry+"' "+//,
  	//"taxi='"+_.taxi+"', "+
  	//"feedback='"+_.feedback+"' "+
  	//"time='"+_.timesent+"' "+
  	"WHERE room='"+_.roomid+"'").on('end',function(r){
  		if(uploadedimg===1){
      		var ftp=new FTPClient();
      		ftp.on('ready',function(){
        		ftp.put('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png','/public_html/img/'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
         			if (err) throw err;
          			ftp.end();
          			//fs.unlink('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
            			_.rooms=[co+'_'+secroom];
  						s[4].SHOUT('thailand_admin-sent>',_);//io.sockets.in(co+'_'+_.roomid).emit('thailand_admin-sent>',_);
            			thailand_email(co/*_.c*/,_.roomid);
            		//});
            		});});
      		ftp.connect(ftpkey);
  			}
  		else{
  			_.rooms=[co+'_'+secroom];
  			s[4].SHOUT('thailand_admin-sent>',_);//io.sockets.in(co+'_'+_.roomid).emit('thailand_admin-sent>',_);
  			thailand_email(co/*_.c*/,_.roomid);
  			}
  		});													
	}//});



function thailand_email(co/*_.c*/,room){
	//console.log(c+' '+room);
	//if(c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("SELECT email FROM "+co/*_.c*/+" WHERE room='"+room+"'").on('row',function(r){console.dir(r);
		//if(r.email.search('@yahoo')!==-1||r.email.search('@ymail')!==-1){
			//todo..
		//	}
		/*else if(r.email.search('@hotmail')!==-1||r.email.search('@live')!==-1||r.email.search('@outlook')!==-1){
			hotmail.sendMail({
        		subject:c+' update received...',
       			from:'quickreport.it@hotmail.com',
        		to:r.email,
        		html: 'Click this <b><a href="http://quickreport.it/'+c+'-room.php?qr='+room+'">link</a></b> to veiw your room update.'
        		},function(error,response){
        			if(error){console.log(error+'!!!!!!!!!!!!');socket.emit('email_send.err');}
        			else{console.log("Message sent: " + response.message);socket.emit('email_send.ok',{'result':'200:ok'});}});
					}*/
		//else if(r.email.search('@gmail')!==-1||r.email.search('@')!==-1){
			gmail.sendMail({
        		subject:co/*_.c*/+' update received...',
        		from:'quickreport.it@gmail.com',
        		to:r.email,
        		html: 'Click this <b><a href="http://quickreport.it/'+co/*_.c*/+'-room.php?qr='+room+'">link</a></b> to veiw your room update.'
       			 },function(error,response){
        			if(error){
        				console.log(error+'!!!!!!!!!!!!');
        				s[4].WIRE('email_send.err');//socket.emit('email_send.err');
        				}
        			else{
        				console.log("Message sent: " + response.message);
        				s[4].WIRE('email_send.ok',{'result':'200:ok'});//socket.emit('email_send.ok',{'result':'200:ok'});
        				}
        			});//}
				});}
					
					
					
					
					
					
function adminfeedbackemail(room,feedback){
	sqlvar.query("SELECT email FROM "+co/*_.c*/+" WHERE room='0'").on('row',function(r){console.dir(r);
			console.log('.................................................'+adminemail);
			gmail.sendMail({
        		subject:'room: '+room+' update received...',
        		from:'quickreport.it@gmail.com',
        		to:adminemail,
        		html:feedback
       			 },function(error,response){
        			if(error){
        				console.log(error+'!!!!!!!!!!!!');
        				s[4].WIRE('email_send.err');//socket.emit('email_send.err');
        				}
        			else{
        				console.log("Message sent: " + response.message);
        				s[4].WIRE('email_send.ok',{'result':'200:ok'});//socket.emit('email_send.ok',{'result':'200:ok'});
        				}});
					});
					}
function adminfeedbackemailattachment(room,feedback){
	sqlvar.query("SELECT email FROM "+co/*_.c*/+" WHERE room='0'").on('row',function(r){console.dir(r);
			console.log('.................................................'+adminemail);
			gmail.sendMail({
        		subject:'room: '+room+' update received...',
        		from:'quickreport.it@gmail.com',
        		to:adminemail,
        		attachments:[{'fileName':'room.'+room+'.png','filePath':'/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+room+'.png'}],
        		html:feedback
       			 },function(error,response){
        			if(error){
        				console.log(error+'!!!!!!!!!!!!');
        				s[4].WIRE('email_send.err');//socket.emit('email_send.err');
        				}
        			else{
        				console.log("Message sent: " + response.message);
        				s[4].WIRE('email_send.ok',{'result':'200:ok'});//socket.emit('email_send.ok',{'result':'200:ok'});
        				fs.unlink('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+room+'.png',function(err){
        					/*var ftp=new FTPClient();
      						ftp.on('ready',function(){
        						ftp.delete('/public_html/img/'+co+'/'+room+'.png',function(err){
         							if (err) throw err;
          							ftp.end();
          							sqlvar.query("UPDATE "+co+" SET img='' WHERE room='"+room+"'").on('end',function(r){console.log('img wiped');});//don't wipe for staff
            						});});
      						ftp.connect(ftpkey);*/
        					});
        				}});
					});
					}



s[4].WHEN['thailand_admin-send>']=function(_){//socket.on('destroy_notification',function(_){
	// if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	_.seen+"='no' "+
  	"WHERE room='"+secroom+"' AND "+_.seen+"='complete'").on('end',function(r){console.log(_.seen+' reset to no');});
	}//});





s[4].WHEN['now_wakeup']=function(_){//socket.on('now_wakeup',function(_){
	// if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"wakeup='no' "+
  	"WHERE room='"+_.room+"'").on('end',function(r){
  		_.rooms=[co+'_'+_.room];
  		s[4].SHOUT('*alarm*wakeup',_);//io.sockets.in(co+'_'+_.room).emit('*alarm*wakeup',_);
  		console.log('woke!');
  		});
	}//});

s[4].WHEN['now_taxi']=function(_){//socket.on('now_taxi',function(_){
	// if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"taxi='no' "+
  	"WHERE room='"+_.room+"'").on('end',function(r){
  		_.rooms=[co+'_'+_.room];
  		s[4].SHOUT('*alarm*taxi',_);//io.sockets.in(co+'_'+_.room).emit('*alarm*taxi',_);
  		console.log('taxi here!');
  		});
	}//});





s[4].WHEN['thailand_admin-checkout>']=function(_){//socket.on('thailand_admin-checkout>',function(_){
	//if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
  	var d=new Date();
  	var thaitime=d.getUTCHours();
  	for(var i=1;i<=7;i++){console.log(i);if(thaitime<22){thaitime=thaitime+1;}else{thaitime=0;}}
  	_.timesent=(
  		((thaitime<10)?"0"+thaitime.toString():thaitime )+
  		':'+
  		((d.getUTCMinutes()<10)?"0"+d.getUTCMinutes().toString():d.getUTCMinutes())+
  		((thaitime<11)?'am':'pm')
  		);
  	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"wakeup='"+_.wakeup+"', "+
  	"minibar='"+_.minibar+"', "+
  	"clean='"+_.clean+"', "+
  	"laundry='"+_.laundry+"', "+//,
  	"taxi='"+_.taxi+"', "+
  	"img='', "+
  	"feedback='"+_.feedback+"', "+
  	"time='"+_.timesent+"', "+
  	"user='"+_.user+"' "+
  	"WHERE room='"+_.room+"'").on('end',function(r){
  		_.user='changeto:'+_.user;
  		_.rooms=[co/*_.c*/];
  		s[4].SHOUT('thailand_admin.get.rooms',_);//io.sockets.in(co/*_.c*/).emit('thailand_admin.get.rooms',_);
  		});
    }//});
    
    
    
s[4].WHEN['simple_qr:get']=function(_){//socket.on('simple_qr:get',function(_){
  //each hotel has a the same app different face
  qrcode = qr('quickreport.it/r.php?='+_.n+'='+cid);
  cells = qrcode.modules;
  num=5;
  qrsize=cells.length*num;
  Canvas = require('canvas');
  canvas=new Canvas(qrsize,qrsize);
  ctx = canvas.getContext('2d');
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'#000':'#FFF';
      ctx.fillRect((x*num),(y*num),num,num);
      }}
  //socket.emit('simple_qr:set',{'simple':canvas.toDataURL(),'url':'?='+_.n+'='+cid});
  s[4].WIRE('simple_qr:set',{'simple':canvas.toDataURL(),'url':'?='+_.n+'='+cid});
  }//});
 	
	
	
	
	
	//#######################################################################################[END]
	
    //===========================================================================================
    //===========================================================================================
    //===========================================================================================
    //===========================================================================================
    /*API WHEN*/
   for(var i=sA;i<=sZ;i++){
   		s[i].on('message', function(_){console.log('RAW:: '+_+this.sid);
   			_=json.parse(_);
   			if(_.func){
   				if(_.func==='SAY'){
    				console.log('SAY catching data... '+_.data.to);
    				this.WHEN['SAY'](_);
    				}
    			else if(_.func==='SHOUT'){
    				var func=_.data.func;
    				delete _.data.func;
    				this.WHEN[func](_.data);
    				}
    			else if(this.WHEN[_.func]){
    				this.WHEN[_.func](_.data);
    				}
    			else{
    				console.log('NO EVENT '+_.func);console.dir(_);
    				}}
    		else{console.log('NO _.func');console.dir(_);}
    	});}
	
	}//power


