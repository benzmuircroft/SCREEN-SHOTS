<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="https://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>QR - Admin</title>
<link rel="shortcut icon" href="R/favicon.ico" />
<script type="text/javascript" src="_S/jquery.js"></script>
<script type="text/javascript" src="_S/jquery-ui.js"></script>
<script type="text/javascript" src="_S/easing.js"></script>
<script type="text/javascript" src="_S/textchange.js"></script>
<script type="text/javascript" src="_S/jquery.html5storage.min.js"></script>
<!--script type="text/javascript" src='S/prototype.js'></script-->
<script type="text/javascript" src="_S/tinysort.js"></script>
<script type="text/javascript" src="_S/scrollto.js"></script>
<script type="text/javascript" src="_S/autogrowtextarea.js"></script>
<script type="text/javascript" src="_S/exif.js"></script>
<script type="text/javascript" src="_S/binaryajax.js"></script>
<script type="text/javascript" src="_S/rotate.js"></script>
<script type="text/javascript" src="_S/html2canvas.js"></script>
<script type="text/javascript" src="_S/Object.observe.poly.js"></script>


<script src="_S/iphone/megapix-image.js"></script>


<!--script type="text/javascript" src="S/kinetic.js"></script-->
<script type="text/javascript" src="_S/delivery.js"></script>


<script type="text/javascript" src="_S/png.js"></script>
<script type="text/javascript" src="_S/zlib.js"></script>




<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">



<style>
@font-face {
    font-family: gisha; 
	src: url('R/phuket/Gisha.otf')format("opentype"),url('R/phuket/Gisha.ttf');
}
.grayscale {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+, Firefox on Android */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(100%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
    /*opacity*/
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
    pointer-events:none!important;
}
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
.tock{color:#FFF;}

*{-webkit-touch-callout:none;-webkit-user-select: none;/*prevent save image as menu*/}
#sub_feedback,#pass,#newpassword{-webkit-touch-callout:auto;-webkit-user-select:auto;/*overide*/}



.woke,.drive{text-decoration:line-through;color:#31AAFF!important;}

</style>







</head><body style="background:#000;margin:0px;font-family:sans-serif;font-size:14px;font-weight:bold;color:#FFF;">

<div id="offscreen"style="position:absolute;top:-10000px;left:-10000px;">
<input id="img1"type="file"accept="image/*;capture=camera"multiple="false">
<input id="img2"type="file"accept="image/png, image/gif, image/jpeg"multiple="false">
<img id="realimg1"exif="true"/>
<img id="realimg2"exif="true"/>
<canvas id="canvas"></canvas>
<canvas id="canvas2"></canvas>
</div>





<div class="main"style="z-index:9;position:relative;height:320px;width:480px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:#000;color:#999;font-family:'gisha';text-align:left;display:none;">
	<div style="margin-top:10px;">
		<div style="margin-left:4px;color:#FFFC00;float:left;"id="title2">Phuket - hotel</div>
		<div style="float:right;margin-right:4px;">example.com </div>
	</div>
	<br>
	<a style="color:#FFF;float:right;font-size:10px;margin-right: 4px;" href="http://example.com/R/phuket/legal/terms.txt" target="_blank">Terms Of Service</a>
	<div style="position:absolute;left:0px;top:40px;font-size:11px;color:#FFF;">
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:21px;font-size:15px;"><!--X--><img src="R/phuket/checkout.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:21px;font-size:15px;"><!--ห้อง--><img src="R/phuket/key.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:47px;"><!--ตื่นนอน--><img src="R/phuket/wakeup.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:40px;"><!--มินิบาร์--><img src="R/phuket/minibar.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:40px;"><!--สะอาด--><img src="R/phuket/clean.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:40px;"><!--ซักรีด--><img src="R/phuket/laundry.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:47px;"><!--รถแท็กซี่--><img src="R/phuket/taxi.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:36px;"><!--อธิบาย--><img src="R/phuket/comment.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:47px;"><!--เวลา--><img src="R/phuket/sent.png"style="width:18px;"/></div>
		<div style="float:left;background:#201F1F;padding:4px;margin-right:2px;width:41px;"><!--แก้ไข--><img src="R/phuket/edit.png"style="width:18px;"/></div>
	</div>
	<div style="position:relative;left:0px;top:10px;font-size:11px;color:#FFF;margin-top:66px;"id="pannel"></div>
	<div style="position:relative;margin-left:auto;margin-right:auto;top:30px;font-size:11px;color:#FFF;width:480px;"id="adminposter"></div>
</div>




<div class="lock"style="z-index:9;position:relative;height:320px;width:480px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:#000;color:#FFF;font-family:'gisha';display:none;">
	<div id="title"style="position:absolute;top:20px;left:115px;width:250px;height:28px;text-direction:left;line-height:28px;"></div>
	<div id="water"style="position:absolute;top:160px;left:115px;width:250px;height:28px;background:#FFFC00;color:#000;text-direction:center;line-height:28px;pointer-events:none;">enter password</div>
	<div id="pass"style="position:absolute;top:160px;left:115px;width:250px;height:28px;color:#000;text-direction:center;line-height:28px;text-transform:lowercase;"contenteditable="true">	</div>
</div>



<div class="splash"style="z-index:9;position:relative;height:320px;width:480px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:#000;color:#FFF;font-family:'gisha';">
		<img src="/R/phuket/logo.png"style="margin-left:auto;margin-right:auto;margin-top:83px;">
</div>




<script>

    
    

var qr=document.location.href.split('?');
qr=qr[1].split('&');
var c=qr[1];//company
qr=qr[0];//0
var nickname='admin'+qr+'_'+c;
	
	console.log(navigator.userAgent);

var s={}, S={}, data={'nickname':nickname};$.getScript('c.REWIRE.js',function(){connect('severaddress',[1],[8007],data,'C.qrit_a_.js');});





</script>









</body></html>