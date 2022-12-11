// Copyright: Hiroshi Ichikawa <http://gimite.net/en/>
// License: New BSD License
// Reference: http://dev.w3.org/html5/websockets/
// Reference: http://tools.ietf.org/html/rfc6455


//(function() {



window.console={log:function(msg) {
	if($('#bug').length===0){$('body').append('<div id="bug"style="z-index:99999;position:fixed;left:0px;top:0px;color:#fff;background:#000;padding:10px;"></div>');}
	$('#bug').text(msg);
	return false; //suppress Error Alert;
	}};




var dev=navigator.userAgent;







//window.console.log('Flash '+(dev.indexOf('Mozilla/5.0')!==-1)+'/'+(dev.indexOf('Android')!==-1)+'/'+(dev.indexOf('AppleWebKit')!==-1)+'/'+(dev.indexOf('Chrome')!==-1));


//Mozilla/5.0 (Linux; Android 4.1.2; GT-I9100 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari/537.36



//Android has window.WebSocket, it thinks it does websockets but it's been lied to!


if((!window.WebSocket)||(((dev.indexOf('Mozilla/5.0')!==-1)&&(dev.indexOf('Android')!==-1)&&(dev.indexOf('AppleWebKit')!==-1))&&(dev.indexOf('Chrome')===-1))){
    console.log('FlashSocket');
	
	
	
	
	
	
	
  
  
	if(swfobject.getFlashPlayerVersion().major<10){
    	console.log('Flash Player >= 10.0.0 is required.');
    	//return;
  		}
  	if(location.protocol==='file:'){
    	console.log("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://...");
  		}
	
	
	
	window.WebSocket=function(url,protocols,proxyHost,proxyPort,headers){
		var self=this;
		self.__id=WebSocket.__nextId;
		self.__id++;
		WebSocket.__instances[self.__id]=self;
		self.readyState=WebSocket.CONNECTING;
		self.bufferedAmount=0;
		self.__events={};
		if(!protocols){
			protocols=[];
		 	}
		else if(typeof protocols==='string'){
			protocols=[protocols];
			}
		self.__createTask=setTimeout(function(){// Uses setTimeout() to make sure __createFlash() runs after the caller sets ws.onopen etc. Otherwise, when onopen fires immediately, onopen is called before it is set.
			WebSocket.__addTask(function(){
				self.__createTask=null;//window.console.dir([self.__id,url,protocols, proxyHost || null, proxyPort || 0, headers || null]);
				WebSocket.__flash.create(self.__id,url,protocols,proxyHost||null,proxyPort||0,headers||null);
		  		});},0);};


	

   
  
	WebSocket.prototype.send = function(data) {// Send data to the web socket. @param {string} data  The data to send to the socket. @return {boolean}  True for success, false for failure.
		if(this.readyState===WebSocket.CONNECTING){
			console.log("INVALID_STATE_ERR: Web Socket connection has not been established");
			}
		var result=WebSocket.__flash.send(this.__id,encodeURIComponent(data));// We use encodeURIComponent() here, because FABridge doesn't work if the argument includes some characters. We don't use escape() here because of https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Functions#escape_and_unescape_Functions But it looks decodeURIComponent(encodeURIComponent(s)) doesn't preserve all Unicode characters either e.g. "\uffff" in Firefox. Note by wtritch: Hopefully this will not be necessary using ExternalInterface.  Will require additional testing.
		if(result<0){ // success
			return true;
			}
		else{
			this.bufferedAmount+=result;
			return false;
			}};

  
  
   
	WebSocket.prototype.close=function(){ // Close this web socket gracefully.
		if(this.__createTask){
			clearTimeout(this.__createTask);
			this.__createTask=null;
			this.readyState=WebSocket.CLOSED;
			return;
			}
		if(this.readyState===WebSocket.CLOSED||this.readyState===WebSocket.CLOSING){
			console.log('Closing / Closed');
			return;
			}
		this.readyState=WebSocket.CLOSING;
		WebSocket.__flash.close(this.__id);
		};

  
   
   
	WebSocket.prototype.addEventListener=function(type,listener,useCapture){// Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>} @param {string} type, @param {function} listener, @param {boolean} useCapture, @return void
		if(!(type in this.__events)){
			this.__events[type]=[];
			}
		this.__events[type].push(listener);
		};

  
   
   
	WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {// Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}. @param {string} type, @param {function} listener, @param {boolean} useCapture, @return void
		if(!(type in this.__events)){return;}
		var events=this.__events[type];
		for(var i=events.length-1;i>=0;i--){
		if (events[i]===listener){
			events.splice(i,1);
			break;
			}}};

  
   
   
	WebSocket.prototype.dispatchEvent=function(event){// Implementation of {@link <a href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-registration">DOM 2 EventTarget Interface</a>}. @param {Event} event, @return void
		var events=this.__events[event.type]||[];
		for(var i=0;i<events.length;i++){
			events[i](event);
			}
		var handler=this['on'+event.type];
		if(handler){handler.apply(this,[event]);}
		};

  
   
   
	WebSocket.prototype.__handleEvent=function(flashEvent){// Handles an event from Flash. @param {Object} flashEvent
		if('readyState' in flashEvent){
			this.readyState=flashEvent.readyState;
			}
		if('protocol' in flashEvent){
			this.protocol=flashEvent.protocol;
			}

		var jsEvent;
		if(flashEvent.type==='open'||flashEvent.type==='error'){
			jsEvent=this.__createSimpleEvent(flashEvent.type);
			} 
		else if(flashEvent.type==='close'){
			jsEvent=this.__createSimpleEvent("close");
			jsEvent.wasClean=(flashEvent.wasClean)?true:false;
			jsEvent.code=flashEvent.code;
			jsEvent.reason=flashEvent.reason;
			} 
		else if(flashEvent.type==='message'){
			var data=decodeURIComponent(flashEvent.message);
			jsEvent=this.__createMessageEvent('message',data);
			} 
		else{
			console.log('unknown event type: '+flashEvent.type);
			}
		this.dispatchEvent(jsEvent);
		};
	
	
	
	
	
  
	WebSocket.prototype.__createSimpleEvent=function(type){
		if(document.createEvent&&window.Event){
			var event=document.createEvent('Event');
			event.initEvent(type,false,false);
			return event;
			}
		else{
			return {type:type,bubbles:false,cancelable:false};
			}};
	
	
	
	
	
  
	WebSocket.prototype.__createMessageEvent=function(type,data){
		if(document.createEvent&&window.MessageEvent&&!window.opera){
			var event=document.createEvent('MessageEvent');
			event.initMessageEvent('message',false,false,data,null,null,window,null);
			return event;
			}
		else{
			return {type:type,data:data,bubbles:false,cancelable:false};// IE and Opera, the latter one truncates the data parameter after any 0x00 bytes.
			}};
  
  
  
	
	
	
	
	// Define the WebSocket readyState enumeration.
	WebSocket.CONNECTING=0;
	WebSocket.OPEN=1;
	WebSocket.CLOSING=2;
	WebSocket.CLOSED=3;

	// Field to check implementation of WebSocket.
	WebSocket.__isFlashImplementation=true;
	WebSocket.__initialized=false;
	WebSocket.__flash=null;
	WebSocket.__instances={};
	WebSocket.__tasks=[];
	WebSocket.__nextId=0;
  
  
   
   
	
	
	
	
	WebSocket.loadFlashPolicyFile=function(url){// Load a new flash security policy file. @param {string} url//console.log((polort)?polport:'!!!!!!!!!!!!!!!!!!!polport');window.console.log('BEN'+url)
		WebSocket.__addTask(function(){
			WebSocket.__flash.loadManualPolicyFile(url);
			});};

  
   
   
	
	
	
	
	WebSocket.__initialize=function(){// Loads WebSocketMain.swf and creates WebSocketMain object in Flash.
		if(WebSocket.__initialized){return;}
		WebSocket.__initialized=true;
		if(WebSocket.__swfLocation){
			window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation;// For backword compatibility.
			}
		window.WEB_SOCKET_SWF_LOCATION='WebSocketMain.swf';
		if(!window.WEB_SOCKET_SWF_LOCATION){
			console.log('[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf');
			return;
			}
		if(!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR&&!WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/)&&WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)){
			var swfHost=RegExp.$1;
			if(location.host!=swfHost){
				console.log("[WebSocket] You must host HTML and WebSocketMain.swf in the same host ('" + location.host + "' != '" + swfHost + "'). See also 'How to host HTML file and SWF file in different domains' section in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;");
				}}
		var container=document.createElement('div');
		container.id='webSocketContainer';// Hides Flash box. We cannot use display: none or visibility: hidden because it prevents Flash from loading at least in IE. So we move it out of the screen at (-100, -100). But this even doesn't work with Flash Lite (e.g. in Droid Incredible). So with Flash Lite, we put it at (0, 0). This shows 1x1 box visible at left-top corner but this is the best we can do as far as we know now.
		container.style.position='absolute';
		if(WebSocket.__isFlashLite()){
			container.style.left='0px';
			container.style.top='0px';
			}
		else{
			container.style.left='-100px';
			container.style.top='-100px';
			}
		var holder=document.createElement('div');
		holder.id='webSocketFlash';
		container.appendChild(holder);
		document.body.appendChild(container);
		swfobject.embedSWF(
			WEB_SOCKET_SWF_LOCATION,
			"webSocketFlash",
			"1" ,//width
			"1",//height
			"10.0.0", // SWF version
			null,
			null,
			{hasPriority:true,swliveconnect:true,allowScriptAccess:"always"},// See http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
			null,
			function(e){if(!e.success){console.logr("[WebSocket] swfobject.embedSWF failed");}});};//initialize

	
	
	
	
	
	
	
  
   
   
	window.WEB_SOCKET_DEBUG=true;
	WebSocket.__onFlashInitialized=function(){// Called by Flash to notify JS that it's fully loaded and ready for communication.
		setTimeout(function(){// We need to set a timeout here to avoid round-trip calls to flash during the initialization process.
			WebSocket.__flash=document.getElementById('webSocketFlash');
			WebSocket.__flash.setCallerUrl(location.href);
			WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);
			for(var i=0;i<WebSocket.__tasks.length;i++){
				WebSocket.__tasks[i]();
				}
			WebSocket.__tasks=[];
			},0);};
	
	
	
	
	
  
  
	

	WebSocket.__onFlashEvent=function(){// Called by Flash to notify WebSockets events are fired.
		setTimeout(function(){
			try{
				var events=WebSocket.__flash.receiveEvents();// Gets events using receiveEvents() instead of getting it from event object of Flash event. This is to make sure to keep message order. It seems sometimes Flash events don't arrive in the same order as they are sent.
				for(var i=0;i<events.length;i++){//window.console.dir(events[i]);console.log(WebSocket.__instances);
					WebSocket.__instances[events[i].webSocketId].__handleEvent(events[i]);
					}}
			catch(e){
				console.log(e);
				}}, 0);
		return true;
		};
	
	
	
	
	
	
  
  
	WebSocket.__log=function(message){// Called by Flash.
		console.log(decodeURIComponent(message));
		};





	WebSocket.__error=function(message){// Called by Flash.
		console.log(decodeURIComponent(message));
		};
	
	
	
	

	WebSocket.__addTask=function(task){
		if(WebSocket.__flash){
			task();
			}
		else{
			WebSocket.__tasks.push(task);
			}};
	
	
	
	
  
  


	WebSocket.__isFlashLite=function(){// Test if the browser is running flash lite. @return {boolean} True if flash lite is running, false otherwise.
		if(!window.navigator||!window.navigator.mimeTypes){
			return false;
			}
		var mimeType=window.navigator.mimeTypes['application/x-shockwave-flash'];
		if(!mimeType||!mimeType.enabledPlugin||!mimeType.enabledPlugin.filename){
			return false;
			}
		return (mimeType.enabledPlugin.filename.match(/flashlite/i))?true:false;
		};
	
	
	
	
	
  
	if(!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION){
		swfobject.addDomLoadEvent(function(){// NOTE: This fires immediately if web_socket.js is dynamically loaded after the document is loaded.
			WebSocket.__initialize();
			});}
	
	
	
	
	//}catch(err){alert('WEBSITE NOT SUPPORTED\n Use Google Chrome instead.');};

	
	

	}//flash socket
	else if(window.WebSocket){
		console.log('WebSocket');
		
		//return;
		}
	else if(window.MozWebSocket){
		console.log('MozWebSocket');
		window.WebSocket=MozWebSocket;
		//return;
		}
	else{console.log('NO SUPPORT FOR WEBSOCKETS');}





