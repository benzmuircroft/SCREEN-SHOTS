



var timestart=new Date().getTime();
var connected=false;
var reconn;//timer
var Comment='Comment...';
  
//var c='hotel';

console.dir(s[1]);


s[1].WIRE('http:??',{'c':c});console.log('c'+c+' qr'+qr);//socket.emit('http:??',{'c':c});console.log('c'+c+' qr'+qr);
s[1].WHEN['http:!!']=function(_){//socket.on('http:!!',function(_){
	var cn=_.cn;
	c=_.c;
	
	console.log('http:!!');
	
	var nopass=(_.nopass!==0)?'nopass'+qr:0;
	
	var mism='m';//minibar switch size to c or l
	//style
	
	if(_.css){
		if(_.css.indexOf('(ext)')!==-1){
			_.css=_.css.split('(ext)');
			$('#sheet').append(_.css[0]);
			_.css[1]=_.css[1].split(';');
			$.each(_.css[1],function(i,v){
				if(v.indexOf('#feedback')!==-1){
					Comment=v.split(':')[1];
					$('#feedback').text(Comment);
					console.log('_'+Comment+'_');
					}
				});
				}
		else{$('#sheet').append(_.css);}
		}
		//
	function style(){
		if($('#wake:hidden').length===1){
			$('#minibar,#clean,#laundry,#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=51px'});
			console.log('wake hidden');
			}
		if($('#minibar:hidden').length===0&&$('#clean:hidden').length===1&&$('#laundry:hidden').length===1){//M
			//minibar replaces clean
			$('#minibar').css({'height':'47px','width':'248px'});mism='c';$('#m_').addClass('lang_c_m').html($('#m_').html().replace('<br>',' ').replace('</ br>',' ').replace('</br>',' '));
			//shift remaining up
			$('#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=51px'});
			console.log('two hidden');
			}else
		if($('#minibar:hidden').length===1&&$('#clean:hidden').length===0&&$('#laundry:hidden').length===1){//C
			///widen clean
			$('#clean').css({'left':'35px','width':'248px'});
			//shift remaining up
			$('#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=51px'});
			console.log('two hidden');
			}else
		if($('#minibar:hidden').length===1&&$('#clean:hidden').length===1&&$('#laundry:hidden').length===0){//L
			//widen & move up laundry
			$('#laundry').css({'left':'35px','width':'248px','top':'-=51px'});
			//shift remaining up
			$('#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=51px'});
			console.log('two hidden');
			}else
		if($('#minibar:hidden').length===1&&$('#clean:hidden').length===0&&$('#laundry:hidden').length===0){//C L
			//widen clean & laundry
			$('#clean,#laundry').css({'left':'35px','width':'248px'});
			//shift remaining up
			//$('#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=0px'});
			console.log('one hidden');
			}else
		if($('#minibar:hidden').length===0&&$('#clean:hidden').length===1&&$('#laundry:hidden').length===0){//M  L
			//minibar replaces clean
			$('#minibar').css({'height':'47px','width':'248px'});mism='c';$('#m_').addClass('lang_c_m').html($('#m_').html().replace('<br>',' ').replace('</ br>',' ').replace('</br>',' '));
			//widen laundry
			$('#laundry').css({'left':'35px','width':'248px'});
			//shift remaining up
			//$('#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=0px'});
			console.log('one hidden');
			}else
		if($('#minibar:hidden').length===0&&$('#clean:hidden').length===0&&$('#laundry:hidden').length===1){//M C
			//minibar replaces clean
			$('#minibar').css({'height':'47px','width':'248px'});mism='l';$('#m_').addClass('lang_l_m').html($('#m_').html().replace('<br>',' ').replace('</ br>',' ').replace('</br>',' '));
			//widen & move down clean
			//$('#clean').css({'left':'35px','width':'248px','top':'+=51px'});
			//shift remaining up
			//$('#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=0px'});
			console.log('one hidden');
			}else
		if($('#minibar:hidden').length===1&&$('#clean:hidden').length===1&&$('#laundry:hidden').length===1){//all hidden
			//shift remaining up
			$('#taxi,#taxishift,#taxiclock,#feedback,#img0,#send,#ads').css({'top':'-=102px'});
			console.log('all hidden');
			}
		if($('#taxi:hidden').length===1){
			$('#feedback,#img0,#send,#ads').css({'top':'-=51px'});
			console.log('taxi hidden');
			}
		return};
	//style e
	
	
	
console.log('in');




var timeref;
var user='';//hotel must set
function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
function __kill(text){return text.replace(/\n\r|\n|\r|\t/g,'');};
var on_wake=0;
var on_minibar=0;
var on_clean=0;
var on_laundry=0;
var on_taxi=0;

var lty='Thank You! ';
var lrr='- Your request has been received';
var la='@gmail alert?';
var lgm='Good news, your minibar has been refilled!';
var lgc='Good news, your room has been cleaned!';
var lgl='Good news, your laundry is done!';
var ldn='Done';
var lsk='Skip';
var temail='';
var events=0;
var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var sent=0;


    
    
    function start(){
    if(qr!==undefined){
    s[1].WIRE('thailand_room.security',{//socket.emit('thailand_room.security',{
    																'c':c,
    																'roomid':qr,
    																'user':user.toLowerCase()
    																});//enter username if matches let inside
    if(events===1){
    	delete s[1].WHEN['thailand_security.error'];//delete socket.$events['thailand_security.error'];
    	delete s[1].WHEN['thailand_security.ok'];
    	}events=1;
    	
    s[1].WHEN['thailand_security.error']=function(_){//socket.on('thailand_security.error',function(_){
    	console.log('err');
    	};//);
    s[1].WHEN['thailand_security.ok']=function(_){//socket.on('thailand_security.ok',function(_){
    	console.log('thailand_security.ok');console.dir(_);
    	$('.lock').remove();
    	$('.main').show();
    	style();
    
    
    
    
    
    
    
    
    s[1].WHEN['ads']=function(_){//socket.on('ads',function(_){
    	var ad=_.ad.split('@');
    	$('#ads').append('<a href="'+ad[1]+'"target="_blank"><img src="R/phuket/ads/'+ad[0]+'.png"style="cursor:pointer;margin-left:auto;margin-right:auto;width:248px;margin-bottom:4px;border:none;outline:none;"></a>');
    	};//);
    
    	
    	//-----------------------------------------------------------------V untested
    temail=(filter.test(_.email))?_.email:'';
    
    
    $('#send').click(function(){
    	sent=1;
        var i={};
        i.c=c;
        i.wakeup=((on_wake===1)?($('#wakehour').text()+':'+$('#wakemin').text()+$('#wakeampm').text()):'no');
        i.minibar=((on_minibar===1)?'yes':'no');
        i.clean=((on_clean===1)?'yes':'no');
        i.laundry=((on_laundry===1)?'yes':'no');
        i.taxi=((on_taxi===1)?($('#taxihour').text()+':'+$('#taximin').text()+$('#taxiampm').text()):'no');
        i.feedback=(($('#feedback').text()!=='Comment...'&&$('#feedback').text()!=='')?$('#feedback').text():'no');
        console.log('sending');
        console.dir(i);
        s[1].WIRE('thailand_send>',i);//socket.emit('thailand_send>',i);
       pauseclicksforyes(i);
       });
    
    
    s[1].WHEN['thailand_sent>']=function(_){//console.log('thailand_sent>');//socket.on('thailand_sent>',function(_){
    	if($('.msg').length===0){
    	if(sent===1){sent=0;$('body').prepend(
    		'<div class="msg msgA"style="background:#2E2E2B;width:320px;height:26px;text-align:center;font-size:13px;line-height:26px;margin-left:auto;margin-right:auto;">'+
    			'<b id="lty"style="color:#CCC;">'+lty+'</b><b id="lrr"style="color:#999;">'+lrr+'</b>'+
    		'</div>'+
    		'<div class="msg msgB" style="background:#121211;padding-top:10px;padding-bottom:10px;width:320px;height:auto;text-align:center;font-size:13px;line-height:26px;margin-left:auto;margin-right:auto;">'+
    			'<!--b id="la"style="color:#FFF;margin-left:-21px;">'+la+'</b><br-->'+
				'<div style="float:left;margin-left:28px;width:50px;">'+
					'<img src="R/phuket/emailalert.png"style="width:50px;margin-top:5px;">'+
				'</div>'+
				'<div style="float:left;margin-left:-38px;margin-top:10px;">'+
					'<div style="position:relative;">'+
						'<div id="water2" style="position:absolute;top:0px;left:70px;width: 180px;height:28px;background:#FFFC00;color:#000;text-direction:center;line-height:28px;pointer-events:none;">'+la+'</div>'+
						'<div id="email" style="position:absolute;top:0px;left:70px;width: 180px;height:28px;color:#000;text-direction:center;line-height:28px;text-transform:lowercase;" contenteditable="true"></div>'+
					'</div>'+
				'</div><br>'+
				'<div style="color:#FFF;margin-top:12px;width:215px;"><a style="color:#FFF;font-size:10px;"href="http://quickreport.it/R/phuket/legal/privacy.txt"target="_blank">Privacy Policy</a></div>'+
				'<div style="height:14px;">'+
					'<div id="saveemail" style="float:right;width:60px;height:16px;margin-top:2px;color:#FFF;background:#36A315;text-align:center;line-height:17px;font-size:11px;margin-right:5px;cursor:pointer;font-weight:bold;"><img style="height:12px;margin-top:3px;"src="/R/phuket/yes.png"/></div>'+
					'<div id="skip" style="float:right;width:60px;height:16px;margin-top:2px;color:#FFF;background:#DE2828;text-align:center;line-height:17px;font-size:11px;margin-right:5px;cursor:pointer;font-weight:bold;"><img style="height:10px;margin-top:3px;"src="/R/phuket/no.png"/></div>'+
				'</div>'+
			'</div>'
    		);}
    	$('#feedback').text(Comment).css({'color':'#999'});
    	$('#img0').html('');
    	if(temail!==''){$('#water2').text('');$('#email').text(temail);}
    	$('#email').focus(function(){$('#water2').text('');});$('#email').focusout(function(){if((__kill($(this).text()))===''){$('#water2').text(la);}});
    	//$('#email').focus();
    	//
    	$('#skip').unbind().bind('click',function(){
    		$('.msg').remove();temail='';
    		s[1].WIRE('saveemail',{'c':c,'email':temail});//socket.emit('saveemail',{'c':c,'email':temail});
    		});
    	////
    	$('#saveemail').unbind().bind('click',function(){
    		if(__kill($('#email').text())!==''&&filter.test(__kill($('#email').text()))){
    			temail=__kill($('#email').text());
    			s[1].WIRE('saveemail',{'c':c,'email':temail});//socket.emit('saveemail',{'c':c,'email':temail});
    			$('.msg').remove();
    			}
    		else{
    			temail='';
    			$('#water2').css({'background-color':'#DE2828'});
    			$('#email').focus();
    			setTimeout(function(){$('#water2').animate({'background-color':oldcolor},1000);},500);//------------------------------------------wrong color
    			}
    		});var oldcolor=$('#water2').css('background-color');console.log(oldcolor);}
    	};//);//thankyou
    
    
    
    
    //catch complete use for messages and turn them into no
   function catchcompletes(_){
   		if(_.minibar==='complete'){
    		_.minibar='no';
    		if($('.msg_minibar').length===0){$('body').prepend(
    			'<div class="msg_minibar"style="background:#FFE000;color:#B8A200;width:320px;height:26px;text-align:left;font-size:12px;line-height:26px;margin-left:auto;margin-right:auto;">'+
    				'<b id="lgm"style="margin-left:15px;">Good news, your minibar has been refilled!</b>'+
    				'<img class="destroy"src="R/kill.png"style="width:11px;margin:7px;float:right;"/>'+//destroy
    			'</div>');}
    			$(window).scrollTop(0);
    			$('.destroy').unbind().bind('click',function(){
    				$(this).parent().remove();
    				s[1].WIRE('destroy_notification',{'c':c,'seen':'minibar'});//socket.emit('destroy_notification',{'c':c,'seen':'minibar'});
    				});
    			on_mini_bar=0;
    			$('#minibar').attr({'class':'def'});
    			}
    	if(_.clean==='complete'){
    		_.clean='no';
    		if($('.msg_clean').length===0){$('body').prepend(
    			'<div class="msg_clean"style="background:#FFE000;color:#B8A200;width:320px;height:26px;text-align:left;font-size:12px;line-height:26px;margin-left:auto;margin-right:auto;">'+
    				'<b id="lgc"style="margin-left:15px;">Good news, your room has been cleaned!</b>'+
    				'<img class="destroy"src="R/kill.png"style="width:11px;margin:7px;float:right;"/>'+//destroy
    			'</div>');}
    			$(window).scrollTop(0);
    			$('.destroy').unbind().bind('click',function(){
    				$(this).parent().remove();
    				s[1].WIRE('destroy_notification',{'c':c,'seen':'clean'});//socket.emit('destroy_notification',{'c':c,'seen':'clean'});
    				});
    			on_clean=0;
    			$('#clean').attr({'class':'def'});
    			}
   		 if(_.laundry==='complete'){
    		_.laundry='no';
    		if($('.msg_laundry').length===0){$('body').prepend(
    			'<div class="msg_laundry"style="background:#FFE000;color:#B8A200;width:320px;height:26px;text-align:left;font-size:12px;line-height:26px;margin-left:auto;margin-right:auto;">'+
    				'<b id="lgl"style="margin-left:15px;">Good news, your laundry is done!</b>'+
    				'<img class="destroy"src="R/kill.png"style="width:11px;margin:7px;float:right;"/>'+//destroy
    			'</div>');}
    			$(window).scrollTop(0);
    			$('.destroy').unbind().bind('click',function(){
    				$(this).parent().remove();
    				s[1].WIRE('destroy_notification',{'c':c,'seen':'laundry'});//socket.emit('destroy_notification',{'c':c,'seen':'laundry'});
    				});
    			on_laundry=0;
    			$('#laundry').attr({'class':'def'});
    			}return;}
    
    catchcompletes(_);
    
    
    
    
    function pauseclicksforyes(_){//pointer-events:none
    	if(_.wakeup!=='no'){}else{}
    	if(_.minibar!=='no'){$('#minibar').attr({'class':'red'});}else{$('#minibar').attr({'class':'def'});}
    	if(_.clean!=='no'){$('#clean').attr({'class':'red'});}else{$('#clean').attr({'class':'def'});}
    	if(_.laundry!=='no'){$('#laundry').attr({'class':'red'});}else{$('#laundry').attr({'class':'def'});}
    	if(_.taxi!=='no'){}else{}
    	return;
    	}
    	
    pauseclicksforyes(_);
    
    
    s[1].WHEN['thailand_admin-sent>']=function(_){//socket.on('thailand_admin-sent>',function(_){
    	$('.msg').remove();
    	console.log('admin-sent');console.dir(_);
    	catchcompletes(_);
    	pauseclicksforyes(_);
    	};//);
    
    
	s[1].WHEN['*alarm*wakeup']=function(_){//socket.on('*alarm*wakeup',function(_){
		var bling = new Audio('/R/phuket/bling.mp3');
		bling.load();
		bling.play();
		on_wakeup=0;
    	$('#wakeup').attr({'class':'def'});
    	$('#wakehour').text('00');
    	$('#wakemin').text('00');
    	$('#wakeampm').text('am');
		};//);
		
	s[1].WHEN['*alarm*taxi']=function(_){//socket.on('*alarm*taxi',function(_){
		var bling = new Audio('/R/phuket/bling.mp3');
		bling.load();
		bling.play();
		on_taxi=0;
    	$('#taxi').attr({'class':'def'});
    	$('#taxihour').text('00');
    	$('#taximin').text('00');
    	$('#taxiampm').text('am');
		};//);
		
    
    
    
    //wake up call
    var $wakehour=$('#wakehour');
    var $wakemin=$('#wakemin');
    var $wakeampm=$('#wakeampm');
    var t;
    var hrmin=1;
    $wakehour.addClass('tock');
    $wakemin.removeClass('tock');
    
    $('#wake').bind('click',function(){
    	if(on_wake===0){
    		on_wake=1;
    		$(this).attr({'class':'sel'});
    		}
    	else{
    		on_wake=0;
    		$(this).attr({'class':'def'});
    		}
    	return;
    	});
    $('#waketime').click(function(){
    	if(hrmin===0){
    		hrmin=1;
    		$wakehour.addClass('tock');
    		$wakemin.removeClass('tock');
    		}
    	else{
    		hrmin=0;
    		$wakehour.removeClass('tock');
    		$wakemin.addClass('tock');
    		}
    	on_wake=1;
    	$('#wake').attr({'class':'sel'});
    	});
    $('#wakeup,#wakedown').bind('mousedown touchstart',function(e){
    	clearInterval(t);
    	t=setInterval(function(){
    		var wt0=parseInt($wakehour.text());
    		var wt1=parseInt($wakemin.text());
    		if(e.target.id==='wakeup'){if(hrmin===0){wt1=(wt1<59)?(wt1+1).toString():(0).toString();}else{wt0=(wt0<23)?(wt0+1).toString():(0).toString();}}
    		else{if(hrmin===0){wt1=(wt1>0)?(wt1-1).toString():(59).toString();}else{wt0=(wt0>0)?(wt0-1).toString():(23).toString();}}
    		if(wt0<13){$wakeampm.text('am');}else{$wakeampm.text('pm');}
    		$wakehour.text((wt0<10)?("0"+wt0).toString():(wt0).toString());
    		$wakemin.text((wt1<10)?("0"+wt1).toString():(wt1).toString());
    		},100);
    	on_wake=1;
    	$('#wake').attr({'class':'sel'});
    	}).bind('mouseup touchend',function(){clearInterval(t);});
    if(_.wakeup!=='no'){//loading
    	$('#wakehour').text(_.wakeup.slice(0,2));
    	$('#wakemin').text(_.wakeup.slice(3,5));
    	$('#wakeampm').text(_.wakeup.slice(5,7));
    	on_wake=1;
    	$('#wake').attr({'class':'sel'});
    	}
    
    
    
    //mini bar
    $('#minibar').bind('click',function(){
    	if(on_minibar===0){
    		on_minibar=1;
    		$(this).attr({'class':'sel'});
    		}
    	else{
    		on_minibar=0;
    		$(this).attr({'class':'def'});
    		}
    	return;
    	});
    if(_.minibar!=='no'){//loading
    	on_minibar=1;
    	}
    	
    	
   //clean room
   
    $('#clean').bind('click',function(){
    	if(on_clean===0){
    		on_clean=1;
    		$(this).attr({'class':'sel'});
    		}
    	else{
    		on_clean=0;
    		$(this).attr({'class':'def'});
    		}
    	return;
    	});
    if(_.clean!=='no'){//loading
    	on_clean=1;
    	}
    	
    	
    //laundry
   
    $('#laundry').bind('click',function(){
    	if(on_laundry===0){
    		on_laundry=1;
    		$(this).attr({'class':'sel'});
    		}
    	else{
    		on_laundry=0;
    		$(this).attr({'class':'def'});
    		}
    	return;
    	});
    if(_.laundry!=='no'){//loading
    	on_laundry=1;
    	}
    	
    	
    //taxi
    var $taxihour=$('#taxihour');
    var $taximin=$('#taximin');
    var $taxiampm=$('#taxiampm');
    var tt;
    var thrmin=1;
    $taxihour.addClass('tock');
    $taximin.removeClass('tock');
    
    $('#taxi').bind('click',function(){
    	if(on_taxi===0){
    		on_taxi=1;
    		$(this).attr({'class':'sel'});
    		}
    	else{
    		on_taxi=0;
    		$(this).attr({'class':'def'});
    		}
    	return;
    	});
    $('#taxitime').click(function(){
    	if(thrmin===0){
    		thrmin=1;
    		$taxihour.addClass('tock');
    		$taximin.removeClass('tock');
    		}
    	else{
    		thrmin=0;
    		$taxihour.removeClass('tock');
    		$taximin.addClass('tock');
    		}
    	on_taxi=1;
    	$('#taxi').attr({'class':'sel'});
    	});
    $('#taxiup,#taxidown').bind('mousedown touchstart',function(e){
    	clearInterval(tt);
    	tt=setInterval(function(){
    		var tt0=parseInt($taxihour.text());
    		var tt1=parseInt($taximin.text());
    		if(e.target.id==='taxiup'){if(thrmin===0){tt1=(tt1<59)?(tt1+1).toString():(0).toString();}else{tt0=(tt0<23)?(tt0+1).toString():(0).toString();}}
    		else{if(thrmin===0){tt1=(tt1>0)?(tt1-1).toString():(59).toString();}else{tt0=(tt0>0)?(tt0-1).toString():(23).toString();}}
    		if(tt0<13){$taxiampm.text('am');}else{$taxiampm.text('pm');}
    		$taxihour.text((tt0<10)?("0"+tt0).toString():(tt0).toString());
    		$taximin.text((tt1<10)?("0"+tt1).toString():(tt1).toString());
    		},100);
    	on_taxi=1;
    	$('#taxi').attr({'class':'sel'});
    	}).bind('mouseup touchend',function(){clearInterval(tt);});
    if(_.taxi!=='no'){//loading
    	$('#taxihour').text(_.taxi.slice(0,2));
    	$('#taximin').text(_.taxi.slice(3,5));
    	$('#taxiampm').text(_.taxi.slice(5,7));
    	on_taxi=1;
    	$('#taxi').attr({'class':'sel'});
    	}
    
    
	
    
    
    $('#feedback').focus(function(){
        if($(this).text()===Comment){$(this).text('').css({'color':'#FFF'});}
        });
    $('#feedback').focusout(function(){
        if($(this).text()===''){$(this).text(Comment).css({'color':'#999'});}
        });
    $('#feedback').bind('keydown',function(e){if(e.which!=8&&$(this).text().length>300){console.log($(this).text().length);return false;}});
   
    
    
    
    $('#img0').click(function(){preview(0);$('#img1').trigger('click');});
    
    //preview
    function preview(id){console.log('preview');
    $('#img1').unbind().bind('change',function(evt){
        var put='',n=0;
        put=$('#img0');
        $('#send').css({'pointer-events':'none','color':'rgba(255,255,255,0.5)'});
        $('.one').remove();
        $('#spin0').show();console.log('#spin0');
        n=1;
        var file = $(this)[0].files[0];
        var reader = new FileReader();
        reader.onload=function(e){
            var imgx=$('<img class="one"id="one'+id+'"src="'+e.target.result+'"style="max-width:100%;max-height:100%;width:auto;height:auto;display:none;"/>');
            put.append(imgx);
            imgx.load(function(){
                $('#realimg').attr({'src':e.target.result});
                var aspectRatio;
                //
                var bin = atob(e.target.result.split(',')[1]);
                var exif = EXIF.readFromBinaryFile(new BinaryFile(bin));
                var o=exif.Orientation;
                $('#canvas').attr({'width':$('#realimg').width(),'height':$('#realimg').height()});
                //
                var _this=this;
                function canvastoimg(){
                    var canvas=$('#canvas')[0];
                    var context=canvas.getContext('2d');
                    if(o===6){
                        var iphone_h=canvas.width;
                        var iphone_w=canvas.height;
                        canvas.width=iphone_w;
                        canvas.height=iphone_h;
                        var mpImg = new MegaPixImage(file);
                        var canvasn = document.getElementById('canvas');
                        mpImg.render(canvasn,{ width:canvas.width,height:canvas.height,orientation:6});
                        uploadpart();
                        }
                    else{
                        context.drawImage(_this,0,0,canvas.width,canvas.height);
                        uploadpart();
                        }
                    function uploadpart(){
                    	setTimeout(function(){
                        s[1].WIRE('thailand_upload_part',{//socket.emit('thailand_upload_part',{
                            'c':c,
                            'roomid':qr,
                            'file':$('#canvas')[0].toDataURL()
                            });
                            },500);
                        }
                    s[1].WHEN('thailand_upload_part_done',function(_){//socket.on('thailand_upload_part_done',function(_){
                        $('#one'+_.id).show();
                        $('#spin'+_.id).hide();
                        $('#send').css({'pointer-events':'auto','color':'#FFF'});
                        });
                    }
                if($('#canvas').width()>400){
                    aspectRatio=$('#canvas').height()/$('#canvas').width();
                    $('#canvas').attr({'width':400,'height':parseInt(400 * aspectRatio)});
                    if($('#canvas').height()>400){
                        aspectRatio=$('#canvas').width()/$('#canvas').height();
                        $('#canvas').attr({'height':400,'width':parseInt(400 * aspectRatio)});
                        canvastoimg();
                        }
                    else{canvastoimg();}
                }else if($('#canvas').height()>400){
                    aspectRatio=$('#canvas').width()/$('#canvas').height();
                    $('#canvas').attr({'height':400,'width':parseInt(400 * aspectRatio)});
                    if($('#canvas').width()>400){
                        aspectRatio=$('#canvas').height()/$('#canvas').width();
                        $('#canvas').attr({'width':400,'height':parseInt(400 * aspectRatio)});
                        canvastoimg();
                        }
                    else{canvastoimg();}
                }else{canvastoimg();}
                });//imgx.load
            }//reader.onload
        reader.readAsDataURL($(this)[0].files[0]);
      });return;}
    
    
    
    function rotation(){
	$(".spin").rotate({angle:0,duration:1500,animateTo:360,callback:rotation,easing:function(x,t,b,c,d){return c*(t/d)+b;}});
	}rotation();
    
    
    
    
    
    
    
    
    $(window).scrollTop(0);
    
    //----------------------------------------------------- ^ untested
    
    
    //security.ok
   };//);
   }
   //security.ok
  }
    
    
    
    
    $('#title').prepend('<b style="font-size:16px;">'+cn+'<b><br>Room: '+qr);
    
    
    
    $('#pass').keydown(function(e){if(e.which===13){$(this).blur();return false;}});
    
    $('#pass').unbind('input').bind('input',function(e){
    	user=$(this).text();start();
    	});
    $('#pass').focus(function(){
        $('#water').text('');
        });
    $('#pass').focusout(function(){
        if((__kill($(this).text()))===''){$('#water').text('enter password');}
        });
        
      
    
    
    
    
    
    
    var timeend = new Date().getTime();
	var apptime = timeend - timestart;
	
	setTimeout(function(){
   		if(nopass!==0){$('.splash').hide();user=nopass;start();}
   		else{
   			$('.splash').hide();
   			$('.lock').show();
   			}
    	},2000 - apptime);
    
    console.log('apptime '+apptime);
    
    
    
    
    
    
    
    
    $('#translate').click(function(){
    	$('.main').hide();
    	$('.lang').show();
    	});
    
    $('.trans').click(function(){
    	$('#flag').attr({'src':$(this).attr('src')});
    	var w=$(this).attr('w').split('~');$('#w_').text(w[0]).removeClass('lang_w_x').removeClass('lang_w_s').removeClass('lang_w_m').removeClass('lang_w_b').addClass('lang_w_'+w[1]);
    	//
    	var m=$(this).attr('m').split('~');
    	$('#m_').html(m[0]).removeClass('lang_m_x').removeClass('lang_m_s').removeClass('lang_m_m').removeClass('lang_m_b');
    	$('#m_').removeClass('lang_'+mism+'_x').removeClass('lang_'+mism+'_s').removeClass('lang_'+mism+'_m').removeClass('lang_'+mism+'_b');
    	if(mism!=='m'){$('#m_').html($('#m_').html().replace('<br>',' ').replace('</ br>',' ').replace('</br>',' '));}
    	$('#m_').addClass('lang_'+mism+'_'+m[1]);
    	//
    	var c=$(this).attr('c').split('~');$('#c_').html(c[0]).removeClass('lang_c_x').removeClass('lang_c_s').removeClass('lang_c_m').removeClass('lang_c_b').addClass('lang_c_'+c[1]);
    	var l=$(this).attr('l').split('~');$('#l_').html(l[0]).removeClass('lang_l_x').removeClass('lang_l_s').removeClass('lang_l_m').removeClass('lang_l_b').addClass('lang_l_'+l[1]);
    	
    	lty=$(this).attr('ty');$('#lty').text(lty);
    	lrr=$(this).attr('rr');$('#lrr').text(lrr);
    	la=$(this).attr('a');if($('#water2').text()!==''){$('#water2').text(la);}
    	//lsk=$(this).attr('sk');$('#lsk').text(lsk);
    	//ldn=$(this).attr('dn');$('#ldn').text(ldn);
    	
    	lgm=$(this).attr('gm');$('#lgm').text(lgm);
    	lgc=$(this).attr('gc');$('#lgc').text(lgc);
    	lgl=$(this).attr('gl');$('#lgl').text(lgl);
    	
    	$('#t_').text($(this).attr('t'));
    	$('#send').text($(this).attr('s'));
    	$('#things').text($(this).attr('d'));
    	if($('#feedback').text()===Comment){Comment=$(this).attr('f');$('#feedback').text(Comment);}else{Comment=$(this).attr('f');}
    	$('.lang').hide();
    	$('.main').show();
    	});
    
    $('.notrans').click(function(){
    	$('.lang').hide();
    	$('.main').show();
    	});
    
    
    
    

 // Detecting vertical squash in loaded image.
 // Fixes a bug which squash image vertically while drawing into canvas for some images.
 // This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel


function detectVerticalSquash(img) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, 1, ih).data;
    // search image edge pixel position in case it is squashed vertically.
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
        var alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) {
            ey = py;
        } else {
            sy = py;
        }
        py = (ey + sy) >> 1;
    }
    var ratio = (py / ih);
    return (ratio===0)?1:ratio;
}


// A replacement for context.drawImage (args are for source and destination).

function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio = detectVerticalSquash(img);
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
}
    
    
    
    
    
    
$.fn.focusEnd = function(){
    $(this).focus();
    var tmp = $('<span />').appendTo($(this)),
        node = tmp.get(0),
        range = null,
        sel = null;

    if (document.selection) {
        range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(node);
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
    tmp.remove();
    return this;
}
    
    
    
    


    
    
    
    
    
    
    
    
    
    
    
	};//);//hotel.settings
	
	
    
   
