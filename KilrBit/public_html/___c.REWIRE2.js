/*
The MIT License (MIT)

REWIRE.io Copyright (c) 2015 benzmuircroft benzmuircroft@gmail.com

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

var connect=function(host,sockets,ports,s,G,loader,env,app){console.log(app.toString());
try{
	window.console.log('REWIRE.io  Hello World.');
	var yenc={
		reserved:[0,10,13,61]
	,	each:function(obj,iterator,context){var breaker={};if(obj===null){return;}if(Array.prototype.forEach&&obj.forEach===Array.prototype.forEach){obj.forEach(iterator,context);}else if(obj.length===+obj.length){for(var i=0,l=obj.length;i<l;i++){if(iterator.call(context,obj[i],i,obj)===breaker){return;}}}else{for(var key in obj){if(obj.hasOwnProperty(key)){if(iterator.call(context,obj[key],key,obj)===breaker){return;}}}}}
	,	toBytes:function(source){var output=[],i=0,j=0,subchar;for(;i<source.length;i++){if(source.charCodeAt(i)<=0x7F){output.push(source.charCodeAt(i));}else{subchar=encodeURIComponent(source.charAt(i)).substr(1).split('%');for(j=0;j<subchar.length;j++){output.push(parseInt(subchar[j],16));}}}return output;}
	,	fromBytes:function(source){var output='',i=0;for(;i<source.length;i++){if(source[i]<=127){if(source[i]===37){output+="%25";}else{output+=String.fromCharCode(source[i]);}}else{output+="%"+source[i].toString(16).toUpperCase();}}return decodeURIComponent(output);}
	,	encode:function(source){var output='',bytes=[],converted;bytes=yenc.toBytes(source);yenc.each(bytes,function(ele,i){converted=(ele+42)%256;if(reserved.indexOf(converted)<0){output+=String.fromCharCode(converted);}else{converted=(converted+64)%256;output+="="+String.fromCharCode(converted);}});return output;}
	,	decode:function(source){var output=[],ck=false,bytes=[],i=0,c;for(i=0;i<source.length;i++){c=source.charCodeAt(i);if(c===13||c===10){continue;}if(c===61&&!ck){ck=true;continue;}if(ck){ck=false;c=c-64;}if(c<42&&c>0){output.push(c+214);}else{output.push(c-42);}}return yenc.fromBytes(output);}
		};
	var BIT={
		enc:function(i){var s='';for(var v in i){if(i[v] instanceof Object){var ii=i[v];var ss='«';for(var vv in ii){ss=(ss==='«')?ss+vv+'°'+ii[vv]:ss+'~'+vv+'°'+ii[vv];}s=s+'¬'+v+'^'+ss;}else{s=(s==='')?v+'^'+i[v]:s+'¬'+v+'^'+i[v];}}return s;}
	,	dec:function(p){var iTXt1='',iTXt2='';if(p.indexOf('1IMG')!==-1&&p.indexOf('IMG1')!==-1){var sp=p.indexOf('1IMG')+4;var ep=p.indexOf('IMG1');iTXt1=p.substring(sp,ep);p=p.replace(iTXt1,'');if(p.indexOf('2IMG')!==-1&&p.indexOf('IMG2')!==-1){sp=p.indexOf('2IMG')+4;ep=p.indexOf('IMG2');iTXt2=p.substring(sp,ep);p=p.replace(iTXt2,'');}}var o={};p=p.split('¬');for(var n=0;n<p.length;n++){var k=p[n].split('^');var v=k[1];k=k[0];if(v.indexOf('«')===0){var oo={};var pp=v;pp=pp.slice(1);pp=pp.split('~');for(var nn=0;nn<pp.length;nn++){var kk=pp[nn].split('°');var vv=kk[1];kk=kk[0];if(vv==='1IMGIMG1'){oo[kk]=yenc.decode(iTXt1);}else if(vv==='2IMGIMG2'){oo[kk]=yenc.decode(iTXt2);}else{oo[kk]=(/^\d+$/.test(vv))?(vv[0]=='0')?vv:parseInt(vv):vv;}}o[k]=oo;}else{o[k]=(/^\d+$/.test(v))?(v[0]=='0')?v:parseInt(v):v;}}return o;}
		};
	loader.$=undefined;
	loader.t=undefined;
	loader.IMG=
			 'data:image/png;base64,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';
	loader.show=function(){
			loader.$=document.getElementById('LOADER');
			loader.$.style.display='block';
			document.getElementById('LOADERIMG').src=loader.img||loader.IMG;
			loader.$=document.getElementById('LOADER');
			loader.t=document.getElementById('LOADERBAR');
			if(loader.bar){
				loader.t.style.background=loader.bar.background;
				loader.t.style.color=loader.bar.color;
				}
			return;
			};
	loader.log=function(t){
		if(typeof t=='number'){loader.t.style.width=((loader.bar.max/10)*t)+'px';}
		else{loader.t.style.width='100%';loader.t.innerHTML=t;}
		return;
		};
	loader.done=function(){loader.$.style.display='none';loader.log('Loading...');return;};
	var glass='<div id="GLASS"style="width:100%;height:100%;position:fixed;top:0px;left:0px;z-index:9999998;">'+'<div style="position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-100px;width:187px;height:65px;font-family:arial;color:#747474;font-size:10px;text-align:center;background:#E5E5E5;border:3px solid #BFBFBF;padding:10px;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;">'+'<b>Your Internet Is Connecting...<b><br><br><b><b id="RECONNECT"style="color:#747474;">0</b><br><br><b style="font-size:8px;color:#000;"><b style="color:#FF0000;">RE</b>WIRE.io</b></b>'+'</div></div>'
	,	MEM={}
	,	w=sockets.slice(1)
	,	m=sockets[0]
	,	wp=ports.slice(1)
	,	mp=ports[0]
	;//TODO: test killing the client while the server is still on then reconnect the client to see what happens...
	var M={//monitor
		t:null//timer
	,	x:function(broke){//execute the app
			loader.log(loader.bar?(10):(broke?'[re]':'')+'connecting');
			loader.log('Hello World!');
			if(G.paperCanvas){//TODO no paper
				$.getScript('_S/paper-full.min.js',function(){
					paper.install(window);
					paper.setup(document.getElementById(G.paperCanvas));
					console.dir(paper);
					try{ᵽ}catch(e){broke=0};//when the app first boots it does not know if it crashed when someone was last looking at it unless pQuery is undefined
					$.getScript(((broke)?'_S/nothing.js':'_S/pQuery.kb.js'),function(){//detect if we have ᵽ        ????????????????????????????????????????????????????????????
						$.getScript(((broke)?'_S/nothing.js':app),function(){
								if(!broke){broke=null;init(s,G,loader,env);}//these things are undefined on second time after no internet
								else{broke=null;reinit(s,G,loader,env);}
								});});});}
			else{
				broke=null;
				console.log(typeof app);
				if(typeof app==="function"){
					app(s,G,loader,env);
					}
				else{
					$.getScript(app,function(){
						init(s,G,loader,env);
						});}}
			return;
			}
	,	a:function(clue){//attach api
			var wasbroken=0;
			(clue)&&(wasbroken=0.5);//unclear answer
			clue=null;
			for(var i=0,v=sockets[i];i<sockets.length;++i,v=sockets[i]){
				loader.log(loader.bar?(8):'Attaching [RE]WIRE to socket '+v);
				s[v].RAW=function(fd){var V=this.sid;s[V].send(fd);}
				s[v].WIRE=function(f,d){;this.send('«'+BIT.enc({f:f,d:d}));}
				s[v].JSON=function(f,d){this.send('ʲ'+JSON.stringify({f:f,d:d}));return};
				if(MEM[v]){
					s[v].WHEN=MEM[v].WHEN;
					if(MEM[v].ROOMS){s[v].WIRE('Ʀ',{rooms:MEM[v].ROOMS});}
					else{MEM[v].ROOMS=[];}
					wasbroken=1;//definate answer
					}
				else{
					s[v].WHEN={};
					MEM[v]={};
					MEM[v].ROOMS=[];
					s[v].WHEN['Ʀ']=function(_,soc){var V=soc[0];MEM[V].ROOMS=_.rooms};
					}}
			loader.log(loader.bar?(9):'[RE]WIRE API Ready');
			if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::rewire-ready;;'}}));}else{console.log('ɦ::rewire-ready;;','ERR_NOT_READY');}
			i=null;
			M.x(wasbroken);
			return;
			}
	,	q:function(){//query all ready
			var ready=true;
			for(var i=0,v=sockets[i];i<sockets.length;++i,v=sockets[i]){if([1,'n/a'].indexOf((s[v]||[]).readyState)===-1){ready=false;}}
			if(ready){
				loader.log(loader.bar?(6):'ready:'+ready);
				ready=null;
				if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::got-workers;;'}}));}else{console.log('ɦ::got-workers;;','ERR_NOT_READY');}//all workers got
				}
			return;
			}
	,	m:function(V,U,f,d){//msg
			if(s[V].WHEN){
				if([-1,1].indexOf([s[m].uid+'.w1',s[m].uid+'.w'+V,s[m].uid].indexOf(U))){
					U=null;
					if(f&&f!='ɦ'){
						if(s[V].WHEN[f]){
							s[V].WHEN[f](d,[V,f]);//can debug
							MEM[V].WHEN=s[V].WHEN;//WHEN TO MEM
							}
						else{console.log('s['+V+']NO EVENT: '+f);console.dir(d);}//debug ERR1
	    				}
					else{console.log('s['+V+']ERR: ','function === '+f);console.dir(d);}//debug ERR2
					}
				else{console.log('s['+V+']ERR: ','abort: uid was not correct;');}
				}
			else{
				V=U=null;
				if(f=='ɦ'){
					if(d.h=='::socket-uid;;'){
						loader.log(loader.bar?(1):d.h);
						Object.defineProperty(s[m],"uid",{
							value:d.uid
						,	writable:false
						,	enumerable:true
						,	configurable:false
							});
							if(s[m].readyState==1){s[m].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::list-workers;;',l:sockets.join()}}));}else{console.log('ɦ::list-workers;;','ERR_NOT_READY');}
							loader.log(loader.bar?(2):d.h);
							}
					else if(d.h=='::match-workers;;'){
						loader.log(loader.bar?(5):d.h);
						M.q();
						}
					else if(d.h=='::dummy-workers;;'){//get the workers
						loader.log(loader.bar?(3):d.h);
						if(w[0]){M.w(d.l.split(','));}
						else{M.q();}
						}
					else if(d.h=='::api-rewire;;'){
						loader.log(loader.bar?(7):loader.t.innerHTML);
						M.a(d.re);
						}}//server has full api and is loading app. go do the same! (re is a clue (did we just crash?))
				else{console.log('ERR: unexpected msg',f,d);}
				}
			return;
			}
	,	r:function(){//reconnect
			if(!document.getElementById('GLASS')){document.body.innerHTML+=glass;}
			(g=document.getElementById('RECONNECT')).innerHTML=Number(document.getElementById('RECONNECT').innerHTML)+1;
			M.t=setTimeout(function(){M.c();},2000);
			g=null;
			return;
			}
	,	c:function(){//connect
			loader.show();
			s[m]=s[m]||new WebSocket('ws://'+host+':'+(mp));//s[m]=s[m]||new WebSocket('wss://'+host+':'+(mp));
			s[m].sid=m;
			s[m].onclose=function(){
				loader.log('s['+m+'] closed!');
				for(var i=0;i<sockets.length;++i){s[sockets[i]]=null;}i=null;
				M.r();
				};
			s[m].onerror=function(e){console.dir('s['+m+']',e);};
			s[m].onmessage=function(read){
				var _=(read.data.indexOf('«')===0)?BIT.dec(read.data.slice(1)):(read.data.indexOf('ʲ')===0)?JSON.parse(read.data.slice(1)):{f:read.data,d:read.data};//can't overwrite on client
				M.m(this.sid,this.uid,_.f,_.d);
				};
			s[m].onopen=function(){
				loader.log(loader.bar?(0):'s['+m+'] open');
				(el=document.getElementById('GLASS'))&&(el.parentNode.removeChild(el),el=null);
				};
			window.onunload=function(){for(var i=0,v=sockets[i];i<sockets.length;++i,v=sockets[i]){if(s[v]){s[v].close();}}i=null;};
			return;
			}
	,	w:function(l){//l=matchingServerList
			for(var i=0,v=l[i];i<l.length;++i,v=l[i]){
				if(!w[i]){
					s[v]={sid:v,uid:s[m].uid+'.w'+v,readyState:'n/a',close:null,message:null,send:null,WHEN:{}};//dummy
					}
				else{
					s[v]=s[v]||new WebSocket('ws://'+host+':'+(wp[i]));//s[v]=s[v]||new WebSocket('wss://'+host+':'+(wp[i]));
					s[v].sid=v;
					s[v].onclose=function(){console.log('s['+this.sid+'] closed!');};
					s[v].onerror=function(e){console.dir('s['+this.sid+']',e);};
					s[v].onmessage=function(read){
						var _=(read.data.indexOf('«')===0)?BIT.dec(read.data.slice(1)):(read.data.indexOf('ʲ')===0)?JSON.parse(read.data.slice(1)):{f:read.data,d:read.data};//can't overwrite on client
						M.m(this.sid,this.uid,_.f,_.d);
						};
					s[v].onopen=function(event){
						loader.log(loader.bar?(4):'s['+this.sid+'] open');
						Object.defineProperty(this,"uid",{
							value:s[m].uid+'.w'+this.sid
						,	writable:false
						,	enumerable:true
						,	configurable:false
							});
						if(this.readyState==1){this.send(s[m].uid);}else{consol.log(e);}
						};}}l=i=v=null;return;}
		};'> onconnect >';M.c();
}catch(e){console.dir(e);}
};//connect
