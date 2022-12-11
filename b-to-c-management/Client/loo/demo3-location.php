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
#inner1 td{
    position: relative;
    z-index: 0;
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


<div class="HEAD"style="position:relative;height:76px;width:100%;background:#FFF;">
    <div class="HEADC"style="position:relative;height:51px;width:320px;margin-left:auto;margin-right:auto;">
    <img src="R/hsdemo.png"style="margin:5px;"/>
    <img src="R/qritlogo.png"style="height:41px;float:right;margin:5px;"/>
    </div>
    <div class="topic3"style="text-align:center;position:relative;height:14px;background:#FF6600;padding-top:4px;padding-bottom:7px;">I have an issue with this toilet:</div> 
</div>





<div class="PAGE3"style="position:relative;height:300px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;">
  




<table id="reporting"style="width:310px;border:2px;margin-left:auto;margin-right:auto;background:#FFF;border-collapse:collapse;z-index:0;">
    <tr>
        <td style="height:0px;width:width:306px;"></td>
    </tr>
    <tr><td>
        
        
        
        <table id="inner1"style="width:100%;">
        <tr>
        <td id="c1"class="choice"style="background:#31AD79;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Low / Empty Paper
                </div>
                </div>
            <div class="non">Low / Empty Paper</div>
        </td>
        <td id="c2"class="choice"style="background:#FF70C6;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Low / Empty Soap
                </div>
                </div>
            <div class="non">Low / Empty Soap</div>
        </td>
        </tr>
        <tr>
        <td id="c3"class="choice"style="background:#0082CE;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Hand Dryer / Towels
                </div>
                </div>
            <div class="non">Hand Dryer / Towels</div>
        </td>
        <td id="c4"class="choice"style="background:#00C7E7;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Water Supply
                </div>
                </div>
            <div class="non">Water Supply</div>
        </td>
        </tr>
        <tr>
        <td id="c5"class="choice"style="background:#FFB200;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Faulty Lighting
                </div>
                </div>
            <div class="non">Faulty Lighting</div>
        </td>
        <td id="c6"class="choice"style="background:#CE5298;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Faulty Cubicle Lock
                </div>
                </div>
            <div class="non">Faulty Cubicle Lock</div>
        </td>
        </tr>
        <tr>
        <td id="c7"class="choice"style="background:#CC643B;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Blockage
                </div>
                </div>
            <div class="non">Blockage</div>
        </td>
        <td id="c8"class="choice"style="background:#94AD2E;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Bad Smell
                </div>
                </div>
            <div class="non">Bad Smell</div>
        </td>
        </tr>
        <tr>
        <td id="c9"class="choice"style="background:#28C9C1;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Wet Floor
                </div>
                </div>
            <div class="non">Wet Floor</div>
        </td>
        <td id="c10"class="choice"style="background:#B883D3;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Vandalism
                </div>
                </div>
            <div class="non">Vandalism</div>
        </td>
        </tr>
        <tr>
        <td id="c11"class="choice"style="background:#B17C3A;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Unclean
                </div>
                </div>
            <div class="non">Unclean</div>
        </td>
        <td id="c12"class="choice"style="background:#FF5053;width:151px;height:20px;font-size:10px;cursor:pointer;padding:0px;overflow:hidden;">
            <div class="sel"style="display:run-in;width:17px;height:20px;background:rgba(0,0,0,0.5);position:relative;display:none;">
                <div style="display:run-in;width:151px;height:20px;background:url(R/arrow.png);background-size:13px 20px;background-repeat:no-repeat;position:relative;text-align:center;line-height:20px;">
                Unusable
                </div>
                </div>
            <div class="non">Unusable</div>
        </td>
        </tr>
        </table>
        
        
        
    </td></tr>
    <tr>
        <td style="width:306px;text-align:left;padding-top:5px;">
            <div style="border:1px solid #FF6600;margin-left:2px;width:302px;">
            <input id="feedback"type="text"style="margin:0px;margin-bottom:1px;border:none;outline:none;width:289px;padding:6.5px;/*font-weight:bold;*/color:#999;"value="Additional feedback..."/>
            </div>
        </td>
    </tr>
    <tr>
        <td style="width:306px;text-align:left;color:#000;padding-top:5px;padding-bottom:7px;font-size:18px;">
            <b style="margin-left:2px;">Tap To Rate: </b>
            <img id="s1"class="star"src="R/star_.png"style="vertical-align:-1.5px;margin-right:3px;cursor:pointer;"/>
            <img id="s2"class="star"src="R/star_.png"style="vertical-align:-1.5px;margin-right:3px;cursor:pointer;"/>
            <img id="s3"class="star"src="R/star_.png"style="vertical-align:-1.5px;margin-right:3px;cursor:pointer;"/>
            <img id="s4"class="star"src="R/star_.png"style="vertical-align:-1.5px;margin-right:3px;cursor:pointer;"/>
            <img id="s5"class="star"src="R/star_.png"style="vertical-align:-1.5px;margin-right:3px;cursor:pointer;"/>
            <div id="save"style="text-align:center;position:relative;float:right;background:#36C42B;width:55px;height:20px;top:0px;right:2px;cursor:pointer;color:#FFF;font-size:10px;line-height:6px;"><b style="position:relative;top:7px;">Send</b></div>
        </td>
    </tr>
    </table>
    <table id="ads">
    <tr><td id="ad"style="width:306px;height:113px;cursor:pointer;"><img src="R/ad.png"style="width:304px;"/></td></tr>
    <tr>
        <td style="height:20px;width:width:306px;text-align:center;color:#FF6600;font-weight:normal;">
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
            <div style="border-bottom:1px solid #FF6600;width:302;">Advert Space</div>
        </td>
    </tr>
</table>




  
</div>





<script>
var c='demo3';
var looid=document.location.href.split('qr=');looid=looid[1];
var timeref;

function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}




$(document).ready(function(){



$.getScript("https://serveraddress:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://serveraddress:8001');
    
    
    
    
    
    
    $('.choice').click(function(){
        $(this).find('.sel,.non').toggle();
        if($(this).hasClass('and')){$(this).removeClass('and');}else{$(this).addClass('and');}
        });
    
    
    
    
    
    
    $('#feedback').focus(function(){
        if($(this).val()==='Additional feedback...'){$(this).val('').css({'color':'#000'});}
        });
    $('#feedback').focusout(function(){
        if($(this).val()===''){$(this).val('Additional feedback...').css({'color':'#999'});}
        });
    
    
    
    
    var star=0;
    $('.star').click(function(){
        $('.star').attr({'src':'R/star_.png'});
        star=$(this).attr('id').replace('s','');
        for(var i=0;i<=star;i++){
            $('#s'+i).attr({'src':'R/star.png'});
            }
        });
    
    
    
    
    
    $('#save').click(function(){
        var choice='';
        for(var i=1;i<=12;i++){
            if($('#c'+i).hasClass('and')){
                choice=choice+i+'|';//choice=choice+$('#c'+i).find('.non').text()+',';
                }
            }
        choice=choice+'|';choice=choice.replace('||','');
        var feedback='';
        timeref=new Date();
        if($('#feedback').val()!=='Additional feedback...'){feedback=hexEncode($('#feedback').val());}else{feedback='';}
        socket.emit('save_loo_report',{'c':c,'looid':looid,'choice':choice,'feedback':feedback,'star':star,'timeref':timeref});
        $('#reporting').hide();
        $('.topic3').text('Thank you for your report!');
        });
    
    
    
    
    
    
    
    
    
    socket.on('loo_report_saved',function(){
        });
    
    
    
    
    
    
    


    
    
    
    
    
    
    
    
    
    
    

    
    
    });//socket.io

});//ready
</script>









</body></html>