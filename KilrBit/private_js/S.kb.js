/* Copywrite 2015 Kilrbit
 * 		This code the intellectual property of
 * 		Ben Muircroft (benzmuircroft@gmail.com).
 *
 * Private Licence
 * 		No code (not including third party scripts) can be used and/or
 * 		copied by anyone not with out written and signed concent from
 * 		Ben Muircroft.
 *
 * Contributors
 * 		Fabio Gangarossa on Server configuration, Node.js and Lib Cario setup.
 *
 * Additional ownerships and copywrite for sub sections of this project
 * listed below are property of their named owners and are to be used both by
 * Kilrbit project and their respective owners only unless written
 * permission from the respective owner is given.
 * 		None.
 *
 */
module.exports=function(s,G){//




	var fs=require('fs')//,	util=require("util")
	,	qr=require('qr.js')
	,	Canvas=require('../node_modules/canvas')
	,	C=Canvas
	;











		s[1].onclose=function(code,message){//console.log('CLOSE::',code,message,ϟ.depositAddress);
			console.log('shutdown');
			console.log('KillrBit™');
			};









		var db={
			find:function(collection,obj,cb){
			require('../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(e,view){
				if(e){
					view.close();
					cb(null);
					}
				else{
					try{
						view.collection(collection).find(obj).toArray(function(e,result){
							view.close();
							cb(result);
							});
						}catch(e){
							console.log('caught: '+e);
							view.close();
							cb(null);
							}}});}};









		var JSON=require('../node_modules/JSON');



		var ʃ={//santitizer takes an object as input returns expected input as output
			x:require('../node_modules/xpect')//TODO
			};

		//console.dir(ʃ.x(1).to.be(1));


		var U={//user
			uid:s[1].uid
		,	ip:undefined
		,	new:undefined
		,	pid:-1//you are not loggedin yet
		,	e:undefined
		,	n:undefined
		,	listen:function(){
				s[1].WHEN['uzr:set.li:svr']=function(_){
					U.e=_.em;//? do this here ?
					U.n=U.e.split('@')[0];
					U.ip=s[1]._socket.remoteAddress;
					U.face=_.face;
					/*JSON.post(
						'www.google.com'
					,	'/recaptcha/api/siteverify?'
					,	JSON.queryify({'_':'_','secret':'6LeIkQkTAAAAAHTlmBGwtOHvkhYn3qh1kzyj_Kwh','response':_.r,'remoteip':U.ip})
					,	'application/x-www-form-urlencoded'
					,	function(r){
						if(r.success){*/
							U.new={//this user will be pushed out if 10000 other people signup after them and they don't do anything then kilrbit will forget them
								ip:U.ip
							,	u:U.uid
							,	a:'test'//(+new Date())+prvc.unik(f.util.bytesToHex(f.random.getBytesSync(16)))
							,	e:U.e
							,	n:U.n
							,	t:[]
							,	b:[]
							,	r:0
							,	l:-1
							,	face:U.face};
							Ə.login(QR.login(U.a),(U.n.slice(0,1).toUpperCase())+U.n.slice(1),function(e,r){
								if(e){
									s[1].WIRE('svr:no.li:uzr');//invalid email
									}
								else{
									G.login.push(U.new);//person is saved to massive array because they have so far prooved that they are human and have an email
									s[1].WIRE('svr:ok.li:uzr');
									}
								});//}
						//else{s[1].WIRE('svr:no.li:uzr');}//sorry you are a robot
						/*});*/}
				s[1].WHEN['mob:null.li:svr']=function(_){//add new users to uzrs db only when they login //null envelops login and login envelops bitcoin and shapeshift
					var NULL=(function(){function eve(attacktype){('log '+attacktype);}Array.prototype.pull=function(){var what,a=arguments,L=a.length,ax;while(L&&this.length){what=a[--L];while((ax=this.indexOf(what))!==-1){this.splice(ax,1);}}return this;};const f=require('../node_modules/node-forge');const prvc=require('../node_modules/private');function browser(){return (typeof(module)==='undefined')&&(typeof(window)!=='undefined');}var o={};var prv=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));var pub=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));var aes=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));function e(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}function d(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}function xAES(){var mx='';for(var i=0;i<o[aes].njs.length;i++){mx=mx+(o[aes].njs[i])+(o[aes].win[i]);}var st='';for(var i=0;i<o[aes].win.length;i++){mx=mx+(o[aes].win[i])+(o[aes].njs[i]);}o[aes].key= f.pkcs5.pbkdf2(mx,st,10000,32);REWIRE();}function eAES(msg){('log proof sent: '+o[aes].num);msg.PROOF=o[aes].num;var ci=f.cipher.createCipher('AES-CBC',o[aes].key);ci.start({'iv':o[aes].win+o[aes].njs});ci.update(f.util.createBuffer(JSON.stringify(msg),'utf8'));ci.finish();return ci.output.toHex();}function dAES(msg){var ci=f.cipher.createDecipher('AES-CBC',o[aes].key);ci.start({'iv':o[aes].win});ci.update(f.util.createBuffer(f.util.hexToBytes(msg)));ci.finish();if(ci.output.length()===0){eve('eve: Remote Function Call Code Injection attempt');}else{msg=JSON.parse(ci.output.toString('utf8'));('log expected: '+o[aes].exp+' msg.proof: '+msg.PROOF);if(msg.PROOF){if(msg.PROOF===o[aes].exp){delete msg['PROOF'];return msg;}else{eve('eve: dAES proof incorrect');}}else{eve('eve: dAES without proof');}}}Object.defineProperty(o,aes,{value:{'win':false,'njs':false,'num':false,'exp':false,'key':false},enumerable:false});s[1].WHEN['swapAES']=function(_){delete s[1].WHEN['swapAES'];var oo=d(_.oo).split('&&');var temp='',proof='';var i=1;for(i;i<=16;i++){var sec=o[prv].key.decrypt(f.util.decode64(oo[i]));if(sec.indexOf('@@')!==0){break;}else{temp=temp+(sec.replace('@@',''));}}if(i!==(16+1)){eve('eve: swapAES level 1 bad length');}else{oo=d(temp).split('$$');temp='';i=1;for(i;i<=4;i++){var sec=o[pub].key.decrypt(f.util.decode64(oo[i]));if(sec.indexOf('##')!==1){break;}else{sec=sec.split('##');temp=temp+sec[1];proof=proof+(sec[0]).toString();}}if(i!==(4+1)){eve('eve: swapAES level 2 bad length');}else{if(browser()){o[aes].njs=temp;}else{o[aes].win=temp;}o[aes].num=proof;_=temp=proof=i=oo=null;if((o[aes].win)&&(o[aes].njs)){xAES();}}}};function setAES(){function O9(){var R=(Math.floor((Math.random()*9))).toString();expect=expect+R;return R;}var oo=f.util.bytesToHex(f.random.getBytesSync(32));if(browser()){o[aes].win=oo;}else{o[aes].njs=oo;}var expect='';oo=e('$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring(0,(oo.length/4))))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4),(oo.length/4)*2)))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4)*2,(oo.length/4)*3)))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4)*3))));oo=e('&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring(0,(oo.length/16))))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16),(oo.length/16)*2)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*2,(oo.length/16)*3)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*3,(oo.length/16)*4)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*4,(oo.length/16)*5)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*5,(oo.length/16)*6)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*6,(oo.length/16)*7)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*7,(oo.length/16)*8)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*8,(oo.length/16)*9)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*9,(oo.length/16)*10)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*10,(oo.length/16)*11)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*11,(oo.length/16)*12)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*12,(oo.length/16)*13)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*13,(oo.length/16)*14)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*14,(oo.length/16)*15)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*15))));o[aes].exp=expect;expect=null;(function(){var cp=oo.toString();oo=null;s[1].WIRE('swapAES',{'oo':cp});})();}var pvBEGIN='-----BEGIN RSA PRIVATE KEY-----',pvEND='-----END RSA PRIVATE KEY-----',pbBEGIN='-----BEGIN PUBLIC KEY-----',pbEND='-----END PUBLIC KEY-----';s[1].WHEN['quadRSA']=function(_){delete s[1].WHEN['quadRSA'];_.lnk=_.lnk.split('$');Object.defineProperty(o,pub,{value:{'key':f.pki.privateKeyFromPem(pvBEGIN+d(_.lnk[0])+pvEND),'loc':f.pki.publicKeyFromPem(pbBEGIN+d(_.lnk[1])+pbEND)},enumerable:false});setAES();};(function(){var k1=f.pki.rsa.generateKeyPair({bits: 896,e:0x10001});var k2=f.pki.rsa.generateKeyPair({bits: 896,e:0x10001});var prvloc=k1.publicKey;var pubkey=k1.privateKey;k1=null;var publoc=k2.publicKey;var prvkey=k2.privateKey;k2=null;Object.defineProperty(o,prv,{value:{'key':prvkey,'loc':prvloc},enumerable:false});pubkey=(f.pki.privateKeyToPem(pubkey).toString().replace(pvBEGIN,'').replace(pvEND,''));publoc=(f.pki.publicKeyToPem(publoc).toString().replace(pbBEGIN,'').replace(pbEND,''));(function(){var cp=(e(pubkey)+'$'+e(publoc));pubkey=publoc=null;s[1].WIRE('quadRSA',{'lnk':cp});})();})();function REWIRE(){var NULL=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));Object.defineProperty(s[1],NULL,{value:{WIRE:function(func,data){s[1].WIRE('ᴎ',eAES({'f':func,'d':data}));},WHEN:[]},enumerable:false});s[1].WHEN['ᴎ']=function(_){_=dAES(_);if(_){try{s[1][NULL].WHEN[_.f](_.d);}catch(e){console.log(e);console.log('ERROR on try: EVENT '+_.f+' FROM s['+this.sid+']');console.dir(_);}}};
						s[1][NULL].WHEN['mob:try.li:svr']=function(_){
							var logins=G.login.all()
							,	found=undefined;
							for(var i=0;i<logins.length;++i){if(_.auth==logins[i].a){found=logins[i];break}}
							if(found){
								function istab(){ //f                         //d   //room    //option ip
									var n=s[1].ADDR('svr:istab.li:uzr:'+found.u,found,found.u,{'ip':found.ip});//count who you sent to, the person should be of the same ip in the room
									if(n==0){s[1].RAW('svr:notab.li:mob');}
									else if(n>1){}//exception? we sent login to more than one user
									else if(n==1){
										var ⴲ='../U/'+found.pid+'.png';
										fs.stat(ⴲ,function(e){
											if(!e){
												var c=new C(size,size)
												,	ᐁ=c.getContext('2d')
												,	ꕤ=new C.Image;
												ꕤ.onload=function(){
													ᐁ.drawImage(ꕤ,0,0);
													s[1].WIRE('svr:oktab.li:mob',{face:c.toDataURL(),nm:found.n});
													c=ᐁ=ⴲ=ꕤ=i=logins=n=found=null;
													}
												ꕤ.src=ⴲ;
												}
											else{
												fs.writeFile('../U/'+found.pid+'.png',new Buffer(found.face.replace('data:image/png;base64,',''),'base64'),function(e){
													s[1].WIRE('svr:oktab.li:mob',{face:found.face,nm:found.n});
													ⴲ=i=logins=n=found=null;
													});}});}}
								db.find('uzr',{e:{$eq:found.e}},function(r){
									r=r[0];
									if(r){//existing user
										found.pid=r._id;
										found.n=r.n!=found.n?r.n:found.n;
										found.t=r.t;
										found.b=r.b;
										found.l=r.l;
										db.update('uzr',{_id:found.pid},{$set:{l:+new Date(),ip:found.ip}},function(){
											istab();
											});}
									else{//new user
										db.insert('uzr',{
											ip:found.ip
										//,	u:found.u
										//,	a:found.a
										,	e:found.e
										,	n:found.n
										,	t:found.t
										,	b:found.b
										,	r:found.r
										,	l:+new Date()
										},function(r){
											found.pid=r.opt[0]._id;
											istab();
											});
										}});}
							else{s[1].WIRE('svr:404.li:mob');}//not found means expired login object or an attempted hack
							};
						}})();NULL=null;}
				/////////////////////////
				//
				//
				s[1].WHEN['Lo']=function(_){}
				s[1].WHEN['?']=function(previousUID){
					delete s[1].WHEN['?'];
					console.dir(s[1].uid);
					U.uid=s[1].uid;
					console.dir(s[1]);
					s[1].JOIN(U.uid);//join self to recieve reactions
					(previousUID)&&(s[1].JOIN(previousUID));
					s[1].WIRE('=',U.uid);
					};
				s[1].WHEN['o']=function(_){//need to get username//---users---////_id//email//screen_name//tags//bages//mem
					s[1].WIRE('o',{nm:'KILRBIT',dt:'',gw:'',tp:0,pq:0.0055,op:0});
					};
				return;
				}
		,	check:function(uid){
				var res=[false,false];
				uid==U.uid?[res[0]=true]:[s[1].uid=U.uid,uid=U.uid];
				pid==U.pid?[res[1]=true]:[s[1].pid=U.pid,pid=U.pid];
				return res.indexOf(false)==-1?true:false;
				}
			};'> listen on startup >';U.listen();





		var Ə={
			gmail:require("../node_modules/nodemailer").createTransport({service:'Gmail','auth':{'user':'login.killrbit@gmail.com','pass':'a76703455784d52586270513d3d'}})
		,	login:function(qr,name,cb){
				Ə.gmail.sendMail({
					subject:'Login'
				,	from:'login.killrbit@gmail.com'
				,	to:U.e
				,	html:'Welcome '+name+', <br><br>Scan the QR image below and your mobile device will log your computer into the site.<br><img src="cid:login@kilrbit.com" alt="QR image"/><br>This QR will expire in one hour.'
				,	attachments:[{filename:'qrimage.png',content:new Buffer(qr.replace('data:image/png;base64,',''),'base64'),encoding:'base64',cid:'login@kilrbit.com'}]
					},function(e,r){console.log(e,r);cb(e?true:false);});
					}};















	//TODO on any image upload png optimize -86%










	var QR={
		million:undefined
	,	login:function(auth){
			var cells=qr('137.74.145.40/L/?'+auth).modules
			,	row
			,	num=4
			,	at=num*num
			,	size=(cells.length*num)+at
			,	c=new C(size,size)
			,	ᐁ=c.getContext('2d');
	  		for(var y=0;y<cells.length;++y){
				row=cells[y];
				for(var x=0;x<row.length;++x){
					ᐁ.fillStyle=row[x]?'#000':'#FFF';
					ᐁ.fillRect((x*num)+at,(y*num)+at,num,num);
					}}
			return c.toDataURL();
			}
	,	listen:function(){
			var ws=require('ws')
			,	h=[];//client sends s a qr request, s relays it to h, h gets it and gives it to s, s relays it to the client.
			function ɥ(n,p,m){h[n].removeEventListener('onopen',h[n].o);h[n].removeEventListener('onmessage',h[n].m);delete s[n].WHEN['@'];H(n,p,m);}//clean up dead socket
			function H(n,p,m){h[n]=new ws('ws://localhost:'+p);h[n].m=function(m){var n=arguments.callee.info.n;m=JSON.parse(m);s[n].JSON(m.f,m.d);};h[n].m.info={n:n};h[n].o=function(){var n=arguments.callee.info.n;var p=arguments.callee.info.p;h[n].on("message",h[n].m);s[n].WHEN['@']=function(m,ϟ){var n=arguments.callee.info.n;var p=arguments.callee.info.p;if(h[n].readyState==1){h[n].send(JSON.stringify({d:m}));}else{ɥ(n,p,m);}};s[n].WHEN['@'].info={n:n,p:p};};h[n].o.info={n:n,p:p};h[n].on('open',h[n].o);if(m){if(h[n].readyState==1){h[n].send(JSON.stringify({d:m}));}else{console.log('closed');}}return;}//connect or reconnect
			H(02,8022);H(03,8023);H(04,8024);
			H(05,8025);H(06,8026);H(07,8027);
			H(08,8028);H(09,8029);H(10,8030);
			H(11,8031);H(12,8032);H(13,8033);
			H(14,8034);H(15,8035);H(16,8036);
			}
		};'> listen on startup >';//QR.listen();















		//login.killrbit@gmail.com pass noreply.computerstudio.eu@gmail.com


		//click login/register
		//insert email
		//get emailed qr
		//scan qr with mobile    (db_auth_code==U.uid;date;)
		//mobile sends authcode to server
		//server checks the date and the db for the code matching the email
		//server gets the user id
		//server logsin the uid computer as pid




		//                                                           !! the app is switched of !!



















/*
		var db={										//docs
			million:{
				_id: 400								//qr million id
			,	e:'https://soundcloud.com/pumkinbeats'	//mobile end location
    		,	r:'sc=pumkinbeats/nov-rock-2014'		//screen reaction
    		,	t:[]									//tags list
    		,	s:0										//scans
    		,	o:1										//owner == pid
    		,	dt:1434410645690						//date fro start of current contract or from end of last contract
    		,	gw:0									//give aways remaining
    		,	ge:''									//give away mobile end location
    		,	gr:''									//give away rule 1/100 #500
    		,	tp:0									//tips btc amounts list since last update
    		,	rd:1									//rent duration months
    		,	rp:0.0451								//rent price btc
    		,	rf:0									//owner aditional release fee btc
    			}										//TODO need to add owner last updated
		,	addr:{
				_id:1									//address id
			,	a:'1HsQGkAE34DYNSMb3jJUXytSu2RGftvJg5'	//address
    		,	q:-1									//qr million id
    		,	e:-1									//expected amount in btc
    		,	t:[]									//tx list ??
    		,	o:-1									//owner == pid
    			}
		,	uzr:{
				_id:-1									//pid
			,	ip:'00.00.000.000'						//current ip
			,	u:'01234567890YTDRVYtyfr'				//current unique computer id
			,	a:'unix+random16alphaNumeric'			//auth string and remember me matches local storage item
			,	e:'me@example.com'						//email
			,	n:'ben.muircroft'						//screen name
			,	t:[]									//tags interests
			,	b:[]									//badges
			,	r:0										//rep
			,	l:01234556789							//last logged in
			}};
*/





		/*
		s[1].WHEN['reaction']=function(_){console.log(_);
	  		var xuid=_.u;
	  		var qr=_.q;//.replace(/^0+/,'');
	  		console.log('r: '+xuid+qr);
			s[1].SHOUT('play',{'uid':s[1].uid,'qr':qr},[xuid]);
			db.query("SELECT * FROM million WHERE n='"+qr+"'").on('row',function(r){
				s[1].WIRE('playing',{'end':r.end});//socket.emit('scanpedia_playing',{'end':r.end});
				});};*/







	s[1].WIRE('!');//APP IS READY



};//exports
