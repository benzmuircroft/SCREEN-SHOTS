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
	//
//console.dir(loader);


function init(s,G,loader,env){
	if(env=='main'){}//'< main env <'
	else if(env=='login'){
		//user is on a mobile phone
		//null transport of auth to server from device
		//main env should be waiting for the Li event to initiate null with the server
		//then you can start buying qrs
		s[1].WHEN['!']=function(){
			s[1].RAW('mob:nullli:svr');
			try{
			var NULL=(function(){loader.log('Setting up null transport tunnel');function eve(attacktype){('log '+attacktype);}function browser(){return (typeof(module)==='undefined')&&(typeof(window)!=='undefined');}const f=forge;var o={};var prv=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));var pub=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));var aes=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));function e(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}function d(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}function xAES(){loader.log('AES exchange');var mx='';for(var i=0;i<o[aes].njs.length;i++){mx=mx+(o[aes].njs[i])+(o[aes].win[i]);}var st='';for(var i=0;i<o[aes].win.length;i++){mx=mx+(o[aes].win[i])+(o[aes].njs[i]);}o[aes].key=f.pkcs5.pbkdf2(mx,st,10000,32);REWIRE();}function eAES(msg){loader.log('AES proof sent'/*+o[aes].num*/);msg.PROOF=o[aes].num;var ci=f.cipher.createCipher('AES-CBC',o[aes].key);ci.start({'iv':o[aes].win+o[aes].njs});ci.update(f.util.createBuffer(JSON.stringify(msg),'utf8'));ci.finish();return ci.output.toHex();}function dAES(msg){var ci=f.cipher.createDecipher('AES-CBC',o[aes].key);ci.start({'iv':o[aes].win});ci.update(f.util.createBuffer(f.util.hexToBytes(msg)));ci.finish();if(ci.output.length()===0){eve('eve: Remote Function Call Code Injection attempt');}else{msg=JSON.parse(ci.output.toString('utf8'));loader('AES recieved proof'/*+o[aes].exp+', proof: '+msg.PROOF*/);if(msg.PROOF){if(msg.PROOF===o[aes].exp){delete msg['PROOF'];return msg;}else{eve('eve: dAES proof incorrect');}}else{eve('eve: dAES without proof');}}}Object.defineProperty(o,aes,{value:{'win':false,'njs':false,'num':false,'exp':false,'key':false},enumerable:false});s[1].WHEN['swapAES']=function(_){delete s[1].WHEN['swapAES'];var oo=d(_.oo).split('&&');var temp='',proof='';var i=1;for(i;i<=16;i++){var sec=o[prv].key.decrypt(f.util.decode64(oo[i]));if(sec.indexOf('@@')!==0){break;}else{temp=temp+(sec.replace('@@',''));}}if(i!==(16+1)){eve('eve: swapAES level 1 bad length');}else{oo=d(temp).split('$$');temp='';i=1;for(i;i<=4;i++){var sec=o[pub].key.decrypt(f.util.decode64(oo[i]));if(sec.indexOf('##')!==1){break;}else{sec=sec.split('##');temp=temp+sec[1];proof=proof+(sec[0]).toString();}}if(i!==(4+1)){eve('eve: swapAES level 2 bad length');}else{if(browser()){o[aes].njs=temp;}else{o[aes].win=temp;}o[aes].num=proof;_=temp=proof=i=oo=null;if((o[aes].win)&&(o[aes].njs)){xAES();}}}};function setAES(){function O9(){var R=(Math.floor((Math.random()*9))).toString();expect=expect+R;return R;}var oo=f.util.bytesToHex(f.random.getBytesSync(32));if(browser()){o[aes].win=oo;}else{o[aes].njs=oo;}var expect='';oo=e('$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring(0,(oo.length/4))))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4),(oo.length/4)*2)))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4)*2,(oo.length/4)*3)))+'$$'+f.util.encode64(o[prv].loc.encrypt((O9()+'##')+oo.substring((oo.length/4)*3))));oo=e('&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring(0,(oo.length/16))))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16),(oo.length/16)*2)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*2,(oo.length/16)*3)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*3,(oo.length/16)*4)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*4,(oo.length/16)*5)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*5,(oo.length/16)*6)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*6,(oo.length/16)*7)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*7,(oo.length/16)*8)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*8,(oo.length/16)*9)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*9,(oo.length/16)*10)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*10,(oo.length/16)*11)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*11,(oo.length/16)*12)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*12,(oo.length/16)*13)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*13,(oo.length/16)*14)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*14,(oo.length/16)*15)))+'&&'+f.util.encode64(o[pub].loc.encrypt(('@@')+oo.substring((oo.length/16)*15))));o[aes].exp=expect;expect=null;(function(){var cp=oo.toString();oo=null;s[1].WIRE('swapAES',{'oo':cp});})();}var pvBEGIN='-----BEGIN RSA PRIVATE KEY-----',pvEND='-----END RSA PRIVATE KEY-----',pbBEGIN='-----BEGIN PUBLIC KEY-----',pbEND='-----END PUBLIC KEY-----';s[1].WHEN['quadRSA']=function(_){delete s[1].WHEN['quadRSA'];_.lnk=_.lnk.split('$');Object.defineProperty(o,pub,{value:{'key':f.pki.privateKeyFromPem(pvBEGIN+d(_.lnk[0])+pvEND),'loc':f.pki.publicKeyFromPem(pbBEGIN+d(_.lnk[1])+pbEND)},enumerable:false});setAES();};(function(){var k1=f.pki.rsa.generateKeyPair({bits: 896,e:0x10001});var k2=f.pki.rsa.generateKeyPair({bits: 896,e:0x10001});var prvloc=k1.publicKey;var pubkey=k1.privateKey;k1=null;var publoc=k2.publicKey;var prvkey=k2.privateKey;k2=null;Object.defineProperty(o,prv,{value:{'key':prvkey,'loc':prvloc},enumerable:false});pubkey=(f.pki.privateKeyToPem(pubkey).toString().replace(pvBEGIN,'').replace(pvEND,''));publoc=(f.pki.publicKeyToPem(publoc).toString().replace(pbBEGIN,'').replace(pbEND,''));(function(){var cp=(e(pubkey)+'$'+e(publoc));pubkey=publoc=null;s[1].WIRE('quadRSA',{'lnk':cp});})();})();function REWIRE(){var NULL=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));Object.defineProperty(s[1],NULL,{value:{WIRE:function(func,data){s[1].WIRE('ᴎ',eAES({'f':func,'d':data}));},WHEN:[]},enumerable:false});s[1].WHEN['ᴎ']=function(_){_=dAES(_);if(_){try{s[1][NULL].WHEN[_.f](_.d);}catch(e){console.log(e);console.log('ERROR on try: EVENT '+_.f+' FROM s['+this.sid+']');console.dir(_);}}};
				var auth,href=document.location.href;
				if(href.indexOf('?')){
					auth=href.split('?')[1];
					}
				if(auth){
					s[1].WHEN['svr:oktab.li:mob']=function(d){
						delete s[1].WHEN['svr:oktab.li:mob'];
						delete s[1].WHEN['svr:notab.li:mob'];
						delete s[1].WHEN['svr:404.li:mob'];
						$('body').append(
							 '<div style="position:fixed;bottom:0px;left:0px;font-size:30px;text-align:center;z-index:99999999;width:100%;height:100%;color:#000;font-weight:bold;background:#ED9900;">'
							+	'<img src="'+d.face+'"/><br><br>'+d.nm
							+'</div>'
							);
						};
					s[1].WHEN['svr:notab.li:mob']=function(){
						delete s[1].WHEN['svr:notab.li:mob'];
						delete s[1].WHEN['svr:oktab.li:mob'];
						delete s[1].WHEN['svr:404.li:mob'];
						$('body').append(
							 '<div style="position:fixed;bottom:0px;left:0px;font-size:30px;text-align:center;z-index:99999999;width:100%;height:100%;color:#000;font-weight:bold;background:#ED9900;">'
							+	"This device could not find any kilrbit tab on your browser. Please open kilrbit.com on the browser that you originally requested login from. Once you are ready and killrbit has fully loaded tap 'try again'."
							+	'<div class="btn-try-again" style="background:#3BA91C;width:80%;"></div>'
							+'</div>'
							);
						$('.btn-try-again').on('click',function(){
							s[1][NULL].WIRE('mob:tryli:svr',{auth:auth});
							});};
					s[1].WHEN['svr:404.li:mob']=function(){
						delete s[1].WHEN['svr:404.li:mob'];
						delete s[1].WHEN['svr:oktab.li:mob'];
						delete s[1].WHEN['svr:notab.li:mob'];
						$('body').append(
							 '<div style="pointer-events:none;position:fixed;bottom:0px;left:0px;font-size:30px;text-align:center;z-index:99999999;width:100%;height:100%;color:#FFF;font-weight:bold;background:#2E2D33;">'
							+	"Login expired."
							+'</div>'
							);};
					s[1][NULL].WIRE('mob:tryli:svr',{auth:auth});
					//loader.log('You have been successfully logged in.');
					}
				}})();NULL=null;}catch(e){console.dir(e);}};
		}//'< login env <'
	else if(env=='scan'){}//'< scan env <'
}//'< init <'