var connect=function(host,sockets,ports,data,app){
	
	var build=0;
	var mem={};
		
	function pull(arr,val){for(var i = 0, j = 0, l = arr.length; i < l; i++){if(arr[i]!==val){arr[j++]=arr[i];}}arr.length=j;}

	
	var nickname=data.nickname;
	
	//console.log(sockets,ports);
	var m=sockets[0];//master
	var m_port=ports[0];
	var w=sockets;pull(w,w[0]);//workers
	var w_ports=ports;pull(w_ports,w_ports[0]);
	sockets.unshift(m);
	ports.unshift(m_port);
	//console.log(sockets,ports);
	





	function defineSocket(){
		$.getScript('S/swfobject.js',function(){$.getScript('web_socket.js',function(){
			window.WEB_SOCKET_SWF_LOCATION="WebSocketMain.swf";
			window.WEB_SOCKET_DEBUG=true;
			S[m].conn();
			});});
		}
		
		

		
		
		//MAIN SOCKET
		S[m]={};
		S[m].reconn=function(){
			S[m].timer=setTimeout(function(){
				console.log('[REWIRE] reconnecting');
				S[m].conn();
			},2000);
			}
		S[m].timer=null;
		S[m].conn=function(){
			console.log('s['+m+'] master connecting...');
			if(!s[m]||s[m].readyState!==1){
				s[m]=new WebSocket('ws://'+host+':'+(m_port));
				s[m].sid=m;
				s[m].onopen=function(){
					console.log('s['+m+'] open');
					$('#GLASS').remove();
					clearTimeout(S[4].timer);
					if(w.length>0){
						getnextworker();
						}
					else{power();}
					};
				s[m].onerror=function(e){console.dir(m+'error: '+e);};
				s[m].onclose=function(){
					if($('#GLASS').length===0){
					$('body').append(
						'<div id="GLASS"style="width:100%;height:100%;position:fixed;">'+
						'<div style="z-index:9999999;position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-100px;width:187px;height:65px;font-family:arial;color:#747474;font-size:10px;text-align:center;background:#E5E5E5;border:3px solid #BFBFBF;padding:10px;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;">'+
						'<b>Your Internet Is Connecting...<b><br><br><b><b id="RECONNECT"style="color:#747474;">0</b><br><br><b style="font-size:8px;color:#000;"><b style="color:#FF0000;">RE</b>WIRE.io</b></b>'+
						'</div></div>'
						);}
					$('#RECONNECT').text(parseInt($('#RECONNECT').text())+(1));
					console.log('s['+m+'] closed!');
					clearTimeout(S[m].timer);
					n=0;
					S[m].reconn();
					};
				return;
				}else{
					if(w.length>0){
						genextworker();
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
				if(!s[v]||s[v].readyState!==1){
					s[v]=new WebSocket('ws://'+host+':'+(w_ports[n]));
					s[v].sid=v;
					s[v].onopen=function(){
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
		
		
		function power(){setTimeout(function(){
			n=0;
			$(sockets).each(function(i,v){
				/*API WHEN EVENTS*///see on connect
				/*API SAY*/			s[v].WIRE=function(func,data){var _={func:func,data:data};this.send(JSON.stringify(_));}
				/*API SAY_TO*/	s[v].SAY=function(func,data,to){var _={func:'SAY',data:{pass:func,data:data,to:to}};this.send(JSON.stringify(_));console.dir(JSON.stringify(_));}
				/*API SHOUT*/	s[v].SHOUT=function(func,data){if(func==='CONN'){var _={func:func,data:data};this.send(JSON.stringify(_));}else{var _={func:'SHOUT',data:data};data.func=func;this.send(JSON.stringify(_));}}
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			
			//s[4].WIRE('func',{data:'simple'});																							//client - sever cup & string
	
			//s[4].SAY('func',{data:'simple'},to:['user0','user1']);															//say something to a few people
	
			//s[4].SHOUT('func',{simple:data,not:[nickname,'user0'],rooms:['room0','room1']});		//shout something as a broadcast to rooms leaving one other user out
	
			//s[4].SHOUT('func',{simple:data,not:[nickname,'user0']});												//shout as a broadcast to all users leaving one other user out
	
			//s[4].SHOUT('func',{simple:data});																						//shout to all users including self
	
			//s[4].WHEN['func']=function(_){console.dir(_);}																	//all custom events
	
			//delete s[4].WHEN['func']																										//don't pile up functions
			
			//###############################################################################################[BUILD]
			if(build===0){// 0 if the server needs to build the client.
				build=1;
				/*API WHEN*/$(sockets).each(function(i,v){s[v].WHEN={};var ii=v;mem['s'+ii]={};Object.observe(s[v].WHEN,function(x){mem['s'+ii].WHEN=s[ii].WHEN;/*console.dir(mem);*/});});
				s[m].WIRE('CONN',{'nickname':nickname,'func':'private.connect'});
				s[m].SHOUT('CONN',{'nickname':nickname,'func':'user.alive',not:[nickname]});
				s[m].WHEN['user.reconn']=function(_){console.log(_.nickname+':reconn');};
				s[m].WHEN['user.alive']=function(_){console.log(_.nickname+':alive');};
				s[m].WHEN['user.died']=function(_){console.log(_.nickname+':died');};
				s[m].WHEN['ROOMS']=function(_){mem.ROOMS=_.rooms};
				console.log('connected');
				APP();
				/*START APP*/
				}
			else{//build is 1 if the client remembers
				/*API WHEN*/$(sockets).each(function(i,v){s[v].WHEN=mem['s'+v].WHEN;});
				s[m].SHOUT('CONN',{'nickname':nickname,'func':'user.reconn'});
				if(mem.ROOMS){s[m].WIRE('ROOMS',{'rooms':mem.ROOMS});}
				console.log('[re]connected');
				APP();
				}
			function APP(){//###################################################################################[START]
				$.getScript(app,function(){console.log('got: '+app);});	
			}////##############################################################################################[END]
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			$(sockets).each(function(i,v){
				s[v].onmessage=function(_){
					_=JSON.parse(_.data);
					if(_.func){
						if(s[this.sid].WHEN[_.func]){
							s[this.sid].WHEN[_.func](_.data);
							}
						else{
							console.log('NO EVENT '+_.func+' FROM s['+this.sid+']');console.dir(_);
							}}
						else{console.log('NO _.func FROM s['+this.sid+']');console.dir(_);}
						};});
			},1000);}//power

};//connect