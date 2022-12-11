

	

var BOSH_SERVICE = 'http://bosh.metajack.im:5280/xmpp-httpbind';
var connection = null;
var testconnec = null;
var who=1;
var spoke=0;
var fname,fid;
var ti,ti2;
var composesent=0;
var fb_sound=new Audio("http://methodise.me/strophe/fb.mp3");
var access_token;
var NN = 0;
var Q; //FQL
var meid,me;//Qid is every one including me
var apiKey='301135526661971';
var allunread=0;
var Pt1 = '<div style="position:relative;width:300px;height:34px;background-color:#F2F4F8;border-style:none;line-height:34px;clear:both;cursor:pointer;"class="Bf"memory=""value="';
var Pt2 = '"title="';
var Pt3 = '<img width="30px"height="30px"style="margin:2px;margin-left:5px;margin-right:8px;"align="left"src="';
var Pt4 = '"/>';
var fb_minmax=0;
var fb_ui=
	'<style>'+
	'.spoke{position:relative;top:0px;left:0px;margin-left:5px;margin-top:2px;clear:both;white-space:pre-wrap;word-wrap:break-word;}'+
	'.spokeimg{width:30px;height:30px;float:left;margin-top:5px;margin-bottom:5px;background-size:30px 30px!important;-webkit-background-size:30px 30px!important;}'+
	//'.spokeimg{width:30px;height:30px;float:left;margin-top:5px;margin-bottom:5px;}'+
	'.said{float:left;margin-left:8px;margin-top:5px;max-width:200px;}'+
	'</style>'+
	'<div id="fb_chat" style="z-index:11;text-align:left;font-style:normal;font-size;12px/1.1em;font-family:lucida grande,tahoma,verdana,arial,sans-serif;line-height:1.4em;font-size:62.5%;position:fixed;bottom:26px;right:10px;width:260px;height:290px;border:1px solid #000;font-family:lucida grande, tahoma, verdana, arial, sans-serif;"><div id="fb_h"value="noone"style="position:relative;top:0px;background:#CC3232;width:100%;height:26px;color:#FFF;font-weight:bold;"></div><div id="fb_s"style="position:relative;top:0px;background:#FFFFFF;width:100%;max-height:240px;min-height:50px;overflow-y:auto;"><div id="log"style="position:relative;top:0px;margin-bottom:14px;clear:both;"></div><div id="iscomposing"style="position:relative;bottom:0px;left:43px;height:14px;margin-bottom:6px;width:200px;color:#B3B3B3;clear:both;"></div></div><textarea rows="1"id="jid"style="position:absolute;bottom:0px;max-width:250px;min-width:250px;left:0px;min-height:14px;padding:5px;margin:0px;outline:none;border:none;border-top:1px solid #EEE;resize:none;"></textarea><input type="text" id="fid"style="display:none;"></div>'+
        '<div id="fb_friendlist"style="z-index:10;text-align:left;font-style:normal;font-size;12px/1.1em;font-family:lucida grande,tahoma,verdana,arial,sans-serif;line-height:1.4em;font-size:62.5%;position:fixed;float:right;width:261px;right:10px;bottom:26px;height:100%;background-color:#F2F4F8;border-left:#333 1px solid;border-bottom:#000 1px solid;overflow-y:auto;overflow-x:hidden;"><div id="non"style="position:absolute;top:56px;width:183px;"></div><br></div>'+
        '<div id="fb_tog"class="fb_minimised"style="z-index:10;text-align:left;font-style:normal;font-size;12px/1.1em;font-family:lucida grande,tahoma,verdana,arial,sans-serif;line-height:1.4em;font-size:62.5%;position:fixed;bottom:0px;right:10px;width:261px;height:25px;background-color:#FF734D;border-left:#333 1px solid;border-bottom:#000 1px solid;-webkit-box-shadow: inset 2px 0 0 -1px #CC3232, inset 0 1px #CC3232;cursor:pointer;"><span id="fb_min"class="fb_text"style="float:left;margin:5px;margin-top:6px;font-weight:bold;color:#FFF;">Need Help? Ask Customer Support A Question...<!--img src="http://methodise.me/R/fb_usersonline.png"> <b>Chat (<b id="fb_numo"></b>)</b> <span id="allunread"style="background:red;color:#FFF;font-weight:bold;"></span></span><span style="float:right;margin-right:20px;margin-top:6px;"><img id="fb_togimg"src="http://methodise.me/R/fb_max.png"--></span></div>'+
        '<div id="fb_offscreen"style="display:none"><img id="fb_loading"style="float:left;margin:5px;margin-top:13px;width:9px;"src="http://methodise.me/R/fb_loading.gif"><div id="fb_profile"style="z-index:70000;position:fixed;right:300px;background:url(http://methodise.me/R/fb_visit.png);height:35px;width:80px;"><img id="fb_visit"style="float:left;margin:5px;width:25px;"src=""><a class="fb_a"href=""target="_blank"style="line-height:32px;">visit</a></div><div id="kill"></div></div>';








$(document).ready(function(){





$('body').append(fb_ui);
    
    $.getScript("http://31.3.244.229:8000/socket.io/socket.io.js",function(){
	var socket = io.connect('http://31.3.244.229:8000');
	
	
	
	var nickname;
	
	if(document.location.href.search('support') != -1){
	    nickname=document.location.href.split('support=');nickname=nickname[1];
	    socket.emit('chat_namejoinsupport',{'nickname':nickname});
	    }
	
	if(document.location.href.search('guest') != -1){
	    nickname=document.location.href.split('?guest');
	    nickname='guest'+nickname[1];
	    socket.emit('chat_namejoinsupport',{'nickname':nickname});
	    }
	
	
	
	var to='support';
	var memory='support';
	
	
	
	
	socket.on('whosonline',function(_){
	    socket.emit('speak',{'to':_.nickname,'nickname':nickname,'words':'_is_online_'});
	    });
	
	
	
	
	
	socket.on('chat_createsupport',function(){
	    $('#non').append(Pt1+'support'+Pt2+'support'+'">'+Pt3+avatar('support')+Pt4+'<span class="fb_text">'+'support'+'</span> <n class="lspot"></n><span class="unread"style="background:red;color:#FFF;font-weight:bold;"></span><img style="float:right;margin-right:30px;margin-top:13px;width:7px;"src="http://methodise.me/R/fb_active.png"><br></div>');
	    $('#fb_h').attr({'value':'support'}).html('<span style="position:relative;top:6px;margin:5px;"><!--img style="float:left;margin:5px;margin-top:9px;width:8px;"src="http://methodise.me/R/fb_active.png"-->@'+to+'<!--img id="fb_x"style="cursor:pointer;float:right;margin:5px;margin-top:8px;"src="http://methodise.me/R/fb_x.png"--></span>');
	    chatoptions('support');
	    });
	
	
	
	
	$("#jid").autosize({callback:chat_height});
	
	
	
	
	$('#jid').unbind().bind('textchange keyup',function(event){
        if(event.keyCode==13){
	    event.preventDefault();
	    if($('#jid').val()!=''){var words=$('#jid').val();
		var d=Math.round(+new Date()/1000);
		if($('.spoke').last().attr('from')==nickname){log('<div class="spoke"from="'+nickname+'"id="c'+d+'"><div class="spokeimg"style="background:url(http://up4it-smartcard.com/R/n.png);"></div><div class="said"><span class="fb_text">'+linkify(words)+'</span><br></div></div>','');
		    }
		else{log('<div class="spoke"from="'+nickname+'"id="c'+d+'"><div class="spokeimg"style="background:url('+avatar(nickname)+');"></div><div class="said"><span class="fb_text"><b style="color:#CC3232;">'+nickname+':</b><br>'+linkify(words)+'</span><br></div></div>','');
		    }
		socket.emit('speak',{'to':to,'nickname':nickname,'words':$('#jid').val(),'d':d});
		$('#jid').val('');
		$('#jid').height(14);
		chat_height();
		save();
		}
	    return false;
	    }
	    else{
		if(composesent==0){composesent=1;socket.emit('speak',{'to':to,'nickname':nickname,'words':'_composing_'});}
		window.clearTimeout(ti);ti=window.setTimeout(function(){composesent=0;},5000);
		}
	    });
	    
	    
	function avatar(n){
	    if(n=='support'){return 'http://up4it-smartcard.com/R/up4it100.png';}else
	    if(n=='Benz'){return 'http://up4it-smartcard.com/R/BIGbenzmuircroft.png';}else
	    if(n=='Jon'){return 'http://up4it-smartcard.com/R/BIGjonvarley.png';}else
	    if(n.match('guest')){return 'http://up4it-smartcard.com/R/guest.png';}//guest
	    }
	    
	function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
	function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}

    

    
    var lastcomposer='';
    var ti2;
    
    
	socket.on('say',function(_){
	    if(nickname!=_.from && $('.Bf[value='+_.from+']').length==0){
		$('#non').append(Pt1+_.from+Pt2+_.from+'">'+Pt3+avatar(_.from)+Pt4+'<span class="fb_text">'+_.from+'</span> <n class="lspot"></n><span class="unread"style="background:red;color:#FFF;font-weight:bold;"></span><img style="float:right;margin-right:30px;margin-top:13px;width:7px;"src="http://methodise.me/R/fb_active.png"><br></div>');
		chatoptions(_.from);
		}
	    if(_.words!='_is_online_'&&_.words!='_composing_'){
		if(lastcomposer===_.from){$('#iscomposing').html('');}
		if($('.spoke').last().attr('from')==_.from){var said='<div class="spoke"from="'+_.from+'"id="c'+_.d+'"><div class="spokeimg"style="background:url(http://up4it-smartcard.com/R/n.png);"></div><div class="said"><span class="fb_text">'+linkify(_.words)+'</span><br></div></div>';
		    }
		else{var said='<div class="spoke"from="'+_.from+'"id="c'+_.d+'"><div class="spokeimg"style="background:url('+avatar(_.from)+');"></div><div class="said"><span class="fb_text"><b style="color:#CC3232;">'+_.from+':</b><br>'+linkify(_.words)+'</span><br></div></div>';
		    }
		if(_.to==$('#fb_h').attr('value') || (_.to==nickname&&_.from==$('#fb_h').attr('value')) ){//if msg to current room |or| to you and from current room
		    log(said,_);
		    }
		else if(_.to==nickname&&_.from!=$('#fb_h').attr('value')){//if to you and from other room
		    $('.Bf[value='+_.from+']').attr({'memory':$('.Bf[value='+_.from+']').attr('memory')+hexEncode(said)});
		    var Bfn=$('.Bf[value='+_.from+']').find('.unread');
		    if(Bfn.text()==''){Bfn.text(1);}else{var unread=Number(Bfn.text());unread=unread+1;Bfn.text(unread);}
		    }
		else{
		    $('.Bf[value='+_.to+']').attr({'memory':$('.Bf[value='+_.to+']').attr('memory')+hexEncode(said)});
		    var Bfn=$('.Bf[value='+_.to+']').find('.unread');
		    if(Bfn.text()==''){Bfn.text(1);}else{var unread=Number(Bfn.text());unread=unread+1;Bfn.text(unread);}
		    }
		    save();}
	    else if(_.words=='_composing_'&& (_.from==$('#fb_h').attr('value') || _.to==$('#fb_h').attr('value'))){
		if(lastcomposer!==_.from){window.clearTimeout(ti2);}
		$('#iscomposing').html(_.from+' is typing...');ti2=setTimeout(function(){$('#iscomposing').html('');},5000);
		lastcomposer=_.from;
		}
	    });
	
	
	
	
	
	
	
	
	
	
	function chatoptions(nn){
	    $('.Bf[value='+nn+']').unbind().bind('click',function(){
		$('#fb_chat').show();
		/*set memory*/memory=to;$('.Bf[value='+memory+']').attr({'memory':hexEncode($('#log').html())});
		/*get memory*/to=$(this).attr('value');$('#log').html(hexDecode($('.Bf[value='+to+']').attr('memory')));
		$('#fb_h').attr({'value':to}).html('<span style="position:relative;top:6px;margin:5px;"><!--img style="float:left;margin:5px;margin-top:9px;width:8px;"src="http://methodise.me/R/fb_active.png"-->@'+to+'<!--img id="fb_x"style="cursor:pointer;float:right;margin:5px;margin-top:8px;"src="http://methodise.me/R/fb_x.png"--></span>');
		$(this).find('.unread').text('');
		killcoment();
		});}
	
	
	//$('#fb_x').click(function(){});
	
	
	//$.localStorage.setItem('store','');
	
	
	setTimeout(function(){
	    var store=$.localStorage.getItem('store').split(',day=');
	    var d=new Date();
	    if(d.getDate()==store[1]){
		store=store[0].split(',');
		for(i=0;i<store.length;i++){
		    var room=store[i].split(':');
		    var conv=room[1];
		        room=room[0];
		    $('.Bf[value='+room+']').attr({'memory':conv});
		    if($('#fb_h[value='+room+']').length==1){$('#log').html(hexDecode(conv));killcoment();}
		    }
		}
	    },1500);
	
	
	//$.localStorage.setItem('store','');
	
	function save(){
	    memory=to;$('.Bf[value='+memory+']').attr({'memory':hexEncode($('#log').html())});
	    var store='';
	    $.each($('.Bf'),function(){
		if($(this).attr('memory')!=''){store=store+$(this).attr('value')+':'+$(this).attr('memory')+',';}
		});
	    var d=new Date();
	    store=store+'day='+d.getDate();
	    $.localStorage.setItem('store',store);
	    killcoment();
	    };
	
	
	function killcoment(){
	    $('.spokeimg').bind('mouseenter',function(){
		var d=Math.round(+new Date()/1000);
		$(this).html('<img id="x'+d+'"src="http://methodise.me/R/fb_x.png"style="bottom:2px;padding:2px;cursor:pointer;"/>');
		$('#x'+d).click(function(){
		    var kill=$(this).closest('.spoke');
		    var killfrom=kill.attr('from');
		    $('#x'+d).unbind().remove();
		    $('#kill').html(kill.clone());
		    //kill.remove();
		    var kill=new String($('#kill').html());
		    $('#kill').html('');
		    //
		    kill=hexEncode(kill);
		    $('.Bf[value='+to+']').attr('memory').replace(kill,'');
		    socket.emit('kill',{'nickname':nickname,'to':to,'kill':kill,'from':killfrom});
		    //save();
		    });
		});
	    $('.spokeimg').bind('mouseleave',function(){$(this).html('');});
	    }
	    
	    
	socket.on('chat_killcomment',function(_){
	    $('.Bf[value='+_.to+']').attr('memory').replace(_.kill,'');
	    if($('#fb_h[value='+_.to+']').length==1){
		$.each($('.spoke'),function(){
		    $(this).wrap('<div></div>');
		    if(hexEncode($(this).parent().html())===_.kill){
			$(this).parent().remove();
			$.each($('.spoke'),function(){
			    if($(this).find('.spokeimg').css('background').match('/n.png')&&$(this).attr('from')!==$(this).prev().attr('from')){
				$(this).find('.spokeimg').css({'background':'url('+avatar($(this).attr('from'))+')'});
				}});
			//var spokelast=$(this).prev();
			//spokelast.find('.spokeimg').css({'border':'1px solid #000'});
			//alert('_____'+spokelast.find('.spokeimg').css('background'));
			//if(spokelast.find('.spokeimg').css('background')==='url(http://up4it-smartcard.com/R/n.png)'){spokelast.css({'background':'url('+avatar(spokelast.attr('from'))+')'});}
			}
		    else{
			$(this).unwrap();
			}
		    });
		}save();
	    });
	
	
	
    
    });//socket.io
});//ready







var ord='normal';





function linkify(fb_text){
    var replaceText, replacePattern1, replacePattern2, replacePattern3;
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;//URLs starting with http://, https://, or ftp://
    replacedText = fb_text.replace(replacePattern1, '<a class="fb_a"href="$1"target="_blank">$1</a>');
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;//URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacedText = replacedText.replace(replacePattern2, '$1<a class="fb_a"href="http://$2"target="_blank">$2</a>');
    replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;//Change email addresses to mailto:: links.
    replacedText = replacedText.replace(replacePattern3, '<a class="fb_a"href="mailto:$1">$1</a>');
    return replacedText;}




function log(msg,simple){
  if(ord=='normal'){
      if(spoke!=who){$('#log').append(msg+'');}
      else{
        $('.spoke:last').find('.said').append(simple+'<br>');
        }}
  else{
      if(spoke!=who){$('#log').prepend(msg+'');}
      else{
        $('.spoke:first').find('.said').prepend(simple+'<br>');
        }}
        $('#jid').height(14);
        chat_height();
        }






function rawInput(data){//$('#console').append('<div></div>').append(document.createTextNode(data));$('#console').append('<br><br>');
  if(data.match('</message>')){
    //
    if(data.match("@chat.facebook")){var qfid=data.split("from='-");qfid=qfid[1].split("@chat.facebook");qfid=qfid[0];}else{qfid=fid;}
    if(qfid==fid){
    if(data.match('<composing')){$('#iscomposing').html(fname.substring(0,fname.indexOf(' '))+' is typing...');setTimeout(function(){$('#iscomposing').html('');},15000);}
    else if(data.match('</body></message>')){
      spoke=who;
      who=1;
      log('<div class="spoke"style="position:relative;top:0px;left:0px;margin-left:5px;margin-top:2px;border-top:1px solid #EEE;clear:both;white-space:pre-wrap;word-wrap:break-word;">'+//min-height:40px;
          '<img width="30px"height="30px"style="float:left;margin-top:5px;margin-bottom:5px;margin-right:"src="http://graph.facebook.com/'+fid+'/picture?type=square"/>'+
          '<div class="said"style="float:left;margin-left:8px;margin-top:5px;max-width:200px;"><span class="fb_text">'+linkify(data)+'</span><br></div></div>'
          ,data);
      if(ord=='normal'){fb_sound.play();}
      }
    }else{//(qfid!=fid)
      if(data.match('</body></message>')){
        var unread=$('.Bf[value="'+qfid+'"] > .unread');if(unread.text()==''){unread.text(1);}else{var unreadnum=unread.text();unreadnum++;unread.text(unreadnum);}fb_sound.play();
        allunread++;$('#allunread').text(allunread);
        }
      }
  }else if(data.match('<presence')){
    var presence=data.split("from='-");presence=presence[1].split("@chat.facebook");presence=presence[0];
    //
    if(presence==fid){
      if(data.match("type='unavailable")){$("#fid_active").attr({'src':'http://methodise.me/R/fb_offline.png'});$('.Bf[value="'+presence+'"]').remove();}
      else{
        $("#fid_active").attr({'src':'http://methodise.me/R/fb_active.png'});
        $('#non').append(Pt1+fid+Pt2+fname+'">'+Pt3+fid+Pt4+'<span class="fb_text">'+fname+'</span> <n class="lspot"></n><span class="unread"style="background:red;color:#FFF;font-weight:bold;"></span><img style="float:right;margin-right:30px;margin-top:13px;width:7px;"src="http://methodise.me/R/fb_active.png"><br></div>');
        friendonline('.Bf[value="'+fid+'"]');
        }
      }
    else{
    //
    if(data.match("type='unavailable")){
      $('.Bf[value="'+presence+'"]').remove();
      }
    if(data.match('<photo')){
      Q=FB.Data.query("SELECT name,uid FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me() AND uid2='"+presence+"')");Q.wait(function(rows){$.each(rows,function(index,f){
        if($('.Bf[value="'+presence+'"]').length==0){$('#non').append(Pt1+f.uid+Pt2+f.name+'">'+Pt3+f.uid+Pt4+'<span class="fb_text">'+f.name+'</span> <n class="lspot"></n><span class="unread"style="background:red;color:#FFF;font-weight:bold;"></span><img style="float:right;margin-right:30px;margin-top:13px;width:7px;"src="http://methodise.me/R/fb_active.png"><br></div>');
        friendonline('.Bf[value="'+presence+'"]');
      }});});
      }
      }
    }
    $("#fb_numo").text($('.Bf').length);
  }









function rawOutput(data){
  if(data.match('</message>')){
    if(data.match('</body></message>') && !data.match('<composing')){
      spoke=who;
      who=2;
      log('<div class="spoke"style="position:relative;top:0px;left:0px;margin-left:5px;margin-top:2px;border-top:1px solid #EEE;clear:both;white-space:pre-wrap;word-wrap:break-word;">'+//min-height:40px;
          '<img width="30px"height="30px"style="float:left;margin-top:5px;margin-bottom:5px;"src="http://graph.facebook.com/'+meid+'/picture?type=square"/>'+
          '<div class="said"style="float:left;margin-left:8px;margin-top:5px;max-width:200px;"><span class="fb_text">'+linkify(data)+'</span><br></div></div>'
          ,data);}}
  }
  
  





function friendonline(obj){
        $(obj).unbind().bind('click',function(){
          $('#fb_chat').hide();
          if($('#jid').val()!=''){$('.Bf[value="'+fid+'"]').attr({'memory':$('#jid').val()});$('#jid').val('');}
          if($(this).attr('memory')!=''){$('#jid').val($(this).attr('memory'));}
          $(this).find('.lspot').append($('#fb_loading'));
          var objunread=$(this).find('.unread');allunread=allunread - objunread.text();objunread.text('');if(allunread > 0){$('#allunread').text(allunread);}else{$('#allunread').text('');}
          $('#iscomposing').html('');
          who=0;
          window.clearTimeout(ti);
          fid=$(this).attr('value');
          $('#fid').val(fid);
          fname=$(this).attr('title');
          $('#fb_h').html('<span style="position:relative;top:7px;"><img style="float:left;margin:5px;margin-top:9px;width:7px;"src="http://methodise.me/R/fb_active.png">'+fname+'<!--img id="fb_x"style="cursor:pointer;float:right;margin:5px;margin-top:8px;"src="http://methodise.me/R/fb_x.png"--></span>');
	  $('#fb_x').unbind().bind('click',function(){
            $('#fb_chat').hide();
            if($('#jid').val()!=''){$('.Bf[value="'+fid+'"]').attr({'memory':$('#jid').val()});$('#jid').val('');}
            if($(this).attr('memory')!=''){$('#jid').val($(this).attr('memory'));}
            $('#iscomposing').html('');
            who=0;
            window.clearTimeout(ti);
            fid='';
            $('#fid').val('');
            fname='';
            });
          freindreconnect();
        }).hover(function(){
          window.clearTimeout(ti2);
          $(this).css({"background":"#E0E4EE"});
          $('#fb_profile').appendTo('body').css({'top':$(this).position().top + 88});
          $('#fb_visit').attr({'src':"http://graph.facebook.com/"+$(this).attr('value')+"/picture?type=square"});
          $('.fb_a').attr({'href':'http://facebook.com/'+$(this).attr('value')});
        },function(){
          ti2=window.setTimeout(function(){$('#fb_profile').appendTo('#fb_offscreen');},200);
          $(this).css({"background":"#F2F4F8"});
        });
}






  
  
function onConnect(status){
    if (status == Strophe.Status.CONNECTING) {
    } else if (status == Strophe.Status.CONNFAIL) {alert('_CONNFAIL! fid:'+fid+'_');freindreconnect();
    } else if (status == Strophe.Status.DISCONNECTING) {
    } else if (status == Strophe.Status.DISCONNECTED) {
    } else if (status == Strophe.Status.CONNECTED) {
      //
      $('#jid').unbind().bind('textchange keyup',function(e){
        var composing=$msg({from:'-'+meid+'@chat.facebook.com',to:'-'+fid+'@chat.facebook.com',type:'chat'}).c('composing',{'xmlns':'http://jabber.org/protocol/chatstates'});if(composesent==0){composesent=1;connection.send(composing.tree());}window.clearTimeout(ti);ti=window.setTimeout(function(){composesent=0;},15000);
        if(e.keyCode==13){
	    e.preventDefault();
	    var speak=$msg({from:'-'+meid+'@chat.facebook.com',to:'-'+fid+'@chat.facebook.com',type:'chat'}).c('body').t($('#jid').val());
	    if($('#jid').val()!=''){connection.send(speak.tree());$('#jid').val('');}
	    return false;
        }});}}





function chat_height(){
  $('#fb_s').height(254 - $('#jid').height()).scrollTo({top:'100%',left:'0'},5);
  }


















function getFriends(){
    NN=0;
    var friends = new Array;
    Q=FB.Data.query("SELECT name,uid,online_presence FROM user WHERE (online_presence=='active' OR online_presence=='idle') AND uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) ORDER BY online_presence");
    Q.wait(function(rows){$.each(rows,function(index,f){
        $('#non').append(Pt1+f.uid+Pt2+f.name+'">'+Pt3+f.uid+Pt4+'<span class="fb_text">'+f.name+'</span> <n class="lspot"></n><span class="unread"style="background:red;color:#FFF;font-weight:bold;"></span><img style="float:right;margin-right:30px;margin-top:13px;width:7px;"src="http://methodise.me/R/fb_active.png"><br></div>');
	NN++;
	if(NN==rows.length){
            NN=0;
	    launchconnection();
            }});
	   if(rows.length==0){launchconnection();}
	   });}
    
    
function launchconnection(){
    setTimeout(function(){$('.fb_login').replaceWith('<img style="margin:2px;height:15px;vertical-align:-3px;"src="http://graph.facebook.com/'+meid+'/picture?type=square"/><b>'+me+'</b>');},1000);
            friendonline('.Bf');
            $("#fb_numo").text($('.Bf').length);
            $('#fb_profile').hover(function(){window.clearTimeout(ti2);},function(){ti2=window.setTimeout(function(){$('#fb_profile').appendTo('#fb_offscreen');},200);});
            
            $('#fb_tog').click(function(){
              if(fb_minmax==0){
                fb_minmax=1;
		$(window).height() - 80
                $('#fb_friendlist').height($(window).height() - 80).show();
                $('#fb_min').hide();
                $(this).removeClass('fb_minimised');
                $('#fb_togimg').attr({'src':'http://methodise.me/R/fb_min.png'});
              }
              else{
                fb_minmax=0;
                $('#fb_friendlist').hide();
                $('#fb_min').show();
                $(this).addClass('fb_minimised');
                $('#fb_togimg').attr({'src':'http://methodise.me/R/fb_max.png'});
              }
              });
            $('#fb_tog').show();
            connection.connect("-"+meid+"@chat.facebook.com","test", onConnect);
    }
    
    
    



function freindreconnect(){NN=0;ord='reverse';$('#log').html('');$("#jid").autosize({callback:chat_height});
  var threadsfound=[];
  var findthreads=FB.Data.query("SELECT thread_id FROM message WHERE author_id='"+fid+"' AND thread_id IN (SELECT thread_id FROM thread WHERE folder_id=0) ORDER BY created_time DESC LIMIT 0,15");findthreads.wait(function(threads){$.each(threads,function(index,t){  
    threadsfound.push(t.thread_id);
    NN++;if(NN==threads.length){NN=0;
      var findposts=FB.Data.query("SELECT author_id,body FROM message WHERE (thread_id='"+threadsfound.uniq().toString().replace(",","' OR thread_id='")+"') ORDER BY created_time DESC LIMIT 0,15");findposts.wait(function(posts){$.each(posts,function(index,p){
        //
        if     (p.author_id==fid) {rawInput('<message><body>'+p.body+'</body></message>');}
        else if(p.author_id==meid){rawOutput('<message><body>'+p.body+'</body></message>');}
        NN++;if(NN==posts.length){NN=0;ord='normal';who=0;$('#fb_chat').show();$('#fb_offscreen').append($('#fb_loading'));chat_height();}
        });if(posts.length==0){ord='normal';who=0;$('#fb_chat').show();$('#fb_offscreen').append($('#fb_loading'));}
      });
    }
  });if(threads.length==0){ord='normal';who=0;$('#fb_chat').show();$('#fb_offscreen').append($('#fb_loading'));}});
  }
    
    
