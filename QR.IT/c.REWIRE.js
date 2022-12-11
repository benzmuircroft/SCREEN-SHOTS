var connect=function(host,sockets,ports,data,app){
	
	var polport=host.split('@');host=polport[0];polport=polport[1];
	
	window.console.log('REWIRE.io  Hello World.');
	
	var yenc = {
		reserved : [0, 10, 13, 61],
		each : function(obj, iterator, context) {
			var breaker = {};
			if (obj === null) { return; }
			if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {obj.forEach(iterator, context);} 
			else if (obj.length === +obj.length) {for (var i = 0, l = obj.length; i < l; i++) {if (iterator.call(context, obj[i], i, obj) === breaker) { return; }}} 
			else {for (var key in obj) {if (obj.hasOwnProperty(key)) {if (iterator.call(context, obj[key], key, obj) === breaker) { return; }}}}
		},
		toBytes : function(source) {
			var output = [],	i = 0,	j = 0,	subchar;
			for (; i < source.length; i++) {
				if (source.charCodeAt(i) <= 0x7F) {output.push(source.charCodeAt(i));} 
				else {subchar = encodeURIComponent(source.charAt(i)).substr(1).split('%');for (j = 0; j < subchar.length; j++) {output.push(parseInt(subchar[j], 16));}}
				}return output;},
		fromBytes : function(source) {
			var output = '',	i = 0;
			for (; i < source.length; i++) {
				if (source[i] <= 127) {if (source[i] === 37) {output += "%25";} else {output += String.fromCharCode(source[i]);}} 
				else {output += "%"+ source[i].toString(16).toUpperCase();}
				}return decodeURIComponent(output);},
		encode : function(source) {
			var output = '',	bytes = [],	converted;
			bytes = yenc.toBytes(source);
			yenc.each(bytes, function(ele, i){
				converted = (ele + 42) % 256;
				if (reserved.indexOf(converted) < 0) {output += String.fromCharCode(converted);} 
				else {converted = (converted + 64) % 256;output += "="+ String.fromCharCode(converted);}
			});return output;},
		decode : function(source) {
			var output = [],	ck = false,	bytes = [],	i = 0,	c;
			for (i = 0; i < source.length; i++) {
				c = source.charCodeAt(i);
				if (c === 13 || c === 10) { continue; }
				if (c === 61 && !ck) {ck = true;continue;}
				if (ck) {ck = false;c = c - 64;}
				if (c < 42 && c > 0) {output.push(c + 214);} 
				else {output.push(c - 42);}
			}return yenc.fromBytes(output);}
	};//--------------------------------------------yenc
	
	
	
	console.log('trace'+1);
	
	
	
	var BIT={
		enc:function(i){
			var s='';
			for(var v in i){
				if(i[v] instanceof Object){//s
					var ii=i[v];
					var ss='«';
					for(var vv in ii){
						ss=(ss==='«')?ss+vv+'°'+ii[vv]:ss+'~'+vv+'°'+ii[vv];//¤
						}
					s=s+'¬'+v+'^'+ss;
					}//e
				else{s=(s==='')?v+'^'+i[v]:s+'¬'+v+'^'+i[v];}
				}return s;//string
		},
		dec:function(p){
			var iTXt1='',iTXt2='';
			if(p.indexOf('1IMG')!==-1&&p.indexOf('IMG1')!==-1){
				var sp = p.indexOf('1IMG')+4;
				var ep = p.indexOf('IMG1');
				iTXt1 = p.substring(sp,ep);
				p=p.replace(iTXt1,'');
				if(p.indexOf('2IMG')!==-1&&p.indexOf('IMG2')!==-1){
					sp = p.indexOf('2IMG')+4;
					ep = p.indexOf('IMG2');
					iTXt2 = p.substring(sp,ep);
					p=p.replace(iTXt2,'');
					}}//fast
			var o={};
			p=p.split('¬');
			for(var n=0;n<p.length;n++){
				var k=p[n].split('^');
				var v=k[1];
				k=k[0];
				if(v.indexOf('«')===0){
					var oo={};
					var pp=v;pp=pp.slice(1);pp=pp.split('~');//¤
					for(var nn=0;nn<pp.length;nn++){
						var kk=pp[nn].split('°');
						var vv=kk[1];
						kk=kk[0];
						if(vv==='1IMGIMG1'){oo[kk]=yenc.decode(iTXt1);}else if(vv==='2IMGIMG2'){oo[kk]=yenc.decode(iTXt2);}//fast
						else{oo[kk]=(/^\d+$/.test(vv))?parseInt(vv):vv;}
						}o[k]=oo;}
				else{o[k]=(/^\d+$/.test(v))?parseInt(v):v;}
				}return o;}//object
		};//---------------BIT
	
	
	console.log('trace'+2);
	
	
	
	var BUILD=0;
	var MEM={};
	LOADSTATE=0;//For use in C.app.js
	var H=0,tH;//HANDSHAKEN
	var MAXL=0;
	MAXL=parseInt($('#LOADER').attr('MAX'))/(sockets.length+2);
	$('#LOADER').animate({width:$('#LOADER').width()+MAXL+'px'});
	//console.log(MAXL);
		
	function pull(arr,val){for(var i = 0, j = 0, l = arr.length; i < l; i++){if(arr[i]!==val){arr[j++]=arr[i];}}arr.length=j;}

	
	//var nickname=data.nickname;
	
	//console.log(sockets,ports);
	var m=sockets[0];//master
	var m_port=ports[0];
	var w=sockets;pull(w,w[0]);//workers
	var w_ports=ports;pull(w_ports,w_ports[0]);
	sockets.unshift(m);
	ports.unshift(m_port);
	//console.log(sockets,ports);
	



	var d=new Date().getTime();
	
	
	
	

	function defineSocket(){
		//WORKING iPhone
		//'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25'//just in safari web browser
		//'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25'//Qrafter
		//'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3'//scan my docs
		//'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53'//QR code (with heart in logo)
		//'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53'//neomeadia. in safari
		//BROKEN iPhone
		//'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329'//all under is scan app.chrome
		//'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329'//scan
		//'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329'//safari
		//'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a'//neomedia. standard. ???? opens in safari settings
		//'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a'//scan life
		//'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a'//KaywaReader
		//WORKING ANDROID
		//'Mozilla/5.0 (Linux; U; Android 4.1.2; en-gb; GT-I9100 Build/JZO54K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'//android
		//'Mozilla/5.0 (Linux; Android 4.1.2; GT-I9100 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari/537.36'//google chrome
		//BROKEN ANDROID
		//'Mozilla/5.0 (Linux; Android 4.1.2; GT-I9100 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari/537.36'//dolphin (smae srings as chrome)
		
		var dev=navigator.userAgent;
		if(//SKIP BROKEN
			dev.indexOf('Mozilla/5.0')===0
			&&
			((dev.indexOf('iPhone')!==-1)||(dev.indexOf('iPad')!==-1)||dev.indexOf('Mac')!==-1)
			&&(
			(dev.indexOf('AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329')===-1)
				||
			(dev.indexOf('AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B554a')===-1)
				||
			(dev.indexOf('AppleWebKit/537.73.11 (KHTML, like Gecko) Version/7.0.1 Safari/537.73.11')===-1)
				||
			(dev.indexOf('AppleWebKit/')===-1)
			)
		   ){S[m].conn();}
		else{
			console.log('trace'+3);
			$.getScript('_S/swfobject.js?_='+d,function(){console.log('trace'+4);$.getScript('_S/web_socket.js?_='+d,function(){console.log('trace'+5);
				console.log('###');
				window.WEB_SOCKET_SWF_LOCATION="WebSocketMain.swf";
				window.WEB_SOCKET_DEBUG=true;
				S[m].conn();
				});});
				}}
		
		

		
		
		//MAIN SOCKET
		S[m]={};
		S[m].reconn=function(){
			$('#loaderbar').show();$('#LOADER').css({'width':'0px'});
			if($('#GLASS').length===0){
				$('body').prepend(
						'<div id="GLASS"style="width:100%;height:100%;position:fixed;top:0px;left:0px;z-index:9999999;">'+
						'<div style="position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-100px;width:187px;height:65px;font-family:arial;color:#747474;font-size:10px;text-align:center;background:#E5E5E5;border:3px solid #BFBFBF;padding:10px;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;">'+
						'<b>Your Internet Is Connecting...<b><br><br><b><b id="RECONNECT"style="color:#747474;">0</b><br><br><b style="font-size:8px;color:#000;"><b style="color:#FF0000;">RE</b>WIRE.io</b></b>'+
						'</div></div>'
						);}
						console.log();
			S[m].timer=setTimeout(function(){
				console.log('[REWIRE] reconnecting');
				S[m].conn();
			},2000);
			}
		S[m].timer=null;
		S[m].conn=function(){
			console.log('s['+m+'] master connecting...');
			//console.log('--------------------------------------------------'+s[m-].readyState);
			if(!s[m]||s[m]===null/*||s[m].readyState!==1*/){//console.log(!s[m]+s[m].readyState);
				s[m]=new WebSocket('ws://'+host+':'+(m_port));
				s[m].sid=m;
				s[m].onopen=function(){
					//console.dir(window.WebSocket);
					$('#LOADER').animate({width:$('#LOADER').width()+MAXL+'px'});
					console.log('s['+m+'] open');
					$('#GLASS').remove();
					clearTimeout(S[m].timer);
					if(w.length>1){
						getnextworker();
						}
					else{power();}
					};
				s[m].onerror=function(e){console.dir(m+'error: '+e);};
				s[m].onclose=function(){
					H=0;
					$('#RECONNECT').text(parseInt($('#RECONNECT').text())+(1));
					console.log('s['+m+'] closed!');
					clearTimeout(S[m].timer);
					n=0;
					$(sockets).each(function(i,a){s[a]=null;});
					S[m].reconn();
					};
				return;
				}else{
					if(w.length>0){
						getnextworker();
						}
					else{power();}
					}return;}
		

		
		
		defineSocket();
		
		
		
		var n=0;
		
		
		
		
		function getnextworker(){if(w[n+1]){n=n+1;workers();}}
		
		
		
		
		function workers(){
			var v=w[n];
			S[v]={};
			S[v].timer=null;
			S[v].conn=function(){
				console.log('s['+v+'] worker connecting...');
				//console.log('--------------------------------------------------'+s[v].readyState);
				if(!s[v]||s[v]===null/*||s[v].readyState!==1*/){
					s[v]=new WebSocket('ws://'+host+':'+(w_ports[n]));
					s[v].sid=v;
					s[v].onopen=function(){
						$('#LOADER').animate({width:$('#LOADER').width()+MAXL+'px'});
						console.log('s['+v+'] open');
						if(w[n+1]){
							getnextworker();
							}
						else{power();}
						};
					s[v].onerror=function(e){console.dir(v+'error: '+e);};
					s[v].onclose=function(){
						console.log('s['+v+'] closed!');
						n=0;
						S[m].conn();
						};
					return;
					}else{
						if(w[n+1]){
							getnextworker();
							}
						else{power();}}return;}
				S[v].conn();
				};
		
		
		
				
			
				
				
		
		
		window.onunload=function(){
			$(sockets).each(function(i,v){if(s[v]){s[v].close();}});
			};
		
		
		function power(){/*setTimeout(function(){*/console.log('POWER');
			function HANDSHAKEN(){
				window.console.log('>>POWER<<');$('#LOADER').animate({width:$('#LOADER').width()+MAXL+'px'},20);
				
			n=0;
			$(sockets).each(function(i,v){
				var ii=v;
				/*API WHEN EVENTS*///see on connect
				/*API SAY*/		s[v].WIRE=function(func,data){var _={f/*unc*/:func,d/*ata*/:data};s[ii].send('«'+BIT.enc(_));}
				/*API SAY*/		//s[v].WIRE=function(func,data){var _={func:func,data:data};this.send(JSON.stringify(_));}
				/*API SAY_TO*/	//s[v].SAY=function(func,data,to){var _={func:'SAY',data:{pass:func,data:data,to:to}};this.send(JSON.stringify(_));}
				/*API SHOUT*/	//s[v].SHOUT=function(func,data){if(func==='CONN'){var _={func:func,data:data};this.send(JSON.stringify(_));}else{var _={func:'SHOUT',data:data};data.func=func;this.send(JSON.stringify(_));}}
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//###############################################################################################[BUILD]
			if(BUILD===0){// 0 if the server needs to build the client.
				BUILD=1;
				LOADSTATE=1;
				/*API WHEN*/$(sockets).each(function(i,v){s[v].WHEN={};var ii=v;MEM['s'+ii]={};Object.observe(s[v].WHEN,function(x){MEM['s'+ii].WHEN=s[ii].WHEN;});});
				s[m].WHEN['ROOMS']=function(_){MEM.ROOMS=_.rooms};
				console.log('connected');
				APP();//START APP
				}
			else{//BUILD is 1 if the client remembers
				LOADSTATE=2;
				/*API WHEN*/$(sockets).each(function(i,v){s[v].WHEN=MEM['s'+v].WHEN;});
				if(MEM.ROOMS){s[m].WIRE('ROOMS',{'rooms':MEM.ROOMS});}
				console.log('[re]connected');
				APP();
				}
			//##################################################===========#################################[START]
			function APP(){
				console.log('get: '+app);$.getScript(app,function(){$('#loaderbar').hide();console.log('got: '+app);});	
				}
			////##############################################################################################[END]
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			$(sockets).each(function(i,v){
				s[v].onmessage=function(_){console.dir(_);
					if(_.data.indexOf('HANDSHAKE'/*N*/)===-1){
					_=(_.data.indexOf('«')===0)?BIT.dec(_.data.slice(1)):JSON.parse(_.data);/*-*/console.dir(_);// f d
					if(_.f){
						if(s[this.sid].WHEN[_.f]){
							s[this.sid].WHEN[_.f](_.d);
							}
						else{
							console.log('NO EVENT '+_.f+' FROM s['+this.sid+']');console.dir(_);
							}}
						else{console.log('NO _.func FROM s['+this.sid+']');console.dir(_);}
						};}});
			}//<HANDSHAKEN
			/*HANDSHAKE*///--------------------------------------------------------
			s[m].onmessage=function(_){
				//if(_.data.indexOf('«')===1){return;}
				//else{
					_=(_.data.indexOf('«')===0)?BIT.dec(_.data.slice(1)):JSON.parse(_.data);
					if(_.hand==='HANDSHAKE'){//received from server , asks are you there?
						H=1;
						uid=_.uid;
						console.log('HANDSHAKE received..');
						s[m].send('«'+BIT.enc({f:'HANDSHAKEN',d:{'PARTITION':app}}));//sends - yes i am!
						}
					else if(_.hand==='HANDSHAKEN'){//receives - ok i see you now!
						H=1;
						uid=_.uid;
						console.log('HANDSHAKEN received..');
						HANDSHAKEN();
						}
					else{return;}//}
					};
				//
			if(H===0){
				tH=setInterval(function(){
					if(H===1){
						clearInterval(tH);
						}
					else{
						console.log('sending HANDSHAKE..');
						s[m].send('«'+BIT.enc({f:'HANDSHAKE',d:{'PARTITION':app}}));// sends - hi im here!!...... waits for HANDSHAKEN
						}
					},1000);
				}//------------------------------------------------------------------------
			}//power

};//connect