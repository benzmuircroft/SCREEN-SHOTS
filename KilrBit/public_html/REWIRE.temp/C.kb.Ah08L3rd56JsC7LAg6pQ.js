window.nonce="Ah08L3rd56JsC7LAg6pQ";
console.dir('script');

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


	/*window.onerror = function (message, file, line, column, errorObj) {
		alert(message, file, line, column, errorObj);
	    if(errorObj !== undefined){
	        window.console.log('Error: ' + errorObj.stack);
			}}*/
	//var NULL=(function(){function eve(attacktype){('log '+attacktype);}function browser(){return (typeof(module)==='undefined')&&(typeof(window)!=='undefined');}const f=forge;var o={};var prv=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));var pub=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));var aes=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));function e(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}function d(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}function xAES(){var mx='';for(var i=0;i<o[aes].njs.length;i++){mx=mx+(o[aes].njs[i])+(o[aes].win[i]);}var st='';for(var i=0;i<o[aes].win.length;i++){mx=mx+(o[aes].win[i])+(o[aes].njs[i]);}o[aes].key=f.pkcs5.pbkdf2(mx,st,10000,32);REWIRE();}function eAES(msg){('log proof sent: '+o[aes].num);msg.PROOF=o[aes].num;var ci=f.cipher.createCipher('AES-CBC',o[aes].key);ci.start({'iv':o[aes].win+o[aes].njs});ci.update(f.util.createBuffer(JSON.stringify(msg),'utf8'));ci.finish();return ci.output.toHex();}function dAES(msg){var ci=f.cipher.createDecipher('AES-CBC',o[aes].key);ci.start({'iv':o[aes].win});ci.update(f.util.createBuffer(f.util.hexToBytes(msg)));ci.finish();if(ci.output.length()===0){eve('eve: Remote Function Call Code Injection attempt');}else{msg=JSON.parse(ci.output.toString('utf8'));('log expected: '+o[aes].exp+' msg.proof: '+msg.PROOF);if(msg.PROOF){if(msg.PROOF===o[aes].exp){delete msg['PROOF'];return msg;}else{eve('eve: dAES proof incorrect');}}else{eve('eve: dAES without proof');}}}Object.defineProperty(o,aes,{value:{'win':false,'njs':false,'num':false,'exp':false,'key':false},enumerable:false});s[1].WHEN['swapAES']=function(_){delete s[1].WHEN['swapAES'];var oo=d(_.oo).split('&&');var temp='',proof='';var i=1;for(i;i<=16;i++){var sec=o[prv].key.decrypt(f.util.decode64(oo[i]));if(sec.indexOf('@@')!==0){break;}else{temp=temp+(sec.replace('@@',''));}}if(i!==(16+1)){eve('eve: swapAES level 1 bad length');}else{oo=d(temp).split('$$');temp='';i=1;for(i;i<=4;i++){var sec=o[pub].key.decrypt(f.util.decode64(oo[i]));if(sec.indexOf('##')!==1){break;}else{sec=sec.split('##');temp=temp+sec[1];proof=proof+(sec[0]).toString();}}if(i!==(4+1)){eve('eve: swapAES level 2 bad length');}else{if(browser()){o[aes].njs=temp;}else{o[aes].win=temp;}o[aes].num=proof;_=temp=proof=i=oo=null;if((o[aes].win)&&(o[aes].njs)){xAES();}}}};function setAES(){function O9(){var R=(Math.floor((Math.random()*9))).toString();expect=expect+R;return R;}var oo=f.util.bytesToHex(f.random.getBytesSync(32));if(browser()){o[aes].win=oo;}else{o[aes].njs=oo;}var expect='';oo=e('$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring(0,(oo.length/4))))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4),(oo.length/4)*2)))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4)*2,(oo.length/4)*3)))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4)*3))));oo=e('&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring(0,(oo.length/16))))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16),(oo.length/16)*2)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*2,(oo.length/16)*3)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*3,(oo.length/16)*4)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*4,(oo.length/16)*5)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*5,(oo.length/16)*6)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*6,(oo.length/16)*7)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*7,(oo.length/16)*8)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*8,(oo.length/16)*9)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*9,(oo.length/16)*10)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*10,(oo.length/16)*11)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*11,(oo.length/16)*12)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*12,(oo.length/16)*13)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*13,(oo.length/16)*14)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*14,(oo.length/16)*15)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*15))));o[aes].exp=expect;expect=null;(function(){var cp=oo.toString();oo=null;s[1].WIRE('swapAES',{'oo':cp});})();}var pvBEGIN='-----BEGIN RSA PRIVATE KEY-----',pvEND='-----END RSA PRIVATE KEY-----',pbBEGIN='-----BEGIN PUBLIC KEY-----',pbEND='-----END PUBLIC KEY-----';s[1].WHEN['quadRSA']=function(_){delete s[1].WHEN['quadRSA'];_.lnk=_.lnk.split('$');Object.defineProperty(o,pub,{value:{'key':f.pki.privateKeyFromPem(pvBEGIN+d(_.lnk[0])+pvEND),'loc':f.pki.publicKeyFromPem(pbBEGIN+d(_.lnk[1])+pbEND)},enumerable:false});setAES();};(function(){var k1=f.pki.rsa.generateKeyPair({bits: 896,e:0x10001});var k2=f.pki.rsa.generateKeyPair({bits: 896,e:0x10001});var prvloc=k1.publicKey;var pubkey=k1.privateKey;k1=null;var publoc=k2.publicKey;var prvkey=k2.privateKey;k2=null;Object.defineProperty(o,prv,{value:{'key':prvkey,'loc':prvloc},enumerable:false});pubkey=(f.pki.privateKeyToPem(pubkey).toString().replace(pvBEGIN,'').replace(pvEND,''));publoc=(f.pki.publicKeyToPem(publoc).toString().replace(pbBEGIN,'').replace(pbEND,''));(function(){var cp=(e(pubkey)+'$'+e(publoc));pubkey=publoc=null;s[1].WIRE('quadRSA',{'lnk':cp});})();})();function REWIRE(){var NULL=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));Object.defineProperty(s[1],NULL,{value:{WIRE:function(func,data){s[1].WIRE('ᴎ',eAES({'f':func,'d':data}));},WHEN:[]},enumerable:false});s[1].WHEN['ᴎ']=function(_){_=dAES(_);if(_){try{s[1][NULL].WHEN[_.f](_.d);}catch(e){console.log(e);console.log('ERROR on try: EVENT '+_.f+' FROM s['+this.sid+']');console.dir(_);}}};
//console.dir(loader);

window.reinit=function(s,G,loader,env){
	loader.done();
	console.log('re-init');//TODO test everything works
	};
window.init=function(s,G,loader,env){
	console.dir(loader);

	if(1==1||env=='main'){
		loader.done();



		//paper.project.keepalive=true;




		var $=jQuery.noConflict();
		$.fn.mass=function(size,msec,c){msec=msec/1000;var t___=new Time();$(this).css({'-webkit-transform':'scale('+size+')','-moz-transform':'scale('+size+')','-o-transform':'scale('+size+')','-ms-transform':'scale('+size+')','transform':'scale('+size+')','-webkit-transition':'all '+msec+'s linear','-moz-transition':'all '+msec+'s linear','-o-transition':'all '+msec+'s linear','-ms-transition':'all '+msec+'s linear','transition':'all '+msec+'s linear'});if(size===1){t___.on(function(){$(t___.v).xcss(['-webkit-transform','-moz-transform','-o-transform','-ms-transform','transform','-webkit-transition','-moz-transition','-o-transition','-ms-transition','transition']);},this,msec*1000);}if(c){c.call(this);}return this;}
		console.rec=function(it,a){console.log(JSON.stringify(it).replace(/\"/g,''),a||'');return;};
		//$.fn.focusEnd=function(){$(this).focus();var tmp = $('<span />').appendTo($(this)),node = tmp.get(0),range = null,sel = null;if (document.selection) {range = document.body.createTextRange();range.moveToElementText(node);range.select();} else if (window.getSelection) {range = document.createRange();range.selectNode(node);sel = window.getSelection();sel.removeAllRanges();sel.addRange(range);}tmp.remove();return this;}
		//$('#mem').prop('checked',false);//default = dont remember me
		//$.localStorage.settings={cookieOptions:{expires:1}};

		function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
		function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
		Array.prototype.has=function(x){return this.indexOf(x)!=-1;}
		Array.prototype.unique=function(){var result = [];$.each(this, function(i, e) {if ($.inArray(e, result) == -1) result.push(e);});return result;}
		Array.prototype.move=function(old_index,new_index){if(this[old_index]===undefined){return this;}if(new_index>=this.length){var k=new_index-this.length;while((k--)+1){this.push(undefined);}}this.splice(new_index,0,this.splice(old_index,1)[0]);return this;};
		Array.prototype.prepend=function(){this.splice.apply(this,[0, 0].concat(Array.prototype.slice.apply(arguments)));return arguments.length==1?arguments[0]:arguments;};
		Math.flip=function(n){return ~n+1;}
		Math.tog=function(n){return +!n;}
		Math.even=function(n){return n%2?(n==1)?0:n-1:n;}
		Math.overlap=function(a1,a2,z1,z2){return ((a1<=z1&&z1<=a2)||(a1<=z2&&z2<=a2))||(z1<=a1&&a2<=z2)||(a1<=z1&&z2<=a2);}
		JSON.tryparse=function(str){try{return JSON.parse(str);}catch(e){return str;}};
		document.getHTML=function(element,deep){if(!element||!element.tagName)return '';var txt,ax,el=document.createElement("div");el.appendChild(element.cloneNode(false));txt=el.innerHTML;if(deep){ax=txt.indexOf('>')+1;txt=txt.substring(0,ax)+element.innerHTML+txt.substring(ax);}el=null;return txt;}

		/*
		var scplayer='https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F';
		var ytp1='<iframe class="youtube-player"type="text/html"width="320"height="193"style="position:absolute;top:15px;left:15px;"src="http://www.youtube.com/embed/';
		var ytp2='?autoplay=1"allowfullscreen="true"frameborder="0"></iframe>';
		var swfp1='<iframe width="600"height="400"style="position:absolute;top:15px;left:15px;"frameborder="0"src="';
		var swfp2='?width=100%&amp;height=100%"></iframe>';
		var ted1='<iframe src="http://embed.ted.com/talks/';
		var ted2='.html?autoplay=1"style="width:560px;height:315px;position:absolute;top:15px;left:15px;"frameborder="0"scrolling="no"webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		var vm1='<iframe src="http://player.vimeo.com/video/';
		var vm2='?autoplay=1"style="width:500px;height:256px;position:absolute;top:15px;left:15px;"frameborder="0"webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
		var pdf1='<iframe src="http://docs.google.com/gview?url=';
		var pdf2='&embedded=true&output=embed"style="width:380px;height:530px;"frameborder="0"></iframe>';
		var ks1='<iframe frameborder="0"width="480"height="360"src="http://www.kickstarter.com/projects/';
		var ks2='/widget/video.html?background=none"></iframe><div class="mask"style="position:absolute;top:15px;right:0px;width:19px;height:360px;background:#7FD522;z-index:2;"></div>';
		var kd1='<iframe src="http://player.kogeto.com/video/';
		var kd2='" width="700" height="350" frameborder="0" scrolling="no"></iframe>';
		var Rc;var newemail;var newuname;
		var pid='not_set';//personid
		var Rc;var newemail;var newuname;*/
		//var a=Architect;

		//,	play;
		/*var n01=n02=n03=n04=n05=n06=n07=n08=n09=n10=n11=n12=n13=n14=n15=n16=0;
		var loads={
			s1:'na',s2:'na',s3:'na',s4:'na',s5:'na',s6:'na',s7:'na',s8:'na',s9:'na',s10:'na',
			s11:'na',s12:'na',s13:'na',s14:'na',s15:'na',s16:'na',
			play:'na'};
		var block1='<div class="b b';var block2='"></div>';
		var aload=0;//afterload*/






















		var m=$('#m')
		,	b_b='b b'
		,	b_='b'
		,	_x=' x'
		,	_y=' y'
		,	f=document.createDocumentFragment()
		,	d=document.createElement('div')
		,	i=[10001,-1]
		,	x=-1
		,	y=0;
		while(--i[0]){
			((++x)==100)?[x=0,++y]:null;
			d.className=b_b+(++i[1])+_x+(x)+_y+(y);//increment i also
			d.id=b_+(i[1]);
			f.appendChild(d.cloneNode(true));
			}
		m[0].appendChild(f);
		m=b_b=b_=_x=_y=f=d=i=x=y=null;


		console.log('---------------------------------loaded---------------------------------');




		//$('.b123').css({'background':'url(img/scanpedia/million.bg/monalisa.png) no-repeat'});
		//$('.b1').css({'background':'url(img/scanpedia/million.bg/jimH.png) no-repeat'});
		//$('.b8').css({'background':'url(img/scanpedia/million.bg/london.png) no-repeat'});
		//$('.b3').css({'background':'url(img/scanpedia/million.bg/zef.png) no-repeat'});
		//
		//$('.b3').css({'background':'url(img/scanpedia/million.bg/zef.png) no-repeat'});









		//$(window).resize(function(){
		//	$('#screen').css({'width':$(window).width()+'px','height':$(window).height()+'px'});
		//	wwidth=($(window).width() / 2)-(83);
		//	wheight=($(window).height() / 2)-(249);
		//	});



		//ㆆ,ω,Δ,Φ,Ω,α,Σ,β,Ø,θ,Γ,ɣ,Ͻ,ㅁ,目;cogΦΠΔ[0]Θ,Ϙ,ϟ,ϪЏ ЯR Ѫᄝᄉᅇᆼᐁᐊᐅᐥᓬᔌᔦᕓᕫᕬᕯᕰᕱᕲᕳᖆᖇᗐᗑᗒᗓᗔᗕᗜᗝᗢᗣᗵᗶᘓᘐᘎᘏᢂㆎʃǀǁʜ http://unicodelookup.com/#latin/7




		//
		//<div class="changetip_tipme_button" data-bid="77fabe72-bd59-41c0-9f80-65384e44a105" data-uid="e5ea412d7914401798a14f8a564918e8"></div>
		//	<script>(function(document,script,id){var js,r=document.getElementsByTagName(script)[0],protocol=/^http:/.test(document.location)?'http':'https';if(!document.getElementById(id)){js=document.createElement(script);js.id=id;js.src=protocol+'://widgets.changetip.com/public/js/widgets.js';r.parentNode.insertBefore(js,r)}}(document,'script','changetip_w_0'));</script>



		/*   w3schools canvas tests

		<!DOCTYPE html>
		<html>
		<body style="background:#060606">
		<canvas id="myCanvas" width="164" height="164" ></canvas>
		<script>
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle='#E63D3C';
		ctx.fillRect(0,0,164,164);
		ctx.font = "bolder 20px Arial";
		ctx.fillStyle='#ffffff';
		ctx.fillText("404 Not Found",12,86);
		</script>
		</body>
		</html>

		*/



		// TODO fix REWIRE reconnection issues
		// over call to reconnect
		// reconnected should impact the app properly


		// TODO
		// fix the bug on page scroll #123



		//웃

		// http://compresspng.com/
		// http://www.quickpicturetools.com/en/blur_edges/




		//need anti hacking built in
		//sanitsation should give 200 then give the request or 404 image for qrs
		//other things ??
		//i dont want a single user to be able to kill the server
		//which at this point they can easily!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




		//<script>function shapeshift_click(a,e){e.preventDefault();var link=a.href;window.open(link,'1418115287605','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0');return false;}</script> <a href="https://shapeshift.io/shifty.html?destination=1AHyBwJme28e9VPu9SxAKNfS4wMJCXvGfz&amp;apiKey=e778494d7d870fd40d01224d812c203e551e003c51a3e67f922ad9ba5190790d340cd777b895a03f7146e38e6449e89830f32af038155fe63650ef3f888f72dc&amp;amount=" onclick="shapeshift_click(this, event);"><img class="ss-button" src="https://shapeshift.io/images/shifty/small_light_altcoins.png"></a>










		console.log('ʃ');//TODO
		var ʃ={//santitizer takes an object as input returns expected input as output
			x:xpect
		,	email:function(address){return address.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)?address:'';}//TODO
		,	'β@?':function(inp){
				inp=
				(!inp)?"-1|-1"://must be defined
				(inp.match(/\{|\(|\[|\]|\)|\}|[A-Za-z ]|\"|\'/))?"-1|-1"://must have no braces letters spaces quotes
				(!inp.match(/\|/))?"-1|-1"://must have pipe
				((r=inp.match(/\d+/g)||[]).length!=2)?"-1|-1":inp;//must have 2 numbers
				var r=(!r)?[-1,-1]:[Number(r[0]||"-1"),Number(r[1]||"-1")];
				inp=(((r[0]<0||r[0]>999999)||r[0]%1!=0)||((r[1]<0||r[1]>101)||r[1]%1!=0))?"-1|-1":inp;//the two numbers must be in range and not fractional
				r=null;
				return inp;
				}
		,	'β@=':function(inp,ϟ){//console.log(inp);
				//if(ϟ[0]!=17){ᛏ.emit('server:qr',inp);}
				inp=inp.split(',');//TODO
				inp[0]=
				(inp[0]==undefined)?'-1|-1':
				(!inp[0].match(/\|/))?['-1','-1']:inp[0].split('|');
				inp[0][0]=
				(inp[0][0]<0)?-1:
				(!(inp[0][0].toString().match(/\d+/)||[])[0])?-1:Number(inp[0][0]);//b
				inp[0][1]=
				(inp[0][1]==undefined)?-1:
				(!(inp[0][1].toString().match(/\d+/)||[])[0])?-1:Number(inp[0][1]);//q
				inp[1]=(inp[1]=='')?'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=':inp[1];
				inp[1]=
				(inp[1]<0)?png404:
				(inp[1].toString().match(/\{|\(|\[|\]|\)|\}/))?png404:
				(inp[1]==404)?png404:
				inp[1];
				inp[2]=
				(!inp[2])?[-1,-1,-1,-1]:
				((inp[2].toString().match(/\Ɵ/g)||[]).length!=11)?[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]:inp[2].split('Ɵ');//must be the expected length
				inp[2]={//TODO
					'i' :Number(inp[2][0])//i) qr id
				,	'e' :inp[2][01]//e) end
				,	'r' :inp[2][02]//r) reaction
				,	'o' :Number(inp[2][03])//o) owner id
				,	'dt':Number(inp[2][04])//dt) last transaction date or end
				,	'gw':Number(inp[2][05])//gw) give aways remaining
			    ,	'ge':inp[2][06]//ge) give away end mobile location
			    ,	'gr':inp[2][07]//gr) give away rule
			    ,	'tp':inp[2][08]//tp) tips btc amounts list since last update ??
			   	,	'rd':Number(inp[2][09])//rd) rent duration months
			    ,	'rp':Number(inp[2][10])//rp) rent price btc
			    ,	'rf':Number(inp[2][11])//rf) owner aditional release fee btc
			    	};
				inp={'b':inp[0][0],'q':inp[0][1],'h':inp[1],'i':inp[2]};
				return inp;
				}
		,	'Qミp?':function(inp){
				return
				(!inp)?0:
				(isNaN(inp))?0:
				(inp<1&&inp>1000000)?0:inp;
				}
		,	'ミQp=':function(inp){
				inp.p=(!inp.p)?png404:inp.p;
				try{window.atob(inp.p);}catch(e){inp.p=png404;}
				inp.q=(!inp.q)?0:
				(isNaN(inp.q))?0:
				(inp.q<1&&inp.q>1000000)?0:inp.q;
				return inp;
				}
		,	'Qミo?':function(inp){
				console.log(inp);//TODO
				return inp;
				}
		,	'Qミo=':function(inp){
				console.log(inp);//TODO
				return inp;
				}}













		console.log('Σ');
		var Σ={//HTML Maker
			install:function(){
				window.html='';//lable for code only
				window.ᐊdiv='<div';
				window.ᐊǀdivᐅ='</div>';
				window.ᐊb='<b';
				window.ᐊǀbᐅ='</b>';
				window.ᐊa='<a';
				window.href=function(a){return ' href="'+a+'"';};
				window.ᐊǀaᐅ='</a>';
				window.ᐊn='<span'
				window.ᐊǀnᐅ='</n>';
				window.ᐊimg='<img';
				window.ᐊsub='<sub';
				window.ᐊǀsubᐅ='</sub>';
				window.ᐊsup='<sup';
				window.ᐊǀsupᐅ='</sup>';
				window.src=function(a){return ' src="'+a+'"';};
				window.ǀᐅ='/>';
				window.ᐅ='>';
				window.ᐊinp='<div contenteditable';
				window.wm=function(a){return ' water="'+a+'"';};
				window.ᐊǀinpᐅ='</div>';
				window.ᐊbrᐅ='<br>';
				window.cl=function(a){return ' class="'+a+'"';};
				window.id=function(a){return ' id="'+a+'"';};
				window.css=function(a){return ' style="'+a+'"';};
				window.png64='data:image/png;base64,';
				window.png404='iVBORw0KGgoAAAANSUhEUgAAAKQAAACkCAYAAAAZtYVBAAAOI0lEQVR4Xu2aaXCUVRaG3/SWkM4CCUlEB/dSGKwSFXUYR0VFLUsiBGWTfRMQEHABXMYFsBQXEBFwZFNAgUG2QWZG3HCpwhFBR8upErEcSwtMQlaypzs9dW6nP7qzGEKOcKfqvb/S3V+fPv2c57v33NuJO3T1n0LgIAFLCMRRSEsqwTQMAQpJEawiQCGtKgeToZB0wCoCFNKqcjAZCkkHrCJAIa0qB5OhkHTAKgIU0qpyMBkKSQesIkAhrSoHk6GQdMAqAhTSqnIwGQpJB6wiQCGtKgeToZB0wCoCFNKqcjAZCkkHrCJAIa0qB5OhkHTAKgIU0qpyMBkKSQesIkAhrSoHk6GQdMAqAhTSqnIwGQpJB6wiQCGtKgeToZB0wCoCFNKqcjAZCkkHrCJAIa0qB5OhkHTAKgIU0qpyMBkKSQesIkAhrSoHk6GQdMAqAhTSqnIwGQpJB6wiQCGtKgeToZB0wCoCFNKqcjAZCkkHrCJAIa0qB5OhkHTAKgIU0qpyMBkKSQesIkAhrSoHk6GQdMAqAhTSqnIwGQpJB6wiQCGtKgeToZB0wCoCFNKqcjAZCkkHrCJAIa0qB5OhkHTAKgIU0qpyMBkKSQesIkAhrSoHk6GQdMAqAhTSqnIwGQpJB6wiQCGtKgeToZB0wCoCFNKqcjAZCkkHrCJAIa0qB5OhkHTAKgIU0qpyMBkKSQesIkAhrSrH/28ynnPOQcZra8wXqNiyBSUvLDyhL6MipLdbN3RcshRwuUwS+WNGI3DwoJOQKzUVyWPGIv6qq+BOS0NdSQmqP/sXSpcvR92RI80mHpeUhMy16+BKTzfXlC5+EeWbNv3qF+3w2ONIuOEGc03w8GHkDRsK1NbGvCdp6FAkT5honsvt1xd1hYUnBE++b9Lw4agrLELFjr+1GCNr23a40tJavK5g8t2o+frrFq+z6QJ7hPR4kLF6NTxnne3wiRYyLj4eHZevgOfsY69HLhRh8seOQaisrEm2qbNmI/HWW53XWiukkXjZUpSvX/+bCOm7rAfSFy5E7bff4sj4cS36QSFbRIQ2z5DJY8ciaeQohCorEdeuXaMZMunOoUieGJ6NZCqv3L0b8Zf3QNLwEea5sjdex9GXX26Uqe+yy5C+8IWYuCcipMieN2SwmZUjQ2uGTJ05C4l9+rReyEAAhbNnN1udmv980+xN2nJJT80VVsyQnnPPRcaKlUBdHcq3boF/0OBGQmasWg3P+eeHl89BAx1akefr8vKQe8ftMRRlVpV+xH366Shbu8aRtzVCyue5Zan3+VC+eTNKF71wXELG9/wj/P37w9ulC1x+vxG55ssvUbZhvRFPhq/7JUh/8cVGlW9ppnRmyJoaHO4dbitaHB4P/H37ot1NN5lVKM7jQTAvD1V79pibua6gwAmRPG48kkaEb/SGy36HuXORcG0v81pudh/zvdydOyPz9TfMc0dfeQWV77+HlClTEd+9O+B2o+aLL0wvGPzll5g02/XujaShw+Dp3BnB4mJU7tyJyo8+RMbqV52J5+T3kC4XOi57Gd6uXc2XCVVXIWXqPbFCer3otOsd8+Wq3nsPRU887nyx1PvuR2LfvmFADfq4lClT4B84CNV795olV+SV0RohAz/+F9V7PoV/8GAgGETeiOEI/vSTidPcDJkyaRL8Q+48Bj8YNLmbEQyi+Ml5qHz3XUjPnDZnbri3lb45EEBdURFqDx5E4ayZzTrWaiF9PqQ/vwC+iy9uMqe64mIUTLsHgR9+MK+3VkhXZiay3twcluitt5DQsyekb4/zep39QOD775E/epTz+e1uvhntH37EeSw5uFJSUL1vH+Ivv/zUCSmzYcrkyQh89x3y7xpvZpWGQro7nY7MjRtNkuWb30TpokXH7ubRY5A0erR5fGTSRNR+8435WwQX0UPV1cgfMRxxycknJGQwN9eAzNqwEXEpKaj65BMUPfRgs0LG9+iBtAXhnaFsyAofexTBn3+G79JLjXySR6iqCnkDB0CKICNrx1uQDVtLM2PkS7dWyOTx453VofKdd1CyKNzCJGZnI3X6DBM2+rNbLWRGBrI2b3FuuPItW8wE4EpORvril+A580zzWsHUqaj595dGUrne3IiBgLkZZPPlzsxE+ktL4D7ttFMjpCylGa++Zu4kkVGk9A8Y0EhIz3nnOdN4+fo3ULpsmSNkdG9ZeO8MVH/+uZmNpAWQ98mULz2nLPcnMkPW5ecj9/b+MXlFwDY1Q3aYOw8J114bvkHGj3OWZ3mcNGwYku+aYF6L5NUmIVvoIeUEIhx/B1yp7REqLcUvOf1iTgvSnnse8VdcYa7LHznCzJJtEVJOGkzrFAiYmIn9+zvSlzz/HCq2b4f3ggvRccUK83rVhx+i6M/HZsrEfjlIvffeUyOkbDZk0yH93dHly00SGkLK5kg2STVffYWCKZNN3LYKCY/HHB25zzjDmU2aElKWLlnC0ER/57vkEqQvCveMsrSVPDO/bTOkc1s2/cfh63rBnZWFzA3h1aX6s89QeP99MRcnjxmDpFHhFaZ43lxU7trVJiGr9+yJaTdEdpFehtRYap1w9TXo8OST4edWrkTZa+GeUYb3wgvNaYphdDLPIeUYRo5jAj/+aM4bI2d8TQnp7tQJmRv/apJsuLFIjl6yJ05AqLwCGatWAaEQ8kaPcvq9NgsJIKHXdegwZ0598ebBlZ6GlEl3m8eR/vW0t3eZUwJZjnNvy44pfszMsPsDFD366G8upPe884/NRh98gKLHwp8ZGZGWSR6XLFyAiq1b2ySkCC1iR0b0xu3oiuUoW7MGiX2ykToz3COXLlmC8o0bnOujN0gnVci0+fMhO9HjGbKT7PTPtyGzVMMpPvWBB5CYfVtYiuw+aHfLLUi5OzwrtjQKZsxAzb7Pm7wscjAeWbIjF3Vcugzeiy6C7OrLNm0y/W+0kDEz5I29zY3hFKf+CEoeywF4ybPPtk3I49hlS1vkzJB796LwvvByGBnJY8chaeRI87B4zhNmsxX9XMH0aajZv9+5Pn3xYvgu7u7wll22K6qHPB4hpaWR1kZG9Oooj82PI8vCx3f2CnldL3R8aYlJ1ggiPUp9oTPWrDWH5bJxyLtziNkN/5ZCRgOrPXAA3gsuiBEy+ljEaeLryyn9o/SRMkrmP42KnTtjhTxwAEfGjW3pPkJrNzVOD1lRgdycfmZD49xgcsLRrZt5mDd4EIKHDsE/cKA5tjF5PjPftBcy4hISkLVlq9lBy4gc+7RWSLPh/MsrJoacgETfJP4hQ5xV56QKaY4FfL5G8GXnJ3eojIIZ002TLY2yHO3IEY+5c7ZvNwfjCT3/YI51ZMiRUdm6tZCzxzi/v1FcOXCVntVcu3IFKnbsQF1pqdN8N3xDczOkXCfLtizf0SOyZEd+dZHXag98i6KHHkIwPx+y++4gu2y/32wucgcOQKiiIixkfd8popjD96KimJm1YW6tFTJ6k1L5j7+jZOFChIJB+Pvf7szwshmUTaGM+CuvRNqzz5m/5bjmyLR7jMSp06aHf/GqP8I6USHl/VnbtpmNlpw9yzFe1e7d8HbpirRn5oefP9kzZCNj6p9oqoc0L7nd6Lh0Kbxdf9/orXK8kj9xgtlINDc0eshIbLMMrl0HyDlb/Yg+A210Dil5RW6+mhoUPvIwqj/91Hlv2lNPm9/nzQgGjZC5/XOa/S6tFVI+O+YcUs5F65maj8zNRcHUKccOrl0uZK5bB/fvOjs5SV7BoiKzfEtbJCM3Oxt1JcWtXrLlvYk5OUidEdU+yP8JeL2oev99JFx/fVjIbVtRsmBBsxx+7YU2/3QYCd6skLJk+P1m9ky45hrzzxXBwkJUffQRjq5ahVDZ0V9NXFNI+SBZ0mRpa0pIeU4EkxnI16WL2eRIrjX79plfRWQjFz1k595+9oPwde2KUG2tOZMrnPmAnpASSX6pyclBuxvll5qzEOd2I3D4EKo+/hhl69cjdDSWn5wRtp85C3IyIEc41fv3mx8UpF+P/IqTN+AOI3Nrl+zIF5MjoaSBg+DOyDC/GkkLIyuXtBgyZDYvfuqpUyvkCX0630QCDQiozZAkSwIaBCikBkXGUCNAIdVQMpAGAQqpQZEx1AhQSDWUDKRBgEJqUGQMNQIUUg0lA2kQoJAaFBlDjQCFVEPJQBoEKKQGRcZQI0Ah1VAykAYBCqlBkTHUCFBINZQMpEGAQmpQZAw1AhRSDSUDaRCgkBoUGUONAIVUQ8lAGgQopAZFxlAjQCHVUDKQBgEKqUGRMdQIUEg1lAykQYBCalBkDDUCFFINJQNpEKCQGhQZQ40AhVRDyUAaBCikBkXGUCNAIdVQMpAGAQqpQZEx1AhQSDWUDKRBgEJqUGQMNQIUUg0lA2kQoJAaFBlDjQCFVEPJQBoEKKQGRcZQI0Ah1VAykAYBCqlBkTHUCFBINZQMpEGAQmpQZAw1AhRSDSUDaRCgkBoUGUONAIVUQ8lAGgQopAZFxlAjQCHVUDKQBgEKqUGRMdQIUEg1lAykQYBCalBkDDUCFFINJQNpEKCQGhQZQ40AhVRDyUAaBCikBkXGUCNAIdVQMpAGAQqpQZEx1AhQSDWUDKRBgEJqUGQMNQIUUg0lA2kQoJAaFBlDjQCFVEPJQBoEKKQGRcZQI0Ah1VAykAYBCqlBkTHUCFBINZQMpEGAQmpQZAw1AhRSDSUDaRCgkBoUGUONAIVUQ8lAGgQopAZFxlAjQCHVUDKQBgEKqUGRMdQIUEg1lAykQYBCalBkDDUCFFINJQNpEKCQGhQZQ40AhVRDyUAaBCikBkXGUCNAIdVQMpAGAQqpQZEx1AhQSDWUDKRB4H8QsHZG/jZy4wAAAABJRU5ErkJggg==';
				window.px='px';
				window.dta=function(key,value){return " data-"+key+"='"+value+"'";};//quotes and commas inverted because of json data
				return;
				}
		,	cammel:function(str){
				var words=str.split(' ');
				for(var i=0;i<words.length;++i){
					words[i]=words[i].substr(0,1).toUpperCase()+words[i].substr(1);
					}
				i=null;
	    		return words.join(' ');
				}
		,	qr:function(h,q,b,i,B,c,cb){
				QR.standard(q,U.uid,h,c,function(qh){
					B.appendChild(Σ.create(ᐊimg+src(qh)+' src3="'+png64+h+'"'+cl('q q'+q)+id('q'+i.i)+dta('info',JSON.stringify(i))+ǀᐅ));
					h=i=B=null;
					cb(c,b,q);//return who drew and 0|1
					});}
		,	payqr:function(img){
				return html
				+ᐊimg+src(img)+id('payqr')+ǀᐅ
				;}
		,	olink:function(ownerid,ownername){
				return html
				+ᐊdiv+cl("byN")+ᐅ
				+	ᐊb+ᐅ+'by: '+ᐊǀbᐅ
				+	ᐊb+cl("u")+id('u_'+ownerid)+ᐅ+'hexDecode('+ownername+')'+ᐊǀbᐅ
				+ᐊǀdivᐅ
				;}
		,	coin:function(coin,symbol){
				return html
				+ᐊdiv+id(symbol)+cl('coin')+ᐅ
				+	ᐊimg+cl('imgcoin '+coin+' symbol '+symbol)+src('_R/coin/'+coin+'.png')+ǀᐅ
				+	ᐊbrᐅ
				+	ᐊn+ᐅ+Σ.cammel(coin)+ᐊǀnᐅ
				+ᐊǀdivᐅ
				;}
		,	rentfor:function(something){
				return html
				+ᐊdiv+id("pay__")+ᐅ
				+	ᐊdiv+cl("btn btn-paylogin"+(U.pid>-1?" hidden":""))+ᐅ
				+		ᐊsub+ᐅ+'CLICK HERE'+ᐊǀsubᐅ
				+		ᐊbrᐅ
				+		'Login To Buy'
				+	ᐊǀdivᐅ
				+	ᐊdiv+id("paym")+ᐅ
				+		ᐊdiv+id("pay-start")+ᐅ+ᐊǀdivᐅ
				+		ᐊdiv+id("paymin")+ᐅ+ᐊǀdivᐅ//minimise the payment
				+		ᐊdiv+id("scrollpay")+ᐅ
				+			ᐊdiv+id("coinL")+ᐅ+ᐊǀdivᐅ//arrow
				+			ᐊdiv+id("coinR")+ᐅ+ᐊǀdivᐅ//arrow
				+			ᐊdiv+id("paysubmit")+ᐅ+'CONFIRM & PAY'+ᐊǀdivᐅ
				+		ᐊǀdivᐅ
				+		ᐊdiv+id("coins")+ᐅ
				+			Σ.coin('bitcoin','btc')
				+			Σ.coin('litecoin','ltc')
				+			Σ.coin('dogecoin','doge')
				+			Σ.coin('feathercoin','ftc')
				+			Σ.coin('gemz','gemz')
				+			Σ.coin('infinitecoin','ifc')
				+			Σ.coin('maidsafe','maid')
				+			Σ.coin('mastercoin','msc')
				+			Σ.coin('mintcoin','mint')
				+			Σ.coin('monacoin','mona')
				+			Σ.coin('monero','xmr')
				+			Σ.coin('namecoin','nmc')
				+			Σ.coin('novacoin','nvc')
				+			Σ.coin('nubits','nbt')
				+			Σ.coin('nxt','nxt')
				+			Σ.coin('peercoin','ppc')
				+			Σ.coin('potcoin','pot')
				+			Σ.coin('quark','qrk')
				+			Σ.coin('reddcoin','rdd')
				+			Σ.coin('ripple','xrp')
				+			Σ.coin('shadowcash','sdc')
				+			Σ.coin('startcoin','start')
				+			Σ.coin('stellar','str')
				+			Σ.coin('storjcoinx','sjcx')
				+			Σ.coin('swarm','swarm')
				+			Σ.coin('tetherusd','usd₮')
				+			Σ.coin('unobtanium','uno')
				+			Σ.coin('vericoin','vrc')
				+			Σ.coin('vertcoin','vtc')
				+		ᐊǀdivᐅ
				+	ᐊǀdivᐅ
				+	ᐊdiv+id("pay_")+ᐅ+ᐊǀdivᐅ//click to start
				+ᐊǀdivᐅ
				;}
		,	Qミ:function(qmenuid,ownerinfo){
				return html
				+ᐊdiv+id('qmenu')+cl('z3 qmenu _'+qmenuid)+css('z-index:3;position:absolute;background:url(_R/case.png?1);width:224px;height:330px;')+ᐅ//TODO tidy up css
				+	ᐊdiv+cl('optics')+css('position:absolute;top:194px;left:30px;cursor:pointer;')+ᐅ
				+		ᐊimg+cl('simple')+src('_R/m1.png')+ǀᐅ
				+		ᐊimg+cl('modulate')+src('_R/m2.png')+ǀᐅ
				+		ᐊdiv+cl('picture')+css('top: -164px;left: 0px;position: absolute;width: 164px;height: 164px;')+ᐅ+ᐊǀdivᐅ
				+		ᐊimg+cl('pdf')+src('_R/m4.png')+ǀᐅ
				+		ᐊimg+cl('chat')+src('_R/chat.png')+ǀᐅ
				+		ᐊimg+cl('share')+src('_R/share.png')+ǀᐅ
				+		ᐊimg+cl('tip')+src('_R/tip.png')+ǀᐅ
				+	ᐊǀdivᐅ
				+	ownerinfo
				+ᐊǀdivᐅ
				;}
		,	user:function(rid){
				return html
				+ᐊdiv+id(rid)+cl("user-mouse")+dta('rid',rid)+ᐅ
  				+	ᐊdiv+cl("user-mouse-head")+css('background:#fff;')+ᐅ+ᐊǀdivᐅ
				+	ᐊdiv+cl("user-mouse-name")+ᐅ+'Guest.user'+ᐊǀdivᐅ
				+ᐊǀdivᐅ
				;}
		,	said:function(rid,msg,x,y){
				return html
				+ᐊdiv+cl('speech')+id('speech'+rid)+css('left: '+(Number(x)+60)+px+';top: '+(Number(y)-50)+px+';')+ᐅ
  				+	msg
  				+	ᐊdiv+cl('speech-after')+ᐅ+'x'+ᐊǀdivᐅ
				+ᐊǀdivᐅ
				;}
		,	putin:function(place,stuff){
				var temp=document.createElement('div');
				temp.innerHTML=stuff;
				place[0].appendChild(temp.firstChild);
				temp=place=stuff=null;
				return;
				}
		,	create:function(htmlStr){//faster way to build html
			    var frag=document.createDocumentFragment()
			    ,	temp=document.createElement('div');
			    temp.innerHTML=htmlStr;
			    while(temp.firstChild){
			        frag.appendChild(temp.firstChild);
			        }
			    htmlStr=temp=null;
			    return frag;
			    }
		};'> install-on-startup >';Σ.install();
















		console.log('Ʌ mouse');
		var Ʌ={
			x:0
		,	y:0
		,	down:0
		,	listen:function(){
				document.onmousemove=function(e){
		    		Ʌ.x=e.pageX;
		    		Ʌ.y=e.pageY;
				    ⵌ.AIR('mouse',{x:Math.flip(Ʌ.m.left)+Ʌ.x,y:Math.flip(Ʌ.m.top)+Ʌ.y});
		    		return;
					};
				document.body.onmousedown=function(){
		  			++Ʌ.down;
		  			return;
					};
				document.body.onmouseup=function(){
		  			--Ʌ.down;
		  			return;
					};
				$(window).resize(function(){Ʌ.window.define();});//TODO there may be a bug with window resize
				Ʌ.window.define();
				return;
				}
		,	in:function(el){//is mouse inside qr when it appears?
				var sz=[el.width(),el.height()];//TODO cache dom stuff
				el=el.offset();
				el=[el.left,el.top];
				if((Ʌ.x>el[0]&&(el[0]+sz[0])>Ʌ.x)&&(Ʌ.y>el[1]&&(el[1]+sz[1])>Ʌ.y)){el=sz=null;return true;}
				el=sz=null;
				return false;
				}
		,	window:{
				Φ:{top:0}
			,	w:0
			,	h:0
			,	c:{x:0,y:0}
			,	define:function(){
					Ʌ.window.w=window.innerWidth||document.documentElement.clientWidth;
					Ʌ.window.h=window.innerHeight||document.documentElement.clientHeight;
					Ʌ.window.c={//center
						x:Ʌ.window.w/2
					,	y:Ʌ.window.h/2};
					Ʌ.window.Φ.top=$('#minigrid').parent().offset().top+2;//what about wwidth and wheight to center a qr? do i even need them?
					window.Ʌ=Ʌ;
					return;}}
			};'> listen-on-startup >';Ʌ.listen();















		var ui={
			listen:function(){
				$('#peers').on('mouseenter','.peer',function(){
						$(this).html('');
						var id=$(this).attr('id');
						var shift=Ʌ.window.h-$(this).offset().top-111,shift=(shift<0)?(shift-5):0,shift=[shift,Math.flip(shift)];
						$(this).append(
							'<div class="peer-name-tooltip" style="position:relative;top:0px;right:20px;margin-top:'+shift[0]+'px;">'
						+	  	window['mouse'+id].children[1].innerText
						+		'<br>'
						+		'<div class="peer-name-big" style="background-image:'+window['mouse'+id].children[0].style.backgroundImage+';">'
						+			'<img class="run" src="_R/run.png" style="padding: 3px 2px 3px 2px;background-color:#4E5152;margin-left:88px;"/>'
						+			'<img class="tip" src="_R/tip.png" style="padding: 3px 2px 3px 2px;background-color:#4E5152;margin-left:88px;"/>'
						+			'<img class="pro" src="_R/pro.png" style="padding: 3px 2px 3px 2px;background-color:#4E5152;margin-left:88px;"/>'
						+		'</div>'
						+		'<div class="peer-name-arrow" style="margin-top:'+shift[1]+'px;"></div>'
						+		'<div class="peer-mouse-guide" style="margin-top:'+shift[1]+'px;"></div>'//help the mouse into the tooltip
						+	'</div>');
						id=shift=null;
					}).on('mouseleave','.peer',function(){
						$(this).html('');
					}).on('mouseenter','.peer-opt-profile',function(){
					}).on('mouseleave','.peer-opt-profile',function(){
					}).on('mouseenter','.peer-name-chat',function(){
					}).on('mouseleave','.peer-name-chat',function(){//TODO tip
					});
				$('.menu-toggle-btn')
				.on('click',function(){
					ui.menuopen=Math.tog(ui.menuopen);
					$('.menu-toggle,#menu').toggleClass('menu-open');
					if(ui.menuopen){$('#menu').css({left:'-215px'});}
					})
				.on('mouseenter',function(){
					if(!ui.menuopen){$('#menu').css({'box-shadow':'2px 0px 10px rgba(0,0,0,0.7)',left:'-213px'});}
					})
				.on('mouseleave',function(){
					if(!ui.menuopen){$('#menu').css({'box-shadow':'0px 0px 0px rgba(0,0,0,0)',left:'-215px'});}
					});
				$('.btn-login').on('click',function(){
					$('.edit-login').text(ui.waters['edit-login']).css({'color':'#AAA'});
					$('.sub-login').show();
					});
				$('.sub-min').on('click',function(){
					$('.sub').hide();
					});
				var focus=function(that){
					ui.$edit=$(that);//(that=$(that));
					if(that.value==ui.waters[that.getAttribute('id')]){that.value='';}//if(that.text()==ui.waters[that.attr('class').split(' ')[1]]){that.text('');}
					that.style.color='#000';//that.css({'color':'#000'});
					if(that.classList.contains('edit-login')){$('#edit-login-blur').show();document.getElementById('recaptcha-login').innerHTML='';}
					return;
					};
				var blur=function(that){
					//that=$(that);
					if(ui.$edit==undefined){return;}
					if(!that.value){
						that.value=ui.waters[that.getAttribute('id')];
						that.style.color='#AAA';
						return;
						}
					else if(ui.$edit.hasClass('edit-login')){
						if(ʃ.email(that.value)){
							ui.$edit.css({'color':'#4BC80E'});
							}
						else{ui.$edit.css({'color':'#FF0000'});return;}
						}};
				$('#edit-say,#edit-login').on('focus',function(){focus(this);return;}).on('blur',function(){blur(this);return;});
				$('#edit-say').on('keydown',function(e){
					if(this.value.length<233){
						this.classList.remove('no-more-text');
						this.style.height='5px';
						var h=(this.scrollHeight-6)+'px';
						this.style.height=h;
						if(h=='17px'){this.style.paddingTop='4px';}
						else{this.style.paddingBottom='4px';}
						e=h=null;
						return;
						}
					else if(e.which!=8&&e.which!=46){
						this.classList.add('no-more-text');
						var that=this;
						setTimeout(function(){that.classList.remove('no-more-text');that=null;return;},50);
						e.preventDefault();
						e=null;
						return false;
						}});
				$('body').on('click','.speech-after',function(){$(this).parent().remove();});
				function onvisibilitychange(e){
					var v="visible",h="hidden",evtMap={focus:v,focusin:v,pageshow:v,blur:h,focusout:h,pagehide:h};
					e=e||window.event;
					if(e.type in evtMap){document.body.className=evtMap[e.type];}
					else{document.body.className=this[ui.hidden]?"hidden":"visible";}
					for(var id in ui.dolater){ui.dolater[id]();}
					}
				if((ui.hidden="hidden") in document){document.addEventListener("visibilitychange",onvisibilitychange);}
				else if((ui.hidden="webkitHidden") in document){document.addEventListener("webkitvisibilitychange",onvisibilitychange);}
				else if((ui.hidden="mozHidden") in document){document.addEventListener("mozvisibilitychange",onvisibilitychange);}
				if(document[ui.hidden]!==undefined){onvisibilitychange({type:document[ui.hidden]?"blur":"focus"});}
				ui.ʭ.listen();//paralayers
				return;
				}
		,	ul:undefined//document.getElementById('users').getContext("2d")
		,	hidden:undefined
		,	dolater:{}//clean up que of peers (when the ui is hidden tab minimised etc old peers don't get cleaned up)
		,	ml:$('#m')
		,	ʭ:{//paralayers
				t:null//timer
			,	c:undefined//timestamp current
			,	l:0//timestamp last
			,	dblclick:false
			,	G:undefined//global area move as one
			,	R:undefined//global area clip?TODO
			,	Ʌ:undefined
			,	listen:function(){
					$('body').on('mousedown','.paralayer',function(e){//top layer
				        ui.ʭ.dblclick=false;
				        ui.ʭ.c=+new Date();
				        if(ui.ʭ.c-ui.ʭ.l<700){ui.ʭ.dblclick=true;};
				        ui.ʭ.l=ui.ʭ.c;
				        if(ui.ʭ.dblclick){
				            $('body').addClass('user-select-none');
				            $(e.target).trigger('dblclick');//bottom layer
				            }
				        else{
				        	$(e.target).trigger('click');//bottom layer
				            }});
				    $('#users').on('paralayer-tooltip',function(){//rules here
				        console.log('tooltip');
				        return;
				        });
					return;}}
		,	menuopen:0
		,	waters:{
				'edit-login':'me@example.com'
			,	'edit-say'	:"What's on your mind?"
				}
		,	$edit:undefined
			};'> listen on startup >';ui.listen();






















		//TODO add a bit more border around the grid so that if the-one qr is right on the edge the screen can still show the qr in the middle. this applies only to those on the top and left (the first blocks)



		console.log('map Φ');
		var Φ={
			go:function(X,Y,x,y){
				X=X==undefined?Φ.clicked.x:X;
				Y=Y==undefined?Φ.clicked.y:Y;
				ⵌ.AT((Φ.in.x/2)-1,(Φ.in.y/2)-1);//TODO also set this when (one)
				Φ.you.animate({'left':(Φ.in.x)+px,'top':(Φ.in.y)+px},800);//sets mini pos
				Φ.main.animate(//TODO replace with http://stackoverflow.com/questions/2087510/callback-on-css-transition && http://stackoverflow.com/questions/3164740/can-jquery-change-css-style-definition-not-individual-css-of-each-element
					{'left':'-'+(X+(((x||5)*166)-Ʌ.window.c.x))+px,'top':'-'+(Y+(((y||5)*166)-Ʌ.window.c.y))+px}
				,	800
				,	function(){
						Φ.wasscroll=1;
						Ʌ.m=Φ.m.offset();
						setTimeout(function(){Φ.wasscroll=0;},700);
						β.causepause=-1;
						if(β.one){β.Qミ();}else{β.update();}
						});}
		,	listen:function(){
				Φ.map.bind('click',function(e){
					Φ.in={//mini you
						x:Math.even(Math.floor((((x=(e.offsetX-4))>200)?200:(x<0)?0:x))+2)
					,	y:Math.even(Math.floor((((y=(e.offsetY-4))>200)?200:(y<0)?0:y))+2)};
					var ixof={
						x:Φ.mini.indexOf(Φ.in.x)//cached
					,	y:Φ.mini.indexOf(Φ.in.y)
						};
					Φ.clicked={
						x:Φ.grid[ixof.x]
					,	y:Φ.grid[ixof.y]
						};
					Φ.bigpos=((((ixof.y)*100))+(ixof.x));
					e=ixof=null;
					if(β.stlist[Φ.bigpos]==undefined){Φ.go();}//user clicked another location before we had time to even find out where we are
					else if(β.stlist[Φ.bigpos].indexOf(2)==-1){Φ.go();}//there are no pending qrs requests (2)
					else{β.causepause='Φ';}//the block loader will Φ.go() when it is ready
					});
				Ʌ.m=Φ.m.offset();
				Φ.main.draggable({//TODO replace jQuery with script
					start:function(){
						Φ.wasdrag=0;
						Φ.drag[0].x=Φ.main.position().left;
						Φ.drag[0].y=Φ.main.position().top;
						$('#users,#screen').addClass('grab');
						}
				,	drag:function(){
						Φ.wasdrag='?';//confuse the click timer
						Ʌ.m=Φ.m.offset();
						}
				,	stop:function(){
						Qミ.clicktimer=setTimeout(function(){Φ.wasdrag=0;},700);
						Φ.drag[1].x=Φ.main.position().left;
						Φ.drag[1].y=Φ.main.position().top;
						Φ.wasdrag=(Math.abs(Φ.drag[0].x-Φ.drag[1].x)>5||Math.abs(Φ.drag[0].y-Φ.drag[1].y)>5)?1:0;//big enough change in position
						var x=Math.flip(Φ.main.position().left);
						var y=Math.flip(Φ.main.position().top);
						x=Φ.grid.indexOf((x-(x%1660)));
						y=Φ.grid.indexOf((y-(y%1660)));
						$('#users,#screen').removeClass('grab');
						if(x!=Φ.on.x||y!=Φ.on.y){
							Φ.you.css({'left':((x*2)+3)+px,'top':((y*2)+3)+px});//sets mini pos
							ⵌ.AT(x,y);
							}
						Φ.on={x:x,y:y};
						x=y=null;
						β.update();
						}})
					.mousedown(function(){$('#users,#screen').addClass('grab');})
					.mouseup(function(){$('#users,#screen').removeClass('grab');});
				$('#users').mouseup(function(){$('#users,#screen').removeClass('grab');});
				return;
				}
		,	tourl:function(loc){
				window.history.pushState({},'KilrBit','?'+loc);
				loc=null;
				return;
				}
		,	alien:function(n){//example "33"
				var at=n;
				if(n.length<4){for(;(n='0'+n).length<4;);}//"0033"
				n=n.match(/.{1,2}/g);//["00","33"]
				n=[Φ.mini[(+n[0])],Φ.mini[(+n[1])]];//[0==2,33==68]
				Φ.map.append(
					 '<div class="alien alien'+at+'" style="top:'+(n[0])+px+';left:'+(n[1])+px+';">'
					+	'<div class="alien-bg" style="top:-'+n[0]+px+';left:-'+n[1]+px+';"></div>'
					+'</div>');
				setTimeout(function(){$('#minigrid > div.alien'+at).remove();at=null;},1000);
				n=null;
				return;
				}
		,	fromurl:function(url){
				var big=Number(url)||Number(document.location.href.split('?')[1]),rem,to,x,y;
				rem=big%100||100;
				big=(big-rem)/100;
				β.one=''+big+'|'+rem+'';
				x=y=rem;
				x=x%10||10;
				y=(y-x)/10;
				to=$('#b'+big).attr('class').split(/\s+/).slice(2);
				to={
					X:Φ.grid[Number(to[0].replace('x',''))]
				,	Y:Φ.grid[Number(to[1].replace('y',''))]
				,	x:x
				,	y:y};
				Φ.in={
					x:Φ.mini.indexOf(to.X)
				,	y:Φ.mini.indexOf(to.Y)};
				url=big=rem=x=y=null;
				Φ.go(to.X,to.Y,to.x,to.y);
			    }
		,	inview:function(){//(blocks inside grid; where grid is the 4 screen corners)
			    var v=$('#main').offset();
			    v.left=Math.flip(v.left);
			    v.top=Math.flip(v.top);
			    v={ x:{'f':v.left,'t':v.left+Ʌ.window.w}//viewpoints are the client bounds 4 corners //from-to
		        ,   y:{'f':v.top ,'t':v.top+Ʌ.window.h}};
			    var x=[],y=[];
			    for(var i=0;i<Φ.grid.length;++i){
			        Math.overlap(v.x.f,v.x.t,Φ.grid[i],Φ.grid[i+1])&&(x.push('.x'+(i==100?99:i)));
			        Math.overlap(v.y.f,v.y.t,Φ.grid[i],Φ.grid[i+1])&&(y.push('.y'+(i==100?99:i)));}
			    for(var i=0,v=[];i<x.length;++i){for(var j=0;j<y.length;++j){if((it=$(x[i]+y[j])).find('.q').length<100){v.push(it.attr('id').replace('b',''));}}}
			    return v;
		    	}//0   1    2    3    4    5    6    7     8     9     10    11    12    13    14    15    16    17    18    19    20    21    22    23    24    25    26    27    28    29    30    31    32    33    34    35    36    37    38    39    40    41    42    43    44    45    46    47    48    49    50    51    52    53    54    55    56    57    58    59    60    61     62     63     64     65     66     67     68     69     70     71     72     73     74     75     76     77     78     79     80     81     82     83     84     85     86     87     88     89     90     91     92     93     94     95     96     97     98     99     100
		,	grid:[0000,1660,3320,4980,6640,8300,9960,11620,13280,14940,16600,18260,19920,21580,23240,24900,26560,28220,29880,31540,33200,34860,36520,38180,39840,41500,43160,44820,46480,48140,49800,51460,53120,54780,56440,58100,59760,61420,63080,64740,66400,68060,69720,71380,73040,74700,76360,78020,79680,81340,83000,84660,86320,87980,89640,91300,92960,94620,96280,97940,99600,101260,102920,104580,106240,107900,109560,111220,112880,114540,116200,117860,119520,121180,122840,124500,126160,127820,129480,131140,132800,134460,136120,137780,139440,141100,142760,144420,146080,147740,149400,151060,152720,154380,156040,157700,159360,161020,162680,164340,166000]
		,	mini:[2   ,4   ,6   ,8   ,10  ,12  ,14   ,16  ,18   ,20   ,22   ,24   ,26   ,28   ,30   ,32   ,34   ,36   ,38   ,40   ,42   ,44   ,46   ,48   ,50   ,52   ,54   ,56   ,58   ,60   ,62   ,64   ,66   ,68   ,70   ,72   ,74   ,76   ,78   ,80   ,82   ,84   ,86   ,88   ,90   ,92   ,94   ,96   ,98   ,100  ,102  ,104  ,106  ,108  ,110  ,112  ,114  ,116  ,118  ,120  ,122  ,124   ,126   ,128   ,130   ,132   ,134   ,136   ,138   ,140   ,142   ,144   ,146   ,148   ,150   ,152   ,154   ,156   ,158   ,160   ,162   ,164   ,166   ,168   ,170   ,172   ,174   ,176   ,178   ,180   ,182   ,184   ,186   ,188   ,190   ,192   ,194   ,196   ,198   ,200]
		,	bigpos:1
		,	drag:[{x:0,y:0},{x:0,y:0}]//start,stop
		,	x:0
		,	y:0
		,	clicked:{x:0,y:0}
		,	in:{x:2,y:2}//in default position at start minimap
		,	on:{x:1,y:1}//in default position at start drag movements may update #you position
		,	wasdrag:0
		,	wasscroll:0
		,	top:0
		,	iv:undefined
		,	you:$('#you')
		,	main:$('#main')
		,	map:$('#minigrid')
		,	m:$('#m')
		,	u:$('#m')//$('#users')
			};'> listen-on-startup >';Φ.listen();






















		console.log('β');
		var β={
			cache:{}//block elements
		,	block:[    2 , 52, 7 , 57, 21, 71, 26, 76, 24, 74, 29, 79, 43, 93, 48, 98, 5 , 55, 10, 60, 13, 63, 18, 68, 32, 82, 37, 87, 35, 85, 40, 90, 12, 62, 17, 67, 14, 64, 19, 69, 42, 92, 47, 97, 45, 95, 50, 100, 4 , 54, 9 , 59, 11, 61, 16, 66, 25, 75, 30, 80, 33, 83, 38, 88, 3 , 53, 8 , 58, 23, 73, 28, 78, 31, 81, 36, 86, 44, 94, 49, 99, 1 , 51, 6 , 56, 15, 65, 20, 70, 22, 72, 27, 77, 34, 84, 39, 89, 41, 91, 46, 96]
		,	state:[    0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0  , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]
		,	found:[-1, 80, 0 , 64, 48, 16, 82, 2 , 66, 50, 18, 52, 32, 20, 36, 84, 54, 34, 22, 38, 86, 4 , 88, 68, 8 , 56, 6 , 90, 70, 10, 58, 72, 24, 60, 92, 28, 74, 26, 62, 94, 30, 96, 40, 12, 76, 44, 98, 42 , 14, 78, 46, 81, 1 , 65, 49, 17, 83, 3 , 67, 51, 19, 53, 33, 21, 37, 85, 55, 35, 23, 39, 87, 5 , 89, 69, 9 , 57, 7 , 91, 71, 11, 59, 73, 25, 61, 93, 29, 75, 27, 63, 95, 31, 97, 41, 13, 77, 45, 99, 43, 15, 79, 47]
		,	msgs:['n/a',[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]//to send
		,	sent:[]//waiting for
		,	bar:$('#bar')
		,	n:0//load bar counter
		,	iv:undefined//cache last inview
		,	qrlist:[]
		,	stlist:[]
		,	causepause:0//-1 to reset
		,	limits:['n/a',3,3,2,2,1,1]//grab this many qrs per socket
		,	one:undefined//0|1
		,	WHEN:{}
		,	Qミ:function(){//focus on one
				β.causepause='β';
				var m=β.one.split('|');
				if(!β.cache[m[0]]){β.bank(m[0]);}
				if(β.stlist[m[0]][β.found[m[1]]]==3){
					Qミ.dblclick({target:β.cache[m[0]][0].getElementsByClassName('q'+m[1])[0]});
					}
				else{
					β.stlist[m[0]][β.found[m[1]]]=2;
					ee[β.one]=function(){
						var m=β.one.split('|');
						//ᛏ.off('isready:.b'+m[0]+'.q'+m[1],ee[β.one]);
						β.one=undefined;
						Qミ.dblclick({target:β.cache[m[0]][0].getElementsByClassName('q'+m[1])[0]});
						}
					//ᛏ.on('isready:.b'+m[0]+'.q'+m[1],ee[β.one]);
					m=null;
					s[16].JSON('@',ʃ['β@?'](β.one));
					}}
		,	bank:function(b){
				β.cache[b]=$('#b'+b);//cache the jquery element
				β.qrlist[b]=JSON.parse(JSON.stringify(β.block));//load templates
				β.stlist[b]=JSON.parse(JSON.stringify(β.state));
				return;
				}
		,	update:function(){//return;//APPOFF	console.log("β.update");
				if( !β.msgs[02].length||//re enter if any sockets have finished (screen drag takes you in here)
					!β.msgs[03].length||
					!β.msgs[04].length||
					!β.msgs[05].length||
					!β.msgs[06].length||
					!β.msgs[07].length||
					!β.msgs[08].length||
					!β.msgs[09].length||
					!β.msgs[10].length||
					!β.msgs[11].length||
					!β.msgs[12].length||
					!β.msgs[13].length||
					!β.msgs[14].length||
					!β.msgs[15].length||
					!β.msgs[16].length||β.causepause==-1){
					β.causepause=0;
					if(β.sent.length>200){β.sent=β.sent.slice(100);}//don't double call
					if(Φ.wasdrag||Φ.wasscroll||!Φ.iv){//console.log("Φ.wasdrag||Φ.wasscroll");
						Φ.iv=Φ.inview();
						for(var i=0;i<Φ.iv.length;++i){
							var b=Φ.iv[i];
							if(!β.cache[b]){β.bank(b);}
							}
						b=i=null;}
					for(var j,x,i=Φ.iv.length;i;j=Math.floor(Math.random()*i),x=Φ.iv[--i],Φ.iv[i]=Φ.iv[j],Φ.iv[j]=x);j=x=i=null;//shuffle iv
					var limit=β.limits[Φ.iv.length];
					for(var soc=2,many=0,one=1,i=0;i<Φ.iv.length;++i){
						for(var b=Φ.iv[i],B=β.stlist[b],f=β.cache[b][0].children.length?[0,100,1]:[99,-1,-1],q=f[0];q!=f[1];q+=f[2]){//cache some variables and loop forwards or backwards whatever is quicker
							if(B[q]==0){
								β.msgs[soc].unshift(b+'|'+β.qrlist[b][q]);
								if((--one)==0){β.msg(soc,β.msgs[soc].shift(),1);}
								if((++many)==limit){if(soc<16){many=0;one=1;++soc;}else{i=Number.MAX_VALUE;break;}}
								}}
							b=B=f=q=null;
							}
					limit=soc=many=one=i=null;
					}
				return;}
		,	msg:function(soc,newmsg){
				if(β.causepause==0){
					if(β.sent.indexOf(newmsg)!==-1){return;}//knock out the socket for this round
					β.sent.push(newmsg);
					var m=newmsg.split('|');
					β.stlist[m[0]][β.found[m[1]]]=2;//this qr spot is now waiting for a response
					s[soc].JSON('@',ʃ['β@?'](newmsg));
					β.bar[0].style.width=(β.n+=1)+px;
					}
				else{β.msgs.push(newmsg);}//put back
				soc=newmsg=m=null;
				return;
				}
		,	listen:function(){
				s[02].WHEN['@']=s[03].WHEN['@']=s[04].WHEN['@']=//s[1] does not participate
				s[05].WHEN['@']=s[06].WHEN['@']=s[07].WHEN['@']=
				s[08].WHEN['@']=s[09].WHEN['@']=s[10].WHEN['@']=
				s[11].WHEN['@']=s[12].WHEN['@']=s[13].WHEN['@']=
				s[14].WHEN['@']=s[15].WHEN['@']=s[16].WHEN['@']=β.WHEN['peer:qr']=function(_,ϟ){//console.dir(_);
					_=ʃ['β@='](_,ϟ);
					β.bar[0].style.width=(β.n-=1)+px;
					if(ϟ[0]==17&&β.causepause==0){//TODO if this message has gone to far in the map dont share this
						if(!β.cache[_.b]){β.bank(_.b);}
						if((B=β.stlist[_.b][β.found[_.q]])!=3&&β.sent.indexOf((bq=_.b+'|'+_.q))===-1){//if you aready have it don't put it down
							β.sent.push(bq);//make sure your sockets won't try to get it
							β.stlist[_.b][β.found[_.q]]=3;
							B=β.cache[_.b][0];
							try{B.removeChild(document.getElementById('q'+_.i.i));}catch(e){}//update over old qr just in case as things could happen super quick
							Σ.qr(_.h,_.q,_.b,_.i,B,ϟ[0],function(ϟ,b,q){return;});
							}}
					else if(Q=β.stlist[_.b][β.found[_.q]],(β.stlist[_.b][β.found[_.q]]=Q==2?3:Q)==3){//don't accept a qr you didn't ask for and //mark qr as found in the block
						var B=β.cache[_.b][0];
						try{B.removeChild(document.getElementById('q'+_.i.i));}catch(e){}
						Σ.qr(_.h,_.q,_.b,_.i,B,ϟ[0],function(ϟ,b,q){
							//ᛏ.emit('isready:.b'+_.b+'.q'+_.q);
							if(β.causepause==0){'console.log(_.s,"finished")';//causepause could be set on a double click and/or uset when the ミ appears
								if( !β.msgs[02].length&&//re enter only if all sockets are finished
									!β.msgs[03].length&&
									!β.msgs[04].length&&
									!β.msgs[05].length&&
									!β.msgs[06].length&&
									!β.msgs[07].length&&
									!β.msgs[08].length&&
									!β.msgs[09].length&&
									!β.msgs[10].length&&
									!β.msgs[11].length&&
									!β.msgs[12].length&&
									!β.msgs[13].length&&
									!β.msgs[14].length&&
									!β.msgs[15].length&&
									!β.msgs[16].length){
									β.update();
									}
								else if((newmsg=β.msgs[ϟ].shift())&&(β.sent.indexOf(newmsg)===-1)){β.msg(ϟ,newmsg,3);}
								}
							else{//done receiving last wave
								if(β.stlist[b].indexOf(2)==-1&&β.causepause=='Φ'){Φ.go();}
								}});}
					};
					//ᛏ.on('peer:qr',function(_){β.WHEN['peer:qr'](_,[17,null]);});
					return;}
				};'> listen-on-startup >';//β.listen();
















		console.log('ミQ Qmenu');
		var Qミ={
			remove:function(){
				Qミ.element.remove();
				Qミ.i=-i;
				Qミ.qr=Qミ.qr3=Qミ.qr2=Qミ.img=Qミ.b=Qミ.element=Qミ.extra=undefined;
				return;
				}
		,	src:{
				revert:function(){
					delete s[1].WHEN['s'];
					delete s[1].WHEN['m'];
					delete s[2].WHEN['m'];
					delete s[1].WHEN['p'];
					try{(Qミ.qr)&&(Qミ.qr.attr({'src':Qミ.img}));}catch(e){}
					return;
					}
			,	picture:function(){console.log('picture?',Qミ.qr.attr('src3'));Qミ.qr.attr({'src':Qミ.qr.attr('src3')});return;}
			,	simple:function(){Qミ.qr.attr({'src':Qミ.qr.attr('src1')});return;}
				}
		,	canvas:$('canvas#qmenu_canvas')
		,	i:-1//qr id
		,	qr:undefined
		,	qr2:undefined
		,	qr3:undefined
		,	img:undefined
		,	b:undefined
		,	element:undefined
		,	info:undefined
		,	extra:undefined//level 2 qr data
		,	clicktimer:undefined
		,	event:undefined//mouse events
		,	blank:document.createElement('div')
		,	modulate:0
		,	ev:undefined
		,	menu:function(){//TODO totally remove jQuery
				"console.log('Qミ.f')";
				if(Qミ.info.o==0){ɣ.onappear();}//--------the qr needs payment processor
				$('.simple').unbind().bind('mouseenter',function(){
					setTimeout(function(){
						if(!Qミ.qr.attr('src1')){
							Qミ.qr.attr({src1:QR.basic(Qミ.i,U.uid)});
							Qミ.src.simple();
							}
							else{Qミ.src.simple();}
						},10);
		        }).bind('mouseleave',function(){
					if(Qミ.qr.data('info').o>0){Qミ.src.revert();}
		            else{Qミ.src.picture();}
		            });
				$('.modulate').unbind().bind('mouseenter',function(){
					setTimeout(function(){
						function mod(){
							QR.modulate(Qミ.i,U.uid,function(mods){
								if((Qミ.modulate)&&(Ʌ.in(Qミ.qr2))){Qミ.qr.attr({'src':mods});}
								setTimeout(function(){
									if((Qミ.modulate)&&(Ʌ.in(Qミ.qr2))){mod();}
									},10);});}
						β.causepause='modulate';
						Qミ.modulate=1;
						mod();
					},10);
		        }).bind('mouseleave',function(){
		        	Qミ.modulate=0;
		            if(Qミ.info.o>0){Qミ.src.revert();}
		            else{Qミ.src.picture();}
		            β.causepause=-1;
		            β.update();
		            });
		        $('.picture').unbind().bind('mouseenter',function(){
		        	if(Qミ.qr.attr('src3')==(png64+'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=')){// needs to go to the sever for the picture
						if(Qミ.info.o==0){// construct sale sign
							β.causepause='Qミ/sale';
							var data=Qミ.qr.data('info')
							,	canvas=Qミ.canvas[0]
							,	ctx=canvas.getContext('2d')
							,	img=new Image();
							ɣ.btc=data.rp;//price to pay
							ctx.patternQuality='fast';
							ctx.textDrawingMode='glyph';
							ctx.fillStyle="#F00B0B";
							ctx.fillRect(0,0,166,166);
							ctx.font="bolder 20px Arial";
							ctx.fillStyle='#ffffff';
							ctx.fillText("QR: "+data.i,12,35);
							if(data.rd){
								ctx.fillText("FOR RENT",12,35*2);
								ctx.fillText("TERM:",12,35*4);
								ctx.fillText(data.rd+"mo",80,35*4);
								}
							else{
								ctx.fillText("FOR SALE",12,35*2);
								}
							img.onload=function(){
							    ctx.drawImage(img,12,  87,  16,21);
							    ctx.globalAlpha=0.5;
							    ctx.drawImage(img,12.5,87.5,16,21);
							    ctx.drawImage(img,11.5,87.5,16,21);
							    ctx.font="bolder 20px monospace";
							    var monospaces="0.0000000";
							    var rentprice=data.rp.toString();
							    var midprice=0;
							    for(var i=0;i<rentprice.length;++i){
							    	if(['0','.'].indexOf(rentprice[i])!=-1&&!midprice){
							    		rentprice=rentprice.substring(0,i)+' '+rentprice.substring(i+1);}
							    	else{
							    		midprice=1;//we are in the middle of the price so stop hiding zeros
							    		monospaces=monospaces.substring(0,i)+' '+monospaces.substring(i+1);
							    		}}
							    ctx.fillStyle='#9F1010';
							    ctx.fillText(monospaces,34,35*3);
							    ctx.fillStyle='#ffffff';
							    ctx.globalAlpha=1;
							    ctx.fillText(rentprice,34,35*3);
							    Qミ.qr.attr({src3:canvas.toDataURL()});
							    Qミ.src.picture();
							    data=canvas=ctx=img=monospaces=rentprice=midprice=i=null;
							    β.causepause=-1;β.update();
							    };
							img.src='_R/B.png';
							}}
					else{//picture has aready been loaded
						Qミ.src.picture();
						if(β.causepause=='Qミ'){β.causepause=-1;β.update();}
						}})
				.bind('mouseleave',function(e){
					if(Qミ.info.o>0){Qミ.src.revert();}//only put back the million image if there is an owner
					});
				console.log(Ʌ.in(Qミ.qr3),Qミ.qr3);
				if(Ʌ.in(Qミ.qr3)||!Qミ.info.o){Qミ.qr3.trigger('mouseenter');}else{β.causepause=-1;β.update();}
				Qミ.event=undefined;//no other Qミ mouse events can happen until the effect of dblclick finish
				return;
				}
		,	dblclick:function(e){
				setTimeout(function(){$('body').removeClass('user-select-none');},100);
        		//$('#users').trigger('paralayer-tooltip');
				β.ev=e;
				β.causepause='Qミ';//stops block loader
				clearTimeout(Qミ.clicktimer);//don't let the single click happen
				Qミ.event='dblclick';
				a.proxy(null,function(){
					Qミ.src.revert();
					(Qミ.element)&&(Qミ.remove());
					Qミ.qr=β.ev.target;
					Qミ.qr.classList.add('z3');
					Qミ.info=JSON.parse(Qミ.qr.dataset.info);//million number
					Qミ.i=Qミ.info.i;
					Qミ.b=Qミ.qr.offsetParent;
					//var bid=Qミ.b.id.replace('b','');
					Qミ.img=Qミ.qr.currentSrc;
					//Φ.tourl(Qミ.i);
					s[1].WHEN['o']=function(_){
						s[1].WHEN['o']=null;
						a.proxy(ʃ['Qミo='](_),function(_){
							Qミ.extra=_;
							var o=(Qミ.info.o>0)?
								Σ.olink(_.i,_.nm)//TODO style and make reseller button
								:
								Σ.rentfor(_.pq);
							var cls=Qミ.i+' m'+Qミ.qr.className.match(/\d+/)[0];
							Qミ.blank.innerHTML=Σ.Qミ(cls,o);
							o=null;
							Qミ.b.innerHTML+=Qミ.blank.innerHTML;
							Qミ.qr=$('#'+Qミ.qr.id);//turned into jquery for easy access to the visual version of the element
							if(Qミ.info.o>0){
								//if(!Qミ.qr[0].getAttribute('src3')){
									//_.p='data:image/png;base64,'+_.p;
									//Qミ.qr[0].setAttribute('src3',_.p);
									//}
								Qミ.qr[0].src=Qミ.qr[0].getAttribute('src3');
								}
							Qミ.element=$('#qmenu');
							Qミ.qr2=$('.modulate');//modulate needs a non mouse event based over query
							Qミ.qr3=$('.picture');//mouse is more than likely to be over picture when it appears so mouseenter is useless here
							a.proxy('',function(_){Qミ.menu();});
							});};
					s[1].WIRE('o',ʃ['Qミo?']({'q':Qミ.i,'o':Qミ.info.o/*,'p':(Qミ.info.o>0&&!Qミ.qr.getAttribute('src3')?1:0)*/}));
					});}
		,	listen:function(){
				$('div.b')
					.on('dblclick','.q',function(e){Qミ.dblclick(e);})
					.on('click','.q',function(e){
						$('.edit').trigger('blur');
						if(Qミ.event!='dblclick'){//dblclick is not underway
							Qミ.event='click';
							Qミ.clicktimer=setTimeout(function(){//could be the first click of a dblclick
								var wd=Φ.wasdrag;
								if(!wd&&Qミ.event=='click'){
									Qミ.src.revert();
									(Qミ.qr)&&(Qミ.qr[0].classList.remove('z3'));
									(Qミ.element)&&(Qミ.remove());
									}
								Φ.wasdrag=0;//reset here because we may have done dragging then this fires but the above if is missed so next click will be real
								},400);}});
					}};'> listen on startup >';Qミ.listen();



















		var ɣ={//payment processor
			btc:undefined//amount
		,	mode:undefined//symbol
		,	coin:undefined//name
		,	error:undefined
		,	colors:{
				bitcoin:'#F59118'
			,	litecoin:'#BFC3C4'
			,	dogecoin:'#B99D2F'
			,	feathercoin:'#222222'
			,	gemz:'#FFACAB'
			,	infinitecoin:'#E69B16'
			,	maidsafe:'#2B5D90'
			,	mastercoin:'#8BA8C2'
			,	mintcoin:'#3FC285'
			,	monacoin:'#B3A98E'
			,	monero:'#5A5A5A'
			,	namecoin:'#6A91C0'
			,	novacoin:'#C5C5C5'
			,	nubits:'#FEC52F'
			,	nxt:'#5CBCD6'
			,	peercoin:'#FCC708'
			,	potcoin:'#4C9065'
			,	quark:'#343434'
			,	reddcoin:'#EC1A29'
			,	ripple:'#6EA8C8'
			,	shadowcash:'#67414B'
			,	startcoin:'#00BAFF'
			,	stellar:'#525159'
			,	storjcoinx:'#1E668E'
			,	swarm:'#41492E'
			,	tetherusd:'#FFCF0E'
			,	unobtanium:'#465156'
			,	vericoin:'#3080C3'
			,	vertcoin:'#43734D'
			}
		,	onappear:function(){
				$me=$('.coin:nth-child(2)');
				$me.addClass('selected');
				ɣ.mode=$me.attr('id');
				ɣ.coin=$me.text().toLowerCase();
				$('#coinL').unbind().bind('click',function(){//close pay button
					var $me=$('#coins').children().last();
					$me.parent().prepend($me);
					$('#coins').children().removeClass('selected');
					$me=$('.coin:nth-child(2)');
					$me.addClass('selected');
					ɣ.mode=$me.attr('id');
					ɣ.coin=$me.text().toLowerCase();
					});
				$('#coinR').unbind().bind('click',function(){//close pay button
					var $me=$('#coins').children().first();
					$me.parent().append($me);
					$('#coins').children().removeClass('selected');
					$me=$('.coin:nth-child(2)')
					$me.addClass('selected');
					ɣ.mode=$me.attr('id');
					ɣ.coin=$me.text().toLowerCase();
					});
				$('#paymin').unbind().bind('click',function(){//close pay button
					$('#paym').css({'top':'-60px'});
					$('#payqr').remove();
					});
				$('.btn-paylogin').unbind().bind('click',function(){
					console.log('_'+'.btn-login'+(!ui.menuopen?',.menu-toggle':'')+'_');
					$('.btn-login'+(!ui.menuopen?',.menu-toggle-btn':'')).trigger('click');
					});
				$('#pay-start').unbind().bind('click',function(){
					$('#paym').animate({'top':'+=60'},200,"linear",function(){});});
				$('#paysubmit').click(function(){
					delete s[1][NULL].WHEN['qɃ'];
					delete s[1][NULL].WHEN['qϟ'];
					if(ɣ.mode=='btc'){
						s[1][NULL].WHEN['Ƀ']=function(_){
							$('#payqr').remove();
							QR.pay(_,ɣ.coin,function(img){
								Σ.putin($('.optics'),Σ.payqr(img));
								});}
						s[1][NULL].WIRE('Ƀ',[U.pid,Qミ.i,ɣ.mode,ɣ.btc,ɣ.coin]);
						}
					else{
						s[1][NULL].WHEN['ϟ']=s[1][NULL].WHEN['Ƀ']=function(_){
							QR.pay(_,ɣ.coin,function(img){
								$('#payqr').remove();
								Σ.putin($('.optics'),Σ.payqr(img));
								});}
						s[1][NULL].WIRE('ϟ',[U.pid,Qミ.i,ɣ.mode,ɣ.btc,ɣ.coin]);
						}
					});
				return;
				}}



















		console.log('QR');
		var QR={
			canvas:$('canvas#QR_canvas')
		,	c:['n/a',$('#c1'),$('#c2'),$('#c3'),$('#c4'),$('#c5'),$('#c6'),$('#c7'),$('#c8'),$('#c9'),$('#c10'),$('#c11'),$('#c12'),$('#c13'),$('#c14'),$('#c15'),$('#c16'),$('#c17')]
		,	modA:{'n':10,'m':0}//alpha
		,	wayA:'up'
		,	modB:{'n':10,'m':0}//brightness
		,	wayB:'down'
		,	to1000000:function(n){n=n.toString();if(n.length<8){var roof=8-n.length;for(var i=1;i<=roof;i++){n='0'+n;}roof=i=null;return n;}else{return n;}}
		,	standard:function(q,u,i,c,cb){
				//console.log(c);
				var go=QR.to1000000(q)
				,	pix=4
				,	canvas=$('<canvas width="166" height="166"><canvas>')[0]//QR.c[c][0]
				,	ctx=canvas.getContext('2d')
				,	img=new Image();
				ctx.clearRect(0,0,166,166);
				ctx.patternQuality='fast';
				ctx.textDrawingMode='glyph';
				img.onload=function(){
					ctx.drawImage(img,0,0);
					var cells=qr('5.135.118.98/\/?'+go+'&'+u).modules;
					for(var y=0;y<cells.length;++y){
						var row=cells[y];
						for(var x=0;x<row.length;++x){
							ctx.fillStyle=row[x]?'rgba(0,0,0,0.13)':'rgba(255,255,255,0.13)';
							ctx.fillRect((x*pix),(y*pix),pix,pix);
							ctx.fillStyle=row[x]?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.5)';
							ctx.fillRect((x*pix)+(pix/pix),(y*pix)+(pix/pix),(pix/2),(pix/2));
							if(x==6&&y==6||x==(cells.length-1)&&y==6||x==6&&y==(cells.length-1)){
								ctx.fillStyle='#000';
								ctx.fillRect((x-6)*pix,(y-6)*pix,(pix*7),(pix*7));
								ctx.fillStyle='#FFF';
								ctx.fillRect((x-5)*pix,(y-5)*pix,(pix*5),(pix*5));
								ctx.fillStyle='#000';
								ctx.fillRect((x-4)*pix,(y-4)*pix,(pix*3),(pix*3));
								}
							if(y>4&&
								cells[y-0][x-4]==true &&cells[y-0][x-3]==true &&cells[y-0][x-2]==true &&cells[y-0][x-1]==true &&cells[y-0][x-0]==true&&
								cells[y-1][x-4]==true &&cells[y-1][x-3]==false&&cells[y-1][x-2]==false&&cells[y-1][x-1]==false&&cells[y-1][x-0]==true&&
								cells[y-2][x-4]==true &&cells[y-2][x-3]==false&&cells[y-2][x-2]==true &&cells[y-2][x-1]==false&&cells[y-2][x-0]==true&&
								cells[y-3][x-4]==true &&cells[y-3][x-3]==false&&cells[y-3][x-2]==false&&cells[y-3][x-1]==false&&cells[y-3][x-0]==true&&
								cells[y-4][x-4]==true &&cells[y-4][x-3]==true &&cells[y-4][x-2]==true &&cells[y-4][x-1]==true &&cells[y-4][x-0]==true
								){
								ctx.fillStyle='#000';
								ctx.fillRect((x-4)*pix,(y-4)*pix,pix*5,pix*5);
								ctx.fillStyle='#FFF';
								ctx.fillRect((x-3)*pix,(y-3)*pix,pix*3,pix*3);
								ctx.fillStyle='#000';
								ctx.fillRect((x-2)*pix,(y-2)*pix,pix*1,pix*1);
								}}}
					q=u=i=c=go=pix=ctx=img=cells=y=row=x=null;
					cb(canvas.toDataURL());//s[parseInt(_.s)].JSON(('@'),(_.b+'|'+_.q)+','+canvas.toDataURL().replace('data:image/png;base64,','')+','+L2);
					}
				img.src=png64+i;
				}
		,	basic:function(q,u){
				var go=QR.to1000000(q)
				,	cells=qr('5.135.118.98/\/?'+go+'&'+u).modules
				,	row
				,	num=4
				,	canvas=QR.canvas[0]
				,	ctx=canvas.getContext('2d');
		  		for(var y= 0;y<cells.length;++y){
					row=cells[y];
					for(var x=0;x<row.length;++x){
						ctx.fillStyle=row[x]?'#000':'#FFF';
						ctx.fillRect((x*num),(y*num),num,num);
						}}
				q=u=go=cells=row=num=ctx=y=x=null;
				return canvas.toDataURL();
				}
		,	modulate:function(q,u,cb){
				var go=QR.to1000000(q)
				,	cells=qr('5.135.118.98/\/?'+go+'&'+u).modules
				,	row
				,	c1,c2,c3,c4,c5
				,	num=4
				,	canvas=QR.canvas[0]
				,	ctx=canvas.getContext('2d')
				,	img=new Image();
				ctx.patternQuality='fast';
				ctx.textDrawingMode='glyph';
				ctx.clearRect(0,0,166,166);
				img.onload=function(){
					ctx.drawImage(img,0,0);
					if(QR.wayA==='up'){QR.modA.n=QR.modA.n+5;if(QR.modA.n>=50 ){QR.wayA='down';}}else{QR.modA.n=QR.modA.n-5;if(QR.modA.n<=10){QR.wayA='up';}}
					if(QR.wayB==='up'){QR.modB.n=QR.modB.n+5;if(QR.modB.n>=180){QR.wayB='down';}}else{QR.modB.n=QR.modB.n-5;if(QR.modB.n<=0 ){QR.wayB='up';}}
					for(var y=0;y<cells.length;++y){
						row=cells[y];
						c1=Math.floor(Math.random()*cells.length)+0;
						c2=Math.floor(Math.random()*cells.length)+0;
						c3=Math.floor(Math.random()*cells.length)+0;
						c4=Math.floor(Math.random()*cells.length)+0;
						c5=Math.floor(Math.random()*cells.length)+0;
						for(var x=0;x<row.length;++x){
							ctx.fillStyle=row[x]?'rgba('+QR.modB.n+','+QR.modB.n+','+QR.modB.n+',0.'+QR.modA.n+')':'rgba(255,255,255,0.'+QR.modA.n+')';ctx.fillRect((x*num),(y*num),num,num);ctx.fillStyle=row[x]?'rgba('+QR.modB.n+','+QR.modB.n+','+QR.modB.n+',0.'+QR.modA.n+')':'rgba(255,255,255,0.'+QR.modA.n+ 10 +')';ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));
							if(x===c1||x===c2||x===c3||x===c4||x===c5){ctx.fillStyle=row[x]?'#000':'#FFF';ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));}
							if(x===6&&y===6||x===(cells.length-1)&&y===6||x===6&&y===(cells.length-1)){
								ctx.fillStyle='rgba('+QR.modB.n+','+QR.modB.n+','+QR.modB.n+',1)';//'rgb(127,127,127)';
								ctx.fillRect((x-6)*num,(y-6)*num,(num*7),(num*7));
								ctx.fillStyle='#FFF';//'rgb(255,255,255)';
								ctx.fillRect((x-5)*num,(y-5)*num,(num*5),(num*5));
								ctx.fillStyle='rgba('+QR.modB.n+','+QR.modB.n+','+QR.modB.n+',1)';//'rgb(127,127,127)';
								ctx.fillRect((x-4)*num,(y-4)*num,(num*3),(num*3));
								}
							if(y>4&&
							cells[y-0][x-4]===true &&cells[y-0][x-3]===true &&cells[y-0][x-2]===true &&cells[y-0][x-1]===true &&cells[y-0][x-0]===true &&
							cells[y-1][x-4]===true &&cells[y-1][x-3]===false&&cells[y-1][x-2]===false&&cells[y-1][x-1]===false&&cells[y-1][x-0]===true &&
							cells[y-2][x-4]===true &&cells[y-2][x-3]===false&&cells[y-2][x-2]===true &&cells[y-2][x-1]===false&&cells[y-2][x-0]===true &&
							cells[y-3][x-4]===true &&cells[y-3][x-3]===false&&cells[y-3][x-2]===false&&cells[y-3][x-1]===false&&cells[y-3][x-0]===true &&
							cells[y-4][x-4]===true &&cells[y-4][x-3]===true &&cells[y-4][x-2]===true &&cells[y-4][x-1]===true &&cells[y-4][x-0]===true){
								ctx.fillStyle='rgba('+QR.modB.n+','+QR.modB.n+','+QR.modB.n+',1)';//'rgb(127,127,127)';
								ctx.fillRect((x-4)*num,(y-4)*num,num*5,num*5);
								ctx.fillStyle='#FFF';//'rgb(255,255,255)';
								ctx.fillRect((x-3)*num,(y-3)*num,num*3,num*3);
								ctx.fillStyle='rgba('+QR.modB.n+','+QR.modB.n+','+QR.modB.n+',1)';//'rgb(127,127,127)';
								ctx.fillRect((x-2)*num,(y-2)*num,num*1,num*1);
								}}}
							q=u=go=cells=row=c1=c2=c3=c4=c5=num=ctx=img=y=x=null;
							cb(canvas.toDataURL());
							}
					img.src=Qミ.img;
					}
		,	pay:function(q,coin,cb){
				if(q.indexOf('Error: ')==-1){
					var cells=qr(q).modules
					,	row
					,	num=2
					,	size=num*cells.length
					,	start=Math.floor((164/2)-(size/2))
					,	canvas=QR.canvas[0]
					,	ctx=canvas.getContext('2d')
					,	img=new Image();
					ctx.fillStyle='#FFF';
					ctx.fillRect(0,0,166,166);
					ctx.fillStyle=ɣ.colors[coin];
					ctx.fillRect(0,0,164,19);
					ctx.fillRect(145,0,19,164);
					ctx.fillRect(0,145,164,19);
					ctx.fillRect(0,0,19,145);
					img.onload=function(){
				  		for(var y= 0;y<cells.length;++y){
							row=cells[y];
							for(var x=0;x<row.length;++x){
								ctx.fillStyle=row[x]?'#000':'#FFF';
								ctx.fillRect((x*num)+start,(y*num)+start,num,num);
								}}
						coin=coin.toUpperCase();
						ctx.font="bolder italic 10px Arial";
						ctx.fillStyle='#FFF';
						ctx.textAlign="center";
						ctx.drawImage(img,1,1,19,19);
						ctx.fillText(coin,82,14);
						ctx.translate(83,83);ctx.rotate(90*(Math.PI/180));ctx.translate(-83,-83);
						ctx.drawImage(img,1,3,19,19);
						ctx.fillText(coin,82,15);
						ctx.translate(83,83);ctx.rotate(90*(Math.PI/180));ctx.translate(-83,-83);
						ctx.drawImage(img,3,3,19,19);
						ctx.fillText(coin,82,15);
						ctx.translate(83,83);ctx.rotate(90*(Math.PI/180));ctx.translate(-83,-83);
						ctx.drawImage(img,3,1,19,19);
						ctx.fillText(coin,82,14);
						ctx.translate(83,83);ctx.rotate(90*(Math.PI/180));ctx.translate(-83,-83);//reset context
						q=coin=cells=row=num=size=start=ctx=img=y=x=null;
						cb(canvas.toDataURL());
						}
					img.src='_R/coin/'+coin+'.png';
					}
				else{
					ɣ.error=q.replace('Error: ','');
					var canvas=QR.canvas[0]
				,	ctx=canvas.getContext('2d')
				,	img=new Image()
				,	isfox=(ɣ.mode!='btc'&&ɣ.error.indexOf('KillrBit')==-1)?true:false;//killrBit could be busy before asking the fox!
					img.onload=function(){
						var e=ɣ.error;
						ctx.fillStyle=isfox?'#2F4168':'#F6921B';
						ctx.fillRect(0,0,166,166);
						ctx.drawImage(img,1,1);
						ctx.font="bolder 20px Arial";
						ctx.fillStyle='rgba(255,0,0,0.6)';
						ctx.fillRect(0,0,166,166);
						ctx.fillStyle='#FFF';
						ctx.textAlign="center";
						ctx.fillText("ERROR:",82,30);
						ctx.font="bolder 10px Arial";
						e=e.split(' ');
					    var lines=[''];
					    for(var i=0;i<e.length;++i){
					        if((temp=lines[lines.length-1]+' '+e[i]).length<30){
					            lines[lines.length-1]=temp;
					            temp=null;
					            }
					        else{
					            lines.push(e[i]);}
					            }
					    for(var e=lines,i=0;i<e.length;++i){
					        ctx.fillText(e[i].replace(/(^\s+|\s+$)/g,''),82,50+(15*i));
					        }
						ctx.font="bolder 15px Arial";
						ctx.fillText("PLEASE TRY LATER",82,144);
						q=coin=ctx=img=isfox=e=lines=i=null;
						cb(canvas.toDataURL());
						}
					img.src='_R/'+(isfox?'thefox':'bitcoin_square')+'.png';
					}}};








































		/*
		s[1].WHEN['play']=function(_){
			if($('#play_'+_.qr).length===0){
				_.qr=_.qr.toString();
				var box,one;
				console.log(_.qr,_.qr.length);
				if(_.qr.length>2){
					box=_.qr.slice(0,_.qr.length-2);
					one=_.qr.slice(_.qr.length-2);
					if(one==='00'){one='100';}
					//else{box-=1;}
					}
				else{box=1;one=_.qr;}										console.log(('.b'+box+' > .q'+one));
				var react=$('.b'+box+' > .q'+one).data('info').r;//react
				//$('.q'+_.qr).hide();
				if(react.search('sc=')!==-1){
					react=react.replace('sc=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#FF8500;width:630px;height:430px;z-index:100;margin-left:auto;margin-right:auto;">'+
									  '<div id="sc_'+_.qr+'"style="position:absolute;top:15px;left:15px;width:598px;height:166px;"></div>'+
									  '<img class="x"id="x_'+_.qr+'"src="R/redX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									  '</div>');
					if(react.indexOf('/sets/')!==-1){$('#play_'+_.qr).css({'height':'470px'});}else{}
					SC.oEmbed('https://soundcloud.com/'+react,{auto_play:true},document.getElementById('sc_'+_.qr));
					everyplayer();
					}
				else if(react.search('yt=')!==-1){
					react=react.replace('yt=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#D10000;width:350px;height:223px;z-index:100;margin-left:auto;margin-right:auto;">'+
									 ytp1+react+ytp2+
									 '<img class="x"id="x_'+_.qr+'"src="R/redX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}
				else if(react.search('swf=')!==-1){
					react=react.replace('swf=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#1389FF;width:630px;height:430px;z-index:100;margin-left:auto;margin-right:auto;">'+
									 swfp1+react+swfp2+
									 '<img class="x"id="x_'+_.qr+'"src="R/redX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}
				else if(react.search('ted=')!==-1){
					react=react.replace('ted=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#FFFFFF;width:590px;height:345px;z-index:100;margin-left:auto;margin-right:auto;">'+
									 ted1+react+ted2+
									 '<img class="x"id="x_'+_.qr+'"src="R/blackX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}
				else if(react.search('vm=')!==-1){
					react=react.replace('vm=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#00B8FF;width:530px;height:286px;z-index:100;margin-left:auto;margin-right:auto;">'+
									 vm1+react+vm2+
									 '<img class="x"id="x_'+_.qr+'"src="R/redX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}
				else if(react.search('pdf=')!==-1){
					react=react.replace('pdf=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#EAEEF2;border:2px solid #B1C5D9;width:410px;height:540px;padding-top:10px;z-index:100;margin-left:auto;margin-right:auto;">'+
									 pdf1+react+pdf2+
									 '<img class="x"id="x_'+_.qr+'"src="R/redX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}
				else if(react.search('ks=')!==-1){
					react=react.replace('ks=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#7FD522;width:488px;height:377px;padding-top:15px;padding-left:19px;z-index:100;margin-left:auto;margin-right:auto;">'+
									 ks1+react+ks2+
									 '<img class="x"id="x_'+_.qr+'"src="R/blackX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}
				else if(react.search('kd=')!==-1){
					react=react.replace('kd=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable"style="background:#96C74D;width:730px;height:365px;padding-top:15px;z-index:100;margin-left:auto;margin-right:auto;">'+
									 kd1+react+kd2+
									 '<img class="x"id="x_'+_.qr+'"src="R/redX.png"style="position:absolute;top:3px;right:3px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}
				else if(react.search('img=')!==-1){
					react=react.replace('img=','');
					$('#play').append('<div id="play_'+_.qr+'"class="play draggable pev"style="overflow:hidden;position:fixed;background:#191919;display:table;padding-top:15px;padding-bottom:10px;z-index:100;left:'+(($('body').width()/2)-(730/2))+'px;">'+
									 '<div id="tip_'+_.qr+'"style="color:#FFF;font-size:12px;margin-left:4px;margin-top:-12px;margin-bottom:3px;height:10px;width:150px;text-align:left;"water="image"></div>'+
									 '<img class="rimg"src="'+react+'" style="max-height:400px;width:auto;padding-left:15px;padding-right:15px;"/>'+
									 '<img class="x pev"id="x_'+_.qr+'"src="R/redX.png"style="position:absolute;top:2.5px;right:2.5px;width:12px;cursor:pointer;"/>'+//'<img class="x pev"id="x_'+_.qr+'"src="_R/ecsW.png"style="position:absolute;top:2.5px;right:2.5px;width:12px;cursor:pointer;"/>'+
									 //'<img class="m pev"id="m_'+_.qr+'"src="_R/minW.png"style="position:absolute;top:3px;right:18.5px;px;width:12px;cursor:pointer;"/>'+
									 '</div>');
					everyplayer();
					}}};








		    function everyplayer(){
		        $('.play').draggable({start:function(){$(this).children().css({'pointer-events':'none'});},stop:function(){$(this).children().css({'pointer-events':'auto'});}})
		            .bind('mouseenter',function(){
		                $play=$(this).attr('id').replace('play_','');
		                $('#qr_'+$play).hide();
		                })
		            .bind('mouseleave',function(){
		                $('#qr_'+$play).show();
		                $play='';
		                });
		            $('.x').unbind().bind('click',function(){
						var el=$(this).attr('id').replace('x_','#play_');
		                var getheight=$(el).height();
						console.log(el);
		                $(el).remove();
		                $('.play').each(function(){
		                    $(this).css({'top':$(this).position().top+getheight+'px'});
		                    });
		                $play='';
		                });}
			*/




















			/*
			var egmail=/gmail/g;
		      var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;


		    function reg(){
		    $('#Reg').unbind().bind('click',function(){
		        if($('#r-email').text()===''||(!filter.test($('#r-email').text()) && !egmail.test($('#r-email').text()) )){
		            $('#r-email').css({'top':'2px'}).effect('shake',{'distance':3});
		            }
		        else{
		            if($('#r-usern').text()===''){
		                $('#r-usern').css({'top':'2px'}).effect('shake',{'distance':3});
		                }
		            else{
		                if($('#r-pass').text().length<6){
		                    $('#r-pass').css({'top':'2px'}).effect('shake',{'distance':3});
		                    }
		                else{
		                    if($('p#ajax-fc-task').text()!=='Great! You may now sign Up...'){
		                        $('.ajax-fc-container').effect('shake',{'distance':3});
		                        }
		                    else{

		                        socket.emit('scanpedia_registration_check',{'sock':'s1','remail':hexEncode($('#r-email').text()),'rname':hexEncode($('#r-usern').text()),'rpass':hexEncode($('#r-pass').attr('xxx'))});
		                        socket.on('scanpedia_registration_result',function(_){
		                            if(_.result==='email_exists'){
		                                $('#r-email').css({'top':'2px'}).effect('shake',{'distance':3});
		                                }
		                            if(_.result==='name_exists'){
		                                $('#r-usern').css({'top':'2px'}).effect('shake',{'distance':3});
		                                }
		                            else{
		                                $('#reglog').html("<h3>To complete registration check your email account for your conformation. If you aren't receiving confirmation emails from scanpedia.com check the spam folder in your email account.</h3>");
		                                }
		                           });
		                        }
		                    }
		                }
		            }
		        });
		    }reg();
		    function relogin(){console.log('relogin');
		    socket.on('scanpedia_login_result',function(_){
		        if(_.name==='not_set'){
		            $('#mename').css({'top':'2px'}).effect('shake',{'distance':3}).text('');
		            $('#mepass').css({'top':'2px'}).effect('shake',{'distance':3}).text('').attr({'xxx':''});
		            $('#L').css({'top':'0px'});
		            $.localStorage.removeItem('mem');
		            }
		        else{
		            $('#mename').text('');
		            $('#mepass').text('').attr({'xxx':''});
		            $('.inp_text,.inp_pass').trigger('blur');
		            delete socket.$events['scanpedia_login_result'];
		            $('#reglog').hide();
		            pid=_.pid;
		            var name=hexDecode(_.name);
		            me=name;
		            var n=1;
		            var l=name.length;
		            var zero=0;
		            $('#username').text(name);
		            $('#helper').css({'backgroundColor':$('#profile').attr('bg'),'height':$('#profile').attr('sz')});$('#profile').show();
		            $('#username > .u').attr({'id':'u_'+pid});
		            }
		        });return;}
		    //conformation email
		    if(document.location.href.search('ref=') != -1){
		        var ref = document.location.href.split('ref=');
		        ref = hexEncode(ref[1]);
		        socket.emit('scanpedia_account_activate_check',{'sock':'s1','ref':ref});
		        socket.on('scanpedia_account_activate_result',function(_){
		            $('#login').trigger('click');
		            $('#_reg').remove();
		            $('#reglog').prepend("<h3>Welcome to Scanpedia "+hexDecode(_.name)+", your account is now active! You May now login...</h3>");
		            //continue
		            });}
		    //mem
		    else if($.localStorage.getItem('mem')){
		        var memory=$.localStorage.getItem('mem').split('|');
		        relogin();
		        socket.emit('scanpedia_login_check',{'sock':'s1','ename':hexEncode(memory[0]),'mem':memory[1]});
		        }
		    else{
		        //normal guest start
		        }


		$('#L').unbind().bind('click',function(){//console.log('L');
		        relogin();
		        var mem='no_mem';
		        if($('#mem').is(':checked')){
		            function _ref(){var text='';var possible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';for(var i=0;i<10;i++){text+=possible.charAt(Math.floor(Math.random()*possible.length));}return text;}
		            mem=_ref();
		            $.localStorage.setItem('mem',$('#mename').text()+'|'+mem);
		            socket.emit('scanpedia_login_mem',{'sock':'s1','ename':hexEncode($('#mename').text()),'pass':hexEncode($('#mepass').attr('xxx')),'mem':mem});
		            }
		        socket.emit('scanpedia_login_check',{'sock':'s1','ename':hexEncode($('#mename').text()),'pass':hexEncode($('#mepass').attr('xxx')),'mem':mem});
		        });




		      var ewhich=[81,87,69,82,84,89,85,73,79,80,65,83,68,70,71,72,74,75,76,90,88,67,86,66,78,77,//let
		                49,50,51,52,53,54,55,56,57,48,//num
		                //16shift//20caps
		                192,189,187,219,221,186,222,220,188,190,191//spec
		                ];

		    $('.inp_pass').unbind('keyup').bind('keyup',function(e){
		        console.log('> '+e.which);
		        if(e.which===8){//del
		            $(this).attr({'xxx':$(this).text().substr(0,$(this).text().length - 1)});
		            $(this).focusEnd();
		            }
		        else if($.inArray(e.which,ewhich)!==-1){
		            var letter=$(this).text().substr($(this).text().length - 1)
		            $(this).attr({'xxx':$(this).attr('xxx')+letter});
		            var xxx='';
		            for(var i=0;i<$(this).attr('xxx').length;i++){xxx=xxx+'x';}
		            $(this).text(xxx);
		            $(this).focusEnd();
		            }
		        else if(e.which===13){$('#L').trigger('click');}
		        });


		    $('.inp_text,.inp_pass').unbind('focus blur').bind('focus',function(){
		            if($(this).text()===$(this).attr('placeholder')){$(this).text('').css({'color':'#000'});}
		        }).bind('blur',function(){
		            if($(this).text()===''){$(this).text($(this).attr('placeholder')).css({'color':'#BBB'});}
		        });

		    $('.inp_text,.inp_pass').each(function(){if($(this).text()===''){$(this).text($(this).attr('placeholder')).css({'color':'#BBB'});}});


		    $('.inp_text').unbind('keyup').bind('keyup',function(e){
		        if(e.which===8){//del
		            $(this).focusEnd();
		            }
		        else if($.inArray(e.which,ewhich)){
		            $(this).focusEnd();
		            }
		        else if(e.which===13){$('#L').trigger('click');}
		        });




		    */









			var ⵌ={
				server2:'http://5.135.118.98:8004'//signals call
			,	pem:['-----BEGIN PUBLIC KEY-----','-----END PUBLIC KEY-----']
			,	ꗃ:function(){return forge.pki.rsa.generateKeyPair({bits:896,e:0x10001});}
			,	reverse:function(s){var o ='';for(var i=s.length-1;i>-1;--i)o+=s[i];s=i=null;return o;}//make the rid more readable
			,	compile:function(pk){pk=this.reverse(pk);var l=[];l[0]=this.pem[0];l[1]=pk.substr(0,64),pk=pk.substr(64);l[2]=pk.substr(0,64),pk=pk.substr(64);l[3]=pk.substr(0,64),pk=pk.substr(64);l[4]=this.pem[1];return pk='"'+(l.join('\n')+'\n')+'"';}
			,	face:function(){var p=['247ba070c1b3b2dbbff3ffbdff1654','5bc0ebfde74c9bc53de55934fa7921','bce7845dd39e348aa7525174513b56','ff4e008ea604f5bb00ec9f05bf3100','2b2d428d99aeedf2f4ef233cd90429','083d77ebebd3f4d35eee964bf95738','d3f8e2e4c1f9f694c1ede7b1a9def9','ffb997f67e7d843b620b032d74546a','1b998b2d3047fffd82ff9b71e84855','7ac74fa1cf6bd5d887e0c879e87461','e1ce7afbffb9fdd692ec7357754f44','4935484b4e6d6a8d9280b192a1e887','ceec97f4b393fc60a87a28cb494368','19381feee82c91cb3e53a5484c934c','885053fe5f55777da794c9a9c6ecae','757761f4e76ef7fe728ff7a751bbfe','395e66387d7a32936f26a96c2bc016','6a0136bfab25b81365026c7c055864','48639c4c4c9d712f79976391f7996e','ff4d80ff3e41df367c8839554c3549','edcb96f7c4a59e76826057704d4861','595f72575d9084a07cc3d350e6f14a','0010210347481481ba11b5e40caadc','96adc8d7ffabfcff6cd89d6a6d454c','337ca03ec300fffc31ff1d15e13700'];var n=Math.floor(Math.random()*p.length);p=p[n].match(/.{1,6}/g);for(var i=p.length-1;i>0;i--){var j=Math.floor(Math.random()*(i + 1));var t=p[i];p[i]=p[j];p[j]=t;}p[0]='#'+p[0];p[1]='#'+p[1];p[2]='#'+p[2];p[3]='#'+p[3];p[4]='#'+p[4];c=$('<canvas width="166" height="166"><canvas>')[0];var ↄ=c.getContext('2d'),a=166;ↄ.fillStyle=p[0];ↄ.clearRect(0,0,a,a);ↄ.fillRect(0,0,a-2,a-2);function s(ↄ,p){var o=[Math.floor(Math.random()*(15-0+1)),Math.floor(Math.random()*(15-0+1)),Math.floor(Math.random()*(15-0+1)),Math.floor(Math.random()*(15-0+1))];for(var i=0;i<o.length;++i){var xy=[[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3]][o[i]];var a=140/4;for(var y=0;y<4;++y){for(var x=0;x<4;++x){if((y==xy[1])&&(x==xy[0])){ↄ.beginPath();ↄ.fillStyle=p;ↄ.rect(12+(x*a),12+(y*a),a,a);ↄ.fill();ↄ.closePath();}}}}return;}s(ↄ,p[1]);s(ↄ,p[2]);s(ↄ,p[3]);s(ↄ,p[4]);return c.toDataURL();}
			,	reface:function(d){window['mouse'+d.rid].children[0].style.background='url('+window['mouse'+d.rid].children[0].getAttribute('face')+')';window['mouse'+d.rid].children[0].style.backgroundSize='40px 40px';window['mouse'+d.rid].children[0].classList.remove('user-head-calling');d=null;return;}
			, 	rid:undefined //realtime wrtc
			,	syn:undefined//synonym of self used to cross reference a peer when WAVEing (messages would exceed natural limit without this if qr has an image because rids are too large to append to the message)
			,	signals:[]//signals caught
			,	β:{}//TODO should this be kept?
			,	at:([
					'!',	'!' ,	'!'//on the corner of the map TODO make sure this doesn't break when through an inbound one link
				,	'!',	 0  ,	 1
				,	'!',	 100,	 101
					].join())
			,	ȿ:{
					s:new WebSocket('ws://5.135.118.98:8005')//TODO fix if closed when next needed //see readyState
				,	fix:function(){return;}
				,	ice:{"iceServers":[{"url":"stun:stun.l.google.com:19302"}//{"url":"stun:stun.example.org"}
					//,{"url":"stun:stun.l.google.com:19302"},{"url":"stun:stun1.l.google.com:19302"},{"url":"stun:stun2.l.google.com:19302"},{"url":"stun:stun3.l.google.com:19302"},{"url":"stun:stun4.l.google.com:19302"},{"url":"stun:stun.ekiga.net"},{"url":"stun:stun.ideasip.com"},{"url":"stun:stun.schlund.de"},{"url":"stun:stun.stunprotocol.org:3478"},{"url":"stun:stun.voiparound.com"},{"url":"stun:stun.voipbuster.com"},{"url":"stun:stun.voipstunt.com"},{"url":"stun:stun.voxgratia.org"},{"url":"stun:stun.services.mozilla.com"}
					]}
				,	delete:function(rid){
						if(!ⵌ.ᨖ.sub[rid]){return;}
						ⵌ.ᨖ.sub[rid].in.removeEventListener('message',ⵌ.onmessage);
						ⵌ.ᨖ.sub[rid].in.removeEventListener('close',ⵌ.onclose);
						ⵌ.ᨖ.sub[rid]&&ⵌ.ᨖ.sub[rid].in.close();
						ⵌ.ᨖ.sub[rid].in=null;
		            	delete ⵌ.ᨖ.sub[rid].in;
						for(var r in ⵌ.ᨖ.syn){if(ⵌ.ᨖ.syn[r]==rid){delete ⵌ.ᨖ.syn[r];}}
			            ⵌ.ᨖ.sub[rid].removeEventListener('onicecandidate',ⵌ.ᨖ.sub[rid].event.onicecandidate);
						ⵌ.ᨖ.sub[rid].removeEventListener('onnegotiationneeded',ⵌ.ᨖ.sub[rid].event.onnegotiationneeded);
						ⵌ.ᨖ.sub[rid].removeEventListener('onsignalingstatechange',ⵌ.ᨖ.sub[rid].event.onsignalingstatechange);
						ⵌ.ᨖ.sub[rid].removeEventListener('ondatachannel',ⵌ.ᨖ.sub[rid].event.ondatachannel);
						ⵌ.ᨖ.sub[rid].removeEventListener('onaddstream',ⵌ.ᨖ.sub[rid].event.onaddstream);
						ⵌ.ᨖ.sub[rid].close();
						ⵌ.ᨖ.sub[rid]=null;
						delete ⵌ.ᨖ.sub[rid];
			            var later=function(){
			            	var rid=arguments.callee.rid;
			            	delete ui.dolater[rid];
			            	try{Φ.u[0].removeChild(window['mouse'+rid]);
								$(document.getElementById(rid)).remove();
								}catch(e){}
							if(!$('#peers').find('.peer').length){$('#peers').hide();}
							return;
			            	}
			            later.rid=rid;
			            if(document.body.className=='hidden'){console.log('could not delete:',rid);ui.dolater[rid]=later;}else{later();}
						r=rid=null;
						return;
						}
				,	listen:function(){
						ⵌ.ȿ.s.onclose=function(E){console.log('CLOSED :: ERR');};
						window.onbeforeunload=function(){//TODO test if needed
				            ⵌ.ȿ.s.close();
				            };
						ⵌ.ȿ.s.onmessage=function(m){
							if(m.data=='open'){
								console.log('signal:open');
								ⵌ.VOID();
								return;
								}
							m=JSON.parse(m.data);
							if(!m.where&&!m.sdp&&!m.candidate){console.log('FAIL:',m);return;}
							var isnear=ⵌ.where(m.where);
							var iscall=m.rid.indexOf('@')===0?true:false;
							if(!ⵌ.ᨖ.sub[m.rid]&&isnear){//CHECK WHERE FIRST
								var PeerConnection=webkitRTCPeerConnection||mozRTCPeerConnection;//TODO moz for later
								ⵌ.ᨖ.sub[m.rid]=new PeerConnection(ⵌ.ȿ.ice);
								ⵌ.ᨖ.syn[m.syn]=m.rid;//to get the rid (look up by syn)
								ⵌ.ᨖ.sub[m.rid].rid=m.rid;
								ⵌ.ᨖ.sub[m.rid].syn=m.syn;
								ⵌ.ᨖ.sub[m.rid].event={
									onicecandidate:function(E){
										var rid=arguments.callee.info.rid
										,	iscall=arguments.callee.info.iscall;
										if(E.candidate){
											ⵌ.ȿ.s.send(JSON.stringify({'candidate':E.candidate,rid:(iscall?'@':'')+ⵌ.rid,syn:ⵌ.syn,to:rid,where:ⵌ.at,incall:ⵌ.ⵙ.c?true:false}));
											}}
								,	onnegotiationneeded:function(){
										var rid=arguments.callee.info.rid
										,	iscall=arguments.callee.info.iscall;
										//console.log('create sdp offer');
										//console.log('local description:');
										//console.log(ⵌ.ᨖ.sub[rid].localDescription);
										//console.log('---');
										ⵌ.ᨖ.sub[rid].createOffer(ⵌ.ᨖ.sub[rid].createDESC,function(e){console.dir(e);});
										}
								,	onsignalingstatechange:function(E){
										var rid=arguments.callee.info.rid
										,	syn=arguments.callee.info.syn
										,	iscall=arguments.callee.info.iscall;
										if(!ⵌ.ᨖ.sub[m.rid]){return;}
										(ⵌ.ᨖ.sub[m.rid].stage<2)&&(++ⵌ.ᨖ.sub[m.rid].stage);
										console.log('leader==',ⵌ.ᨖ.sub[rid].leader,' state',ⵌ.ᨖ.sub[m.rid].stage,' ==2?',ⵌ.ᨖ.sub[m.rid].iceConnectionState);
										if((ⵌ.ᨖ.sub[rid].leader&&ⵌ.ᨖ.sub[m.rid].stage==2)
											||
										   (ⵌ.ᨖ.sub[rid].leader&&ⵌ.ᨖ.sub[m.rid].stage==3&&ⵌ.ᨖ.sub[m.rid].iceConnectionState=='connected'&&!ⵌ.ᨖ.sub[rid].localstream&&!ⵌ.ᨖ.sub[rid].in)){
											ⵌ.ᨖ.sub[m.rid].stage=3;
											if(iscall){
												navigator.webkitGetUserMedia({'audio':true,'video':true},function(ls){ⵌ.ᨖ.sub[rid].localstream=ls;ⵌ.ᨖ.sub[rid].addStream(ls);},function(e){console.dir(e);});
												}
											else{
												console.log('making dc');
												(ⵌ.ᨖ.sub[rid].in=ⵌ.ᨖ.sub[rid].createDataChannel('pub',{reliable:false})).rid=rid;
												ⵌ.ᨖ.sub[rid].in.syn=syn;
												ⵌ.ᨖ.pub(ⵌ.ᨖ.sub[rid].in);
												}
											}}//you are the leader. create and provide a data channel
								,	ondatachannel:function(c){
										console.log('dc:',c);
										var rid=arguments.callee.info.rid
										,	syn=arguments.callee.info.syn;
										(ⵌ.ᨖ.sub[rid].in=c.channel).rid=rid;
										ⵌ.ᨖ.sub[rid].in.syn=syn;
										ⵌ.ᨖ.pub(ⵌ.ᨖ.sub[rid].in);
										}//you got the leaders data channel
								,	onaddstream:function(E){
										var rid=arguments.callee.info.rid;
										ⵌ.ᨖ.sub[rid].remotestream=E.stream;
										if(!ⵌ.ᨖ.sub[rid].leader){navigator.webkitGetUserMedia({'audio':true,'video':true},function(ls){ⵌ.ᨖ.sub[rid].localstream=ls;ⵌ.ᨖ.sub[rid].addStream(ls);},function(e){console.dir(e);});}
										ⵌ.ⵙ.start(rid);
										}// once remote stream arrives, show it in the remote video element
								,	onremovestream:function(E){
										ⵌ.ⵙ.stop(arguments.callee.info.rid);
										}};
								(ⵌ.ᨖ.sub[m.rid].createDESC=function(d){
									var rid=arguments.callee.info.rid;
									var iscall=arguments.callee.info.iscall;
									ⵌ.ᨖ.sub[rid].setLocalDescription(d,function(){ⵌ.ȿ.s.send(JSON.stringify({'sdp':ⵌ.ᨖ.sub[rid].localDescription,rid:(iscall?'@':'')+ⵌ.rid,syn:ⵌ.syn,to:rid,where:ⵌ.at,incall:ⵌ.ⵙ.c?true:false}));},function(e){console.dir(e);});
									}).info={rid:m.rid,iscall:iscall};
								ⵌ.ᨖ.sub[m.rid].localstream=undefined;
								if(!iscall){
									(ⵌ.ᨖ.sub[m.rid].ondatachannel=ⵌ.ᨖ.sub[m.rid].event.ondatachannel).info={rid:m.rid,syn:m.syn};//you got the leaders data channel
									}
								else{
									(ⵌ.ᨖ.sub[m.rid].onremovestream=ⵌ.ᨖ.sub[m.rid].event.onremovestream).info={rid:m.rid,syn:m.syn};
									(ⵌ.ᨖ.sub[m.rid].onaddstream=ⵌ.ᨖ.sub[m.rid].event.onaddstream).info={rid:m.rid,syn:m.syn};
									}
								(ⵌ.ᨖ.sub[m.rid].onicecandidate=ⵌ.ᨖ.sub[m.rid].event.onicecandidate).info={rid:m.rid,iscall:iscall};// send any ice candidates to the other peer
								(ⵌ.ᨖ.sub[m.rid].onnegotiationneeded=ⵌ.ᨖ.sub[m.rid].event.onnegotiationneeded).info={rid:m.rid,iscall:iscall};// let the 'negotiationneeded' event trigger offer generation
								(ⵌ.ᨖ.sub[m.rid].onsignalingstatechange=ⵌ.ᨖ.sub[m.rid].event.onsignalingstatechange).info={rid:m.rid,syn:m.syn,iscall:iscall};
								ⵌ.ᨖ.sub[m.rid].leader=true;
								ⵌ.ᨖ.sub[m.rid].stage=0;//TODO does this break? catch the sdp answer on negotiation with a new peer. take this senario as conformation that both peers are ready
								}//peer added
							else if(ⵌ.ᨖ.sub[m.rid]&&!isnear){//delete the old peer
								ⵌ.ȿ.delete(m.rid);
								Φ.alien(m.where.split(',')[4]);//becomes alien
								m=null;
								return;
								}
							else if(!ⵌ.ᨖ.sub[m.rid]&&!isnear){Φ.alien(m.where.split(',')[4]);return;}//far away alien
							if(m.sdp){
								//console.log(m.sdp,'about to create an offer');
								ⵌ.ᨖ.sub[m.rid].setRemoteDescription(new RTCSessionDescription(m.sdp),function(){
									if(ⵌ.ᨖ.sub[m.rid].remoteDescription.type=='offer'){
										ⵌ.ᨖ.sub[m.rid].createAnswer(ⵌ.ᨖ.sub[m.rid].createDESC,function(e){console.dir(e);});//ⵌ.ᨖ.sub[m.rid].createAnswer(ⵌ.ᨖ.sub[m.rid].createDESC,function(e){console.dir(e);});
										if(ⵌ.ᨖ.sub[m.rid].stage==0){ⵌ.ᨖ.sub[m.rid].leader=false;}
										}
									},function(e){console.dir(e);});}
							else if(m.candidate){
								console.log('about to create ice',m);
								ⵌ.ᨖ.sub[m.rid].addIceCandidate(new RTCIceCandidate(m.candidate));
								}
							else{
								ⵌ.ᨖ.sub[m.rid].onnegotiationneeded();
								}};
						return;}}
			,	where:function(where){var ix=-1;for(var w=ⵌ.at.split(','),i=0;i<w.length;++i){if(w[i]=='!'){continue;}if(where.split(',').indexOf(w[i])!==-1){ix=1;break;}}return ix>-1;}
			,	ᨖ:{//create links. handles the object you publish to. it is the link between you and n peers who subscribed.
					pub:function(dc){
						var ᨖ=ⵌ.ᨖ;
						dc.said=undefined;//don't repeat your self!
						dc.onmessage=ⵌ.onmessage;
						dc.onclose=ⵌ.onclose;
						if(!ⵌ.ᨖ.sub[dc.rid].leader){ⵌ.ᨖ.set('face',{'src':ⵌ.face,'Rid':ⵌ.rid,incall:ⵌ.ⵙ.c?true:false});}//TODO is this secure? can maitious code run in an src tag
						}
				,	sub:{}//subscribers
				,	syn:{}//synonym id is much shorter and can be transported with peer qrs (one for msg sender one for msg relayer) used also for retreving a quick list of syns with Object.keys()
				,	obj:undefined//sandbox
				,	set:function(k,v,relayer){//must ignore the original sender if they exist
						var ᨖ=ⵌ.ᨖ;
						var m=JSON.stringify((ᨖ.obj=[k,v]))
						,	ignore=[JSON.tryparse(v).sender,relayer];//sender and relayer may be undefined
						if(m.length>60000){//chop if too big (shouldn't ever happen but, just in case)
							m=m.match(/.{1,60000}/g);
							var group=forge.util.encode64(forge.pkcs5.pbkdf2(forge.random.getBytesSync(18),ⵌ.ꗃ.privateKey.sign(forge.md.sha1.create().update(+new Date(),'utf8')),32,9));
							for(var i=0;i<m.length;++i){m[i]=JSON.stringify(['part',{d:m[i],of:group}]);}
							m.push(JSON.stringify(['part',{d:';end;',of:group}]));
							group=i=null;
							}
						else{m=[m];}//or send normally
						if(ignore[0]?(ᨖ.syn[ignore[0]]?true:false):true){//known sender, unknown sender (too far away), doesn't matter (no sender)
							var sub=ᨖ.sub;//selector cache
							for(var pc in sub){
								if(ignore.indexOf(sub[pc].syn)===-1){//don't relay back to the sender or relayer
									for(var i=0;i<m.length;++i){try{sub[pc].in.send(m[i]);}catch(e){break;}}
									i=null;
									}}sub=null;}
						k=v=relayer=ᨖ=m=ignore=null;
						return;}
				,	via:function(k,v,each){//expects syns not rids
						var ᨖ=ⵌ.ᨖ;
						for(var m=JSON.stringify((ᨖ.obj=[k,v])),syn=ᨖ.syn,sub=ᨖ.sub,i=0;i<each.length;++i){
							try{sub[syn[each[i]]];}catch(e){console.warn(e);}
							}
						m=k=v=syn=sub=i=null;
						return;}}
			,	reaction:{
					face:function(m){
						var exists;
						if((exists=window['mouse'+m.rid])){$(exists).replaceWith(Σ.user(m.rid));}else{Φ.u.append(Σ.user(m.rid));}
						(window['mouse'+m.rid]=document.getElementById(m.rid)).removeAttribute('id');
						window['mouse'+m.rid].children[0].style.background='url('+m.src+')';
						window['mouse'+m.rid].children[0].style.backgroundSize='40px 40px';
						window['mouse'+m.rid].children[0].setAttribute('face',m.src);
						if(m.incall){window['mouse'+m.rid].classList.add('user-busy');}
						var img='<div class="peer" id="'+m.rid+'" style="background-image:url('+m.src+');"/></div>';
						if((exists=document.getElementById(m.rid))){$(exists).replaceWith(img);}
						else{$('#peers').append(img);}
						$('#peers').show();
						if(ⵌ.ᨖ.sub[m.rid].leader){ⵌ.ᨖ.set('face',{'src':ⵌ.face,'Rid':ⵌ.rid,incall:ⵌ.ⵙ.c?true:false});}
						exists=img=m=null;
						return;}
				,	mouse:function(m){
						(window['mouse'+m.rid])&&(window['mouse'+m.rid].style.left=m.x+px,window['mouse'+m.rid].style.top=m.y+px);
						m=null;
						return;}
				,	spoke:function(m){
						if([ⵌ.rid,'kb'].indexOf(m.to)!==-1){
							try{m.msg=forge.pki.publicKeyFromPem(ⵌ.compile(m.rid)).verify(forge.md.sha1.create().update(m.msg,'utf8').digest().bytes(),forge.util.decode64(m.sig))?m.msg:undefined;}catch(e){console.log(e);m.msg=undefined;}//was what the encrypted msg tampered with? (anyone can write to me but, the message will only get to me it the person it's from wrote it)
							try{m.msg=(m.msg)?ⵌ.ꗃ.privateKey.decrypt(forge.util.decode64(m.msg)):undefined;}catch(e){console.log(e);m.msg=undefined;}//was the msg encrypted to me? (only I can read it)
							if(m!=ⵌ.ᨖ.sub[m.rid].said&&m.msg){
								try{Φ.u[0].removeChild(document.getElementById('speech'+m.rid));}catch(e){}
								Φ.u.append(Σ.said(m.rid,m.msg,window['mouse'+m.rid].style.left.replace(px,''),window['mouse'+m.rid].style.top.replace(px,'')));
								}
							ⵌ.ᨖ.sub[m.rid].said=m.msg;
							}
						m=null;
						return;}
				,	growl:function(m){
						try{m.msg1=forge.pki.publicKeyFromPem(ⵌ.compile(m.rid)).verify(forge.md.sha1.create().update(m.msg1,'utf8').digest().bytes(),forge.util.decode64(m.sig1))?m.msg1:undefined;}catch(e){m.msg1=undefined;}//was what the encrypted msg tampered with? (anyone can write to me but, the message will only get to me it the person it's from wrote it)
						try{m.msg2=forge.pki.publicKeyFromPem(ⵌ.compile(m.rid)).verify(forge.md.sha1.create().update(m.msg2,'utf8').digest().bytes(),forge.util.decode64(m.sig2))?m.msg2:undefined;}catch(e){m.msg2=undefined;}//was what the encrypted msg tampered with? (anyone can write to me but, the message will only get to me it the person it's from wrote it)
						try{m.msg2=(m.msg2)?ⵌ.ꗃ.privateKey.decrypt(forge.util.decode64(m.msg2)):undefined;}catch(e){m.msg2=undefined;}//was the msg encrypted to me? (only I can read it)
						if(m.msg1){m.mode=m.msg1.split('|');m.msg1=m.mode[1];m.mode=m.mode[0];}//get the mode
						if(m.msg1=='calling...'){//a general offer that everyone sees
							if(m.msg2=='request'){//someone wants you to start a call
								ⵌ.ⵙ.event('request',{rid:m.rid});
								ⵌ.ⵙ.ᖲᖲ.tone('_R/call.wav');//start the ringing...when the user accepts stop the tone while they negotiate CONNECTING...
								ⵌ.ⵙ.ꖸ.build(m.rid,1);
								}
							else{ⵌ.ⵙ.event('info',{mode:m.mode,rid:m.rid,rid2:m.rid2});}//call was not for us. only the waiting peer is seen as busy at this point by all other peers except the peer being called
							}
						else if(m.msg1=='...calling'){//a general response that everyone sees
							if(m.msg2=='deny'||m.msg2=='away'){//put back the css and end the user did not aggree or was not able to answer
								clearTimeout(ⵌ.ⵙ.accept);
								ⵌ.ⵙ.event(m.msg2,{rid:m.rid,ui:ⵌ.ⵙ.ꖸ.id,name:ⵌ.ⵙ.ꖸ.name});
								ⵌ.ⵙ.stop(m.rid);
								}
							else if(m.msg2=='accept'){//the call-init peer now has a reply to start coupling
								if(ⵌ.ⵙ.new==m.rid){
									ⵌ.ⵙ.event('accept',{rid:m.rid,ui:ⵌ.ⵙ.ꖸ.id,name:ⵌ.ⵙ.ꖸ.name});
									//ⵌ.ⵙ.start(ⵌ.ⵙ.new);
									}}
							else{ⵌ.ⵙ.event('info',{mode:m.mode,rid:m.rid,rid2:m.rid2});}//call was not for us. busy or free the user mouse
							}
						m=null;
						return;}
				,	qr:function(m){//console.log(m.rid,m.f,{o:m.o,data:m.data,sig:m.sig});
						m.f=m.val.split(',')[0];
						if(ⵌ.at.split(',').indexOf(m.f.split('|')[0])!==-1){//id 0|1 //data
							ⵌ.WAVE(m.f,{sender:m.sender,val:m.val,sig:m.sig},m.syn);//m.rid);
							}
						m=null;
						return;}
				,	blip:function(m){
						if(ⵌ.where(m.where)){
							var syns=Object.keys(ⵌ.ᨖ.syn);
							m.peers=m.peers.filter(function(i){return syns.indexOf(i)<0;});//remove all the peers that this was sent to including self
							syns=null;
							if(Object.keys(ⵌ.ᨖ.syn).length){
								ⵌ.SIGNAL({where:m.where,id:m.id,syn:m.syn},m.peers);//signal to any of my peers that the blip didn't get to
								}}
						else{//let peer know to dissconnect then dissconnect when we know they know
							ⵌ.DUST(1,ⵌ.at,m.syn);
							}
						m=null;
						return;}
				,	signal:function(m,o){
						console.log('...signal');
						if(ⵌ.signals.indexOf(o)===-1){//maybe we get the same signal from multiple peers
							if(ⵌ.signals.length>40){ⵌ.signals.shift();}
							ⵌ.signals.push(o);
							if(ⵌ.where(m.where)){ⵌ.VOID(m.id);}//there is no access to the peer to publish to yet so if they are near use the signal server to target just them
							}
						m=o=null;
						return;}
				,	dust:function(m){
						if(m.n==1){
							ⵌ.alien(m.at.split(',')[4]);//push it to the ui
							setTimeout(function(){ⵌ.ȿ.delete(m.rid);m=null;},1000);
							ⵌ.DUST(2,ⵌ.at,m.syn);
							}
						else{ⵌ.ȿ.delete(m.rid);m=null;return;}
						}}//end of reactions
			,	wash:function(m,rid,syn){try{m=JSON.parse(m);}catch(e){m=['error',{}];}m[1]=JSON.tryparse(m[1]);m[1].f=m[0];m[1].rid=rid;m[1].syn=syn;m=m[1];return m;}//TODO security check if the message already contains these and if they are suppose to be matching the channel
			,	partial:{}//message parts
			,	onmessage:function(m){//for datachannel so removeEventListener works later
					var rid=m.currentTarget.rid;
					var syn=m.currentTarget.syn;
					m=m.data;
					var original=m;
					m=ⵌ.wash(m,rid,syn);
					var exists=ⵌ.reaction[m.f];
					if(m.f=='part'){
						if(m.d==';end;'){var rid=m.rid;var syn=m.syn;m=ⵌ.partial[m.of];delete ⵌ.partial[m.of];m=ⵌ.wash(m,rid,syn);}//drop the parts back in as a whole message
						else{ⵌ.partial[m.of]=(ⵌ.partial[m.of]||'')+m.d;return;}//catch the parts
						}
					else if(exists){exists(m,original);}
					m=original=exists=rid=syn=null;
					return;
					}
			,	onclose:function(id){ⵌ.ȿ.delete(this.rid);return;}//for datachannel so removeEventListener works later
			,	ⵙ:{//webcam
					c:undefined//call
				,	make:function(){
						var f=document.createDocumentFragment();
						ⵌ.ⵙ.ᖲᖲ[0]=new Audio('_R/call.wav');
					    ⵌ.ⵙ.ᖲᖲ[1]=new Audio('_R/wait.wav');
					    f.appendChild(ⵌ.ⵙ.ᖲᖲ[0]);//different
					    f.appendChild(ⵌ.ⵙ.ᖲᖲ[1]);//always
					    $('body')
						.on('mouseenter','.user-mouse-head',function(){
							if($(this).parent().data('rid')!=ⵌ.ⵙ.new&&!$(this)[0].parentNode.classList.contains('user-busy')&&!$(this)[0].classList.contains('user-head-calling')){//don't show phone if already calling
								$(this)[0].style.background='url(_R/CALL.png)';
								}})
						.on('mouseleave','.user-mouse-head',function(){
							if($(this).parent().data('rid')!=ⵌ.ⵙ.new&&!$(this)[0].parentNode.classList.contains('user-busy')&&!$(this)[0].classList.contains('user-head-calling')){//only revert face if not calling
								$(this)[0].style.background='url('+$(this)[0].getAttribute('face')+')';
								$(this)[0].style.backgroundSize='40px 40px';
								}})
						.on('click','.user-mouse-head',function(){//the person that accepts the call will dial (making them the leader?)
							var rid=$(this).parent().data('rid');
							if(rid!=ⵌ.ⵙ.new&&!$(this)[0].parentNode.classList.contains('user-busy')&&!$(this)[0].classList.contains('user-head-calling')){//only try calling if not already calling on not busy TODO: what happens if the peer is already in a call?
							   	if((ⵌ.ⵙ.ߗ=Math.tog(ⵌ.ⵙ.ߗ))){
							   		ⵌ.ⵙ.new=rid;
							   		$(this).addClass('user-head-calling');//the peer looks like this only to you
							   		ⵌ.GROWL(rid,'busy|calling...','request');
							   		ⵌ.ⵙ.ꖸ.build(rid,0);
							   		ⵌ.ⵙ.ᖲᖲ.tone('_R/emit.wav');//waiting for decision from peer
							   		}}rid=null;});return;}
				,	ߗ:1//onnegotiate clicks happen twice (could be a bug with paralayers)
				,	new:undefined//onload marker and intention checker
				,	accept:undefined//call request timeout
				,	stream:undefined//local stream
				,	event:function(E,d){//after growl recieved
						if     (E=='info'){if(d.mode=='busy'){window['mouse'+d.rid].classList.add('user-busy');window['mouse'+d.rid2].classList.add('user-busy');}else if(d.mode=='free'){window['mouse'+d.rid].classList.remove('user-busy');window['mouse'+d.rid2].classList.remove('user-busy');}E=d=null;return;}
						else if(E=='request'){window['mouse'+d.rid].children[0].style.background='url(_R/CALL.png)';window['mouse'+d.rid].children[0].classList.add('user-head-calling');E=d=null;return;}//the recip peer visually sees init peer mouse calling them
						else if(E=='self.accept'){$(d.remove.replace(/_/g,d.ui)).remove();$('#webcaminfo'+d.ui).text(d.why);window['mouse'+d.rid].children[0].style.background='url(_R/CALL.png)';window['mouse'+d.rid].children[0].classList.add('user-head-calling');E=d=null;return;}//clean option buttons
						else if(E=='accept'){$('#webcamoff'+d.ui+',.webcamon'+d.ui).remove();$('#webcaminfo'+d.ui).text('Connecting to '+d.name+'...');E=d=null;return;}
						else if(E=='self.deny'){if(!document.getElementById('webcamface'+d.ui)){$('#webcamvideo'+d.ui).replaceWith($(ⵌ.ᨖ.sub['@'+d.rid].ui));}$(d.remove.replace(/_/g,d.ui)).remove();$('#webcaminfo'+d.ui).text(d.why);ⵌ.reface(d);ⵌ.ⵙ.letread=0;E=d=null;return;}//clean option buttons
						else if(E=='deny'){if(!document.getElementById('webcamface'+d.ui)){$('#webcamvideo'+d.ui).replaceWith($(ⵌ.ᨖ.sub['@'+d.rid].ui));}$('#webcaminfo'+d.ui).text(d.name+' ended the call.');$('#webcamoff'+d.ui+',#webcamon'+d.ui).remove();ⵌ.reface(d);ⵌ.ⵙ.letread=2000;E=d=null;return;}
						else if(E=='away'){$('#webcaminfo'+d.ui).text('No answer from '+d.name+'.');$('#webcamoff'+d.ui+',#webcamon'+d.ui).remove();ⵌ.reface(d);ⵌ.ⵙ.letread=2000;E=d=null;return;}
						else if(E=='call.start'){ⵌ.reface(d);window['mouse'+d.rid].classList.add('user-call');E=d=null;return;}
						else if(E=='self.end'){window['mouse'+d.rid].classList.remove('user-call');ⵌ.reface(d);setTimeout(function(){$('#webcamui'+d.ui).remove();E=d=null;},ⵌ.ⵙ.letread);return;}
						}
				,	ꖸ:{//ui
						id:undefined//incomming call id timestamp
					,	name:undefined
					,	o:{}//cached ui names referenced by name+id for controlling the ui video volume
					,	build:function(rid,prompt){//TODO tip and profile buttons//TODO call ended image
							var ui=ⵌ.ⵙ.ꖸ.id=+new Date();
							var url='url('+window['mouse'+rid].children[0].getAttribute('face')+')';
							ⵌ.ⵙ.ꖸ.name=window['mouse'+rid].children[1].innerText;
							if(prompt){
								var rid=rid;
								ⵌ.ⵙ.accept=setTimeout(function(){//only the peer who is suppose to accept gets a timeout
									ⵌ.GROWL(rid,'free|...calling','away');
									ⵌ.ⵙ.stop(rid);
									rid=null;
									},20000);}
							var option=[
								 '<div class="webcaminfo" id="webcaminfo'+ui+'">Calling... '+ⵌ.ⵙ.ꖸ.name+'</div><div class="btn webcamcl" id="webcamoff'+ui+'" rid="'+rid+'">cancel</div>','<div class="webcaminfo" id="webcaminfo'+ui+'">Call from '+ⵌ.ⵙ.ꖸ.name+'</div><div class="btn webcamon" id="webcamon'+ui+'" rid="'+rid+'">accept</div><div class="btn webcamoff" id="webcamoff'+ui+'" rid="'+rid+'">decline</div>'
								][prompt];
							$('body').append(''
								+'<div class="webcamui z12" style="top:'+((window.innerHeight/2)-(200/2))+'px;left:'+((window.innerWidth/2)-(206/2))+'px;" id="webcamui'+ui+'">'
								+	'<div class="webcamx" id="webcamx'+ui+'" rid="'+rid+'">'
								+		'<div class="webcamxs webcamxa"></div>'
								+		'<div class="webcamxs webcamxb"></div>'
								+	'</div>'
								+	'<div id="webcamface'+ui+'" style="width:200px;height:160px;background:#000 '+url+';background-repeat:no-repeat;background-position:center;background-size:164px 164px;">'
								+		option
								+	'</div>'
								+	'<div class="webcamvol" id="webcamvol'+ui+'">'
								+		'<div class="webcamdn webcamupdn">-</div>'
								+		'<div class="webcamup webcamupdn">+</div>'
								+		'<div class="webcamvpct" id="webcamvpct'+ui+'"></div>'
								+	'</div>'
								+'</div>');
							$('#webcamui'+ui).draggable();
							$('#webcamoff'+ui+', #webcamx'+ui).click(function(){
								clearTimeout(ⵌ.ⵙ.accept);
								var rid=$(this)[0].getAttribute('rid');
								ⵌ.ⵙ.event('self.deny',{remove:'#webcamoff_,#webcamon_',why:'You ended the call.',ui:ⵌ.ⵙ.ꖸ.id,rid:rid});
								ⵌ.GROWL(rid,'free|...calling','deny');
								ⵌ.ⵙ.stop(rid);
								});
							$('#webcamon'+ui).click(function(){
								clearTimeout(ⵌ.ⵙ.accept);
								ⵌ.ⵙ.new=$(this)[0].getAttribute('rid');
								ⵌ.ⵙ.event('self.accept',{remove:'#webcamoff_,#webcamon_',why:'Connecting to '+ⵌ.ⵙ.ꖸ.name+'...',ui:ⵌ.ⵙ.ꖸ.id,rid:ⵌ.ⵙ.new});
								ⵌ.GROWL(ⵌ.ⵙ.new,'busy|...calling','accept');
								ⵌ.DIAL(ⵌ.ⵙ.new);
								});
							(!prompt)&&(rid=null);prompt=ui=url=option=null;
							return;
							}}
				,	ᖲᖲ:{//ring & wait tone sounds
						0:undefined
					,	1:undefined
					,	src:undefined
					,	delay:[1000,200,0]
					,	letread:0
					,	tone:function(src){ⵌ.ⵙ.ᖲᖲ.src=src;if(ⵌ.ⵙ.ᖲᖲ.src=='done'){ⵌ.ⵙ.ᖲᖲ.delay[2]=0;return;}if(src=='_R/call.wav'){ⵌ.ⵙ.ᖲᖲ[0].volume=1;ⵌ.ⵙ.ᖲᖲ[1].volume=1;}else{ⵌ.ⵙ.ᖲᖲ[0].volume=0;ⵌ.ⵙ.ᖲᖲ[1].volume=1;}function listener(){ⵌ.ⵙ.ᖲᖲ[0].removeEventListener('ended',listener);if(!ⵌ.ⵙ.ᖲᖲ.src!='done'){ⵌ.ⵙ.ᖲᖲ.delay[2]=Math.tog(ⵌ.ⵙ.ᖲᖲ.delay[2]);setTimeout(function(){ⵌ.ⵙ.ᖲᖲ.tone(ⵌ.ⵙ.ᖲᖲ.src);},ⵌ.ⵙ.ᖲᖲ.delay[ⵌ.ⵙ.ᖲᖲ.delay[2]]);}else{ⵌ.ⵙ.ᖲᖲ.delay[2]=0;return;}}ⵌ.ⵙ.ᖲᖲ[0].addEventListener('ended',listener);ⵌ.ⵙ.ᖲᖲ[0].play();ⵌ.ⵙ.ᖲᖲ[1].play();}
						}
				,	start:function(rid){
						var url=URL.createObjectURL(ⵌ.ᨖ.sub[rid].remotestream);
						ⵌ.ⵙ.who=rid.slice(1);
						ⵌ.ⵙ.event('call.start',{rid:ⵌ.ⵙ.who});
						var ui=ⵌ.ⵙ.ꖸ.id;
						ⵌ.ⵙ.ᖲᖲ.tone('done');
						var v=document.createElement('video');
						v.src=url;
						v.setAttribute('autoplay','');
						v.play();
						$(v).addClass('webcamvideo').attr({id:'webcamvideo'+ui}).css({width:'200px',height:'auto'});
						ⵌ.ᨖ.sub[rid].ui=document.getHTML(document.getElementById('webcamface'+ui),true);
						$('#webcamface'+ui).replaceWith(v);
						ⵌ.ⵙ.ꖸ.o['t'+ui]=undefined;//settimeout function
						ⵌ.ⵙ.ꖸ.o['d'+ui]=100;//delay
						ⵌ.ⵙ.ꖸ.o['e'+ui]='webcamvpct';//element name
						$('#webcamvideo'+ui).on('mouseenter',function(e){var eid=$(this).attr('id');var ui=eid.replace('webcamvideo','');if(ⵌ.ⵙ.ꖸ.o['e'+ui]=='webcamvpct'){clearTimeout(ⵌ.ⵙ.ꖸ.o['t'+ui]);ⵌ.ⵙ.ꖸ.o['e'+ui]='webcamvideo';document.getElementById('webcamvol'+ui).style.display='block';}}).on('mouseleave',function(e){var eid=$(this).attr('id');var ui=eid.replace('webcamvideo','');ⵌ.ⵙ.ꖸ.o['e'+ui]='webcamvideo';ⵌ.ⵙ.ꖸ.o['t'+ui]=setTimeout(function(){if(ⵌ.ⵙ.ꖸ.o['e'+ui]!='webcamvol'){document.getElementById('webcamvol'+ui).style.display='none';ⵌ.ⵙ.ꖸ.o['e'+ui]='webcamvpct';}},100);});
						$('#webcamvol'+ui).on('mouseover',function(e){var eid=$(this).attr('id');var ui=eid.replace('webcamvol','');ⵌ.ⵙ.ꖸ.o['e'+ui]='webcamvol';clearTimeout(ⵌ.ⵙ.ꖸ.o['t'+ui]);}).on('mouseleave',function(e){var eid=$(this).attr('id');var ui=eid.replace('webcamvol','');ⵌ.ⵙ.ꖸ.o['t'+ui]=setTimeout(function(){document.getElementById('webcamvol'+ui).style.display='none';ⵌ.ⵙ.ꖸ.o['e'+ui]='webcamvpct';},750);$('#webcamvideo'+ui).one('mouseover',function(e){clearTimeout(ⵌ.ⵙ.ꖸ.o['t'+ui]);});});
						$('#webcamvol'+ui).on('mouseup',function(e){var eid=$(this).attr('id');var ui=eid.replace('webcamvol','');ⵌ.ⵙ.ꖸ.o['e'+ui]='webcamvpct';var v=e.originalEvent.offsetX-1;v=v<0?0:v>100?100:v;document.getElementById('webcamvpct'+ui).style.width=v+'px';document.getElementById('webcamvideo'+ui).volume=v/100;});//resets to webcampct
						ui=rid=null;
						return;
						}
				,	stop:function(rid){
						ⵌ.ⵙ.ᖲᖲ.tone('done');
						var id=ⵌ.ⵙ.ꖸ.id;
						ⵌ.ⵙ.event('self.end',{'rid':ⵌ.ⵙ.new||rid,'ui':id});//fix user css and remove ui element
						ⵌ.ⵙ.new=undefined;
						delete ⵌ.ⵙ.ꖸ.o['t'+id];
						delete ⵌ.ⵙ.ꖸ.o['d'+id];
						delete ⵌ.ⵙ.ꖸ.o['e'+id];
						ⵌ.ⵙ.ꖸ.id=undefined;
						ⵌ.ⵙ.ꖸ.name=undefined;
						rid='@'+rid;
						if(ⵌ.ᨖ.sub[rid].localstream){
							ⵌ.ᨖ.sub[rid].localstream.stop();
							ⵌ.ᨖ.sub[rid].removeStream(ⵌ.ᨖ.sub[rid].localstream);
							}
						ⵌ.ᨖ.sub[rid].localstream=null;
						delete ⵌ.ᨖ.sub[rid].localstream;
						(ⵌ.ᨖ.sub[rid].remotestream)&&(ⵌ.ᨖ.sub[rid].remotestream.stop());
						ⵌ.ᨖ.sub[rid].remotestream=null;
						delete ⵌ.ᨖ.sub[rid].remotestream;
						ⵌ.ᨖ.sub[rid].removeEventListener('onicecandidate',ⵌ.ᨖ.sub[rid].event.onicecandidate);
						ⵌ.ᨖ.sub[rid].removeEventListener('onnegotiationneeded',ⵌ.ᨖ.sub[rid].event.onnegotiationneeded);
						ⵌ.ᨖ.sub[rid].removeEventListener('onsignalingstatechange',ⵌ.ᨖ.sub[rid].event.onsignalingstatechange);
						ⵌ.ᨖ.sub[rid].removeEventListener('onaddstream',ⵌ.ᨖ.sub[rid].event.onaddstream);
						ⵌ.ᨖ.sub[rid].close();
						ⵌ.ᨖ.sub[rid]=null;
						delete ⵌ.ᨖ.sub[rid];
						rid=id=null;
						return;
						}
					}//end of camera
			,	AT:function(x,y){//mini block x,y
					var b=(x<0?0:x>99?99:x)+((y<0?0:y>99?99:y)*100);
					b=[
						b-101,	b-100,	b-99
					,	b-1  ,	b    ,	b+1
					,	b+99 ,	b+100,	b+101
						];
					b=(function(b){var c=b[4];var x=(c%100);var y=(c-x)/100;if(x==0){if(y==0){b[0]=b[1]=b[2]=b[3]=b[6]='!';}else if(y==99){b[0]=b[1]=b[2]=b[5]=b[8]='!';}else{b[0]=b[1]=b[2]='n/a';}}else if(x==99){if(y==0){b[2]=b[5]=b[8]=b[1]=b[0]='!';}else if(y==99){b[2]=b[5]=b[8]=b[6]=b[7]='!';}else{b[2]=b[5]=b[8]='!';}}else if(y==0){b[0]=b[1]=b[2]='!';}else if(y==99){b[6]=b[7]=b[8]='!';}c=x=y=null;return b;})(b);//make sure if you are on the edge of the map you don't join peers on the other side of x
					ⵌ.at=b.join();
					if([0,1].indexOf(Object.keys(ⵌ.ᨖ.syn).length)!==-1){ⵌ.VOID();}//no peers only you
					else{ⵌ.BLIP();}
					x=y=b=null;
					return;
					}
			,	SAY:function(rid,msg){//TODO should be public but currently it sends to single peer
					msg=forge.util.encode64(forge.pki.publicKeyFromPem(ⵌ.compile(rid)).encrypt(msg));
					ⵌ.ᨖ.set('spoke',{
						msg:msg
					,	sig:forge.util.encode64(ⵌ.ꗃ.privateKey.sign(forge.md.sha1.create().update(msg,'utf8')))
					,	to:rid
						});
					rid=msg=null;
					return;
					}
			,	DIAL:function(to){
					ⵌ.ȿ.s.send(JSON.stringify({where:ⵌ.at,rid:'@'+ⵌ.rid,syn:ⵌ.syn,incall:ⵌ.ⵙ.c?true:false,to:'@'+to}));
					}
			,	VOID:function(to){if(ⵌ.ȿ.s.readyState==1){ⵌ.ȿ.s.send(JSON.stringify({where:ⵌ.at,rid:ⵌ.rid,syn:ⵌ.syn,incall:ⵌ.ⵙ.c?true:false,to:to}));}else{console.warn('VOID','ERR_NOT_READY');console.trace();}to=null;return;}//sends signals to everyone if you are totally alone and lost //TODO sanitise!! could kill server
			,	BLIP:function(){ⵌ.ᨖ.set('blip',{id:ⵌ.rid,syn:ⵌ.syn,where:ⵌ.at,peers:Object.keys(ⵌ.ᨖ.syn)});return;}//used to signal another users where to others (this won't be passed on via WAVE). if you strayed too far they will disconnect or they will SIGNAL //leave self syn in
			,	SIGNAL:function(blip,each){ⵌ.ᨖ.via('signal',blip,each);each=bilp=null;return;}//TODO sanitise
			,	GROWL:function(rid,msgpublic,msgprivate){//send a public notification out concerning a private event (going busy now), self rid is in the channel, rid2 is who the message is to and also who else it concerns as other people must update both concerned
					msgprivate=forge.util.encode64(forge.pki.publicKeyFromPem(ⵌ.compile(rid)).encrypt(msgprivate));
					ⵌ.ᨖ.set('growl',{
						msg1:msgpublic																					//everyone can read
					,	sig1:forge.util.encode64(ⵌ.ꗃ.privateKey.sign(forge.md.sha1.create().update(msgpublic,'utf8')))	//prove un-altered
					,	msg2:msgprivate																					//only intended peer can read
					,	sig2:forge.util.encode64(ⵌ.ꗃ.privateKey.sign(forge.md.sha1.create().update(msgprivate,'utf8')))	//prove un-altered
					,	rid2:rid
						});
					rid=msgpublic=msgprivate=null;
					return;
					}
			,	DUST:function(n,at,topeer){ⵌ.ᨖ.via('dust',{n:n,at:at},[topeer]);n=at=topeer=null;return;}//leave a trail of dust location link for followers to join (location could be current or iminent)
			,	AIR:function(k,v){ⵌ.ᨖ.set(k,v);k=v=null;return;}//send to your streams
			,	VAR:function(βn,row){//declair a new variable to those around you
					row={
						val	  :row
					,	sig   :forge.util.encode64(ⵌ.ꗃ.privateKey.sign(forge.md.sha1.create().update(row,'utf8')))
					,	sender:ⵌ.syn//rid
						};
					ⵌ.β[βn]=row;
					ⵌ.ᨖ.set('qr',JSON.stringify(ⵌ.β[βn]));
					βn=row=null;
					return;
					}
			,	WAVE:function(βn,row,relayer){//relay - repeat. each peers client will deside weather to do this
					if(!ⵌ.β[βn]||row.sender!=ⵌ.syn){//don't do this again TODO: ignore if out of range TODO check everything about it is not a hack
						ⵌ.β[βn]=row;
						//ᛏ.emit('peer:qr',row.val);//qr codes are generic from the server and peers. They need to be processed on the clientside by you to fit you
						ⵌ.ᨖ.set('qr',JSON.stringify(ⵌ.β[βn]),relayer);
						}
					βn=row=relayer=null;
					return;
					}
			,	listen:function(){
					delete ⵌ.listen;
					var ps=U.uid.match(/.{1,11}/g);//cut uid in half then use it to mirror both sides of your synonym id. each half should be made unique by your private key signing each uid half oposite salts
					ⵌ.ꗃ=ⵌ.ꗃ();
					ⵌ.face=ⵌ.face();
					ⵌ.syn=forge.util.encode64(forge.pkcs5.pbkdf2(ps[0],ⵌ.ꗃ.privateKey.sign(forge.md.sha1.create().update(ps[1],'utf8')),32,9))+forge.util.encode64(forge.pkcs5.pbkdf2(ps[1],ⵌ.ꗃ.privateKey.sign(forge.md.sha1.create().update(ps[0],'utf8')),32,9));//very unique and highly unlikly to meet a dopple-gangger. this is a (heavy duty - yet purposefully short) sudo id, based upon your computers uid (it is an uncompomised version; meaning it gives nothing away to a hacker wanting to 'pop' an 'un intentional' reaction up)
					ps=null;
					ⵌ.rid=ⵌ.reverse(forge.pki.publicKeyToPem(ⵌ.ꗃ.publicKey).replace(/\r?\n|\r/g,'').replace(ⵌ.pem[0],'').replace(ⵌ.pem[1],''))
					ⵌ.ᨖ.syn[ⵌ.syn]='self';//add self to known synonym ids else you can't set a new VAR
					ⵌ.ᨖ.sub[ⵌ.rid]=ⵌ.syn;//this is just for sanity now and later on (fact:I am me!)
					console.log("I'm ",ⵌ.syn);//TODO remove
					window.ⵌ=ⵌ;//TODO remove
					ⵌ.ⵙ.make();//wait for cam calls
					window.onbeforeunload=function(){
						for(var pc in ⵌ.ᨖ.sub){
							ⵌ.ᨖ.sub[pc].in.removeEventListener('onclose',ⵌ.onclose);
							ⵌ.ᨖ.sub[pc].in.removeEventListener('onmessage',ⵌ.onmessage);
							ⵌ.ᨖ.sub[pc].in.close();
							ⵌ.ᨖ.sub[pc].in=null;
							delete ⵌ.ᨖ.sub[pc].in;
							ⵌ.ᨖ.sub[pc].removeEventListener('onicecandidate',ⵌ.ᨖ.sub[pc].event.onicecandidate);
							ⵌ.ᨖ.sub[pc].removeEventListener('onnegotiationneeded',ⵌ.ᨖ.sub[pc].event.onnegotiationneeded);
							ⵌ.ᨖ.sub[pc].removeEventListener('onsignalingstatechange',ⵌ.ᨖ.sub[pc].event.onsignalingstatechange);
							ⵌ.ᨖ.sub[pc].removeEventListener('ondatachannel',ⵌ.ᨖ.sub[pc].event.ondatachannel);
							ⵌ.ᨖ.sub[pc].removeEventListener('onaddstream',ⵌ.ᨖ.sub[pc].event.onaddstream);
							ⵌ.ᨖ.sub[pc].removeEventListener('onremovestream',ⵌ.ᨖ.sub[pc].event.onremovestream);
							if(ⵌ.ᨖ.sub[rid].localstream){
								ⵌ.ᨖ.sub[rid].localstream.stop();
								ⵌ.ᨖ.sub[rid].removeStream(ⵌ.ᨖ.sub[rid].localstream);
								ⵌ.ᨖ.sub[rid].localstream=null;
								delete ⵌ.ᨖ.sub[rid].localstream;
								}
							ⵌ.ᨖ.sub[pc].close();
							ⵌ.ᨖ.sub[pc]=null;
							delete ⵌ.ᨖ.sub[pc];
							}
						return;
						};
					//ᛏ.on('server:qr',function(q){//client found a new qr from the server
					//	ⵌ.VAR(q.split(',')[0],q);//block|number, orginal msg
					//	q=null;
					//	return;
					//	});
					ⵌ.ȿ.listen();
					return;}
					};
























			var U={//user
				uid:undefined
			,	pid:undefined
			,	e:undefined
			,	n:undefined
			,	x:0
			,	y:0
			, startup:function(){
				$('#btn-login-ok').on('click',function(){//click ok
					$(this).hide();
					var that=document.getElementById('edit-login');
					document.getElementById('recaptcha-login').innerHTML='';
					if(ʃ.email(that.value)){
						//grecaptcha.render('recaptcha-login',{'sitekey':'6LeIkQkTAAAAAPa1vjV62YmKBipviuENdgEv6y4T','callback':function(response){
							var response='todo delete me';
							delete s[1].WHEN['svr:ok.li:uzr'];
							s[1].WHEN['svr:ok.li:uzr']=function(){
								$.localStorage.setItem('li',U.uid);
								$('.sub-login').append(
									 '<div id="wait-for-login" style="position:absolute;top:0px;left:0px;width:184px;height:280px;text-align:center;padding:10px;background-color:inherit;">'
									+	'<h1><span id="d789"style="color:#ED9900;">...</span>⌛ Waiting<span id="d123">...</span><span id="d456"style="color:#ED9900;"></h1>'
									+	'<br>'
									+	'A Special login QR code has been sent to your email address. To procced, open your email in a new tab, scan it and your mobile device will load your account into this tab.'
									+'</div>'
									);
								window.ddd=setInterval(
									function(){
										var d123=document.getElementById('d123'),d456=document.getElementById('d456');
										if((n=d123.innerText.length)<3){d123.innerText+='.';d456.innerText=d456.innerText.slice(1);}else{d123.innerText='';d456.innerText='...';}
										},1000);};
							delete s[1].WHEN['svr:istab.li:uzr:'+U.uid];
							s[1].WHEN['svr:istab.li:uzr:'+U.uid]=function(d){
								$.localStorage.removeItem('li');

							//	pid:-1									//pid
							//,	ip:'00.00.000.000'						//current ip
							//,	u:'01234567890YTDRVYtyfr'				//current unique computer id
							//,	a:'unix+random16alphaNumeric'			//auth string and remember me matches local storage item
							//,	e:'me@example.com'						//email
							//,	n:'ben.muircroft'						//screen name
							//,	t:[]									//tags interests
							//,	b:[]									//badges
							//,	r:0										//rep
							//,	l:01234556789							//last logged in

								window.alert('Welcome back '+Σ.cammel(d.n)+'!');
								};
							s[1].WIRE('uzr:set.li:svr',{em:that.value,r:response,face:ⵌ.face});
							return;
							/*}});*/}
						else{document.getElementById('recaptcha-login').innerHTML='<div style="text-align:center;padding:4px;margin-top:-5px;background:#DE2D2D;width:294px;font-size:22px;height:28px;line-height:29px;">This email is invalid</div>';}
						});
				s[1].WHEN['=']=function(_){
					console.log('=');
					U.uid=_;//computer uniq id
					U.pid=-1;//you are not loggedin yet
					ⵌ.listen();
					if(document.location.href.indexOf('?')!=-1){Φ.fromurl();}
					else{Φ.go();}
					//β.ONE('0|26');
					};
				s[1].WIRE('?',$.localStorage.getItem('li'));//APPOFF
				$.localStorage.removeItem('li');
				return;
				}
			};'> startup >';U.startup();







			console.log('KilrBit is stable..');

			window.β=β;//TODO remove these
			window.Φ=Φ;
			window.Qミ=Qミ;
			window.$=$;
			window.QR=QR;
			window.ɣ=ɣ;
			window.ui=ui;
			window.U=U;






















	/*Null*///}})();NULL=null;



	}//'< main env <'
else if(env=='login'){//user is on a mobile phone
	//null transport of auth to server from device
	//main env should be waiting for the Li event to initiate null with the server
	//then you can start buying qrs
	s[1].RAW('>Li');//setup null
	loader.done();
	}//'< login env <'
else if(env=='scan'){}//'< scan env <'
}//'< init <'
