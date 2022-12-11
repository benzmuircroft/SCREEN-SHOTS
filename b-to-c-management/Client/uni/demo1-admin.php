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
</style>







</head><body style="background:#F7F7F7;margin:0px;font-family:sans-serif;font-size:14px;font-weight:bold;color:#3C3C3C;">

<div id="offscreen"style="position:absolute;top:-1000px;"></div>



<!--img src="data:image/png;base64,"/-->
<!--canvas></canvas-->


<div class="HEAD"style="position:relative;height:51px;width:100%;background:#FFF;">
    <div class="HEADC"style="position:relative;height:51px;width:600px;margin-left:auto;margin-right:auto;">
    <img src="R/hsdemo.png"style="margin:5px;"/>
    <img src="R/qritlogo.png"style="height:41px;float:right;margin:5px;"/>
    </div> 
</div>




<div class="PAGE"style="position:relative;width:600px;margin-left:auto;margin-right:auto;margin-top:10px;">
<img id="printall"src="R/print.png"style="margin-left:10px;float:right;display:none;"/>

<table id="filter"style="border-collapse:collapse;height:34px;height:54px;">
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
</table>

<table id="issuesheader"style="border-collapse:collapse;height:34px;">
<tr style="background:#FFF;">
<td width="70px"><b style="margin:10px;">Room</b></td>
<td width="80px">Issue</td>
<td width="300px">Description</td>
<td width="150px">Photos</td>
<td width="150px">Date</td>
<td width="50px">Edit</td>
</tr>
</table>
<style>td{vertical-align:top;padding-top:10px;}</style>
<table id="issues"style="border-collapse:collapse;margin-top:10px;"><tr style="height:100px;"></tr></table>
</div>







<div class="work"style="position:relative;height:100%;width:600px;margin-left:auto;margin-right:auto;display:none;">
    <table style="border-collapse:collapse;border:none;padding:0px;">
    <tr><td height="42px"style="padding-top:0px!important;">
        <table height="42px">
        <tr>
        <td width="660px">Room from QR scan:<b id="qrroom"style="vertical-align:top;margin-top:20px;margin-left:10px;font-size:30px;"></b></td>
        <td width="32px"><img id="printone"src="R/print.png"style="display:none;"/></td>
        </tr>
        </table>
    </td></tr>
    <tr><td>
        <b class="fixtype jobtype"style="cursor:pointer;margin-left:10px;vertical-align:top;opacity:0.4;filter:alpha(opacity=40);"><img src="R/fix.png"style="margin-right:10px;margin-bottom:5px;width:16px;"/>Maintenance</b><br>
        <b class="cleantype jobtype"style="cursor:pointer;margin-left:10px;vertical-align:top;opacity:0.4;filter:alpha(opacity=40);"><img src="R/clean.png"style="margin-right:10px;margin-bottom:5px;width:16px;"/>Cleaning</b><br>
        <b class="securtype jobtype"style="cursor:pointer;margin-left:10px;vertical-align:top;opacity:0.4;filter:alpha(opacity=40);"><img src="R/secur.png"style="margin-right:10px;margin-bottom:5px;width:16px;"/>Security</b><br>
        <b class="painttype jobtype"style="cursor:pointer;margin-left:10px;vertical-align:top;opacity:0.4;filter:alpha(opacity=40);"><img src="R/paint.png"style="margin-right:10px;margin-bottom:5px;width:16px;"/>Painting</b><br>
    </td></tr>
    <tr><td>
        <img id="largeimg1"src=""style="width:300px;height:auto;float:left;"/>
        <img id="largeimg2"src=""style="width:300px;height:auto;float:left;"/>
    </td></tr>
    <tr><td>
        <textarea id="editd"style="width:590px;max-width:590px;height:100px;margin:0px;padding:0px;border:0px;outline:none;background:#FFF;color:#000;font-weight:bold;padding:3px;"></textarea>
    </td></tr>
    <tr><td style="height:150px;">
        <img id="kill"src="R/kill.png"style="cursor:pointer;float:left;margin-left:10px;width:16px;"/>
        <div id="save"style="position:relative;background:#36C42B;width:100px;height:30px;top:0px;right:2px;cursor:pointer;text-align:center;float:right;"><b style="position:relative;top:7px;">save</b></div>
        <div id="exit"style="position:relative;background:#D6203B;width:100px;height:30px;top:0px;right:6px;cursor:pointer;text-align:center;float:right;"><b style="position:relative;top:7px;">cancel</b></div>
    </td></tr>
    </table>
</div>



<script>
var c='demo1';


function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
    



$(document).ready(function(){


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







$.getScript("https://serveraddress:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://serveraddress:8001');
    
    
    var doneimg='<b class="statusimg done"style="margin:10px;font-size:14px;"><img src="R/1.png"style="margin:10px;margin-top:0px;width:16px;cursor:pointer;"/><b style="vertical-align:top;">Job Complete</b></b>';
    var todoimg='<b class="statusimg todo"style="margin:10px;font-size:14px;"><img src="R/0.png"style="margin:10px;margin-top:0px;width:16px;cursor:pointer;"/><b style="vertical-align:top;">Job Incomplete</b></b>';
    var status;
    var jobtype;
    var me;
    var totalH=$('body').height();
    $('body').append('<div id="totalH"style="position:absolute;top:0px;left:0px;width:1px;height:'+totalH+'px;"></div>')
    
    
    socket.emit('get_issues',{'c':c});
    
    
    
    
    
    socket.on('put_issues',function(_){
        
        
        
        bg=$("#issues").find("tr:first").attr('col');
        //if(bg==='#006699'){bg='none';}else{bg='#006699';}
        var readabletime=_.date.replace('T',' ');
        readabletime=readabletime.split(':');
        readabletime=readabletime[0]+':'+readabletime[1];
        var issues= '<tr class="iss"style="background:'+bg+';display:none;"ref="'+_.id+'"col="'+bg+'">'+
                    '<td width="70px"><b style="margin:10px;"id="qr_'+_.id+'">'+_.qr+'</b></td>'+
                    '<td width="80px"><img src="R/'+_.type+'.png"id="type_'+_.id+'"class="jtype"style="width:16px;"/><img src="R/'+_.jobdone+'.png"style="margin-left:10px;width:16px;"id="done_'+_.id+'"class="fixme"/></td>'+
                    '<td class="description"id="text_'+_.id+'"height="150px"width="300px"style="font-size:14px;">'+hexDecode(_.text)+'</td>'+
                    '<td width="150px">'+
                    '<img id="img1_'+_.id+'"src="http://example.com/img/'+_.img1+'"style="max-height:75px;max-width:75px;"/>'+
                    '<img id="img2_'+_.id+'"src="http://example.com/img/'+_.img2+'"style="max-height:75px;max-width:75px;"/>'+
                    '</td>'+
                    '<td class="time"style="font-size:14px;width:150px;">'+readabletime+'</td>'+
                    '<td style="font-size:10px;width:50px;"><img src="R/eye.png"style="cursor:pointer;width:16px;"id="ve_'+_.id+'"class="ve"/></td>'+
                    '</tr>'
        $('#issues').prepend(issues);
        filterissues(_.id);
        
        totalH=$('body').height();
        $('#totalH').css({'height':totalH+'px'});
        
        
        
        
        
        
        
        
        
        
        
        $('.ve').unbind().bind('click',function(ev){
            me=$(this).attr('id').replace('ve_','');
            $('.PAGE,.work').toggle();
            $('.jobtype').css({'opacity':0.4,'filter':'alpha(opacity=0.4)'});
            jobtype=$('#type_'+me).attr('src').replace('R/','').replace('.png','type');
            $('.'+jobtype).css({'opacity':1,'filter':'alpha(opacity=1)'});
            $('.jobtype').hover(
                function(){
                    $('.jobtype').css({'opacity':0.4,'filter':'alpha(opacity=0.4)'});
                    $(this).css({'opacity':1,'filter':'alpha(opacity=1)'});
                    },
                function(){
                    $('.jobtype').css({'opacity':0.4,'filter':'alpha(opacity=0.4)'});
                    $('.'+jobtype).css({'opacity':1,'filter':'alpha(opacity=1)'});
                    }).click(
                function(){
                    $('.jobtype').css({'opacity':0.4,'filter':'alpha(opacity=0.4)'});
                    jobtype=$(this).find('img').attr('src').replace('R/','').replace('.png','type');
                    $(this).css({'opacity':1,'filter':'alpha(opacity=1)'});
                    });
            if($('#done_'+me).attr('src')=='R/0.png'){fix=0;status=todoimg;}else{fix=1;status=doneimg;}
            $('#qrroom').html($('#qr_'+me).text()+status);
            $('.statusimg').hover(
                function(){
                    if(fix==1){$(this).find('img').attr({'src':'R/0.png'});$(this).find('b').text('Update to Job Incomplete?');}
                    if(fix==0){$(this).find('img').attr({'src':'R/1.png'});$(this).find('b').text('Update to Job Complete?')}
                    },
                function(){
                    if(fix==1){$(this).find('img').attr({'src':'R/1.png'});$(this).find('b').text('Job Complete');}
                    if(fix==0){$(this).find('img').attr({'src':'R/0.png'});$(this).find('b').text('Job Incomplete');}
                    }).click(
                function(){
                    if(fix==1){
                        fix=0;$(this).find('img').attr({'src':'R/0.png'});$(this).find('b').text('Job Incomplete');
                        }
                    else{
                        fix=1;$(this).find('img').attr({'src':'R/1.png'});$(this).find('b').text('Job Complete');
                        }});
            $('#editd').val($('#text_'+me).text());
            $('#largeimg1').attr({'src':$('#img1_'+me).attr('src')});
            $('#largeimg2').attr({'src':$('#img2_'+me).attr('src')});
            if($('#largeimg1').height()>399){$('#largeimg1').height(399).width('auto');}else if($('#largeimg1').width()>399){$('#largeimg1').width(399).height('auto');}
            if($('#largeimg2').height()>399){$('#largeimg2').height(399).width('auto');}else if($('#largeimg2').width()>399){$('#largeimg2').width(399).height('auto');}
            $('#kill').unbind().bind('click',function(){
                socket.emit('remove_job',{'c':c,'id':me});
                $('#exit').trigger('click');
                });
            });//ve
        });//put_issues
    
    
    socket.on('job_removed',function(_){
        $('.iss[ref="'+_.me+'"]').remove();
        });
    
    
    
    $('#exit').bind('click',function(){$('.PAGE,.work').toggle();});
        
        
        
    $('#save').click(function(){
        $('.PAGE,.work').toggle();
        var type=jobtype.replace('type','');
        socket.emit('update_job',{'c':c,'id':me,'type':type,'jobdone':fix,'text':hexEncode($('#editd').val())});
        });
    socket.on('job_updated',function(_){
        $('#done_'+_.me).attr({'src':'R/'+_.fix+'.png'});
        $('#type_'+_.me).attr({'src':'R/'+_.type+'.png'});
        $('#text_'+_.me).text(hexDecode(_.text));
        });
    
    
    
    
    
    });//socket.io

});//ready
</script>









</body></html>