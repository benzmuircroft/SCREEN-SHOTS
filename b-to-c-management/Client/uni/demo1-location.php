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
<input id="img1"type="file"accept="image/png, image/gif, image/jpeg"multiple="false">
<input id="img2"type="file"accept="image/png, image/gif, image/jpeg"multiple="false">
<img id="realimg1"exif="true"/>
<img id="realimg2"exif="true"/>
<canvas id="canvas1"></canvas>
<canvas id="canvas2"></canvas>
</div>



<!--img src="data:image/png;base64,"/-->
<!--canvas></canvas-->


<div class="HEAD"style="position:relative;height:91px;width:100%;background:#FFF;">
    <div class="HEADC"style="position:relative;height:51px;width:320px;margin-left:auto;margin-right:auto;">
    <img src="R/hsdemo.png"style="margin:5px;"/>
    <img src="R/qritlogo.png"style="height:41px;float:right;margin:5px;"/>
    </div>
    <div class="topic"style="text-align:center;position:relative;height:30px;background:#FF6600;padding-top:20px;">I have an issue in my accomodation with:</div> 
</div>





<div class="PAGE"style="position:relative;height:300px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:10px;">
  




<table id="first"style="width:310px;border:2px;margin-top:10px;margin-left:auto;margin-right:auto;background:#F7F7F7;">
    <tr>
        <td style="height:50px;width:151px;"></td>
        <td style="height:50px;width:151px;"></td>
    </tr>
    <tr>
        <td id="wall"style="background:#0099FF;width:151px;height:100px;cursor:pointer;">Wall</td>
        <td id="ceiling"style="background:#B188FF;width:151px;height:100px;cursor:pointer;">Ceiling</td>
    </tr>
    <tr>
        <td id="kitchen"style="background:#00D07B;width:151px;height:100px;cursor:pointer;">Furniture</td>
        <td id="bathroom"style="background:#FF9C42;width:151px;height:100px;cursor:pointer;">Bathroom</td>
    </tr>
    <tr>
        <td id="carpet"style="background:#FF5053;width:151px;height:100px;cursor:pointer;">Carpet</td>
        <td id="bed"style="background:#FF70C6;width:151px;height:100px;cursor:pointer;">Bed</td>
    </tr>
    <tr>
        <td style="height:20px;width:151px;"></td>
        <td style="height:20px;width:151px;text-align:right;"><a href="http://quickreport.it"style="color:#FF6600;font-size:10px;text-align-decoration:none;">example.com</a></td>
    </tr>
</table>



<table id="second"style="width:316px;border:2px;margin-top:10px;margin-left:auto;margin-right:auto;background:#F7F7F7;display:none;">
    <tr><td>
        <table><tr>
        <td id="chosen"style="width:304px;height:29px;color:#3C3C3C;">One of the walls</td>
        </tr></table>
    </td></tr>
    
    <tr><td>
        <table><tr>
        <td id="img01"style="background:url('R/upload1.png');width:153px;height:100px;cursor:pointer;">
            <div class="anger"style="background:rgba(255,0,0,0.5);width:100%;height:100%;pointer-events:none;"></div>
            <img class="spinner"id="spin1"src="R/spinner.png"style="position:relative;left:0px;top:0px;height:30px;display:none;"/>
        </td>
        <td id="img02"style="background:url('R/upload2.png');width:153px;height:100px;cursor:pointer;">
            <div class="anger"style="background:rgba(255,0,0,0.5);width:100%;height:100%;pointer-events:none;"></div>
            <img class="spinner"id="spin2"src="R/spinner.png"style="position:relative;left:0px;top:0px;height:30px;display:none;"/>
        </td>
        </tr></table>
    </td></tr>
    <tr><td>
        <table><tr>
        <td id="d"style="background:#FFF;width:304px;height:170px;color:#000;text-align:left;vertical-align:top;">
            <div class="anger"style="position:absolute;z-index:1;background:rgba(255,0,0,0.5);width:304px;height:170px;pointer-events:none;"></div>
            <textarea id="description"style="position:absolute;z-index:0;margin:5px;background:none;border:none;padding:none;outline:none;width:290px;max-width:290px;height:156px;overflow-y:auto;">Where is the problem?</textarea>
        </td>
        </tr></table>
    </td></tr>
    <tr><td>
        <table><tr>
        <td id="ok"style="background:#36C42B;width:310px;height:30px;cursor:pointer;">ok</td>
        </tr></table>
    </td></tr>
</table>



<div id="glass"style="position:absolute;top:-40px;width:100%;height:423px;background:#006699;display:none;">
    <img class="spinner"src="R/spinner.png"style="position:absolute;left:145px;top:195px;height:30px;"/>
    <b id="info"style="color:#FFF;position:relative;top:235px;">Sending your report...</b>
</div>

<div id="done"style="position:absolute;top:-40px;width:100%;height:423px;background:#006699;display:none;">
    <b style="color:#FFF;position:relative;top:180px;">Thank you</b>
    <div id="next"style="position:relative;background:#36C42B;width:210px;height:30px;top:200px;left:55px;cursor:pointer;"><b style="position:relative;top:7px;">Report another problem</b></div>
</div>

   
    
</div>





<script>
var c='demo1';

var type='fix';
var sub='none';
var timeref;




$(document).ready(function(){



$.getScript("https://serveraddress:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://serveraddress:8001');
    
    
    $('.anger').hide();
    
    $('#wall').click(function(){
        sub='wall';
        $('#chosen').text('One of the walls');
        $('#first,#second').toggle();
        preview();
        });
    $('#ceiling').click(function(){
        sub='ceiling';
        $('#chosen').text('A part of the ceiling');
        $('#first,#second').toggle();
        preview();
        });
    $('#kitchen').click(function(){
        sub='kitchen';
        $('#chosen').text('The Furniture');
        $('#first,#second').toggle();
        preview();
        });
    $('#bathroom').click(function(){
        sub='bathroom';
        $('#chosen').text('Something in the bathroom');
        $('#first,#second').toggle();
        preview();
        });
    $('#carpet').click(function(){
        sub='carpet';
        $('#chosen').text('A part of the carpet');
        $('#first,#second').toggle();
        preview();
        });
    $('#bed').click(function(){
        sub='bed';
        $('#chosen').text('The bed and/or matress');
        $('#first,#second').toggle();
        preview();
        });
    
    
    
    
    
    
    $('#img01').click(function(){
        $('#img1,#fimg1').trigger('click');
        });
    $('#img02,').click(function(){
        $('#img2,#fimg2').trigger('click');
        });
    
    
    
    
    
    $('#description').focus(function(){
        if($(this).val()==='Where is the problem?'){$(this).val('');}
        });
    $('#description').focusout(function(){
        if($(this).val()===''){$(this).val('Where is the problem?');}
        });
    
    
    
    
    
    
    
    $('#ok').click(function(){
        if( ($('#description').val()!==''&&$('#description').val()!=='Where is the problem?') ){
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
    
    

    
    
    var imgs=1;
    
    
    socket.on('get_imgs',function(_){
        var file = $('#img'+imgs)[0].files[0];
        var myid=_.id;
        $('#info').text('Uploading image '+imgs+'...');
        if(imgs==1){socket.emit('img_upload',{'c':c,'file':$('#canvas1')[0].toDataURL(),'id':myid});imgs=2;}else 
        if(imgs==2){socket.emit('img_upload',{'c':c,'file':$('#canvas2')[0].toDataURL(),'id':myid});}
        });
    
    
    
    
    
    
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
        }
    
    


    
    
    
    
    
    
    
    
    //preview
    function preview(){
    $('#img1,#img2').change(function(evt){
        var put='',n=0;
        if($(this).attr('id')==='img1'){put=$('#img01');$('#spin1').show();n=1;}else{put=$('#img02');$('#spin2').show();n=2}
        var file = $(this)[0].files[0];
        var reader = new FileReader();
        reader.onload=function(e){
            put.find('.anger').hide();
            put.find('.one').remove();
            var imgx=$('<img class="one"src="'+e.target.result+'"style="max-width:100%;max-height:100%;width:auto;height:auto;"/>');
            put.append(imgx);
            imgx.load(function(){
                $('#realimg'+n).attr({'src':e.target.result});
                var aspectRatio;
                //
                var bin = atob(e.target.result.split(',')[1]);
                var exif = EXIF.readFromBinaryFile(new BinaryFile(bin));
                var o=exif.Orientation;
                $('#canvas'+n).attr({'width':$('#realimg'+n).width(),'height':$('#realimg'+n).height()});
                //
                var _this=this;
                function canvastoimg(){
                    $('#spin1,#spin2').hide();
                    var canvas=$('#canvas'+n)[0];
                    var context=canvas.getContext('2d');
                    if(o===6){
                    var iphone_h=canvas.width;
                    var iphone_w=canvas.height;
                    canvas.width=iphone_w;
                    canvas.height=iphone_h;
                    var mpImg = new MegaPixImage(file);
                    var canvasn = document.getElementById('canvas'+n);
                    mpImg.render(canvasn,{ width:canvas.width,height:canvas.height,orientation:6});
                    }else{
                    context.drawImage(_this,0,0,canvas.width,canvas.height);
                    }}
                if($('#canvas'+n).width()>400){
                    aspectRatio=$('#canvas'+n).height()/$('#canvas'+n).width();
                    $('#canvas'+n).attr({'width':400,'height':parseInt(400 * aspectRatio)});
                    if($('#canvas'+n).height()>400){
                        aspectRatio=$('#canvas'+n).width()/$('#canvas'+n).height();
                        $('#canvas'+n).attr({'height':400,'width':parseInt(400 * aspectRatio)});
                        canvastoimg();
                        }
                    else{canvastoimg();}
                }else if($('#canvas'+n).height()>400){
                    aspectRatio=$('#canvas'+n).width()/$('#canvas'+n).height();
                    $('#canvas'+n).attr({'height':400,'width':parseInt(400 * aspectRatio)});
                    if($('#canvas'+n).width()>400){
                        aspectRatio=$('#canvas'+n).height()/$('#canvas'+n).width();
                        $('#canvas'+n).attr({'width':400,'height':parseInt(400 * aspectRatio)});
                        canvastoimg();
                        }
                    else{canvastoimg();}
                }else{canvastoimg();}
                });
            }
        reader.readAsDataURL($(this)[0].files[0]);
      });}
    
    
    $.getScript("S/rotate.js",function(){
	function rotation(){
	    $(".spinner").rotate({angle:0,duration:1500,animateTo:360,callback:rotation,easing:function(x,t,b,c,d){return c*(t/d)+b;}});
	    }
        rotation()
        });
    
    function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
    
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