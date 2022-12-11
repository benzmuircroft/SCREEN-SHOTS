module.exports=function(host,sockets,ports,app,G,public_dir){
	var NAME='s.REWIRE.js';
	console.log('REWIRE.io Hello World.');
	var pfs=require(__dirname+'/../node_modules/prepend-file');
	var forge=require(__dirname+'/../node_modules/node-forge');
	var fs=require('fs');
	const ꗃ=forge.pki.rsa.generateKeyPair({bits:130,e:0x10001});
	const eꗃ=function(it){return forge.util.encode64(ꗃ.publicKey.encrypt(it)).replace(/\/|\+|\=/g,'');};
	const ndate=+new Date();
	const nonce=(typeof app!=="function")?eꗃ(ndate):null;
	const Capp=app.replace('S.','C.').replace('.js','');
	const location=Capp+'.'+nonce+'.js';
	const public_html=public_dir||'public_html';
	var WebSocketServer=require(__dirname+'/../node_modules/ws').Server;
	var BIT={
			enc:function(i){var s='';for(var v in i){if(i[v] instanceof Object){var ii=i[v];var ss='«';for(var vv in ii){ss=(ss==='«')?ss+vv+'°'+ii[vv]:ss+'~'+vv+'°'+ii[vv];}s=s+'¬'+v+'^'+ss;}else{s=(s==='')?v+'^'+i[v]:s+'¬'+v+'^'+i[v];}}return s;}
		,	dec:function(p){var o={};p=p.split('¬');for(var n=0;n<p.length;n++){var k=p[n].split('^');var v=k[1];k=k[0];if(v.indexOf('«')===0){var oo={};var pp=v;pp=pp.slice(1);pp=pp.split('~');for(var nn=0;nn<pp.length;nn++){var kk=pp[nn].split('°');var vv=kk[1];kk=kk[0];oo[kk]=(/^\d+$/.test(vv))?(vv[0]=='0')?vv:parseInt(vv):vv;}o[k]=oo;}else{o[k]=(/^\d+$/.test(v))?(v[0]=='0')?v:parseInt(v):v;}}return o;}
			};
	var UID=function(){var d=new Date().getTime();d=d.toString();var text='';var possible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';for(var i=0;i<9;i++){text+=possible.charAt(Math.floor(Math.random()*possible.length));}return d+text;};
	var m=sockets[0]
	,	w=sockets.slice(1)
	,	mp=ports[0]
	,	wp=ports.slice(1)
	,	S=G.R={}//collection of conected socket teams
	,	R=G.R=[]//rooms
	,	ss=ss||{}
		;
	ss.l=function(){
		ss[m]=ss[m]||new WebSocketServer({
			server:G.https[m]//hs[m]
		,	perMessageDeflate:false
		,	verifyClient:function(info,cb){
				console.log({'info':info});
				if((['https://'+host].indexOf(info.req.headers.origin)!==-1&&!info.req.client._tlsOptions.server.BANNED)){
					cb(true);
					}
				else{
					var vault=info.req.url.split('&')[0].slice(2);
					var pass;
					var vpem={
						"privateKey": "-----BEGIN RSA PRIVATE KEY-----\r\nMIICEwIBAAJxALaDzFGPE/Uqhx+lhlDEwt++2U8DieD3CZpZqVh6RI76FAt0UVm/\r\nD7wwsfHLsLXyqspdaNEb3vZO0MI8UqGoKNNM0rhxnZ69WAhmpsmTnO0Sm7CFaO6Z\r\nA9FwCqW06demsceiUzi7V//ndXAK6B2JcsMCAwEAAQJwEnvEfFn+Dm0RJB5SPOnA\r\nRoKAZWUZWIQMH+qGoOQ4/zXKQ+KyvmEACfHwg2k6ayK5MydEjzDAYrcqX3jlnj7c\r\nbDWezBMC+fTiySve5c9isRSv7VXX1AY7jY2I4S4hyyDLc5ihqV92Y4dxuSmHqlMf\r\nqQI5APq4GtwbkDwdfXo3mAefCOiSJvHnmlqTRtBw/t/iG8zaNheR8sWydYFkAQJd\r\n+YBZhZ6+uzhUnbffAjkAulvuRmGCUWsEkwc9rWm+W7YFYjKJ9ewfTR41X9IgvHhw\r\nIEFtPvsqOUi+FJEegCt19ptG8AMiMZ0COQD2k3YnHxydYstzFZX5eNlEEeknZAYU\r\nKmAsw9SGz1NUBw/H4owHDtot5PJxJ4coSeL2GtL6NY3ftQI4XqjdkkBrWoHak/hE\r\nmvYwbBM8DtIPA6yJhbmHcQGiATnH8oppPGmF3A0YCAhijsYEqFvdH4Ln9n0COQDD\r\nVhnU+wp4BOZcPfJP+KcepuhqOvHDtRFel/10kmVoE5h+HSxs0X2IlifTfKrLsSZ/\r\nDFrZmOBo/A==\r\n-----END RSA PRIVATE KEY-----\r\n",
						};
					try{pass=forge.pki.privateKeyFromPem(vpem.privateKey).decrypt(forge.util.hexToBytes(vault));}
					catch(ERROR){console.log({error:ERROR,vault:vault,inforequrl:info.req.url},'@verifyClient.'+NAME);pass=false;}
					if(Number(pass)>(+new Date())){console.log('welcome admin!','@verifyClient-is-admin.'+NAME);cb(true);}
					}
				}});
		G.SS=ss[m];
		ss[m].sid=m;
		for(var i=0,v=w[i];i<w.length;++i,v=w[i]){//wait for the workers
			ss[v]=ss[v]||new WebSocketServer({
				server:G.https[v]//hs[v]
			,	perMessageDeflate:false
			,	verifyClient:function(info,cb){
				if(['https://'+host].indexOf(info.req.headers.origin)!==-1){cb(true);}
				}});
			ss[v].sid=v;
			}
		return;};'> servers listening >';ss.l();
	ss[m].on('error',function(ERROR){
		console.log({error:ERROR,s:m},'@ss[m]-on-error.'+NAME);
		});
	ss[m].on('connection',function(main,req){
		var uid=UID();
		var s={};
		s[m]=main;
		if(req.headers.origin=='null'){
			s[m].file=true;
			}
		s[m].location=location;
		s[m].Capp=Capp;
		if(req.url.indexOf('mob=true')!==-1){
			s[m].location=s[m].location.replace(s[m].Capp,Capp+'.mob');
			s[m].Capp=Capp+'.mob';
			}
		s[m].pv='::;;';
		s[m]._socket.setKeepAlive(true,100);
		S[uid]=s;
		s[m].ip=s[m]._socket.remoteAddress;
		s.ᔐ={
		x:function(){//execute the app
			var S=undefined;
			delete s.ᔐ.x;
			delete s.ᔐ.j;
			delete s.ᔐ.a;
			delete s.ᔐ.q;
			s.ᔐ.m=function(V,U,f,d){//msg
				if(f&&f!='ɦ'){
					if([-1,1].indexOf([s[m].uid+'.w1',s[m].uid+'.w'+V,s[m].uid].indexOf(U))){
						if(s[V].WHEN[f]){
		    				s[V].WHEN[f](d,[V,f]);//can debug
		    				}
		    			else{G.BAN.ip(s[m],'s['+V+']WHEN '+f+'==undefined',f,d);}//debug ERR1
		    			}
	    			else{G.BAN.ip(s[m],'uid not correct;',f,d);}
	    			}
	    		else if(d.h=='::got-script;;'&&s[m].pv=='::rewire-ready;;'){s[m].pv='::got-script;;';
	    			try{fs.unlinkSync(__dirname+'/../'+public_html+'/REWIRE.temp/'+s[m].location);}catch(e){}
	    			}
				else{G.BAN.ip(s[m],'loading order '+f+' provided when '+d.h+' expected.',f,d);}//debug ERR2
				};
			if(typeof app!=="function"){
				require(__dirname+'/../private_js/'+app)(s,G,null,s[m].uid);
				}
			else{
				app(s,G,null,s[m].uid);
				}
			return;
			}
	,	j:function(){
			s[m].JOIN(uid);//for(var i=0,v=sockets[i];i<sockets.length;++i,v=sockets[i]){if(s[v].readyState!='n/a'){s[v].JOIN(uid);}}
			s.ᔐ.x();
			return;
			}
	,	a:function(){//attach api
			for(var i=0,v=sockets[i];i<sockets.length;++i,v=sockets[i]){
				s[v].nonce=nonce;
				var no_rooms=1;//this is a clue to if the client was in the app when it crashed (we don't know cause we're back from the dead maybe)
		   		s[v].WHEN=[];//s[v].WHEN['sid']=v;
		   		s[v].RAW=function(fd){var V=this.sid;if(s[V].readyState==1){s[V].send(fd);}else{}}
		    	s[v].WIRE=function(f,d){var V=this.sid;if(s[V].readyState==1){s[V].send('«'+BIT.enc({f:f,d:d}));}else{}return;}
		   		s[v].JSON=function(f,d){var V=this.sid;if(s[V].readyState==1){s[V].send('ʲ'+JSON.stringify({f:f,d:d}));}else{}return;};
		   		}
			s[m].ROOMS=[];
			s[m].JOIN=function(room){s[arguments.callee.info.m].ROOMS.push(room);return;}
			s[m].LEAVE=function(room){var i=s[arguments.callee.info.m].ROOMS.indexOf(room);if(i>-1){s[arguments.callee.info.m].ROOMS.splice(i,1);}return;}
			s[m].JOIN.info=s[m].LEAVE.info={m:m};
	   		if(!nonce){
	   			if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::api-rewire;;',re:no_rooms}}));}else{}//get the api and load the app and after the client can start the app!
	   			}
	   		else{
		   		var script=__dirname+'/../private_js/'+s[m].Capp+'.js';
		   		if(s[m].file){
		   		if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::api-rewire;;',re:no_rooms,nonce:nonce}}));}else{}
		   			}
		   		else{
			   		script=fs.readFileSync(script).toString();
					setTimeout(function(fs,file){try{fs.unlinkSync();}catch(e){}},20000,fs,__dirname+'/../'+public_html+'/REWIRE.temp/'+s[m].location);
	 				fs.writeFile(__dirname+'/../'+public_html+'/REWIRE.temp/'+s[m].location,script,function(ERROR){
	 					if(ERROR){console.log({error:ERROR},'@fs-writeFile-temp.'+NAME);}
						else{
							pfs(__dirname+'/../'+public_html+'/REWIRE.temp/'+s[m].location,'window.nonce="'+nonce+'";\n',function(ERROR){
								if(ERROR){console.log({error:ERROR},'@pfs-writeFile-temp.'+NAME);}
								if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::api-rewire;;',re:no_rooms,nonce:'https://methodise.me/REWIRE.temp/'+s[m].location}}));}else{}//get the api and load the app and after the client can start the app!
								});}});}}}
	,	q:function(){//query all ready
			var ready=true,which=-1;
			for(var i=0,v=sockets[i];i<sockets.length;++i,v=sockets[i]){if([1,'n/a'].indexOf((s[v]||[]).readyState)===-1){which=v;ready=false;}}
			return ready;//ready to attach api
			}
	,	m:function(V,U,f,d){//msg
				if(f=='ɦ'){
					if(d.h=='::list-workers;;'&&s[m].pv=='::;;'){s[m].pv='::list-workers;;';
						d.l=d.l.split(',');
						for(var i=0,v=sockets[i];i<sockets.length;++i,v=sockets[i]){
							if(!d.l[i]){d.l[i]=v;s[v]={sid:v,uid:uid+'.w'+v,readyState:'n/a',close:null,message:null,send:null,WHEN:{}};}//dummy
							}
						if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::dummy-workers;;',l:d.l.slice(1).join()}}));}else{}//get the workers and dummys
						}
					else if(d.h=='::got-workers;;'&&s[m].pv=='::list-workers;;'){s[m].pv='::got-workers;;';s.ᔐ.a();}//got the workers both sides
					else if(d.h=='::rewire-ready;;'&&s[m].pv=='::got-workers;;'){s[m].pv='::rewire-ready;;';s.ᔐ.x();}//client has loaded the api
					}
				else if(f=='Ʀ'){
					//could rejoin some rooms here
					}
				else{G.BAN.ip(s[m],'unexpected msg',f,d);}
			return;
			}};
		s[m].sid=m;
		Object.defineProperty(s[m],"uid",{
			value:uid
		,	writable:false
		,	enumerable:true
		,	configurable:false
			});
		s[m].on('error',function(er){
			console.error(er);
			try{S[this.uid].close();}catch(IGNORE){}
			});
		s[m].on('close',function(code,data){
			if(this.G){G.s=undefined;}
			try{delete G.buying[this.Gid];}catch(e){}
			try{delete G.cashing[this.Gid];}catch(e){}
			try{S[this.uid].close();}catch(IGNORE){}
			delete S[this.uid];
			try{fs.unlinkSync(__dirname+'/../'+public_html+'/REWIRE.temp/'+s[m].location);}catch(IGNORE){}
			});//maybe the internet might come back????
		s[m].on('message',function(_){
			if(_=='.'){s[m].send('..');}
			else{
				_=(_.indexOf('«')===0)?BIT.dec(_.slice(1)):(_.indexOf('ʲ')===0)?JSON.parse(_.slice(1)):{f:_,d:_};
				s.ᔐ.m(this.sid,this.uid,_.f,_.d);
				}});
		if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::socket-uid;;',uid:s[m].uid}}));}else{}
		});//ss[m] on 'connection' end
	for(var i=0,v=w[i];i<w.length;++i,v=w[i]){//wait for the workers
		ss[v].on('error',function(ERROR){
			console.log({error:ERROR,s:v},'@ss[v]-on-error.'+NAME);
			});
		ss[v].on('connection',function(worker){
			var v=this.sid;
			worker.on('error',function(er){
				console.error(er);
				try{S[this.uid].close();}catch(IGNORE){}
				});
			worker.on('close',function(code,data){var clue=this.uid;if(this.uid){try{S[this.uid.split('.w')[0]].close();}catch(e){}};});
			worker.on('message',function(_){
				this._events.message=null;
				var s=S[_];
				s[v]=worker;
				s[v].sid=v;
				Object.defineProperty(s[v],"uid",{
					value:s[m].uid+'.w'+s[v].sid
				,	writable:false
				,	enumerable:true
				,	configurable:false
					});
				s[v].on('message',function(_){
					_=(_.indexOf('«')===0)?BIT.dec(_.slice(1)):(_.indexOf('ʲ')===0)?JSON.parse(_.slice(1)):{f:_,d:_};
					s.ᔐ.m(this.sid,this.uid,_.f,_.d);
					});
				if(s.ᔐ.q()){
					if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::match-workers;;'}}));}else{}//got all the workers here so they should match on the client
					}});});}
}//module.exports
