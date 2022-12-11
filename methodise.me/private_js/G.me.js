var hardhttps=require(__dirname+'/../node_modules/hardhttps');
hardhttps.globalAgent.options.ca=require(__dirname+'/../node_modules/ssl-root-cas/latest');
var forge=require(__dirname+'/../node_modules/node-forge');
var url=require('url');
var ws=require(__dirname+'/../node_modules/ws');
var prvc=require(__dirname+'/../benz_modules/private');
var request=require(__dirname+'/../node_modules/request');
var express=require(__dirname+'/../node_modules/express');
var app=express();
var fs=require('fs');
var safesave=require('write-file-atomic');
var decodeUriComponent=require(__dirname+'/../node_modules/decode-uri-component');
var big=require(__dirname+'/../node_modules/big.js');
var NAME='N';
function splitValue(value,index){
	return [value.substring(0,index),value.substring(index)];
	}









var G={
	pem:{
	    key:require('fs').readFileSync(__dirname+'/../ssl.key','utf8')
	,	cert:require('fs').readFileSync(__dirname+'/../ssl.everything','utf8')
	,	ca:require('fs').readFileSync(__dirname+'/../ssl.ca','utf8')//hardhttps.globalAgent.options.ca
		}
,	BAN:{
		ip:function(_s,caseof,f,d){
			console.log({ip:_s.ip,caseof:caseof,f:f,d:d},'@G-BAN.'+NAME);
			/*
			if(G.BAN.ips[_s.ip]){
				G.BAN.ips[_s.ip].until+=(60000*5);
				G.BAN.ips[_s.ip].reason+=(', '+caseof);
				}
			else if(!G.BAN.ips[_s.ip]){
				G.BAN.ips[_s.ip]={
					until:(+new Date())+(60000*5)
				,	reason:caseof
					};
				}
			_s.close();
			*/
			}
	,	ips:{}
		}
,	https:[10002]
,	listen:function(){
		for(var i=0;i<G.https.length;i+=1){
			if(G.https[i]){
				G.https[i]=(hardhttps.createServer({key:G.pem.key,cert:G.pem.cert,ca:[G.pem.ca],requestCert:false})).listen(G.https[i]);
				G.https[i].on("upgrade",function(req,socket,head){
					var ip=req.headers['x-forwarded-for']||req.connection.remoteAddress||req.socket.remoteAddress||req.connection.socket.remoteAddress;
					for(var k in G.BAN.ips){
						if(G.BAN.ips[k]&&G.BAN.ips[k].until<(+new Date())){
							delete G.BAN.ips[k];
							}}
					if(G.BAN.ips[ip]){
						socket._tlsOptions.server.BANNED=true;
						}});}}return;}
,	s:undefined
,	aes:{//aes
		key:'e0e80ddd269cf5d5fc4a3c31dbac3c24d8318a7f277e979d61d8010fa67121b7'
	,	iv:'a07dc50fcafee6631a7b2cc3168a6b1f301bc0b4c31b860924018cf4f59537ac'
	,	en:function(d){
			var c=forge.rc2.createEncryptionCipher(forge.util.hexToBytes(G.aes.key));
			c.start(forge.util.hexToBytes(G.aes.iv));
			c.update(forge.util.createBuffer(d));
			c.finish();
			return c.output.toHex();
			}
	,	de:function(d){
			var c=forge.rc2.createDecryptionCipher(forge.util.hexToBytes(G.aes.key));
			c.start(forge.util.hexToBytes(G.aes.iv));
			c.update(forge.util.createBuffer(forge.util.hexToBytes(d)));
			c.finish();
			return c.output.data;
			}}
,	cache:{}
	};'< listen <';G.listen();



process.on('uncaughtException',function(ERROR){
		ERROR=ERROR.stack;
		//console.log({ALERT:'CRASH',error:ERROR},'@crash.'+'S.me.js');
		console.log(ERROR);
		});




G.UZR=function(f,d,room){
	G.SS.clients.forEach(function each(c){
		if(c.ROOMS.indexOf(room)!=-1){
			try{c[c.NULL].WIRE(f,d);}catch(IGNORE){}
			}});
	return;
	};
G.SVR=function(f,d,room){
	G.SS.clients.forEach(function each(c){
		if(c.ROOMS.indexOf(room)!=-1){
			try{c[c.NULL].WHEN[f](d);}catch(IGNORE){}
			}});
	return;
	};



	function new_txt(val,width,top,left,ID,editing,html){
	    html=
	        '<div class="box" type="txt" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="txt" style="width:'+width+'px;">'+val+'</div>'
	    +   '</div>';
	    return html;
	    }
	function new_emoji(emoji,top,left,ID,editing,html){
		html=
			'<div class="box transparent" type="emoji" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
		+       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
		+       '<div class="emoji_large">'+emoji+'</div>'
		+   '</div>';
		return html;
		}
	function new_link(href,lable,icon,top,left,ID,editing,html){
	    html=
	        '<div class="box transparent" type="link" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="link">'
		+           '<img src="https://methodise.me/middleman.php?site='+(icon||'https://methodise.me/R/link.png')+'" class="protect_img_black" onerror="setTimeout(function(that){correct_img(that);},2000,this);"/>'
	    +           '<a target="_blank" href="'+href+'" url="'+href+'" rel="'+(false?'':'no')+'follow">'
		+               '<i>'+lable+'</i>'
		+           '</a>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_preview(object,top,left,ID,editing,html){
	    html=
	        '<div class="box" type="preview" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<a class="big_link_a" target="_blank" href="'+object.href+'" url="'+object.href+'" rel="'+(false?'':'no')+'follow">'
	    +           '<div class="big_link">'
	    +               '<div class="h130">'
	    +                   '<img class="cover big_link_img" src="https://methodise.me/middleman.php?site='+object.src+'" onerror="setTimeout(function(that){correct_img(that);},2000,this);"/>'
	    +               '</div>'
	    +               '<div class="tyt">'+object.title+'</div>'
	    +               '<div class="txt">'+object.description+'</div>'
	    +           '</div>'
	    +       '</a>'
	    +   '</div>';
	    return html;
	    };
	function new_img(image,width,clickable,top,left,ID,editing,html){
		html=
	        '<div class="box '+((''+clickable)=='true'?'clickable':'transparent')+'" type="img" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
		+       '<a class="big_link_a" target="_blank" url="'+image+'"'+(clickable=='true'?' href="'+image+'"':'')+'>'
	    +           '<img style="height:auto;width:'+width+'px;display:block;" src="https://methodise.me/middleman.php?site='+image+'" onerror="setTimeout(function(that){correct_img(that);},2000,this);"/>'
	    +       '</a>'
	    +   '</div>';
		return html;
	    }
	function new_youtube(id,top,left,ID,editing,html){
	    html=
	        '<div class="box" type="youtube" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox">'
	    +           '<iframe allowfullscreen allow="encrypted-media" src="https://www.youtube.com/embed/'+id+'"></iframe>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_dtube(id,top,left,ID,editing,html){
	    html=
	        '<div class="box" type="dtube" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox">'
	    +           '<iframe style="width:267px;" src="https://emb.d.tube/#!/'+id+'" allowfullscreen></iframe>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_bitchute(id,top,left,ID,editing,html){
		html=
			'<div class="box" type="bitchute" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
		+       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
		+       '<div class="ibox">'
		+           '<iframe style="width:267px;" src="https://www.bitchute.com/embed/'+id+'" allowfullscreen></iframe>'
		+       '</div>'
		+   '</div>';
		return html;
		}
	function new_liveleak(id,top,left,ID,editing,html){
		html=
			'<div class="box" type="liveleak" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
		+       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
		+       '<div class="ibox">'
		+           '<iframe style="width:267px;" src="https://www.liveleak.com/ll_embed?i='+id+'" allowfullscreen></iframe>'
		+       '</div>'
		+   '</div>';
		return html;
		}
	function new_vimeo(id,top,left,ID,editing,html){
	    html=
	        '<div class="box" type="vimeo" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox">'
	    +           '<iframe style="width:219px;" src="https://player.vimeo.com/video/'+id+'" allowfullscreen></iframe>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_soundcloud(src,top,left,ID,editing,html){
	    html=
	        '<div class="box" type="soundcloud" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox">'
	    +           '<iframe height="166" width="400" scrolling="no" src="'+src+'"></iframe>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_map(src,top,left,ID,editing,html){
	    html=
	        '<div class="box" type="map" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox">'
	    +           '<iframe allowfullscreen style="width:300px;height:250px;" src="'+src+'"></iframe>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_iframe(code,top,left,ID,editing,html){
		var isme=(((code.split('src="')[1]||'').split('"')[0]||'').indexOf('https://methodise.me/'))==0;
		html=
			'<div class="box'+(isme?' transparent':'')+'" type="iframe" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
		+       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
		+       (isme?'':'<div class="box_warn tip" tip="This box contains 3rd party code, so it is not explicitly trusted by Methodise.me"><b>⚠️ </b>Warning: Never give away your private keys!</div>')
		+       '<div class="ibox">'
		+           code
		+       '</div>'
		+   '</div>';
		return html;
		}
	function rabbit_ui(html,rabbit){
		if(rabbit&&rabbit.state=='ask'){
			html=html.replace('###'+rabbit.id+'###',
				'<div class="warn_link hidden_link" style="position:absolute;left:-3px;">'
			+		'<center><div style="background:#FF5722;padding: 2px 3px;border: 1px solid #F44336;display:block;border-radius:1px;text-shadow: 0px 1px 1px #902300;width:fit-content;font-size:9px;"><b>#unverified</b></div></center>'
			+	'</div>'
			+	'<div class="mod_link" style="display:none;z-index:2;font-size:10px;background:#02a0f5;padding:5px;padding-bottom:19px;color:#fff;font-weight:bold;position:absolute;top:62px;left:-7px;width:77px;border-radius:2px;box-shadow:0px 0px 1px #000,0px 0px 1px #000;height:fit-content;">'
			+		'<div style="display:inline-block;width:0;height:0;border-style:solid;border-width:0 7px 6px 7px;border-color:transparent transparent #000000 transparent;position:absolute;top:-6px;left:25px;opacity:0.6;"></div>'
			+		'<div style="display:inline-block;width:0;height:0;border-style:solid;border-width:0 6px 5px 6px;border-color:transparent transparent #02a0f5 transparent;position:absolute;top:-5px;left:26px;"></div>'
			+		'<b style="font-style:normal;font-size:12px;position:absolute;width:60px;">Moderate: </b>'
			+		'<div class="mod_good" style="cursor:pointer;background:#61d045;padding:2px 5px 2px 3px;border:1px solid #00a7a9;display:block;margin-top:4px;border-radius:2px;text-shadow:0px 1px 1px #227706;width:fit-content;border-right-color:#0f9698;position:relative;top:13px;">'
			+			'<b style="font-style:italic;" class="tip" tip="Click #Ok accept this rabbit hole on your page ...">#OK</b>'
			+		'</div>'
			+		'<div class="mod_nsfw" style="cursor:pointer;background:#61d045;padding:2px 5px 2px 3px;border:1px solid #00a7a9;display:block;margin-top:2px;border-radius:2px;text-shadow:0px 1px 1px #227706;width:fit-content;border-right-color:#0f9698;position:relative;top:13px;">'
			+			'<b style="font-style:italic;" class="tip" tip="Click #NSFW to accept this rabbit hole on your page while warning that it leads to content that may not be safe for work ...">#NSFW</b>'
			+		'</div>'
			+		'<div class="mod_warn" style="cursor:pointer;background:#61d045;padding:2px 5px 2px 3px;border:1px solid #00a7a9;display:block;margin-top:2px;border-radius:2px;text-shadow:0px 1px 1px #227706;width:fit-content;border-right-color:#0f9698;position:relative;top:13px;">'
			+			'<b style="font-style:italic;" class="tip" tip="Click #Graffic to accept this rabbit hole on your page while warning that it leads to content may contain visually sensitive material ...">#Graphic</b>'
			+		'</div>'
			+		'<div class="mod_erase" style="cursor:pointer;background:#FF5722;padding:2px 5px 2px 3px;border:1px solid #e05c52;display:block;margin-top:2px;border-radius:2px;text-shadow:0px 1px 1px #861911;width:fit-content;border-right-color:#d6675e;position:relative;top:13px;">'
			+			'<span style="font-family:arial;">&#x1F6AB;</span><b style="font-style:italic;" class="tip" tip="Click &#x1F6AB;ERASE to remove it from your page ...">ERASE</b>'
			+		'</div>'
			+		'<div class="mod_nope" style="cursor:pointer;background:#FF5722;padding:2px 5px 2px 3px;border:1px solid #e05c52;display:block;margin-top:2px;border-radius:2px;text-shadow:0px 1px 1px #861911;width:fit-content;border-right-color:#d6675e;position:relative;top:13px;">'
			+			'<span style="font-family:arial;">&#x1F6AB;</span><b style="font-style:italic;" class="tip" tip="Click &#x1F6AB;DELETE to permanently remove it from your page ...">DELETE</b>'
			+		'</div>'
			+		'<div class="mod_hate" style="cursor:pointer;background:#FF5722;padding:2px 5px 2px 3px;border:1px solid #e05c52;display:block;margin-top:2px;border-radius:2px;text-shadow:0px 1px 1px #861911;width:fit-content;border-right-color:#d6675e8;position:relative;top:13px;">'
			+			'<span style="font-family:arial;">&#x1F6AB;</span><b style="font-style:italic;" class="tip" tip="Click &#x1F6AB;FlagAsBad to down-vote and report this rabbit hole to site moderators while permanently removing it from your page ...">FlagAsBad</b>'
			+		'</div>'
			+	'</div>');
			}
		else if(rabbit&&rabbit.state=='warn'){
			html=html.replace('###'+rabbit.id+'###',
				'<div class="warn_link shown_link" style="position:absolute;left:-1px;">'
			+		'<center><div style="background:#FF5722;padding: 2px 3px;border: 1px solid #F44336;display:block;border-radius:2px;text-shadow: 0px 1px 1px #902300;width:fit-content;font-size:9px;"><b>#Graphic</b></div></center>'
			+	'</div>');
			}
		else if(rabbit&&rabbit.state=='nsfw'){
			html=html.replace('###'+rabbit.id+'###',
				'<div class="warn_link shown_link" style="position:absolute;left:5px;">'
			+		'<center><div style="background:#FF5722;padding: 2px 3px;border: 1px solid #F44336;display:block;border-radius:2px;text-shadow: 0px 1px 1px #902300;width:fit-content;font-size:9px;"><b>#NSFW</b></div></center>'
			+	'</div>');
			}
		return html;
		}
	function get_preface(page,h,earning,rep){
		h='';
		if(G.cache[page]){
			earning=G.omine[G.cache[page].content.donate]||'0.000000000000';//big(G.cache[page].hashed).div(big(1).div(G.coinhive.xmrToUsd)).toFixed(12);
			earning=splitValue(earning,earning.indexOf('.')+3);
			earning=earning[0].toString()+'<b style="color:#03A9F4;">'+earning[1].toString()+'</b>';
			rep=Math.ceil(Number(Number(G.cache[page].quality)+Number(G.cache[page].stars)-Number(G.cache[page].hate)));
			h=
			`<div class="found protect_img_black" page="`+G.cache[page].id+`" style="position:absolute;pointer-events:none;opacity:0;">`
			+  	`<div class="found_cover" style="background-color:`+G.cache[page].content.bg+`;overflow:hidden;">`
			+		`<img src="`+G.cache[page].content.cover+`" style="height:100%;width:100%;" onerror="setTimeout(function(that){correct_img(that);},2000,this);"/>`
			+	`</div>`
			+  	`<div class="found_info">`
			+       `<b style="font-size:12px;">`+G.cache[page].content.title+`</b>`
			+  	   	`<br>`
			+      	`<div class="found_description">`+G.cache[page].content.description+` ...</div>`
			+      	`<div class="found_keywords" style="height:11px;bottom:12px;">`+G.cache[page].content.keywords+`</div>`
			+		`<div class="found_earned">`
			+			'$'+earning
			+			`<div class="found_stats">`
			+				`<img src="https://methodise.me/R/hart.png"/>`
			+				rep
			+			`</div>`
			+		`</div>`
			+   `</div>`
			+`</div>`;
			}
		return h;
		}
	function new_up(href,top,left,rabbit,ID,editing,page_id,html,result){
		result=get_preface(href);
		if(result==''){
			setTimeout(function(ID,href,page_id,G){
				delete G.cache[page_id].links[href];
				G.cache[page_id].content.board.splice(ID,1);
				G.savecache(G.cache[page_id]);
			},1000,ID,href,page_id,G);}
	    html=''
	    +	'<div class="box transparent rabbit" type="up" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       ((editing&&editing!='false')?'<div class="box_drag"></div>':'')
	    +       '<a class="big_link_a" href="https://methodise.me/?'+href+'" url="https://methodise.me/?'+href+'" rel="follow" target="_top">'
	    +           '<img src="https://methodise.me/R/up.png" class="protect_img_board" style="width:31px;"/>'
	    +       '</a>'
		+		result
		+		((rabbit&&['ask','warn','nsfw'].indexOf(rabbit.state)!==-1)?'###'+rabbit.id+'###':'')
	    +   '</div>';
		html=rabbit_ui(html,rabbit);
	    return html;
	    }
	function new_down(href,top,left,rabbit,ID,editing,page_id,html,result){
		result=get_preface(href);
		if(result==''){
			setTimeout(function(ID,href,page_id,G){
				delete G.cache[page_id].links[href];
				G.cache[page_id].content.board.splice(ID,1);
				G.savecache(G.cache[page_id]);
				},1000,ID,href,page_id,G);}
	    html=''
	    +	'<div class="box transparent rabbit" type="down" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       ((editing&&editing!='false')?'<div class="box_drag"></div>':'')
	    +       '<a class="big_link_a" href="https://methodise.me/?'+href+'" url="https://methodise.me/?'+href+'" rel="follow" target="_top">'
	    +           '<img src="https://methodise.me/R/down.png" class="protect_img_board" style="width:31px;"/>'
	    +       '</a>'
		+		result
		+		((rabbit&&['ask','warn','nsfw'].indexOf(rabbit.state)!==-1)?'###'+rabbit.id+'###':'')
	    +   '</div>';
		html=rabbit_ui(html,rabbit);
	    return html;
	    }
	function new_twithash(hash,top,left,ID,editing,html){
	    html=
	        '<div class="box transparent" type="twithash" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox hashtag twitter">'
	    +           '<a target="_blank" href="https://twitter.com/hashtag/'+hash+'" rel="nofollow"><i>'+hash+'</i></a>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_twitat(at,top,left,ID,editing,html){
	    html=
	        '<div class="box transparent" type="twitat" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox at twitter">'
	    +           '<a target="_blank" href="https://twitter.com/'+at+'" rel="nofollow"><i>'+at+'</i></a>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_gabhash(hash,top,left,ID,editing,html){
	    html=
	        '<div class="box transparent" type="gabhash" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox hashtag gab">'
	    +           '<a target="_blank" href="https://gab.ai/hash/'+hash+'" rel="nofollow"><i>'+hash+'</i></a>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_gabat(at,top,left,ID,editing,html){
	    html=
	        '<div class="box transparent" type="gabat" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="ibox at gab">'
	    +           '<a target="_blank" href="https://gab.ai/'+at+'" rel="nofollow"><i>'+at+'</i></a>'
	    +       '</div>'
	    +   '</div>';
	    return html;
	    }
	function new_line(orient,length,color,top,left,ID,editing,html){
	    html=
	        '<div class="box transparent'+(({'h':'','v':'','l':' deg45l','r':' deg45r'})[orient])+'" type="line" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
	    +       (editing&&editing!='false'?'<div class="box_drag"></div>':'')
	    +       '<div class="line '+(['l','v'].indexOf(orient)!==-1?'v':'h')+'" style="'+(['l','v'].indexOf(orient)!==-1?'height:':'width:')+length+'px;background:#'+(color||'ffffff')+';"></div>'
	    +   '</div>';
	    return html;
	    }






	function getpreview(site,cb){
	    if(site.indexOf('http')==-1){site='http://'+site;}
	    request.get({uri:"https://methodise.me/middleman.php",qs:{"site":site}},function(err,res,d){
	        if(err||res.statusCode!==200||!d||d==''||typeof d=='object'){cb({},false);}
	        else{
	            var legacy={};
	            var h=JSON.parse(JSON.stringify(d));
	            h=h.split('<meta ');
	            h.shift();
	            var meta={'twitter:title':'','title':'','twitter:description':'','description':'','twitter:image:src':'','twitter:image':'','og:image':''};
	            for(var i=0;i<h.length;i+=1){
	                h[i]=h[i].split('>')[0];
	                for(var tag in meta){
	                    if(meta[tag]!==''){continue;}
	                    if(h[i].indexOf(tag)!==-1){
	                        try{meta[tag]=(h[i].split('content="')[1]).split('"')[0];}catch(e){}
	                        break;
	                        }}}
	            h={ href:site
	            ,   title:meta['twitter:title']||meta['title']
	            ,   description:meta['twitter:description']||meta['description']
	            ,   src:meta['twitter:image:src']||meta['twitter:image']||meta['og:image']
	                };
	            if(!h.title){
	                try{legacy.title=(d.split('<title>')[1]).split('</title>')[0];}catch(e){
	                    try{legacy.title=(d.split('<h1>')[1]).split('</h1>')[0];}catch(e){
	                        legacy.title='';
	                        }}
	                h.title=legacy.title;
	                }
	            if(!h.description){
	                try{legacy.description=(d.split('<description>')[1]).split('</description>')[0];}catch(e){
	                    legacy.description='';
	                    }
	                h.description=legacy.description;
	                }
	            if(!h.src){
					if(d.indexOf('<body')!==-1){legacy.images=d.split('<body')[1];}
					else{legacy.images=d.split('<BODY')[1];}
					if(legacy.images){legacy.images=legacy.images.split('src="');}
					else{legacy.images=['https://methodise.me/R/missing_preview.png"'];}
					for(var i=0,length=legacy.images.length;i<length;i+=1){
						legacy.images[i]=legacy.images[i].split('"')[0];
						if(legacy.images[i].toLowerCase().indexOf('.jpg')!==-1||legacy.images[i].toLowerCase().indexOf('.jpeg')!==-1||legacy.images[i].toLowerCase().indexOf('.png')!==-1||legacy.images[i].toLowerCase().indexOf('.gif')!==-1){
							h.src=legacy.images[i];
							break;
							}}}
	            meta=null;
				if(h.src.indexOf('//')==0){h.src='http:'+h.src;}
				else if(h.src.indexOf('http')==-1){h.src='http://'+h.src;}
	            cb(h,true);
	            }});}




	function getimg(img,cb){
		request.get({uri:"https://methodise.me/b64.php",qs:{"img":img}},function(err,res,d){
	        if(err||res.statusCode!==200||!d||d==''||typeof d=='object'){cb(img,false);}
	        else{
				img=(img.split('?')[0]).split('.').pop();//get the extention
				if(img=='gif'){img=img+';loop=0'}//bogus param with = instead of :
				cb((d.indexOf('data:image')==-1?('data:image/'+img+';base64,'):'')+d,true);
    			}});};





	function geticon(site,cb){
		cb('https://methodise.me/R/link.png',true);
		}
















	//page can have any number of values in it (some missing if needed)
	G.savecache=function(page,date,free,clone1,clone2){
		if(!G.cache[page.id].editing){
	        G.cache[page.id].editing=free=true;
	        }
	    G.cache[page.id].id=		page.id		||G.cache[page.id].id;
	    G.cache[page.id].key=		page.key	||G.cache[page.id].key;
		G.cache[page.id].quality=	page.quality||G.cache[page.id].quality;
		G.cache[page.id].hate=		G.cache[page.id].hate||0;
	    G.cache[page.id].links=		page.links||G.cache[page.id].links||{blocked:[]};//state safe, nsfw, warn, hate
		G.cache[page.id].links.blocked=G.cache[page.id].links.blocked||[];
		G.cache[page.id].stars=		G.cache[page.id].stars||0;
		G.cache[page.id].hashed=	G.cache[page.id].hashed||0;
		if(!G.cache[page.id].content){G.cache[page.id].content={};}
		G.cache[page.id].content={
			date:		(date?(+new Date()):G.cache[page.id].content.date)
	    ,	title:		page.title		||G.cache[page.id].content.title
	    ,   description:page.description||G.cache[page.id].content.description
	    ,   keywords:	page.keywords	||G.cache[page.id].content.keywords
	    ,   cover:		page.cover		||G.cache[page.id].content.cover
	    ,   bg:			page.bg			||G.cache[page.id].content.bg
	    ,   url:		page.url		||G.cache[page.id].content.url
	    ,   repeat:		page.repeat		||G.cache[page.id].content.repeat
	    ,   blur:		page.blur		||G.cache[page.id].content.blur
	    ,   box:		page.box		||G.cache[page.id].content.box
	    ,   text:		page.text		||G.cache[page.id].content.text
	    ,   link:		page.link		||G.cache[page.id].content.link
	    ,   line:		page.line		||G.cache[page.id].content.line
	    ,   ui:			page.ui			||G.cache[page.id].content.ui
	    ,   logo:		page.logo		||G.cache[page.id].content.logo
		,	font:		page.font		||G.cache[page.id].content.font
	    ,   size:		page.size		||G.cache[page.id].content.size
	    ,   board:		page.board		||G.cache[page.id].content.board
	    ,   mines:		page.mines		||G.cache[page.id].content.mines
	    ,   donate:		page.donate		||G.cache[page.id].content.donate
		,	ld:			page.ld			||G.cache[page.id].content.ld
	        };
		if(page.lock){page.lock=1;}
		if(page.font==''){G.cache[page.id].content.font='';}
		if(page.url==''){G.cache[page.id].content.url='';}
		if(free){
	        clone1=JSON.parse(JSON.stringify(G.cache[page.id]));
	        function savefile(page,date){
	            delete clone1.editing;
	            safesave(__dirname+'/pages/'+page.id+'.json',JSON.stringify(clone1,undefined,'\t'),{},function(){
					clone2=JSON.parse(JSON.stringify(G.cache[page.id]));
					delete clone2.editing;
	                if(JSON.stringify(clone1)!==JSON.stringify(clone2)){
	                    clone1=JSON.parse(JSON.stringify(G.cache[page.id]));
	                    savefile(clone1,date);
	                    }
	                else{
						clone1=clone2=null;
						delete G.cache[page.id].editing;
						}
	                });};
	        savefile(page,date);
	        }
	    return;
	    }


	var useless=[
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','|',' ',
		'about','above','across','after','afterwards','again','against','all','almost','alone','along','already','also','although','always','am','among','amongst','amoungst','amount',
		'an','and','another','any','anyhow','anyone','anything','anyway','anywhere','are','around','as','at','back','be','became','because','become','becomes','becoming','been','before',
		'beforehand','behind','being','below','beside','besides','between','beyond','bill','both','bottom','but','by','call','can','cannot','cant','co','computer','con','could','couldnt',
		'cry','de','describe','detail','do','done','down','due','during','each','eg','eight','either','eleven','else','elsewhere','empty','enough','etc','even','ever','every','everyone',
		'everything','everywhere','except','few','fifteen','fify','fill','find','fire','first','five','for','former','formerly','forty','found','four','from','front','full','further',
		'get','give','go','had','has','hasnt','have','he','hence','her','here','hereafter','hereby','herein','hereupon','hers','him','his','how','however','hundred','ie','if','in','inc',
		'indeed','interest','into','is','it','its','keep','last','latter','latterly','least','less','ltd','made','many','may','me','meanwhile','might','mill','mine','more','moreover',
		'most','mostly','move','much','must','my','name','namely','neither','never','nevertheless','next','nine','no','nobody','none','noone','nor','not','nothing','now','nowhere','of',
		'off','often','on','once','one','only','onto','or','other','others','otherwise','our','ours','ourselves','out','over','own','part','per','perhaps','please','put','rather','re',
		'same','see','seem','seemed','seeming','seems','serious','several','she','should','show','side','since','sincere','six','sixty','so','some','somehow','someone','something',
		'sometime','sometimes','somewhere','still','such','system','take','ten','than','that','the','their','them','themselves','then','thence','there','thereafter','thereby','therefore',
		'therein','thereupon','these','they','thick','thin','third','this','those','though','three','through','throughout','thru','thus','to','together','too','top','toward','towards',
		'twelve','twenty','two','un','under','until','up','upon','us','very','via','was','we','well','were','what','whatever','when','whence','whenever','where','whereafter','whereas',
		'whereby','wherein','whereupon','wherever','whether','which','while','whither','who','whoever','whole','whom','whose','why','will','with','within','without','would','yet','you'
		,'your','yours','yourself','yourselves'
		];



	function construct(page,earning,rep,h){
		earning=G.omine[G.cache[page.id].content.donate]||'0.000000000000';//big(page.hashed).div(big(1).div(G.coinhive.xmrToUsd)).toFixed(12);
		earning=splitValue(earning,earning.indexOf('.')+3);
		earning=earning[0].toString()+'<b style="color:#03A9F4;">'+earning[1].toString()+'</b>';
		rep=Math.ceil(Number(Number(page.quality)+Number(page.stars)-Number(page.hate)));
		h=
		`<div class="found tip" by="`+G.aes.en(page.key)+`" style="float:left;margin-right:10px;" date="`+page.content.date+`" tip="https://methodise.me/?`+page.id+`">`
		+	`<a href="https://methodise.me/?`+page.id+`" target="_top">`
		+  		`<div class="found_cover" style="background-color:`+page.content.bg+`;overflow:hidden;">`
		+			`<img src="`+page.content.cover+`" style="height:100%;width:100%;" onerror="setTimeout(function(that){correct_img(that);},2000,this);"/>`
		+		`</div>`
		+   	`<div class="found_info">`
		+   	    `<b class="found_title" style="font-size:12px;">`+page.content.title+`</b>`
		+  	    	`<br>`
		+       	`<div class="found_description">`+page.content.description+` ...</div>`
		+       	`<div class="found_keywords" style="height:11px;bottom:12px;">`+page.content.keywords+`</div>`
		+			`<div class="found_earned">`
		+				'$'+earning+' '
		+				`<div class="found_stats">`
		+					`<img src="https://methodise.me/R/hart.png"/>`
		+					rep
		+				`</div>`
		+			`</div>`
		+   	`</div>`
		+	`</a>`
		+`</div>`;
		return h;
		}



	G.find_gifted_page=function(d,cb){
		var html=construct(G.cache[d.page]);
		cb({found:html});
		};




	app.get('/find',function(req,res){
		var html=[];
		if(req.query.search){
			req=req.query.search.replace(/\|/g,'/').replace(/\-/g,'+').replace(/\_/g,'=');
			req=forge.util.decode64(req)
			.replace(/\'/g,'')
			.replace(/\"/g,'')
			.replace(/\(/g,'')
			.replace(/\)/g,'')
			.replace(/\,/g,'')
			.replace(/\./g,'')
			.replace(/\?/g,'')
			.replace(/\!/g,'')
			.replace(/\:/g,'')
			.replace(/\;/g,'');
			req={str:req.toLowerCase()};
			req.parts=req.str.split(' ');
			req.revised=[];
			for(var i=0;i<req.parts.length;i+=1){
				if(req.parts[i].length>1&&useless.indexOf(req.parts[i])==-1&&req.revised.indexOf(req.parts[i])==-1){req.revised.push(req.parts[i]);}
				}
			for(var page in G.cache){
				req.relevance=0;
				if((G.cache[page].content.title+' '+G.cache[page].content.description+' '+G.cache[page].content.keywords).toLowerCase().indexOf(req.str)!==-1){
					html.push(construct(G.cache[page]));
					continue;
					}
				else{
					for(var i=0;i<req.revised.length;i+=1){
						if((G.cache[page].content.title+' '+G.cache[page].content.description+' '+G.cache[page].content.keywords).toLowerCase().indexOf(req.revised[i])!==-1){
							req.relevance+=1;
							if(req.relevance>1){
								html.push(construct(G.cache[page]));
								break;
								}}}}}}
		else if(req.query.created&&G.cache[req.query.created]){
			req=G.cache[req.query.created].key;
			for(var page in G.cache){
				if(G.cache[page].key==req){html.push(construct(G.cache[page]));}
				}}
		else if(req.query.published){
			req=req.query.published.split(',');
			for(var page=0;page<req.length;page+=1){
				if(G.cache[req[page]]){html.push(construct(G.cache[req[page]]));}
				}}
		else if(req.query.stars){
			req=req.query.stars.split(',');
			for(var page=0;page<req.length;page+=1){
				if(G.cache[req[page]]){html.push(construct(G.cache[req[page]]));}
				}}
		res.end(html.join(''));
		html=null;
		});


	app.get('/seo',function(req,res){
		var page;
	    try{page=G.cache[req.query.id];if(!page){throw new Error(404);}}
	    catch(e){
	        res.end('');
	        }
	    if(page){
	        var meta=
				'\t\t<title>'+page.content.title+'</title>\n'
			+	'\t\t<link rel="canonical" href="https://methodise.me/?'+page.id+'">'//do this with head of find.php on keyword search only!
			+	'\t\t<meta name="title" content="'+page.content.title+'">\n'
			+	'\t\t<meta name="twitter:title" content="'+page.content.title+'">\n'
			+	'\t\t<meta property="og:title" content="'+page.content.title+'">\n'
			+	'\t\t<meta name="description" content="'+page.content.description+'">\n'
			+	'\t\t<meta name="twitter:description" content="'+page.content.description+'">\n'
			+	'\t\t<meta property="og:description" content="'+page.content.description+'">\n'
			+	'\t\t<meta property="url" content="https://methodise.me/?'+page.id+'">\n'
			+	'\t\t<meta name="twitter:url" content="https://methodise.me/?'+page.id+'">\n'
			+	'\t\t<meta property="og:url" content="https://methodise.me/?'+page.id+'">\n'
			+	'\t\t<meta name="keywords" content="'+page.content.keywords+'">\n'
			+	'\t\t<link rel="image_src" href="'+page.content.cover+'">\n'
			+	'\t\t<meta name="twitter:image" content="'+page.content.cover+'">\n'
			+	'\t\t<meta property="og:image" content="'+page.content.cover+'">\n'
				;
			if(page.content.ld){
				var ld=false;
				try{ld=JSON.stringify(JSON.parse(page.content.ld),null,"\t\t\t");}catch(e){ld=false;}
				if(ld){
					meta=meta+'\t\t<script type="application/ld+json">\n'+ld+'\n\t\t</script>';
					}
				}
	        res.end(meta);
	        }});



	app.get('/page',function(req,res){
		var page;
	    try{page=G.cache[req.query.id];if(!page){throw new Error(404);}}
	    catch(e){
	        res.end('');
	        }
	    if(page){
	        page.content.id=page.id;
	        page.content.protect=forge.md.sha512.create();
	        page.content.protect.update(page.key);
	        page.content.protect=page.content.protect.digest().toHex();
	        page.content.published=true;
			page.content.earning=G.omine[page.content.donate]||'0.000000000000';//big(page.hashed).div(big(1).div(G.coinhive.xmrToUsd)).toFixed(12);
			page.content.stars=page.stars;
			page.content.links=page.links;
			if(page.lock){page.content.lock=page.lock;}
	        res.end(JSON.stringify(page.content));
	        }});



	app.get('/newest',function(req,res){
		res.end(G.newest.join(','));
		});




	app.get('/boxes',function(req,res){
		var page;
	    try{page=G.cache[req.query.id];if(!page){throw new Error(404);}}
	    catch(e){
	        res.end('');
	        }
	    if(page){
	        var box,html='';
	        function next(i){
	            if(i<page.content.board.length-1){loop((i+1));}
	            else{
	                res.end(html);
	                }}
	        function loop(i){
	            box=page.content.board[i].split('¬');
	            if(box[0]=='t'){html+=new_txt(box[3],box[4],box[1],box[2],i,req.query.editing);next(i);}
				else if(box[0]==':D'){html+=new_emoji(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='a'){
					geticon(box[3],function(icon,bool){
						html+=new_link(box[3],box[4],icon,box[1],box[2],i,req.query.editing);next(i);
						});}
	            else if(box[0]=='p'){
					getpreview(box[3],function(object,bool){
						html+=new_preview(object,box[1],box[2],i,req.query.editing);next(i);
						});}
	            else if(box[0]=='i'){
					html+=new_img(box[3],box[5],box[4],box[1],box[2],i,req.query.editing);next(i);
					}
	            else if(box[0]=='e0'){html+=new_youtube(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='e1'){html+=new_dtube(box[3],box[1],box[2],i,req.query.editing);next(i);}
				else if(box[0]=='e5'){html+=new_bitchute(box[3],box[1],box[2],i,req.query.editing);next(i);}
				else if(box[0]=='e6'){html+=new_liveleak(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='e2'){html+=new_vimeo(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='e3'){html+=new_soundcloud(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='e4'){html+=new_map(box[3],box[1],box[2],i,req.query.editing);next(i);}
				else if(box[0]=='f'){html+=new_iframe(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='m0'){html+=new_down(box[3],box[1],box[2],page.links[box[3]],i,req.query.editing,page.id);next(i);}
	            else if(box[0]=='m1'){html+=new_up(box[3],box[1],box[2],page.links[box[3]],i,req.query.editing,page.id);next(i);}
	            else if(box[0]=='#t'){html+=new_twithash(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='@t'){html+=new_twitat(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='#g'){html+=new_gabhash(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0]=='@g'){html+=new_gabat(box[3],box[1],box[2],i,req.query.editing);next(i);}
	            else if(box[0][0]=='|'){html+=new_line(box[0][1],box[3],box[4],box[1],box[2],i,req.query.editing);next(i);}
	            }
	        next(-1);
	        }
	    });



	app.listen(10001);



	G.publish=function(d,cb){
		var exists;
		if(G.cache[d.page.id]){
			if(G.cache[d.page.id].key==d.page.key){
				if(d.page.links){
					for(var k in d.page.links){
						if(k=='blocked'){}
						if(d.page.links[k].state=='erased'){delete G.cache[d.page.id].links[k];}
						else if(G.cache[d.page.id].links[k].state!==d.page.links[k].state){
							if(d.page.links[k].state=='hate'){
								G.cache[d.page.id].hate+=10;
								delete G.cache[d.page.id].links[k];
								}
							else{G.cache[d.page.id].links[k].state=d.page.links[k].state;}
							}}}
				cb(true);
				setTimeout(function(id){
					for(var page in G.cache){
						if(G.cache[page].links[id]&&d.page.key!==G.cache[page].key){
							G.cache[page].links[id]={id:id,state:'ask'};
							setTimeout(function(page){G.savecache(page);},0,G.cache[page]);//tells the linked page to update
							}}
					},0,d.page.id);
				G.savecache(d.page,'date');
				if(G.newest.indexOf(d.page.id)!==-1){G.newest.splice(G.newest.indexOf(d.page.id),1);}
				G.newest.unshift(d.page.id);
				if(G.newest.length>50){G.newest.pop();}
				}
			else{cb(false);}
			}
		else{
			G.cache[d.page.id]={};
			cb(true);
			G.savecache(d.page,'date');
			G.newest.unshift(d.page.id);
			if(G.newest.length>50){G.newest.pop();}
			}};



	G.unpublish=function(d,cb){
		if(G.cache[d.page.id]){
			d.test=forge.md.sha512.create();
	        d.test.update(G.cache[d.page.id].key);
	        d.test=d.test.digest().toHex();
			if(d.test==d.page.protect){
				delete G.cache[d.page.id];
				fs.unlink(__dirname+'/pages/'+d.page.id+'.json');
				for(var page in G.cache){
					if(G.cache[page].links[d.page.id]){
						delete G.cache[page].links[d.page.id];
						setTimeout(function(page){G.savecache(page);},0,G.cache[page]);
						}}
				cb(true);
				if(G.newest.indexOf(d.page.id)!==-1){
					G.newest.splice(G.newest.indexOf(d.page.id),1);
					}}
			else{cb(false);}
			}
		else{cb(false);}
		};



	G.change_published_address=function(d){
		if(G.cache[d.old]){
			G.cache[d.new]=JSON.parse(JSON.stringify(G.cache[d.old]));
			G.cache[d.new].id=d.new;
			delete G.cache[d.old];
			setTimeout(function(page){G.savecache(page);},0,G.cache[d.new]);
			fs.unlink(__dirname+'/pages/'+d.old+'.json',function(){
				if(G.newest.indexOf(d.old)!==-1){
					G.newest[G.newest.indexOf(d.old)]=d.new;
					}
				var change=false;
				for(var p in G.cache){
					change=false;
					if(G.cache[p].links[d.old]){
						change=true;
						G.cache[p].links[d.old].id=d.new;
						G.cache[p].links[d.new]=JSON.parse(JSON.stringify(G.cache[p].links[d.old]));
						delete G.cache[p].links[d.old];
						for(var i=0,length=G.cache[p].content.board.length;i<length;i+=1){
							if(G.cache[p].content.board[i].indexOf('m')==0&&G.cache[p].content.board[i].split('¬')[3]==d.old){
								var split=G.cache[p].content.board[i].split('¬');
								split[3]=d.new;
								G.cache[p].content.board[i]=split.join('¬');
								}}}
					if(G.cache[p].links.blocked.indexOf(d.old)!==-1){
						change=true;
						G.cache[p].links.blocked[G.cache[p].links.blocked.indexOf(d.old)]=d.new;
						}
					if(change){
						setTimeout(function(page){G.savecache(page);},0,G.cache[p]);
						}}});}};





	G.swap_admin=function(d,cb){
		try{d.admin=(G.aes.de(d.admin)).split('¬');}
		catch(e){
			d.admin=false;
			}
		if(d.admin&&G.cache[d.page]&&G.cache[d.page].key==d.by){
			G.cache[d.page].key=d.admin[0];
			G.cache[d.page].content.mines=d.admin[1];
			G.cache[d.page].content.donate=d.admin[2];
			G.cache[d.page].hashed="0.000000000000";
			d.result=true;
			setTimeout(function(page){G.savecache(page);},0,G.cache[d.page]);
			}
		else{d.result=false;}
		cb(d.result);
		};


	G.star_page=function(d,cb){
		if(d.yes){
			G.cache[d.page].stars=Number(G.cache[d.page].stars)+1;
			setTimeout(function(page){G.savecache(page);},0,G.cache[d.page]);
			cb({is:true,star:d.page});
			}
		else{
			G.cache[d.page].stars=Number(G.cache[d.page].stars)-1;
			setTimeout(function(page){G.savecache(page);},0,G.cache[d.page]);
			cb({is:false,star:d.page});
			}
		return;
		};



	G.are_pages_unpublished=function(d,cb,r){
		r={};
		r.published=[];
		for(var i=0,length=d.published.length;i<length;i+=1){
			if(!G.cache[d.published[i]]){r.published.push(d.published[i]);}
			}
		r.stars=[];
		for(var i=0,length=d.stars.length;i<length;i+=1){
			if(!G.cache[d.stars[i]]){r.stars.push(d.stars[i]);}
			}
		cb(r);
		};



	G.get_prefaces=function(d,cb,a,b,c,test){//white_rabbit app
		a=[],c=[],x=[];
		for(var i=0,length=(d.stars?d.stars.length:0);i<length;i+=1){
			if(G.cache[d.stars[i]]&&G.cache[d.stars[i]].key!==d.key&&d.stars[i]!==d.page){//does the page exist? and is it really someone elses page? not the current page
				test=false;
				if(G.cache[d.page]&&G.cache[d.page].links[d.stars[i]]){test=true;}//has your current page already got a hole to this page?
				for(var j=0;j<a.length;j+=1){if(a[j].id==d.stars[i]){test=true;break;}}
				if(!test){
					a.push({
						id:			d.stars[i]
					,	title:		G.cache[d.stars[i]].content.title
					,	description:G.cache[d.stars[i]].content.description
					,	keywords:	G.cache[d.stars[i]].content.keywords
					,	cover:		G.cache[d.stars[i]].content.cover
					,	bg:			G.cache[d.stars[i]].content.bg
					,	emotion:	Number((-Number(G.cache[d.stars[i]].hate))+Number(G.cache[d.stars[i]].stars)-Number(G.cache[d.stars[i]].hate))//+ 0 - number
					,	star:		true
					,	ublocked:	(G.cache[d.page]&&G.cache[d.page].links.blocked.indexOf(G.cache[d.stars[i]].id)!==-1?true:false)
						});}}}
		for(var i=0,length=(d.published?d.published.length:0);i<length;i+=1){//(if only get these) you are on someone elses page so you are only allowed to lay holes to your own pages (else you are on your own page)
			if(G.cache[d.published[i]]&&G.cache[d.published[i]].key==d.key&&d.published[i]!==d.page){//does the page exist? and is it really your page? not the current page
				test=false;
				if(G.cache[d.page]&&G.cache[d.page].links.blocked.indexOf(d.published[i])!==-1){test=true;}//has the current page blocked your page?
				if(G.cache[d.page]&&G.cache[d.page].links[d.published[i]]){test=true;}//has the current page already got a hole to your page?
				if(!test){for(var j=0;j<a.length;j+=1){if(a[j].id==d.published[i]){test=true;break;}}}//no duplicates
				if(!test){for(var j=0;j<c.length;j+=1){if(c[j].id==d.published[i]){test=true;break;}}}//no duplicates
				if(!test){
					c.push({
						id:			d.published[i]
					,	title:		G.cache[d.published[i]].content.title
					,	description:G.cache[d.published[i]].content.description
					,	keywords:	G.cache[d.published[i]].content.keywords
					,	cover:		G.cache[d.published[i]].content.cover
					,	bg:			G.cache[d.published[i]].content.bg
					,	emotion:	Number((-Number(G.cache[d.published[i]].hate))+Number(G.cache[d.published[i]].stars)-Number(G.cache[d.published[i]].hate))//+ 0 - number
						});}}}
		for(var i=0,length=(d.blocked?d.blocked.length:0);i<length;i+=1){
			if(G.cache[d.blocked[i]]&&d.blocked[i]!==d.page){//does the page exist? not the current page
				test=false;
				if(G.cache[d.page]&&G.cache[d.page].links[d.blocked[i]]){test=true;}//has the current page already got a hole to your page?
				if(!test){for(var j=0;j<a.length;j+=1){if(a[j].id==d.blocked[i]){test=true;break;}}}//no duplicates
				if(!test){for(var j=0;j<c.length;j+=1){if(c[j].id==d.blocked[i]){test=true;break;}}}//no duplicates
				if(!test){for(var j=0;j<x.length;j+=1){if(x[j].id==d.blocked[i]){test=true;break;}}}//no duplicates
				if(!test){
					x.push({
						id:			d.blocked[i]
					,	title:		G.cache[d.blocked[i]].content.title
					,	description:G.cache[d.blocked[i]].content.description
					,	keywords:	G.cache[d.blocked[i]].content.keywords
					,	cover:		G.cache[d.blocked[i]].content.cover
					,	bg:			G.cache[d.blocked[i]].content.bg
					,	emotion:	Number((-Number(G.cache[d.blocked[i]].hate))+Number(G.cache[d.blocked[i]].stars)-Number(G.cache[d.blocked[i]].hate))//+ 0 - number
						});}}}
		cb(c.concat(a).concat(x));
		};





	G.get_alerts=function(d,cb){
		for(var i=0,length=d.published.length;i<length;i+=1){
			d.alerts={'forpage':d.published[i],'ev':0};
			if(G.cache[d.published[i]]){
				d.alerts.title=G.cache[d.published[i]].content.title;
				for(var l in G.cache[d.published[i]].links){
					if(G.cache[d.published[i]].links[l].state=='ask'){
						if(G.cache[G.cache[d.published[i]].links[l].id]){
							d.page=G.cache[G.cache[d.published[i]].links[l].id];
							d.alerts.ev+=1;
							}
						else{
							delete G.cache[d.published[i]].links[l];
							setTimeout(function(page){G.savecache(page);},0,G.cache[page]);
							}}}}
			d.published[i]=d.alerts;
			}
		for(var page in G.cache){
			var i=0,found=false;
			for(var length=d.published.length;i<length;i+=1){if(d.published[i].forpage==page){found=true;}}
			i=null;
			if(G.cache[page].key==d.key&&!found){//if you are the admin but the page is not listed in your published pages (you got a gift)
				found=null;
				d.alerts={'forpage':page,'ev':1,'title':G.cache[page].content.title};
				for(var l in G.cache[page].links){
					if(G.cache[page].links[l].state=='ask'){
						if(G.cache[G.cache[page].links[l].id]){
							d.page=G.cache[G.cache[page].links[l].id];
							d.alerts.ev+=1;
							}
						else{
							delete G.cache[page].links[l];
							setTimeout(function(page){G.savecache(page);},0,G.cache[page]);
							}}}
				d.published.push(d.alerts);
				}}
		cb({published:d.published});
		};



	G.lock=function(d){
		if(G.cache[d.page]&&G.cache[d.page].key==d.key){
			if(G.cache[d.page].lock){delete G.cache[d.page].lock;}
			else{G.cache[d.page].lock=1;}
			}
		G.savecache(G.cache[d.page]);
		};




	G.page_hashed=function(d){
		console.dir({'hashed':d});
		G.cache[d.page].hashed=big(G.cache[d.page].hashed).plus(big(d.hashed).times(big(G.coinhive.payoutPer1MHashes).div(1000000))).toFixed(12);
		G.savecache(G.cache[d.page]);
		};



	G.mod_link=function(d){//this happens as a socket event for a single rabbit hole on the event of click
		d.test=forge.md.sha512.create();
		d.test.update(G.cache[d.page].key);
		d.test=d.test.digest().toHex();
		if(d.publisher_key==d.test){
			if(G.cache[d.page]){
				if(d.state=='erase'){
					delete G.cache[d.page].links[d.rabbit];
					G.eraser({page:d.page,rabbit:d.rabbit,publisher_key:d.publisher_key});
					}
				else if(['nope','hate'].indexOf(d.state)!=-1){
					G.cache[d.page].links.blocked.push(d.rabbit);
					delete G.cache[d.page].links[d.rabbit];
					if(G.cache[d.rabbit]){
						if(d.state=='hate'){G.cache[d.rabbit].hate+=((G.cache[d.page].quality-G.cache[d.page].hate)/5);}
						else{G.cache[d.rabbit].hate+=((G.cache[d.page].quality-G.cache[d.page].hate)/10);}
						}
					G.eraser({page:d.page,rabbit:d.rabbit,publisher_key:d.publisher_key});
					}
				else{
					G.cache[d.page].links[d.rabbit].state=d.state;
					setTimeout(function(page){G.savecache(page);},0,G.cache[d.rabbit]);
					}}}};



	G.new_rabbit=function(d){//page=page.id item=new_board_item(containing the protected publisher key to indicate ownership or not)
		d.id=d.item.split('¬')[3];
		if(G.cache[d.page]){
			d.test=forge.md.sha512.create();
			d.test.update(G.cache[d.page].key);
			d.test=d.test.digest().toHex();
			if(d.item.split('¬')[4]==d.test){//page owner
				if(G.cache[d.page].links.blocked.indexOf(d.id)!==-1){
					G.cache[d.page].links.blocked.splice(G.cache[d.page].links.blocked.indexOf(d.id),1);
					}
				G.cache[d.page].links[d.id]={id:d.id,state:'good'};
				}
			else{
				G.cache[d.page].links[d.id]={id:d.id,state:'ask'};
				}
			G.cache[d.page].content.board.push(d.item);
			setTimeout(function(page){G.savecache(page);},0,G.cache[d.page]);
			}};


	G.eraser=function(d){//page=page.id rabbit=link/page.id publisher_key(the protected publisher key to indicate ownership or not)
		d.test=forge.md.sha512.create();
		d.test.update(G.cache[d.page].key);
		d.test=d.test.digest().toHex();
		if(G.cache[d.page]){
			for(var i=0,length=G.cache[d.page].content.board.length;i<length;i+=1){
				if(G.cache[d.page].content.board[i].split('¬')[3]==d.rabbit){
					if(d.publisher_key==d.test||G.cache[d.page].content.board[i].split('¬')[4]==d.publisher_key){//if you are the page owner or the rabbit is one of yours
						G.cache[d.page].content.board.splice(i,1);
						delete G.cache[d.page].links[d.rabbit];
						setTimeout(function(page){G.savecache(page);},0,G.cache[d.page]);
						break;
						}}}}};


	G.update_xy_rabbit=function(d){//move rabbit from with in non-editing mode after user has dropped it on the board
		if(G.cache[d.page]){
			for(var i=0,length=G.cache[d.page].content.board.length;i<length;i+=1){
				if(d.item.split('¬')[4]==G.cache[d.page].content.board[i].split('¬')[4]){//same creator
					if(d.item.split('¬')[3]==G.cache[d.page].content.board[i].split('¬')[3]){
						G.cache[d.page].content.board[i]=d.item;
						setTimeout(function(page){G.savecache(page);},0,G.cache[d.page]);
						break;
						}}}}};




	Number.prototype.toSatoshi=function(){
	    if (isNaN(this)) return NaN;
	    if (this === 0) return 0;
	    var str = this.toString();
	    var sign = (str.indexOf('-') === 0) ? "-" : "";
	    str = str.replace(/^-/, '');
	    if (str.indexOf('e') >=0) {
	        return parseInt(sign + str.replace(".", "").replace(/e-12/, "").replace(/e-11/, "0"), 10);
	    } else {
	        if (!(/\./).test(str)) str += ".0";
	        var parts = str.split(".");
	        str = parts[0] + "." + parts[1].slice(0,12);
	        while (!(/\.[0-9]{12}/).test(str)) {
	            str += "0";
	        }
	        return parseInt(sign + str.replace(".", "").replace(/^0+/, ""), 10);
	    }
	};
	Number.prototype.toBitcoin=function(){
	    if (isNaN(this)) return NaN;
	    if (this === 0) return 0;
	    var str = parseInt(this, 10).toString();
	    var sign = (str.indexOf('-') === 0) ? "-" : "";
	    str = str.replace(/^-/, '');
	    var lengthTester = (/[0-9]{12}/);
	    while (!lengthTester.test(str)) {
	        str = "0" + str;
	    }
	    str = str.slice(0, str.length - 12) + "." + str.slice(str.length - 12);
	    if (str[0] === '.') str = '0' + str;
	    return parseFloat(sign + str);
	};
	Number.prototype.zeroFill = function(places) {
	    if (isNaN(this)) return NaN;
	    if (!places) {
	        places = 12;
	    }
	    var str = this.toString();
	    var parts = str.split(".");
	    if (parts.length === 1) {
	        parts.push("0");
	    }
	    var needed = places - parts[1].length;
	    for (var i = 0; i < needed; i++) {
	        parts[1] += '0';
	    }
	    return parts[0] + "." + parts[1];
	};


	G.omine={};//address:balance_usd
	G.omine_update_estimate=function(d){
		require(__dirname+'/../node_modules/request').get({uri:"https://xmr.omine.org:8122/stats_address",qs:{'address':d.address}},function(err,res,r){
			r=JSON.parse(r);
			console.log({err:err,code:res.statusCode,r:r,bal:r.stats.balance,address:d.address});
			if(err||res.statusCode!==200){}
			else if(r&&r.stats){//todo get all past payments
				G.omine[d.address]=
					big(
						Number(big(Number(r.stats.balance||0)).plus(Number(r.stats.payout_estimate||0).toSatoshi())).toBitcoin()
						).times(Number(G.coinhive.xmrToUsd)).toFixed(12);
				console.log(G.omine);
				}
			});};




	G.coinhiveStats=function(cb){
		require(__dirname+'/../node_modules/request').get({uri:"https://api.coinhive.com/stats/payout",qs:{'secret':'jeoZZU9hsILiEZq7ZDePJ3UQD9lTnMMx'}},function(err,res,d){
			if(err||res.statusCode!==200){
				G.coinhive=JSON.parse(require(__dirname+'/coinhive.json'));
				cb();
				}
			else{
				G.coinhive=JSON.parse(d);
				fs.writeFile(__dirname+'/coinhive.json',JSON.stringify(G.coinhive,undefined,'\t'),function(){
					cb();
					});}});};

	setInterval(function(){G.coinhiveStats(function(){
		//cron?
		});},((1000*60)*60)*4);






	G.coinhiveStats(function(){
		fs.readdir(__dirname+'/pages',function(err,files){
			G.newest=[];
		    files.forEach(function(file){
				file=require(__dirname+'/pages/'+file);
		        G.cache[file.id]=file;
				G.newest.push({id:file.id,d:file.content.date});
		        });
			G.newest.sort(function(a,b){
			    return new Date(a.d) - new Date(b.d)
				});
			for(var i=0,length=G.newest.length;i<length;i+=1){
				G.newest[i]=G.newest[i].id;
				}
			if(G.newest.length>50){G.newest.length=50;}
		    require(__dirname+'/s.REWIRE2.js')('methodise.me',[0],[10002],'S.me.js',G);
		    });
		});
