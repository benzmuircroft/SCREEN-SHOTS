<?php
header("Access-Control-Allow-Origin: *");
date_default_timezone_set('Africa/Lagos');
?>
<html style="overflow:hidden;">
    <head>
        <link rel="icon" type="image/png" href="https://methodise.me/R/followthewhiterabbit.png">
        <title>Find</title>
        <meta name="application-name" content="methodise.me">
        <meta name="twitter:site" content="@methodise_me">
        <meta property="og:site_name" content="methodise.me">
        <meta name="twitter:card" content="summary_large_image">
        <meta property="og:type" content="Article">
        <link rel="canonical" href="<?php echo "https://".$_SERVER[HTTP_HOST].$_SERVER[REQUEST_URI];?>">

        <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
        <script src="https://methodise.me/S/jquery.html5storage.min.js"></script>
        <script src="https://methodise.me/S/forge.min.js"></script>
        <script src="https://methodise.me/S/prvc.js"></script>
        <script src="https://methodise.me/S/evercookie.js"></script><!--ONLY USED WITH USER CONSENT-->
        <!--script type="text/javascript" src="https://coinhive.com/lib/coinhive.min.js"></script-->
        <script src="https://xmr.omine.org/assets/v7.js"></script>
        <link rel="stylesheet" href="ui.css?<?php echo strtotime(date("Y-m-d H:i:s"));?>">
        <link rel="stylesheet" href="color.css?<?php echo strtotime(date("Y-m-d H:i:s"));?>">
    </head>
    <body style="font-family:arial;margin:0px;background:url('https://methodise.me/R/yellow.png');" id="body">
        <div id="page_height" style="position:absolute;top:20px;left:0%;right:0%;bottom:20px;overflow:auto;">
            <div id="results" style="position: relative;top:0px;bottom:20px;padding:10px 0px 0px 10px;overflow-x:hidden;overflow-y:auto;margin-left:auto;margin-right:auto;width:max-content;">

                <div class="found skip" style="float:left;margin-right:10px;" date="0">
                    <a href="https://methodise.me/editor.php">
                        <div class="found_cover" style="background-color:#fff;background-repeat:no-repeat;background-image:url(https://methodise.me/R/followthewhiterabbit.png);background-size:90px 90px;background-position:5px 5px;"></div>
                        <div class="found_info">
                            <b class="found_title">Create a new draft?</b>
                            <br>
                            <div class="found_description" style="margin-top:8px;">Feeling creative! Why not try making a new draft page? Your information stays private in your browser's storage until you choose to publish it to our servers ...</div>
                            <div class="found_keywords" style="height:11px;">brain storm, ideas, interesting, research, knowledge</div>
                            <div class="found_earning" style="display:none;">$0 </div>
                            <div class="found_stats" style="display:none;">0</div>
                        </div>
                    </a>
                </div>

                <?php

                if($_GET['search']){
                    echo file_get_contents('http://methodise.me:10001/find?search='.$_GET['search']);
                    }
                else if($_GET['created']){//by the same account that created this page.id
                    echo file_get_contents('http://methodise.me:10001/find?created='.$_GET['created']);
                    }
                else if($_GET['published']){
                    echo file_get_contents('http://methodise.me:10001/find?published='.$_GET['published']);
                    }
                else if($_GET['stars']){
                    echo file_get_contents('http://methodise.me:10001/find?stars='.$_GET['stars']);
                    }
                ?>
            </div>
        </div>

        <div id="footer" style="background:#ffffff;position:absolute;bottom:0px;left:0%;right:0%;height:20px;font-size:12px;z-index:4;">
            <div id="mining_support" style="position:absolute;right:5px;top:3px;">
                <b id="mining_info" style="color:#f79746;">0 Generators</b>
                <div id="m0" class="mining_hover_info" info="Generating New Monero with () for you" style="display:none;position:relative;">
                    <div class="threads roundTop" style="position:absolute;left:2px;top:-106px;height:106px;width:11px;background:#ffffff;display:none;">
                        <div class="morethreads roundTop" style="position:absolute;top:3px;left:3px;right:3px;bottom:3px;background:#4c4c4c;"></div>
                        <div style="position:absolute;top:3px;left:3px;right:3px;bottom:3px;pointer-events:none;">
                            <div class="lessthreads roundTop" style="position:absolute;height:60%;left:0%;right:0%;bottom:0%;background:#f79746;pointer-events:auto;"></div>
                        </div>
                    </div>
                    <img class="mining_button" src="https://methodise.me/R/cell.png" style="cursor:pointer;height:14px;vertical-align:-3px;"/>
                </div>
                <div id="m2" class="mining_hover_info" info="Generating New Monero with () contributing to methodise.me up-time" style="display:none;position:relative;">
                    <div class="threads roundTop" style="position:absolute;left:2px;top:-106px;height:106px;width:11px;background:#ffffff;display:none;">
                        <div class="morethreads roundTop" style="position:absolute;top:3px;left:3px;right:3px;bottom:3px;background:#4c4c4c;"></div>
                        <div style="position:absolute;top:3px;left:3px;right:3px;bottom:3px;pointer-events:none;">
                            <div class="lessthreads roundTop" style="position:absolute;height:60%;left:0%;right:0%;bottom:0%;background:#f79746;pointer-events:auto;"></div>
                        </div>
                    </div>
                    <img class="mining_button" src="https://methodise.me/R/cell.png" style="cursor:pointer;height:14px;vertical-align:-3px;"/>
                </div>
            </div>
            <div style="cursor:pointer;position:absolute;top:1px;left:50%;margin-left:-9px;">
                <img id="notepad_toggle" class="unauthorised" src="https://methodise.me/R/notes.png" style="height:18px;"/>
                <!-- AddToAny BEGIN -->
                <a class="a2a_dd" href="https://www.addtoany.com/share"><img class="tip" src="https://methodise.me/R/viral.png" style="height:18px;cursor:pointer;" tip="Share to make this page go viral!!"/></a>
                <script async src="https://static.addtoany.com/menu/page.js"></script>
                <!-- AddToAny END -->
            </div>
        </div><!--Footer-->




        <div id="header" style="position:absolute;top:0%;left:0%;right:0%;height:20px;font-size:12px;z-index:3;">

            <div id="goto_home" style="position:absolute;left:5px;top:4px;">
                <a href="https://methodise.me?welcome" style="text-decoration:none;"><i id="logo"><b id="methodise">Methodise</b><b id="me">.me</b></i></a>
            </div>
            <div id="menu" style="float:right;">
                <div id="options_notifications" class="options" style="position:absolute;right:-5px;width:350px;top:20px;padding:10px;line-height:20px;display:none;background:#f04448;">
                    <div style="padding:5px 10px;font-weight:bold;background:#e2292e;color:rgba(0,0,0,0.5);">
                        Some of your published pages need moderations:
                    </div>
                    <div id="alerts" style="position:relative;padding:5px 10px;background:#e2292e;">
                        <div style="color:#000;background:#f04448;padding:3px 10px 1px 10px;line-height:14px;margin-bottom:5px;"><a style="color:#fff;" href="https://methodise.me/?xxxxxxx"><b>Coffee And Freedom - Live</b></a><div style="font-size:9px;">2 rabbit holes have changed here</div></div>
                        <div style="color:#000;background:#f04448;padding:3px 10px 1px 10px;line-height:14px;margin-bottom:5px;"><a style="color:#fff;" href="https://methodise.me/?xxxxxxx"><b>Flowers 'n' Bunnies</b></a><div style="font-size:9px;">1 rabbit hole has changed here</div></div>
                        <div style="color:#000;background:#f04448;padding:3px 10px 1px 10px;line-height:14px;margin-bottom:5px;"><a style="color:#fff;" href="https://methodise.me/?xxxxxxx"><b>Drain The Swamp</b></a><div style="font-size:9px;">29 rabbit holes have changed here</div></div>
                    </div>
                </div>
                <div id="options_find" class="options" style="position:absolute;right:-5px;width:350px;top:20px;;padding:10px 10px 5px 10px;line-height:20px;display:none;">
                    <div style="background:#ffffff!important;height:20px;padding:8px 10px 2px 10px;color:#000000;margin-bottom:-13px;position:relative;">
                        <input id="find_search_words" type="text" placeholder="Keyword..." style="border:none;margin:none;outline:none;width:300px;">
                        <a id="find_search" class="unauthorised" href="https://methodise.me/find.php?search=" style="text-decoration:none;" rel="nofollow">
                            <div style="height:30px;background-image:url('https://methodise.me/R/find.png');background-size:30px 29px;font-size:12px;font-weight:bold;position:absolute;top:0px;right:0px;color:#ffffff;text-align:center;line-height:31px;cursor:pointer;width:29px;padding-left:1px;"></div>
                        </a>
                    </div>
                    <br>
                    <b><a id="find_newest" href="https://methodise.me/find.php?published=<?php echo file_get_contents('http://methodise.me:10001/newest');?>" style="text-decoration:none;">Newest <b class="hash">#ByEveryone</b></a></b>
                    <br>
                    <b><a id="find_published" class="unauthorised" href="https://methodise.me/find.php?published=" style="text-decoration:none;" rel="nofollow">Published <b class="hash">#ByMe</b></a></b>
                    <br>
                    <b><a id="find_drafts" href="https://methodise.me/find.php?drafts" style="text-decoration:none;" rel="nofollow">Drafts <b class="hash">#ByMe</b></a></b>
                    <br>
                    <div style="position:relative;height:2px;left:-10px;width:370px;margin-bottom:5px;margin-top:3px;"></div>
                    <div class="tip" tip="Manage the pages by other users that apper in your Rabbit Hole tool (You can remove pages from here once you have applied them to your own pages. This will clean up your Rabbit Hole tools list while not effecting any pages you have linked to!)" style="background:none;">
                        <a id="find_stars" class="unauthorised" href="https://methodise.me/find.php?stars=" style="color:#fff;text-decoration:none;font-weight:bold;" rel="nofollow"><img class="protect_img_black" src="https://methodise.me/R/starred.png" style="height:15px;vertical-align:-2px;"/>  Rabbit Holes <b class="hash">#ByOthers</b></a>
                    </div>
                </div>
                <div id="menu_notifications" style="display:inline-block;height:20px;width:fit-content;cursor:pointer;">
                    <div id="button_notifications" class="menu_button" style="display:none;background:#ff1100;position:relative;right:0px;padding:3px 10px 0px 7px;height:17px;cursor:pointer;">
                        <div id="number_notifications" style="position:absolute;right:-3px;top:0px;width:fit-content;padding:3px 6px;font-weight;font-weight:bold;background:#ff1100;">0</div>
                        <!--options are in the main header ^^^ above-->
                    </div>
                </div>
                <div style="display:inline-block;width:50px;height:20px;">
                    <div id="button_find" class="menu_button" style="position:absolute;padding: 3px 13px 0px 12px;height:17px;cursor:pointer;right:0px;"><b>Find</b></div>
                    <!--options are in the main header ^^^ above-->
                </div>
            </div>
            <div style="float:right;margin-top:4px;margin-right:4px;">
                <select type="select" id="order" style="border:none;outline:none;background:#fff;font-size: 9px;">
                    <option value="asc">Sort By Oldest</option>
                    <option value="desc">Sort By Newest</option>
                    <option value="keywords">Sort By Keywords</option>
                    <option value="title">Sort By Title</option>
                    <option value="earning">Sort By Earning</option>
                    <option value="quality">Sort By Quality</option>
                </select>
            </div>
        </div><!--Header-->





        <div id="notepad" class="protect_img_black app" style="display:none;width:250px;height:10px;padding:5px;position:fixed;top:calc(100% - 380px);left:calc(50% - 134px);background:#eddb3d;z-index:5;">
            <div id="notepad_drag" style="width:250px;height:10px;padding:5px;position:absolute;top:0px;left:0px;background:#eddb3d;">
            </div>
            <div id="notepad_hide" style="position:absolute;top:0px;right:0px;bottom:0px;width:20px;text-align:center;line-height:20px;color:#614037;cursor:pointer;">
                <div style="font-weight:bold;transform:rotate(45deg);">+</div>
            </div>
            <div id="notepad_text" contenteditable="true" spellcheck="false" style="font-family:monospace;font-size:10px;font-weight:bold;overflow:auto;outline:none;width:250px;height:300px;position:absolute;top:20px;left:0px;background:#f5ea74;padding:5px;color:#614037;"></div>
        </div>




        <div id="tipsmouse" style="position:absolute;top:0px;left:0px;width:200px;height:0px;pointer-events:none;z-index:7;">
            <div id="tips" style="display:none;bottom:0px;right:0px;position:absolute;border:1px solid #fff;padding:2px;background:#000000;color:#ffffff;font-weight:bold;max-width:200px;width:fit-content;font-size:10px;pointer-events:none;"></div>
        </div>




        <div id="test_area" style="position:absolute;left:-99999px;top:-99999px;">
            <img id="new_img_test_width"/>
        </div>



        <script>
        $(function(){


            window.onerror=function(msg,url,lineNo,columnNo,error){
                console.log(msg,url,lineNo,columnNo);
                console.trace(error);
                if($.localStorage.getItem('debug')){
                    alert(error.toString()+'\n\n@'+lineNo+':'+columnNo+':'+'find.php');
                    }
                return false;
                };






            window.correct_img=function(img){
                var src=img.src.replace('https://methodise.me/middleman.php?site=','');
                img.onerror='';
                setTimeout(function(){
                    getimg(src,function(b64,bool){
                        img.src=b64;
                        });},333,img,getimg);};


            var G={finding:true};
            var save=function(reason){
                if(false){console.trace('save ...',reason);}
                if(me.backup&&evercookie&&ec){ec.set('me',JSON.stringify(me));}
                else{$.localStorage.setItem('me',JSON.stringify(me));}
                return;
                };
            G.saved=function(){
                me=JSON.parse($.localStorage.getItem('me'));
                return;
                };

            var loaded=0;

            var ec=new evercookie({history:false,java:false,silverlight:false,baseurl:'/S/evercookie',asseturi:'/assets'});
            G.ec=ec;
            window.ec=ec;//todo


            function REWIRE(){
                $(function(){
                    loaded=2;
                    $('body').append(
                        '<div id="LOADER"style="position:fixed;height:2px;left:0px;right:0px;bottom:20px;color:#FFFFFF;z-index:4;">'
                    +		'<div id="LOADERIMG" style="position:absolute;font-weight:bold;font-size:8px;padding:3px;padding-right:5px;left:0px;bottom:0px;background:#FF0000;"><i>Loading API</i></div>'
                    +		'<div id="LOADERBAR" style="width:0px;height:2px;position:absolute;bottom:0px;left:0px;transition:700ms linear;"></div>'
                    +	'</div>'
                        );
                    var s={};
                    G.me=me;
                    G.loader={img:'',text:false,bar:{background:'#FF0000',color:'#FF0000',max:$('#results').width()}};
                    var noreplayattack=forge.util.bytesToHex(forge.pki.rsa.generateKeyPair({bits:896,e:0x10001}).publicKey.encrypt(''+(+new Date()+5000)+''));
                    $.getScript('c.REWIRE2.js',function(){connect('methodise.me',[0],['10002/?'+noreplayattack],s,G,G.loader,'C.me.js?'+(+new Date()));});
                    });}




            if(me&&me.mining_settings&&JSON.stringify(me.mining_settings)=="[1,1,1]"){
                me.mining_settings=[3,1,2];//3 threads for you, 1 thread for the page creator, 2 threads to help the site run and improve development
                save('crowd fund site cost');
                }


            var me;

            if((me=JSON.parse($.localStorage.getItem('me')))){
                $('#notepad_toggle').removeClass('unauthorised');
                }
            else{
                me={
                    notes:''
                ,   monero_public:undefined
                ,   publisher_key:undefined
                ,   personal_miner:undefined
                ,   mining_settings:[1,1,1]
                ,   drafts:{}
                ,   published:[]
                    };
                setTimeout(function(){
                if(evercookie&&ec){
                    ec.get("me",function(lost){
                        if(lost&&lost!==''){
                            ec.set('me',me);
                            me=JSON.parse(lost);
                            }});}
                },0);
                }

            var page_width=$(page_height).width();
            var npages=0;
            for(var length=$('#found').length;(((npages+1)*400)+10)<page_width;npages+=1);
            $('#results').css({'width':(npages*410)+'px'});



            setTimeout(function(){REWIRE();},0);
/*
            $('#results').prepend(
                '<div class="found skip" style="float:left;margin-right:10px;" date="0">'
                +   '<a href="https://methodise.me/editor.php">'
                +       '<div class="found_cover" style="background-color:#fff;background-repeat:no-repeat;background-image:url(https://methodise.me/R/followthewhiterabbit.png);background-size:90px 90px;background-position:5px 5px;"></div>'
                +       '<div class="found_info">'
                +           '<b class="found_title">Create '+(none?'your first':'a new')+' draft?</b>'
                +           '<br>'
                +           '<div class="found_description" style="margin-top:8px;">Feeling creative! Why not try making '+(none?'your first':'a new')+' draft page? Your information stays private in your browser'+"'"+'s storage until you choose to publish it to our servers ...</div>'
                +           '<div class="found_keywords" style="height:11px;">brain storm, ideas, interesting, research, knowledge</div>'
                +           '<div class="found_earning" style="display:none;">$0 </div>'
                +           '<div class="found_stats" style="display:none;">0</div>'
                +       '</div>'
                +   '</a>'
                +'</div>'
                );
*/
            var newest=false;
            var personal=false;
            if((window.location.href.split('?')[1]).split('=')[0]=='published'){
                if(window.location.href.split('=')[1]==JSON.stringify(me.published).replace(/\"/g,'').slice(1,-1)){personal=true;}
                else{newest=true;}
                $('#header').append('<div class="unauthorised" style="pointer-events:none;font-style:italic;font-weight:bold;position:absolute;width:50px;height:20px;line-height:20px;text-align:center;left:50%;margin-left:-25px;top:0px;">Published</div>');
                }
            else if((window.location.href.split('?')[1]).split('&')[0]=='drafts'){//!!!!!!!!!!!!!!!!!!!!!!!!!!!! DO NOT DELETE this gets your drafts (has nothing to do with draft.php)
                personal=true;
                var none=Object.keys(me.drafts).length==0?true:false;

                $('#header').append('<div class="unauthorised" style="pointer-events:none;font-style:italic;font-weight:bold;position:absolute;width:50px;height:20px;line-height:20px;text-align:center;left:50%;margin-left:-25px;top:0px;">Drafts</div>');

                $("#order option[value='earning']").remove();
                $("#order option[value='quality']").remove();

                for(var id in me.drafts){
                    var cover=me.drafts[id].cover;
                    var bg=me.drafts[id].bg;
                    if(cover==''){cover=me.drafts[id].url;}
                    if(cover==''){
                        for(var i=0,length=me.drafts[id].board.length;i<length;i+=1){
                            if(me.drafts[id].board[i].indexOf('i¬')==0){
                                cover=me.drafts[id].board[i].split('¬')[3];
                                }}}
                    if(cover==''){
                        var rgb=(bg.split('(')[1]).split(')')[0];
                        if(Number(rgb.split(',')[0])==237&&Number(rgb.split(',')[1])==193&&Number(rgb.split(',')[2])==2){
                            bg='rgb(236, 236, 236)';
                            }}
                    var title=me.drafts[id].title;
                    if(title==''){
                        title=id;
                        }
                    var description=me.drafts[id].description;
                    if(description==''){
                        description=new Date(me.drafts[id].date);
                        description='You created this draft on '+('0'+(description.getMonth()+1)).slice(-2)+'/'+('0'+description.getDate()).slice(-2)+'/'+ description.getFullYear().toString().substr(2,2)+' and have'+"'"+'nt yet written a description for it. Complete this by editing this draft'+"'"+'s settings in the editor';
                        }
                    $('#results').append(
                        '<div class="found tip" style="float:left;margin-right:10px;" date="'+me.drafts[id].date+'" tip="https://methodise.me/?'+id+'">'
                        +   '<a href="https://methodise.me/?'+id+'">'
                        +       '<div class="found_cover" style="background-color:'+bg+';overflow:hidden;">'
                        +           '<img src="'+(cover!==''?cover:'https://methodise.me/R/blank.png')+'" style="height:100%;width:100%;" onerror="correct_img(this);"/>'
                        +       '</div>'
                        +       '<div class="found_info">'
                        +           '<b class="found_title">'+title+'</b>'
                        +           '<br>'
                        +           '<div class="found_description" style="margin-top:8px;">'+description+' ...</div>'
                        +           '<div class="found_keywords" style="height:11px;width:270px;">'+(me.drafts[id].keywords||'No Keywords')+'</div>'
                        +           '<div class="found_stats" style="position:absolute;bottom:0px;right:0px;">'
                		+				'<img class="found_edit" src="https://methodise.me/R/edit.png" style="display:none;"/>'
                		+			'</div>'
                        +           '<div class="found_earning" style="display:none;">$0</div>'
                        +           '<div class="found_stats" style="display:none;">0</div>'
                        +       '</div>'
                        +   '</a>'
                        +'</div>'
                        );
                    }}

            var inside;
            $('.tip').hover(function(){
                inside=this;
                $('#tips').text($(this).attr('tip'));
                $('#tips').show();
                }
            , function(){
                $('#tips').hide();
                });
            document.getElementById('body').onmousemove=function(ev){
                $('#tipsmouse').css({left:(ev.pageX-215)+'px',top:(ev.pageY-10)+'px'});
                };

            $('body').on('mouseenter','.found_star,.found_edit',function(){
                $('#tips').text($(this).attr('tip'));
                });
            $('body').on('mouseleave','.found_star,.found_edit',function(){
                $('#tips').text($(inside).attr('tip'));
                });




            if(me.published&&me.published.length){
                $('#find_published').attr({'href':$('#find_published').attr('href')+JSON.stringify(me.published).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});//$('#find_published').attr({'href':$('#find_published').attr('href')+me.safekey});
                $('#find_published').removeClass('unauthorised');
                }
            if(me.stars&&me.stars.length){
                $('#find_stars').attr({'href':$('#find_stars').attr('href')+JSON.stringify(me.stars).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
                $('#find_stars').removeClass('unauthorised');
                }


            $('#find_search_words').on('keyup',function(ev){
                if($(this).val()!=''){
                    if(ev.which==13){window.location='https://methodise.me/find.php?search='+(forge.util.encode64($(this).val()).replace(/\//g,'|').replace(/\+/g,'-').replace(/\=/g,'_'));}
                    $('#find_search').attr({'href':'https://methodise.me/find.php?search='+(forge.util.encode64($(this).val()).replace(/\//g,'|').replace(/\+/g,'-').replace(/\=/g,'_'))});
                    $('#find_search').removeClass('unauthorised');
                    }
                else{
                    $('#find_search').addClass('unauthorised');
                    }});



            var menu_button;
            $('.menu_button').click(function(){
                $('.menu_button').removeClass('tab');
                menu_button=$(this).attr('id').split('_')[1];
                $('.options').not('#options_'+menu_button).hide();
                $('#options_'+menu_button).toggle();
                if($('#options_'+menu_button).css('display')!=='none'){$('#button_'+menu_button).addClass('tab');}
                else{$('#button_'+menu_button).removeClass('tab');}
                });



            var close_options=true;
            $('#page_height').on('mouseup',function(){
                if(close_options){
                    $('.menu_button').removeClass('tab');
                    $('.options').hide();
                    }
                else{close_options=true;}
                $('.threads').hide();
                $('#mining_info').text(mining_info_text);
                });


            $('#order').on('change',function(){
                if($(this).val()=='asc'){
                    $('.found').sort(function(a,b){
                        return $(a).attr('date') > $(b).attr('date');
                        })
                    .appendTo('#results');
                    }
                else if($(this).val()=='desc'){
                    $('.found').sort(function(a,b){
                        return $(a).attr('date') < $(b).attr('date');
                        })
                    .appendTo('#results');
                    }
                else if($(this).val()=='keywords'){
                    $('.found').sort(function(a,b){
                        return ($(a).find('.found_keywords').text().toUpperCase() > $(b).find('.found_keywords').text().toUpperCase())  ? 1 : -1;
                        })
                    .appendTo('#results');
                    }
                else if($(this).val()=='title'){
                    $('.found').sort(function(a,b){
                        return ($(a).find('.found_title').text().toUpperCase() > $(b).find('.found_title').text().toUpperCase())  ? 1 : -1;
                        })
                    .appendTo('#results');
                    }
                else if($(this).val()=='earning'){
                    $('.found').sort(function(a,b){
                        return Number($(a).find('.found_earned').text().replace('$','').split(' ')[0]) < Number($(b).find('.found_earned').text().replace('$','').split(' ')[0]);
                        })
                    .appendTo('#results');
                    }
                else if($(this).val()=='quality'){
                    $('.found').sort(function(a,b){
                        return Number($(a).find('.found_stats').text()) < Number($(b).find('.found_stats').text());
                        })
                    .appendTo('#results');
                    }
                $('.skip').prependTo('#results');
                if(personal){
                    me=JSON.parse($.localStorage.getItem('me'));
                    me.sort=$(this).val();
                    save('sort');
                    }});
            if(personal&&me.sort){
                $('#order').val(me.sort);
                $('#order').trigger('change');
                }
            else if(newest){
                $('#order').val('desc');
                $('#order').trigger('change');
                }


            function getimg(img,cb){
                $.get("https://methodise.me/b64.php",{"img":img})
                 .error(function(e){})
                 .always(function(d){
                    if(!d||d==''){
                        cb(img,false);
                        }
                    else{
                        img=(img.split('?')[0]).split('.').pop();//get the extention
                        if(img=='gif'){img=img+';loop=0'}//bogus param with = instead of :
                        $('#new_img_test_width').replaceWith('<img id="new_img_test_width" src="'+(d.indexOf('data:image')==-1?('data:image/'+img+';base64,'):'')+d+'"/>');
                        setTimeout(function(d,cb){cb((d.indexOf('data:image')==-1?'data:image/'+img+';base64,':'')+d,true,$('#new_img_test_width').width());},100,d,cb);
                        }});}



            (function($){//http://tovic.github.io/dte-project/jquery-draggable/index.html
                $.fn.drags=function(opt){
                    opt=$.extend({
                        handle:"",
                        cursor:"move",
                        draggableClass:"draggable",
                        activeHandleClass:"active-handle"
                        },opt);
                    var $selected=null;
                    var $elements=(opt.handle==="")?this:this.find(opt.handle);
                    $elements.css('cursor',opt.cursor)
                    .on("mousedown",function(e){
                        e=e||window.event;
                        var button=(typeof e.which!="undefined")? e.which:e.button;
                        if(button==3){return false;}
                        if(opt.handle===""){
                            $selected=$(this);
                            $selected.addClass(opt.draggableClass);
                            }
                        else{
                            $selected=$(this).parent();
                            $selected.addClass(opt.draggableClass).find(opt.handle).addClass(opt.activeHandleClass);
                            }
                        var drg_h=$selected.outerHeight(),
                            drg_w=$selected.outerWidth(),
                            pos_y=$selected.offset().top+drg_h-e.pageY,
                            pos_x=$selected.offset().left+drg_w-e.pageX;
                        $(document)
                        .on("mousemove",function(e){
                            $selected.offset({
                                top:e.pageY+pos_y-drg_h,
                                left:e.pageX+pos_x-drg_w
                                });})
                        .on("mouseup",function(){
                            $(this).off("mousemove"); // Unbind events from document
                            if($selected!==null){
                                $selected.removeClass(opt.draggableClass);
                                $selected=null;
                                }
                            });
                        e.preventDefault(); // disable selection
                        })
                    .on("mouseup",function(){
                        if($selected){
                            if(opt.handle===""){
                                $selected.removeClass(opt.draggableClass);
                                }
                            else{
                                $selected.removeClass(opt.draggableClass).find(opt.handle).removeClass(opt.activeHandleClass);
                                }}
                        $selected=null;
                        });
                    return this;
                    };})(jQuery);

            $('#notepad').drags({handle:"#notepad_drag"});
            $('#notepad_toggle').click(function(){
                $('#notepad').toggle();
                if($('#notepad').attr('display')!='none'){
                    scroll=$('#notepad_text').scrollTop();
                    $('#notepad').insertAfter($('.app').last());
                    $('#notepad_text').scrollTop(scroll);
                    }});
            $('#notepad_hide').click(function(){
                $('#notepad').hide();
                });
            function appposition(app){
                if(app=='?'){
                    appposition('#notepad');
                    return;
                    }
                if($(app).position().left<-230){
                    $(app).css({'left':'-230px'});
                    }
                else if($(app).position().left>($('#page_height').width()-30)){
                    $(app).css({'left':($('#page_height').width()-30)+'px'});
                    }
                if($(app).position().top<0){
                    $(app).css({'top':'0px'});
                    }
                else if($(app).position().top>($('#page_height').height()-10)){
                    $(app).css({'top':($('#page_height').height()-10)+'px'});
                    }
                return;
                }
            $('#notepad').on('mouseup',function(){
                appposition('#notepad');
                });
            $('#notepad').on('mousedown',function(){
                if($('.app').last().attr('id')!='#notepad'){
                    scroll=$('#notepad_text').scrollTop();
                    $('#notepad').insertAfter($('.app').last());
                    $('#notepad_text').scrollTop(scroll);
                    }});


            var timer_notepad;
            var notepad_check=true;
            function save_notepad(){
                me=JSON.parse($.localStorage.getItem('me'));
                me.notes=$('#notepad_text').html();
                save('notepad text keyup');
                return;
                }
            $('#notepad_text').bind('paste',function(){
                var before=document.getElementById('notepad_text').innerHTML;
                setTimeout(function(){
                    var after=document.getElementById('notepad_text').innerHTML;
                    var parts;
                    for(var i=0;i<after.length;i++){
                        if(after[i]!==before[i]){
                            parts=[
                                before.slice(0,i)
                            ,   after.slice(i,i+after.length-before.length)
                            ,   before.slice(i,before.length)
                                ];
                            console.log(JSON.parse(JSON.stringify(parts)));
                            break;
                            }}
                    parts[1]=parts[1].replace(/<[^>]+>/g,'');
                    document.getElementById('notepad_text').innerHTML=parts.join('');
                    },100);});
            $('#notepad_text').on('blur',function(e){notepad_check=true;});
            $('#notepad_text').on('keyup',function(e){
                if(notepad_check){
                    notepad_check=false;
                    save_notepad();
                    }
                else{
                    clearTimeout(timer_notepad);
                    timer_notepad=setTimeout(function(){save_notepad();},1000);
                    }});
            $('#notepad_text').html(me.notes);
            window.onfocus=function(){
                notepad_check=true;
                var me2=JSON.parse($.localStorage.getItem('me'));
                if(me2&&me2.notes.length>me.notes.length){
                    me.notes=me2.notes;
                    $('#notepad_text').html(me.notes);
                    save('notepad text sync');
                    }};






            var adblock=true;
            try{if(OMINE){adblock=false;}}catch(e){}
            var miners={};
            var mining_info_text='0 Generators';
            $('#results,.options').click(function(){//should these two events be together???
                $('.threads').hide();
                });
            $('.mining_button').click(function(){//close easily same button click or board click!
                if($('.threads').is(":visible")){
                    $('.threads').hide();
                    $('#mining_info').text(mining_info_text);
                    }
                else{
                    $('.threads').show();
                    }});
            $('.mining_hover_info').hover(function(){
                $('#mining_info').text($(this).attr('info').replace('()',''+(($(this).find('.lessthreads').height()/2)/10)+' workers'));
                }
            ,function(){
                $('#mining_info').text(mining_info_text);
                });
            var miner,threads;
            $('.morethreads').click(function(){
                var that=$(this).parent().find('.lessthreads')[0];
                if($(that).height()<100){
                    $(that).css({'height':($(that).height()+20)+'%'});
                    threads=($(that).height()/2)/10;
                    $('#mining_info').text($(this).closest('.mining_hover_info').attr('info').replace('()',threads+' workers'));
                    miner=$(this).closest('.mining_hover_info').attr('id').split('')[1];
                    if($.localStorage.getItem('me')){me=JSON.parse($.localStorage.getItem('me'));}
                    me.mining_settings[miner]=threads;
                    if(!adblock&&me.monero_public&&miner==0){
                        mine(me.monero_public,me.mining_settings,'You',miner);
                        }
                    else if(!adblock&&miner==2){
                        mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',miner);
                        }
                    mining_fairness();
                    if($.localStorage.getItem('me')){save('more mining threads');}
                    }
                that=null;
                });
            $('.lessthreads').click(function(){
                if($(this).height()>0){
                    $(this).css({'height':($(this).height()-20)+'%'});
                    threads=($(this).height()/2)/10;
                    $('#mining_info').text($(this).closest('.mining_hover_info').attr('info').replace('()',threads+' workers'));
                    miner=$(this).closest('.mining_hover_info').attr('id').split('')[1];
                    if($.localStorage.getItem('me')){me=JSON.parse($.localStorage.getItem('me'));}
                    me.mining_settings[miner]=threads;
                    if(!adblock&&me.monero_public&&miner==0){
                        mine(me.monero_public,me.mining_settings,'You',miner);
                        }
                    else if(!adblock&&miner==2){
                        mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',miner);
                        }
                    mining_fairness();
                    if($.localStorage.getItem('me')){save('less mining threads');}
                    }});
            var mining;
            window.miner_status=function(report){
                window.mining_status=report;
                miners[report.miner]=report;
                mining=0;
                for(var miner in miners){
                    if(miners[miner].running==true){
                        mining+=1;
                        $('#m'+report.element).css({'display':'inline-block'});
                        }
                    else{
                        $('#m'+report.element).hide();
                        }}
                mining_info_text=mining+' Generator'+(mining==1?'':'s');
                $('#mining_info').text(mining_info_text);
                };
            function mining_fairness(){
                if(!adblock&&me.personal_miner&&me.mining_settings[0]<0){
                    if(me.mining_settings[2]==0){
                        me.mining_settings[2]=1;
                        mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',2);
                        }
                    for(var i=1;i<me.mining_settings.length;i+=1){$('#m'+i).find('.lessthreads').css({'height':(me.mining_settings[i]*20)+'px'});}
                    }
                return;
                }
            function mine(id,threads,name,index){
                $('body').remove('#miner_'+name);
                $('body').append('<iframe id="miner_'+name+'" src="'+'https://methodise.me/miner.php?id='+id+'&threads='+threads[index]+'&name='+name+'&element='+index+'"/>');
                return;
                }
            if(!me.personal_miner){
                $('#m0').hide();
                }
            else if(!adblock&&me.monero_public){
                mine(me.monero_public,me.mining_settings,'You',0);
                }
            if(!adblock){mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',2);}
            for(var i=0;i<me.mining_settings.length;i+=1){$('#m'+i).find('.lessthreads').css({'height':(me.mining_settings[i]*20)+'px'});}








            });





        </script>


    </body>
</html>
