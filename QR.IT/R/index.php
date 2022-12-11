<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="https://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>QR</title>
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


<meta property="og:title" content="Send A Card"/>
<meta property="og:image" content="https://up4it-smartcard.com/R/playgift.png" />
<meta property="og:url" content="https://up4it-smartcard.com" />

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







</head><body style="background:#FFCC00;margin:0px;font-family:sans-serif;font-size:14px;font-weight:bold;color:#000;">

<div id="offscreen"style="position:absolute;top:-10000px;left:-10000px;">

</div>












<div class="PAGE"style="position:relative;width:600px;margin-left:auto;margin-right:auto;overflow:hidden;">
  


<div class="P1"style="position:relative;width:100%;background:#C9C9C9;height:141px;">
    <img src="R/qritlogo.png"style="position:absolute;margin:15px;z-index:1;"/>
    <img src="R/scangirl.png"style="position:absolute;right:0px;z-index:0;"/>
</div>
<div class="P2"style="position:relative;width:100%;background:#FFF;">
    <img src="R/hsqrit.png"style="margin:15px;"/>
</div>

<div class="P3"style="position:relative;width:100%;background:#FF9900;margin-top:10px;height:148px;">
    <img src="R/801.png"style="margin:15px;margin-left:60px;float:left;"/>
    <div style="float:left;font-size:96px;font-weight:lighter;margin-top:11px;">{</div>
    <div style="float:left;margin:15px;margin-top:25px;line-height:20px;">
        Scan a room's QR-Location to report any issue<br>
        Photo Upload to create visual descriptions<br>
        Delegate as reports come in real-time<br>
        Manage your workforce with live job lists<br>
        Auto-update clients on completion &amp;/or change<br>
    </div>
</div>



<div class="P4"style="position:relative;width:100%;background:#FFA800;height:190px;">
    
<div class="P4A"style="position:absolute;top:0px;width:100%;background:#FFA800;color:#8C4500;font-size:22px;height:190px;">
    <div style="float:left;margin-left:60px;margin-top:25px;">The best way to see business</div><br>
    <br>
    <img src="R/pres_eye.png"style="margin:15px;width:90px;margin-left:265px;"/><br>
    <div style="float:right;margin-right:60px;">is though your clients eyes</div>
</div>
<div class="P4B"style="position:absolute;top:0px;width:100%;background:url('R/pen.png');color:#8C4500;font-size:20px;height:190px;display:none;">
    <div style="float:left;margin-left:60px;margin-top:25px;"><b style="font-size:30px;">Inventory checks</b><br><br>set auto-trigger to make sure<br>checks are complete before all else</div>
</div>
<div class="P4C"style="position:absolute;top:0px;width:100%;background:url('R/students.png');color:#8C4500;font-size:20px;height:190px;line-height:45px;display:none;">
    <div style="float:left;margin-left:60px;margin-top:25px;">Connect with your clients<br><b style="font-size:24px;">Promote your brand</b><br>Share your news</div>
</div>

</div>





<div class="P5"style="position:relative;width:100%;background:#333333;height:10px;"></div>
<div class="P6"style="position:relative;width:100%;background:#000000;height:190px;color:#FFF;">
    <div style="float:left;font-weight:bold;margin-left:60px;margin-top:10px;">All Enquiries:
        <br>
        <br>
        <textarea style="border:0px;outline:0px;color:#000;width:470px;max-width:470px;padding:5px;height:100px;"></textarea>
    </div>
</div>


   
    
</div>





<script>


var type='fix';
var sub='none';
var timeref;




$(document).ready(function(){


var i='A';
setInterval(function(){
    if(i==='A'){i='B';$('.P4A').hide("fast");$('.P4B').show("fast");}else
    if(i==='B'){i='C';$('.P4B').hide("slide",{direction:'right'});$('.P4C').show("slide",{direction:'right'});}else
    if(i==='C'){i='A';$('.P4C').hide("fast");$('.P4A').show("fast");}
    },4500);


/*
$.getScript("https://engine.up4it-smartcard.com:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://engine.up4it-smartcard.com:8001');
    
    

    
    function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
    

    
    
    });//socket.io
*/
});//ready
</script>









</body></html>