<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="https://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>QR - Location</title>
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
<script type="text/javascript" src="S/exif.js"></script>
<script type="text/javascript" src="S/binaryajax.js"></script>
<script type="text/javascript" src="S/rotate.js"></script>


<script src="S/iphone/megapix-image.js"></script>


<!--script type="text/javascript" src="S/kinetic.js"></script-->
<script type="text/javascript" src="S/delivery.js"></script>


<script type="text/javascript" src="S/png.js"></script>
<script type="text/javascript" src="S/zlib.js"></script>




<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">



<style>
.no-exif-orientation .rotate-cw90 {
    -webkit-transform:rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -ms-transform:rotate(-90deg);
    -o-transform:rotate(-90deg);
    transform:rotate(-90deg);
    filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    
    /* HACK */
    margin: 13% 0 0 -13%;
}
</style>







</head><body style="background:#FFF;margin:0px;font-family:sans-serif;font-size:14px;font-weight:bold;color:#FFF;">

<div id="offscreen"style="position:absolute;top:-10000px;left:-10000px;">
<input id="img"type="file"accept="image/png, image/gif, image/jpeg"multiple="false">
<img id="realimg"exif="true"/>
<canvas id="canvas"></canvas>
</div>



<!--img src="data:image/png;base64,"/-->
<!--canvas></canvas-->


<div class="HEAD"style="position:relative;height:91px;width:100%;background:#FFF;">
    <div class="HEADC"style="position:relative;height:51px;width:320px;margin-left:auto;margin-right:auto;">
    <img src="R/hsdemo.png"style="margin:5px;outline:none;"href="http://www.hostingstudio.net/"/>
    <img src="R/qritlogo.png"style="height:41px;float:right;margin:5px;outline:none;"href="http:www.hostingstudio.net/"/>
    </div>
    <div class="topic"style="text-align:center;position:relative;height:30px;background:#FF6600;padding-top:14px;padding-bottom:10px;font-size:12px;"></div> 
</div>





<div class="PAGE"style="position:relative;height:300px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:10px;text-align:left;">
  



<div style="position:relative;top:10px;left:3px;width:304px;padding:5px;background:#0099CC;font-size:12px;">
    <img src="R/i.png"style="height:11px;margin-right:5px;"/>Please report an item if it is missing, unclean, broken and/or marked.
</div>



    <table class="PAGEt"style="position:relative;top:20px;"></table>

    
    <div style="height:50px;"></div>
    
    <div style="position:relative;top:10px;left:3px;width:304px;padding:5px;background:#0099CC;font-size:12px;">
    <img src="R/i.png"style="height:11px;margin-right:5px;"/>By pressing 'Agree &amp; Send' blaa blaa email address used as digital signature. you will receive a pdf copy in your inbox for your records.
    </div>
    
    
    
    <input id="email"type="text"style="outline:none;border:1px solid #D44E3E;position:relative;width:299px;top:15px;left:3px;padding:6.5px;font-weight:bold;color:#D44E3E;"value="*Your email address is required">
    
    
    <div style="height:20px;"></div>
    
    <div id="complete"style="text-align:center;position:relative;background:#36C42B;left:3px;width:314px;height:30px;cursor:pointer;"><b style="position:relative;top:7px;">Agree &amp; Send</b></div>


    <div style="height:50px;"></div>
    
    
<div id="glass"style="position:absolute;top:-40px;width:100%;height:423px;background:#FF6600;display:none;text-align:center;">
    <img class="spin"src="R/spinner.png"style="position:absolute;left:145px;top:195px;height:30px;"/>
    <b id="info"style="color:#FFF;position:relative;top:235px;">Sending your report...</b>
</div>
   
    
</div>





<script>
var c='demo2';

var type='fix';
var sub='none';
var timeref;

function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
 


$(document).ready(function(){



$.getScript("https://serveraddress:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://serveraddress:8001');
    
    
    
    
    
    var addressid=document.location.href.split('qr=');addressid=addressid[1];
    socket.emit('get addresscheck',{'c':c,'id':addressid});
    
    socket.on('put addresscheck-property',function(_){
        $('.topic').html(hexDecode(_.property)+'<br><b style="color:#000;"> Inventory Check List</b>');
        });
    socket.on('put addresscheck-item',function(_){
        
        var $img='';
        if(_.img!==''&&_.img!==undefined){
            var d=new Date().getTime();
            $img='<img class="one"id="one'+_.key+'"src="img/'+c+'/'+_.img+'?'+d+'"style="max-width:100%;max-height:100%;width:auto;height:auto;"/>';
            }
        var vcol;
        var vval;
        if(hexDecode(_.val).indexOf('*')!==-1){
            putheaderv();
            }
        else if(_.text===''||_.text===undefined||hexDecode(_.text)==='Good Condition'){
            vval='Good Condition';
            vcol='#33CC66';
            putitemv();
            }
        else{
            vval=hexDecode(_.text);
            vcol='#D44E3E';
            putitemv();
            }
        function putheaderv(){
            var $header='<tr><td class="item"id="'+_.key+'"style="color:#FFF;">'+
                        '<h3 class="headername"style="margin-left:1px;letter-spacing:1px;background:#999;padding-top:5px;padding-bottom:5px;"><b style="margin-left:5px;">'+hexDecode(_.val).replace('* ','').replace('*','')+'</b></h3>'+
                        '</td></tr>';
            $('.PAGEt').append($header);
            }
        function putitemv(){
            var $item=  '<tr><td class="item"id="'+_.key+'"style="color:#000;">'+
                        '<b class="itemname"style="margin-left:5px;">'+hexDecode(_.val)+':</b>'+
                        '<table class="checker"style="position:relative;width:316px;border:2px;margin-top:3px;margin-left:auto;margin-right:auto;background:#F7F7F7;">'+
                        '<tr><td>'+
                        '<table style="border-collapse:collapse;"><tr>'+
                        '<td id="description"style="padding:0px;background:#FFF;width:274px;height:30px;cursor:pointer;border-right:2px solid #F7F7F7;">'+
                        '<div style="width:272px;height:100%;border:1px solid #CCC;">'+
                        '<input id="txt'+_.key+'"class="txt"type="text"style="outline:none;border:none;width:259px;padding:6.5px;font-weight:bold;color:'+vcol+';"value="'+vval+'"/>'+
                        '</div>'+
                        '</td>'+
                        '<td id="img'+_.key+'"class="img"style="text-align:center;padding:0px;background:url(R/img.png);background-size:100% 100%;width:35px;height:30px;cursor:pointer;">'+
                        '<div id="anger'+_.key+'"style="background:rgba(255,0,0,0.5);width:100%;height:100%;pointer-events:none;display:none;"></div>'+
                        '<div class="ximg"id="ximg'+_.key+'"style="position:absolute;top:11.5px;right:13px;width:16px;height:16px;pointer-events:none;z-index:5;display:none;background:url(R/kill.png);background-size:16px 16px;"></div>'+
                        '<img id="spin'+_.key+'"class="spin"src="R/spinner.png"style="position:relative;left:2px;top:0px;height:30px;display:none;"/>'+
                        $img+
                        '</td>'+
                        '</tr></table>'+
                        '</td></tr>'+
                        '</table>'+
                       '</td></tr>';
            $('.PAGEt').append($item);
            $('#img'+_.key).click(function(){
                if($('#one'+_.key).length===1){
                    $('#one'+_.key).remove();
                    socket.emit('inventory_location_remove_img',{'c':c,'propertyid':addressid,'img':_.key.replace('k','')});
                    }
                else{
                    preview($(this).attr('id').replace('img',''));
                    $('#img').trigger('click');
                    }
                }).hover(
                         function(){
                            if($('#one'+_.key).length===1){
                                $('#ximg'+_.key).show();
                                }
                            },
                         function(){
                            $('#ximg'+_.key).hide();
                            });
            $('.txt').unbind().bind('textchange keyup',function(e){
                var tid=$(this).attr('id').replace('txtk','');
                socket.emit('inventory_location_text',{'c':c,'propertyid':addressid,'tid':tid,'val':hexEncode($(this).val())});
                }).focus(function(){if($(this).val()==='Good Condition'){$(this).val('').css({'color':'#D44E3E'});}}).focusout(function(){if($(this).val()===''){$(this).val('Good Condition').css({'color':'#33CC66'});}});
            rotation();
            }
        });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(window).bind('beforeunload',function(){
        socket.emit('open_inventory_property',{'c':c,'property':addressid});
        });
    
    
    /*
    $('#ok').click(function(){
        if( ($('#description').val()!==''&&$('#description').val()!=='Description?') ){
            if($('#img1')[0].files[0]!==undefined){
                if($('#img2')[0].files[0]!==undefined){
                $('#glass').show();
                var qr=document.location.href.split('qr=');qr=qr[1];
                var description=hexEncode($('#chosen').text()+': '+$('#description').val());
                timeref=new Date();
                socket.emit('save_report',{'c':c,'qr':qr,'type':type,'description':description,'timeref':timeref});
                }else{
                    $('#img02').find('.anger').show().fadeOut("slow");
                    }
            }else{
                $('#img01').find('.anger').show().fadeOut("slow");
                if($('#img2')[0].files[0]===undefined){$('#img02').find('.anger').show().fadeOut("slow");}
                }
        }else{
            $('#d').find('.anger').show().fadeOut("slow");
            if($('#img1')[0].files[0]===undefined){$('#img01').find('.anger').show().fadeOut("slow");}
            if($('#img2')[0].files[0]===undefined){$('#img02').find('.anger').show().fadeOut("slow");}
            }
    });
    */
    

    
    /*
    var imgs=1;
    
    
    socket.on('get_imgs',function(_){
        var file = $('#img'+imgs)[0].files[0];
        var myid=_.id;
        $('#info').text('Uploading image '+imgs+'...');
        if(imgs==1){socket.emit('img_upload',{'c':c,'file':$('#canvas1')[0].toDataURL(),'id':myid});imgs=2;}else 
        if(imgs==2){socket.emit('img_upload',{'c':c,'file':$('#canvas2')[0].toDataURL(),'id':myid});}
        });
    
    */
    
    
    
    /*
    socket.on('report_saved',function(){restart();});
    
    
    
    
    function restart(){
        $('#done').show();
        $('#info').text('Sending your report...');
        $('#glass').hide();
        imgs=1;
        $('#description').val('Where is the problem?');
        $('.one').remove();
        $("#img1,#img2").remove();
        $('#offscreen').append('<input id="img1"type="file"accept="image/png, image/gif, image/jpeg"multiple="false"><input id="img2"type="file"accept="image/png, image/gif, image/jpeg"multiple="false">');
        type='fix';
        sub='none';
        timeref=new Date();
        $('#first').show();
        $('#second').hide();
        $('#next').click(function(){$('#done').hide();});
        }*/
    
    
    
    
    var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    $('#complete').click(function(){
        if(!filter.test($('#email').val())){
            $('#email').css({'top':parseInt($('#email').css('top').replace('px','')) + 2 +'px'}).effect('shake',{'distance':3},function(){$('#email').css({'top':parseInt($('#email').css('top').replace('px','')) - 2 +'px'});});
            }
        else{
            socket.emit('inventory_complete',{'c':c,'propertyid':addressid,'e':hexEncode($('#email').val())});
            $('#glass').show();
            }
        });
    $('#email').attr('spellcheck','false').focus(function(){if($(this).val()==='*Your email address is required'){$(this).val('');}}).focusout(function(){if($(this).val()===''){$(this).val('*Your email address is required');}});
    
    
    
    
    
    
    
    
    socket.on('invenetory_send.err',function(_){
        console.log('err');
        });
    
    
    socket.on('invenetory.sent',function(_){
        $('#glass').find('.spin').hide();
        $('#info').html('Thank you.<br> A copy of the report has been sent to your email.');
        });
    
    
    
    
    
    
    //preview
    function preview(id){console.log(id);
    $('#img').unbind().bind('change',function(evt){
        var textval='';
        if($('#txt'+id).val()!==''||$('#txt'+id).val()!=='Good Condition'){textval=hexEncode($('#txt'+id).val());}else{textval='';}
        var put='',n=0;
        put=$('#img'+id);
        $('#spin'+id).show();
        n=1;
        var file = $(this)[0].files[0];
        var reader = new FileReader();
        reader.onload=function(e){
            put.find('#anger'+id).hide();
            put.find('#one'+id).remove();
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
                    //$('#spin'+id).hide();
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
                        socket.emit('inventory_upload_part',{
                            'c':c,
                            'propertyid':addressid,
                            'text':textval,
                            'file':$('#canvas')[0].toDataURL(),
                            'kid':id.replace('k','')
                            });}
                        socket.on('inventory_upload_part_done',function(_){
                            $('#one'+'k'+_.id).show();
                            $('#spin'+'k'+_.id).hide();
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
                });
            }
        reader.readAsDataURL($(this)[0].files[0]);
      });return;}
    
    
    
    function rotation(){
	$(".spin").rotate({angle:0,duration:1500,animateTo:360,callback:rotation,easing:function(x,t,b,c,d){return c*(t/d)+b;}});
	}
    
        
    
    
/**
 * Detecting vertical squash in loaded image.
 * Fixes a bug which squash image vertically while drawing into canvas for some images.
 * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
 * 
 */
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

/**
 * A replacement for context.drawImage
 * (args are for source and destination).
 */
function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio = detectVerticalSquash(img);
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
}
    
    
    });//socket.io

});//ready
</script>









</body></html>