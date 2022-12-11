module.exports=function(s,G){
/*
	process.on('uncaughtException',function(ERROR){
		ERROR=ERROR.stack;
		//console.log({ALERT:'CRASH',error:ERROR},'@crash.'+'S.me.js');
		console.log(ERROR);
		});

	throw new Error('boom');
*/



					var NULL=(function(){
						function eve(attacktype){
							console.log({
								attacktype:attacktype
							,	user:(U||{id:'unknown'}).id
								},'@eve.'+NAME);
							G.BAN.ip(s[0],'eve: '+attacktype);
							}
						Array.prototype.pull=function(){var what,a=arguments,L=a.length,ax;while(L&&this.length){what=a[(L-=1)];while((ax=this.indexOf(what))!==-1){this.splice(ax,1);}}return this;};
						const f=require(__dirname+'/../node_modules/node-forge');
						const prvc=require(__dirname+'/../benz_modules/private');
						function browser(){return (typeof(module)==='undefined')&&(typeof(window)!=='undefined');}
						var o={};
						var prv=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
						var pub=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
						var aes=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
						function e(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i+=1){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i+=1){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
						function d(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i+=1){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[(j+=1)]=b16_map[data.substr(i,2)];}return result.join('');}
						function xAES(){
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
							if(s[0].pv=='::quadRSA;;'){s[0].pv='::swapAES;;';
								var oo=f.util.decode64(_.oo);
								oo=[oo.slice(0,50),oo.slice(50,100),oo.slice(100,150),oo.slice(150,200)];
								try{o[aes].njs=o[pub].key.decrypt(oo[2])+''+o[prv].key.decrypt(oo[3]);}catch(er){console.error(er);}
								try{o[aes].num=o[pub].key.decrypt(oo[0])+''+o[prv].key.decrypt(oo[1]);}catch(er){console.error(er);}
								_=oo=null;
								if((o[aes].win)&&(o[aes].njs)){xAES();}
								}
							else{G.BAN.ip(s[0],'previous function expected ::quadRSA;; not '+s[0].pv);}};
						function setAES(){
							function O9(){var R=(Math.floor((Math.random()*9))).toString();expect=expect+R;return R;}
							var oo=f.util.bytesToHex(f.random.getBytesSync(32));
							o[aes].win=oo;
							var expect='';
							var oo=f.util.encode64(
								o[prv].loc.encrypt(O9()+O9())
							+	o[pub].loc.encrypt(O9()+O9())
							+	o[prv].loc.encrypt(oo.slice(0,Math.floor(oo.length/2)))
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
							if(['::got-script;;','::rewire-ready;;'].indexOf(s[0].pv)!==-1){s[0].pv='::quadRSA;;';
								(function(){
									var k1=f.pki.rsa.generateKeyPair({bits:400,e:0x10001});//896
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
										s[0].WIRE('quadRSA',{'lnk':cp});
										return;
										})();
									return;
									})();
								_.lnk=_.lnk.split('$');
								Object.defineProperty(o,pub,{value:{
									'key':f.pki.privateKeyFromPem(pvBEGIN+(_.lnk[0])+pvEND)
								,	'loc':f.pki.publicKeyFromPem(pbBEGIN+(_.lnk[1])+pbEND)
									},enumerable:false});
								setAES();
								}
							else{G.BAN.ip(s[0],'previous function expected ::got-script;; or ::rewire-ready;; not '+s[0].pv);}
							};
						function REWIRE(){
							var NULL=prvc.unik(f.util.bytesToHex(f.random.getBytesSync(32)));
							Object.defineProperty(s[0],NULL,{value:{
								WIRE:function(func,data){s[0].WIRE('ᴎ',eAES({'f':func,'d':data}));}
							,	WHEN:[]
								},enumerable:false});
							var lf=undefined;//last function;
							var tf=0;//time of last function;
							var rf=30;//restriction time between function calls
							var cf=0;//count;
							s[0].WHEN['ᴎ']=function(_){
								try{_=dAES(_);}catch(ERROR){
									console.log({
										error:ERROR
									,	h:'here'
									,	d:_
								},'@ᴎ.NULL');
									}
								if(_.f==lf){
									if(+new Date()-tf<rf){cf+=1;}
									if(cf>6){
										s[0][NULL].WIRE('eve');//crash eve
										G.BAN.ip(s[0],'crash eve because last call '+lf+' this call '+_.f+' in '+(+new Date()-tf)+' milliseconds',_.f,_.d);
										}}
								else{
									cf=0;
									}
								tf=+new Date();
								lf=_.f;
								if(_){
									if(s[0].nonce){
										if(s[0].nonce===_.d.nonce){
											delete _.d.nonce;
											try{s[0][NULL].WHEN[_.f](_.d);}catch(e){console.log('catch error: ',e,_.f,_.d);}
											}
										else{
											G.BAN.ip(s[0],'expected nonce '+s[0].nonce,_.f,_.d);
											}
										}
									else{
										G.BAN.ip(s[0],'not using NULL(ed)',_.f,_.d);
										}}
								else{
									G.BAN.ip(s[0],'no data',_.f,_.d);
									}};
							s[0].NULL=NULL;//for secure UZR
							s[0][NULL].WHEN['0']=function(){s[0][NULL].WIRE('0',+new Date());}//pingpong




							s[0][NULL].WHEN['usr:visit:svr']=function(d){
								console.dir({'visit':d});
								};



							s[0][NULL].WHEN['usr:publish:svr']=function(d){
								G.publish(d,function(result){
									s[0][NULL].WIRE('svr:published:usr',{result:result});
									});};



							s[0][NULL].WHEN['usr:unpublish:svr']=function(d){
								G.unpublish(d,function(result){
									s[0][NULL].WIRE('svr:unpublished:usr',{result:result});
									});};


							s[0][NULL].WHEN['usr:click_star:svr']=function(d){
								G.star_page(d,function(d){
									s[0][NULL].WIRE('svr:toggle_star:usr',d);
									});};


							s[0][NULL].WHEN['usr:pages_exist?:svr']=function(d){
								G.are_pages_unpublished(d,function(r){
									s[0][NULL].WIRE('usr:pages_unpublished:svr',r);
									});};



							s[0][NULL].WHEN['usr:check_address:svr']=function(d){
								s[0][NULL].WIRE('svr:checked_address:usr',{taken:(G.cache[d.address]?true:false)});
								};



							s[0][NULL].WHEN['usr:swap_admin:svr']=function(d){
								G.swap_admin(d,function(result){
									s[0][NULL].WIRE('svr:swapped_admin:usr',{result:result});
									});};


							s[0][NULL].WHEN['usr:lock_page:svr']=function(d){
								G.lock(d);
								};


							s[0][NULL].WHEN['usr:get_alerts:svr']=function(d){
								G.get_alerts(d,function(r){
									s[0][NULL].WIRE('svr:got_alerts:usr',r);
									});};



							s[0][NULL].WHEN['usr:find_gifted_page:svr']=function(d){
								G.find_gifted_page(d,function(r){
									s[0][NULL].WIRE('svr:found_gifted:usr',d);
									});};



							s[0][NULL].WHEN['usr:safekey+sig:svr']=function(d){
								s[0][NULL].WIRE('svr:safekey+sig:usr',{safekey:G.aes.en(d.key),sig:G.aes.en(d.key+'¬'+d.mines+'¬'+d.donate)});
								};


							s[0][NULL].WHEN['usr:change_published_address:svr']=function(d){
								G.change_published_address(d);
								};



							s[0][NULL].WHEN['usr:page_hashed:svr']=function(d){
								G.page_hashed(d);
								};


							s[0][NULL].WHEN['usr:omine_update_estimate:svr']=function(d){
								G.omine_update_estimate(d);
								};


							s[0][NULL].WHEN['usr:get_prefaces:svr']=function(d){
								G.get_prefaces(d,function(r){
									s[0][NULL].WIRE('svr:got_prefaces:usr',{prefaces:r});
									});
								};



							s[0][NULL].WHEN['usr:new_rabbit:svr']=function(d){//add it to the pages board
								G.new_rabbit(d);
								};


							s[0][NULL].WHEN['usr:eraser:svr']=function(d){//delete a rabbit (no state change [not blocked] just silently deleted!) only happens if you own the page
								G.eraser(d);
								};


							s[0][NULL].WHEN['usr:update_xy_rabbit:svr']=function(d){
								G.update_xy_rabbit(d);
								};



							s[0][NULL].WHEN['usr:mod_link:svr']=function(d){
								G.mod_link(d);
								};



					/*Null*/}
					try{s[0].send('ʲ'+JSON.stringify({f:'ɦ',d:{h:'::null-loaded;;'}}));}catch(ERROR){console.log({error:ERROR,f:f,d:d},'@::null-loaded;;.'+NAME);}
				})();NULL=null;





};//exports
