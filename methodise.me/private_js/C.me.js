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



			var save=function(reason){
                if(window.stop){console.log('save ...',reason);}
                if(G.me.backup&&G.ec){G.ec.set('me',JSON.stringify(G.me));}
                else{$.localStorage.setItem('me',JSON.stringify(G.me));}
				G.saved();
                return;
                };


			setTimeout(function(loader){loader.done();},1000,loader);


			if(!G.me.stars){G.me.stars=[];}

			$('body').on('mouseenter','.found_star',function(){
				if($(this).attr('src')=='https://methodise.me/R/starred.png'){
					$(this).attr({'src':'https://methodise.me/R/unstar.png'})
					}});
			$('body').on('mouseleave','.found_star',function(){
				if($(this).attr('src')=='https://methodise.me/R/unstar.png'){
					$(this).attr({'src':'https://methodise.me/R/starred.png'})
					}});
			$('body').on('mouseenter','#remember_page',function(){
				if($(this).find('img').attr('src')=='https://methodise.me/R/starred.png'){
					$(this).find('img').attr({'src':'https://methodise.me/R/unstar.png'})
					}});
			$('body').on('mouseleave','#remember_page',function(){
				if($(this).find('img').attr('src')=='https://methodise.me/R/unstar.png'){
					$(this).find('img').attr({'src':'https://methodise.me/R/starred.png'})
					}});







			if(G.me.publisher_key&&!G.editing){
				s[0][NULL].WHEN['svr:got_alerts:usr']=function(d){
					$('#alerts').html('');
					var gifts=false;
					G.me=JSON.parse($.localStorage.getItem('me'));
					for(var i=0;i<d.published.length;i+=1){
						if(d.published[i].ev>0){
							$('#number_notifications').text(Number($('#number_notifications').text())+d.published[i].ev+(!G.me.backup?1:0));
							if(!G.me.backup){
								$('#alerts').append(
									'<div style="color:#000;background:#f04448;padding:3px 10px 1px 10px;line-height:14px;margin-bottom:5px;">'
								+		'<u style="color:#fff;">'
								+			'<b>Backups are not enabled</b>'
								+		'</u>'
								+		'<div style="font-size:9px;">Please go to <i><b>Account > Backups</b></i> and complete this action.</div>'
								+	'</div>'
									);
								}
							if(G.me.published.indexOf(d.published[i].forpage)==-1){
								G.me.published.push(d.published[i].forpage);
								gifts=true;
								$('#alerts').append(
									'<div style="color:#000;background:#f04448;padding:3px 10px 1px 10px;line-height:14px;margin-bottom:5px;">'
								+		'<a style="color:#fff;" href="https://methodise.me/?'+d.published[i].forpage+'">'
								+			'<b>'+d.published[i].title+'</b>'
								+		'</a>'
								+		'<div style="font-size:9px;">Anonymous gifted this page to mine for you! (you can edit/delete this page at any time)</div>'
								+	'</div>'
									);
								delete s[0][NULL].WHEN['svr:found_gifted:usr'];
								s[0][NULL].WHEN['svr:found_gifted:usr']=function(d){
									$('#results').append(d.html);
									};
								s[0][NULL].WIRE('usr:find_gifted_page:svr',{page:d.published[i].forpage});
								}
							else{
								$('#alerts').append(
									'<div style="color:#000;background:#f04448;padding:3px 10px 1px 10px;line-height:14px;margin-bottom:5px;">'
								+		'<a style="color:#fff;" href="https://methodise.me/?'+d.published[i].forpage+'">'
								+			'<b>'+d.published[i].title+'</b>'
								+		'</a>'
								+		'<div style="font-size:9px;">'+d.published[i].ev+' rabbit hole'+(d.published[i].ev>1?'s have':' has')+' changed here</div>'
								+	'</div>'
									);
								}
							}}
					if(gifts){save('gifts');}
					if($('#alerts').html()!==''){
						$('#button_notifications').show();
						}
					};
				s[0][NULL].WIRE('usr:get_alerts:svr',{published:(G.me.published||[]),key:G.me.publisher_key});
				}


			if(G.finding){





				var star;
				s[0][NULL].WHEN['svr:toggle_star:usr']=function(d){
					G.me=JSON.parse($.localStorage.getItem('me'));
					$('.found_star').removeClass('unauthorised');
					if(d.is){
						if((G.me.stars||[]).indexOf(d.star)==-1){G.me.stars.push(d.star);}
						$('#find_stars').removeClass('unauthorised');
						$('#find_stars').attr({'href':$('#find_stars').attr('href')+JSON.stringify(G.me.stars).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
						$(star).attr({'src':'https://methodise.me/R/starred.png','tip':'Remove this page from your Rabbit Hole tools list'});
						}
					else{
						(G.me.stars||[]).splice((G.me.stars||[]).indexOf(d.star),1);
						if(!(G.me.stars||[]).length){$('#find_stars').addClass('unauthorised');}
						$('#find_stars').attr({'href':$('#find_stars').attr('href')+JSON.stringify((G.me.stars||[])).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
						$(star).attr({'src':'https://methodise.me/R/star.png','tip':'Add this page from your Rabbit Hole tools list'});
						}
					if($.localStorage.getItem('me')){save('toggle star');}
					};




                $('.found > a').on('click',function(ev){
                    if($(ev.target).hasClass('found_star')){
                        ev.preventDefault();
						star=$(ev.target);
                        pid=($(this).attr('href').split('?')[1]).split('&')[0];
                        s[0][NULL].WIRE('usr:click_star:svr',{page:pid,yes:(((G.me.stars||[]).indexOf(pid)==-1)?true:false)});
                        }
					else if($(ev.target).hasClass('found_edit')){
                        ev.preventDefault();
                        location.href='https://methodise.me/editor.php?'+(($(this).attr('href').split('?')[1]).split('&')[0]);
                        }});
				$('.found_edit').show();


				$('.found').each(function(i,v){
					if(!$(v).hasClass('skip')){
						var pid=($(v).find('a').attr('href').split('?')[1]).split('&')[0];
	                    if([undefined,G.me.safekey].indexOf($(this).attr('by'))==-1){
	                        $(v).find('.found_stats').append(' <img class="found_star tip" tip="Add this page to your Rabbit Hole tools list" src="https://methodise.me/R/star.png"/>');
	                        if((G.me.stars||[]).indexOf(pid)!==-1){
								$(v).find('.found_star').attr({'src':'https://methodise.me/R/starred.png'});//up and down (add stars and published to localstorage)
								$(v).find('.found_star').attr({'tip':'Remove this page from your Rabbit Hole tools list'});
								}}
	                    else{$(v).find('.found_star').remove();}
						if(G.me.published.indexOf(pid)!==-1){
							$(v).find('.found_stats').prepend('<img class="found_edit tip" tip="Edit this page" src="https://methodise.me/R/edit.png" style="margin-right:3px;"/>');
							}}});










				}
			else{

				function appposition(app){
	                if(app=='?'){
	                    appposition('#notepad');
	                    appposition('#white_rabbit');
	                    return;
	                    }
					if($(app).position().left<-230){
	                    $(app).css({'left':'-230px'});
	                    }
	                else if($(app).position().left>($('#page_height').width()-30)){
	                    $(app).css({'left':($('#page_height').width()-30)+'px'});
	                    }
	                if($(app).position().top<0){
	                    $(app).css({'top':'0px'});
	                    }
	                else if($(app).position().top>($('#page_height').height()-10)){
	                    $(app).css({'top':($('#page_height').height()-10)+'px'});
	                    }
	                return;
	                }

				var why=[];

				function plotOnBell(x,scale){
					scale=scale||false;
					var stdD=.125
					var mean=.5
					if(scale){return 1/((1/(stdD*Math.sqrt(2*Math.PI)))*Math.pow(Math.E,-1*Math.pow(x-mean,2)/(2*Math.pow(stdD,2))));}
					else{return ((1/(stdD*Math.sqrt(2*Math.PI)))*Math.pow(Math.E,-1*Math.pow(x-mean,2)/(2*Math.pow(stdD,2))))*plotOnBell(.5,true);}
					}

				function qualitycheck(payload){
					why=[];
					if(!payload.page.title||payload.page.title==''){why.push('\u2022 Edit > Settings > Title is missing\n');}
					if(!payload.page.description||payload.page.description==''){why.push('\u2022 Edit > Settings > Description is missing\n');}
					if(!payload.page.keywords||payload.page.keywords==''){why.push('\u2022 Edit > Settings > Keywords are missing\n');}
					if(!payload.page.cover||payload.page.cover==''){why.push('\u2022 Edit > Settings > Cover image is missing\n');}
					else if(!payload.page.cover.match(/\.(jpeg|jpg|gif|png|svg)$/i)){why.push('\u2022 Edit > Settings > Cover image is malformed\n');}
					payload.page.mines=G.me.personal_miner;
					if(!payload.page.mines||payload.page.mines==''){why.push('\u2022 Account > Monero Public Adrress is missing\n');}
					else if(payload.page.mines.length!=32||!(/^[a-z0-9]+$/i).test(payload.page.mines)){why.push('\u2022 Account > Monero Public Adrress is malformed\n');}
					payload.page.donate=G.me.monero_public;
					if(!payload.page.donate||payload.page.donate==''){why.push('\u2022 Account > Monero Public Adrress is missing\n');}
					else if(payload.page.donate.length!=95||!(/^[a-z0-9]+$/i).test(payload.page.donate)){why.push('\u2022 Account > Monero Public Adrress is malformed\n');}
					payload.page.key=G.me.publisher_key;
					if(!payload.page.key||payload.page.key==''){why.push('\u2022 Account > Publisher Key is missing\n');}
					else if(payload.page.key.length!=13){why.push('\u2022 Account > Publisher Key is malformed\n');}
					if(!payload.page.ld){delete payload.page.ld}
					payload.types=[];
					for(var i=0;i<payload.page.board.length;i+=1){
						payload.box=(payload.page.board[i].split('¬')).slice(3).join('¬');
						payload.type=payload.page.board[i].split('¬')[0];
						if(payload.types.indexOf(payload.type)==-1){payload.types.push(payload.type);}//this number is less than the number of icons unless each icon is a unique type
						}
					payload.quality=Math.ceil(
						(plotOnBell(payload.page.board.length/72)*100)
					+	((payload.page.board.length*payload.types.length)-payload.page.board.length)
					+	Math.ceil(plotOnBell(($('#board').text().length/2000))*100)
						);
					if(payload.page.board.length>1000){why.push('\u2022 Your page has too many items for some viewers\n');}
					if(payload.quality<3){
						why.push('\u2022 Your work is very low in quality\n');
						}
					if(payload.page.board.length<7){
						why.push('\u2022 Your page lacks substance\n');
						}
					var text=$("#board").clone();
				    text.find('.rabbit').remove();
					if(text.text().length<50){why.push('\u2022 Your page lacks text\n');}
					else if(text.text().length>15000){why.push('\u2022 Your page has too much text (Write a blog then link it to your page instead)\n');}
					text=null;
					payload.json=JSON.stringify(payload.page);
					if(payload.json.indexOf('eval(')!=-1||payload.json.indexOf('eval (')!=-1||payload.json.indexOf('<script')!=-1||payload.json.indexOf('<'+'?php')!=-1){
						why.push('\u2022 Remove all illegal scripts; eval(), <script> or <'+'?php in your page\n');
						}
					if(payload.url=='https://methodise.me/R/blueprint.png'){
						why.push('\u2022 Blueprint background is not allowed (please change/remove it in the '+"'Style'"+' tab)\n');
						}
					return payload;
					}


				if(G.editing){




					if(!G.me.drafts[G.page.id]&&G.page.published){

						$('.warn_link').show();

						window.stop=false;

						$('#done_save').removeClass('unauthorised');
						$('#done_save').click(function(){
							window.onbeforeunload=null;
	                        window.onunload=null;
	                        window.onbeforeunloads=false;
		                    $('#done_save').css({'pointer-events':'none;'});
		                    if($(this).hasClass('unauthorised')){return false;}
		                    var Q=confirm('Are you sure you want to publish this page?');
		                    if(Q==true){
		                        var payload=qualitycheck({page:G.page});
		                        if(why.length>0){
		                            $('#button_done').css({'pointer-events':'none;'});
		                            alert('Please fix the following issues:\n\n'+why.join(''));
		                            var Q=confirm('Continue editing?');
		                            if(Q==false){window.location.href='https://methodise.me/?'+done;}
		                            }
		                        else{
									 payload.page={
		                                id:payload.page.id
		                            ,   title:payload.page.title
		                            ,   description:payload.page.description
		                            ,   keywords:payload.page.keywords
		                            ,   url:payload.page.url
		                            ,   repeat:payload.page.repeat
		                            ,   bg:payload.page.bg
		                            ,   box:payload.page.box
		                            ,   text:payload.page.text
		                            ,   link:payload.page.link
		                            ,   line:payload.page.line
		                            ,   ui:payload.page.ui
		                            ,   size:payload.page.size
		                            ,   board:payload.page.board
		                            ,   cover:payload.page.cover
		                            ,   blur:payload.page.blur
		                            ,   logo:payload.page.logo
									,	font:payload.page.font
		                            ,   key:G.me.publisher_key
		                            ,   mines:G.me.personal_miner
		                            ,   donate:G.me.monero_public
		                            ,   quality:payload.quality
									,	links:G.page.links//only in edit mode (incase erased rabbit)
									,	ld:G.page.ld||undefined
		                                };
									for(var k in payload.page.links){
										exists=false;
										for(var i=0,length=payload.page.board.length;i<length;i+=1){
											if(k==payload.page.board[i].split('¬')[3]||k=='blocked'){exists=true;}
											}
										if(!exists){delete payload.page.links[k];}
										}
									for(var i in payload.page.links){delete payload.page.links[i].preview;}
									s[0][NULL].WHEN['svr:published:usr']=function(d){
										if(''+d.result==''+true){
											G.me=JSON.parse($.localStorage.getItem('me'));
		                                    delete G.me.drafts[G.page.id];
		                                    if(G.me.published.indexOf(G.page.id)==-1){G.me.published.push(G.page.id);}
		                                    save('publish');
											$('#find_published').attr({'href':'https://methodise.me/find.php?published='+JSON.stringify(G.me.published).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
		                                    alert('Your published page is now updated!');
		                                    window.history.replaceState({},'?'+G.page.id,'?'+G.page.id);
		                                    window.location.href='https://methodise.me/?'+G.done;
		                                    }
		                                else{alert('Your published page faild to be updated!');}
										};
									s[0][NULL].WIRE('usr:publish:svr',payload);
		                            }
		                        payload=why=null;
		                        }});



						$('#done_revert').removeClass('unauthorised');
						$('#done_revert').on('click',function(){window.location.href='https://methodise.me/?'+G.done;});


						var publisher_key=forge.md.sha512.create();
						publisher_key.update(G.me.publisher_key);
						publisher_key=publisher_key.digest().toHex();

						G.erase_rabbit=function(id){
							s[0][NULL].WIRE('usr:eraser:svr',{page:G.page.id,rabbit:id,publisher_key:publisher_key});
							};


						$('#button_done').removeClass('unauthorised');

						}//is published


					$('#settings_address').val((window.location.href.split('?')[1]).split('&')[0]);
					$('#settings_address').on('keydown',function(ev){
						if(
						(ev.shiftKey&&[187,48,57,56,55,54,53,52,51,50,49,223,219,221,186,192,222,188,190,191,220].indexOf(ev.which)!=-1)
						||
						([187,233,220,188,190,191,186,192,222,219,221,32].indexOf(ev.which)!=-1)
						){ev.preventDefault();return false;}
						});
					s[0][NULL].WHEN['svr:checked_address:usr']=function(d){
						if(d.taken){
							alert('This address name is already taken!');
							$('#settings_address').css({'pointer-events':'auto'});
							}
						else{
							var Q=confirm('Are you sure you want to change the address of this draft? (any rabbit holes leading to this page may become broken!)');
							if(Q==true){
								$('#settings_address').blur();
								var d;
								G.me=JSON.parse($.localStorage.getItem('me'));
								d.new=document.getElementById('settings_address').value;
								window.history.replaceState({},'?'+d.new,'?'+d.new);
								d.old=G.page.id;
								G.page.id=d.new;
								if(d.new!==d.old){
									if(G.me.drafts[d.old]){
										G.me.drafts[d.new]=JSON.parse(JSON.stringify(G.me.drafts[d.old]));
										G.me.drafts[d.new].id=d.new;
										delete G.me.drafts[d.old];
										for(var p in G.me.drafts){
											if(G.me.drafts[p].links[d.old]){
												G.me.drafts[p].links[d.old].id=d.new;
												G.me.drafts[p].links[d.new]=JSON.parse(JSON.stringify(G.me.drafts[p].links[d.old]));
												delete G.me.drafts[p].links[d.old];
												for(var i=0,length=G.me.drafts[p].board.length;i<length;i+=1){
													if(G.me.drafts[p].board[i].indexOf('m')==0&&G.me.drafts[p].board[i].split('¬')[3]==d.old){
														var split=G.me.drafts[p].board[i].split('¬');
														split[3]=d.new;
														G.me.drafts[p].board[i]=split.join('¬');
														}}}
											if(G.me.drafts[p].links.blocked.indexOf(d.old)!==-1){
												G.me.drafts[p].links.blocked[G.me.drafts[p].links.blocked.indexOf(d.old)]=d.new;
												}}}
									else if(G.me.published.indexOf(d.old)!==-1){
										console.log(G.me.published,G.me.published.indexOf(d.old),G.me.published[G.me.published.indexOf(d.old)],d.new);
										G.me.published[G.me.published.indexOf(d.old)]=d.new;
										console.log(G.me.published);
										s[0][NULL].WIRE('usr:change_published_address:svr',{'old':d.old,'new':d.new});
										}
									save('page address change');
									G.done=d.new;
									}
								alert('Done!');
								$('#settings_address').css({'pointer-events':'auto'});
								}
							else{
								$('#settings_address').css({'pointer-events':'auto'});
								}}};
					$('#settings_address_change').on('click',function(){
						$('#settings_address').css({'pointer-events':'none'});
						document.getElementById('settings_address').value=(document.getElementById('settings_address').value.replace(/[^A-Za-z0-9_\-]/g,'')).toLowerCase();
						s[0][NULL].WIRE('usr:check_address:svr',{address:document.getElementById('settings_address').value});
        				});



					}//editing
				else{

					G.check_privilages();


					s[0][NULL].WIRE('usr:visit:svr',{page:G.page.id,adblock:G.adblock,'ref':document.referrer});


					G.page_hashed=function(cb){
						s[0][NULL].WIRE('usr:omine_update_estimate:svr',{'address':(G.page.donate||G.me.monero_public)});
						if(!G.me.drafts[G.page.id]){
							s[0][NULL].WIRE('usr:page_hashed:svr',{page:G.page.id,hashed:(G.hashed+G.hashing),'ref':document.referrer});
							}
						cb(true);
						};


					if(!G.me.publisher_key){



						}
					else if(G.me.publisher_key){







						var publisher_key=forge.md.sha512.create();
						publisher_key.update(G.me.publisher_key);
						publisher_key=publisher_key.digest().toHex();






						function safekey_and_sig(d){
							$('#admin_signature').text(d.sig);
							var copy_sig=document.querySelector('#copy_sig');
							copy_sig.addEventListener('click',function(event){
								var copy_text=document.getElementById("admin_signature");
								var range=document.createRange();
								range.selectNode(copy_text);
								window.getSelection().addRange(range);
								try{
									var successful=document.execCommand('copy');
									var msg=successful?'successful':'unsuccessful';
									('Copying text command was '+msg);
									}
								catch(err){console.log('Oops, unable to copy');}
								});

							if(!G.me.signature){
								G.me=JSON.parse($.localStorage.getItem('me'));
								G.me.signature=d.sig;
								G.me.safekey=d.safekey;
								save('signature');
								}



							s[0][NULL].WHEN['svr:pages_unpublished:usr']=function(d){
								G.me=JSON.parse($.localStorage.getItem('me'));
								for(var i=0,length=d.published.length;i<length;i+=1){
									G.me.published.splice(G.me.published.indexOf(d.published[i]),1);
									}
								$('#find_published').attr({'href':'https://methodise.me/find.php?published='+JSON.stringify(G.me.published).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
								$('#find_published').removeClass('unauthorised');
								for(var i=0,length=d.stars.length;i<length;i+=1){
									(G.me.stars||[]).splice((G.me.stars||[]).indexOf(d.stars[i]),1);
									}
								$('#find_stars').attr({'href':$('#find_published').attr('href')+JSON.stringify((G.me.stars||[])).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
								$('#find_stars').removeClass('unauthorised');
								save('unpublished');
								};
							var exists=[[],[]];
							if(G.me.published.length){exists[0]=G.me.published;}
				            if((G.me.stars||[]).length){exists[1]=G.me.stars;}
							s[0][NULL].WIRE('usr:pages_exist?:svr',{published:exists[0],stars:exists[1]});//check if you are synced with the server


							if(publisher_key!=G.page.protect&&!G.me.drafts[G.page.id]){
								$('#find_created').removeClass('unauthorised');
								if(G.me.stars.indexOf(G.page.id)!==-1){
									$('#remember_page > b >img').addClass('protect_img_black').attr({'src':'https://methodise.me/R/starred.png'});
									}
								s[0][NULL].WHEN['svr:toggle_star:usr']=function(d){
									if(d.is){
										if((G.me.stars||[]).indexOf(d.star)==-1){G.me.stars.push(d.star);}
										$('#find_stars').removeClass('unauthorised');
										$('#find_stars').attr({'href':$('#find_stars').attr('href')+JSON.stringify((G.me.stars||[])).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
										$('#remember_page > b > img').addClass('protect_img_black').attr({'src':'https://methodise.me/R/starred.png'});
										}
									else{
										(G.me.stars||[]).splice((G.me.stars||[]).indexOf(d.star),1);
										if(!(G.me.stars||[]).length){$('#find_stars').addClass('unauthorised');}
										$('#find_stars').attr({'href':$('#find_stars').attr('href')+JSON.stringify((G.me.stars||[])).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
										$('#remember_page > b > img').removeClass('protect_img_black').attr({'src':'https://methodise.me/R/star.png'});
										}
									};
								$('#remember_page').on('click',function(){
									s[0][NULL].WIRE('usr:click_star:svr',{page:G.page.id,yes:(((G.me.stars||[]).indexOf(G.page.id)==-1)?true:false)});
									});
								$('#remember_page').removeClass('unauthorised');
								}

							};














						if(publisher_key==G.page.protect||G.me.drafts[G.page.id]){//this is correct if('you are the page owner'or'the page is a draft')

							$('#import_page').show();
							$('#import_page').on('click',function(){
								$('#file_system').trigger('click');
								$('#file_system').one('change',function(){
									var files=$('#file_system')[0].files;
									if(files.length){
										var fr=new FileReader();
										fr.onload=function(e){
											var imp=JSON.parse(decodeURI(atob(e.target.result)));
											G.me=JSON.parse($.localStorage.getItem('me'));
											G.me.drafts[imp.id]={
												id:imp.id
											,	bg:imp.bg
											,	blur:imp.blur
											,	box:imp.box
											,	cover:imp.cover
											,	date:imp.date
											,	description:imp.description
											,	keywords:imp.keywords
											,	line:imp.line
											,	link:imp.link
											,	links:{blocked:[]}
											,	key:''
											,	logo:imp.logo
											,	repeat:imp.repeat
											,	size:imp.size
											,	text:imp.text
											,	font:imp.font
											,	title:imp.title
											,	ui:imp.ui
											,	url:imp.url
											,	mines:''
											,	board:[]
											,	ld:imp.ld
												};
											for(var i=0,length=imp.board.length;i<length;i+=1){
												if(imp.board[i].indexOf('m')!==0){G.me.drafts[imp.id].board.push(imp.board[i]);}
												}
											save('import');
											alert(imp.id+' has been added to your drafts!');
											}
										fr.readAsText(files.item(0));
										}});});
							$('#export_page').show();
							$('#export_page').on('click',function(){
								var exp={};
								exp.id=G.page.id+'-copy';
								exp.bg=G.page.bg;
								exp.blur=G.page.blur;
								exp.box=G.page.box;
								exp.cover=G.page.cover;
								exp.date=G.page.date;
								exp.description=G.page.description;
								exp.keywords=G.page.keywords;
								exp.line=G.page.line;
								exp.link=G.page.link;
								exp.links={blocked:[]};
								exp.key='';
								exp.logo=G.page.logo;
								exp.repeat=G.page.repeat;
								exp.size=G.page.size;
								exp.text=G.page.text;
								exp.font=G.page.font;
								exp.title=G.page.title;
								exp.ui=G.page.ui;
								exp.url=G.page.url;
								exp.mines='';
								exp.board=[];
								exp.ld=G.page.ld
								for(var i=0,length=G.page.board.length;i<length;i+=1){
									if(G.page.board[i].indexOf('m')!==0){exp.board.push(G.page.board[i]);}
									}
								var a=document.createElement('a');
							    a.setAttribute('href',"data:text/json;charset=utf-8,"+encodeURIComponent(btoa(encodeURI(JSON.stringify(exp)))));
							    a.setAttribute('download',exp.id+'.page');
							    document.body.appendChild(a);//required for ff
							    a.click();
							    a.remove();
								});


							function allow_gift_page(){
								$('#gift_page').show();
								$('#gift_page').removeClass('unauthorised');
								$('#gift_page').unbind('click');
								$('#gift_page').on('click',function(){
									var admin=prompt('Enter the account signature of the @user you want to gift this page to:','');
									if(admin){
										s[0][NULL].WHEN['svr:swapped_admin:usr']=function(d){
											if(!d.result){
												alert('Fail: You are still the page admin.');
												}
											else{
												G.me=JSON.parse($.localStorage.getItem('me'));
												G.me.published.splice(G.me.published.indexOf(G.page.id),1);
												save('gift page');
												function swapped(){
													alert('Success: You have gifted the page to a new admin!');
													location.reload();
													}
												setTimeout(function(){swapped();},10);
												}
											};
										s[0][NULL].WIRE('usr:swap_admin:svr',{admin:admin,page:G.page.id,by:G.me.publisher_key});
										}});
								return;
								}

							$('#publish_page').on('click',function(){
				                if($(this).hasClass('unauthorised')){return false;}
				                var Q=confirm('Are you sure you want to publish this page?');
				                if(Q==true){
				                    G.captcha({page:G.page},0,function(payload){
				                        payload=qualitycheck(payload);
				                        if(why.length>0){
				                            alert('Please fix the following issues:\n\n'+why.join(''));
				                            }
				                        else{
				                            payload.page={
				                                id:payload.page.id
				                            ,   title:payload.page.title
				                            ,   description:payload.page.description
				                            ,   keywords:payload.page.keywords
				                            ,   url:payload.page.url
				                            ,   repeat:payload.page.repeat
				                            ,   bg:payload.page.bg
				                            ,   box:payload.page.box
				                            ,   text:payload.page.text
				                            ,   link:payload.page.link
				                            ,   line:payload.page.line
				                            ,   ui:payload.page.ui
				                            ,   size:payload.page.size
				                            ,   board:payload.page.board
				                            ,   cover:payload.page.cover
				                            ,   blur:payload.page.blur
				                            ,   logo:payload.page.logo
											,	font:payload.page.font
				                            ,   key:G.me.publisher_key
				                            ,   mines:G.me.personal_miner
				                            ,   donate:G.me.monero_public
				                            ,   quality:payload.quality
											,	ld:payload.ld
				                                };
											s[0][NULL].WHEN['svr:published:usr']=function(d){
												if(''+d.result==''+true){
													G.me=JSON.parse($.localStorage.getItem('me'));
				                                    delete G.me.drafts[G.page.id];
				                                    if(G.me.published.indexOf(G.page.id)==-1){G.me.published.push(G.page.id);}
				                                    save('publish');
													$('#find_published').attr({'href':'https://methodise.me/find.php?published='+JSON.stringify(G.me.published).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
													$('#publish_page').addClass('unauthorised');
													$('#delete_page > div').addClass('unauthorised');
													$('#delete_page > div').find('b:first').show();
													$('#publish_page').html('<b>Published!</b>');
													$('#unpublish_page').removeClass('unauthorised');
													allow_gift_page();
				                                    alert('Your page is now published!');
				                                    }
				                                else{alert('Your page faild to be published!');}
												};
											s[0][NULL].WIRE('usr:publish:svr',payload);
				                            }
				                        payload=why=null;
				                        });
				                    }});

							$('#unpublish_page').on('click',function(){
								if($(this).hasClass('unauthorised')){return false;}
								var Q=confirm('Are you sure you want to unpublish this page?');
								if(Q==true){
									s[0][NULL].WHEN['svr:unpublished:usr']=function(d){
										if(''+d.result==''+true){
											G.me=JSON.parse($.localStorage.getItem('me'));
											delete G.page.published;
											delete G.page.protect;
											$('.rabbit').each(function(i,v){
												G.page.links[$(this).find('.found').attr('page')].preview=$(this).find('.found')[0].outerHTML;
												});
											G.me.drafts[G.page.id]=G.page;
											G.me.published.splice(G.me.published.indexOf(G.page.id),1);
											save('unpublished');
											$('#find_published').attr({'href':'https://methodise.me/find.php?published='+JSON.stringify(G.me.published).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
											$('#unpublish_page').addClass('unauthorised');
											$('#delete_page > div').removeClass('unauthorised');
											$('#delete_page > div').find('b:first').hide();
											$('#publish_page').removeClass('unauthorised');
											$('#publish_page').html('<b>Publish</b>');
											$('#gift_page').hide();
											$('#gift_page').addClass('unauthorised');
											$('#gift_page').unbind('click');
											alert('Your page is now an unpublished private draft!');
											window.history.replaceState({},'?'+G.page.id,'?'+G.page.id);
											}
										else{alert('Your page faild to be unpublished!');}
										};
									s[0][NULL].WIRE('usr:unpublish:svr',{page:G.page});
									}});


							$('.warn_link').show();


							var ww=false;
							$('#white_rabbit_u2cc').hide();
							$('#white_rabbit_cc2u').show();
							$('#white_rabbit_toggle').show();
							$('#white_rabbit').drags({handle:"#white_rabbit_drag"});
							$('#white_rabbit').on('mouseup',function(){
				                appposition('#white_rabbit');
				                });
				            $('#white_rabbit_toggle').click(function(){
				                $('#white_rabbit').toggle();
				                if($('#white_rabbit').attr('display')!='none'){
									$('#white_rabbit').insertAfter($('.app').last());
									if(!ww&&(ww=true)){
										s[0][NULL].WHEN['svr:got_prefaces:usr']=function(d){
											console.log(JSON.parse(JSON.stringify(d)),G.me.published);
											var blocked=['<div style="color:#ff0000;">Pages you have blocked:</div>'];
											for(var i=0;i<d.prefaces.length;i+=1){
												var temp;
												if(G.page.links[d.prefaces[i].id]){d.prefaces[i]='';}
												else{
													temp=
													 '<div class="found'+(i==0?' found_selected':'')+'" page="'+d.prefaces[i].id+'" style="cursor:pointer;position:relative;width:400px;height:100px;background:#fff;margin-bottom:0px;border:6px solid #000;">'
						                            +   '<div class="found_cover" style="position:absolute;top:0px;bottom:0px;left:0px;width:100px;background-color:'+d.prefaces[i].bg+';background-size:cover;background-position:center;background-color:'+d.prefaces[i].bg+';overflow:hidden;">'
													+		'<img src="'+d.prefaces[i].cover+'" style="height:100%;width:100%;" onerror="correct_img(this);"/>'
													+		(d.prefaces[i].star?'<img class="protect_img_black" src="https://methodise.me/R/starred.png" style="height:15px;position:absolute;bottom:4px;right:-296px;">':'')
													+	'</div>'
						                            +   '<div class="found_info" style="position:absolute;top:5px;bottom:5px;left:110px;right:5px;color:#000;overflow:hidden;">'
						                            +       '<b style="font-size:12px;">'+d.prefaces[i].title+'</b>'
						                            +       '<br>'
						                            +       '<div class="found_description" style="font-size:10px;line-height:14px;margin-top:8px;font-weight:normal;">'+d.prefaces[i].description+' ...</div>'
						                            +       '<div class="found_keywords" style="position:absolute;bottom:0px;left:0px;right:0px;overflow:hidden;color:#9E9E9E;font-size:8.5px;font-style:italic;font-weight:bold;height:11px;">'+d.prefaces[i].keywords+'</div>'
						                            +   '</div>'
						                            +'</div>';
													if(G.page.links.blocked.indexOf(d.prefaces[i].id)!==-1||d.prefaces[i].ublocked){blocked[blocked.length]=temp;d.prefaces[i]='';}
													else{d.prefaces[i]=temp;}
													}}
											if(blocked.length>1){for(var j=0;j<blocked.length;j+=1){d.prefaces.push(blocked[j]);}}
											d.prefaces=d.prefaces.join('');
											if(d.prefaces!=''){$('#cc2u').html(d.prefaces+'<div style="background:#03a0f5;position:absolute;width:100%;height:4px;bottom:-3px;"></div>');}
											$('#cc2u').on('click','.found',function(){
												$('.found').removeClass('found_selected');
												$(this).addClass('found_selected');
												});};
										s[0][NULL].WIRE('usr:get_prefaces:svr',{stars:G.me.stars,published:G.me.published,blocked:G.page.links.blocked,key:G.me.publisher_key,page:G.page.id});
										}
									}});
				            $('#white_rabbit_hide').click(function(){
				                $('#white_rabbit').hide();
				                });
				            $('#white_rabbit').on('mousedown',function(){
				                if($('.app').last().attr('id')!='#white_rabbit'){$('#white_rabbit').insertAfter($('.app').last());}
				                });
							$('#white_rabbit_toggle').removeClass('unauthorised');

							function lock(){
								if(G.page.lock){
									$('#lock_page > b').text('Unlock');
									}
								else{
									$('#lock_page > b').text('Lock');
									}
								$('#lock_page').show();
								return;
								}
							lock();
							$('#lock_page').on('click',function(){
								G.me=JSON.parse($.localStorage.getItem('me'));
								if(G.me.drafts[G.page.id]){
									if(G.page.lock){
										delete G.page.lock;
										delete G.me.drafts[G.page.id].lock;
										}
									else{
										G.page.lock=1;
										G.me.drafts[G.page.id].lock=1;
										}
									lock();
									save('lock page');
									}
								else{
									if(G.page.lock){delete G.page.lock;}else{G.page.lock=1;}
									lock();
									s[0][NULL].WIRE('usr:lock_page:svr',{yes:(G.page.lock?true:false),page:G.page.id,key:G.me.publisher_key});
									}
								});

							$('#copy_page').show();
							$('#copy_page').on('click',function(){
								var Q=confirm('Are you sure you want to copy this page?');
								if(Q==true){
									G.me=JSON.parse($.localStorage.getItem('me'));
									var copy={
										bg:G.page.bg
									,	blur:G.page.blur
									,	board:[]
									,	box:G.page.box
									,	cover:G.page.cover
									,	date:(+new Date())
									,	description:G.page.description
									,	font:G.page.font
									,	key:''
									,	keywords:G.page.keywords
									,	line:G.page.line
									,	link:G.page.link
									,	links:{blocked:[]}
									,	logo:G.page.logo
									,	mines:''
									,	repeat:G.page.repeat
									,	size:G.page.size
									,	text:G.page.text
									,	title:G.page.title
									,	ui:G.page.ui
									,	url:G.page.url
									,	ld:G.page.ld
										};
									for(var i=0,length=G.page.board.length;i<length;i+=1){
										if(G.page.board[i].indexOf('m')!==0){
											copy.board.push(G.page.board[i]);
											}}
									var code={
						                cy:
						                [['a','c','1','l','D','M','X']	//0
						                ,['d','f','3','C','L','N']		//1
						                ,['g','h','i','7','V','H']		//2
						                ,['j','t','b','z','R','O']		//3
						                ,['m','n','o','E','I','P']		//4
						                ,['p','q','r','4','G','K']		//5
						                ,['s','u','k','9','F','Z','J']	//6
						                ,['v','w','x','6','T','W']		//7
						                ,['y','2','8','B','Y','Q']		//8
						                ,['0','5','e','A','U','S']]		//9
						            ,	make:function(t){//randomly encrypt a timestamp
						                    var e='';
						                    t=''+t;
						                    for(var n=0;n<t.length;n+=1){
						                        e+=this.cy[Number(t[n])][Math.floor(Math.random()*this.cy[Number(t[n])].length)]
						                        }
						                    return e;
						                    }};
						            function nowstring(d){
						                d.year=(d.getFullYear()+'').slice(3);
						                d.start=new Date(d.getFullYear(),0,0);
						                d.diff=(d-d.start)+((d.start.getTimezoneOffset()-d.getTimezoneOffset())*60*1000);
						                d.oneDay=1000*60*60*24;
						                d.day=Math.floor(d.diff/d.oneDay)+'';
						                for(;d.day.length<3;d.day='0'+d.day);
						                d.hour=d.getHours()+'';
						                if(d.hour.length<2){d.hour='0'+d.hour;}
						                d.mins=d.getMinutes()+'';
						                if(d.mins.length<2){d.mins='0'+d.mins;}
						                d.milli=(d.getMilliseconds()+'').slice(2);
						                if(d.mins.length<2){d.mins='0'+d.mins;}
						                return d.year+d.day+d.hour+d.mins+d.milli;
						                }
						            copy.id=code.make(nowstring(new Date()));
									G.me.drafts[copy.id]=copy;
									save('copy page');
									alert('This page has been copied into your unplublished drafts as: https://methodise.me/?'+copy.id);
									window.location.href='https://methodise.me/?'+copy.id;
									}});





							if(!G.me.drafts[G.page.id]){
								$('#publish_page').html('<b>Published!</b>');
								$('#publish_page').addClass('unauthorised');
								$('#unpublish_page').removeClass('unauthorised');
								allow_gift_page();
								}
							else{
								$('#publish_page').removeClass('unauthorised');
								}



							$('.mod_good').on('click',function(){
								s[0][NULL].WIRE('usr:mod_link:svr',{page:G.page.id,rabbit:($(this).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0],state:'good',publisher_key:publisher_key});
								$(this).closest('.box').find('.warn_link').remove();
								$(this).closest('.mod_link').remove();
								});
							$('.mod_nsfw').on('click',function(){
								s[0][NULL].WIRE('usr:mod_link:svr',{page:G.page.id,rabbit:($(this).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0],state:'nsfw',publisher_key:publisher_key});
								var box=$(this).closest('.box');
								box.find('.warn_link').replaceWith(
									'<div class="warn_link shown_link" style="position:absolute;left:5px;">'
								+		'<center><div style="background:#FF5722;padding: 2px 3px;border: 1px solid #F44336;display:block;border-radius:2px;text-shadow: 0px 1px 1px #902300;width:fit-content;font-size:9px;"><b>#NSFW</b></div></center>'
								+	'</div>');
								box.find('.mod_link').remove();
								});
							$('.mod_warn').on('click',function(){
								s[0][NULL].WIRE('usr:mod_link:svr',{page:G.page.id,rabbit:($(this).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0],state:'warn',publisher_key:publisher_key});
								var box=$(this).closest('.box');
								box.find('.warn_link').replaceWith(
									'<div class="warn_link shown_link" style="position:absolute;left:-1px;">'
								+		'<center><div style="background:#FF5722;padding: 2px 3px;border: 1px solid #F44336;display:block;border-radius:2px;text-shadow: 0px 1px 1px #902300;width:fit-content;font-size:9px;"><b>#Graphic</b></div></center>'
								+	'</div>');
								box.find('.mod_link').remove();
								});
							$('.mod_erase').on('click',function(){
								s[0][NULL].WIRE('usr:mod_link:svr',{page:G.page.id,rabbit:($(this).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0],state:'erase',publisher_key:publisher_key});
								$(this).closest('.box').remove();
								});
							$('.mod_nope').on('click',function(){
								s[0][NULL].WIRE('usr:mod_link:svr',{page:G.page.id,rabbit:($(this).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0],state:'nope',publisher_key:publisher_key});
								$(this).closest('.box').remove();
								});
							$('.mod_hate').on('click',function(){
								var report=($(this).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0];
								s[0][NULL].WIRE('usr:mod_link:svr',{page:G.page.id,rabbit:report,state:'hate',publisher_key:publisher_key});
								setTimeout(function(report){window.open('https://twitter.com/messages/compose?recipient_id=943425111205478406&text=%E2%9A%A0%EF%B8%8F%20I%20flagged%20https%3A%2F%2Fmethodise.me%2F%3F'+report+'%20because%3A%20', '_blank');},1000,report);
								$(this).closest('.box').remove();
								});
							$('.mod_link').show();


							}
						else if('you are on another users published page'){




							$('.cc').show();//this shows star donate and report
							$('.shown_link').show();
							if(!G.page.lock){
								var once;
								$('#safe_mode').click(function(){
									clearTimeout(once);
									once=setTimeout(function(){
									if($('#safe_mode_toggle').is(":checked")){
										$('#safe_mode_toggle').attr({'checked':false});
										$('.hidden_link').parent('.box').show();
										}
									else{
										$('#safe_mode_toggle').attr({'checked':true});
										$('.hidden_link').parent('.box').hide();
										}
									},10);
									});
								$('.hidden_link').parent('.box').hide();
								$('.hidden_link').each(function(i,v){
									if(G.me.published.indexOf(($(v).parent('.box').find('a').attr('url').split('?')[1]).split('&')[0])!==-1){
										$(v).parent('.box').show();
										}});
								$('#safe_mode').show();







								var ww=false;
								$('#white_rabbit_cc2u').hide();
								$('#white_rabbit_u2cc').show();
								$('#white_rabbit_toggle').show();
								$('#white_rabbit').drags({handle:"#white_rabbit_drag"});
								$('#white_rabbit').on('mouseup',function(){
					                appposition('#white_rabbit');
					                });
					            $('#white_rabbit_toggle').click(function(){
					                $('#white_rabbit').toggle();
					                if($('#white_rabbit').attr('display')!='none'){
										$('#white_rabbit').insertAfter($('.app').last());
										if(!ww&&(ww=true)){
											s[0][NULL].WHEN['svr:got_prefaces:usr']=function(d){
												console.log(JSON.parse(JSON.stringify(d)),G.me.published);
												for(var i=0;i<d.prefaces.length;i+=1){
													if(d.prefaces[i].emotion>-1&&!G.page.links[d.prefaces[i].id]&&G.page.links.blocked.indexOf(d.prefaces[i].id)==-1){
														d.prefaces[i]=
														 '<div class="found'+(i==0?' found_selected':'')+'" page="'+d.prefaces[i].id+'" style="cursor:pointer;position:relative;width:400px;height:100px;background:#fff;margin-bottom:0px;border:6px solid #000;">'
							                            +   '<div class="found_cover" style="position:absolute;top:0px;bottom:0px;left:0px;width:100px;background-color:'+d.prefaces[i].bg+';background-size:cover;background-position:center;background-color:'+d.prefaces[i].bg+';overflow:hidden;">'
														+		'<img src="'+d.prefaces[i].cover+'" style="height:100%;width:100%;" onerror="correct_img(this);"/>'
														+		(d.prefaces[i].star?'<img class="protect_img_black" src="https://methodise.me/R/starred.png" style="height:15px;position:absolute;bottom:4px;right:-296px;">':'')
														+	'</div>'
														+   '<div class="found_info" style="position:absolute;top:5px;bottom:5px;left:110px;right:5px;color:#000;overflow:hidden;">'
							                            +       '<b style="font-size:12px;">'+d.prefaces[i].title+'</b>'
							                            +       '<br>'
							                            +       '<div class="found_description" style="font-size:10px;line-height:14px;margin-top:8px;font-weight:normal;">'+d.prefaces[i].description+' ...</div>'
							                            +       '<div class="found_keywords" style="position:absolute;bottom:0px;left:0px;right:0px;overflow:hidden;color:#9E9E9E;font-size:8.5px;font-style:italic;font-weight:bold;height:11px;">'+d.prefaces[i].keywords+'</div>'
							                            +   '</div>'
							                            +'</div>';
														}
													else{d.prefaces[i]='';}
													}
												d.prefaces=d.prefaces.join('');
												if(d.prefaces!=''){$('#u2cc').html(d.prefaces+'<div style="background:#03a0f5;position:absolute;width:100%;height:4px;bottom:-3px;"></div>');}
												$('#u2cc').on('click','.found',function(){
													$('.found').removeClass('found_selected');
													$(this).addClass('found_selected');
													});};
											s[0][NULL].WIRE('usr:get_prefaces:svr',{published:G.me.published,key:G.me.publisher_key,page:G.page.id});
											}}});
					            $('#white_rabbit_hide').click(function(){
					                $('#white_rabbit').hide();
					                });
					            $('#white_rabbit').on('mousedown',function(){
					                if($('.app').last().attr('id')!='#white_rabbit'){$('#white_rabbit').insertAfter($('.app').last());}
					                });
								$('#white_rabbit_toggle').removeClass('unauthorised');
								}//end if the page isn't locked



							$('#donate_page').removeClass('unauthorised');

						}//you are on another users published page


						var ID=$('.box').length;
						var way={};


						document.onmousemove=function(ev){//jquery could not do this (keapt cancelling it)
			                $('#mouse').css({left:ev.pageX,top:ev.pageY});
			                };






						function selectedtoobj(dir){
							if((/^[\w-]+$/).test($('.found_selected').attr('page'))){
								$('.found_selected').clone().appendTo('#workarea');
								$('#workarea > .found').removeClass('found_selected');
								$('#workarea > .found').find('protect_img_black').remove();
								$('#workarea > .found').addClass('protect_img_black').css({'border':'none','opacity':0,'pointer-events':'none','position':'absolute'});
								way[dir]={preface:$('#workarea > .found')[0].outerHTML,href:$('.found_selected').attr('page')};
								$('.found_selected').remove();
								setTimeout(function(){$('#u2cc > .found:first,#cc2u > .found:first').trigger('click');},100);
								$('#workarea').html('');
								return true;
								}
							else{return false;}
							};










						function new_up(up,top,left){
							$('#board').append(
								'<div class="box transparent rabbit" type="up" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
							+       '<div class="box_drag" id="box_drag_'+ID+'"></div>'
							+       '<a class="big_link_a" href="https://methodise.me/?'+up.href+'" url="https://methodise.me/?'+up.href+'">'
							+           '<img src="https://methodise.me/R/up.png" class="protect_img_board" style="width:31px;"/>'
							+       '</a>'
							+		up.preface
							+   '</div>'
								);
							return;
							}
						$('.new_up').click(function(){
							way={};
							if(selectedtoobj('up')&&way.up&&way.up.href){
								$('a,iframe').css({'pointer-events':'none'});
								$('#mouse').html('<img src="https://methodise.me/R/up.png" class="protect_img_gray" style="poistion:absolute;top:0px;margin-left:10px;width:20px;height:20px;"/>');
								$('#mouse').css({'opacity':1});
								$('#board').one('click',function(e){
									$('a,iframe').css({'pointer-events':'auto'});
									$('#mouse').css({'opacity':0});
									$('#mouse').html('');
									new_up(way.up,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
									G.setup_preview(ID);
									$('#'+ID).drags({handle:'#box_drag_'+ID});
									$('#'+ID).on('mouseup','#box_drag_'+ID,function(ev){
										setTimeout(function(){$('.sheild').remove();},500);
										console.log($(this).attr('class'),$(this).attr('id'));
										var $box=$(this).closest('.box');
										var rabbit=($box.find('a').attr('url').split('?')[1]).split('&')[0];
										var item='m1¬'+$box.position().top+'¬'+$box.position().left+'¬'+rabbit+'¬'+publisher_key;
										if(G.me.drafts[G.page.id]){
											for(var i=0,length=G.me.drafts[G.page.id].board.length;i<length;i+=1){
												if(G.me.drafts[G.page.id].board[i].split('¬')[3]==rabbit){
													G.me=JSON.parse($.localStorage.getItem('me'));
													G.me.drafts[G.page.id].board[i]=item;
													G.page.board[i]=item;
													save('xy rabbit');
													break;
													}}}
										else{s[0][NULL].WIRE('usr:update_xy_rabbit:svr',{page:G.page.id,item:item});}
										});
									var item='m1¬'+(Number(e.pageY)-Number($('#board').offset().top))+'¬'+(Number(e.pageX)-Number($('#board').offset().left))+'¬'+way.up.href+'¬'+publisher_key;
									if(G.me.drafts[G.page.id]){
										G.me=JSON.parse($.localStorage.getItem('me'));
										G.me.drafts[G.page.id].board.push(item);
										G.page.board.push(item);
										G.me.drafts[G.page.id].links[way.up.href]={id:way.up.href,state:'good',preview:$('#'+ID).find('.found')[0].outerHTML};
										G.page.links[way.up.href]=G.me.drafts[G.page.id].links[way.up.href];
										save('add rabbit');
										}
									else{
										G.page.board.push(item);
										G.page.links[way.up.href]={id:way.up.href,state:(G.me.published.indexOf(G.page.id)!==-1?'good':'ask'),preview:$('#'+ID).find('.found')[0].outerHTML};
										s[0][NULL].WIRE('usr:new_rabbit:svr',{page:G.page.id,item:item});
										}});}});



						function new_down(down,top,left){
			                $('#board').append(
			                    '<div class="box transparent rabbit" type="down" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
			                +       '<div class="box_drag" id="box_drag_'+ID+'"></div>'
			                +       '<a class="big_link_a" href="https://methodise.me/?'+down.href+'" url="https://methodise.me/?'+down.href+'">'
			                +           '<img src="https://methodise.me/R/down.png" class="protect_img_board" style="width:31px;"/>'
			                +       '</a>'
							+		down.preface
			                +   '</div>');
			                return;
			                }
			            $('.new_down').click(function(){
							way={};
			                if(selectedtoobj('down')&&way.down&&way.down.href){
								$('a,iframe').css({'pointer-events':'none'});
			                    $('#mouse').html('<img src="https://methodise.me/R/down.png" class="protect_img_gray" style="poistion:absolute;top:0px;margin-left:10px;width:20px;height:20px;"/>');
			                    $('#mouse').css({'opacity':1});
			                    $('#board').one('click',function(e){
									$('a,iframe').css({'pointer-events':'auto'});
									$('#mouse').css({'opacity':0});
									$('#mouse').html('');
			                        new_down(way.down,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
									G.setup_preview(ID);
									$('#'+ID).drags({handle:'#box_drag_'+ID});
									$('#'+ID).on('mouseup','#box_drag_'+ID,function(){
										setTimeout(function(){$('.sheild').remove();},500);
										var $box=$(this).closest('.box');
										var rabbit=($box.find('a').attr('url').split('?')[1]).split('&')[0];
										var item='m0¬'+$box.position().top+'¬'+$box.position().left+'¬'+rabbit+'¬'+publisher_key;
										if(G.me.drafts[G.page.id]){
											for(var i=0,length=G.me.drafts[G.page.id].board.length;i<length;i+=1){
												if(G.me.drafts[G.page.id].board[i].split('¬')[3]==rabbit){
													G.me=JSON.parse($.localStorage.getItem('me'));
													G.me.drafts[G.page.id].board[i]=item;
													G.page.board[i]=item;
													save('xy rabbit');
													break;
													}}}
										else{s[0][NULL].WIRE('usr:update_xy_rabbit:svr',{page:G.page.id,item:item});}
										});
									var item='m0¬'+(Number(e.pageY)-Number($('#board').offset().top))+'¬'+(Number(e.pageX)-Number($('#board').offset().left))+'¬'+way.down.href+'¬'+publisher_key;
									if(G.me.drafts[G.page.id]){
										G.me=JSON.parse($.localStorage.getItem('me'));
										G.me.drafts[G.page.id].board.push(item);
										G.page.board.push(item)
										G.me.drafts[G.page.id].links[way.down.href]={id:way.down.href,state:'good',preview:$('#'+ID).find('.found')[0].outerHTML};
										G.page.links[way.down.href]=G.me.drafts[G.page.id].links[way.down.href];
										save('add rabbit');
										}
									else{
										G.page.board.push(item);
										G.page.links[way.down.href]={id:way.down.href,state:(G.me.published.indexOf(G.page.id)!==-1?'good':'ask'),preview:$('#'+ID).find('.found')[0].outerHTML};
										s[0][NULL].WIRE('usr:new_rabbit:svr',{page:G.page.id,item:item});
										}});}});


						var target;
						$('.ctrl_eraser').on('click',function(){//there are two erasers so class instead
			                $('a,iframe').css({'pointer-events':'none'});
			                $('#mouse').html('<img src="https://methodise.me/R/eraser.png" class="protect_img_conflict" style="poistion:absolute;top:0px;left:15px;width:20px;height:20px;"/>');
			                $('#mouse').css({'opacity':1});
							$('#board').one('click',function(ev){
								$('a,iframe').css({'pointer-events':'auto'});
								$('#mouse').css({'opacity':0});
								$('#mouse').html('');
								target=undefined;
								target=$(ev.target).closest('.rabbit')[0];
								if(target){
									var rabbit=($(target).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0];
									delete G.page.links[rabbit];
									$(target).find('.found').appendTo('#workarea');
									$('#workarea > .found').attr({'style':'cursor:pointer;position:relative;width:400px;height:100px;background:#fff;margin-bottom:0px;border:6px solid #000;'});
									$('#workarea > .found').removeClass('protect_img_black');
									if(G.me.drafts[G.page.id]||G.me.published.indexOf(G.page.id)!==-1){$('#workarea > .found').prependTo('#cc2u');}
									else{$('#workarea > .found').prependTo('#u2cc');}
									for(var i=0,length=G.page.board.length;i<length;i+=1){
										if(G.page.board[i].split('¬')[3]==rabbit){
											G.page.board.splice(i,1);
											break;
											}}
									if(G.me.drafts[G.page.id]){//you can erase all rabbits
										G.me=JSON.parse($.localStorage.getItem('me'));
										for(var i=0,length=G.me.drafts[G.page.id].board.length;i<length;i+=1){
											if(G.me.drafts[G.page.id].board[i].split('¬')[3]==rabbit){
												G.me.drafts[G.page.id].board.splice(i,1);
												break;
												}}
										save('erase rabbit');
										}
									else{
										if(publisher_key==G.page.protect){//you can erase all rabbits
											s[0][NULL].WIRE('usr:eraser:svr',{page:G.page.id,rabbit:rabbit,publisher_key:publisher_key});
											}
										else if(G.page.board[Number($(target).attr('id'))-1].split('¬')[4]==publisher_key){//only ones by you
											s[0][NULL].WIRE('usr:eraser:svr',{page:G.page.id,rabbit:rabbit,publisher_key:publisher_key});
											}}
									$(target).remove();
									}});});



						s[0][NULL].WHEN['svr:safekey+sig:usr']=function(d){
							safekey_and_sig(d);
							};
						s[0][NULL].WIRE('usr:safekey+sig:svr',{key:G.me.publisher_key,mines:G.me.personal_miner,donate:G.me.monero_public});




						}//you are a publisher
					}//not editing
				}//not finding



			console.log('end!');
			$('#working').remove();
			$('.components_toggle_bounce').each(function(){
                components_toggle_bounce=setInterval(function(){if($('#components_toggle').hasClass('components_toggle_bounce')){jump('components_toggle');}else{clearInterval(components_toggle_bounce);}},1500);
                });


			window._page=G.page;





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
