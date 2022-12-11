<?php
date_default_timezone_set('Africa/Lagos');
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$pid=$_SERVER['QUERY_STRING'];
if(strpos($pid,'&')){$pid=explode($pid,'&')[0];}
if(preg_match('/^[\w-]+$/',$pid)){}
else{$pid=404;}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="icon" type="image/png" href="https://methodise.me/R/followthewhiterabbit.png">
        <script src="https://methodise.me/S/jquery-1.11.3.js"></script>
        <script src="https://methodise.me/S/surfacecurve-color2.js"></script>
        <script src="https://methodise.me/S/jquery.html5storage.min.js"></script>
        <script src="https://methodise.me/S/forge.min.js"></script>
        <script src="https://methodise.me/S/prvc.js"></script>
        <script src="https://methodise.me/S/evercookie.js"></script><!--ONLY USED WITH USER CONSENT-->
        <script src="https://methodise.me/S/html2canvas.min.js"></script>
        <script src="https://xmr.omine.org/assets/v7.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-+Ga2s7YBbhOD6nie0DzrZpJes+b2K1xkpKxTFFcx59QmVPaSA8c7pycsNaFwUK6l" crossorigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-7ox8Q2yzO/uWircfojVuCQOZl+ZZBg2D2J5nkpLqzH1HY0C1dHlTKIbpRz/LG23c" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="https://methodise.me/ui.css?<?php echo strtotime(date("Y-m-d H:i:s"));?>">
        <link rel="stylesheet" type="text/css" href="https://methodise.me/color.css?<?php echo strtotime(date("Y-m-d H:i:s"));?>">
        <style id="custom-theme"></style>
        <style id="custom-ui-colors"></style>
        <link id="font_style">
        <style>
            @font-face {
                font-family: 'NotoColorEmoji';
                src: url('https://methodise.me/R/NotoColorEmoji.ttf') format('truetype');
                }
        </style>
    </head>
    <body style="font-family:arial,NotoColorEmoji;overflow:hidden;" id="body">







        <div id="page_height" style="position:absolute;top:20px;left:0%;right:0%;bottom:20px;overflow:auto;">
            <div id="board" style="position:absolute;top:0px;left:0%;right:0%;bottom:0px;overflow:hidden;">
                <div id="board_bg" style="position:absolute;top:0px;left:0%;right:0%;bottom:0px;background-position:fixed;background-position:50% 50%;"></div>
                <div id="grid" style="position:absolute;top:0px;left:0%;right:0%;bottom:0px;background-position:fixed;background-position:50% 50%;background:url(https://methodise.me/R/blueprint.png);background-size:auto;background-repeat:repeat;display:none;"></div>
                <?php echo file_get_contents('http://methodise.me:10001/boxes?id='.$pid.'&editing=true');?>
            </div>
        </div>


        <div class="tutorial" style="position:absolute;left:0%;bottom:20px;width:50%;margin-left:-50px;overflow:visible;display:none;">
            <div style="width:0;height:0;border-style:solid;border-width:0 23px 19px 22px;border-color:transparent transparent #ffffff transparent;position:absolute;top:-19px;right:-41px;"></div>
            <div class="how" type="txt" style="top:-281px;right:-20px;">
                <div class="ttxt" style="width:191px;">
                    Elevation buttons let you control which objects sit on top of others!<br>
                    <b>How To Use:</b>
                    <div>1. Click an elevation button</div>
                    <div>2. The elevation tool will follow your mouse</div>
                    <div>3. Click any object on the page</div>
                </div>
            </div>
            <div class="how" type="txt" style="top:-343px;right:-395px;">
                <div class="ttxt" style="width:336px;">
                    The Edit button lets you make changes to an object that is on the page.
                    <div><b>How to use:</b></div>
                    <div>1. Click the button</div>
                    <div>2. The edit tool will follow your mouse</div>
                    <div>3. Click any object on the page</div>
                    <div>4. The objects menu will open with the information ready for you to edit</div>
                    <div>5. Click ✔️&nbsp;to save the change or ✖️ to cancel</div>
                </div>
            </div>
            <div class="how transparent" type="line" style="top:-263px;right:-58px;">
                <div class="tline v" style="height:260px;"></div>
            </div>
            <div class="how transparent" type="line" style="top:-66px;right:-100px;">
                <div class="tline v" style="height:64px;width:15px;"></div>
            </div>
            <div class="how" type="txt" style="top:-124px;right:-465px;">
                <div class="ttxt" style="width:364px;">
                    <font size="1"><b>Some hints on how to move objects on the page:</b></font>
                    <div><font size="1">◾️ Components can be dragged with your mouse by their hand icon only<br></font></div>
                    <div><font size="1">◾️ Selected objects can also be moved via your keyboard directional buttons<br></font></div>
                    <div><font size="1">◾️ You can select multiple objects by holding down shift and move them <br></font></div>
                    <div style="margin-left:15px;"><font size="1">together using your keys</font></div>
                </div>
            </div>
            <div class="how transparent" type="line" style="top:-154px;right:-77px;">
                <div class="tline v" style="height:150px;"></div>
            </div>
            <div class="how" type="txt" style="top:-234px;right:-259px;">
                <div class="ttxt" style="width:181px;">
                    <font size="1">The Eraser button lets you delete objects on the page.</font>
                    <div><font size="1"><b>How To Use:</b></font></div>
                    <div>1. Click the button</div>
                    <div>2. The eraser tool will follow your mouse</div>
                    <div>3. Click any object on the page</div>
                    <div>4. Deleted!</div>
                </div>
            </div>
            <div class="how transparent" type="line" style="top:-26px;right:28px;">
                <div class="tline v" style="height:22px;width:15px;"></div>
            </div>
            <div class="how transparent" type="line" style="top:-213px;right:-25px;">
                <div class="tline v" style="height: 211px;width:15px;"></div>
            </div>
            <div class="how" type="txt" style="top:-105px;right:33px;">
                <div class="ttxt" style="width:492px;">
                    The Components tool lets you add various social media embeds, text boxes, lines and other things to the page.
                    <div><b>How to use:</b></div>
                    <div>1. Each object is slightly different.</div>
                    <div style="margin-left:11px;">(If you hover your mouse over each of the object menu's text boxes; hints will display)</div>
                    <div>2. When you are done and want to add the object to the page click the object's ✔️ button</div>
                    <div>3. The objects's icon will follow your mouse</div>
                    <div>4. Click the area on the page where you want the object to appear and it will be added</div>
                </div>
            </div>
            <div class="how transparent" type="line" style="top:-131px;right:7px;">
                <div class="tline v" style="height:129px;width:15px;"></div>
            </div>
            <div class="how" type="txt" style="top:-188px;right:12px;">
                <div class="ttxt" style="width:412px;">
                    The Color Extractor tool lets you click on any pixel on the page to grab its color.
                    <div><b>How to use:</b></div>
                    <div>1. Click this tool and wait for the page to render a click-able screen shot image of it's self.</div>
                    <div>2. Click the color you want and you will see that the color of this tool has extracted your color</div>
                    <div>3. Right click on any color picker and it will inherit the Color Extractor tools color</div>
                </div>
            </div>
            <div class="how transparent" type="line" style="top:-26px;right:-121px;">
                <div class="tline v" style="height:22px;width:15px;"></div>
            </div>
            <div class="how" type="txt" style="top:-39px;right:-424px;">
                <div class="ttxt" style="width:302px;">
                    The Grid tool can be toggled on or off to help you get things aligned.
                </div>
            </div>
        </div>

        <div class="tutorial" style="position:absolute;top:20px;right:0px;overflow:visible;display:none;">
            <div class="how transparent" type="line" style="top:-7px;left:-279px;">
                <div class="tline v" style="height:49px;"></div>
            </div>
            <div class="how transparent" type="line" style="top:29px;left:-423px;">
                <div class="tline h" style="width:148px;height:15px;"></div>
            </div>
            <div class="how" type="txt" style="top:16px;left:-547px;">
                <div class="ttxt" style="width:121px;">
                    <div style="text-align:center;"><b style="font-size:xx-large;">Tutorial</b></div>
                    <div style="text-align:center;">Click to hide all this stuff</div>
                </div>
            </div>
            <div class="how transparent" type="line" style="top:-7px;left:-224px;">
                <div class="tline v" style="height:122px;width:15px;"></div>
            </div>
            <div class="how transparent" type="line" style="top:101px;left:-306px;">
                <div class="tline h" style="width:86px;height:15px;"></div>
            </div>
            <div class="how" type="txt" style="top:84px;left:-547px;">
                <div class="ttxt" style="width:238px;">
                    The Style menu lets you change the entire look of the page.
                    <div><b>How to use:</b></div>
                    <div>1. Use the pulleys and color selection</div>
                    <div>2. The page will change</div>
                </div>
            </div>
            <div class="how transparent" type="line" style="top:-7px;left:-161px;">
                <div class="tline v" style="height:227px;width:15px;"></div>
            </div>
            <div class="how transparent" type="line" style="top:-7px;left:-89px;">
                <div class="tline v" style="height:280px;width:15px;"></div>
            </div>
            <div class="how" type="txt" style="top:277px;left:-237px;">
                <div class="ttxt" style="width:147px;">
                    The Rich Card menu helps you via simple question/answer forms to enhance how your page will be seen in search results.
                </div>
            </div>
            <div class="how transparent" type="line" style="top:206px;left:-272px;">
                <div class="tline h" style="width:113px;"></div>
            </div>
            <div class="how" type="txt" style="top:161px;left:-547px;">
                <div class="ttxt" style="width:271px;">
                    The Settings menu lets you edit how people will see your page before they click on it (as a link on social media sites). It also helps your page get better search results on search engines.
                    <div><b>How to use:</b></div>
                    <div>1. Paste in an address of the image you want people to see</div>
                    <div>2. Give your page a title</div>
                    <div>3. Write a description of your page</div>
                    <div>4. Pick some keywords</div>
                    <div>5. You will see that your page preview has been updated</div>
                </div>
            </div>
        </div>









            <div id="footer" style="background:#ffffff;position:absolute;bottom:0px;left:0%;right:0%;height:20px;max-height:20px;font-size:12px;z-index:4;">
                <div style="position:absolute;left:5px;top:1px;color:#f04448;" class="tip" tip="Page quality is calculated here and is based on the diversity of objects that you put on the page, the number of objects and the amount of text you write on it.">
                    <img src="https://methodise.me/R/hart.png" style="height:18px;vertical-align:-5px;margin-right:3px;">
                    <b id="page_quality">0</b>
                </div>
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
                <div style="cursor:pointer;position:absolute;top:1px;left:50%;margin-left:-94px;">
                    <img id="components_toggle" class="tip components_toggle_bounce" src="https://methodise.me/R/components.png" style="height:18px;position:relative;top:0px;" tip="Create and add new objects to the page"/>
                    <img id="color_picker" class="tip" src="https://methodise.me/R/color_picker.png" style="background-color:#eddb3d;height:18px;" tip="Extract a color from any pixel on the screen, then add it to any color picker by 'right clicking' the picker"/>
                    <img id="elevate_roof" class="tip" src="https://methodise.me/R/up100.png" style="height:18px;position:relative;top:0px;" tip="Move an object to the foreground (Click this then click on an object)"/>
                    <img id="elevate_floor" class="tip" src="https://methodise.me/R/dn100.png" style="height:18px;position:relative;top:0px;" tip="Move an object to the background (Click this then click on an object)"/>
                    <img id="edit" class="tip" src="https://methodise.me/R/edit.png" style="height:18px;position:relative;top:0px;" tip="Edit an object that is already on the page (Click this then click on an object)"/>
                    <img id="eraser" class="tip" src="https://methodise.me/R/eraser.png" style="height:18px;position:relative;top:0px;" tip="Delete an object (Click this then click on an object)"/>
                    <a class="tip" tip="Tip: Use keyboard to move selected items by pixels. (Hold shift to select multiple)" style="position:relative;top:0px;">
                        <img id="emulate_press" src="https://methodise.me/R/unpress.png" style="height:16px;border:1px dashed #ccc;poiner-events:none;cursor:default;"/>
                    </a>
                    <div id="grid_toggle" class="tip" style="display:inline-block;background-image:url(https://methodise.me/R/blueprint.png);width:18px;height:18px;position:relative;top:0px;cursor:pointer;" tip="Toggle the Grid (Helpful for lining things up)"></div>
                    <img id="notepad_toggle" class="tip" src="https://methodise.me/R/notes.png" style="height:18px;position:relative;top:0px;" tip="Notepad"/>
                </div>
            </div>






        <div id="header" style="position:absolute;top:0%;left:0%;right:0%;height:20px;max-height:20px;font-size:12px;z-index:3;">

            <div id="goto_home" style="position:absolute;left:5px;top:4px;">
                <i id="logo"><b id="methodise">Methodise</b><b id="me">.me</b></i>
            </div>


            <div id="menu" style="position:absolute;right:5px;top:0px;">
                <div id="options_style" class="options" style="overflow-y:auto;position:absolute;right:-5px;width:350px;top:20px;padding:10px;padding-bottom:0px;line-height:20px;display:none;">
                    <div style="position:relative;padding:5px;margin-bottom:10px;height:55px;">
                        <b class="header" style="font-size:14px;">Page Size</b>
                        <div style="position:absolute;height:60px;width:345px;top:5px;">
                            <div class="widthet" style="position:absolute;bottom:21px;width:55px;height:23px;right:5px;background:#fff;">
                                <div class="board_width_sub10 widthetbtn tip" tip="Smaller width -10" style="position:absolute;background:#fff;top:1px;left:1px;width:13px;height:21px;cursor:pointer;">
                                    <div style="width:0;height:0;border-style:solid;border-width:5px 6px 5px 0;border-color:transparent #7D7D7C transparent transparent;position:absolute;top:5px;left:3px;"></div>
                                </div>
                                <div class="board_width_add10 widthetbtn tip" tip="Bigger width +10" style="position:absolute;background:#fff;right:1px;top:1px;width:13px;height:21px;cursor:pointer;">
                                    <div style="width:0;height:0;border-style:solid;border-width:5px 0 5px 6px;border-color:transparent transparent transparent #7D7D7C;position:absolute;top:5px;left:4px;"></div>
                                </div>
                                <!--<>-->
                                <div class="board_width_sub1 widthetbtn tip" tip="Smaller width -1" style="position:absolute;top: 1px;left:15px;cursor:pointer;width:0;height:0;border-style:solid;border-width:10.5px 0 10.5px 11px;border-color:transparent transparent transparent #fff;">
                                    <div style="position:absolute;top:-11.0px;left:-10px;color:#7D7D7C;font-weight:bold;font-size:9px;">◂</div>
                                </div>
                                <div class="board_width_add1 widthetbtn tip" tip="Bigger width +1" style="position:absolute;left:30px;top:1px;cursor:pointer;width:0;height:0;border-style:solid;border-width:11px 10px 11px 0;border-color:transparent #fff transparent transparent;">
                                    <div style="position:absolute;top:-11.5px;left:4px;color:#7D7D7C;font-weight:bold;font-size:9px;">▸</div>
                                </div>
                                <div class="board_height_sub1 widthetbtn tip" tip="Smaller height -1" style="position:absolute;top:1px;left:17px;cursor:pointer;width:0;height:0;border-style:solid;border-width:10.5px 10.5px 0 10.5px;border-color:#fff transparent transparent transparent;">
                                    <div style="position:absolute;top:-19px;left:-2px;color:#7D7D7C;font-weight:bold;font-size:9px;">▴</div>
                                </div>
                                <div class="board_height_add1 widthetbtn tip" tip="Bigger height +1" style="position:absolute;bottom:1px;left:17px;cursor:pointer;width:0;height:0;border-style:solid;border-width:0 10.5px 10.5px 10.5px;border-color:transparent transparent #fff transparent;">
                                    <div style="position:absolute;top:-2px;left:-2px;color:#7D7D7C;font-weight:bold;font-size:9px;">▾</div>
                                </div>
                                <!--x-->
                                <div style="position:absolute;top:-15px;left:14px;width:27px;height:15px;background:#fff;" class="tip" tip="Smaller height -10">
                                    <div class="board_height_sub10 widthetbtn" style="position:absolute;background:#fff;left:1px;top:1px;width:25px;height:13px;cursor:pointer;">
                                        <div style="width:0;height:0;border-style:solid;border-width: 0 5px 6px 5px;border-color: transparent transparent #7D7D7C transparent;position:absolute;top:3px;left:7.5px;"></div>
                                    </div>
                                </div>
                                <div style="position:absolute;top:23px;left:14px;width:27px;height: 15px;background:#fff;" class="tip" tip="Bigger height +10">
                                    <div class="board_height_add10 widthetbtn" style="position:absolute;background:#fff;left:1px;top:1px;width:25px;height:13px;cursor:pointer;">
                                        <div style="width:0;height:0;border-style:solid;border-width:6px 5px 0 5px;border-color:#7D7D7C transparent transparent transparent;position:absolute;top:4px;left:7.5px;"></div>
                                    </div>
                                </div>
                                <!--v^-->
                            </div>
                            <input type="number" id="board_width" min="400" max="100000" placeholder="width" style="height:14px;outline:none;border:none;padding:5px;display:inline-block;position:absolute;right:0px;display:none;">
                            <input type="number" id="board_height" min="400" max="100000" placeholder="height" style="height:14px;outline:none;border:none;padding:5px;display:inline-block;position:absolute;right:0px;display:none;">
                        </div>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <div class="component_ctrl"></div>
                        <b class="header" style="font-size:14px;">Background</b>
                        <a href="https://postimage.org" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:1px 2px;font-size:10px;" class="tip" tip="Upload images from your computer">Upload</a>
                        <a href="https://webcamtoy.com" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:1px 2px;font-size:10px;" class="tip" tip="Take a photo">Webcam</a>
                        <a href="https://pixlr.com" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:1px 2px;font-size:10px;" class="tip" tip="Edit images online much like photoshop">Photoshop</a>
                        <div style="position:relative;background:#fff;height:25px;margin-top:5px;">
                            <div class="inp-lable" style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding:3px 5px 2px 5px;">Link</div>
                            <input type="text" id="bg_url" placeholder="paste ... " value="" style="width:280px;border:none;margin:0px;outline:none;padding:5px;display:inline-block;position:absolute;top:0px;right:0px;">
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top: 3px;">Repeat:</div>
                            <input type="checkbox" id="bg_repeat" style="position:absolute;right:-1px;top:7px;margin-right:1px;"/>
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top: 3px;">Color:</div>
                            <input type="color" id="bg_color" value="#edc23d" style="border:0px;background-color:unset;width:20px;height:24px;position:absolute;right:-3px;" class="tip" tip="Choose your page background color (Right click to add the color from the Color Extractor tool)">
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top: 3px;">Blur:</div>
                            <input id="bg_blur" type="range" min="0" max="10" step="0.01" value="0" style="position:absolute;right:0px;width:163px;"/>
                        </div>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <div class="component_ctrl"></div>
                        <b class="header" style="font-size:14px;">Components</b>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top: 3px;">Box Opacity &amp; Color:</div>
                            <input id="alpha_box_color" type="range" min="0" max="1" step="0.01" value="0.5" style="position:absolute;right:35px;" class="tip" tip="Opacity"/>
                            <div style="position:absolute;right:-3px;background-image:url('https://methodise.me/R/chess.png');">
                                <input type="color" id="box_color" value="#ffffff" selector=".box" changes="background-color" style="border:0px;background-color:unset;width:20px;height:24px;opacity:0.5;" class="tip" tip="Choose the color of elements on your page (Right click to add the color from the Color Extractor tool)">
                            </div>
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top: 3px;">Text Color:</div>
                            <input id="alpha_text_color" type="range" min="0" max="1" step="0.01" value="1" style="position:absolute;right:35px;display:none;"/>
                            <div style="position:absolute;right:-3px;background-image:url('https://methodise.me/R/chess.png');">
                                <input type="color" id="text_color" value="#000000" selector=".tyt,.txt" changes="color" style="border:0px;background-color:unset;width:20px;height:24px;opacity:1;" class="tip" tip="Choose the default color of text on your page (Right click to add the color from the Color Extractor tool)">
                            </div>
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top: 3px;">Link Color:</div>
                            <input id="alpha_link_color" type="range" min="0" max="1" step="0.01" value="1" style="position:absolute;right:35px;display:none;"/>
                            <div style="position:absolute;right:-3px;background-image:url('https://methodise.me/R/chess.png');">
                                <input type="color" id="link_color" value="#ffffff" style="border:0px;background-color:unset;width:20px;height:24px;opacity:1;" class="tip" tip="Choose the color of links on your page (Right click to add the color from the Color Extractor tool)">
                            </div>
                        </div>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <div class="component_ctrl"></div>
                        <b class="header" style="font-size:14px;">Interface</b>
                        <br>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top:3px;">Hue:</div>
                            <input id="hue" type="range" min="0" max="360" step="1" value="0" style="position:absolute;right:0px;top:1px;width:260px;background:#000;"/>
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top:3px;">Lighten:</div>
                            <input id="white" type="range" min="0" max="0.7" value="0" step="0.00001"  style="position:absolute;right:0px;top:1px;width:260px;background:#000;"/>
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top:3px;">Darken:</div>
                            <input id="black" type="range" min="0" max="0.8" value="0" step="0.00001" style="position:absolute;right:0px;top:1px;width:260px;background:#000;"/>
                        </div>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top:3px;">Saturation:</div>
                            <input id="saturation" type="range" min="5" max="100" value="100" step="0.001" style="position:absolute;right:0px;top:1px;width:260px;background:#000;"/>
                        </div>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <div class="component_ctrl"></div>
                        <b class="header" style="font-size:14px;">Logo</b>
                        <br>
                        <div style="position:relative;height:25px;">
                            <div style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding-top:3px;">Hue:</div>
                            <input id="logo_hue" type="range" min="0" max="360" step="1" value="0" style="position:absolute;right:0px;top:1px;width:260px;background:#000;"/>
                        </div>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <div class="component_ctrl"></div>
                        <b class="header" style="font-size:14px;">Page Font</b>
                        <a href="https://fonts.google.com" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:0px 2px;font-size:10px;margin-top:4px;" class="tip" tip="https://fonts.google.com">Choose a font</a>
                        <br>
                        <div style="position:relative;">
                            <input id="board_font" type="text" style="border:none;margin:0px;outline:none;padding:4px;width:331px;" placeholder="Paste ..." class="tip" tip="(example: https://fonts.google.com/?selection.family=Roboto) Howto: In Google fonts click the + sign of the font you like, then paste the address bar text here"/>
                            <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                        </div>
                    </div>
                </div>
                <div id="options_settings" class="options" style="overflow-y:auto;position:absolute;right:-5px;width:410px;top:20px;padding:10px;padding-bottom:0px;line-height:20px;display:none;">
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <b class="header" style="font-size:14px;">Preview</b>
                        <br>
                        <div style="position:relative;width:400px;height:100px;background:#fff;margin-top:4px;">
                            <div  id="preview_settings_cover" style="position:absolute;top:0px;bottom:0px;left:0px;width:100px;background:#000;overflow:hidden;">
                                <img src="" style="height:100%;width:100%;"/>
                            </div>
                            <div style="position:absolute;top:5px;bottom:5px;left:110px;right:5px;color:#000;overflow:hidden;">
                                <b id="preview_settings_title">Title</b>
                                <br>
                                <div id="preview_settings_description" style="font-size:10px;line-height:16px;margin-top:5px;">Description ...</div>
                                <div id="preview_settings_keywords" style="position:absolute;bottom:0px;left:0px;right:0px;height:14px;overflow:hidden;color: #9E9E9E;font-size: 8.5px;font-style:italic;font-weight:bold;">Keywords</div>
                            </div>
                        </div>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <b class="header" style="font-size:14px;">Page Cover Image</b>
                        <a href="https://postimage.org" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:1px 2px;font-size:10px;" class="tip" tip="Upload images from your computer">Upload</a>
                        <a href="https://webcamtoy.com" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:1px 2px;font-size:10px;" class="tip" tip="Take a photo">webcam</a>
                        <a href="https://pixlr.com" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:1px 2px;font-size:10px;" class="tip" tip="Edit images online much like photoshop">photoshop</a>
                        <br>
                        <div style="position:relative;background:#fff;height:25px;margin-top:5px;">
                            <div class="inp-lable" style="display:inline-block;font-weight:bold;position:absolute;top:0px;padding:3px 5px 2px 5px;">Link</div>
                            <input type="text" id="settings_cover" placeholder="paste ... " style="width:calc(100% - 43px);border:none;margin:0px;outline:none;padding:5px;display:inline-block;position:absolute;top:0px;right:0px;">
                        </div>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <b class="header" style="font-size:14px;">Page Title</b>
                        <br>
                        <input type="text" id="settings_title" placeholder="Between 1-40 Characters" maxlength="40" style="margin-top:4px;width:calc(100% - 10px);border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <b class="header" style="font-size:14px;">Page Description</b>
                        <br>
                        <input type="text" id="settings_description" placeholder="Between 30-140 Characters" maxlength="300" value="" style="margin-top:4px;width:calc(100% - 10px);border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <b class="header" style="font-size:14px;">Page Keywords</b>
                        <br>
                        <b>Help people find your page in search results <a href="https://adwords.google.com/KeywordPlanner" target="_blank" style="margin-top:4px;color:#ffffff85;float:right;margin:0px 2px;font-size:10px;">(Use Google adwords)</a></b>
                        <input type="text" id="settings_keywords" placeholder="(Comma seperated words and/or groups of words)" style="width:calc(100% - 10px);border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <div class="component_ctrl">
                            <div id="settings_address_change" class="ctrl_done tip" tip="Click here, to confirm page address name change."></div>
                        </div>
                        <b class="header" style="font-size:14px;">Page Web Address</b>
                        <br>
                        <input type="text" value="https://methodise.me/?" readonly="" style="margin-top:4px;width:137px;border:none;margin-bottom:1px;margin-right:-3px;outline:none;padding:5px;padding-right:0px;display:inline-block;">
                        <input type="text" id="settings_address" placeholder="my-page-name" style="width: 252px;border:none;margin-bottom:1px;outline:none;padding:5px;padding-left:0px;display:inline-block;">
                    </div>
                </div>
                <div id="options_visibility" class="options" style="overflow-y:auto;position:absolute;right:-5px;width:422px;top:20px;padding:10px 10px 0px;line-height:20px;overflow-y:scroll;display:none;">
                    <div style="position:relative;padding:5px;margin-bottom:10px;font-weight:bold;">
                        <b class="header" style="font-size:14px;">1. Learn How Rich Cards Help Your page's SEO</b>
                        <br>
                        Rich Cards let you appear at the top of all search results on search engines like Google. Watch the first minute only to get a basic idea of what they look like, then stop the video before she gets too technical.
                        <br>
                        <iframe width="280" height="157" src="https://www.youtube.com/embed/L9BqE01SLeE" frameborder="0" allow="encrypted-media" allowfullscreen style="border-left:58px solid #000;border-right:58px solid #000;"></iframe>
                        Now let's set up your cards by filling out simple forms to generate the code for you! ...
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;height:fit-content;">
                        <b class="header" style="font-size:14px;margin-bottom:5px;">2. Generate Your Page's Rich Card</b>
                        <br>
                        <?php include 'ld.php';?>
                    </div>
                    <div style="position:relative;padding:5px;margin-bottom:10px;">
                        <b class="header" style="font-size:14px;">3. Apply These Changes</b>
                        <br>
                        <div id="ldjson_done" class="prevent" style="position:relative;width:116px;text-align:center;padding:0px 5px 0px 4px;font-size:14px;background:#ff0000;cursor:not-allowed;border-radius:2px;font-style:italic;font-weight:bold;display:inline-block;">
                            <i>Apply Rich Card</i>
                        </div>
                    </div>
                </div>
                <div id="options_done" class="options" style="overflow:visible;position:absolute;le;right:-5px;top: 20px;padding:5px 10px;line-height:20px;cursor:auto;width:83px;display:none;">
                    <div class="option_done unauthorised tip" id="done_save" style="background:none;cursor:pointer;" tip="Exit and save all changes"><b>Save</b></div>
                    <div class="option_done unauthorised tip" id="done_revert" style="background:none;cursor:pointer;" tip="Exit and remove any changes"><b>Dont Save</b></div>
                </div>
                <div style="display:inline-block;width:60px;height:20px;">
                    <div id="button_tutorial" style="position:absolute;padding:3px 10px 0px 10px;height:17px;cursor:pointer;margin-left:9px;"><b>Tutorial</b></div>
                </div>
                <div style="display:inline-block;width:50px;height:20px;">
                    <div id="button_style" class="menu_button" style="position:absolute;padding:3px 10px 0px 10px;height:17px;cursor:pointer;margin-left:9px;"><b>Style</b></div>
                </div>
                <div style="display:inline-block;width:64px;height:20px;">
                    <div id="button_settings" class="menu_button" style="position:absolute;padding:3px 10px 0px 10px;height:17px;cursor:pointer;margin-left:9px;"><b>Settings</b></div>
                </div>
                <div style="display:inline-block;width:72px;height:20px;">
                    <div id="button_visibility" class="menu_button" style="position:absolute;padding:3px 10px 0px 10px;height:17px;cursor:pointer;margin-left:9px;"><b>Rich Card</b></div>
                </div>
                <div style="display:inline-block;width:50px;height:20px;">
                    <div id="button_done" class="menu_button" style="position:absolute;padding:3px 10px 0px 14px;height:17px;cursor:pointer;margin-left:9px;"><b>Exit</b></div>
                </div>
            </div>
        </div>




        <div id="components" class="protect_img_black app" style="display:none;width:360px;height:464px;overflow:hidden;padding:5px;position:fixed;top:calc(100% - 550px);left:calc(50% - 190px);background:#03A9F4;z-index:5;font-size:13px;">
            <div id="components_list"  style="overflow-y:scroll;position:relative;width:350px;height:447px;top:15px;left:-5px;padding:10px;padding-bottom:0px;line-height:20px;background:#03A9F4;color:#ffffff;">
                <div id="scroll_txt" class="component" style="position:relative;padding:5px;margin-bottom:10px;min-height:96px;background:#19b6ff;" scroll="0">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_txt tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Text / Paragraph</b>
                    <br>
                    <img class="protect_img_gray" style="height:25px;position:absolute;" src="https://methodise.me/R/txt.png"/>
                    <div style="height:24px;font-size:9px;padding:5px 0px;color:#000;margin-top:17px;;">
                        <div style="display:inline;padding:4px;">
                            <input id="txt_fontSize" class="tip" tip="Font size" onmousedown="event.stopPropagation();" oninput="doCommand('fontSize')" type="range" min="1" max="7" step="1" value="1" style="cursor:pointer;width:45px;position:relative;top:5px;user-select:auto!important;">
                        </div>
                        <div id="txt_removeFormat" class="tip" tip="Remove (all) formatting" onmousedown="event.preventDefault();" onclick="doCommand('removeFormat')" style="cursor:pointer;display:inline;padding:4px 0px;font-size:11.5px;vertical-align:-1px;">
                            <i class="fas fa-minus-circle"  style="padding:2px;"></i>
                        </div>
                        <div id="txt_bold" class="tip" tip="Bold" onmousedown="event.preventDefault();"onclick="doCommand('bold')" style="cursor:pointer;display:inline;padding:4px 0px;">
                            <i class="fa fa-bold"  style="padding:2px;"></i>
                        </div>
                        <div id="txt_italic" class="tip" tip="Italic" onmousedown="event.preventDefault();"onclick="doCommand('italic')" style="cursor:pointer;display:inline;padding:4px 0px;">
                            <i class="fas fa-italic" style="padding:2px;"></i>
                        </div>
                        <div id="txt_underline" class="tip" tip="Underline" onmousedown="event.preventDefault();" onclick="doCommand('underline')" style="cursor:pointer;display:inline;padding:4px 0px;font-size:10px;vertical-align:-1px;">
                            <i class="fas fa-underline" style="padding:2px;"></i>
                        </div>
                        <div id="txt_strikeThrough" class="tip" tip="Strike through" onmousedown="event.preventDefault();" onclick="doCommand('strikeThrough')" style="cursor:pointer;display:inline;padding:4px 0px;font-size:10px;vertical-align:-1px;">
                            <i class="fas fa-strikethrough" style="padding:2px;"></i>
                        </div>
                        <div id="txt_foreColor" class="tip" tip="Text color (Right click to add the color from the Color Extractor tool)" style="cursor:pointer;display:inline;padding:4px 0px;">
                            <i id="txt_foreColor_color" class="fas fa-font protect_img_black" style="color:#ffdf00;padding:2px;"></i>
                            <div style="overflow:hidden;width:0px;height:0px;display:inline-block;">
                                <input type="color" id="txt_foreColor_picker" oninput="doCommand('foreColor')" onclick="doCommand('foreColor')" value="#ffdf00"/>
                            </div>
                        </div>
                        <div id="txt_backColor" class="tip" tip="Highlight color (Right click to add the color from the Color Extractor tool)" style="cursor:pointer;display:inline;padding:4px 0px;">
                            <i id="txt_backColor_color" class="fas fa-font protect_img_black" style="background:#ffdf00;padding:2px;"></i>
                            <div style="overflow:hidden;width:0px;height:0px;display:inline-block;">
                                <input type="color" id="txt_backColor_picker" oninput="doCommand('backColor')" onclick="doCommand('backColor')" value="#ffdf00"/>
                            </div>
                        </div>
                        <div id="txt_justifyLeft" class="tip" tip="Align left" onmousedown="event.preventDefault();" onclick="doCommand('justifyLeft')" style="cursor:pointer;display:inline;padding:4px 0px;font-size:10px;vertical-align:-1px;">
                            <i class="fas fa-align-left" style="padding:2px;"></i>
                        </div>
                        <div id="txt_justifyCenter" class="tip" tip="Align center" onmousedown="event.preventDefault();" onclick="doCommand('justifyCenter')" style="cursor:pointer;display:inline;padding:4px 0px;font-size:10px;vertical-align:-1px;">
                            <i class="fas fa-align-center" style="padding:2px;"></i>
                        </div>
                        <div id="txt_justifyRight" class="tip" tip="Align right" onmousedown="event.preventDefault();" onclick="doCommand('justifyRight')" style="cursor:pointer;display:inline;padding:4px 3px 4px 0px;font-size:10px;vertical-align:-1px;">
                            <i class="fas fa-align-right" style="padding:2px;"></i>
                        </div>
                        <div style="cursor:pointer;display:inline;padding:4px 4px 4px 0px;">
                            <img id="emojis_toggle" class="protect_img_black tip" tip="Add an emoji (Select from the list)" src="https://methodise.me/R/emoji.png" style="height:12px;position:relative;top:1px;">
                        </div>
                        <div id="txt_createLink" class="tip" tip="Create a text tip (like this tip you are reading now). The user will see it on mouse hover. How To: First select the text that you want the tip to come from, then click here" onmousedown="event.preventDefault();" onclick="doCommand('createLink')" style="cursor:pointer;display:inline;padding:4px 3px 4px 0px;font-size:12.5px;vertical-align:-2px;">
                            <i class="fas fa-question-circle" style="padding:2px;"></i>
                        </div>
                    </div>
                    <div type="text" id="new_txt" class="undo_0" placeholder="paste ... " value="" contenteditable="true" resizable="true" style="resize:vertical;user-select:text;background:#fff;color:#000;vertical-align:bottom;width:252px;max-width:252px;min-width:252px;height:20px;min-height:20px;border:none;outline:none;padding:5px 5px 0px 5px;overflow:hidden;display:block;font-family:Arial;margin:0px;z-index:2;line-height:normal;position:relative;bottom:0px;"></div>
                    <div class="widthet" style="position:absolute;bottom:5px;width:56px;height:25px;right:5px;background:#fff;">
                        <div class="new_txt_width_sub10 widthetbtn tip" style="position:absolute;background:#fff;top:1px;left:1px;bottom:1px;right:43px;cursor:pointer;" tip="Less width -10">
                            <div style="width:0;height:0;border-style:solid;border-width:6px 6px 6px 0;border-color:transparent #7D7D7C transparent transparent;position:absolute;top:6px;left:3px;"></div>
                        </div>
                        <div class="new_txt_width_sub1 widthetbtn tip" style="position:absolute;background:#fff;top:1px;left:15px;bottom:1px;right:29px;color:#7D7D7C;font-weight:bold;text-align:center;line-height:24px;cursor:pointer;" tip="Less width -1">
                            <div style="position:absolute;top:0px;left:4px;color:#7D7D7C;font-weight:bold;font-size:9px;">◂</div>
                        </div>
                        <div class="new_txt_width_add1 widthetbtn tip" style="position:absolute;background:#fff;left:29px;top:1px;right:15px;bottom:1px;color:#7D7D7C;font-weight:bold;text-align:center;line-height:24px;cursor:pointer;" tip="More width +1">
                            <div style="position:absolute;top:0px;left:4px;color:#7D7D7C;font-weight:bold;font-size:9px;">▸</div>
                        </div>
                        <div class="new_txt_width_add10 widthetbtn tip" style="position:absolute;background:#fff;left:43px;top:1px;right:1px;bottom:1px;cursor:pointer;" tip="More width +10">
                            <div style="width:0;height:0;border-style:solid;border-width:6px 0 6px 6px;border-color:transparent transparent transparent#7D7D7C;position:absolute;top:6px;left:3px;"></div>
                        </div>
                    </div>
                    <input type="number" id="new_txt_width" class="undo_1" value="150" placeholder="width" style="display:none;outline:none;border:none;padding:5px;position:absolute;bottom:5px;width:48px;right:5px;">
                </div>
                <div id="scroll_emoji" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="93">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_emoji tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Emoji</b>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/emoji.png"/>
                    <br>
                    <input type="button" id="new_emoji" class="undo_0 tip" value="😀 Change?" tip="Click to choose a different emoji ..." style="cursor:pointer;font-family:arial,NotoColorEmoji;width:324px;border:none;margin-bottom:1px;outline:none;padding:5px;background:#fff;">
                </div>
                <div id="scroll_link" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="210">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_link tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Simple Link</b>
                    <a href="https://archive.is" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:25px 2px 03px 0px;font-size:10px;" class="tip" tip="Convert your link into an indestructable link">Archive</a>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/link.png"/>
                    <br>
                    <input type="text" id="new_link" class="undo_0 tip" placeholder="paste ... " tip="The web address part goes here" value="" style="width:148px;margin-right:4px;border:none;margin-bottom:1px;outline:none;padding:5px;display:inline-block;"/>
                    <input type="text" id="new_link_lable" class="undo_1 tip" placeholder="lable" tip="The Link lable goes here" value="" style="width:148px;border:none;margin-bottom:1px;outline:none;padding:5px;display:inline-block;"/>
                    <input type="text" id="new_link_icon" class="undo_2" placeholder="lable" value="" style="display:none;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif" style="left:132px;"></div>
                </div>
                <div id="scroll_preview" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="309">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_preview tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Article <i style="font-size: 9px;vertical-align: 1px;opacity: 0.7;">(Shows: image, title &amp; description)</i></b>
                    <a href="https://archive.is" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:25px 2px 03px 0px;font-size:10px;" class="tip" tip="Convert your link into an indestructable link">Archive</a>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/preview.png"/>
                    <br>
                    <input type="text" id="new_preview" class="undo_0 tip" placeholder="paste ... " tip="The web address goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_img" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="403">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_img tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Image</b>
                    <a href="https://postimage.org" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:25px 2px 03px 0px;font-size:10px;" class="tip" tip="Upload images from your computer">Upload</a>
                    <a href="https://webcamtoy.com" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:25px 2px 0px 0px;font-size:10px;" class="tip" tip="Take a photo">Webcam</a>
                    <a href="https://pixlr.com" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:25px 2px 0px 0px;font-size:10px;" class="tip" tip="Edit images online much like photoshop">Photoshop</a>
                    <br>
                    <div>
                        <img class="protect_img_gray" style="height:25px;display:inline-block" src="https://methodise.me/R/img.png"/>
                        <div style="display:inline-block;">
                            <label style="position:relative;top:-8px;" class="tip" tip="Makes the image open up full size in another tab">
                                <input type="checkbox" id="new_img_clickable" class="undo_2 tip" value="value" tip="If this is ticked; the user's click will open a full size version of the image in a new tab!" base64="" style="vertical-align:middle;" checked>
                                <b><i>Clickable?</i></b>
                            </label>
                        </div>
                    </div>
                    <input type="text" id="new_img" class="undo_1 tip" placeholder="paste ... " tip="The image address goes here" value="" base64="true" style="width:248px;margin-right:4px;border:none;margin-bottom:1px;outline:none;padding:5px;display:inline-block;">
                    <input type="number" id="new_img_width" class="undo_3 tip" placeholder="width" tip="Image width" style="outline:none;border:none;padding:5px;display:inline-block;width:48px;">
                    <div class="fire"><img src="https://methodise.me/R/fire.gif" style="left:234px;"></div>
                </div>
                <div id="scroll_youtube" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="501">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_youtube tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Youtube video</b>
                    <br>
                    <a href="https://youtube.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">youtube.com</a>
                    <img class="protect_img_conflict" style="height:25px;" src="https://methodise.me/R/youtube.png"/>
                    <br>
                    <input type="text" id="new_youtube" tip="Video address (address bar url or sharing link) goes here" class="undo_0 tip" placeholder="paste ... " value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_dtube" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="600">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_dtube tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>d.tube video</b>
                    <br>
                    <a href="https://d.tube" target="_blank" style="color:#ffffff85;float:right;font-weight:bold;margin:5px 2px 03px 0px;font-size:10px;" class="tip" tip="Visit this site">d.tube</a>
                    <img class="protect_img_conflict" style="height:25px;" src="https://methodise.me/R/dtube.png"/>
                    <br>
                    <input type="text" id="new_dtube" class="undo_0 tip" placeholder="paste ... " tip="Video address (address bar url or sharing link) goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_bitchute" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="694">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_bitchute tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>bitchute video</b>
                    <br>
                    <a href="https://bitchute.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">bitchute.com</a>
                    <img class="protect_img_conflict" style="height:25px;" src="https://methodise.me/R/bitchute.png"/>
                    <br>
                    <input type="text" id="new_bitchute" class="undo_0 tip" placeholder="paste ... " value="" tip="Video address (address bar url or sharing link) goes here" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_liveleak" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="792">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_liveleak tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>liveleak video</b>
                    <br>
                    <a href="https://www.liveleak.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">liveleak.com</a>
                    <img class="protect_img_conflict" style="height:25px;" src="https://methodise.me/R/liveleak.png"/>
                    <br>
                    <input type="text" id="new_liveleak" class="undo_0 tip" placeholder="paste ... " value="" tip="Video address (address bar url or sharing link) goes here" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_vimeo" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="887">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_vimeo tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Vimeo video</b>
                    <br>
                    <a href="https://vimeo.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">vimeo.com</a>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/vimeo.png"/>
                    <br>
                    <input type="text" id="new_vimeo" class="undo_0 tip" placeholder="paste ... " tip="Video address (address bar url or sharing link) goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_soundcloud" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="985">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_soundcloud tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Soundcloud player</b>
                    <br>
                    <a href="https://soundcloud.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">soundcloud.com</a>
                    <img class="protect_img_conflict" style="height:25px;" src="https://methodise.me/R/soundcloud.png"/>
                    <br>
                    <input type="text" id="new_soundcloud" class="undo_0 tip" placeholder="paste ... " tip="Embed code goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_map" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="1083">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_map tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Google Map</b>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/map.png"/>
                    <br>
                    <a href="https://maps.google.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">maps.google.com</a>
                    <input type="text" id="new_map" class="undo_0 tip" placeholder="paste ... " tip="Map (address bar url or share url goes here)" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                    <div class="fire"><img src="https://methodise.me/R/fire.gif"></div>
                </div>
                <div id="scroll_iframe" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="1089">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_iframe tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Other Embed Codes</b>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/iframe.png"/>
                    <br>
                    <input type="text" id="new_iframe" class="undo_0 tip" placeholder="paste ... " tip="Any iframe code we forgot goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                </div>
                <div id="scroll_twithash" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="1182">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_twithash tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>#Twitter</b>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/twitter.png"/>
                    <br>
                    <a href="https://twitter.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">twitter.com</a>
                    <input type="text" id="new_twithash" class="undo_0 tip" placeholder="paste ... " tip="A Twitter hash tag goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                </div>
                <div id="scroll_twitat" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="1316">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_twitat tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>@Twitter</b>
                    <br>
                    <a href="https://twitter.com" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">twitter.com</a>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/twitter.png"/>
                    <br>
                    <input type="text" id="new_twitat" class="undo_0 tip" placeholder="paste ... " tip="A twitter account name goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                </div>
                <div id="scroll_gabhash" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="1316">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_gabhash tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>#Gab</b>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/gab.png"/>
                    <br>
                    <a href="https://gab.ai" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;" class="tip" tip="Visit this site">gab.ai</a>
                    <input type="text" id="new_gabhash" class="undo_0 tip" placeholder="paste ... " tip="A Gab.ai hash tag goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                </div>
                <div id="scroll_gabat" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="1316">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_gabat tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>@Gab</b>
                    <br>
                    <img class="protect_img_gray" style="height:25px;" src="https://methodise.me/R/gab.png"/>
                    <br>
                    <a href="https://gab.ai" target="_blank" style="color:#ffffff85;font-weight:bold;font-size:10px;position:absolute;right:6px;top:30px;;" class="tip" tip="Visit this site">gab.ai</a>
                    <input type="text" id="new_gabat" class="undo_0 tip" placeholder="paste ... " tip="A Gab.ai profile name goes here" value="" style="width:315px;border:none;margin-bottom:1px;outline:none;padding:5px;"/>
                </div>
                <div id="scroll_line" class="component" style="position:relative;padding:5px;margin-bottom:10px;background:#19b6ff;" scroll="1316">
                    <div class="component_ctrl">
                        <div class="ctrl_done new_line tip" tip="Click here, then click the spot on the page where you wan't the object to go"></div>
                    </div>
                    <b>Extenable Line</b>
                    <br>
                    <img class="protect_img_gray" id="line_icon" style="height:25px;" src="https://methodise.me/R/lineV.png"/>
                    <br>
                    <select type="select" id="new_line" class="undo_0 tip" tip="Lines are extendable via a little pully that you will see when the line is on your page" style="width:245px;border:none;margin-bottom:1px;outline:none;padding:5px;background:#fff;">
                        <option selected value="v">⇓ Vertical</option>
                        <option value="h">⇒ Horizontal</option>
                        <option value="l">⇙ Diagonal Left</option>
                        <option value="r">⇘ Diagonal Right</option>
                    </select>
                    <div style="display:block;position:absolute;color:#fff;right:29px;bottom:10px;font-weight:bold;">Color:</div>
                    <input type="color" id="new_line_color" class="undo_1 tip" value="#ffffff" style="border:0px;background-color:unset;width:20px;height:24px;position:absolute;right:2px;" tip="Choose the color for this line (Right click to add the color from the Color Extractor tool)">
                </div>
            </div>
            <div id="components_drag" style="width:360px;height:10px;padding:5px;position:absolute;top:0px;left:0px;background:#01a2ea;">
            </div>
            <div id="components_hide" style="position:absolute;top:0px;right:0px;width:20px;text-align:center;line-height:20px;color:#007ab1;cursor:pointer;">
                <div style="font-weight:bold;font-size:16px;transform:rotate(45deg);">+</div>
            </div>
        </div>





        <div id="notepad" class="protect_img_black app" style="display:none;width:250px;height:10px;padding:5px;position:fixed;top:calc(100% - 380px);left:calc(50% - 134px);background:#eddb3d;z-index:5;">
            <div id="notepad_drag" style="width:250px;height:10px;padding:5px;position:absolute;top:0px;left:0px;background:#eddb3d;">
            </div>
            <div id="notepad_hide" style="position:absolute;top:0px;right:0px;bottom:0px;width:20px;text-align:center;line-height:20px;color:#bd9c36;cursor:pointer;">
                <div style="font-weight:bold;transform:rotate(45deg);">+</div>
            </div>
            <div id="notepad_text" contenteditable="true" spellcheck="false" style="font-family:monospace;font-size:10px;font-weight:bold;overflow:auto;outline:none;width:250px;height:300px;position:absolute;top:20px;left:0px;background:#f5ea74;padding:5px;color:#614037;"></div>
        </div>


        <div id="emojis" class="protect_img_black app" style="display:none;width:250px;height:10px;padding:5px;position:fixed;top:calc(100% - 380px);left:calc(50% - 134px);background:#03a0f5;z-index:5;">
            <div id="emojis_drag" style="width:250px;height:10px;padding:5px;position:absolute;top:0px;left:0px;background:#03a0f5;">
            </div>
            <div id="emojis_hide" style="position:absolute;top:0px;right:0px;bottom:0px;width:20px;text-align:center;line-height:20px;color:#005B81;cursor:pointer;">
                <div style="font-weight:bold;transform:rotate(45deg);">+</div>
            </div>
            <div id="emojis_list" style="font-size:16px;font-weight:bold;overflow:auto;outline:none;width:250px;height:300px;position:absolute;top:20px;left:0px;background:#fff;padding:5px;color:#cecece;user-select:text;">
                <?php include 'emoji.php';?>
            </div>
        </div>



        <div id="tipsmouse" style="position:absolute;top:0px;left:0px;width:200px;height:0px;pointer-events:none;z-index:7;">
            <div id="tips" style="display:none;bottom:0px;right:0px;position:absolute;border:1px solid #fff;padding:2px;background:#000000;color:#ffffff;font-weight:bold;max-width:200px;width:fit-content;font-size:10px;pointer-events:none;"></div>
        </div>


        <div id="mouse" style="position:absolute;top:0px;left:0px;width:0px;height:0px;pointer-events:none;opacity:0.0001;z-index:6;"></div>

        <div id="test_area" style="position:absolute;left:-99999px;top:-99999px;">
            <div id="new_txt_test_width" class="txt"></div>
            <img id="new_img_test_width"/>
        </div>




        <div id="working" style="position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:9;cursor:progress;"></div>



        <script>

        window.onerror=function(msg,url,lineNo,columnNo,error){
            console.log(msg,url,lineNo,columnNo);
            console.trace(error);
            if($.localStorage.getItem('debug')){
                alert(error.toString()+'\n\n@'+lineNo+':'+columnNo+':'+'editor.php');
                }
            return false;
            };

        var doCommand;

        $(function(){
            if(navigator.userAgent.toLowerCase().indexOf('firefox')!==-1){
                $('head').append('<link rel="stylesheet" type="text/css" href="https://methodise.me/firefox.css">');
                }

            window.correct_img=function(img){
                var src=img.src.replace('https://methodise.me/middleman.php?site=','');
                img.onerror='';
                setTimeout(function(){
                    getimg(src,function(b64,bool){
                        img.src=b64;
                        });},333,img,getimg);};



            $('.link').each(function(i,v){
                geticon($(v).find('a').attr('url'),function(src,bool){if(bool){$(v).find('img').attr({'src':src})}});
                });



            $('.tip').hover(function(){
                $('#tips').text($(this).attr('tip'));
                $('#tips').show();
                }
            , function(){
                $('#tips').hide();
                });
            document.getElementById('body').onmousemove=function(ev){
                $('#tipsmouse').css({left:(ev.pageX-215)+'px',top:(ev.pageY-10)+'px'});
                };



            var loaded=0;

            var G={};
            var save=function(reason){
                if(me.backup&&evercookie&&ec){ec.set('me',JSON.stringify(me));}
                else{$.localStorage.setItem('me',JSON.stringify(me));}
                G.page=page;
                return;
                };
            G.saved=function(){
                me=JSON.parse($.localStorage.getItem('me'));
                return;
                };


            G.preview_position=function(){
                if($('#mouse').position().left>($('#page_height').width()/2)){
                    $('#mouse > .found').css({'display':'block','left':'','right':'0px'});
                    }
                else{
                    $('#mouse > .found').css({'display':'block','left':'0px','right':''});
                    }
                if($('#mouse').position().top<($('#page_height').height()/2)){
                    $('#mouse > .found').css({'display':'block','top':'0px','bottom':''});
                    }
                else{
                    $('#mouse > .found').css({'display':'block','top':'','bottom':'0px'});
                    }
                return;
                };

            function insertHtmlAtCursor(html){
                var sel,range,node;
                if(window.getSelection){
                    sel=window.getSelection();
                    if(sel.getRangeAt&&sel.rangeCount){
                        sel.getRangeAt(0).deleteContents();
                        range=window.getSelection().getRangeAt(0);
                        node=range.createContextualFragment(html);
                        range.insertNode(node);
                        }}
                else if(document.selection&&document.selection.createRange){
                    document.selection.createRange().pasteHTML(html);
                    }
                return;
                }
            $('#emojis_list > span').on('click',function(ev){
                $('#emojis_list > span').removeClass('emoji');
                $(this).addClass('emoji');
                if(emojis_reason=='txt'){
                    $('#new_txt').focus();
                    setTimeout(function(){
                        insertHtmlAtCursor($('.emoji').text());
                        setTimeout(function(){$('#new_txt').trigger('input');},100);
                        },100);}
                else if(emojis_reason=='large'){
                    $('#new_emoji').val($('.emoji').text()+' Change?');
                    if(edit){edit.find('.emoji_large').text($('.emoji').text());}
                    }});


            $('#txt_backColor').on('mousedown',function(ev){
                ev.preventDefault();
                if(ev.buttons==1){document.getElementById('txt_backColor_picker').click();}
                else if(ev.buttons==2){
                    $('#txt_backColor_picker').val(surfacecurve.color($('#color_picker').css('background-color')).hex6());
                    document.getElementById('txt_backColor_picker').click();
                    }});
            $('#txt_backColor')[0].oncontextmenu=function(){return false;};
            $('#txt_foreColor').on('mousedown',function(ev){
                ev.preventDefault();
                if(ev.buttons==1){document.getElementById('txt_foreColor_picker').click();}
                else if(ev.buttons==2){
                    $('#txt_foreColor_picker').val(surfacecurve.color($('#color_picker').css('background-color')).hex6());
                    document.getElementById('txt_foreColor_picker').click();
                    }});
            $('#txt_foreColor')[0].oncontextmenu=function(){return false;};
            $('#new_line_color').on('mousedown',function(ev){
                if(ev.buttons==2){
                    ev.preventDefault();
                    $(this).val(surfacecurve.color($('#color_picker').css('background-color')).hex6());
                    document.getElementById('new_line_color').click();
                    setTimeout(function(){$('#new_line_color').trigger('input');},500);
                    }});
            $('#new_line_color')[0].oncontextmenu=function(){return false;};
            $('#bg_color').on('mousedown',function(ev){
                if(ev.buttons==2){
                    ev.preventDefault();
                    $(this).val(surfacecurve.color($('#color_picker').css('background-color')).hex6());
                    document.getElementById('bg_color').click();
                    }});
            $('#bg_color')[0].oncontextmenu=function(){return false;};
            $('#box_color').on('mousedown',function(ev){
                if(ev.buttons==2){
                    ev.preventDefault();
                    $(this).val(surfacecurve.color($('#color_picker').css('background-color')).hex6());
                    document.getElementById('box_color').click();
                    }});
            $('#box_color')[0].oncontextmenu=function(){return false;};
            $('#text_color').on('mousedown',function(ev){
                if(ev.buttons==2){
                    ev.preventDefault();
                    $(this).val(surfacecurve.color($('#color_picker').css('background-color')).hex6());
                    document.getElementById('text_color').click();
                    }});
            $('#text_color')[0].oncontextmenu=function(){return false;};
            $('#link_color').on('mousedown',function(ev){
                if(ev.buttons==2){
                    ev.preventDefault();
                    $(this).val(surfacecurve.color($('#color_picker').css('background-color')).hex6());
                    document.getElementById('link_color').click();
                    }});
            $('#link_color')[0].oncontextmenu=function(){return false;};



            G.setup_preview=function(id){
                clearTimeout(G.previews);
                $('#'+id).on('mouseenter',function(){
                    if($('#mouse').html()==''){
                        $(this).find('.found').appendTo('#mouse');
                        G.preview_position();
                        G.previews=setTimeout(function(){$('#mouse,#mouse > .found').animate({'opacity':1},500);},500);
                        }});
                $('#'+id).on('mouseleave',function(){
                    if($('#mouse > .found').length){
                        clearTimeout(G.previews);
                        $('#mouse').css({'opacity':0});
                        $('#mouse > .found').css({'opacity':0});
                        $('#mouse > .found').appendTo(this);
                        }});
                return;
                };






            function REWIRE(){
                $(function(){
                    $('#page_height').append(
                        '<div id="LOADER"style="position:fixed;height:2px;left:0px;right:0px;bottom:20px;color:#FFFFFF;z-index:4;">'
                    +		'<div id="LOADERIMG" style="position:absolute;font-weight:bold;font-size:8px;padding:3px;padding-right:5px;left:0px;bottom:0px;background:#FF0000;"><i>Loading API</i></div>'
                    +		'<div id="LOADERBAR" style="width:0px;height:2px;position:absolute;bottom:0px;left:0px;transition:700ms linear;"></div>'
                    +	'</div>'
                        );
                    var s={};
                    var loader={img:'',text:false,bar:{background:'#FF0000',color:'#FF0000',max:$('#page_height').width()}};
                    G.page=page;
                    G.me=me;
                    G.editing=true;
                    var noreplayattack=forge.util.bytesToHex(forge.pki.rsa.generateKeyPair({bits:896,e:0x10001}).publicKey.encrypt(''+(+new Date()+5000)+''));
                    $.getScript('https://methodise.me/c.REWIRE2.js',function(){connect('methodise.me',[0],['10002/?'+noreplayattack],s,G,loader,'C.me.js?'+(+new Date()));});
                    });}

            var page_height;

            var ec;
            if(evercookie){ec=new evercookie({history:false,java:false,silverlight:false,baseurl:'/S/evercookie',asseturi:'/assets'});}
            G.ec=ec;



            if((me=JSON.parse($.localStorage.getItem('me')))){}
            else{
                me={
                    notes:''
                ,   monero_public:undefined
                ,   publisher_key:undefined
                ,   personal_miner:undefined
                ,   mining_settings:[3,3,2]
                ,   drafts:{}
                ,   published:[]
                    };
                setTimeout(function(){
                if(evercookie&&ec){
                    ec.get("me",function(lost){
                        if(lost&&lost!==''){
                            ec.set('me',lost);
                            me=JSON.parse(lost);
                            }
                        else{window.location='https://methodised.me/?404'}//guests should not be here!
                        });}
                },0);
                }


            if(!me.drafts['<?php echo $pid;?>']&&me.published.indexOf('<?php echo $pid;?>')==-1&&$('.box').length!==0){window.location.href='https://methodise.me/?<?php echo $pid;?>';}


            var code={
                cy:
                [['a','c','1','l','D','M','X']	//0
                ,['d','f','3','C','L','N']		//1
                ,['g','h','i','7','V','H']		//2
                ,['j','t','b','z','R','O']		//3
                ,['m','n','o','E','I','P']		//4
                ,['p','q','r','4','G','K']		//5
                ,['s','u','k','9','F','Z','J']	//6
                ,['v','w','x','6','T','W']		//7
                ,['y','2','8','B','Y','Q']		//8
                ,['0','5','e','A','U','S']]		//9
            ,	make:function(t){//randomly encrypt a timestamp
                    var e='';
                    t=''+t;
                    for(var n=0;n<t.length;n+=1){
                        e+=this.cy[Number(t[n])][Math.floor(Math.random()*this.cy[Number(t[n])].length)]
                        }
                    return e;
                    }};


            function nowstring(d){
                d.year=(d.getFullYear()+'').slice(3);
                d.start=new Date(d.getFullYear(),0,0);
                d.diff=(d-d.start)+((d.start.getTimezoneOffset()-d.getTimezoneOffset())*60*1000);
                d.oneDay=1000*60*60*24;
                d.day=Math.floor(d.diff/d.oneDay)+'';
                for(;d.day.length<3;d.day='0'+d.day);
                d.hour=d.getHours()+'';
                if(d.hour.length<2){d.hour='0'+d.hour;}
                d.mins=d.getMinutes()+'';
                if(d.mins.length<2){d.mins='0'+d.mins;}
                d.milli=(d.getMilliseconds()+'').slice(2);
                if(d.mins.length<2){d.mins='0'+d.mins;}
                return d.year+d.day+d.hour+d.mins+d.milli;
                }


            var draft=code.make(nowstring(new Date()));



            if(!window.location.href.split('?')[1]){
                window.history.replaceState({},'?'+draft,'?'+draft);
                }


            var page;



            <?php
            $page=file_get_contents('http://methodise.me:10001/page?id='.$pid);
            if($page){echo 'page='.$page.';';}
            ?>






            if(!page){
                page=me.drafts[(window.location.href.split('?')[1]).split('&')[0]]//todo: or GOT from server echoed on line above
                ||{
                    'id':draft
                ,   'date':(+new Date())
                ,   'cover':''
                ,   'title':''
                ,   'description':''
                ,   'keywords':''
                ,   'mines':''
                ,   'key':''
                ,   'url':''
                ,   'repeat':'true'
                ,   'bg':'rgba(237,193,2,1)'
                ,   'blur':'0'
                ,   'box':'rgba(255,255,255,0.5)'
                ,   'text':'rgba(0,0,0,1)'
                ,   'link':'rgba(255,255,255,1)'
                ,   'line':'rgba(255,255,255,1)'
                ,   'ui':'0,0,0,100'
                ,   'logo':'0'
                ,   'size':'0x0'
                ,   'board':[]
                ,   'links':{'blocked':[]}
                    };
                if(window.location.href!=='https:methodise.me/editor.php?'+page.id){window.history.replaceState({},'?'+page.id,'?'+page.id);}
                if(!me.drafts[page.id]&&!page.published){
                    me=JSON.parse($.localStorage.getItem('me'));
                    me.drafts[page.id]=page;
                    save('new draft');
                    }}
            else if(!page.published){
                $('#header').append('<div class="unauthorised" style="pointer-events:none;font-style:italic;font-weight:bold;position:absolute;width:50px;height:20px;line-height:20px;text-align:center;left:50%;margin-left:-25px;top:0px;">Draft</div>');
                $('#comments_area').hide();
                }
            else if(page.published){
                $('#header').append('<div class="unauthorised" style="pointer-events:none;font-style:italic;font-weight:bold;position:absolute;width:50px;height:20px;line-height:20px;text-align:center;left:50%;margin-left:-25px;top:0px;">Published</div>');
                $('#comments_area').hide();
                }

            window.onbeforeunloads=true;
            if(page.published){
                var original=JSON.stringify(page.board);
                window.onbeforeunload=function(){
                    window.onbeforeunload=null;
                    console.log(window.onbeforeunloads,JSON.stringify(page.board),'!==',original,JSON.stringify(page.board)!==original);
                    if(window.onbeforeunloads&&JSON.stringify(page.board)!==original){
                        return 'Are you sure you want to leave? You have unsaved changes on the page!';
                        }};}




            if(!me.tutorial){
                //xx11
                $('.tutorial').show();
                $('#board').addClass('blur_board');
                }

            $('#button_tutorial').on('click',function(){
                $('.tutorial').toggle();
                $('.options').hide();
                $('.menu_button').removeClass('tab');
                $('.app').hide();
                if($('#board').hasClass('blur_board')){
                    $('#board').removeClass('blur_board');
                    $(this).removeClass('tab');
                    }
                else{
                    $('#board').addClass('blur_board');
                    $(this).addClass('tab');
                    }
                me.tutorial='hidden';
                });

            $('#page_height').on('mousedown',function(){
                $('.menu_button').removeClass('tab');
                $('.options').hide();
                });



            function getSelectionTextAndContainerElement(){
                var text = "", containerElement = null;
                if (typeof window.getSelection != "undefined") {
                    var sel = window.getSelection();
                    if (sel.rangeCount) {
                        var node = sel.getRangeAt(0).commonAncestorContainer;
                        containerElement = node.nodeType == 1 ? node : node.parentNode;
                        text = sel.toString();
                    }
                } else if (typeof document.selection != "undefined" &&
                           document.selection.type != "Control") {
                    var textRange = document.selection.createRange();
                    containerElement = textRange.parentElement();
                    text = textRange.text;
                }
                return {
                    text: text,
                    containerElement: containerElement
                };}





            if(page.size=='0x0'){
                page.size=$('#board_bg').width()+'x'+$('#board_bg').height();
                }
            function check_out_of_range(){//edge
                var change=false;
                $('.box').each(function(i,v){
                    if(Number($(v).css('top').replace('px',''))>(($('#board').height()-$(v).height())-0)){// +bottom / +100%
                        change=true;
                        $(v).css({'top':(($('#board').height()-$(v).height())-0)+'px'});
                        }
                    if(Number($(v).css('left').replace('px',''))>(($('#board').width()-$(v).width())-0)){// +right / +100%
                        change=true;
                        $(v).css({'left':(($('#board').width()-$(v).width())-10)+'px'});
                        }
                    if(Number($(v).css('top').replace('px',''))<(-10)){// -top -0%
                        change=true;
                        $(v).css({'top':(0)+'px'});
                        }
                    if(Number($(v).css('left').replace('px',''))<(-10)){// -left -0%
                        change=true;
                        $(v).css({'left':(0)+'px'});
                        }
                    if(change){save('off edge snap back');}
                    });
                return;
                }

            var out_of_range;
            function board_size(){
                $('#board').css({'width':page.size.split('x')[0]+'px','height':page.size.split('x')[1]+'px','right':'auto','bottom':'auto'});
                if($('#board').width()<$('#page_height').width()){
                    $('#board').css({'margin-left':(($('#page_height').width()-$('#board').width())/2)+'px'});
                    $('#page_height').css({'overflow-x':'hidden'});
                    }
                else{$('#page_height').css({'overflow-x':'auto'});}
                if($('#board').height()<$('#page_height').height()){
                    $('#board').css({'margin-top':(($('#page_height').height()-$('#board').height())/2)+'px'});
                    $('#page_height').css({'overflow-y':'hidden'});
                    }
                else{$('#page_height').css({'overflow-y':'auto'});}
                setTimeout(function(){
                    $('#page_height').css({'bottom':'20px','height':''});
                    if(parseInt($('#page_height').height())==parseInt($('#board').height())){$('#board').css({'margin-top':''});}
                    if(parseInt($('#page_height').width())==parseInt($('#board').width())){$('#board').css({'margin-left':''});}
                    },100);
                if(loaded==1){
                    clearTimeout(out_of_range);
                    out_of_range=setTimeout(function(){
                        check_out_of_range();
                        collect('board_size because loaded==',loaded);
                        },1000);
                    }
                return;
                }
            board_size();

            $('#board_width').val(page.size.split('x')[0]);
            $('#board_height').val(page.size.split('x')[1]);
            $('.board_width_sub10').on('mousedown',function(){
                if($('#board_width').val()>400){
                    $('#board_width').val(Number($('#board_width').val())-10);
                    $('#board_width').trigger('input');
                    }});
            $('.board_width_add10').on('mousedown',function(){
                    $('#board_width').val(Number($('#board_width').val())+10);
                    $('#board_width').trigger('input');
                    });
            $('.board_height_sub10').on('mousedown',function(){
                if($('#board_height').val()>300){
                    $('#board_height').val(Number($('#board_height').val())-10);
                    $('#board_height').trigger('input');
                    }});
            $('.board_height_add10').on('mousedown',function(){
                    $('#board_height').val(Number($('#board_height').val())+10);
                    $('#board_height').trigger('input');
                    });
            $('.board_width_sub1').on('mousedown',function(){
                if($('#board_width').val()>400){
                    $('#board_width').val(Number($('#board_width').val())-1);
                    $('#board_width').trigger('input');
                    }});
            $('.board_width_add1').on('mousedown',function(){
                    $('#board_width').val(Number($('#board_width').val())+1);
                    $('#board_width').trigger('input');
                    });
            $('.board_height_sub1').on('mousedown',function(){
                if($('#board_height').val()>300){
                    $('#board_height').val(Number($('#board_height').val())-1);
                    $('#board_height').trigger('input');
                    }});
            $('.board_height_add1').on('mousedown',function(){
                    $('#board_height').val(Number($('#board_height').val())+1);
                    $('#board_height').trigger('input');
                    });
            $('#board_width,#board_height').on('input',function(){
                page.size=$('#board_width').val()+'x'+$('#board_height').val();
                board_size();
                clearTimeout(out_of_range);
                out_of_range=setTimeout(function(){
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].size=page.size;}
                    save('#board_width,#board_height input');
                    },500);});


            function page_height_change(){
                $('#page_height').css({'bottom':'20px','height':''});//reset
                page_height=$('#page_height').height()+20;
                $('#page_height').css({'bottom':'','height':page_height+'px'});
                $('#options_visibility').css({'height':(page_height-30)+'px'});
                return;
                }
            page_height_change();
            window.onresize=function(event){
                page_height_change();
                setTimeout(function(page_height_change){page_height_change();},2000,page_height_change);
                board_size();
                };




            var board=[];
            var collecting=false,recollect=false,collector='timer';
            function collect(reason){
                console.trace(reason);
                if(!collecting&&(collecting=true)){
                    var length=$('.box').length;
                    board=[];
                    if($('#board').html().indexOf('¬')!==-1){$('#board').html($('#board').html().replace(/\¬/g,''));}
                    $('.box').each(function(i,v){
                        if($(v).attr('type')=='txt'){                   v='t¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('.txt').html()+'¬'+$(v).width();}
                        else if($(v).attr('type')=='emoji'){            v=':D¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).text();}
                        else if($(v).attr('type')=='link'){             v='a¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('a').attr('url')+'¬'+$(v).text();}
                        else if($(v).attr('type')=='preview'){          v='p¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('a').attr('url');}
                        else if($(v).attr('type')=='img'){              v='i¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('a').attr('url')+'¬'+$(v).hasClass('clickable')+'¬'+$(v).find('img').width();}
                        else if($(v).attr('type')=='youtube'){          v='e0¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe').attr('src').replace('https://www.youtube.com/embed/','');}
                        else if($(v).attr('type')=='dtube'){            v='e1¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe').attr('src').replace('https://emb.d.tube/#!/','');}
                        else if($(v).attr('type')=='bitchute'){         v='e5¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe').attr('src').replace('https://www.bitchute.com/embed/','');}
                        else if($(v).attr('type')=='liveleak'){         v='e6¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe').attr('src').replace('https://www.liveleak.com/view?i=','');}
                        else if($(v).attr('type')=='vimeo'){            v='e2¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe').attr('src').replace('https://player.vimeo.com/video/','');}
                        else if($(v).attr('type')=='soundcloud'){       v='e3¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe').attr('src');}
                        else if($(v).attr('type')=='map'){              v='e4¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe').attr('src');}
                        else if($(v).attr('type')=='iframe'){           v='f¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('iframe')[0].outerHTML;}
                        else if($(v).attr('type')=='down'){             v='m0¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+(($(v).find('a').attr('url').split('?')[1]).split('&')[0]);}
                        else if($(v).attr('type')=='up'){               v='m1¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+(($(v).find('a').attr('url').split('?')[1]).split('&')[0]);}
                        else if($(v).attr('type')=='twithash'){         v='#t¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).text();}
                        else if($(v).attr('type')=='twitat'){           v='@t¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).text();}
                        else if($(v).attr('type')=='gabhash'){          v='#g¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).text();}
                        else if($(v).attr('type')=='gabat'){            v='@g¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).text();}
                        else if($(v).attr('type')=='line'){
                            var c=($(v).find('.line').css('background-color'))+'';
                            if($(v).hasClass('deg45l')){//position gets the wrong position due to tansform rotate
                                v='|l¬'+$(v).position().top+'¬'+$(v).css('left').replace('px','')+'¬'+$(v).find('.line').height()+'¬'+(surfacecurve.color(c).hex6()).replace('#','');
                                }
                            else if($(v).hasClass('deg45r')){//position gets the wrong position due to tansform rotate
                                v='|r¬'+$(v).position().top+'¬'+$(v).css('left').replace('px','')+'¬'+$(v).find('.line').width()+'¬'+(surfacecurve.color(c).hex6()).replace('#','');
                                }
                            else if($(v).find('.line').hasClass('h')){
                                v='|h¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('.line').width()+'¬'+(surfacecurve.color(c).hex6()).replace('#','');
                                }
                            else{
                                v='|v¬'+$(v).position().top+'¬'+$(v).position().left+'¬'+$(v).find('.line').height()+'¬'+(surfacecurve.color(c).hex6()).replace('#','');
                                }}
                        board[board.length]=v;
                        });
                    page.board=board;
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].board=page.board;}
                    save(reason);
                    collecting=false;
                    if(recollect&&(recollect=false)){collect(reason+' recollect');}
                    return;
                    }
                else{
                    recollect=true;
                    return;
                    }};




            function plotOnBell(x,scale){
                scale=scale||false;
                var stdD=.125
                var mean=.5
                if(scale){return 1/((1/(stdD*Math.sqrt(2*Math.PI)))*Math.pow(Math.E,-1*Math.pow(x-mean,2)/(2*Math.pow(stdD,2))));}
                else{return ((1/(stdD*Math.sqrt(2*Math.PI)))*Math.pow(Math.E,-1*Math.pow(x-mean,2)/(2*Math.pow(stdD,2))))*plotOnBell(.5,true);}
                }
            function showquality(){
                setTimeout(function(page){
                    console.log('showquality');
    				var types=[];
    				for(var i=0,box,type;i<page.board.length;i+=1){
    					box=(page.board[i].split('¬')).slice(3).join('¬');
    					type=page.board[i].split('¬')[0];
    					if(types.indexOf(type)==-1){types.push(type);}
    					}
    				$('#page_quality').text(Math.ceil(
                        (plotOnBell(page.board.length/72)*100)//goldielocks number (how many items)
                    +   ((page.board.length*types.length)-page.board.length))//how diverse is the board
                    +	Math.ceil(plotOnBell(($('#board').text().length/2000))*100)//goldielocks text character length (prefered length 500-1500)
                        );
    				return;
                    },1000,page);}
            window.showquality=showquality;




            var box;
            function display(cb){
                $('.box').remove();
                $('#page_height').append(
                    '<div id="LOADER_D"style="position:fixed;height:2px;left:0px;right:0px;bottom:20px;color:#FFFFFF;z-index:4;">'
                +		'<div id="LOADERIMG_D" style="position:absolute;font-weight:bold;font-size:8px;padding:3px;padding-right:5px;left:0px;bottom:0px;background:#FF0000;"><i>Loading Draft</i></div>'
                +		'<div id="LOADERBAR_D" style="width:0px;height:2px;position:absolute;bottom:0px;left:0px;transition:700ms linear;background:#ff0000;"></div>'
                +	'</div>'
                    );
                function next(i){
                    if(i<page.board.length-1){loop((i+1));}
                    else{
                        setTimeout(function(){$('#LOADER_D').remove();},800);
                        if(cb){
                            $('.box').drags({handle:".box_drag"});
                            cb();
                            }}}
                function loop(i){
                    $('#LOADERBAR_D').css({'width':(($('#page_height').width()/(page.board.length-1))*i)+'px'});
                    box=page.board[i].split('¬');
                    if(box[0]=='t'){new_txt(box[3],box[4],box[1],box[2]);next(i);}
                    else if(box[0]==':D'){new_emoji(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='a'){
                        geticon(box[3],function(icon,bool){
                            new_link(box[3],box[4],icon,box[1],box[2]);
                            next(i);
                            });}
                    else if(box[0]=='p'){
                        getpreview(box[3],function(object,bool){
                            new_preview(object,box[1],box[2]);
                            next(i);
                            });}
                    else if(box[0]=='i'){
                        getimg(box[3],function(b,bool){
                            new_img(b,box[3],box[5],box[4],box[1],box[2]);
                            next(i);
                            });}
                    else if(box[0]=='e0'){new_youtube(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='e1'){new_dtube(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='e5'){new_bitchute(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='e6'){new_liveleak(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='e2'){new_vimeo(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='e3'){new_soundcloud(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='e4'){new_map(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='f'){try{new_iframe(box[3],box[1],box[2]);next(i);}catch(e){next(i);}}
                    else if(box[0]=='m0'){new_down(box[3],box[1],box[2]);G.setup_preview(i);next(i);}
                    else if(box[0]=='m1'){new_up(box[3],box[1],box[2]);G.setup_preview(i);next(i);}
                    else if(box[0]=='#t'){new_twithash(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='@t'){new_twitat(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='#g'){new_gabhash(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='@g'){new_gabat(box[3],box[1],box[2]);next(i);}
                    else if(box[0][0]=='|'){new_line(box[0][1],box[3],box[4],box[1],box[2]);next(i);}
                    }
                next(-1);
                }





            var ld=[],lderr=false;
            $('.ldjson').on('input paste',function(){
                ld=[];
                if($('#ldjson1').val()!==''){
                    $('#ldjson1').val(
                        $('#ldjson1').val().replace('<'+'script type="application/ld+json">','').replace("<\/script>",'')
                        );
                    lderr=false;
                    try{JSON.parse($('#ldjson1').val());}catch(e){lderr=true;}
                    if(!lderr){ld.push(JSON.parse($('#ldjson1').val()));}
                    }
                if($('#ldjson2').val()!==''){
                    $('#ldjson2').val(
                        $('#ldjson2').val().replace('<'+'script type="application/ld+json">','').replace("<\/script>",'')
                        );
                    lderr=false;
                    try{JSON.parse($('#ldjson2').val());}catch(e){lderr=true;}
                    if(!lderr){ld.push(JSON.parse($('#ldjson2').val()));}
                    }
                if($('#ldjson3').val()!==''){
                    $('#ldjson3').val(
                        $('#ldjson3').val().replace('<'+'script type="application/ld+json">','').replace("<\/script>",'')
                        );
                    lderr=false;
                    try{JSON.parse($('#ldjson3').val());}catch(e){lderr=true;}
                    if(!lderr){ld.push(JSON.parse($('#ldjson3').val()));}
                    }
                $('#ldjsonfinal').val(JSON.stringify(ld,null,"\t"));
                });
            $('#ldjson_done').on('click',function(){
                ld=$('#ldjsonfinal').text().replace(/s+/g,'');
                try{JSON.stringify(ld);}catch(e){ld='//nothingselected';}
                console.log('_'+ld+'_');
                if(ld!="//nothingselected"){
                    me=JSON.parse($.localStorage.getItem('me'));
                    page.ld=JSON.stringify(ld);
                    if(me.drafts[page.id]){
                        me.drafts[page.id].ld=page.ld;
                        alert('Success! Your rich card has been updated!');
                        }
                    else{
                        alert('Success! Changes to your rich card will take effect when you save and exit the editor');
                        }
                    save('ld');
                    }});
            if(page.ld){try{$('#ldjsonfinal').val(JSON.stringify(JSON.parse(page.ld),null,"\t"));}catch(e){console.log('Bad rich card data',page.ld);}}



            var menu_button;
            $('.menu_button').click(function(){
                $('.menu_button').removeClass('tab');
                menu_button=$(this).attr('id').split('_')[1];
                $('.options').not('#options_'+menu_button).hide();
                $('#options_'+menu_button).toggle();
                if($('#options_'+menu_button).css('display')!=='none'){$('#button_'+menu_button).addClass('tab');}
                else{$('#button_'+menu_button).removeClass('tab');}
                $('#button_tutorial').removeClass('tab');
                $('#board').removeClass('blur_board');
                $('.tutorial').hide();
                });






            var t={};
            var ID=$('.box').length-1;

            G.done=(window.location.href.split('?')[1]).split('&')[0];



            var useless=[
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.','|',' ',
                'about','above','across','after','afterwards','again','against','all','almost','alone','along','already','also','although','always','am','among','amongst','amoungst','amount',
                'an','and','another','any','anyhow','anyone','anything','anyway','anywhere','are','around','as','at','back','be','became','because','become','becomes','becoming','been','before',
                'beforehand','behind','being','below','beside','besides','between','beyond','bill','both','bottom','but','by','call','can','cannot','cant','co','computer','con','could','couldnt',
                'cry','de','describe','detail','do','done','down','due','during','each','eg','eight','either','eleven','else','elsewhere','empty','enough','etc','even','ever','every','everyone',
                'everything','everywhere','except','few','fifteen','fify','fill','find','fire','first','five','for','former','formerly','forty','found','four','from','front','full','further',
                'get','give','go','had','has','hasnt','have','he','hence','her','here','hereafter','hereby','herein','hereupon','hers','him','his','how','however','hundred','ie','if','in','inc',
                'indeed','interest','into','is','it','its','keep','last','latter','latterly','least','less','ltd','made','many','may','me','meanwhile','might','mill','mine','more','moreover',
                'most','mostly','move','much','must','my','name','namely','neither','never','nevertheless','next','nine','no','nobody','none','noone','nor','not','nothing','now','nowhere','of',
                'off','often','on','once','one','only','onto','or','other','others','otherwise','our','ours','ourselves','out','over','own','part','per','perhaps','please','put','rather','re',
                'same','see','seem','seemed','seeming','seems','serious','several','she','should','show','side','since','sincere','six','sixty','so','some','somehow','someone','something',
                'sometime','sometimes','somewhere','still','such','system','take','ten','than','that','the','their','them','themselves','then','thence','there','thereafter','thereby','therefore',
                'therein','thereupon','these','they','thick','thin','third','this','those','though','three','through','throughout','thru','thus','to','together','too','top','toward','towards',
                'twelve','twenty','two','un','under','until','up','upon','us','very','via','was','we','well','were','what','whatever','when','whence','whenever','where','whereafter','whereas',
                'whereby','wherein','whereupon','wherever','whether','which','while','whither','who','whoever','whole','whom','whose','why','will','with','within','without','would','yet','you'
                ,'your','yours','yourself','yourselves'
                ];


            $('#settings_cover').on('input',function(){
                $('#preview_settings_cover').css({'background':page.bg});
                page.cover=$(this).val().replace(/"/g,'');
                if(page.cover.indexOf('?')!==-1){
                    page.cover=page.cover.split('?')[0];
                    $('#settings_cover').val(page.cover);
                    }
                var b=new Image();
                b.onload=function(){
                    $('#preview_settings_cover').find('img').attr({'src':page.cover,'onerror':'correct_img(this);'});
                    if($('#preview_settings_cover > img')[0].naturalWidth>$('#preview_settings_cover > img')[0].naturalHeight){
                        $('#preview_settings_cover > img').css({'max-height':'100%','min-width':'100%','max-width':'','min-height':''});
                        }
                    else{
                        $('#preview_settings_cover > img').css({'max-width':'100%','min-height':'100%','max-height':'','min-width':''});
                        }
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].cover=page.cover;}
                    save('#settings_cover input');
                    };
                b.onerror=function(){
                    if($(this).val()!==''){
                        alert('This image is failing to load due to some weird error on the 3rd party website ... Uploading it to any image hosting site like "photobucket.com" will get around this issue!');
                        }
                    $('#preview_settings_cover').find('img').attr({'src':page.cover});
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].cover=page.cover;}
                    save('#settings_cover input');
                    };
                b.src=page.cover;
                });
            var settings_timer;
            function settings_title_input(){
                page.title=$('#settings_title').val().replace(/"/g,'');
                $('#preview_settings_title').text(page.title!=''?page.title:'Title');
                me=JSON.parse($.localStorage.getItem('me'));
                if(me.drafts[page.id]){me.drafts[page.id].title=page.title;}
                save('#settings_title input');
                }
            $('#settings_title').on('input',function(){
                clearTimeout(settings_timer);
                settings_timer=setTimeout(function(){settings_title_input();},500);
                });
            function settings_description_input(){
                page.description=$('#settings_description').val().replace(/"/g,'');
                $('#preview_settings_description').text((page.description!=''?page.description:'Description')+' ...');
                me=JSON.parse($.localStorage.getItem('me'));
                if(me.drafts[page.id]){me.drafts[page.id].description=page.description;}
                save('#settings_description input');
                }
            $('#settings_description').on('input',function(){
                clearTimeout(settings_timer);
                settings_timer=setTimeout(function(){settings_description_input();},500);
                });
            function settings_keywords_input(){
                page.keywords=$('#settings_keywords').val().replace(/"/g,'');
                $('#preview_settings_keywords').text(page.keywords!=''?page.keywords:'Keywords');
                me=JSON.parse($.localStorage.getItem('me'));
                if(me.drafts[page.id]){me.drafts[page.id].keywords=page.keywords;}
                save('#settings_keywords input');
                }
            $('#settings_keywords').on('input',function(){
                clearTimeout(settings_timer);
                settings_timer=setTimeout(function(){settings_keywords_input();},500);
                });
            $('#settings_cover').val(page.cover);
            $('#preview_settings_cover').css({'background':page.bg});
            $('#preview_settings_cover').find('img').attr({'src':page.cover,'onerror':'correct_img(this);'});
            if($('#preview_settings_cover > img')[0].naturalWidth>$('#preview_settings_cover > img')[0].naturalHeight){
                $('#preview_settings_cover > img').css({'max-height':'100%','min-width':'100%','max-width':'','min-height':''});
                }
            else{
                $('#preview_settings_cover > img').css({'max-width':'100%','min-height':'100%','max-height':'','min-width':''});
                }
            $('#settings_title').val(page.title);
            $('#preview_settings_title').text(page.title!=''?page.title:'Title');
            $('#settings_description').val(page.description);
            $('#preview_settings_description').text((page.description!=''?page.description:'Description')+' ...');
            $('#settings_keywords').val(page.keywords);
            $('#preview_settings_keywords').text(page.keywords);
            var keywords,revised;
            $('#button_settings').on('click',function(){
                keywords='';
                revised=[];
                if($('#settings_keywords').val()==''){
                    $('.box').each(function(i,v){
                        if(keywords.length){keywords+=' '+$(v).text();}
                        else{keywords+=$(v).text()+' ';}
                        });
                    keywords=keywords.replace(/\./g,'').replace(/\'/g,'').replace(/\"/g,'').replace(/\,/g,'').replace(/\?/g,'').replace(/\!/g,'').replace(/\:/g,'').replace(/\;/g,'').split(' ');
                    for(var i=0;i<keywords.length;i+=1){
                        if(keywords[i].length>1&&useless.indexOf(keywords[i])==-1&&revised.indexOf(keywords[i])==-1){revised.push(keywords[i]);}
                        }
                    revised=revised.join(', ').replace(/\,\,/g,',').replace(/\s\s+/g,' ');
                    revised=revised.toLowerCase();
                    $('#settings_keywords').val(revised);
                    revised=keywords=null;
                    }});



            var pxshift;
            var multiple=false;
            $('body').on('keyup',function(ev){
                if(ev.which==16){multiple=false;}
                });
            $('body').on('keydown',function(ev){//enable press and hold (keyboard) to move boxes
                if($('.pxshift').length){ev.preventDefault();}
                clearTimeout(pxshift);
                if(ev.which==16){multiple=true;}
                else if(ev.keyCode=='38'){  $('.pxshift').css({'top':'-=1px'});$('#emulate_press').attr({'src':'https://methodise.me/R/pressU.png'});}//up
                else if(ev.keyCode=='40'){  $('.pxshift').css({'top':'+=1px'});$('#emulate_press').attr({'src':'https://methodise.me/R/pressD.png'});}//down
                else if(ev.keyCode=='39'){  $('.pxshift').css({'left':'+=1px'});$('#emulate_press').attr({'src':'https://methodise.me/R/pressR.png'});}//right
                else if(ev.keyCode=='37'){  $('.pxshift').css({'left':'-=1px'});$('#emulate_press').attr({'src':'https://methodise.me/R/pressL.png'});}//left
                pxshift=setTimeout(function(){collect('pxshift');},1000);
                });
            $('body').on('click','.box',function(ev){
                if(!multiple&&ev.which!==16){
                    $('.pxshift').removeClass('pxshift');//move123
                    }
                $(this).addClass('pxshift');
                });
            $('body').on('click',function(ev){
                if(!multiple&&$(ev.target).attr('id')=='board'&&ev.which!==16){
                    $('.pxshift').removeClass('pxshift');//move123
                    }});


            $(document).on('keyup',function(){
                $('#emulate_press').attr({'src':'https://methodise.me/R/unpress.png'});
                });


            $('input,textarea,#new_txt').on('focus',function(){
                $('.box').removeClass('pxshift');
                });




                var isjumping=false
                window.jump=function(el){
                    $('#'+el).animate({'top':'-5px','height':'18px','width':'18px'},120,function(){
                        setTimeout(function(){
                            $('#'+el).animate({'top':'0px','height':'15px','width':'18px'},50,function(){
                                $('#'+el).animate({'top':'-2px','height':'18px','width':'18px'},100,function(){
                                    setTimeout(function(){
                                        $('#'+el).animate({'top':'0px','height':'18px','width':'18px'},50,function(){if(el=='eraser'){isjumping=false;}});
                                        },80);});});},80);});
                    return;/////////////
                    };
                $('body').on('mouseenter','.box',function(){
                    if(isjumping){return false;}
                    isjumping=true;
                    setTimeout(function(){jump('elevate_roof');},0);
                    setTimeout(function(){jump('elevate_floor');},70);
                    setTimeout(function(){jump('edit');},150);
                    setTimeout(function(){jump('eraser');},230);
                    });





            var edit,undo;
            $('#board').on('mouseup',function(ev){
                $('.box').css({'pointer-events':'auto'});
                if(edit=='new'||$('#mouse').html()==''){
                    if(!ev.shiftKey){
                        multiple=false;
                        $('.pxshift').removeClass('pxshift');
                        }
                    return false;
                    }
                $(this).find('.box_drag').hide();
                $('.options').hide();
                $('.menu_button').removeClass('tab');
                if($('#mouse').css('opacity')==1){
                    setTimeout(function(){
                        $('#mouse').html('');
                        $('#mouse').css({'opacity':0});
                        restore_hrefs();
                        $('.sheild').remove();
                        },500);
                    if($('#mouse img').attr('src')=='https://methodise.me/R/eraser.png'){
                        if(['up','down'].indexOf($(ev.target).closest('.box').attr('type'))!==-1){
                            var id=($(ev.target).closest('.box').find('a').attr('url').split('?')[1]).split('&')[0];
                            console.log('id',id);
                            if(!me.drafts[page.id]){G.erase_rabbit(id);}
                            }
                        $($(ev.target).closest('.box')[0]).remove();
                        $('#eraser').removeClass('gone');
                        $('.sheild').remove();
                        collect('#board mousedown eraser');
                        showquality();
                        }
                    else if($('#mouse img').attr('src')=='https://methodise.me/R/dn100.png'){
                        $('#'+$($(ev.target).closest('.box')[0]).attr('id')).insertBefore($('.box').first());
                        $('#elevate_floor').removeClass('gone');
                        collect('#board mousedown elevationup');
                        }
                    else if($('#mouse img').attr('src')=='https://methodise.me/R/up100.png'){
                        $('#'+$($(ev.target).closest('.box')[0]).attr('id')).insertAfter($('.box').last());
                        $('#elevate_roof').removeClass('gone');
                        collect('#board mousedown elevationdn');
                        }
                    else if($('#mouse img').attr('src')=='https://methodise.me/R/edit.png'){
                        edit=undefined;
                        edit=$(ev.target).closest('.box');
                        if(!edit.hasClass('box')){
                            reset_components();
                            return false;
                            }
                        else if(edit.attr('type')=='txt'){
                            edit.find('.txt').html(edit.find('.txt').html());
                            $('#new_txt').html(edit.find('.txt').html());
                            $('#new_txt_width').val(edit.width()-1);
                            undo=encodeURIComponent($('#new_txt').html())+'¬'+btoa($('#new_txt_width').val());//can't btoa because of emojis
                            }
                        else if(edit.attr('type')=='emoji'){
                            $('#new_emoji').val(edit.find('.emoji_large').text()+' Change?');
                            undo=edit.find('.emoji_large').text();
                            }
                        else if(edit.attr('type')=='link'){
                            $('#new_link').val(edit.find('a').attr('url'));
                            edit.find('i').text(edit.find('i').text());
                            $('#new_link_lable').val(edit.text());
                            $('#new_link_icon').val(edit.find('img').attr('src'));
                            undo=btoa($('#new_link').val())+'¬'+btoa($('#new_link_lable').val())+'¬'+btoa($('#new_link_icon').val());
                            }
                        else if(edit.attr('type')=='preview'){
                            $('#new_preview').val(edit.find('a').attr('url'));
                            undo=btoa($('#new_preview').val());
                            }
                        else if(edit.attr('type')=='img'){
                            $('#new_img').attr({'base64':edit.find('img').attr('src')});
                            $('#new_img').val(edit.find('a').attr('url'));//always url
                            $('#new_img_clickable').prop('checked',edit.hasClass('clickable'));
                            $('#new_img_width').val(edit.find('img').width());
                            src=$('#new_img').val();
                            undo=$('#new_img').attr('base64')+'¬'+btoa($('#new_img').val())+'¬'+btoa($('#new_img_clickable').prop('checked'))+'¬'+btoa($('#new_img_width').val());
                            }
                        else if(edit.attr('type')=='youtube'){
                            $('#new_youtube').val(edit.find('iframe').attr('src'));
                            undo=btoa($('#new_youtube').val());
                            }
                        else if(edit.attr('type')=='dtube'){
                            $('#new_dtube').val(edit.find('iframe').attr('src'));
                            undo=btoa($('#new_dtube').val());
                            }
                        else if(edit.attr('type')=='bitchute'){
                            $('#new_bitchute').val(edit.find('iframe').attr('src'));
                            undo=btoa($('#new_bitchute').val());
                            }
                        else if(edit.attr('type')=='liveleak'){
                            $('#new_liveleak').val(edit.find('iframe').attr('src'));
                            undo=btoa($('#new_liveleak').val());
                            }
                        else if(edit.attr('type')=='vimeo'){
                            $('#new_vimeo').val(edit.find('iframe').attr('src'));
                            undo=btoa($('#new_vimeo').val());
                            }
                        else if(edit.attr('type')=='soundcloud'){
                            $('#new_soundcloud').val(edit.find('iframe')[0].outerHTML);
                            undo=btoa($('#new_soundcloud').val());
                            }
                        else if(edit.attr('type')=='map'){
                            $('#new_map').val(edit.find('iframe').attr('src'));
                            undo=btoa($('#new_map').val());
                            }
                        else if(edit.attr('type')=='iframe'){
                            $('#new_iframe').val(edit.find('iframe')[0].outerHTML);
                            undo=btoa($('#new_iframe').val());
                            }
                        else if(edit.attr('type')=='twithash'){
                            $('#new_twithash').val(edit.text());
                            undo=btoa($('#new_twithash').val());
                            }
                        else if(edit.attr('type')=='twitat'){
                            $('#new_twitat').val(edit.text());
                            undo=btoa($('#new_twitat').val());
                            }
                        else if(edit.attr('type')=='gabhash'){
                            $('#new_gabhash').val(edit.text());
                            undo=btoa($('#new_gabhash').val());
                            }
                        else if(edit.attr('type')=='gabat'){
                            $('#new_gabat').val(edit.text());
                            undo=btoa($('#new_gabat').val());
                            }
                        else if(edit.attr('type')=='line'){
                            if(edit.hasClass('deg45l')){$('#new_line').val('l');}
                            else if(edit.hasClass('deg45r')){$('#new_line').val('r');}
                            else if(edit.find('.line').hasClass('v')){$('#new_line').val('v');}
                            else{$('#new_line').val('h');}
                            lcolor=(surfacecurve.color(edit.find('.line').css('background-color')).hex6()).replace('#','');
                            $('#new_line_color').val('#'+lcolor);
                            undo=btoa($('#new_line').val())+'¬'+btoa('#'+lcolor);
                            }
                        if(edit&&edit.attr('id')){
                            if($('#components').css('display')=='none'){$('#components_toggle').trigger('click');}
                            $('.component').addClass('busy');
                            $('#scroll_'+edit.attr('type')).removeClass('busy');
                            $($('#scroll_'+edit.attr('type')).find('.component_ctrl')).append(
                                '<div id="edit_'+edit.attr('id')+'" class="ctrl_done"></div>'
                            +   '<div undo="'+undo+'" class="ctrl_undo"></div>'
                                );
                            $('.ctrl_undo').one('click',function(){//sets up the text values as if changes never happened then triggers the ok button
                                $('.ctrl_undo').append('<div class="ctrl_clock" style="top:-2px;left:-2px;"></div>');
                                undo=$(this).attr('undo').split('¬');
                                for(var i=0;i<undo.length;i+=1){
                                    if($(this).parent().parent().find('.undo_1').attr('base64')&&i==0){
                                        $(this).parent().parent().find('.undo_1').attr({'base64':undo[0]});
                                        }
                                    else{
                                        if(edit.attr('type')=='txt'&&i==0){undo[i]=decodeURIComponent(undo[i]);}
                                        else if(edit.attr('type')=='emoji'){undo[i];}//keep the same
                                        else{undo[i]=atob(undo[i]);}
                                        if(['true','false'].indexOf(undo[i])!==-1){
                                            $(this).parent().parent().find('.undo_'+i).prop({'checked':undo[i]});
                                            }
                                        else if($(this).parent().parent().find('.undo_'+i).attr('id')=='new_txt'){
                                            $(this).parent().parent().find('.undo_'+i).html(undo[i]);
                                            }
                                        else if($(this).parent().parent().find('.undo_'+i).attr('id')=='new_iframe'){
                                            $(this).parent().parent().find('.undo_'+i).val(undo[i]);
                                            iframe=undo[i];
                                            }
                                        else if($(this).parent().parent().find('.undo_'+i).attr('id')=='new_emoji'){
                                            $(this).parent().parent().find('.undo_'+i)[0].value=undo[i]+' Change?';
                                            }
                                        else{
                                            $(this).parent().parent().find('.undo_'+i).val(undo[i]);
                                            }}}
                                undo=$(this);
                                if(undo.parent().parent().attr('id').replace('scroll_','')=='preview'){//the content needs to load
                                    getpreview($('#new_preview').val(),function(p,bool){//callback
                                        preview=p;
                                        undo.remove();
                                        undo=undefined;
                                        $('#edit_'+edit.attr('id')).trigger('click');
                                        });}
                                else{
                                    function trigger(){
                                        trigger=null;
                                        undo.remove();
                                        undo=undefined;
                                        $('#edit_'+edit.attr('id')).trigger('click');
                                        }
                                    setTimeout(function(){trigger();},0);
                                    }});//end undo
                            $('#edit_'+edit.attr('id')).one('click',function(){//makes change
                                $('#eraser').css({'opacity':'1','pointer-events':'auto','cursor':'pointer'});
                                $('.ctrl_undo').remove();
                                undo=undefined;
                                //$('#components_list').animate({scrollTop:0},0);
                                $(this).remove();
                                if(edit.attr('type')=='txt'){
                                    edit.find('.txt').html($('#new_txt').html());
                                    edit.find('.txt')[0].style.width=(Number($('#new_txt_width').val())+1)+'px';//jquery was not re-setting the width
                                    }
                                else if(edit.attr('type')=='emoji'){
                                    edit.find('.emoji_large').text($('#new_emoji').val().replace(' Change?',''));
                                    }
                                else if(edit.attr('type')=='link'){
                                    edit.find('a').attr({'url':$('#new_link').val(),'href':$('#new_link').val()});
                                    edit.find('a').text($('#new_link_lable').val());
                                    edit.find('img').attr({'src':$('#new_link_icon').val()});
                                    }
                                else if(edit.attr('type')=='preview'&&preview){
                                    edit.find('a').attr({'url':preview.href,'href':preview.href});
                                    edit.find('img').attr({'src':preview.src});
                                    edit.find('.tyt').text(preview.title);
                                    edit.find('.txt').text(preview.description);
                                    }
                                else if(edit.attr('type')=='img'){
                                    edit.find('img').attr({'src':$('#new_img').attr('base64')});
                                    if($('#new_img_clickable').prop('checked')){
                                        edit.addClass('clickable');
                                        edit.removeClass('transparent');
                                        edit.find('a').attr({'url':$('#new_img').val(),'href':$('#new_img').val()});
                                        }
                                    else{
                                        edit.addClass('transparent');
                                        edit.find('a').attr({'url':$('#new_img').val()});
                                        edit.find('a').removeAttr('href');
                                        }
                                    edit.find('img')[0].style.width=$('#new_img_width').val()+'px';
                                    }
                                else if(edit.attr('type')=='youtube'&&youtube){
                                    edit.find('iframe').attr({'src':'https://www.youtube.com/embed/'+youtube});
                                    }
                                else if(edit.attr('type')=='dtube'&&dtube){
                                    edit.find('iframe').replaceWith('<iframe style="width:267px;" src="https://emb.d.tube/#!/'+dtube+'" allowfullscreen></iframe>');
                                    }
                                else if(edit.attr('type')=='bitchute'&&bitchute){
                                    edit.find('iframe').attr({'src':'https://www.bitchute.com/embed/'+bitchute});
                                    }
                                else if(edit.attr('type')=='liveleak'&&liveleak){
                                    edit.find('iframe').attr({'src':'https://www.liveleak.com/view?i='+liveleak});
                                    }
                                else if(edit.attr('type')=='vimeo'&&vimeo){
                                    edit.find('iframe').attr({'src':'https://player.vimeo.com/video/'+vimeo});
                                    }
                                else if(edit.attr('type')=='soundcloud'&&soundcloud){
                                    edit.find('iframe').attr({'src':soundcloud});
                                    }
                                else if(edit.attr('type')=='map'&&map){
                                    edit.find('iframe').attr({'src':map});
                                    }
                                else if(edit.attr('type')=='iframe'){
                                    console.log('??',edit,iframe);
                                    edit.find('.ibox').html(iframe);
                                    }
                                else if(edit.attr('type')=='twithash'&&twithash){
                                    edit.find('a').attr({'src':'https://twitter.com/hashtag/'+twithash});
                                    edit.find('i').text(twithash);
                                    }
                                else if(edit.attr('type')=='twitat'&&twitat){
                                    edit.find('a').attr({'src':'https://twitter.com/'+twitat});
                                    edit.find('i').text(twitat);
                                    }
                                else if(edit.attr('type')=='gabhash'&&gabhash){
                                    edit.find('a').attr({'src':'https://gab.ai/hash/'+gabhash});
                                    edit.find('i').text(gabhash);
                                    }
                                else if(edit.attr('type')=='gabat'&&gabat){
                                    edit.find('a').attr({'src':'https://gab.ai/'+gabat});
                                    edit.find('i').text(gabat);
                                    }
                                else if(edit.attr('type')=='line'){
                                    edit.removeClass('deg45l deg45r').addClass((({'h':'','v':'','l':' deg45l','r':' deg45r'})[$('#new_line').val()]));
                                    edit.find('.line').removeClass('v h').addClass((['v','l'].indexOf($('#new_line').val())!==-1?'v':'h'));
                                    lcolor=(surfacecurve.color($('#new_line_color').val()).hex6()).replace('#','');
                                    edit.find('.line').css({'background':'#'+(lcolor||'ffffff')});
                                    }
                                edit=undefined;
                                reset_components();
                                collect('confirm component tick');
                                showquality();
                                });
                            $('#components_list').animate({scrollTop:$('#scroll_'+edit.attr('type')).attr('scroll')+'px'},1000);
                            }
                        else{$('#edit').removeClass('gone');}
                        }}});


            $('#eraser').on('mouseup',function(){
                $(this).addClass('gone');
                $('.link > a,.big_link_a').each(function(i,v){$(v).removeAttr('href');});
                setTimeout(function(){$('.box').append('<div class="sheild" style="width:100%;height:100%;z-index:2;position:absolute;top:0px;left:0px;"></div>');},250);
                $('#mouse').html('<img src="https://methodise.me/R/eraser.png" class="protect_img_black" style="poistion:absolute;top:0px;left:15px;width:20px;height:20px;"/>');
                $('#mouse').css({'opacity':1});
                });

            $('#edit').on('mouseup',function(){
                edit=undefined;
                $('#eraser').css({'opacity':'0.5','pointer-events':'none','cursor':'not-allowed'});
                $(this).addClass('gone');
                $('.link > a,.big_link_a').each(function(i,v){$(v).removeAttr('href');});
                setTimeout(function(){$('.box').append('<div class="sheild" style="width:100%;height:100%;z-index:2;position:absolute;top:0px;left:0px;"></div>');},250);
                $('#mouse').html('<img src="https://methodise.me/R/edit.png" class="protect_img_black" style="poistion:absolute;top:0px;margin-left:10px;width:20px;height:20px;"/>');
                $('#mouse').css({'opacity':1});
                });

            $('#elevate_floor').on('mouseup',function(){
                $(this).addClass('gone');
                $('.link > a,.big_link_a').each(function(i,v){$(v).removeAttr('href');});
                setTimeout(function(){$('.box').append('<div class="sheild" style="width:100%;height:100%;z-index:2;position:absolute;top:0px;left:0px;"></div>');},250);
                $('#mouse').html('<img src="https://methodise.me/R/dn100.png" class="protect_img_black" style="poistion:absolute;top:0px;margin-left:10px;width:20px;height:20px;"/>');
                $('#mouse').css({'opacity':1});
                });

            $('#elevate_roof').on('mouseup',function(){
                $(this).addClass('gone');
                $('.link > a,.big_link_a').each(function(i,v){$(v).removeAttr('href');});
                setTimeout(function(){$('.box').append('<div class="sheild" style="width:100%;height:100%;z-index:2;position:absolute;top:0px;left:0px;"></div>');},250);
                $('#mouse').html('<img src="https://methodise.me/R/up100.png" class="protect_img_black" style="poistion:absolute;top:0px;margin-left:10px;width:20px;height:20px;"/>');
                $('#mouse').css({'opacity':1});
                });

            $('#color_picker').on('mouseup',function(){
                $(this).addClass('gone');
                $('#mouse').html('<img src="https://methodise.me/R/color_picker_empty.png" class="protect_img_black" style="poistion:absolute;top:0px;margin-left:10px;width:20px;height:20px;"/>');
                $('#mouse').css({'opacity':1});
                $('body').append('<div id="screenshot" style="position:fixed;top:20px;left:0px;right:0px;bottom:20px;z-index:5;cursor:progress;background:rgba(0,0,0,0.4);"></div>');
                html2canvas(document.querySelector('#page_height')).then(function(canvas){
                    $('#screenshot').css({'cursor':'auto'});
                    $('#screenshot').append(canvas);
                    $('#screenshot').on('click',function(ev){
                        var col=$(this).find('canvas')[0].getContext('2d').getImageData(ev.offsetX,ev.offsetY,1,1).data;
                        col=surfacecurve.color('rgb('+col[0]+','+col[1]+','+col[2]+')').hex6();
                        $('#color_picker').css({'background-color':col});
                        $('#color_picker').removeClass('gone');
                        $('#screenshot').remove();
                        $('#mouse').css({'opacity':0});
                        $('#mouse').html('');
                        });});});

            document.onmousemove=function(ev){//jquery might have a bug here (kept cancelling on C.me)
                $('#mouse').css({left:ev.pageX,top:ev.pageY});
                };


            $('#new_txt').on('focus',function(){
                if($(this).text()==''&&fontsize){
                    setTimeout(function(){document.execCommand('fontSize',false,$('#txt_fontSize').val());},100);
                    }});
            var fontsize;
            doCommand=function(cmd){
                if(($(getSelectionTextAndContainerElement().containerElement).closest('#board').length==1&&$('#new_txt').text()=="")){
                    alert("To edit text that is already on the page you need to click the spanner icon (at the bottom of the page) then click the text that you wan't to edit. This will put the text back into the text editor!");
                    return false;
                    }
                if(cmd=='fontSize'){
                    fontsize=$('#txt_fontSize').val();
                    document.execCommand('fontSize',false,$('#txt_fontSize').val());
                    }
                else if(cmd=='foreColor'){
                    document.execCommand('foreColor',false,$('#txt_foreColor_color').css('color'));
                    $('#txt_foreColor_color').css({'color':$('#txt_foreColor_picker').val()});
                    $('#txt_foreColor_color_picker').attr({'value':$('#txt_foreColor_picker').val()});
                    document.execCommand('foreColor',false,$('#txt_foreColor_picker').val());
                    }
                else if(cmd=='backColor'){
                    document.execCommand('backColor',false,$('#txt_backColor_color').css('background'));
                    $('#txt_backColor_color').css({'background':$('#txt_backColor_picker').val()});
                    $('#txt_backColor_color_picker').attr({'value':$('#txt_backColor_picker').val()});
                    document.execCommand('backColor',false,$('#txt_backColor_picker').val());
                    }
                else if(cmd=='createLink'){
                    var val=prompt("Type the text that you wan't users to see when they hover over this text! (Some text must be selected now for this to work!)")
                    document.execCommand('createLink',false,'**youForgotToSelectSomeText**');
                    var that=$('a[href="**youForgotToSelectSomeText**"');
                    that.replaceWith('<abbr title="'+val+'">'+that.text()+'</abbr>');//bug with doubledouble text fixed
                    val=that=null;
                    }
                else{
                    document.execCommand(cmd,false,null);
                    }
                return;
                }







            function setup_cursor(type,protect){
                edit='new';
                $('#mouse').html('<img src="https://methodise.me/R/'+type+'.png" class="protect_img_'+protect+'" style="poistion:absolute;top:0px;margin-left:10px;width:20px;height:20px;"/>');
                $('.link > a,.big_link_a').each(function(i,v){$(v).removeAttr('href');});
                setTimeout(function(){$('.box').append('<div class="sheild" style="width:100%;height:100%;z-index:2;position:absolute;top:0px;left:0px;"></div>');},250);
                $('#mouse').css({'opacity':1});
                return;
                }

            function after_new_component(){
                $('.pxshift').removeClass('pxshift');
                $('.box').drags({handle:".box_drag"});
                $('.fire').hide();
                //$('#components_list').animate({scrollTop:0},0);
                $('.sheild').remove();
                restore_hrefs();
                $('#mouse').html('');
                $('#mouse').css({'opacity':0});
                setTimeout(function(){
                    $('#'+ID).addClass('pxshift');
                    $('.box').css({'pointer-events':'auto'});
                    check_out_of_range();
                    edit=undefined;
                    },100);
                return;
                }

            function restore_hrefs(){
                $('.link > a').each(function(i,v){
                    $(v).attr({'href':$(v).attr('url')});
                    });
                $('.big_link_a').each(function(i,v){
                    if($(v).closest('.box').attr('type')=='img'&&$(v).closest('.box').hasClass('clickable')){
                        $(v).attr({'href':$(v).attr('url')});
                        }
                    else if($(v).closest('.box').attr('type')!=='img'){
                        $(v).attr({'href':$(v).attr('url')});
                        }});
                return;
                }


            function reset_components(){
                $($('#components_list').find('input').not('#new_txt_width,#new_emoji,#new_line_color,#txt_foreColor_picker,#txt_backColor_picker')).val('');
                $('#new_txt').html('');
                $('#new_txt').css({'height':'20px'});
                $('.fire').hide();
                //$('#components_list').animate({scrollTop:0},0);
                $('#edit').removeClass('gone');
                $('.component').removeClass('busy');
                $('.sheild').remove();
                $('#eraser').css({'opacity':'1','pointer-events':'auto','cursor':'pointer'});
                restore_hrefs();
                $('#mouse').html('');
                $('#mouse').css({'opacity':0});
                return;
                }



            function new_txt(val,width,top,left){
                $('#board').append(
                    '<div class="box" type="txt" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="txt" style="width:'+width+'px;">'+val+'</div>'
                +   '</div>');
                return;
                }
            $('.new_txt').click(function(){
                if($('#new_txt').html()){
                    setup_cursor('txt','black');
                    $('#board').one('click',function(e){
                        new_txt($('#new_txt').html(),(Number($('#new_txt_width').val())+1),e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_txt #board one click');
                        $('#new_txt').html('');
                        $('#new_txt').css({'height':'20px'});
                        after_new_component();
                        });}});
            var timer;
            $('#new_txt').bind('paste',function(){
                var before=document.getElementById('new_txt').innerHTML;
                setTimeout(function(){
                    var after=document.getElementById('new_txt').innerHTML;
                    var parts;
                    for(var i=0;i<after.length;i++){
                        if(after[i]!==before[i]){
                            parts=[
                                before.slice(0,i)
                            ,   after.slice(i,i+after.length-before.length)
                            ,   before.slice(i,before.length)
                                ];
                            break;
                            }}
                    parts[1]=parts[1].replace(/<[^>]+>/g,'');
                    parts=parts.join('');
                    document.getElementById('new_txt').innerHTML=parts;
                    },100);});
                var contextmenu=false;
                $('#new_txt').on('blur',function(ev){
                    if(contextmenu){
                        console.log('blur');
                        ev.preventDefault();
                        }});
                $('#new_txt').on('contextmenu',function(ev){
                    console.log('contextmenu');
                    contextmenu=true;
                    setTimeout(function(){contextmenu=false;},100);
                    });
            function new_txt_oninput(){
                if(edit){
                    if($('#new_txt').text()==''){$('#new_txt').html('');}
                    edit.find('.txt').html($('#new_txt').html());
                    edit.find('.txt')[0].style.width=(Number($('#new_txt_width').val())+1)+'px';
                    edit.find('.txt').html(edit.find('.txt').html());
                    collect('new_txt on input if edit');
                    }
                return;
                }
            $('#new_txt').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){new_txt_oninput();},500);
                });
            $('.new_txt_width_sub10').on('mousedown',function(){
                if($('#new_txt_width').val()>20){
                    $('#new_txt_width').val(Number($('#new_txt_width').val())-10);
                    $('#new_txt_width').trigger('input');
                    }});
            $('.new_txt_width_sub1').on('mousedown',function(){
                if($('#new_txt_width').val()>10){
                    $('#new_txt_width').val(Number($('#new_txt_width').val())-1);
                    $('#new_txt_width').trigger('input');
                    }});
            $('.new_txt_width_add1').on('mousedown',function(){
                $('#new_txt_width').val(Number($('#new_txt_width').val())+1);
                $('#new_txt_width').trigger('input');
                });
            $('.new_txt_width_add10').on('mousedown',function(){
                $('#new_txt_width').val(Number($('#new_txt_width').val())+10);
                $('#new_txt_width').trigger('input');
                });
            function txt_oninput(){
                if(edit){
                    edit.find('.txt')[0].style.width=(Number($('#new_txt_width').val())+1)+'px';//jquery would not do this
                    collect('new_txt_width on input if edit');
                    }}
            $('#new_txt_width').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){txt_oninput();},500);
                });


            var emojis_reason;
            function new_emoji(emoji,top,left){
                $('#board').append(
                    '<div class="box transparent" type="emoji" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="emoji_large">'+emoji+'</div>'
                +   '</div>');
                return;
                }
            $('.new_emoji').click(function(){
                setup_cursor('emoji','black');
                $('#board').one('click',function(e){
                    new_emoji($('#new_emoji').val().replace(' Change?',''),e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                    collect('new_txt #board one click');
                    $('#new_txt').html('');
                    $('#new_txt').css({'height':'20px'});
                    after_new_component();
                    });});
            $('#new_emoji').on('click',function(){
                $('#emojis').toggle();
                if($('#emojis').attr('display')!='none'){
                    emojis_reason='large';
                    scroll=$('#emojis_list').scrollTop();
                    $('#emojis').insertAfter($('.app').last());
                    $('#emojis_list').scrollTop(scroll);
                    }});



            function new_link(href,lable,icon,top,left){
                $('#board').append(
                    '<div class="box transparent" type="link" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="link">'
                +           '<img src="'+(icon||'https://methodise.me/R/link.png')+'" class="protect_img_black"/>'
                +           '<a target="_blank" href="'+href+'" url="'+href+'">'
                +               '<i>'+lable+'</i>'
                +           '</a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var favicon='';
            $('.new_link').click(function(){
                if($('#new_link').val()&&$('#new_link_lable').val()){
                    setup_cursor('link','black');
                    $('#board').one('click',function(e){
                        new_link($('#new_link').val(),$('#new_link_lable').val(),favicon,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_link #board one click');
                        $('#new_link,#new_link_lable,#new_link_icon').val('');
                        after_new_component();
                        });}});
            function link_oninput(){
                $('#new_link').parent().find('.fire').hide();
                favicon='';
                if($('#new_link').val().indexOf('data:image')==0){//Not allowed to navigate top frame to data URL
                    $('#new_link').parent().find('.fire').show();
                    }
                else{
                    geticon($('#new_link').val(),function(icon,bool){
                        favicon=icon;
                        $('#new_link_icon').val(favicon);
                        if(edit){
                            edit.find('a').attr({'href':$('#new_link').val()});
                            edit.find('img').attr({'src':favicon});
                            collect('new_link on input if edit');
                            }});}}
            $('#new_link').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){link_oninput();},500);
                });
            function link_lable_oninput(){
                if(edit){
                    edit.find('i').text($('#new_link_lable').val());
                    edit.find('i').text(edit.find('i').text());
                    collect('new_link_lable on input if edit');
                    }}
            $('#new_link_lable').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){link_lable_oninput();},500);
                });


            function new_preview(object,top,left){
                $('#board').append(
                    '<div class="box" type="preview" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<a class="big_link_a" target="_blank" href="'+object.href+'" url="'+object.href+'">'
                +           '<div class="big_link">'
                +               '<div class="h130">'
                +                   '<img class="cover big_link_img" src="'+object.src+'" url="'+object.src+'"/>'
                +               '</div>'
                +               '<div class="tyt">'+(object.title||object.href)+'</div>'
                +               '<div class="txt">'+(object.description||'')+'</div>'
                +           '</div>'
                +       '</a>'
                +   '</div>');
                return;
                };
            var preview;
            $('.new_preview').click(function(){
                if($('#new_preview').val()){
                    setup_cursor('preview','black');
                    $('#board').one('click',function(e){
                        new_preview(preview,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_preview #board one click');
                        $('#new_preview').val('');
                        after_new_component();
                        });}});
            function preview_oninput(){
                $('#new_preview').parent().find('.component_ctrl').append('<div class="ctrl_clock"></div>');
                $('#new_preview').parent().find('.fire').hide();
                preview={};
                getpreview($('#new_preview').val(),function(p,bool){
                    preview=p;
                    $('#new_preview').parent().find('.component_ctrl').find('.ctrl_clock').remove();
                    if(preview.status||($('#new_preview').val()!=''&&!preview.src&&preview.title==''&&preview.description=='')){
                        $('#new_preview').parent().find('.fire').show();
                        }
                    if(edit){
                        edit.find('a').attr({'href':preview.href,'url':preview.href});
                        edit.find('img').attr({'src':preview.src});
                        edit.find('.tyt').text(preview.title);
                        edit.find('.txt').text(preview.description);
                        collect('new_preview on input if edit');
                        }});}
            $('#new_preview').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){preview_oninput();},500);
                });



            function new_img(base64,image,width,clickable,top,left){
                $('#board').append(
                    '<div class="box '+((''+clickable)=='true'?'clickable':'transparent')+'" type="img" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<a class="big_link_a" target="_blank" url="'+image+'"'+((clickable+'')=='true'?' href="'+image+'"':'')+'>'
                +           '<img style="height:auto;width:'+width+'px;display:block;" src="'+base64+'"/>'
                +       '</a>'
                +   '</div>');
                return;
                }
            var src,b64,imgwidth;
            $('.new_img').click(function(){
                if($('#new_img').val()){
                    setup_cursor('img','black');
                    $('#board').one('click',function(e){
                        new_img(b64,src,imgwidth,$('#new_img_clickable').prop('checked'),e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_img #board one click');
                        $('#new_img,#new_img_width').val('');
                        after_new_component();
                        });}});
            function img_oninput(){
                $('#new_img').parent().find('.fire').hide();
                if($('#new_img').val()!==''){
                    $('#new_img').parent().find('.component_ctrl').append('<div class="ctrl_clock"></div>');
                    src=$('#new_img').val();
                    if(src.indexOf('?')!==-1){src=src.split('?')[0];}
                    if(src.indexOf('http')==-1){src='https://'+src;}
                    else if(src.indexOf('https://')==0){src=src.replace('http://','https://');}
                    //if(src.indexOf('?')!==-1){src=src.split('?')[0];}//will break duckduck go images
                    if(src!==$('#new_img').val()){$('#new_img').val(src);}
                    if(src.match(/\.(jpeg|jpg|gif|png)$/)==null){
                        $('#new_img').parent().find('.component_ctrl').find('.ctrl_clock').remove();
                        $('#new_img').parent().find('.fire').show();
                        }
                    else{
                        getimg(src,function(b,bool,w){
                            if(!b){
                                $('#new_img').parent().find('.component_ctrl').find('.ctrl_clock').remove();
                                $('#new_img').parent().find('.fire').show();
                                imgwidth='';
                                }
                            else{
                                b64=b;
                                $('#new_img').attr({'base64':b64});
                                $('#new_img').val(src);
                                $('#new_img').parent().find('.component_ctrl').find('.ctrl_clock').remove();
                                if(!edit){
                                    if(w<300){$('#new_img_width').val(w);}
                                    else{$('#new_img_width').val(300);}
                                    }
                                imgwidth=$('#new_img_width').val();
                                if(edit){
                                    if($('#new_img_clickable').prop('checked')){
                                        edit.addClass('clickable').removeClass('transparent');
                                        edit.find('a').attr({'url':src,'href':src});
                                        }
                                    else{
                                        edit.removeClass('clickable').addClass('transparent');
                                        edit.find('a').attr({'url':src});
                                        edit.find('a').removeAttr('href');
                                        }
                                    edit.find('img').attr({'src':b64});
                                    collect('new_img on input if edit');
                                    }}});}}}
            $('#new_img').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){
                    img_oninput();
                    },500);});
            function img_width_oninput(){
                imgwidth='';
                if($('#new_img_width').val()!=''){imgwidth=$('#new_img_width').val();}
                if(edit){
                    src=$('#new_img').val();
                    if($('#new_img_clickable').prop('checked')){
                        edit.addClass('clickable').removeClass('transparent');
                        edit.find('a').attr({'url':src,'href':src});
                        }
                    else{
                        edit.removeClass('clickable').addClass('transparent');
                        edit.find('a').attr({'url':src});
                        edit.find('a').removeAttr('href');
                        }
                    edit.find('img')[0].style.width=imgwidth+'px';//jquery would not do this
                    collect('new_img_width on input if edit');
                    }}
            $('#new_img_width').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){img_width_oninput();},500);
                });
            $('#new_img_clickable').on('change',function(){//no timer needed here!
                if(edit){
                    src=$('#new_img').val();
                    if($(this).prop('checked')){
                        edit.addClass('clickable').removeClass('transparent');
                        edit.find('a').attr({'href':src,'url':src});
                        }
                    else{
                        edit.removeClass('clickable').addClass('transparent');
                        edit.find('a').attr({'url':src});
                        edit.find('a').removeAttr('href');
                        }
                    collect('new_img_clickable on change if edit');
                    }});



            function new_youtube(id,top,left){
                $('#board').append(
                    '<div class="box" type="youtube" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox">'
                +           '<iframe allowfullscreen allow="encrypted-media" src="https://www.youtube.com/embed/'+id+'"></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var youtube;
            $('.new_youtube').click(function(){
                if($('#new_youtube').val()){
                    setup_cursor('youtube','conflict');
                    $('#board').one('click',function(e){
                        new_youtube(youtube,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_youtube #board one click');
                        $('#new_youtube').val('');
                        after_new_component();
                        });}});
            function youtube_oninput(){
                youtube=$('#new_youtube').val();
                $('#new_youtube').parent().find('.fire').hide();
                if(youtube==''){}
                else{
                    if(youtube.indexOf('youtube.com/watch?v=')!==-1){
                        youtube=(youtube.split('?v=')[1]).split('&')[0];
                        }
                    if(youtube.indexOf('youtube.com/embed/')!==-1){
                        youtube=(youtube.split('embed/')[1]).split('&')[0];
                        }
                    else if(youtube.indexOf('youtu.be/')!==-1){
                        youtube=(youtube.split('youtu.be/')[1]).split('?')[0];
                        }
                    if(youtube==''){
                        $('#new_youtube').parent().find('.component_ctrl').find('.ctrl_clock').remove();
                        $('#new_youtube').parent().find('.fire').show();
                        }
                    else if(edit){
                        edit.find('iframe').attr({'src':'https://www.youtube.com/embed/'+youtube});
                        collect('#new_youtube on input if edit');
                        }}}
            $('#new_youtube').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){youtube_oninput();},500);
                });




            function new_dtube(id,top,left){
                $('#board').append(
                    '<div class="box" type="dtube" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox">'
                +           '<iframe style="width:267px;" src="https://emb.d.tube/#!/'+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var dtube;
            $('.new_dtube').click(function(){
                if($('#new_dtube').val()){
                    setup_cursor('dtube','conflict');
                    $('#board').one('click',function(e){
                        new_dtube(dtube,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_dtube #board one click');
                        $('#new_dtube').val('');
                        after_new_component();
                        });}});
            function dtube_oninput(){
                dtube=$('#new_dtube').val();
                $('#new_dtube').parent().find('.fire').hide();
                if(dtube==''){}
                else{
                    if(dtube.indexOf('d.tube/#!/v/')!==-1){
                        dtube=(dtube.split('d.tube/#!/v/')[1]).split('&')[0];
                        }
                    else if(dtube.indexOf('emb.d.tube/#!/')!==-1){
                        dtube=dtube.split('emb.d.tube/#!/')[1];
                        }
                    if(dtube==''){
                        $('#new_dtube').parent().find('.fire').show();
                        }
                    else if(edit){
                        edit.find('iframe').replaceWith('<iframe style="width:267px;" src="https://emb.d.tube/#!/'+dtube+'" allowfullscreen></iframe>');
                        collect('new_dtube on input if edit');
                        }}}
            $('#new_dtube').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){dtube_oninput();},500);
                });


            function new_bitchute(id,top,left){
                $('#board').append(
                    '<div class="box" type="bitchute" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox">'
                +           '<iframe style="width:267px;" src="https://www.bitchute.com/embed/'+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var bitchute;
            $('.new_bitchute').click(function(){
                if($('#new_bitchute').val()){
                    setup_cursor('bitchute','conflict');
                    $('#board').one('click',function(e){
                        new_bitchute(bitchute,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_bitchute #board one click');
                        $('#new_bitchute').val('');
                        after_new_component();
                        });}});
            function bitchute_oninput(){
                bitchute=$('#new_bitchute').val();
                $('#new_bitchute').parent().find('.fire').hide();
                if(bitchute==''){}
                else if(bitchute.indexOf('bitchute.com')==-1){
                    $('#new_bitchute').parent().find('.fire').show();
                    }
                else{
                    if(bitchute.indexOf('/video/')!==-1){
                        bitchute=bitchute.replace('/video/','/embed/');
                        }
                    bitchute=(bitchute.split('/embed/')[1]).split('/')[0];
                    if(bitchute==''){
                        $('#new_bitchute').parent().find('.fire').show();
                        }
                    else if(edit){
                        edit.find('iframe').replaceWith('<iframe style="width:267px;" src="https://www.bitchute.com/embed/'+bitchute+'" allowfullscreen></iframe>');
                        collect('new_bitchute on input if edit');
                        }}}
            $('#new_bitchute').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){bitchute_oninput();},500);
                });


            function new_liveleak(id,top,left){
                $('#board').append(
                    '<div class="box" type="liveleak" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox">'
                +           '<iframe style="width:267px;" src="https://www.liveleak.com/ll_embed?i='+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var liveleak;
            $('.new_liveleak').click(function(){
                if($('#new_liveleak').val()){
                    setup_cursor('liveleak','conflict');
                    $('#board').one('click',function(e){
                        new_liveleak(liveleak,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_liveleak #board one click');
                        $('#new_liveleak').val('');
                        after_new_component();
                        });}});
            function liveleak_oninput(){
                liveleak=$('#new_liveleak').val();
                $('#new_liveleak').parent().find('.fire').hide();
                if(liveleak==''){}
                else{
                    if(liveleak.indexOf('liveleak.com/')==-1){
                        $('#new_liveleak').parent().find('.fire').show();
                        }
                    else{
                        liveleak=(liveleak.split('=')[1]).split('&')[0];
                        if(liveleak==''){
                            $('#new_liveleak').parent().find('.fire').show();
                            }
                        else if(edit){
                            edit.find('iframe').replaceWith('<iframe style="width:267px;" src="https://www.liveleak.com/ll_embed?i='+liveleak+'" allowfullscreen></iframe>');
                            collect('new_liveleak on input if edit');
                            }}}}
            $('#new_liveleak').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){liveleak_oninput();},500);
                });


            function new_vimeo(id,top,left){
                $('#board').append(
                    '<div class="box" type="vimeo" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox">'
                +           '<iframe style="width:219px;" src="https://player.vimeo.com/video/'+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var vimeo;
            $('.new_vimeo').click(function(){
                if($('#new_vimeo').val()){
                    setup_cursor('vimeo','conflict');
                    $('#board').one('click',function(e){
                        new_vimeo(vimeo,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_vimeo #board one click');
                        $('#new_vimeo').val('');
                        after_new_component();
                        });}});
            function vimeo_oninput(){
                vimeo=$('#new_vimeo').val();
                $('#new_vimeo').parent().find('.fire').hide();
                if(vimeo==''){}
                else{
                    if(vimeo.indexOf('player.vimeo.com/video/')!==-1){
                        vimeo=vimeo.split('player.vimeo.com/video/')[1];
                        }
                    else if(vimeo.indexOf('vimeo.com/')!==-1){
                        vimeo=(vimeo.split('vimeo.com/')[1]).split('&')[0];
                        }
                    if(vimeo==''){
                        $('#new_vimeo').parent().find('.fire').show();
                        }
                    else if(edit){
                        edit.find('iframe').attr({'src':'https://player.vimeo.com/video/'+vimeo});
                        collect('new_vimeo on input if edit');
                        }}}
            $('#new_vimeo').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){vimeo_oninput();},500);
                });




            function new_soundcloud(src,top,left){
                $('#board').append(
                    '<div class="box" type="soundcloud" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox">'
                +           '<iframe height="166" width="400" scrolling="no" src="'+src+'"></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var soundcloud;
            $('.new_soundcloud').click(function(){
                if($('#new_soundcloud').val()){
                    setup_cursor('soundcloud','conflict');
                    $('#board').one('click',function(e){
                        new_soundcloud(soundcloud,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_soundcloud #board one click');
                        $('#new_soundcloud').val('');
                        after_new_component();
                        });}});
            function soundcloud_oninput(){
                soundcloud=$('#new_soundcloud').val();
                $('#new_soundcloud').parent().find('.fire').hide();
                if(soundcloud==''){}
                else{
                    if(soundcloud.indexOf('<iframe')!==-1){
                        soundcloud=(soundcloud.split('src="')[1]).split('"')[0];
                        }
                    else if(soundcloud.indexOf('//soundcloud.com/')!==-1){
                        $('#new_soundcloud').parent().find('.fire').show();
                        }
                    if(soundcloud==''){
                        $('#new_soundcloud').parent().find('.fire').show();
                        }
                    else if(edit){
                        edit.find('iframe').attr({'src':soundcloud});
                        collect('new_soundcloud on input if edit');
                        }}}
            $('#new_soundcloud').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){soundcloud_oninput();},500);
                });



            function new_map(src,top,left){
                $('#board').append(
                    '<div class="box" type="map" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox">'
                +           '<iframe allowfullscreen style="width:300px;height:250px;" src="'+src+'"></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var map;
            $('.new_map').click(function(){
                if($('#new_map').val()){
                    setup_cursor('map','conflict');
                    $('#board').one('click',function(e){
                        new_map(map,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_map #board one click');
                        $('#new_map').val('');
                        after_new_component();
                        });}});
            function map_oninput(){
                map=$('#new_map').val();
                $('#new_map').parent().find('.fire').hide();
                if(map.indexOf('<iframe')!==-1){
                    map=(map.split('src="')[1]).split('"')[0];
                    }
                else if((map.indexOf('www.google')!==-1&&map.indexOf('embed?')==-1)||(map.indexOf('maps.google')!==-1&&map.indexOf('output=embed')==-1)){
                    if(map.indexOf('maps?q=')==-1&&map.indexOf('maps/embed')==-1){
                        map=map.replace('maps/','maps?q=');
                        }
                    if(map.indexOf('www.google')!==-1&&map.indexOf('embed?')==-1){
                        map=map.replace('www.google','maps.google');
                        }
                    if(map.indexOf('maps.google')!==-1&&map.indexOf('output=embed')==-1){
                        if(map.indexOf('?')!==-1){map=map+'&output=embed';}
                        else{map=map+'output=embed';}
                        }
                    if(map.indexOf('.com')==-1){
                        map=map.split('/');
                        map[2]=map[2].split('.');
                        map[2][2]='com';
                        map[2]=map[2].join('.');
                        map=map.join('/');
                        }
                    if(map.indexOf('https')!==0){
                        map='https://'+(map.replace('http://',''));
                        }}
                else if($('#new_map').val()!=''){$('#new_map').parent().find('.fire').show();}
                if(edit){
                    edit.find('iframe').attr({'src':map});
                    collect('new_map on input if edit');
                    }}
            $('#new_map').on('input',function(){
                clearTimout(timer);
                timer=setTimeout(function(){map_oninput();},500);
                });




            function new_iframe(code,top,left){//<iframe width="500" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=28.406499999999994~-16.545601000000005&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no"></iframe>
                var id=(ID+=1);
                var isme=(((code.split('src="')[1]||'').split('"')[0]||'').indexOf('https://methodise.me/'))==0;
                $('#board').append(
                    '<div class="box'+(isme?' transparent':'')+'" type="iframe" id="'+id+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       (isme?'':'<div class="box_warn tip" tip="This box contains 3rd party code, so it is not explicitly trusted by Methodise.me"><b>⚠️ </b>Warning: Never give away your private keys!</div>')
                +       '<div class="ibox">'
                +           code
                +       '</div>'
                +   '</div>');
                id=null;
                return;
                }
            var iframe;
            $('.new_iframe').click(function(){
                if($('#new_iframe').val()){
                    setup_cursor('iframe','black');
                    $('#board').one('click',function(e){
                        new_iframe(iframe,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_iframe #board one click');
                        $('#new_iframe').val('');
                        after_new_component();
                        });}});
            function iframe_oninput(){
                iframe=$('#new_iframe').val();
                $('#new_iframe').parent().find('.fire').hide();
                if(iframe==''){}
                else{
                    if(iframe.indexOf('<iframe')!==-1){
                        iframe='<iframe'+((iframe.split('<iframe')[1]).split('</iframe>')[0])+'</iframe>';
                        $('#new_iframe').val(iframe);
                        if(edit){
                            edit.find('.ibox').html(iframe);
                            collect('new_iframe on input if edit');
                            }}
                    else{$('#new_iframe').parent().find('.fire').show();}
                    }}
            $('#new_iframe').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){iframe_oninput();},500);
                });




            function new_up(href,top,left){
                $('#board').append(
                    '<div class="box transparent" type="up" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<a class="big_link_a" href="https://methodise.me/?'+href+'" url="https://methodise.me/?'+href+'">'
                +           '<img src="https://methodise.me/R/up.png" class="protect_img_board" style="width:31px;"/>'
                +       '</a>'
                +       page.links[href].preview
                +   '</div>');
                return;
                }



            function new_down(href,top,left){
                $('#board').append(
                    '<div class="box transparent" type="down" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<a class="big_link_a" href="https://methodise.me/?'+href+'" url="https://methodise.me/?'+href+'">'
                +           '<img src="https://methodise.me/R/down.png" class="protect_img_board" style="width:31px;"/>'
                +       '</a>'
                +       page.links[href].preview
                +   '</div>');
                return;
                }




            function new_twithash(hash,top,left){
                $('#board').append(
                    '<div class="box transparent" type="twithash" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox hashtag twitter">'
                +           '<a target="_blank" href="https://twitter.com/hashtag/'+hash+'"><i>'+hash+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var twithash;
            $('.new_twithash').click(function(){
                if($('#new_twithash').val()){
                    setup_cursor('twitter','conflict');
                    $('#board').one('click',function(e){
                        new_twithash(twithash,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_twithash #board one click');
                        $('#new_twithash').val('');
                        after_new_component();
                        });}});
            function twithash_oninput(){
                twithash=$('#new_twithash').val().replace('#','');
                twithash=twithash.replace('https://twitter.com/hashtag/','');
                twithash=twithash.replace('http://twitter.com/hashtag/','');
                if(edit){
                    edit.find('a').attr({'href':'https://twitter.com/hashtag/'+twithash});
                    edit.find('i').text(twithash);
                    collect('new_twithash on input if edit');
                    }}
            $('#new_twithash').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){twithash_oninput();},500);
                });




            function new_twitat(at,top,left){
                $('#board').append(
                    '<div class="box transparent" type="twitat" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox at twitter">'
                +           '<a target="_blank" href="https://twitter.com/'+at+'"><i>'+at+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var twitat;
            $('.new_twitat').click(function(){
                if($('#new_twitat').val()){
                    setup_cursor('twitter','conflict');
                    $('#board').one('click',function(e){
                        new_twitat(twitat,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_twitat #board one click');
                        $('#new_twitat').val('');
                        after_new_component();
                        });}});
            function twitat_oninput(){
                twitat=$('#new_twitat').val().replace('#','');
                twitat=twitat.replace('https://twitter.com/','');
                twitat=twitat.replace('http://twitter.com/','');
                if(edit){
                    edit.find('a').attr({'href':'https://twitter.com/'+twitat});
                    edit.find('i').text(twitat);
                    collect('new_twitat on input if edit');
                    }}
            $('#new_twitat').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){twitat_oninput();},500);
                });




            function new_gabhash(hash,top,left){
                $('#board').append(
                    '<div class="box transparent" type="gabhash" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox hashtag gab">'
                +           '<a target="_blank" href="https://gab.ai/hash/'+hash+'"><i>'+hash+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var gabhash;
            $('.new_gabhash').click(function(){
                if($('#new_gabhash').val()){
                    setup_cursor('gab','conflict');
                    $('#board').one('click',function(e){
                        new_gabhash(gabhash,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_gabhash #board one click');
                        $('#new_gabhash').val('');
                        after_new_component();
                        });}});
            function gabhash_oninput(){
                gabhash=$('#new_gabhash').val().replace('#','');
                gabhash=gabhash.replace('https://gab.ai/hash/','');
                gabhash=gabhash.replace('http://gab.ai/hash/','');
                if(edit){
                    edit.find('a').attr({'href':'https://gab.ai/hash/'+gabhash});
                    edit.find('i').text(gabhash);
                    collect('new_gabhash on input if edit');
                    }}
            $('#new_gabhash').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){gabhash_oninput();},500);
                });



            function new_gabat(at,top,left){
                $('#board').append(
                    '<div class="box transparent" type="gabat" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="ibox at gab">'
                +           '<a target="_blank" href="https://gab.ai/'+at+'"><i>'+at+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            var gabat;
            $('.new_gabat').click(function(){
                if($('#new_gabat').val()){
                    setup_cursor('gab','conflict');
                    $('#board').one('click',function(e){
                        new_gabat(gabat,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                        collect('new_gabat #board one click');
                        $('#new_gabat').val('');
                        after_new_component();
                        });}});
            function gabat_oninput(){
                gabat=$('#new_gabat').val().replace('#','');
                gabat=gabat.replace('https://gab.ai/','');
                gabat=gabat.replace('http://gab.ai/','');
                if(edit){
                    edit.find('a').attr({'href':'https://gab.ai/'+gabat});
                    edit.find('i').text(gabat);
                    collect('new_gabat on input if edit');
                    }}
            $('#new_gabat').on('input',function(){
                clearTimeout(timer);
                timer=setTimeout(function(){gabat_oninput();},500);
                });


            function new_line(orient,length,color,top,left){
                $('#board').append(
                    '<div class="box transparent'+(({'h':'','v':'','l':' deg45l','r':' deg45r'})[orient])+'" type="line" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="line '+(['l','v'].indexOf(orient)!==-1?'v':'h')+'" style="'+(['l','v'].indexOf(orient)!==-1?'height:':'width:')+length+'px;background:#'+(color||'ffffff')+';"></div>'
                +   '</div>');
                return;
                }
            var lcolor='ffffff';
            $('.new_line').click(function(){
                setup_cursor(($('#line_icon').attr('src').split('.png')[0]).split('R/')[1],'black');
                $('#board').one('click',function(e){
                    new_line($('#new_line').val(),50,lcolor,e.pageY-$('#board').offset().top,e.pageX-$('#board').offset().left);
                    collect('new_line #board one click');
                    after_new_component();
                    });});
            $('#new_line').on('change',function(){
                $('#line_icon').attr({'src':'https://methodise.me/R/line'+$(this).val().toUpperCase()+'.png'});
                if(edit){
                    edit.removeClass('deg45l deg45r').addClass((({'h':'','v':'','l':' deg45l','r':' deg45r'})[$('#new_line').val()]));
                    edit.find('.line').removeClass('v h').addClass((['v','l'].indexOf($('#new_line').val())!==-1?'v':'h'));
                    edit.find('.line').css({'background':'#'+(lcolor||'ffffff')});
                    }});
            $('#new_line_color').on('input',function(){
                lcolor=(surfacecurve.color($(this).val()).hex6()).replace('#','');
                if(edit){
                    edit.removeClass('deg45l deg45r').addClass((({'h':'','v':'','l':' deg45l','r':' deg45r'})[$('#new_line').val()]));
                    edit.find('.line').removeClass('v h').addClass((['v','l'].indexOf($('#new_line').val())!==-1?'v':'h'));
                    edit.find('.line').css({'background':'#'+(lcolor||'ffffff')});
                    }});
            var line_size=[0,0,undefined];
            $('body').on('mousedown','.line',function(ev){
                line_size=[$(ev.target).width(),$(ev.target).height(),$(ev.target.parentElement).attr('id')];
                console.log(line_size);
                $('.line').one('mouseup',function(){
                    if($('#'+line_size[2]).width()!==line_size[0]||$('#'+line_size[2]).height()!==line_size[1]){
                        console.log(line_size[2]);
                        collect('new_line size change');
                        }});});



            function getpreview(site,cb){
                if(site.indexOf('http')==-1){site='http://'+site;}
                $.get("https://methodise.me/middleman.php",{"site":site})
                .always(function(d){
                    if(!d||d==''||typeof d=='object'){cb({},false);}
                    else{
                        var legacy={};
                        var h=JSON.parse(JSON.stringify(d));
                        h=h.split('<meta ');
                        h.shift();
                        var meta={'twitter:title':'','title':'','twitter:description':'','description':'','twitter:image:src':'','twitter:image':'','og:image':''};
                        for(var i=0;i<h.length;i+=1){
                            h[i]=h[i].split('>')[0];
                            for(var tag in meta){
                                if(meta[tag]!==''){continue;}
                                if(h[i].indexOf(tag)!==-1){
                                    try{meta[tag]=(h[i].split('content="')[1]).split('"')[0];}catch(e){}
                                    break;
                                    }}}
                        //console.dir(h);
                        //console.dir(JSON.parse(JSON.stringify(meta)));
                        h={ href:site
                        ,   title:meta['twitter:title']||meta['title']
                        ,   description:meta['twitter:description']||meta['description']
                        ,   src:meta['twitter:image:src']||meta['twitter:image']||meta['og:image']
                            };
                        if(!h.title){
                            try{legacy.title=(d.split('<title>')[1]).split('</title>')[0];}catch(e){
                                try{legacy.title=(d.split('<h1>')[1]).split('</h1>')[0];}catch(e){
                                    legacy.title='';
                                    }}
                            h.title=legacy.title;
                            }
                        if(!h.description){
                            try{legacy.description=(d.split('<description>')[1]).split('</description>')[0];}catch(e){
                                legacy.description='';
                                }
                            h.description=legacy.description;
                            }
                        if(!h.src){
                            if(d.indexOf('<body')!==-1){legacy.images=d.split('<body')[1];}
                            else{legacy.images=d.split('<BODY')[1];}
                            if(legacy.images){legacy.images=legacy.images.split('src="');}
        					else{legacy.images=['https://methodise.me/R/missing_preview.png"'];}
                            for(var i=0,length=legacy.images.length;i<length;i+=1){
                                legacy.images[i]=legacy.images[i].split('"')[0];
                                if(legacy.images[i].toLowerCase().indexOf('.jpg')!==-1||legacy.images[i].toLowerCase().indexOf('.jpeg')!==-1||legacy.images[i].toLowerCase().indexOf('.png')!==-1||legacy.images[i].toLowerCase().indexOf('.gif')!==-1){
                                    h.src=legacy.images[i];
                                    break;
                                    }}}
                        meta=null;
                        if(h.src.indexOf('//')==0){h.src='http:'+h.src;}
        				else if(h.src.indexOf('http')==-1){h.src='http://'+h.src;}
                        if(h.src){
                            console.log('_'+h.src+'_');
                            getimg(h.src,function(b,bool){h.src=b;cb(h,bool);});
                            }
                        else{cb(h,true);}
                        }});}








            function getimg(img,cb){
                $.get("https://methodise.me/b64.php",{"img":img})
                 .error(function(e){;})
                 .always(function(d){
                    if(!d||d==''||typeof d=='object'){
                        cb(img,false);
                        }
                    else{
                        img=(img.split('?')[0]).split('.').pop();//get the extention
                        if(img=='gif'){img=img+';loop=0'}//bogus param with = instead of :
                        $('#new_img_test_width').replaceWith('<img id="new_img_test_width" src="'+(d.indexOf('data:image')==-1?('data:image/'+img+';base64,'):'')+d+'"/>');
                        setTimeout(function(d,cb){cb((d.indexOf('data:image')==-1?'data:image/'+img+';base64,':'')+d,true,$('#new_img_test_width').width());},100,d,cb);
                        }});}





            function geticon(site,cb){
                if(site.indexOf('http')==-1){site='http://'+site;}
                var fav=new Image();
                fav.onload=function(){getimg(fav.src,function(b,bool){cb(b,bool);});};
                fav.onerror=function(){
                    $.get("https://methodise.me/middleman.php",{"site":site})
                    .always(function(d){
                        if(!d||d==''||typeof d=='object'){cb('https://methodise.me/R/link.png',false);}
                        else{
                            if(d.indexOf('<head>')!==-1){d=(d.split('<head>')[1]).split('</head>')[0];}
    						else if(d.indexOf('<HEAD>')!==-1){d=(d.split('<HEAD>')[1]).split('</HEAD>')[0];}
                            d=d.split('<link ');
                            var ico='https://methodise.me/R/link.png';
                            for(var i=0;i<d.length;i+=1){
                                d[i]=d[i].split('>')[0];
                                if(d[i].indexOf('rel="icon"')!==-1||d[i].indexOf('rel="shortcut icon"')!==-1){
                                    ico=(d[i].split('href="')[1]||'').split('"')[0];
                                    break;
                                    }}
                            site=(site.split('//')[1]).split('/')[0];
            				if(ico.indexOf(site)==-1&&ico.indexOf('http')!=0&&ico.indexOf('//')!=0){
            					if(ico[0]=='/'){ico=site+ico;}
            					else{ico=site+'/'+ico;}
            					}
                            if(ico.indexOf('http')==-1){
                                if(ico.indexOf('//')==0){ico='http:'+ico;}
                                else{ico='http://'+ico;}
                                }
                            if(!ico){cb('https://methodise.me/R/link.png',false);}
                            else{
                                getimg(ico,function(b,bool){cb(b,bool);});
                                }}});};
                fav.src=((site+'/favicon.ico').replace('//favicon.ico','/favicon.ico'));
                }








            $(document).on('mouseenter','video',function(){
                $(this).parent().find('.onyoutube').show();
                this.setAttribute("controls","controls");
                });
            $(document).on('mouseleave','video',function(){
                this.removeAttribute("controls");
                $(this).parent().find('.onyoutube').hide();
                });
            $(document).on('mouseenter','.onyoutube',function(){
                $(this).show();
                $(this).parent().find('video').attr({"controls":"controls"});
                });
            $(document).on('mouseleave','.onyoutube',function(){
                hovers=false;
                $(this).hide();
                $(this).parent().find('video')[0].removeAttribute("controls");
                });
            $(document).on('click','.onyoutube',function(){
                window.open('https://www.youtube.com/watch?v='+$(this).parent().find('video').attr('youtube'),'_blank');
                window.focus();
                });




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
                            if($selected.find('.sheild').length==0&&$selected.hasClass('box')){
                                $selected.append('<div class="sheild" style="width:100%;height:100%;z-index:2;position:absolute;top:0px;left:0px;"></div>');
                                }
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
                                });
                            //$('.pxshift').each(function(i,v){$(v).offset({top:e.pageY+pos_y-drg_h,left:e.pageX+pos_x-drg_w});});
                            })
                        .one("mouseup",function(){
                            $(this).off("mousemove"); // Unbind events from document
                            if($selected!==null){
                                $selected.removeClass(opt.draggableClass);
                                $selected=null;
                                }});
                        e.preventDefault(); // disable selection
                        })
                    .on("mouseup",function(){
                        $(document).off("mousemove"); // Unbind events from document
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

            $('.box').drags({handle:".box_drag"});//can't be pre-set?




            $(document).on('mouseenter','.box',function(){$(this).find('.box_drag').show();});
            $(document).on('mouseleave','.box',function(){$(this).find('.box_drag').hide();});


            $(document).on('mousedown','.box_drag',function(){
                $(this).addClass('box_drag_above');
                $('.box').each(function(i,v){if(!$(v).find('.box_drag').hasClass('box_drag_above')){$(v).css({'pointer-events':'none'});}});
                $('#board').one('mouseup',function(){
                    $('.box_drag').removeClass('box_drag_above active-handle');
                    $('.box').removeClass('draggable');
                    $(document).off("mousemove"); // Unbind events from document
                    $('.sheild').remove();
                    check_out_of_range();
                    clearTimeout(collector);
                    collector=setTimeout(function(){collect('.box drag end');},500);
                    });});



            ////////////////////////////////////////////////////////////////////////////////////dragable ^

            function appposition(app){
                if(app=='?'){
                    appposition('#notepad');
                    appposition('#emojis');
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

            $(document).on('mouseenter',function(){
                appposition('?');
                });

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
                if($('#notepad_text').text()==''){$('#notepad_text').html('');}
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

            var app_which;
            var scroll;
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
            $('#notepad').on('mouseup',function(){
                appposition('#notepad');
                });
            $('#notepad').on('mousedown',function(ev){
                if($('.app').last().attr('id')!='notepad'){
                    scroll=$('#notepad_text').scrollTop();
                    $('#notepad').insertAfter($('.app').last());
                    $('#notepad_text').scrollTop(scroll);
                    //if(app_which==$(this).attr('id')&&ev.target.id!=='notepad'){console.log('yup');$(ev.target).trigger('click');}
                    //app_which=$(this).attr('id');
                    }});
            $('#notepad').on('keydown',function(){
                $('.pxshift').removeClass('pxshift');
                });


            $('#emojis').drags({handle:"#emojis_drag"});
            $('#emojis_toggle').click(function(){
                $('#emojis').toggle();
                if($('#emojis').attr('display')!='none'){
                    emojis_reason='txt';
                    scroll=$('#emojis_list').scrollTop();
                    $('#emojis').insertAfter($('.app').last());
                    $('#emojis_list').scrollTop(scroll);
                    }});
            $('#emojis_hide').click(function(){
                $('#emojis').hide();
                });
            $('#emojis').on('mouseup',function(){
                appposition('#emojis');
                });
            $('#emojis').on('mousedown',function(ev){
                if($('.app').last().attr('id')!='emojis'){
                    scroll=$('#emojis_list').scrollTop();
                    $('#emojis').insertAfter($('.app').last());
                    $('#emojis_list').scrollTop(scroll);
                    //if(app_which==$(this).attr('id')&&ev.target.id!=='emojis'){console.log('yup');$(ev.target).trigger('click');}
                    //app_which=$(this).attr('id');
                    }});
            $('#emojis').on('keydown',function(){
                $('.pxshift').removeClass('pxshift');
                });


            window.components_toggle_bounce=true;




            $('#components').drags({handle:"#components_drag"});
            $('#components_toggle').click(function(){
                $(this).removeClass('components_toggle_bounce');
                $('#components').toggle();
                if($('#components').attr('display')!='none'){
                    scroll=$('#components_list').scrollTop();
                    $('#components').insertAfter($('.app').last());
                    $('#components_list').scrollTop(scroll);
                    }});
            $('#components_hide').click(function(){
                $('#components').hide();
                });
            $('#components').on('mouseup',function(){
                appposition('#components');
                });
            $('#components').on('mousedown',function(ev){
                if($('.app').last().attr('id')!='components'){
                    scroll=$('#components_list').scrollTop();
                    $('#components').insertAfter($('.app').last());
                    $('#components_list').scrollTop(scroll);
                    //if(app_which==$(this).attr('id')&&ev.target.id!=='components'){console.log('yup');$(ev.target).trigger('click');}
                    //app_which=$(this).attr('id');
                    }});
            $('#components').on('keydown',function(){
                $('.pxshift').removeClass('pxshift');
                });










            $('#grid_toggle').on('click',function(){$('#grid').toggle();});



            $('.personal_miner_toggle').click(function(){
                $('.personal_miner_toggle').toggle();
                if($('#personal_miner').css('display')!=='none'){
                    ('mining');
                    }
                else{
                    ('idle');
                    }});









            var adblock=true;
            try{if(OMINE){adblock=false;}}catch(e){}
            var miners={};
            var mining_info_text='0 Generators';
            $('#page_height,.options').click(function(){
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
                $('#mining_info').text($(this).attr('info').replace('()',(($(this).find('.lessthreads').height()/2)/10)+' workers'));
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
                    me=JSON.parse($.localStorage.getItem('me'));
                    me.mining_settings[miner]=threads;
                    if(!adblock&&me.monero_public&&miner==0){
                        mine(me.monero_public,me.mining_settings,'You',miner);
                        }
                    else if(!adblock&&miner==2){
                        mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',miner);
                        }
                    mining_fairness();
                    save('more mining threads');
                    }
                that=null;
                });
            $('.lessthreads').click(function(){
                if($(this).height()>0){
                    $(this).css({'height':($(this).height()-20)+'%'});
                    threads=($(this).height()/2)/10;
                    $('#mining_info').text($(this).closest('.mining_hover_info').attr('info').replace('()','('+threads+' workers)'));
                    miner=$(this).closest('.mining_hover_info').attr('id').split('')[1];
                    me=JSON.parse($.localStorage.getItem('me'));
                    me.mining_settings[miner]=threads;
                    if(!adblock&&me.monero_public&&miner==0){
                        mine(me.monero_public,me.mining_settings,'You',miner);
                        }
                    else if(!adblock&&miner==2){
                        mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',miner);
                        }
                    mining_fairness();
                    save('less mining threads');
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
                if(me.personal_miner&&me.mining_settings[0]<0){
                    if(me.mining_settings[2]==0){
                        me.mining_settings[2]=1;
                        mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',2);
                        }
                    $('#m2').find('.lessthreads').css({'height':(me.mining_settings[2]*20)+'px'});
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



            delete page.colors;//todo remove


            function load(){
                var httpsbg=page.url?('https://methodise.me/middleman.php?site='+page.url):'';
                var style=[
                    '#board_bg{background-image:url('+httpsbg+');}#board_bg{background-color:'+page.bg+';}'
                ,   '#board_bg{background-repeat:repeat;background-size:auto;}'
                ,   '.box{background:'+page.box+';}.tyt,.txt{text-shadow:0 0 1px '+page.box+',0 0 1px '+page.box+',0 0 1px '+page.box+';}'
                ,   '.tyt,.txt{color:'+page.text+';}'
                ,   '.link a{color:'+page.link+';}'
                ,   '.line{background:'+page.line+';}'
                ,   '#board_bg{filter:blur('+page.blur+');}'
                ,   '#logo{filter:hue-rotate('+page.logo+'deg);}'
                    ];
                $('#board_font').on('input',function(){//https://fonts.google.com/?selection.family=Roboto
                    $(this).parent().find('.fire').hide();
                    var font=$(this).val();
                    try{font=(font.split('selection.family=')[1]).split('|')[0];}catch(e){font='';}
                    if((font==''&&$(this).val()!=='')||(font.match(/[a-zA-Z0-9\\+]/g)||'').length!=font.length){page.font='';$(this).parent().find('.fire').show();}
                    else if($(this).val()==''){
                        page.font='';
                        $('#font_style').replaceWith('<link id="font_style">');
                        $('#board').css({'font-family':''});
                        }
                    else{
                        page.font=font;
                        $('#font_style').replaceWith('<link id="font_style" href="https://fonts.googleapis.com/css?family='+page.font+'" rel="stylesheet">');
                        $('#board').css({'font-family':"'"+page.font.split('+').join(' ')+"'"+',NotoColorEmoji'});
                        }
                    if(me.drafts[page.id]){
                        me=JSON.parse($.localStorage.getItem('me'));
                        me.drafts[page.id].font=page.font;
                        save('font change');
                        }});
                if(page.font&&page.font!==''){
                    $('#font_style').replaceWith('<link id="font_style" href="https://fonts.googleapis.com/css?family='+page.font+'" rel="stylesheet">');
                    $('#board').css({'font-family':"'"+page.font.split('+').join(' ')+"'"+',NotoColorEmoji'});
                    $('#board_font').val('https://fonts.google.com/?selection.family='+page.font);
                    }
                $('#bg_url').on('input',function(){
                    page.url=$(this).val();
                    httpsbg=page.url?('https://methodise.me/middleman.php?site='+page.url):'';
                    if(page.url==''){style[0]='#board_bg{background-image:none);}#board_bg{background-color:'+page.bg+';}';}
                    else{style[0]='#board_bg{background-image:url('+httpsbg+');}#board_bg{background-color:'+page.bg+';}';}
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].url=page.url;}
                    save('#bg_url input');
                    ;});
                $('#bg_color').on('input',function(){
                    page.bg=surfacecurve.color($('#bg_color').val()).html();
                    if(page.url==''){style[0]='#board_bg{background-image:none);}#board_bg{background-color:'+page.bg+';}';}
                    else{style[0]='#board_bg{background-image:url('+httpsbg+');}#board_bg{background-color:'+page.bg+';}';}
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].bg=page.bg;}
                    save('#bg_color input');
                    });
                $('#bg_repeat').on('change',function(){
                    if($(this).is(':checked')){
                        page.repeat='true';
                        style[1]='#board_bg{background-repeat:repeat;background-size:auto;}';
                        }
                    else{
                        page.repeat='false';
                        style[1]='#board_bg{background-repeat:no-repeat;background-size:cover;}';
                        }
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].repeat=page.repeat;}
                    save('#bg_repeat change');
                    });
                $('#bg_blur').on('input',function(){
                    page.blur=$(this).val();
                    style[6]='#board_bg{filter:blur('+page.blur+'px);}';
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].blur=page.blur;}
                    save('#bg_blur change');
                    });
                $('#alpha_box_color,#box_color').on('input',function(){
                    $('#box_color').css({'opacity':$('#alpha_box_color').val()});
                    page.box=surfacecurve.color($('#box_color').val()).alpha($('#alpha_box_color').val()).html();
                    style[2]='.box{background:'+page.box+';}.tyt,.txt{text-shadow:0 0 1px '+page.box+',0 0 1px '+page.box+',0 0 1px '+page.box+';}';
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].box=page.box;}
                    save('#alpha_box_color,#box_color input');
                    });
                $('#alpha_text_color,#text_color').on('input',function(){
                    $('#text_color').css({'opacity':$('#alpha_text_color').val()});
                    page.text=surfacecurve.color($('#text_color').val()).alpha($('#alpha_text_color').val()).html();
                    style[3]='.tyt,.txt{color:'+page.text+';}';
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].text=page.text;}
                    save('#alpha_text_color,#text_color input');
                    });
                $('#alpha_link_color,#link_color').on('input',function(){
                    $('#link_color').css({'opacity':$('#alpha_link_color').val()});
                    page.link=surfacecurve.color($('#link_color').val()).alpha($('#alpha_link_color').val()).html();
                    style[4]='.link a{color:'+page.link+';}';
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].link=page.link;}
                    save('#alpha_link_color,#link_color input');
                    });
                $('#alpha_line_color,#line_color').on('input',function(){
                    $('#line_color').css({'opacity':$('#alpha_line_color').val()});
                    page.line=surfacecurve.color($('#line_color').val()).alpha($('#alpha_line_color').val()).html();
                    style[5]='.line{background:'+page.line+';}';
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].line=page.line;}
                    save('#alpha_line_color,#line_color input');
                    });
                $('#logo_hue').on('input',function(){
                    page.logo=$(this).val();
                    style[7]='#logo{filter:hue-rotate('+page.logo+'deg);}';
                    $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                    me=JSON.parse($.localStorage.getItem('me'));
                    if(me.drafts[page.id]){me.drafts[page.id].logo=page.logo;}
                    save('#logo_hue input');
                    });
                var $0da2f4='#0da2f4',_0da2f4;
                var $007dc3='#007dc3',_007dc3;
                var $0289d4='#0289d4',_0289d4;
                function change_ui_colors(){
                    _0da2f4=surfacecurve.color(surfacecurve.color(surfacecurve.color(surfacecurve.color($0da2f4).hue('+'+$('#hue').val()).hex6()).shade($('#black').val()).hex6()).tint($('#white').val()).hex6()).saturation($('#saturation').val()).hex6();
                    _007dc3=surfacecurve.color(surfacecurve.color(surfacecurve.color(surfacecurve.color($007dc3).hue('+'+$('#hue').val()).hex6()).shade($('#black').val()).hex6()).tint($('#white').val()).hex6()).saturation($('#saturation').val()).hex6();
                    _0289d4=surfacecurve.color(surfacecurve.color(surfacecurve.color(surfacecurve.color($0289d4).hue('+'+$('#hue').val()).hex6()).shade($('#black').val()).hex6()).tint($('#white').val()).hex6()).saturation($('#saturation').val()).hex6();
                    $('#custom-ui-colors').replaceWith(
                        '<style id="custom-ui-colors">'
                    +       '#header,.menu_button,.options > div,#page_height{background:'+_0da2f4+';}'
                    +       '.inp-lable{color:'+_0da2f4+';}'
                    +       '.options,.tab{background:'+_0289d4+';}'
                    +   '</style>'
                        );
                    page.ui=[$('#hue').val(),$('#black').val(),$('#white').val(),$('#saturation').val()].join(',');
                    if(loaded==1){
                        me=JSON.parse($.localStorage.getItem('me'));
                        if(me.drafts[page.id]){me.drafts[page.id].ui=page.ui;}
                        save('change_ui_colors');
                        }
                    return;
                    }
                $('#hue,#white,#black,#saturation').on('input',change_ui_colors);
                $('#hue').val(page.ui.split(',')[0]);
                $('#black').val(page.ui.split(',')[1]);
                $('#white').val(page.ui.split(',')[2]);
                $('#saturation').val(page.ui.split(',')[3]);
                change_ui_colors();
                if(page.repeat=='false'){style[1]='#board_bg{background-repeat:no-repeat;background-size:cover;}';}
                $('#bg_repeat').prop({'checked':(page.repeat=='true'?true:false)});
                if(page.url==''){style[0]='#board_bg{background-image:none);}#board_bg{background-color:'+page.bg+';}';}
                else{style[0]='#board_bg{background-image:url('+httpsbg+');}#board_bg{background-color:'+page.bg+';}';}
                $('#bg_url').val(page.url);
                $('#bg_color').val(surfacecurve.color(page.bg).hex6());
                $('#box_color').val(surfacecurve.color(page.box).hex6());
                $('#alpha_box_color').val(page.box.replace('rgba(','').replace(')','').split(',')[3]);
                $('#box_color').css({'opacity':$('#alpha_box_color').val()});
                style[2]='.box{background:'+page.box+';}.tyt,.txt{text-shadow:0 0 1px '+page.box+',0 0 1px '+page.box+',0 0 1px '+page.box+';}';
                $('#text_color').val(surfacecurve.color(page.text).hex6());
                $('#alpha_text_color').val(page.text.replace('rgba(','').replace(')','').split(',')[3]);
                $('#text_color').css({'opacity':$('#alpha_text_color').val()});
                style[3]='.tyt,.txt{color:'+page.text+';}';
                $('#link_color').val(surfacecurve.color(page.link).hex6());
                if(page.link&&typeof page.link.replace=='function'){$('#alpha_link_color').val(page.link.replace('rgba(','').replace(')','').split(',')[3]);}//an error was here undefined.replace is not a function
                $('#link_color').css({'opacity':$('#alpha_link_color').val()});
                style[4]='.link a{color:'+page.link+';}';
                $('#line_color').val(surfacecurve.color(page.line).hex6());
                $('#alpha_line_color').val(page.line.replace('rgba(','').replace(')','').split(',')[3]);
                $('#line_color').css({'opacity':$('#alpha_line_color').val()});
                style[5]='.line{background:'+page.line+';}';
                $('#bg_blur').val(page.blur);
                style[6]='#board_bg{filter:blur('+page.blur+'px);}';
                $('#logo_hue').val(page.logo);
                style[7]='#logo{filter:hue-rotate('+page.logo+'deg);}';
                $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                function got_items(){
                    $('.box').each(function(i,v){
                        if(['up','down'].indexOf($(v).attr('type'))!==-1){
                            G.setup_preview($(v).attr('id'));
                            }});
                    return;
                    }


                window.stop=false;

                if(!page.published){

                    $('#done_save').removeClass('unauthorised');
                    $('#done_save').click(function(){
                        window.onbeforeunload=null;
                        window.onunload=null;
                        window.onbeforeunloads=false;
                        var original=JSON.stringify(page.board);
                        if(me.drafts[page.id]&&!$('.box').length){
                            me=JSON.parse($.localStorage.getItem('me'));
                            var Q=confirm("This draft is blank. Do you wan't to keep it?");
                            if(Q==false){
                                delete me.drafts[page.id];
                                save('delete blank draft on exit');
                                setTimeout(function(done){window.location.href='https://methodise.me/?'+done;},1000,G.done);
                                }
                            else{
                                save('keep blank draft on exit');
                                setTimeout(function(done){window.location.href='https://methodise.me/?'+done;},1000,G.done);
                                }}
                        else{
                            setTimeout(function(done){window.location.href='https://methodise.me/?'+done;},1000,G.done);
                            }});
                    $('#done_revert').removeClass('unauthorised');
                    $('#done_revert').on('click',function(){
                        var Q=confirm("Are you sure you want to disgard all changes?");
                        if(Q==false){
                            alert('No changes lost!');
                            }
                        else{
                            me.drafts[revert.id]=revert;
                            page=revert;
                            if(page.board.length==0){
                                delete me.drafts[page.id];//if the user has chosen to not save a blank page; delete it!
                                }
                            save('revert');
                            window.onbeforeunload=null;
                            window.onunload=null;
                            var original=JSON.stringify(page.board);
                            window.onbeforeunloads=false;
                            window.location.href='https://methodise.me/?'+revert.id;
                            }});
                    var revert=JSON.parse(JSON.stringify(page));

                    display(function(){
                        got_items();
                        loaded=1;
                        showquality();
                        REWIRE();
                        });}
                else{
                    got_items();
                    showquality();
                    $('#button_done').addClass('unauthorised');
                    loaded=1;
                    REWIRE();
                    }
                };
            load();

            });

        </script>



    </body>
</html>
