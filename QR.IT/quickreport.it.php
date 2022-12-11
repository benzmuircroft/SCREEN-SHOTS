<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>QR.IT</title>
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







</head><body style="background:#FFCC00;margin:0px;font-family:sans-serif;font-size:14px;font-weight:bold;color:#000;">

<div id="offscreen" style="position:absolute;top:-10000px;left:-10000px;">

</div>












<div class="MAIN" style="position:relative;width:600px;margin-left:auto;margin-right:auto;overflow:hidden;">
  


<div class="P1" style="position:relative;width:100%;background:#C9C9C9;height:141px;">
    <img src="R/qritlogo.png" style="position:absolute;margin:15px;z-index:1;" alt="our logo"/>
    <img src="R/scangirl.png" style="position:absolute;right:0px;z-index:0;" alt="a girl scanning a qrcode"/>
</div>
<div class="P2" style="position:relative;width:100%;background:#FFF;">
    <img src="R/hsqrit.png" style="margin:15px;" alt="hosting studio logo"/>
</div>

<!--div style="width:600px;height:490px;margin-top:10px;">
	<iframe src="http://www.indiegogo.com/project/588565/widget/5396775" width="224" height="486" style="float:left;overflow:hidden;border:none;"></iframe>
	<img src="R/igg_poster.jpg" style="width:370px;margin-left:6px;" alt="indegogo poster"/>
	<img src="R/igg_qr.png" style="width:370px;margin-left:6px;" alt="indegogo qrcode demo"/>
</div-->

<div class="P3" style="position:relative;width:100%;background:#FF9900;margin-top:10px;height:148px;">
    <img src="R/Room1.jpg" style="margin:15px;margin-top:20px;margin-left:60px;float:left;" alt="qrcode htoel demo"/>
    <div style="float:left;font-size:96px;font-weight:lighter;margin-top:11px;">{</div>
    <div style="float:left;margin:15px;margin-top:25px;line-height:20px;">
        Scan a room's QR-Location to report any issue<br>
        Photo Upload to create visual descriptions<br>
        Delegate as reports come in real-time<br>
        Manage your workforce with live job lists<br>
        Auto-update clients on completion &amp;/or change<br>
    </div>
</div>



<div class="P4" style="position:relative;width:100%;background:#FFA800;height:190px;">
    
<div class="P4A" style="position:absolute;top:0px;width:100%;background:#FFA800;color:#8C4500;font-size:22px;height:190px;">
    <div style="float:left;margin-left:60px;margin-top:25px;">The best way to see business</div><br>
    <br>
    <img src="R/pres_eye.png" style="margin:15px;width:90px;margin-left:265px;" alt="an eye for business"/><br>
    <div style="float:right;margin-right:60px;">is though your clients eyes</div>
</div>
<div class="P4B" style="position:absolute;top:0px;width:100%;background:url('R/pen.png');color:#8C4500;font-size:20px;height:190px;display:none;">
    <div style="float:left;margin-left:60px;margin-top:25px;"><b style="font-size:30px;">Inventory checks</b><br><br>Fast, effective &amp; paperless.<br><b style="font-size:17px;">Save hassle, save time, save money!</b></div>
</div>
<div class="P4C" style="position:absolute;top:0px;width:100%;background:url('R/students.png');color:#8C4500;font-size:20px;height:190px;line-height:45px;display:none;">
    <div style="float:left;margin-left:60px;margin-top:25px;">Connect with your clients<br><b style="font-size:24px;">Promote your brand</b><br>Share your news</div>
</div>

</div>





<div class="P5" style="position:relative;width:100%;background:#333333;height:10px;"></div>
<div class="P6" style="position:relative;width:100%;background:#000000;height:225px;color:#FFF;">
    <div style="float:left;font-weight:bold;margin-left:60px;margin-top:10px;">All Enquiries:
        <br>
        <br>
        <textarea id="email" style="border:0px;border-bottom:1px solid #CCC;outline:0px;color:#000;width:470px;max-width:470px;padding:5px;height:15px;resize:none;"></textarea>
        <textarea id="message" style="border:0px;outline:0px;color:#000;width:470px;max-width:470px;padding:5px;height:85px;"></textarea>
        <div id="send" style="background:#333333;color:#FFF;text-align:center;cursor:pointer;width:470px;height:15px;padding:5px;">SEND</div>
    </div>
</div>


<!--div class="P7"style="position:relative;width:100%;background:#CC6600;height:500px;">
    <div style="float:left;margin-left:60px;margin-top:25px;font-size:20px;"><img src="R/accomodation.png"style="margin-right:10px;"/>Accommodation Demo</div>
    <div style="float:left;margin-left:60px;margin-top:25px;width:480px;">
        Below is an example of the team admin panel for the upkeep of accommodation where typically there are many residents reporting issues from different apartments. 
        On finding an issue a resident can scan the room's QR-Location with a mobile device taking them to the quickreport.app to report the issue. Once their report has
        been sent - the team admin panel will show the issues without needing to refresh the page, from this point on you will be able to work with any online team members 
        to fix the issue (by clicking on the issues edit button) as all actions are transmitted as live updates to each team members mobile device. 
        <i style="color:#FFF;">
            * Logo and colours for this demo reflect Hosting Studio.
            All issues reported using this demo will be deleted automatically after 5 minutes. 
            For demonstration purposes issues referring to all rooms in flat 777 only alter/delete temporarily.
        </i>
    </div>
    <div style="float:left;margin-left:60px;margin-top:25px;font-size:20px;">Example Rooms:</div>
    <div style="float:left;margin-left:60px;margin-top:25px;width:480px;">
        <img src="R/123A.png"style="margin-right:94px;float:left;"/>
        <img src="R/801E.png"style="margin-right:94px;float:left;"/>
        <img src="R/202K.png"style="margin-right:0px;float:left;"/>
    </div>
    
</div>
<div class="P8"style="background:#F7F7F7;"><?php include 'demo1-admin.php'; ?></div-->


   
    
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



$('#email').focus(function(){
        if($(this).val()==='Your email'){$(this).val('').css({'color':'#000'});}
        }).focusout(function(){
        if($(this).val()===''){$(this).val('Your email').css({'color':'#999'});}
        }).val('Your email').css({'color':'#999'});

$('#message').focus(function(){
        if($(this).val()==='Question...'){$(this).val('').css({'color':'#000'});}
        }).focusout(function(){
        if($(this).val()===''){$(this).val('Question...').css({'color':'#999'});}
        }).val('Question...').css({'color':'#999'});


$.getScript("https://engine.up4it-smartcard.com:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://engine.up4it-smartcard.com:8001');
    
    

    
    function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
    
    $('#send').click(function(){
        if($('#email').val()!==''&&$('#email').val()!=='Your email'&&$('#message').val()!==''&&$('#message').val()!=='Question...'){
            socket.emit('send.enquiry',{'e':hexEncode($('#email').val()),'m':hexEncode($('#message').val())});
            }
            socket.on('enquiry.err',function(){});
            socket.on('enquiry.sent',function(){
                $('#send').text('Thank You');
                setTimeout(function(){
                    $('#send').text('SEND');
                    $('#email').val('Your email').css({'color':'#999'});
                    $('#message').val('Question...').css({'color':'#999'});
                    },7000);
                });
        });
    
    
    
    });//socket.io

});//ready
</script>









</body></html>