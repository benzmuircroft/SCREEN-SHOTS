<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="https://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>QR - Admin</title>
<link rel="shortcut icon" href="R/favicon.ico" />
<script type="text/javascript" src="S/jquery.js"></script>
<script type="text/javascript" src="S/jquery-ui.js"></script>
<script type="text/javascript" src="S/easing.js"></script>
<script type="text/javascript" src="S/textchange.js"></script>
<script type="text/javascript" src="S/jquery.html5storage.min.js"></script>
<script type="text/javascript" src='S/prototype.js'></script>
<script type="text/javascript" src="S/tinysort.js"></script>
<script type="text/javascript" src="S/scrollto.js"></script>
<script type="text/javascript" src="S/autogrowtextarea.js"></script>
<script type="text/javascript" src="S/html2canvas.js"></script>
<!--script type="text/javascript" src="S/kinetic.js"></script-->
<script type="text/javascript" src="S/delivery.js"></script>


<script type="text/javascript" src="S/png.js"></script>
<script type="text/javascript" src="S/zlib.js"></script>




<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">



<style>
.opt{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    }
tr.iss > td{padding-bottom:8px;}
.hc{width:100%;height:22px;}
.wc{margin-right:1px;margin-bottom:1px;padding:3px;color:#FFF;font-size:10px;width:125px;text-align:center;float:left;}
.tc{float:left;margin-left:5px;}
.r{float:left;margin-left:12px;}
.hs{width:100%;height:22px;}
.hhs{width:125px;float:left;}
.s{vertical-align:-1.5px;margin-right:3px;}
.work{position:relative;height:100%;width:600px;margin-left:auto;margin-right:auto;font-size:14px;border-bottom:1px solid #AAA;padding-bottom:8px;margin-bottom:8px;}
.qrloo{vertical-align:top;margin-top:20px;margin-left:10px;font-size:30px;}
.all{border-collapse:collapse;border:none;padding:0px;width:600px;}
.reviewbox{width:600px;border-collapse:collapse;}
.review{margin-left:-1px;border:1px solid #999;outline:0px;padding:4px;min-width:486px;max-width:486px;background:#FFF;height:40px;color:#999;}
.loosave{position:relative;background:#36C42B;width:100px;height:50px;top:0px;right:0px;cursor:pointer;text-align:center;float:right;color:#FFF;}
.feed{font-size:10px;width:300px;word-wrap:break-word;float:right;overflow-y:auto;padding-right:15px;}
</style>







</head><body style="background:#F7F7F7;margin:0px;font-family:sans-serif;font-size:14px;font-weight:bold;color:#3C3C3C;">

<div id="offscreen"style="position:absolute;top:-1000px;">
    <canvas id="canvas"></canvas>
</div>



<!--img src="data:image/png;base64,"/-->
<!--canvas></canvas-->


<div class="HEAD"style="position:relative;height:51px;width:100%;background:#FFF;">
    <div class="HEADC"style="position:relative;height:51px;width:600px;margin-left:auto;margin-right:auto;">
    <img src="R/hsdemo.png"style="margin:5px;"/>
    <img src="R/qritlogo.png"style="height:41px;float:right;margin:5px;"/>
    </div> 
</div>




<div class="PAGE3"style="position:relative;width:600px;margin-left:auto;margin-right:auto;margin-top:10px;">
<img id="printall"src="R/print.png"style="margin-left:10px;float:right;display:none;"/>

<!--table id="filter"style="border-collapse:collapse;height:34px;height:54px;">
<tr>
<td width="320px"style="vertical-align:middle;"><b style="margin:10px;">Filter: </b><b id="tipfilter"style="color:#FF9900;"></b></td>
<td width="36px"><img class="opt all"src="R/all.png"style="padding:10px;width:16px;cursor:pointer;background:#FFF;"/></td>
<td width="36px"><img class="opt resolved"src="R/1.png"style="padding:10px;width:16px;cursor:pointer;"/></td>
<td width="36px"><img class="opt unresolved"src="R/0.png"style="padding:10px;width:16px;cursor:pointer;"/></td>
<td width="20px"></td>
<td width="36px"><img class="opt maintenance"src="R/fix.png"style="padding:10px;width:16px;cursor:pointer;"/></td>
<td width="36px"><img class="opt cleaning"src="R/clean.png"style="padding:10px;width:16px;cursor:pointer;"/></td>
<td width="36px"><img class="opt security"src="R/secur.png"style="padding:10px;width:16px;cursor:pointer;"/></td>
<td width="44px"><img class="opt painting"src="R/paint.png"style="padding:10px;width:16px;cursor:pointer;"/></td>
</tr>
</table-->

<!--table id="issuesheader"style="border-collapse:collapse;height:34px;font-size:12px;">
<tr style="background:#FFF;">
<td width="148px"><b style="margin:10px;">Toilet Location</b></td>
<td width="75px">Rating</td>
<td width="150px">Feedback</td>
<td width="125px">Issues</td>
<td width="70px">Date</td>
<td width="30px">View</td>
</tr>
</table-->
<style>td{vertical-align:top;padding-top:10px;}</style>
<table id="issues3"style="border-collapse:collapse;margin-top:10px;font-size:10px;"><tr style="height:100px;"></tr></table>
</div>







<!--div class="work3"style="position:relative;height:100%;width:600px;margin-left:auto;margin-right:auto;display:none;">
    <table>
        <tr>
        <td width="560px"><b style="color:#999;">Loo Location from QR scan:</b><b id="qrloo"style="vertical-align:top;margin-top:20px;margin-left:10px;font-size:30px;"></b></td>
        <td width="32px"><img id="printone"src="R/print.png"style="display:none;"/></td>
        </tr>
    </table>
    <table style="border-collapse:collapse;border:none;padding:0px;width:600px;">
        <tr>
        <td id="allstats"></td>
        <td id="allfeedback"width="334px"></td>
        </tr>
        <tr>
        <td style="height:150px;"></td>
        <td style="height:150px;">
        <div id="save3"style="position:relative;background:#36C42B;width:100px;height:30px;top:0px;right:2px;cursor:pointer;text-align:center;float:right;"><b style="position:relative;top:7px;">save</b></div>
        <div id="exit3"style="position:relative;background:#D6203B;width:100px;height:30px;top:0px;right:6px;cursor:pointer;text-align:center;float:right;"><b style="position:relative;top:7px;">cancel</b></div>
        </td>
        </tr>
    </table>
</div-->





<script>
var c='demo3';


function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
    



$(document).ready(function(){

/*
var filtertext;
var filter='all';
filtertext='Showing all jobs';
$('#tipfilter').text(filtertext);
$('.opt').click(function(){
    $('.opt').css({'background':'none'});
    $(this).css({'background':'#FFF'});
    filter=$(this).attr('src').replace('R/','').replace('.png','');
    filtertext='Showing '+$(this).attr('class').replace('opt ','')+' jobs';
    $('#tipfilter').text(filtertext);
    console.log(filter+'_ugfuytfuyf');
    filterissues();
    })
    .hover(function(){
        $('#tipfilter').text('Show '+$(this).attr('class').replace('opt ','')+' jobs');
        },function(){$('#tipfilter').text(filtertext);});




function filterissues(){
    $.each($('.iss'),function(){
        if(filter==='all'){$(this).show();}else
        if(filter==0){if($(this).find('.fixme[src="R/0.png"]').length){$(this).show();}else{$(this).hide();}}
        if(filter==1){if($(this).find('.fixme[src="R/1.png"]').length){$(this).show();}else{$(this).hide();}}
        if(filter=='fix'){if($(this).find('.jtype[src="R/fix.png"]').length){$(this).show();}else{$(this).hide();}}
        if(filter=='clean'){if($(this).find('.jtype[src="R/clean.png"]').length){$(this).show();}else{$(this).hide();}}
        if(filter=='secur'){if($(this).find('.jtype[src="R/secur.png"]').length){$(this).show();}else{$(this).hide();}}
        if(filter=='paint'){if($(this).find('.jtype[src="R/paint.png"]').length){$(this).show();}else{$(this).hide();}}
        });}
function filteriss(iss){
    iss=$('.iss[ref="'+iss+'"]');
    if(filter==='all'){iss.show();}else
    if(filter==0){if(iss.find('.fixme[src="R/0.png"]').length){iss.show();}else{iss.hide();}}
    if(filter==1){if(iss.find('.fixme[src="R/1.png"]').length){iss.show();}else{iss.hide();}}
    if(filter=='fix'){if(iss.find('.jtype[src="R/fix.png"]').length){iss.show();}else{iss.hide();}}
    if(filter=='clean'){if(iss.find('.jtype[src="R/clean.png"]').length){iss.show();}else{iss.hide();}}
    if(filter=='secur'){if(iss.find('.jtype[src="R/secur.png"]').length){iss.show();}else{iss.hide();}}
    if(filter=='paint'){if(iss.find('.jtype[src="R/paint.png"]').length){iss.show();}else{iss.hide();}}
    }
*/





$.getScript("https://serveraddress:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://serveraddress:8001');
    
    /*
    var doneimg='<b class="statusimg done"style="margin:10px;font-size:14px;"><img src="R/1.png"style="margin:10px;margin-top:0px;width:16px;cursor:pointer;"/><b style="vertical-align:top;">Job Complete</b></b>';
    var todoimg='<b class="statusimg todo"style="margin:10px;font-size:14px;"><img src="R/0.png"style="margin:10px;margin-top:0px;width:16px;cursor:pointer;"/><b style="vertical-align:top;">Job Incomplete</b></b>';
    var status;
    var jobtype;
    var me;*/
    var totalH=$('body').height();
    $('body').append('<div id="totalH"style="position:absolute;top:0px;left:0px;width:1px;height:'+totalH+'px;"></div>')
    
    
    //socket.emit('get_loo_reports',{'c':c});
    
    
    
    
    
    //socket.on('put_loo_report',function(_){
        /*var w=_.choice.split('|');
        var wrongs='';
        for(var i=0;i<w.length;i++){
            if(w[i]==='1'){ wrongs=wrongs+'<div class="wrong"style="background:#31AD79;margin-right:1px;margin-bottom:1px;padding:3px;">Low / Empty Paper</div>';}else
            if(w[i]==='2'){ wrongs=wrongs+'<div class="wrong"style="background:#FF70C6;margin-right:1px;margin-bottom:1px;padding:3px;">Low / Empty Soap</div>';}else
            if(w[i]==='3'){ wrongs=wrongs+'<div class="wrong"style="background:#0082CE;margin-right:1px;margin-bottom:1px;padding:3px;">Hand Dryer / Towels</div>';}else
            if(w[i]==='4'){ wrongs=wrongs+'<div class="wrong"style="background:#00C7E7;margin-right:1px;margin-bottom:1px;padding:3px;">Water Supply</div>';}else
            if(w[i]==='5'){ wrongs=wrongs+'<div class="wrong"style="background:#FFB200;margin-right:1px;margin-bottom:1px;padding:3px;">Faulty Lighting</div>';}else
            if(w[i]==='6'){ wrongs=wrongs+'<div class="wrong"style="background:#CE5298;margin-right:1px;margin-bottom:1px;padding:3px;">Faulty Cubicle Lock</div>';}else
            if(w[i]==='7'){ wrongs=wrongs+'<div class="wrong"style="background:#CC643B;margin-right:1px;margin-bottom:1px;padding:3px;">Blockage</div>';}else
            if(w[i]==='8'){ wrongs=wrongs+'<div class="wrong"style="background:#94AD2E;margin-right:1px;margin-bottom:1px;padding:3px;">Bad Smell</div>';}else
            if(w[i]==='9'){ wrongs=wrongs+'<div class="wrong"style="background:#28C9C1;margin-right:1px;margin-bottom:1px;padding:3px;">Wet Floor</div>';}else
            if(w[i]==='10'){wrongs=wrongs+'<div class="wrong"style="background:#B883D3;margin-right:1px;margin-bottom:1px;padding:3px;">Vandalism</div>';}else
            if(w[i]==='11'){wrongs=wrongs+'<div class="wrong"style="background:#B17C3A;margin-right:1px;margin-bottom:1px;padding:3px;">Unclean</div>';}else
            if(w[i]==='12'){wrongs=wrongs+'<div class="wrong"style="background:#FF5053;margin-right:1px;margin-bottom:1px;padding:3px;">Unusable</div>';}
            }
        var readabletime=_.timeref.replace('T','<br>');
        readabletime=readabletime.split(':');
        readabletime=readabletime[0]+':'+readabletime[1];
        var issues= '<tr class="iss"id="iss_'+_.looid+'"style="border-top:1px solid #DBDBDB;margin-top:8px;"ref="'+_.looid+'">'+
                    '<td style="width:150px;"><b style="margin:10px;"id="qr_'+_.looid+'">'+_.looid+'</b></td>'+
                    '<td class="star"id="star_'+_.looid+'"style="font-size:14px;width:75px;">'+_.star+'<img src="R/star.png"style="margin:5px;margin-top:-3px;"/></td>'+
                    '<td style="width:150px;">'+'<textarea class="feedback"id="feedback_'+_.looid+'"style="border:0px;outline:0px;padding:5px;min-width:138px;max-width:138px;background:none;">'+hexDecode(_.feedback)+'</textarea>'+'</td>'+
                    '<td class="wrongs"id="wrongs_'+_.looid+'"style="width:125px;font-weight:bold;color:#FFF;text-align:center;">'+wrongs+'</td>'+
                    '<td class="time"style="width:70px;">'+readabletime+'</td>'+
                    '<td class="x"id="x_'+_.looid+'"style="width:30px;"><img src="R/eye.png"style="cursor:pointer;width:16px;"id="ve3_'+_.looid+'"class="ve3"/></td>'+
                    '</tr>';
        $('#issues3').prepend(issues);
        totalH=$('body').height();
        $('#totalH').css({'height':totalH+'px'});*/
        
        
        
        
        
        
        
        
        //$('.ve3').unbind().bind('click',function(ev){
            //me=$(this).attr('id').replace('ve3_','');
            
            
            
            socket.emit('tally_all_loo_stats',{'c':c});
            
            
            
            
            socket.on('loo_tally_data',function(_){loo_tally_data(_);});
            
            
            
            
            function loo_tally_data(_){
                var tally=
                '<div class="work"id="work_'+_.looid+'">'+
                '<table>'+
                '    <tr>'+
                '    <td width="560px"><b style="color:#999;">Loo Location from QR scan:</b><b id="qrloo"class="qrloo">'+_.looid+'</b></td>'+
                '    </tr>'+
                '</table>'+
                '<table class="all">'+
                '    <tr>'+
                '    <td class="allstats"></td>'+
                '    <td class="allfeedback"width="334px"></td>'+
                '    </tr>'+
                '</table>'+
                '<table class="reviewbox">'+
                '    <tr>'+
                '    <td style="height:50px;width:500px;">'+
                '       <textarea class="review"id="review_'+_.looid+'">Note: Who reviewed this location, what was fixed, what was cleaned...</textarea>'+'</td>'+
                '    </td>'+
                '    <td style="height:50px;">'+
                '       <div class="loosave"id="loosave_'+_.looid+'"><b style="position:relative;top:17px;">Update</b></div>'+
                '    </td>'+
                '    </tr>'+
                '</table>'+
                '</div>';
                $('#issues3').prepend(tally);
                var adverage=((_.r5*5)+(_.r4*4)+(_.r3*3)+(_.r2*2)+(_.r1*1))/(_.r5+_.r4+_.r3+_.r2+_.r1);
                var rating='';
                rating=rating+  '<div class="hs"><div class="hhs">'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '</div><div class="r5 r">'+_.r5+'</div>'+
                                '</div>';
                rating=rating+  '<div class="hs"><div class="hhs">'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '</div><div class="r4 r">'+_.r4+'</div>'+
                                '</div>';
                rating=rating+  '<div class="hs"><div class="hhs">'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '</div><div class="r3 r">'+_.r3+'</div>'+
                                '</div>';
                rating=rating+  '<div class="hs"><div class="hhs">'+
                                '<img src="R/star.png"class="s"/>'+
                                '<img src="R/star.png"class="s"/>'+
                                '</div><div class="r2 r">'+_.r2+'</div>'+
                                '</div>';
                rating=rating+  '<div class="hs"><div class="hhs">'+
                                '<img src="R/star.png"class="s"/>'+
                                '</div><div class="r1 r">'+_.r1+'</div>'+
                                '</div>';
                rating=rating+  '<b style="color:#999;"><br>(<b style="color:#000;">'+adverage.toFixed(2)+'</b> .avg Rating)<br><br></b><span>';
                
                console.log(_.c1);
                
                rating=rating+  '<div class="hc1 hc"><div class="wc1 wc"style="background:#31AD79;">Low / Empty Paper</div>'+
                                '<b class="tc1 tc">'+((_.c1)?_.c1:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc2 hc"><div class="wc2 wc"style="background:#FF70C6;">Low / Empty Soap</div>'+
                                '<b class="tc2 tc">'+((_.c2)?_.c2:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc3 hc"><div class="wc3 wc"style="background:#0082CE;">Hand Dryer / Towels</div>'+
                                '<b class="tc3 tc">'+((_.c3)?_.c3:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc4 hc"><div class="wc4 wc"style="background:#00C7E7;">Water Supply</div>'+
                                '<b class="tc4 tc">'+((_.c4)?_.c4:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc5 hc"><div class="wc5 wc"style="background:#FFB200;">Faulty Lighting</div>'+
                                '<b class="tc5 tc">'+((_.c5)?_.c5:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc6 hc"><div class="wc6 wc"style="background:#CE5298;">Faulty Cubicle Lock</div>'+
                                '<b class="tc6 tc">'+((_.c6)?_.c6:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc7 hc"><div class="wc7 wc"style="background:#CC643B;">Blockage</div>'+
                                '<b class="tc7 tc">'+((_.c7)?_.c7:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc8 hc"><div class="wc8 wc"style="background:#94AD2E;">Bad Smell</div>'+
                                '<b class="tc8 tc">'+((_.c8)?_.c8:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc9 hc"><div class="wc9 wc"style="background:#28C9C1;">Wet Floor</div>'+
                                '<b class="tc9 tc">'+((_.c9)?_.c9:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc10 hc"><div class="wc10 wc"style="background:#B883D3;">Vandalism</div>'+
                                '<b class="tc10 tc">'+((_.c10)?_.c10:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc11 hc"><div class="wc11 wc"style="background:#B17C3A;">Unclean</div>'+
                                '<b class="tc11 tc">'+((_.c11)?_.c11:0)+'</b>'+
                                '</div>';
                rating=rating+  '<div class="hc12 hc"><div class="wc12 wc"style="background:#FF5053;">Unusable</div>'+
                                '<b class="tc12 tc">'+((_.c12)?_.c12:0)+'</b>'+
                                '</div>';
                rating=rating+'<br><b style="color:#999;">Reported by <b class="npeople"style="color:#000;">'+_.people+'</b> people.</b></span><br><br><br>';
                $('#work_'+_.looid).find('.allstats').html(rating);
                if(_.c1===0)$('#work_'+_.looid).find('.hc1').hide();
                if(_.c2===0)$('#work_'+_.looid).find('.hc2').hide();
                if(_.c3===0)$('#work_'+_.looid).find('.hc3').hide();
                if(_.c4===0)$('#work_'+_.looid).find('.hc4').hide();
                if(_.c5===0)$('#work_'+_.looid).find('.hc5').hide();
                if(_.c6===0)$('#work_'+_.looid).find('.hc6').hide();
                if(_.c7===0)$('#work_'+_.looid).find('.hc7').hide();
                if(_.c8===0)$('#work_'+_.looid).find('.hc8').hide();
                if(_.c9===0)$('#work_'+_.looid).find('.hc9').hide();
                if(_.c10===0)$('#work_'+_.looid).find('.hc10').hide();
                if(_.c11===0)$('#work_'+_.looid).find('.hc11').hide();
                if(_.c12===0)$('#work_'+_.looid).find('.hc12').hide();
                var allstats_height=$('#work_'+_.looid).find('.allstats').css('height').replace('px','');
                var allfeedback='';
                var feed=_.feedback.split('@');
                for(var i=1;i<feed.length;i++){
                    var f=feed[i].split(',');
                    var readabletime=f[0];
                    readabletime=readabletime.split(':');
                    readabletime=readabletime[0]+':'+readabletime[1];
                    allfeedback=allfeedback+'<b style="color:#999;">'+readabletime+'</b><br>'+hexDecode(f[1])+'<br><br>';
                    }
                $('#work_'+_.looid).find('.allfeedback').html('<b style="color:#999;">Customer Feedback:</b><br><br><div class="feed"style="height:'+(allstats_height - 64)+'px;">'+allfeedback+'</div>');
                totalH=$('body').height();
                $('#totalH').css({'height':totalH+'px'});
                looreview();
                }//:loo_tally_data
            
            
            
            
            socket.on('new_loo_tally_data',function(_){
                if($('#work_'+_.looid).length===1){
                    var w=_.choice.split('|');
                    var wrongs='';
                    for(var i=0;i<w.length;i++){
                        if(w[i]){
                            var $tc=$('#work_'+_.looid).find('.tc'+w[i]);
                            $tc.text(parseInt($tc.text()) + 1);
                            $('#work_'+_.looid).find('.hc'+w[i]).show();
                            }}
                    var $star=$('#work_'+_.looid).find('.r'+_.star);
                    $star.text(parseInt($star.text()) + 1);
                    var r5=parseInt($('#work_'+_.looid).find('.r5').text());
                    var r4=parseInt($('#work_'+_.looid).find('.r4').text());
                    var r3=parseInt($('#work_'+_.looid).find('.r3').text());
                    var r2=parseInt($('#work_'+_.looid).find('.r2').text());
                    var r1=parseInt($('#work_'+_.looid).find('.r1').text());
                    var adverage=((r5*5)+(r4*4)+(r3*3)+(r2*2)+(r1*1))/(r5+r4+r3+r2+r1);
                    var readabletime=_.timeref.replace('T',' ');
                    readabletime=readabletime.split(':');
                    readabletime=readabletime[0]+':'+readabletime[1];
                    var newfeedback=((_.feedback)?'<b style="color:#999;">'+readabletime+'</b><br>'+hexDecode(_.feedback)+'<br><br>':'');
                    var $allfeedback=$('#work_'+_.looid).find('.feed');
                    $allfeedback.html(newfeedback+$allfeedback.html());
                    var $people=$('#work_'+_.looid).find('.npeople');
                    $people.text(parseInt($people.text()) + 1);
                    var allstats_height=$('#work_'+_.looid).find('.allstats').css('height').replace('px','');
                    $allfeedback.css({'height':(allstats_height - 64)+'px'});
                    }
                else{
                    _['c1']=0;_['c2']=0;_['c3']=0;_['c4']=0;_['c5']=0;_['c6']=0;_['c7']=0;_['c8']=0;_['c9']=0;_['c10']=0;_['c11']=0;_['c12']=0;
                    var w=_.choice.split('|');
                    for(var i=0;i<w.length;i++){
                        _['c'+w[i]]=1;
                        }
                    _['r5']=0;_['r4']=0;_['r3']=0;_['r2']=0;_['r1']=0;
                    if(_.star==='5'){_['r'+'5']=1;}else
                    if(_.star==='4'){_['r'+'4']=1;}else
                    if(_.star==='3'){_['r'+'3']=1;}else
                    if(_.star==='2'){_['r'+'2']=1;}else
                    if(_.star==='1'){_['r'+'1']=1;}
                    _['people']=1;
                    _.feedback='@'+_.timeref+','+_.feedback;
                    console.dir(_);
                    loo_tally_data(_);
                    }
                });
            
            
            
            function looreview(){
                $('.loosave').unbind().bind('click',function(){
                    var looid=$(this).attr('id').replace('loosave_','');
                    if($('#review_'+looid).val()==='Note: Who reviewed this location, what was fixed, what was cleaned...'){
                        $('#review_'+looid).effect('shake',{'distance':3});
                        }
                    else{
                        html2canvas($('#work_'+looid).find('.allstats'),{
                            onrendered:function(canvas){
                            var cdata=canvas.toDataURL();//console.log(cdata);
                            var timeref=new Date();
                            socket.emit('send_looreview',{'c':c,'looid':looid,'file':cdata,'timeref':timeref,'review':hexEncode($('.review').val())});
                            }});}});return;}
            
        
        
        
        socket.on('loo_show_update',function(_){
            $('#update_'+_.looid+',#work_'+_.looid).remove();
            var update=
                '<div class="update"id="update_'+_.looid+'">'+
                '<table>'+
                '    <tr>'+
                '    <td width="560px"><b style="color:#999;">Work Update For Loo Location:</b><b id="qrloo"class="qrloo">'+_.looid+'</b></td>'+
                '    </tr>'+
                '    <tr>'+
                '    <td style="height:50px;width:500px;">'+
                        '<div class="reviewed"id="reviewed_'+_.looid+'">'+hexDecode(_.review)+
                        '<br><br>'+
                        '<b style="color:#999;">'+_.timeref+'</b>'+
                        '</div>'+
                '    </td>'+
                '    </tr>'+
                '</table>'+
                '</div>';
                $('#issues3').prepend(update);
            });
        

        
    
    
    
    
    
    
    /*
    socket.on('job_removed',function(_){
        $('.iss[ref="'+_.me+'"]').remove();
        });*/
    
    
    
    //$('#exit').bind('click',function(){$('.PAGE,.work').toggle();});
        
        
    /*    
    $('#save').click(function(){
        $('.PAGE,.work').toggle();
        var type=jobtype.replace('type','');
        socket.emit('update_job',{'c':c,'id':me,'type':type,'jobdone':fix,'text':hexEncode($('#editd').val())});
        });
    socket.on('job_updated',function(_){
        $('#done_'+_.me).attr({'src':'R/'+_.fix+'.png'});
        $('#type_'+_.me).attr({'src':'R/'+_.type+'.png'});
        $('#text_'+_.me).text(hexDecode(_.text));
        });*/
    
    
    
    
    
    });//socket.io

});//ready
</script>









</body></html>