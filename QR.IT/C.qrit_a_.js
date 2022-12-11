
var timestart=new Date().getTime();

function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}



s[1].WIRE('http:??',{'c':c});//socket.emit('http:??',{'c':c});
s[1].WHEN['http:!!']=function(_){
	var cn=_.cn
	c=_.c;



var timeref;
var user='';//we must set
var events=0;
    
    
    function start(){
    	
    delete s[1].WHEN['admin_qr:set'];//delete socket.$events['admin_qr:set'];
    s[1].WHEN['admin_qr:set']=function(_){// socket.on('admin_qr:set',function(_){
        	$('#adminposter').append(
        		'<div class="postertemp"style="position:relative;margin:10px;top:10px;height:230px;">'+
        		'<img style="border:4px solid #FFF;float:left;"src="'+_.simple+'">'+
        		'<div style="width:210px;float:right;"><img src="/R/phuket/posters/'+c+'-poster.png"/></div>'+
        		'</div>'+
        		'<div class="postertemp"style="margin:10px;line-height:26px;">Staff Admin Pannel<br><b style="color:#444;font-size:10px;">http://quickreport.it/a.php'+_.url+'</b></div>'
        		);
        	setTimeout(function(){
        	html2canvas($('#adminposter')
        		,{onrendered:function(canvas){
        			$('.postertemp').remove();
                    $('#adminposter').append('<img src="'+canvas.toDataURL()+'">');
                    }});},1000);};//);
    
    s[1].WIRE('thailand_admin.security',{//socket.emit('thailand_admin.security',{
    																'c':c,
    																'user':user.toLowerCase()
    																});//enter username if matches let inside
    if(events===1){
    	delete s[1].WHEN['thailand_security.error'];//delete socket.$events['thailand_security.error'];
    	delete s[1].WHEN['thailand_security.ok'];//delete socket.$events['thailand_security.ok'];
    	}events=1;
    	
    s[1].WHEN['thailand_security.error']=function(_){//socket.on('thailand_security.error',function(_){
    	console.log('err');
    	};//);
    s[1].WHEN['thailand_security.ok']=function(_){//socket.on('thailand_security.ok',function(_){
    	$('.lock').remove();
    	$('.main').show();
    	
    
    //---------------------------------------------	V u
    	
    	
    	
    var on_minibar='_';// comes in as yes=incomplete/to do		goes out as no=complete (not todo anymore)
    var on_clean='_';
    var on_laundry='_';	
    	
    
    
                      
                      
                      
    
    
    s[1].WHEN['thailand_sent>']=function(_){blings();rec(_);};//);//socket.on('thailand_sent>',function(_){blings();rec(_);});
    s[1].WHEN['thailand_admin.get.rooms']=function(_){//socket.on('thailand_admin.get.rooms',function(_){
    	console.dir(_);
    	rec(_);
    	};//);
    
    //thailand_admin-sent>
    
    function rec(_){
    	if(_.img===''||_.img===undefined){_.img='no';}//dirty fix need sleep
    		$('.line'+_.xroom).remove();
    		$('#pannel').prepend(
    		'<div style="position:relative;left:0px;height:20px;margin-bottom:11px;height:20px;font-size:11px;color:#FFF;border-bottom:2px solid #666;background:#666;"class="line line'+_.xroom+'"user="'+_.user+'">'+
			'	<div class="X"style="float:left;padding:4px;margin-right:2px;width:21px;">'+'<img class="exit"src="R/kill.png"style="width:15px;margin-top:-2px;cursor:pointer;"/>'+'</div>'+
			'	<div class="R"style="float:left;padding:4px;margin-right:2px;width:21px;">'+_.xroom+'</div>'+
			'	<div class="W"style="float:left;padding:4px;margin-right:2px;width:47px;">'+((_.wakeup!=='no')?_.wakeup:'')+'</div>'+
			'	<div class="M"style="float:left;padding:4px;margin-right:2px;width:40px;">'+((_.minibar==='yes')?'<img src="R/0.png"style="width:16px;margin-top:-3px;"/>':'')+'</div>'+
			'	<div class="C"style="float:left;padding:4px;margin-right:2px;width:40px;">'+((_.clean==='yes')?'<img src="R/0.png"style="width:16px;margin-top:-3px;"/>':'')+'</div>'+
			'	<div class="L"style="float:left;padding:4px;margin-right:2px;width:40px;">'+((_.laundry==='yes')?'<img src="R/0.png"style="width:16px;margin-top:-3px;"/>':'')+'</div>'+
			'	<div class="T"style="float:left;padding:4px;margin-right:2px;width:47px;">'+((_.taxi!=='no')?_.taxi:'')+'</div>'+
			'	<div class="F"style="float:left;padding:4px;margin-right:2px;width:36px;">'+((_.feedback!=='no'||_.img!=='no')?'<img src="R/0.png"feedback="'+((_.feedback!=='no')?_.feedback:'')+'"img="'+((_.img!=='no')?_.img:'')+'"style="width:16px;margin-top:-3px;"/>':'')+'</div>'+
			'	<div class="S"style="float:left;padding:4px;margin-right:2px;width:47px;">'+_.timesent+'</div>'+
			'	<div class="E eye'+_.xroom+'"style="float:left;padding:4px;margin-right:2px;width:41px;"><img src="R/eye.png"style="cursor:pointer;width:16px;margin-top:-3px;"/></div>'+
			'</div>');
			$('.line'+_.xroom).animate({'background-color':'rgba(0,0,0,0)'},1500);
    		//}
    	console.log(_.qr+'<>'+qr);
    	if(_.qr===qr&&_.qr!==undefined){
    		$('#sub_wakeup').text(((_.wakeup!=='no')?_.wakeup:''));
    		//
    		$('#sub_minibar').html(((_.minibar!=='no')?'<img class="bad"src="R/0.png"style="cursor:pointer;width:16px;margin-right:10px;"/><img class="good"src="R/2.png"style="cursor:pointer;width:16px;"/>':'<img src="R/1.png"style="width:16px;"/>'));
    		$('#sub_clean').html(((_.clean!=='no')?'<img class="bad"src="R/0.png"style="cursor:pointer;width:16px;margin-right:10px;"/><img class="good"src="R/2.png"style="cursor:pointer;width:16px;"/>':'<img src="R/1.png"style="width:16px;"/>'));
    		$('#sub_laundry').html(((_.laundry!=='no')?'<img class="bad"src="R/0.png"style="cursor:pointer;width:16px;margin-right:10px;"/><img class="good"src="R/2.png"style="cursor:pointer;width:16px;"/>':'<img src="R/1.png"style="width:16px;"/>'));
    		//
    		$('#sub_taxi').text(((_.taxi!=='no')?_.taxi:''));
    		$('#sub_img').text(((_.img!=='no')?_.img:''));console.log('_'+_.img+'_245');
    		$('#sub_feedback').text(((_.feedback!=='no')?_.feedback:''));
    		
    		if(_.user.search('changeto:')!==-1){
    			var u=_.user.replace('changeto:','');
    			$('.line'+_.xroom).attr({'user':u});
    			$('#u').text(u);
    			}
    		
    		$('.good' ).unbind().bind('click',function(){
    			$(this).attr({'src':'R/1.png'});
    			$(this).parent().find('.bad').attr({'src':'R/3.png'});
    			if($(this).closest('.what').attr('id')==='M'){on_minibar='complete';}else
    			if($(this).closest('.what').attr('id')==='C'){on_clean='complete';}else
    			if($(this).closest('.what').attr('id')==='L'){on_laundry='complete';}
    			});
    		$('.bad' ).unbind().bind('click',function(){
    			$(this).attr({'src':'R/0.png'});
    			$(this).parent().find('.good').attr({'src':'R/2.png'});
    			if($(this).closest('.what').attr('id')==='M'){on_minibar='yes';}else
    			if($(this).closest('.what').attr('id')==='C'){on_clean='yes';}else
    			if($(this).closest('.what').attr('id')==='L'){on_laundry='yes';}
    			});
    		}
    		
    		
    	$('.exit').unbind().bind('click',function(){
        		var xqr=$(this).closest('.line').attr('class').replace('line line','');
        		$('.main').hide();
        		$('body').append(
    				'<div id="prompt" style="background:#121211;margin-top:105px;padding-top:10px;padding-bottom:10px;width:380px;height:110;text-align:center;font-size:13px;line-height:26px;margin-left:auto;margin-right:auto;">'+
    					'<b style="color:#FFF;">Check-out room '+xqr+'?</b><br>'+
						'<div style="width:480px;height:10px;margin-left:auto;margin-right:auto;margin-top:10px;margin-bottom:10px;">'+
							'<div style="position:relative;">'+
								'<div id="water3" style="position:absolute;top:0px;left:100px;width:180px;height:28px;background:#FFFC00;color:#000;text-direction:center;line-height:28px;pointer-events:none;">new guest password</div>'+
								'<div id="newpassword" style="position:absolute;top:0px;left:100px;width: 180px;height:28px;color:#000;text-direction:center;line-height:28px;text-transform:lowercase;" contenteditable="true"></div>'+
							'</div>'+
						'</div><br>'+
						'<div style="height:14px;margin-left:auto;margin-right:auto;width:140px;">'+
							'<div id="ok" style="float:right;width:60px;height:16px;margin-top:2px;color:#FFF;background:#36A315;text-align:center;line-height:17px;font-size:11px;margin-right:5px;cursor:pointer;font-weight:bold;">Ok</div>'+
							'<div id="cancel" style="float:right;width:60px;height:16px;margin-top:2px;color:#FFF;background:#DE2828;text-align:center;line-height:17px;font-size:11px;margin-right:5px;cursor:pointer;font-weight:bold;">Cancel</div>'+
						'</div>'+
					'</div>'
        			);
        		$('#newpassword').focus(function(){
        			$('#water3').text('');
        			});
    			$('#newpassword').focusout(function(){
        			if((__kill($(this).text()))===''){$('#water3').text('new guest password');}
        			});
        		$('#email').keydown(function(e){if(e.which===13){$(this).blur();$('#ok').trigger('click');return false;}});
        		$('#email').unbind('input').bind('input',function(e){
        			if(e.which===13){return false;}
        			});
        		$('#cancel').click(function(){
        			qr='not_set';
        			$('#prompt').remove();
        			$('.main').show();
        			});
        		$('#ok').unbind().bind('click',function(){
        			console.log('qr::::::::'+qr);
        			s[1].WIRE('thailand_admin-checkout>',{//socket.emit('thailand_admin-checkout>',{
        				'c':c,
        				'xroom':xqr,
        				'wakeup':'no',
        				'minibar':'yes',
        				'clean':'yes',
        				'laundry':'no',
        				'taxi':'no',
        				'feedback':'no',
        				'img':'no',
        				'user':__kill($('#newpassword').text().toLowerCase())
        				});
        				qr='not_set';
        				$('#prompt').remove();
        				$('.main').show();
        				});});
        				
        				
        				
        				
        				
    	$('.E').unbind().bind('click',function(){
    		$p=$(this).parent();
    		$('.main').hide();
    		var notime='<div style="float:left;"><div style="width:45px;margin-top:2px;"><b style="float:left;letter-spacing:1px;">--</b><b style="float:left;margin:1px;margin-top:-2px;margin-right:2px;">:</b><b style="float:left;letter-spacing:1px;">--</b></div></div>';
    		var $R=$p.find('.R').html();
    		qr=$(this).attr('class').replace('E eye','');//$R.toString();
    		console.log(qr);
    		
    		var $W=($p.find('.W').html()==='')?notime:$p.find('.W').html();
    		var $M=($p.find('.M').find('img').length===1)?'<img class="bad"src="R/0.png"style="cursor:pointer;width:16px;margin-right:10px;"/><img class="good"src="R/2.png"style="cursor:pointer;width:16px;"/>':'<img src="R/1.png"style="width:16px;"/>';
    		var $C=($p.find('.C').find('img').length===1)?'<img class="bad"src="R/0.png"style="cursor:pointer;width:16px;margin-right:10px;"/><img class="good"src="R/2.png"style="cursor:pointer;width:16px;"/>':'<img src="R/1.png"style="width:16px;"/>';
    		var $L=($p.find('.L').find('img').length===1)?'<img class="bad"src="R/0.png"style="cursor:pointer;width:16px;margin-right:10px;"/><img class="good"src="R/2.png"style="cursor:pointer;width:16px;"/>':'<img src="R/1.png"style="width:16px;"/>';
    		//
    		on_minibar=($p.find('.M').find('img').length===1)?'yes':'no';
    		on_clean=($p.find('.C').find('img').length===1)?'yes':'no';
    		on_laundry=($p.find('.L').find('img').length===1)?'yes':'no';
    		//
    		var $T=($p.find('.T').html()==='')?notime:$p.find('.T').html();
    		var $F=$p.find('.F').find('img').attr('feedback');
    		var attrimg=$p.find('.F').find('img').attr('img');
    		var $I=(attrimg!==undefined&&attrimg!=='')?'<img id="sub_img"src="/img/'+c+'/'+$p.find('.F').find('img').attr('img')+'?'+(+new Date)+'"/>':'';
    		var $S=$p.find('.S').html();
    		$('body').append(
    			'<div class="sub sub'+$R+'"style="z-index:9;position:relative;height:320px;width:480px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:#000;color:#999;font-family:gisha;text-align:left;">'+
    			'<div id="R"style="margin-top:10px;width:100%;height:16px;"><div style="margin-left:4px;color:#FFFC00;float:left;width:50px;"><img src="R/phuket/key.png"style="width:18px;"/></div><div style="float:left;">'+$R+'</div>'+
    			'<div style="color:#666;margin-left:100px;float:left;">(Password: '+'<b id="u"style="color:#FF0000;">'+$p.attr('user')+'</b>)</div>'+
    			'<img id="back"src="R/kill.png"style="width:16px;margin-top:2px;float:right;margin-right:10px;"/>'+//done back
    			'<div id="send" style="float:right;width:60px;height:16px;margin-top:2px;color:#FFF;background:#00CC33;text-align:center;line-height:17px;font-size:11px;margin-right:10px;cursor:pointer;font-weight:bold;"><img src="R/phuket/yes.png"style="margin-top:1px;width:16px;"></div>'+
    			'</div>'+
    			'<div id="W"class="what"style="margin-top:10px;width:100%;height:16px;line-height:24px;"><div style="margin-left:4px;color:#FFF;float:left;width:50px;"><img src="R/phuket/wakeup.png"style="width:18px;"/></div><div id="sub_wakeup"style="float:left;">'+$W+'</div></div>'+
    			'<div id="M"class="what"style="margin-top:10px;width:100%;height:16px;line-height:24px;"><div style="margin-left:4px;color:#FFF;float:left;width:50px;"><img src="R/phuket/minibar.png"style="width:18px;"/></div><div id="sub_minibar"style="float:left;">'+$M+'</div></div>'+
    			'<div id="C"class="what"style="margin-top:10px;width:100%;height:16px;line-height:24px;"><div style="margin-left:4px;color:#FFF;float:left;width:50px;"><img src="R/phuket/clean.png"style="width:18px;"/></div><div id="sub_clean"style="float:left;">'+$C+'</div></div>'+
    			'<div id="L"class="what"style="margin-top:10px;width:100%;height:16px;line-height:24px;"><div style="margin-left:4px;color:#FFF;float:left;width:50px;"><img src="R/phuket/laundry.png"style="width:18px;"/></div><div id="sub_laundry"style="float:left;">'+$L+'</div></div>'+
    			'<div id="T"class="what"style="margin-top:10px;width:100%;height:16px;line-height:24px;"><div style="margin-left:4px;color:#FFF;float:left;width:50px;"><img src="R/phuket/taxi.png"style="width:18px;"/></div><div id="sub_taxi"style="float:left;">'+$T+'</div></div>'+
    			
    			'<div id="I"class="what"style="margin-top:10px;width:100%;min-height:1px;">'+$I+'</div>'+
    			'<div id="F"class="what"style="margin-top:10px;width:100%;height:16px;line-height:24px;border-bottom:100px solid #000;"><div style="margin-left:4px;color:#FFF;float:left;width:50px;"><img src="R/phuket/comment.png"style="width:18px;"/></div>'+
    				'<div style="width:426px;float:left;">'+$F+'</div>'+
    			'</div>'+
    			'<div id="poster"style="color:#000;background:#FFF;"></div>'+
    			'<div class="space"style="border-bottom:50px solid #000;"></div>'+
    			'</div>'
    			);
    		$('#back').bind('click',function(){
    			qr='not_set';
    			$('.sub').remove();
    			$('.main').show();
    			});
    		$('.good' ).unbind().bind('click',function(){
    			$(this).attr({'src':'R/1.png'});
    			$(this).parent().find('.bad').attr({'src':'R/3.png'});
    			if($(this).closest('.what').attr('id')==='M'){on_minibar='complete';}else
    			if($(this).closest('.what').attr('id')==='C'){on_clean='complete';}else
    			if($(this).closest('.what').attr('id')==='L'){on_laundry='complete';}
    			});
    		$('.bad' ).unbind().bind('click',function(){
    			$(this).attr({'src':'R/0.png'});
    			$(this).parent().find('.good').attr({'src':'R/2.png'});
    			if($(this).closest('.what').attr('id')==='M'){on_minibar='yes';}else
    			if($(this).closest('.what').attr('id')==='C'){on_clean='yes';}else
    			if($(this).closest('.what').attr('id')==='L'){on_laundry='yes';}
    			});
    		
    		$('#send').click(function(){
  				console.log('minibar:'+on_minibar+' ,clean:'+on_clean+',laundry:'+on_laundry);
        		s[1].WIRE('thailand_admin-send>',{//socket.emit('thailand_admin-send>',{
        													'c':c,
        													'roomid':qr,
        													//'wakeup':((on_wake===1)?($('#wakehour').text()+':'+$('#wakemin').text()+$('#wakeampm').text()):'no'),//send
        													'minibar':on_minibar,
        													'clean':on_clean,
        													'laundry':on_laundry//,
        													//'taxi':((on_taxi===1)?($('#taxihour').text()+':'+$('#taximin').text()+$('#taxiampm').text()):'no'),
        													//'feedback':(($('#sub_feedback').text()!=='Comment...'&&$('#sub_feedback').text()!=='')?$('#feedback').text():'no')
        													});
        													qr='not_set';
        												$('.sub').remove();
    													$('.main').show();
        												});
        clock();
        s[1].WIRE('simple_qr:get',{'n':qr});//socket.emit('simple_qr:get',{'n':qr});
        delete s[1].WHEN['simple_qr:set'];//delete socket.$events['simple_qr:set'];
        s[1].WHEN['simple_qr:set']=function(_){console.log('simple_qr:set');//socket.on('simple_qr:set',function(_){
        	$('#poster').append(
        		'<div class="postertemp"style="position:relative;margin:10px;top:10px;height:230px;">'+
        		'<img style="border:4px solid #FFF;float:left;"src="'+_.simple+'">'+
        		'<div style="width:210px;float:right;"><img src="/R/phuket/posters/'+c+'-poster.png"/></div>'+
        		'</div>'+
        		'<div class="postertemp"style="margin:10px;line-height:26px;">Room: '+qr+'<br><b style="color:#444;font-size:10px;">http://quickreport.it/r.php'+_.url+'</b></div>'
        		);
        	setTimeout(function(){
        	html2canvas($('#poster')
        		,{onrendered:function(canvas){
        			$('.postertemp').remove();
                      $('#poster').append('<img src="'+canvas.toDataURL()+'">');
                      }});},1000);};//);
        });//edit click e
        clock();
    	}
    
    
    
    
    s[1].WHEN['thailand_admin-sent>']=function(_){console.log('thailand_admin-sent>');//socket.on('thailand_admin-sent>',function(_){console.log('thailand_admin-sent>');
    	console.dir(_);
    	console.log('.line'+_.roomid);
    	if(_.minibar==='complete'||_.minibar==='no'){
    		$('.line'+_.roomid).find('.M').find('img').remove();
    		on_minibar='no';
    		}
    	else{
    		
    		}
    	if(_.clean==='complete'||_.clean==='no'){
    		$('.line'+_.roomid).find('.C').find('img').remove();
    		on_clean='no';
    		}
    	else{
    		
    		}
    	if(_.laundry==='complete'||_.laundry==='no'){
    		$('.line'+_.roomid).find('.L').find('img').remove();
    		on_laundry='no';
    		}
    	else{
    		
    		}
    	};//);
    
    
    function blings(){
		var bling = new Audio('/R/phuket/bling.mp3');
		bling.load();
		bling.play();
		return;
		}
   

function clock(){
	$('.line').each(function(){
	if($(this).find('.W').text()!==''){
		var $line=$(this);
		var R=__kill($line.find('.R').text());
		var $W=$line.find('.W:not(.woke)');
		var $WW=$('#sub_wakeup:not(.woke)');
    	var wtime=__kill($W.text().replace('am','').replace('pm',''));
    	wtime=wtime.split(':');
    	var d=new Date();
    	var hour=d.getHours();
    	var min=d.getMinutes();
    	var wH=parseInt(wtime[0]);
    	var wM=parseInt(wtime[1]);
    	if(hour<wH){//before today
    		$W.css({'color':'#FFF'});$WW.css({'color':'#FFF'});
    		if(hour===wH-1){//one hour before
    			$W.css({'color':'#FFFF00'});$WW.css({'color':'#FFFF00'});
    			if(min>55 && wM<5){//between 10 mins before
    				$W.css({'color':'#FF6600'});$WW.css({'color':'#FFFF00'});
    				if((min>wM-3&&min<wM+1)||(min>57&&wM<2)){//two minutes before
    					if(!$W.hasClass('alarm')){
    						$W.addClass('alarm');
    						setTimeout(function(){
    							$W.removeClass('alarm');
    							$W.addClass('woke');
    							s[1].WIRE('now_wakeup',{'c':c,'room':R,'alarm':'wakeup'});//socket.emit('now_wakeup',{'c':c,'room':R,'alarm':'wakeup'});
    							},120000);blings();}
    					if(!$WW.hasClass('alarm')){
    						$WW.addClass('alarm');
    						setTimeout(function(){
    							$WW.removeClass('alarm');
    							$WW.addClass('woke');
    							},120000);}
    					}}}}
    	else if(hour>wH){// before tommorw
    		$W.css({'color':'#666'});$WW.css({'color':'#666'});
    		if(hour===23 && wH===0){//one hour before
    			$W.css({'color':'#FFFF00'});$WW.css({'color':'#FFFF00'});
    			if(min>55 && wM<5){//between 10 mins before
    				$W.css({'color':'#FF6600'});$WW.css({'color':'#FF6600'});
    				if((min>wM-3&&min<wM+1)||(min>57&&wM<2)){//two minutes before
    					if(!$W.hasClass('alarm')){
    						$W.addClass('alarm');
    						setTimeout(function(){
    							$W.removeClass('alarm');
    							$W.addClass('woke');
    							s[1].WIRE('now_wakeup',{'c':c,'room':R,'alarm':'wakeup'});//socket.emit('now_wakeup',{'c':c,'room':R,'alarm':'wakeup'});
    							},120000);blings();}
    					if(!$WW.hasClass('alarm')){
    						$WW.addClass('alarm');
    						setTimeout(function(){
    							$WW.removeClass('alarm');
    							$WW.addClass('woke');
    							},120000);}
    					}}}}
    	else{//same hour
    		$W.css({'color':'#666'});$WW.css({'color':'#666'});
    		if(min<wM){//before today	
    			$W.css({'color':'#FFFF00'});$WW.css({'color':'#FFFF00'});
    			if(min>wM-10){//ten minutes before
    				$W.css({'color':'#FF6600'});$WW.css({'color':'#FF6600'});
    				if(min>wM-3&&min<wM+1){//two minutes before
    					if(!$W.hasClass('alarm')){
    						$W.addClass('alarm');
    						setTimeout(function(){
    							$W.removeClass('alarm');
    							$W.addClass('woke');
    							s[1].WIRE('now_wakeup',{'c':c,'room':R,'alarm':'wakeup'});//socket.emit('now_wakeup',{'c':c,'room':R,'alarm':'wakeup'});
    							},120000);blings();}
    					if(!$WW.hasClass('alarm')){
    						$WW.addClass('alarm');
    						setTimeout(function(){
    							$WW.removeClass('alarm');
    							$WW.addClass('woke');
    							},120000);}
    					}}}}
}
if($(this).find('.T').text()!==''){
		var $line=$(this);
		var R=__kill($line.find('.R').text());
		var $T=$line.find('.T:not(.drive)');
		var $TT=$('#sub_taxi:not(.drive)');
    	var ttime=__kill($T.text().replace('am','').replace('pm',''));
    	ttime=ttime.split(':');
    	var d=new Date();
    	var hour=d.getHours();
    	var min=d.getMinutes();
    	var tH=parseInt(ttime[0]);
    	var tM=parseInt(ttime[1]);
    	if(hour<tH){//before today
    		$T.css({'color':'#FFF'});$TT.css({'color':'#FFF'});
    		if(hour===tH-1){//one hour before
    			$T.css({'color':'#FFFF00'});$TT.css({'color':'#FFFF00'});
    			if(min>55 && tM<5){//between 10 mins before
    				$T.css({'color':'#FF6600'});$TT.css({'color':'#FF6600'});
    				if((min>tM-3&&min<tM+1)||(min>57&&tM<2)){//two minutes before
    					if(!$T.hasClass('alarm')){
    						$T.addClass('alarm');
    						setTimeout(function(){
    							$T.removeClass('alarm');
    							$T.addClass('drive');
    							s[1].WIRE('now_taxi',{'c':c,'room':R,'alarm':'taxi'});//socket.emit('now_taxi',{'c':c,'room':R,'alarm':'taxi'});
    							},120000);blings();}
    					if(!$TT.hasClass('alarm')){
    						$TT.addClass('alarm');
    						setTimeout(function(){
    							$TT.removeClass('alarm');
    							$TT.addClass('drive');
    							},120000);}
    					}}}}
    	else if(hour>tH){// before tommorw
    		$T.css({'color':'#666'});$TT.css({'color':'#666'});
    		if(hour===23 && tH===0){//one hour before
    			$T.css({'color':'#FFFF00'});$TT.css({'color':'#FFFF00'});
    			if(min>55 && tM<5){//between 10 mins before
    				$T.css({'color':'#FF6600'});$TT.css({'color':'#FF6600'});
    				if((min>tM-3&&min<tM+1)||(min>57&&tM<2)){//two minutes before
    					if(!$T.hasClass('alarm')){
    						$T.addClass('alarm');
    						setTimeout(function(){
    							$T.removeClass('alarm');
    							$T.addClass('drive');
    							s[1].WIRE('now_taxi',{'c':c,'room':R,'alarm':'taxi'});//socket.emit('now_taxi',{'c':c,'room':R,'alarm':'taxi'});
    							},120000);blings();}
    					if(!$TT.hasClass('alarm')){
    						$TT.addClass('alarm');
    						setTimeout(function(){
    							$TT.removeClass('alarm');
    							$TT.addClass('drive');
    							},120000);}
    					blings();
    					}}}}
    	else{//same hour
    		$T.css({'color':'#666'});$TT.css({'color':'#666'});
    		if(min<tM){//before today	
    			$T.css({'color':'#FFFF00'});$TT.css({'color':'#FFFF00'});
    			if(min>tM-10){//ten minutes before
    				$T.css({'color':'#FF6600'});$TT.css({'color':'#FF6600'});
    				if(min>tM-3&&min<tM+1){//two minutes before
    					if(!$T.hasClass('alarm')){
    						$T.addClass('alarm');
    						setTimeout(function(){
    							$T.removeClass('alarm');
    							$T.addClass('drive');
    							s[1].WIRE('now_taxi',{'c':c,'room':R,'alarm':'taxi'});//socket.emit('now_taxi',{'c':c,'room':R,'alarm':'taxi'});
    							},120000);blings();}
    					if(!$TT.hasClass('alarm')){
    						$TT.addClass('alarm');
    						setTimeout(function(){
    							$TT.removeClass('alarm');
    							$TT.addClass('drive');
    							},120000);}
    					}}}}
}
});
return;
}//clock


setInterval(function(){
$('.alarm').css({'color':'#FFFF00'});
setTimeout(function(){$('.alarm').css({'color':'#FF0000'});},500);
},1000);



var seconds = new Date();
setTimeout(function() {
    setInterval(clock, 60000);
    clock();
}, (60 - seconds.getSeconds()) * 1000);

    
















    























    
    
    function rotation(){
	$(".spin").rotate({angle:0,duration:1500,animateTo:360,callback:rotation,easing:function(x,t,b,c,d){return c*(t/d)+b;}});
	}rotation();
    
    
    
    
    
    //--------------------------------- ^ u
    
    
    
    
    };}//security.ok//start
    
    
   
    
    
    
    function __kill(text){return text.replace(/\n\r|\n|\r|\t/g,'');};
    
    
    $('#title').html('<h3>'+cn+'</h3>Admin Panel');
    var title2=cn.split('<br>');
    $('#title2').text(title2[0]);
    
    
    
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
   		$('.splash').hide();
   		$('.lock').show();
    	},2000 - apptime);
    
    

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
    
   