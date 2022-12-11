window.nonce="AlWwDwFo1Xqz1KjjzlyqoI";
window.init=function(s,G,loader){
	init=null;

	const prvc={};



		//"use strict";
		var originalObject=Object;
		var originalDefProp=Object.defineProperty;
		var originalCreate=Object.create;
		function defProp(obj,name,value){
		    if(originalDefProp)try{
		            originalDefProp.call(originalObject,obj,name,{ value:value});
		            }
		        catch(definePropertyIsBrokenInIE8){
		            obj[name]=value;
		            }
		        else{
		            obj[name]=value;
		            }}
		function makeSafeToCall(fun){
		    if(fun){
		        defProp(fun,"call",fun.call);
		        defProp(fun,"apply",fun.apply);
		        }
		    return fun;
		    }
		makeSafeToCall(originalDefProp);
		makeSafeToCall(originalCreate);
		var hasOwn=makeSafeToCall(Object.prototype.hasOwnProperty);
		var numToStr=makeSafeToCall(Number.prototype.toString);
		var strSlice=makeSafeToCall(String.prototype.slice);
		var cloner=function(){};
		function create(prototype){
		    if(originalCreate){
		        return originalCreate.call(originalObject,prototype);
		        }
		    cloner.prototype=prototype||null;
		    return new cloner;
		    }
		var rand=Math.random;
		var uniqueKeys=create(null);
		function unik(xxx){
		    do var uniqueKey=(xxx)?xxx:strSlice.call(numToStr.call(rand(),36),2);
		    while (hasOwn.call(uniqueKeys,uniqueKey));
		    return uniqueKeys[uniqueKey]=uniqueKey;
		    }
		defProp(prvc,"unik",unik);
		var originalGetOPNs=Object.getOwnPropertyNames;
		Object.getOwnPropertyNames=function getOwnPropertyNames(object){
		    for(varnames=originalGetOPNs(object),src=0,dst=0,len=names.length;src<len;++src){
		        if(!hasOwn.call(uniqueKeys,names[src])){
		            if(src>dst){
		                names[dst]=names[src];
		                }
		            ++dst;
		            }}
		    names.length=dst;
		    return names;
		    };
		function defaultCreatorFn(object){
		    return create(null);
		    }
		function ___(secretCreatorFn){
		    var brand=unik();
		    var passkey=create(null);
		    secretCreatorFn=secretCreatorFn||defaultCreatorFn;
		    function register(object){
		        var secret;
		        function vault(key,forget){
		            if(key===passkey){
		            return forget?secret=null:secret||(secret=secretCreatorFn(object));
		            }}
		        defProp(object,brand,vault);
		        }
		    function accessor(object){
		        if(!hasOwn.call(object,brand))
		            register(object);
		        return object[brand](passkey);
		        }
		    accessor.forget=function(object){
		    if(hasOwn.call(object,brand))
		        object[brand](passkey, true);
		        };
		    return accessor;
		    }
		defProp(prvc, "___", ___);




	var NULL=(function(){
		function eve(attacktype){('log '+attacktype);}
		function browser(){return (typeof(module)==='undefined')&&(typeof(window)!=='undefined');}
		const f=forge;
		var o={};
		var prv=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
		var pub=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
		var aes=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
		function e(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i+=1){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i+=1){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
		function d(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i+=1){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[(j+=1)]=b16_map[data.substr(i,2)];}return result.join('');}
		function xAES(){
			loader.log(loader.bar?(14):'got full AES');
			var mx='';
			for(var i=0;i<o[aes].njs.length;i+=1){mx=mx+(o[aes].njs[i])+(o[aes].win[i]);}
			var st='';
			for(var i=0;i<o[aes].win.length;i+=1){mx=mx+(o[aes].win[i])+(o[aes].njs[i]);}
			o[aes].key=f.pkcs5.pbkdf2(mx,st,10000,32);
			REWIRE();
			}
		function eAES(msg){
			('log proof sent: '+o[aes].num);
			msg.PROOF=o[aes].num;
			var ci=f.cipher.createCipher('AES-CBC',o[aes].key);
			ci.start({'iv':o[aes].win+o[aes].njs});
			ci.update(f.util.createBuffer(JSON.stringify(msg),'utf8'));
			ci.finish();
			return ci.output.toHex();
			}
		function dAES(msg){
			var ci=f.cipher.createDecipher('AES-CBC',o[aes].key);
			ci.start({'iv':o[aes].win});
			ci.update(f.util.createBuffer(f.util.hexToBytes(msg)));
			ci.finish();
			if(ci.output.length()===0){eve('eve: Remote Function Call Code Injection attempt');}
			else{
				msg=JSON.parse(ci.output.toString('utf8'));
				('log expected: '+o[aes].exp+' msg.proof: '+msg.PROOF);
				if(msg.PROOF){if(msg.PROOF===o[aes].exp){delete msg['PROOF'];return msg;}else{eve('eve: dAES proof incorrect');}}
				else{eve('eve: dAES without proof');}
				}}
		Object.defineProperty(o,aes,{value:{'win':false,'njs':false,'num':false,'exp':false,'key':false},enumerable:false});
		s[0].WHEN['swapAES']=function(_){
			delete s[0].WHEN['swapAES'];
			loader.log(loader.bar?(13):'swapAES');
			setTimeout(function(_){
				var oo=f.util.decode64(_.oo);
				oo=[oo.slice(0,50),oo.slice(50,100),oo.slice(100,150),oo.slice(150,200)];
				o[aes].win=o[pub].key.decrypt(oo[2])+''+o[prv].key.decrypt(oo[3]);
				o[aes].num=o[pub].key.decrypt(oo[0])+''+o[prv].key.decrypt(oo[1]);
				_=oo=null;
				if((o[aes].win)&&(o[aes].njs)){xAES();}
				},0,_);};
		function setAES(){
			function O9(){var R=(Math.floor((Math.random()*9))).toString();expect=expect+R;return R;}
			var oo=f.util.bytesToHex(f.random.getBytesSync(32));
			o[aes].njs=oo;
			var expect='';
			var oo=f.util.encode64(
				o[prv].loc.encrypt(O9()+O9())
			+	o[pub].loc.encrypt(O9()+O9())
			+	o[prv].loc.encrypt(oo.slice(0,Math.floor(oo.length/2)))//+'&&'
			+	o[pub].loc.encrypt(oo.slice(  Math.floor(oo.length/2)))
				);
			o[aes].exp=expect;
			expect=null;
			s[0].WIRE('swapAES',{oo:oo});
			oo=null;
			}
		var pvBEGIN='-----BEGIN RSA PRIVATE KEY-----'
		,	pvEND='-----END RSA PRIVATE KEY-----'
		,	pbBEGIN='-----BEGIN PUBLIC KEY-----'
		,	pbEND='-----END PUBLIC KEY-----';
		s[0].WHEN['quadRSA']=function(_){
			delete s[0].WHEN['quadRSA'];
			loader.log(loader.bar?(12):'quadRSA');
			setTimeout(function(_){
				_.lnk=_.lnk.split('$');
				Object.defineProperty(o,pub,{value:{
					'key':f.pki.privateKeyFromPem(pvBEGIN+(_.lnk[0])+pvEND)
				,	'loc':f.pki.publicKeyFromPem(pbBEGIN+(_.lnk[1])+pbEND)
					},enumerable:false});
				setAES();
				},0,_);};
		s[0].goNULLd=function(){
			loader.log(loader.bar?(11):'NULLifying');
			delete s[0].goNULLd;
			var k1=f.pki.rsa.generateKeyPair({bits:400,e:0x10001});
			var k2=f.pki.rsa.generateKeyPair({bits:400,e:0x10001});
			var prvloc=k1.publicKey;
			var pubkey=k1.privateKey;
			k1=null;
			var publoc=k2.publicKey;
			var prvkey=k2.privateKey;
			k2=null;
			Object.defineProperty(o,prv,{value:{
				'key':prvkey
			,	'loc':prvloc
				},enumerable:false});
			pubkey=(f.pki.privateKeyToPem(pubkey).toString().replace(pvBEGIN,'').replace(pvEND,''));
			publoc=(f.pki.publicKeyToPem(publoc).toString().replace(pbBEGIN,'').replace(pbEND,''));
			(function(){
				var cp=(pubkey+'$'+publoc);
				pubkey=publoc=null;
				setTimeout(function(loader){
					loader.log(loader.bar?(15):'1/2 step');
				},1500,loader);
				s[0].WIRE('quadRSA',{'lnk':cp});
				})();};
		function REWIRE(){
			var NULL=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
			Object.defineProperty(s[0],NULL,{value:{
				WIRE:function(func,data){
					if(data){data.nonce=nonce;}else{data={nonce:nonce};}//data must be an object
					s[0].WIRE('ᴎ',eAES({'f':func,'d':data}));
					}
			,	WHEN:[]
				},enumerable:false});
			var X='x',Y=1;
			s[0].WHEN['ᴎ']=function(_){
				_=dAES(_);
				if(_.f=='eve'){var v=X;while(Y){v+=X;}}
				if(_&&s[0][NULL].WHEN[_.f]){s[0][NULL].WHEN[_.f](_.d,_.f);}else{"console.log('no function s[0][NULL].WHEN['+_.f+']',_.d)";}
				};

			console.log('in');


			$('#LOADER').remove();
			if(G.app=='retweeter'){
				var timer,child,check,row,url;
				//create a backlink button (it will create an embed code with back link and feature @username and get the @usernames tweets first)
				//<frame id="https://methodise.me/retweeter/?screen_name" src="436" width="336" height=""><iframe>
				//<a href="https://methodise.me" target="_blank" rel="external">methodise.me</a>
				//needs to check if the webpage contains the backlink each time on load ...
				//cwindow.parent.location get html check indexof <a href="https://methodise.me" target="_blank" rel="external">methodise.me</a>
				function check_timeline(usernamename,tweetlink,cb){
					$.get('https://methodise.me/middleman.php?site=https://twitter.com/'+username,function(d){
						$('#timeline').html(d);
						var retweets=$('#timeline').find('.QuoteTweet-link');
						var found=false;
						for(var i=0,length=retweets.length;i+=1){
							if(retweets[i].href=='https://twitter.com/'+username+'/status/'+tweetlink){
								found=true;
								break;
								}}
						$('#timeline').html('');
						cb(found);
						});}
				function get_more(){
					s[0][NULL].WIRE('usr:get_more_tweets:svr',{});
					return;
					}
				s[0][NULL].WHEN['svr:retweeter_user_status:usr']=function(d){
					if(d.row){
						$('.timer'+d.row).hide();
						$('.'+d.image+d.row).show();
						}
					$('.tweet').removeClass('busy');
					if(d.points){$('#points').text(d.points);}
					if(d.tweets){
						$('.rows,.tick,.cross').hide();
						$('.tweet,.view').removeClass('done');
						if(d.tweets[0]){
							$('#row0').show();
							$('#view0').attr({'href':'https://mobile.twitter.com/'+d.tweets[0].username+'/status/'+d.tweets[0].tweetlink});
							$('#tweet0').one('click',function(){
								row=$(this).attr('id').replace('tweet','');
								$('.tweet').addClass('busy');
								url='https://twitter.com/intent/retweet?tweet_id='+d.tweets[0].tweetlink;
								check=function(){
								    if(child.closed||child.location!==url){
										$('#tweet0,#timer0').toggle();
										$('#tweet0,#view0').addClass('done');
								        clearInterval(timer);
										if(child.location!==url){
											$('#timer0,#cross0').toggle();
											return false;
											}
										$('#timer0,#tick0').toggle();
										check_timeline(G.username,d.tweets[0].tweetlink,function(has){
											if(has){$('#timer0,#tick0').toggle();}
											s[0][NULL].WIRE('usr:retweeter_check_retweeted:svr',{retweetedlink:d.tweets[0].username+'+'+d.tweets[0].tweetlink,row:row,result:has});
											});}}
								clearInterval(timer);
								child=window.open(url,'','toolbar=0,status=0,width=600,height=400');
								timer=setInterval(check,500);
								});}
						if(d.tweets[1]){
							$('#row1').show();
							$('#view1').attr({'href':'https://mobile.twitter.com/'+d.tweets[1].username+'/status/'+d.tweets[1].tweetlink});
							$('#tweet1').one('click',function(){
								row=$(this).attr('id').replace('tweet','');
								$('.tweet').addClass('busy');
								url='https://twitter.com/intent/retweet?tweet_id='+d.tweets[1].tweetlink;
								check=function(){
								    if(child.closed||child.location!==url){
										$('#tweet1,#timer1').toggle();
										$('#tweet1,#view1').addClass('done');
								        clearInterval(timer);
										if(child.location!==url){
											$('#timer1,#cross1').toggle();
											return false;
											}
										check_timeline(G.username,d.tweets[1].tweetlink,function(has){
											if(has){$('#timer1,#tick1').toggle();}
											s[0][NULL].WIRE('usr:retweeter_check_retweeted:svr',{retweetedlink:d.tweets[1].username+'+'+d.tweets[1].tweetlink,row:row,result:has});
											});}}
								clearInterval(timer);
								child=window.open(url,'','toolbar=0,status=0,width=600,height=400');
								timer=setInterval(check,500);
								});}
						if(d.tweets[2]){
							$('#row2').show();
							$('#view2').attr({'href':'https://mobile.twitter.com/'+d.tweets[2].username+'/status/'+d.tweets[2].tweetlink});
							$('#tweet2').one('click',function(){
								row=$(this).attr('id').replace('tweet','');
								$('.tweet').addClass('busy');
								url='https://twitter.com/intent/retweet?tweet_id='+d.tweets[2].tweetlink;
								check=function(){
								    if(child.closed||child.location!==url){
										$('#tweet2,#timer2').toggle();
										$('#tweet2,#view2').addClass('done');
								        clearInterval(timer);
										if(child.location!==url){
											$('#timer2,#cross2').toggle();
											return false;
											}
										check_timeline(G.username,d.tweets[2].tweetlink,function(has){
											if(has){$('#timer2,#tick2').toggle();}
											s[0][NULL].WIRE('usr:retweeter_check_retweeted:svr',{retweetedlink:d.tweets[2].username+'+'+d.tweets[2].tweetlink,row:row,result:has});
											});}}
								clearInterval(timer);
								child=window.open(url,'','toolbar=0,status=0,width=600,height=400');
								timer=setInterval(check,500);
								});}}
						$('#get_more').one('click',function(){getmore();});
						};
				s[0][NULL].WIRE('usr:retweeter_start:svr',{username:G.username,tweetlink:G.tweetlink});
				$('#frame1').hide();
				$('#frame2').show();
				}

		console.log('end');


/*Null*/}
s[0].syncd.gotscript=true;
if(s[0].readyState==1){
	loader.log(loader.bar?(10):'::got-script;;');
	s[0].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::got-script;;'}}));
	if(s[0].syncd.nullready){s[0].goNULLd();}
	}
else{console.log('ɦ::got-script;;','ERR_NOT_READY');}
})();NULL=null;




};//end-init
