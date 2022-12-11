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
.unsaved1,.unsaved2{color:#FF0000!important;}

</style>







</head><body style="background:#F7F7F7;margin:0px;font-family:sans-serif;font-size:14px;font-weight:bold;color:#3C3C3C;">

<div id="offscreen"style="position:fixed;left:-1000px;">
    <textarea id="ta"></textarea>
</div>



<!--img src="data:image/png;base64,"/-->
<!--canvas></canvas-->


<div class="HEAD"style="position:relative;height:51px;width:100%;background:#FFF;">
    <div class="HEADC"style="position:relative;height:51px;width:600px;margin-left:auto;margin-right:auto;">
    <img src="R/hsdemo.png"style="margin:5px;"/>
    <img src="R/qritlogo.png"style="height:41px;float:right;margin:5px;"/>
    </div> 
</div>






<div class="properties"style="position:relative;width:600px;margin-left:auto;margin-right:auto;margin-top:10px;">
<img id="printall"src="R/print.png"style="margin-left:10px;float:right;display:none;"/>
<div id="save1" style="position:relative;background:#36C42B;width:100px;height:30px;margin-bottom:15px;cursor:pointer;text-align:center;float:left;color:#FFF;"><b style="position:relative;top:7px;">save</b></div>
<div style="position:relative;height:30px;left:15px;margin-bottom:15px;float:left;"><b style="position:relative;top:7px;">Property Setup <b style="color:#B3B3B3;">(Add/Remove properties)</b></b></div>
<table id="itemheader"style="width:100%;border-collapse:collapse;height:34px;">
<tr style="background:#FFF;">
<td><b style="margin:10px;">properties:</b></td>
</tr>
</table>
<style>td{vertical-align:top;padding-top:10px;}</style>
<div id="props"style="width:100%;border-collapse:collapse;margin-top:10px;"></div>
<div id="add"style="width:14px;height:14px;margin-top:10px;cursor:pointer;float:right;background:url(R/add.png);"></div>
</div>






<div class="inventories"style="position:relative;width:600px;margin-left:auto;margin-right:auto;margin-top:10px;display:none;">
<img id="printall"src="R/print.png"style="margin-left:10px;float:right;display:none;"/>

<div id="back" style="position:relative;background:#FF0000;width:30px;height:30px;margin-bottom:15px;cursor:pointer;text-align:center;float:left;color:#FFF;">
<img src="R/back.png"style="cursor:pointer;height:11px;margin-top:10px;"/>
</div>

<div id="save2" style="position:relative;background:#36C42B;width:100px;height:30px;margin-bottom:15px;cursor:pointer;text-align:center;float:left;color:#FFF;"><b style="position:relative;top:7px;">save</b></div>
<div style="position:relative;height:30px;left:15px;margin-bottom:15px;float:left;"><b style="position:relative;top:7px;">Inventory Setup <b style="color:#B3B3B3;">(Add/Remove items)</b></b></div>
<div style="position:relative;height:30px;width:110px;right:0px;margin-top:7px;float:right;font-size:10px;color:#999;">* Begin with an asterix <b style="color:#F7F7F7;margin-right:2px;">_</b>to add a header</div>
<table id="itemheader"style="width:100%;border-collapse:collapse;height:34px;">
<tr style="background:#FFF;">
<td><!--img id="back"src="R/back.png"style="cursor:pointer;height:11px;margin-left:10px;margin-right:10px;"/--><b style="margin:10px;"><b id="property"style="color:#FF9900;"></b> : Items</b></td>
</tr>
</table>
<style>td{vertical-align:top;padding-top:10px;}</style>
<div id="items"style="width:100%;border-collapse:collapse;margin-top:10px;"></div>
</div>











<script>
var c='demo2';


function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
    
var k,kk;
var $textarea;
var property='';
var globalpropertyid;
//var tempchanges={};
//var tempduplicates={};

$(document).ready(function(){







$.getScript("https://serveraddress:8001/socket.io/socket.io.js",function(){
    var socket = io.connect('https://serveraddress:8001');
    
    
    
    
    
    socket.emit('join.inventory',{'c':c});
    
    
    
    
    kk=1;
    
    
    
    
    
    
    socket.on('put_inventory_setup_property',function(_){//was kk not id
        console.log(_.id);
        var pitem=  '<input type="text"id="prop'+_.id+'"class="prop"data="'+_.id+'"style="width:538px;border:none;padding:2px;border-bottom:1px solid #CCC;outline:none;resize:none;background:none;font-weight:bold;float:left;"value="'+hexDecode(_.property)+'"/>'+
                    '<img class="dupl"id="dupl'+_.id+'"src="R/duplicate_.png"style="padding-bottom:3px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                    '<img class="edit"id="edit'+_.id+'"src="R/pencil_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                    '<img class="lock"id="lock'+_.id+'"src="R/lock.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;display:none;"/>'+
                    '<img class="entr"id="entr'+_.id+'"src="R/eye_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                    '<img class="noth"id="noth'+_.id+'"src="R/nothing.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;display:none;"/>';
        $('#props').append(pitem);
        kk=kk + 1;
        $('.dupl').unbind().bind('click',function(){
            property=$('#prop'+$(this).attr('id').replace('dupl','')).val();
            idtocopy=$('#prop'+$(this).attr('id').replace('dupl','')).attr('');
            var pitem=  '<input type="text"id="prop'+kk+'"class="prop unsaved1"data="'+_.id+'"typ="dupl"style="width:559px;border:none;padding:2px;border-bottom:1px solid #CCC;outline:none;background:none;font-weight:bold;float:left;"value="'+property+'"/>'+
                        '<img class="dupl"id="dupl'+kk+'"src="R/duplicate_.png"style="padding-bottom:3px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                        '<img class="edit"id="edit'+kk+'"src="R/pencil_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                        '<img class="lock"id="lock'+kk+'"src="R/lock.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;display:none;"/>'+
                        '<img class="entr"id="entr'+kk+'"src="R/eye_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                        '<img class="noth"id="noth'+kk+'"src="R/nothing.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;display:none;"/>';
            $('#props').append(pitem);
            kk=kk + 1;//k=k + 1;
            newprop();
            }).hover(function(){$(this).attr({'src':'R/duplicate.png'});menter1($(this));},function(){$(this).attr({'src':'R/duplicate_.png'});mleave1($(this));});
        $('#add').unbind().bind('click',function(){
            var pitem=  '<input type="text"id="prop'+kk+'"class="prop unsaved1"data="new"style="width:559px;border:none;padding:2px;border-bottom:1px solid #CCC;outline:none;background:none;font-weight:bold;float:left;"value=""/>'+
                        '<img class="dupl"id="dupl'+kk+'"src="R/duplicate_.png"style="padding-bottom:3px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                        '<img class="edit"id="edit'+kk+'"src="R/pencil_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                        '<img class="lock"id="lock'+kk+'"src="R/lock.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;display:none;"/>'+
                        '<img class="entr"id="entr'+kk+'"src="R/eye_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                        '<img class="noth"id="noth'+kk+'"src="R/nothing.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;display:none;"/>';
            $('#props').append(pitem);
            kk=kk + 1;
            newprop();
            }).hover(function(){$(this).attr({'src':'R/duplicate.png'});menter1($(this));},function(){$(this).attr({'src':'R/duplicate_.png'});mleave1($(this));});
        $('.edit').unbind().bind('click',function(){
            if($('.unsaved1').length===0){
                property=$('#prop'+$(this).attr('id').replace('edit','')).val();
                globalpropertyid=$(this).attr('id').replace('edit','')
                $('.inventories,.properties').toggle();
                socket.emit('lock_inventory_property',{'c':c,'property':globalpropertyid});
                socket.emit('lock_property_name',{'prop':$(this).attr('id').replace('edit','prop'),'val':hexEncode($('#prop'+globalpropertyid).val())});
                getproperty();
                }
            else{
                $('body').scrollTop(0);
                $('#save1').css({backgroundColor:'#FF0000'});
                setTimeout(function(){$('#save1').animate({backgroundColor:'#36C42B'},300);},300);
                }
            }).hover(function(){$(this).attr({'src':'R/pencil.png'});menter1($(this));},function(){$(this).attr({'src':'R/pencil_.png'});mleave1($(this));});
        $('.entr').unbind().bind('click',function(){
            if($('.unsaved1').length===0){
                globalpropertyid=$(this).attr('id').replace('entr','');
                window.location.href='http://example.com/'+c+'-location.php?qr='+globalpropertyid;
                }
            else{
                $('body').scrollTop(0);
                $('#save1').css({backgroundColor:'#FF0000'});
                setTimeout(function(){$('#save1').animate({backgroundColor:'#36C42B'},300);},300);
                }
            }).hover(function(){$(this).attr({'src':'R/eye.png'});menter1($(this));},function(){$(this).attr({'src':'R/eye_.png'});mleave1($(this));});
        socket.on('update_inventory_setup_property',function(_){
            $('#prop'+_.fake).attr({'id':'prop'+_.id,'data':_.id});
            $('#edit'+_.fake).attr({'id':'edit'+_.id});
            $('#dupl'+_.fake).attr({'id':'dupl'+_.id});
            $('#lock'+_.fake).attr({'id':'lock'+_.id});
            });
        socket.on('locked_property_name',function(_){
            $('#'+_.prop).val(hexDecode(_.val)).css({'pointer-events':'none','color':'#999'});
            });
        socket.on('opened_property_name',function(_){
            $('#'+_.prop).css({'pointer-events':'auto','color':'#000'});
            });
        socket.on('deleted_property_name',function(_){
            $('#prop'+_.propid+',#edit'+_.propid+',#dupl'+_.propid+',#lock'+_.propid).remove();
            });
        socket.on('locked_inventory_property',function(_){
            $('#edit'+_.property+',#entr'+_.property).hide();
            $('#lock'+_.property+',#noth'+_.property).show();
            });
        socket.on('opened_inventory_property',function(_){
            $('#edit'+_.property+',#entr'+_.property).show();
            $('#lock'+_.property+',#noth'+_.property).hide();
            });
        socket.emit('find_locks',{'c':c});
        function newprop(){
            $('.prop').unbind().bind('textchange keyup',function(e){
                if(e.keyCode=='13'){
                    var $next=$('.prop').eq($(this).index('.prop') + 1);
                    var mem=$next.val();
                    $next.val('');
                    $next.focus();
                    $next.val(mem);
                    }
                else{
                    socket.emit('lock_property_name',{'prop':$(this).attr('id').replace('edit','prop'),'val':hexEncode($(this).val())});
                    $(this).addClass('unsaved1');//no type
                    save1();
                    }
                }).hover(function(){menter1($(this));},function(){mleave1($(this));});
            }
        newprop();
        function menter1($this){
            $this=$this.attr('id').replace('prop','').replace('dupl','').replace('entr','').replace('edit','').replace('noth','');
            $('#prop'+$this+',#dupl'+$this+',#edit'+$this+',#entr'+$this+',#lock'+$this+',#noth'+$this).css({'border-bottom-color':'#FF9900'});
            return;
            }
        function mleave1(){
            $('.prop,.dupl,.edit,.entr,.lock,.noth').css({'border-bottom-color':'#CCC'});return;
            }
        })
    
    
    
    
    
    
    
    
    
    
    
    function save1(){
        $('#save1').css({'color':'#FFF','background':'#36C42B','cursor':'pointer'}).unbind().bind('click',function(){
            $.each($('.unsaved1'),function(i,unsaved){
                var place=$(unsaved).attr('data');//id to duplicate
                var newproperty=$(unsaved).val();//new property name
                if($(unsaved).attr('typ')==='dupl'){$(unsaved).attr({'typ':''});socket.emit('duplicate_inventory_property',{'c':c,'id':place,'fake':$(unsaved).attr('id').replace('prop',''),'newproperty':hexEncode(newproperty)});}
                else{socket.emit('save_inventory_property',{'c':c,'id':place,'fake':$(unsaved).attr('id').replace('prop',''),'newproperty':hexEncode(newproperty)});}
                if($(unsaved).val()===''){
                    var delk=$(unsaved).attr('id').replace('prop','');
                    $('#prop'+delk+',#edit'+delk+',#dupl'+delk).remove();
                    }
                $(unsaved).removeClass('unsaved1');
                });
            $(this).unbind().css({'color':'#999','background':'#CCC','cursor':'auto'});
            });
        }
    $('#save1').css({'color':'#999','background':'#CCC','cursor':'auto'});
    
    
    
    
    
    
    
    function getproperty(){
        $('#property').text(property);
        socket.emit('get_inventory_setup_items',{'c':c,'property':hexEncode(property)});
        k=1;
        }
    
    
    
    
    
    
    
    socket.on('put_inventory_setup_item',function(_){
        var item=   '<input type="text"class="itemv"id="k'+k+'"style="width:559px;border:none;padding:2px;border-bottom:1px solid #CCC;outline:none;background:none;font-weight:bold;"value="'+hexDecode(_.k)+'"/>'+
                    '<img class="swap"id="swap'+k+'"src="R/swap_.png"style="padding-bottom:3px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                    '<img class="targ"id="targ'+k+'"src="R/targ_.png"style="padding-bottom:3px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;display:none;"/>'+
                    '<img class="mkspace"id="mkspace'+k+'"src="R/mkspace_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;"/>'+
                    '<img class="unspace"id="unspace'+k+'"src="R/unspace_.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;cursor:pointer;display:none;"/>'+
                    '<img class="nothing"id="nothing'+k+'"src="R/nothing.png"style="padding-bottom:3px;padding-right:5px;border-bottom:1px solid #CCC;float:right;height:16px;display:none;"/>';
        $('#items').append(item);
        k=k + 1;
        if(k===100){setTimeout(function(){_done_inventory_setup_items();},500);}
        });
    function _done_inventory_setup_items(){
        $('#save2').css({'color':'#999','background':'#CCC','cursor':'auto'});
        $('.itemv').unbind().bind('textchange keyup',function(e){
            if($item1){$item1.removeClass('unsaved2');}
            $('.swap').show();$('.targ').hide();
            if(e.keyCode=='13'){
                var $next=$('.itemv').eq($(this).index('.itemv') + 1);
                var mem=$next.val();
                $next.val('');
                $next.focus();
                $next.val(mem);
                }
            else{
                $('#back').css({'background':'#FF0000'});
                $(this).addClass('unsaved2');
                spaces();
                save2();
                }
        }).hover(function(){menter2($(this));},function(){mleave2($(this));});
    var ta;
    var ismousedown=0;
    var mdown1,mdown2;
    var mmove;
    var mup;
    var cpyd='';
    var mtime;
    var $item1;
    $('.itemv').bind('contextmenu',function(){
        return false;
        });
    $('.itemv').bind('keydown',function(e){
        ta=$(this).index('.itemv') + 3;
        var ctrl = e.ctrlKey||e.metaKey;
        if(ctrl && e.keyCode == 86){
            if(cpyd===''){
                $('#ta').val('').focus();
                }
            else{
                $('#ta').val(cpyd).focus();
                return false;
                }
            }});
    $('#ta').keyup(function(){
        var taval=$('#ta').val().split(/\^|\r\n|\r|\n/g);
        for(var i=0;i <= taval.length;i++){
            $('input:gt('+ta+')').filter(function(){return $(this).val()==""}).first().val(taval[i]).addClass('unsaved2').focus();
            }});
    $('body').mousemove(function(e){
        $('#ta').css({'top':e.pageY});
        });
    $('.itemv').bind('mousedown',function(){
        mdown2='';
        mdown1=$(this).index('.itemv');
        $('.itemv').bind('mousemove',function(){
            cpyd='';
            if(mdown2===''){mdown2=mdown1;}
            $('.itemv').css({'background':'none'});
            mmove=$(this).index('.itemv');
            for(m=mdown2;m<=mmove;m++){
                var $m=$('.itemv').eq(m);
                $m.css({'background':'#FF9900'});
                cpyd=cpyd+$m.val()+'^';
                }
            cpyd=cpyd+'^';cpyd=cpyd.replace('^^','');
            });
    });
    $('body').bind('mouseup',function(){
        mdown2='';
        $('.itemv').unbind('mousemove');
        $('.itemv').css({'background':'none'});
        });
        $('.swap').unbind().bind('click',function(){
            $item1=$('#'+$(this).attr('id').replace('swap','k'));
            $item1.addClass('unsaved2');
            var mem=$item1.val();
            $('.targ,.swap').toggle();
            $('.targ').unbind().bind('click',function(){
                var $item2=$('#'+$(this).attr('id').replace('targ','k'));
                $item1.val($item2.val());
                $item2.addClass('unsaved2').val(mem);
                $('.targ,.swap').toggle();
                if($item1.attr('id')===$item2.attr('id')){$item1.removeClass('unsaved2');$item2.removeClass('unsaved2');}
                else{save2();}
                }).hover(function(){$(this).attr({'src':'R/targ.png'});menter2($(this));},function(){$(this).attr({'src':'R/targ_.png'});mleave2($(this));});
            }).hover(function(){$(this).attr({'src':'R/swap.png'});menter2($(this));},function(){$(this).attr({'src':'R/swap_.png'});mleave2($(this));});
        $('.mkspace').unbind().bind('click',function(){
            var kid=parseInt($(this).attr('id').replace('mkspace',''));
            for(var kn=99;kn >= kid;kn--){
                if( $('#k'+kn).val()!=='' && $('#k'+( kn + 1 )).val()==='' ){
                    $('#k'+( kn + 1 )).addClass('unsaved2').val($('#k'+kn).val());
                    $('#k'+kn).val('');
                    spaces();
                    }}
            unspace();
            save2();
            }).hover(function(){$(this).attr({'src':'R/mkspace.png'});menter2($(this));},function(){$(this).attr({'src':'R/mkspace_.png'});mleave2($(this));});
        function spaces(){
            var top='';
            var row='';
            var bot='';
            var last='';
            $('#items .itemv').each(function(i,e){
                if(top===''){top=$(this);}
                else if(row===''){row=$(this);}
                else if(bot===''){bot=$(this);}
                else{
                    top=row;
                    row=bot;
                    bot=$(this);
                    var s=parseInt($(this).attr('id').replace('k','')) - 1;
                    if(top.val()!=='' && row.val()==='' && bot.val()!==''){$('#mkspace'+(s)).hide();$('#unspace'+(s)).show();$('#nothing'+(s)).hide();}else
                    if(top.val()==='' && row.val()!=='' && bot.val()===''){$('#mkspace'+(s)).show();$('#unspace'+(s)).hide();$('#nothing'+(s)).hide();}else
                    if(top.val()==='' && row.val()==='' && bot.val()===''){$('#mkspace'+(s)).hide();$('#unspace'+(s)).hide();$('#nothing'+(s)).show();}else
                    if(top.val()==='' && row.val()==='' && bot.val()!==''){$('#mkspace'+(s)).hide();$('#unspace'+(s)).show();$('#nothing'+(s)).hide();}else
                    if(top.val()==='' && row.val()!=='' && bot.val()!==''){$('#mkspace'+(s)).show();$('#unspace'+(s)).hide();$('#nothing'+(s)).hide();}else
                    if(top.val()!=='' && row.val()!=='' && bot.val()!==''){$('#mkspace'+(s)).show();$('#unspace'+(s)).hide();$('#nothing'+(s)).hide();}else
                    if(top.val()!=='' && row.val()!=='' && bot.val()===''){$('#mkspace'+(s)).show();$('#unspace'+(s)).hide();$('#nothing'+(s)).hide();}else
                    if(top.val()!=='' && row.val()==='' && bot.val()===''){$('#mkspace'+(s)).hide();$('#unspace'+(s)).show();$('#nothing'+(s)).hide();
                    last=row.attr('id').replace('k','');
                    }else{}
                    }
                });
            $('#mkspace'+(last)).hide();$('#unspace'+(last)).hide();$('#nothing'+(last)).show();
            $('#nothing100,#nothing99').show();
            $('#mkspace100,#mkspace99').hide();
            return;
            }
        spaces();
        function unspace(){
            $('.unspace').unbind().bind('click',function(){
                var kid=parseInt($(this).attr('id').replace('unspace',''));
                for(var kn=kid;kn <= 100;kn++){
                    if( $('#k'+kn).val()!=='' && $('#k'+( kn - 1 )).val()==='' ){
                        $('#k'+( kn - 1 )).addClass('unsaved2').val($('#k'+kn).val());
                        $('#k'+kn).val('');
                        spaces();
                        }}
                save2();
            }).hover(function(){$(this).attr({'src':'R/unspace.png'});menter2($(this));},function(){$(this).attr({'src':'R/unspace_.png'});mleave2($(this));});
            return;
            }
        unspace();
        function menter2($this){
            $this=$this.attr('id').replace('swap','').replace('targ','').replace('mkspace','').replace('unspace','').replace('nothing','').replace('k','');
            $('#k'+$this+',#swap'+$this+',#targ'+$this+',#mkspace'+$this+',#unspace'+$this+',#nothing'+$this).css({'border-bottom-color':'#FF9900'});
            return;
            }
        function mleave2(){
            $('.itemv,.swap,.targ,.mkspace,.unspace,.nothing').css({'border-bottom-color':'#CCC'});return;
            }
        function save2(){
            $('#save2').css({'color':'#FFF','background':'#36C42B','cursor':'pointer'}).unbind().bind('click',function(){
                $('#back').css({'background':'#FF9900'});
                $('#items .itemv').each(function(){
                    var $next=parseInt($(this).attr('id').replace('k','')) + 1;
                    $next=$('#k'+$next);
                    if($(this).val()===''&&$next.val()!==''){$('#items .itemv').filter(function(){return this.value=='';}).first().val($next.val());$next.val('');}
                    });
                $($('#items .itemv')).each(function(){
                    if($(this).val()!==undefined){socket.emit('save_inventory_item',{'c':c,'property':hexEncode(property),'k':$(this).attr('id'),'v':hexEncode($(this).val())});}
                    });
                $('#save2').unbind().css({'color':'#999','background':'#CCC','cursor':'auto'});
                $('#items .itemv').removeClass('unsaved2');
                spaces();
                });}
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $('#back').click(function(){
        $('.inventories,.properties').toggle();
        $('#items').html('');
        socket.emit('open_inventory_property',{'c':c,'property':globalpropertyid});
        globalpropertyid='';
        });
    
    
    
    
    
    /*
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
    
    
    
    
    */
    });//socket.io

});//ready
</script>









</body></html>