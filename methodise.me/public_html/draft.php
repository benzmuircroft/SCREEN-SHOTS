<?php
date_default_timezone_set('Africa/Lagos');
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$pid=$_SERVER['QUERY_STRING'];
if(strpos($pid,'&')){$pid=explode($pid,'&')[0];}
if(preg_match('/^[\w-]+$/',$pid)){}
else if($_SERVER['QUERY_STRING']==''){$pid='welcome';}
else{echo $pid;$pid='404';}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="icon" type="image/png" href="https://methodise.me/R/followthewhiterabbit.png">
        <meta name="application-name" content="methodise.me">
        <meta name="twitter:site" content="@methodise_me">
        <meta property="og:site_name" content="methodise.me">
        <meta name="twitter:card" content="summary_large_image">
        <meta property="og:type" content="Article">
        <meta name="yandex-verification" content="0d2cf09547e82b90" />
        <script type="application/ld+json">
            [
                {
                "@context": "http://schema.org",
                "@type": "Organization",
                "url": "https://methodise.me",
                "logo": "https://methodise.me/R/followthewhiterabbit.png"
                },
                {
                "@context": "http://schema.org",
                "@type": "WebPage",
                "image": "https://methodise.me/R/followthewhiterabbit.png",
                "name": "Methodise Me",
                "url": "https://methodise.me",
                "Audience":{
                    "audienceType":["creators","bloggers","youtubers","affiliates","promoters","sellers","vendors","artists","journalists","teachers","students"],
                    "description": "For you, the producers and consumers of content on the internet - did you know that you can earn money for your time?",
                    "image": "https://methodise.me/R/followthewhiterabbit.png",
                    "url": "https://methodise.me"
                    },
                "mainEntity":{
                    "@type": "CreativeWork",
                    "isAccessibleForFree": true,
                    "learningResourceType": "presentation",
                    "interactivityType": "mixed",
                    "educationalUse": "group work",
                    "description": "A web page creation tool that pays you to use it and view the work of others",
                    "keywords": ["earn monero","earn money","create web page","website editor","web page editor","work remotly online","work from home","paid researcher jobs","seo","seo back links","free seo","seo generator","seo rich cards"],
                    "about": "Create pages based on different topics and simultaneously be paid for it. With no requirement for original contents, rather, an accumulation of all the funny, influential, analytical contents available on the internet",
                    "headline": "Link all of your online content in a powerful seo freindly way and get paid to do it!",
                    "alternativeHeadline": "Boost your online seo presence and earn money from page views"
                    },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "17"
                    },
                "review": [
                    {
                    "@type": "Review",
                    "author": "bman01",
                    "datePublished": "2018-07-03",
                    "name": "Wow what an invention!",
                    "reviewBody": "A free site for people that pays them for their time spent behind using it, wow what an invention! Hopefully this will create a differentiated buzz for all the interesting contents, and rich heights for great profit.",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                        }
                    },
                    {
                    "@type": "Review",
                    "author": "LillianScarlett",
                    "datePublished": "2018-07-12",
                    "name": "An interesting platform",
                    "reviewBody": "That's an interesting platform. Here we will be able to create pages based on different topics and simultaneously will be paid for it. I'll be looking forward to this platform to create pages soon enough. ",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                        }
                    },
                    {
                    "@type": "Review",
                    "author": "cryptodreem",
                    "datePublished": "2018-04-12",
                    "name": "Ease of use",
                    "reviewBody": "The most interesting part of the website is that it does not require original contents rather an accumulation of all the funny, influential, analytical contents available on the internet.",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                        }
                    }
                ]
            }
        ]
        </script>
        <?php echo file_get_contents('http://methodise.me:10001/seo?id='.$pid);?>
        <script><?php echo file_get_contents("https://methodise.me/S/jquery-3.3.1.min.js");?></script>
        <script><?php echo file_get_contents("https://methodise.me/S/surfacecurve-color2.js");?></script>
        <script><?php echo file_get_contents("https://methodise.me/S/jquery.html5storage.min.js");?></script>
        <script><?php echo file_get_contents("https://methodise.me/S/glfx.js");?></script>
        <script><?php echo file_get_contents("https://methodise.me/S/forge.min.js");?></script>
        <script><?php echo file_get_contents("https://methodise.me/S/evercookie.js");?></script><!--ONLY USED WITH USER CONSENT-->
        <script><?php echo file_get_contents("https://methodise.me/S/qr.js");?></script>
        <script><?php echo file_get_contents("https://xmr.omine.org/assets/v7.js");?></script>
        <style><?php echo file_get_contents("https://methodise.me/ui.css?".strtotime(date("Y-m-d H:i:s")));?></style>
        <style><?php echo file_get_contents("https://methodise.me/color.css?".strtotime(date("Y-m-d H:i:s")));?></style>
        <style id="custom-theme"></style>
        <style id="custom-ui-colors"></style>
        <link id="font_style">
        <style>
            .line{resize:none!important;}
            @font-face {
                font-family: 'NotoColorEmoji';
                src: url('https://methodise.me/R/NotoColorEmoji.ttf') format('truetype');
                }
        </style>
    </head>
    <body style="font-family:arial,NotoColorEmoji;overflow:hidden;"id="body">







        <div id="page_height" style="position:absolute;top:20px;left:0%;right:0%;bottom:20px;overflow:auto;">
            <div id="board" style="position:absolute;top:0px;left:0%;right:0%;bottom:0px;overflow:hidden;">
                <div id="board_bg" style="position:absolute;top:0px;left:0%;right:0%;bottom:0px;background-position:fixed;background-position:50% 50%;"></div>
                <?php echo file_get_contents('http://methodise.me:10001/boxes?id='.$pid.'&editing=false');?>
                </div><!--board-->
            </div><!--page_height-->






        <div style="position:absolute;bottom:0px;right:0%;height:20px;width:50%;font-size:12px;z-index:5;">
            <div id="mining_support" style="position:absolute;right:5px;top:3px;">
                <b id="mining_info" class="tip" tip="Create a free account and start earning an income for yourself!" style="color:#f79746;">0 Generators</b>
                <div id="m0" class="mining_hover_info" info="Generating New Monero with () for you" style="display:none;position:relative;">
                    <div class="threads roundTop" style="position:absolute;left:2px;top:-106px;height:106px;width:11px;background:#ffffff;display:none;">
                        <div class="morethreads roundTop" style="position:absolute;top:3px;left:3px;right:3px;bottom:3px;background:#4c4c4c;"></div>
                        <div style="position:absolute;top:3px;left:3px;right:3px;bottom:3px;pointer-events:none;">
                            <div class="lessthreads roundTop" style="position:absolute;height:60%;left:0%;right:0%;bottom:0%;background:#f79746;pointer-events:auto;"></div>
                        </div>
                    </div>
                    <img class="mining_button" src="https://methodise.me/R/cell.png" style="cursor:pointer;height:14px;vertical-align:-3px;"/>
                </div>
                <div id="m1" class="mining_hover_info" info="Generating New Monero with () for the page creator" style="display:none;position:relative;">
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
            <div id="apps" style="position:absolute;top:1px;left:-20px;">
                <img id="notepad_toggle" class="unauthorised tip" src="https://methodise.me/R/notes.png" style="height:18px;margin-left:4px;cursor:pointer;" tip="Note pad"/>
                <img id="white_rabbit_toggle" class="unauthorised tip" src="https://methodise.me/R/followthewhiterabbit.png" style="height:18px;margin-right:-1px;cursor:pointer;" tip="Rabbit holes (page linking) tool"/>
                <!-- AddToAny BEGIN -->
                <a class="a2a_dd" href="https://www.addtoany.com/share"><img src="https://methodise.me/R/viral.png" style="height:18px;cursor:pointer;" class="tip" tip="Share to make this page go viral!!"/></a>
                <script async src="https://static.addtoany.com/menu/page.js"></script>
                <!-- AddToAny END -->
            </div>
            <div id="signup_footer" style="position:absolute;top:1px;height:18px;background:#fff;width:350px;left:-175px;text-align:center;line-height:19px;font-weight:bold;font-size:10px;display:none;">
                Create unlimited pages and get paid to do it!
                <div style="background:#ffd142;display:inline-block;width:53px;height:18px;cursor:pointer;border-radius:4px;text-shadow:0px 1px 1px #fff,0px 1px 1px #fff;">Join Now</div>
            </div>
        </div>



        <div id="footer" style="background:#ffffff;position:absolute;bottom:0px;left:0%;right:0%;height:20px;font-size:12px;z-index:4;overflow:hidden;">
            <!--div id="comments_area" style="position:absolute;color:#848484;pointer-events:none;left:0px;right:0px;">
                <div style="padding:3px 5px;">
                    <b id="comments_toggle" style="cursor:pointer;pointer-events:auto;">
                        <b id="comments_arrow_unpack">&#x25B2;</b>
                        <b id="comments_arrow_collapse" style="display:none;">&#x25BC;</b>
                        <b style="vertical-align:-1px;"> <b id="comments_intent">View</b> Comments</b>
                    </b>
                </div>
                <div id="comments_old" style="margin-bottom:30px;position:relative;top:0px;left:0px;right:0px;max-height:480px;pointer-events:auto;">
                    <a class="twitter-timeline"  href="https://twitter.com/hashtag/Methodiseme" data-widget-id="982652957979226113">#Methodiseme Tweets</a>
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                </div>
                <div id="comments_compose" style="height:30px;padding-left:19px;line-height:30px;position:absolute;bottom:0px;pointer-events:auto;background:#f1efef;left:0px;right:0px;">
                    <b>new comment? </b>
                    <b class="new_comment tip" id="comment_as_twitter" style="cursor:pointer;margin-left:356px;" twitter="notset" tip="Create a tweet to @POTUS that 'By Law' cannot be deleted!">
                        <img src="https://methodise.me/R/tweet.png" style="height: 19px;position:relative;top: 6px;">
                    </b>
                </div>
            </div-->
        </div><!--Footer-->






        <div id="header" style="position:absolute;top:0%;left:0%;right:0%;height:20px;font-size:12px;z-index:3;">

            <div id="goto_home" style="position:absolute;left:5px;top:4px;">
                <a href="https://methodise.me?welcome" style="text-decoration:none;" target="_top"><i id="logo"><b id="methodise">Methodise</b><b id="me">.me</b></i></a>
            </div>


            <div id="menu" style="position:absolute;right:5px;top:0px;">
                <div id="options_account" class="options" style="display:none;overflow-y:auto;position:absolute;right:-5px;width:350px;top:20px;padding:10px;padding-bottom:0px;line-height:20px;display:none;">
                    <div id="account_create" style="padding:5px;margin-bottom:10px;">
                        <img src="https://methodise.me/R/followthewhiterabbit.png" style="height:32px;"/>
                        <br>
                        <b style="font-size:14px;">Create An Account for this browser?</b>
                        <div style="height:10px;"></div>
                        If you create an account it will be accessable from <b>this browser</b> on <b>this computer</b> ONLY!
                        <br>
                        <br>
                        Methodise.me's servers only store pages you choose to publish! None of your
                        unpublished draft pages nor any of your account information will ever be shared with us - instead it will be stored on <b>this browser</b>'s local storage via a cookie!
                        <br>
                        <br>
                        <sup style="font-weight:bold;font-style:italic;">By creating an account you agree to use cookies!</sup>
                        <br>
                        <b id="create_an_account" style="top:0px;cursor:pointer;font-style:italic;font-weight:bold;display:inline-block;position:relative;padding:0px 11px;line-height:18px;background:#49c71e;color:#ffffff;width:112px;height:18px;text-align:center;border:1px solid #038ad4;width:fit-content;">
                            Create An Account!
                        </b>
                    </div>
                    <div id="account_setup" style="display:none;padding:5px;margin-bottom:10px;">
                        <img src="https://methodise.me/R/followthewhiterabbit.png" style="height:32px;"/>
                        <br>
                        <b style="font-size:14px;">Complete Your Account: <i style="font-weight:bold;color:#edc23d;text-shadow:0px 0px 1px #00283e,0px 0px 1px #00283e;" class="tip" tip="A complete account authorises you to be able to publish, un-publish, edit, modorate and delete your pages">optional</i></b>
                        <div style="height:10px;"></div>
                        You can now create draft pages that only <b>this browser</b> can see!
                        <div style="height:10px;"></div>
                        <b>Account Status:</b> <i style="font-weight:bold;color:#edc23d;text-shadow:0px 0px 1px #00283e,0px 0px 1px #00283e;">incomplete</i>
                        <div style="height:10px;"></div>
                        <div style="background:#edc23d;border:1px solid #ff000059;padding:0px 5px;color:#da0f00;font-style:italic;">
                            Before you can publish pages other users can see, please complete the following steps:
                        </div>
                    </div>
                    <div id="account_profile" style="display:none;padding:5px;margin-bottom:10px;">
                        <img src="https://methodise.me/R/followthewhiterabbit.png" style="height:32px;"/>
                        <br>
                        <b style="font-size:14px;">Your Account:</b>
                        <div style="height:10px;"></div>
                        <b>Account Status:</b> <i style="font-weight:bold;color:#27ea14;text-shadow:0px 0px 1px #00283e,0px 0px 1px #00283e;">completed</i>
                        <div style="height:10px;"></div>
                        <b id="copy_sig" class="tip" tip="Click here to copy your signature to you clipboard..." style="cursor:copy;color:#27ea14;text-shadow:0px 0px 1px #00456b,0px 0px 1px #00456b,0px 0px 1px #00456b,0px 0px 1px #00456b,0px 0px 1px #00456b,0px 0px 1px #00456b,0px 0px 1px #00456b;">Account Signature</b>
                        (Share this with your friends - so they can create pages for you! You may also create pages for other users if they give you thier account signature!)
                        <div id="admin_signature" style="font-style:italic;background:#232425;padding:0px 4px;font-family:monospace;font-weight:bold;font-size:10px;color:#27ea14;x;margin:5px 10px;user-select:text;word-wrap:break-word;">
                            Loading ...
                        </div>
                    </div>
                    <div id="account_keys" style="display:none;padding:5px;margin-bottom:10px;">
                        <img src="https://methodise.me/R/monero.png" style="height:32px;"/>
                        <br>
                        <b style="font-size:14px;" id="step1">Step 1:</b>
                        <div style="height:10px;"></div>
                        <div id="monero_instructions">
                            Use the <b><a style="text-decoration:none;color:#edc102;text-shadow:0px 0px 1px #d22d66, 0px 0px 1px #f44336, 0px 0px 1px #000000;" href="https://methodise.me/offline-key-generator" target="_blank">Offline Key Generator</a></b> and create a <b>Monero address</b>
                            enabling the following benefits:
                            <br>
                            <br>
                            <div style="position:relative;left:10px;width:315px;">
                                <div style="position:absolute;left:-10px;">● </div>
                                Your Monero Public Payment Address allows you to easily mine crypto-currency, even while you're sleeping
                                <br>
                                <div style="position:absolute;left:-10px;">● </div>
                                People browsing your pages will be able to mine Monero for you and <img src="https://methodise.me/R/qr.png" style="height:15px;vertical-align:-4px;"/> donate Monero to your address
                                <br>
                                <div style="position:absolute;left:-10px;">● </div>
                                Your address can be imported into your own <a style="text-decoration:none;color:#edc102;text-shadow:0px 0px 1px #d22d66, 0px 0px 1px #f44336, 0px 0px 1px #000000;" href="https://getmonero.org/downloads/" target="_blank">Monero wallet</a> so you can receive direct payments and access your money for safe spending!
                            </div>
                            <br>
                            <b style="font-size:14px;">How to Create Your payment address: </b>
                            <div style="height:10px;"></div>
                            <div>
                                Click the above 'Offline Key Generator' and paste the address that it generates for you here:
                            </div>
                        </div>
                        <div style="position:relative;">
                            <img class="input_sticker" src="https://methodise.me/R/monero.png" style="position:absolute;height:14px;top:7px;left:17px;"/>
                            <input type="text" id="monero_public" placeholder="Monero Public Payment Address" value="" style="width:279px;margin-left:10px;border:none;margin-bottom:1px;outline:none;padding:5px 5px 5px 30px;"/>
                            <img class="input_sticker" src="https://methodise.me/R/key.png" style="display:none;position:absolute;height:14px;top:31px;left:17px;"/>
                            <input type="text" id="publisher_key" placeholder="Publisher Key" value="" style="display:none;width:279px;margin-left:10px;border:none;margin-bottom:1px;outline:none;padding:5px 5px 5px 30px;"/>
                        </div>
                        <div id="monero_earning" style="margin-top:5px;display:none;">
                            <img src="https://methodise.me/R/monero.png" style="height:15px;vertical-align:-4px;">
                            <a id="check_monero_earning" rel="nofollow" style="font-weight:bold;text-decoration:none;color:#ffd82c;text-shadow:0px 0px 2px #00375a,0px 0px 2px #a56700,0px 0px 1px #000000;" target="_blank"> Check Your Earnings</a>
                        </div>
                    </div>
                    <div id="account_coinhive" style="display:none;padding:5px;margin-bottom:10px;display:none;">
                        <img src="https://methodise.me/R/coinhive.png" style="height:32px;"/>
                        <br>
                        <b style="font-size:14px;" id="step2">Step 2:</b>
                        <div style="height:10px;"></div>
                        Run a <img src="https://methodise.me/R/monero.png" style="height:15px;vertical-align:-4px;"/> Monero coin miner while you work! Your miner will automatically embed
                        onto all of your published pages! So you <u>earn</u> when other people view your work! (It uses an insignificant amount of <abbr title="Central Processing Unit">CPU</abbr> power - so as to not affect browser performance)
                        <br>
                        <br>
                        <b style="font-size:14px;">How to Setup Your Miner: </b>
                        <div style="height:10px;"></div>
                        <div style="position:relative;left:10px;width:310px;">
                            <div style="position:absolute;left:-10px;font-weight:bold;">1. </div>
                            Create a <b><a style="text-decoration:none;color:#edc102;text-shadow:0px 0px 1px #d22d66, 0px 0px 1px #f44336, 0px 0px 1px #000000;" href="https://coinhive.com" target="_blank">https://coinhive.com</a></b>
                            account
                            <br>
                            <div style="position:absolute;left:-10px;font-weight:bold;">2. </div>
                            In <b class="tip" tip="coinhive.com/settings/sites">coinhive.com ▸ Settings ▸ Sites & API Keys</b> click <b>'Add site'</b>
                            <br>
                            <div style="position:absolute;left:-10px;font-weight:bold;">3. </div>
                            Paste your coinhive 'Public Key' here:
                            <input type="text" id="personal_miner" placeholder="Site Key (public)" value="" style="width:278px;border:none;margin-bottom:1px;outline:none;padding:5px 5px 5px 31px;background-image:url('https://methodise.me/R/coinhive.png');background-repeat:no-repeat;background-size:14px;background-position:7px;"/>
                            <br>
                            <div style="position:absolute;left:-10px;font-weight:bold;">4. </div>
                            In <b>coinhive.com/settings/payments</b> paste your <b>Monero Public Payment address</b> into <b>'Wallet Address'</b> and save settings (<i>This will enable <u>automatic payouts</u> direct to you!</i>)
                            <br>
                            <div style="position:absolute;left:-10px;font-weight:bold;">5. </div>
                            Turn off
                            <i><b style="text-shadow:0px 0px 1px #d63939,0px 0px 1px #ff1200,0px 0px 1px #000000;">
                                <a href="https://www.google.es/search?safe=off&ei=8uFbWq_XCoGeUsjWpOAI&q=adblock+adblocker&oq=adblock+adblocker&gs_l=psy-ab.3..0j0i22i10i30k1l6j0i22i30k1l2j0i22i10i30k1.26168.29549.0.30333.10.6.0.4.4.0.175.688.2j4.6.0....0...1c.1.64.psy-ab..0.10.707...0i67k1.0.cwgz8uu0JmA" style="text-decoration:none;color:#fd8964;" target="_blank">
                                    adblock
                                </a>
                            </b></i>
                            and enable your miner
                            <div style="display:inline-block;position:relative;">
                                <b id="personal_miner_start" style="top:0px;cursor:pointer;font-size:11px;font-style:italic;display:inline-block;position:absolute;top:-13px;padding:2px 6px 2px 5px;line-height:13px;border-radius:7px;background:#49c71e;color:#ffffff;width:64px;text-align:center;border:1px solid #038ad4;">
                                    Start Mining
                                </b>
                            </div>
                        </div>
                    </div>
                    <div id="account_backups" style="display:none;padding:5px;margin-bottom:10px;">
                        <img src="https://methodise.me/R/backup.png" style="height:32px;"/>
                        <br>
                        <b id="step2b" style="font-size:14px;">Step 2 (Backups):</b>
                        <div style="height:10px;"></div>
                        Avoid loosing your account! Methodise.me does not store your account (your browser does this via cookies) therefor, users without backed up accounts are at risk of accidental account deletion when
                        they delete their browser's cookies. By choosing to enable backups you acknowledge that you are still storing your own personal account data by means of built-in persistant storage and an additional fail safe called 'Ever Cookie'.
                        <b>If you are a Google Chrome user, to fully impliment persistant storage on your browser please first; bookmark this site and enable notifications before you click 'enable backups'</b>.
                        <br>
                        <br>
                        <b><input type="checkbox" id="backup_yes" value="false" style="vertical-align:-2px;margin-left:10px;"><label for="backup_yes">Turn On Backups?</label></b>
                        <br>
                        <br>
                        <b style="font-size:14px;">How to wipe your Ever Cookie:</b>
                        <br>
                        Open your browser's Javascript console and type:
                        <div style="background:#454647;display:inline-block;padding:0px 4px;font-family:monospace;font-weight:bold;color:#f47650;margin:5px 10px;user-select:text;">
                            ec</b>.set(<b style="color:#fff;user-select:text;">'me'</b>,<b style="color:#fff;user-select:text;">''</b>);
                        </div>
                        <br>
                        Note: this will delete your account from your browser!
                    </div>
                </div>
                <div id="options_find" class="options" style="position:absolute;right:-5px;width:350px;top:20px;;padding:10px 10px 5px 10px;line-height:20px;display:none;">
                    <div style="background:#ffffff!important;height:20px;padding:5px 10px;color:#000000;margin-bottom:-13px;position:relative;">
                        <input id="find_search_words" type="text" placeholder="Keyword..." style="border:none;margin:none;outline:none;width:300px;">
                        <a id="find_search" class="unauthorised" href="https://methodise.me/find.php?search=" style="text-decoration:none;" rel="nofollow" target="_top">
                            <div style="height:30px;background-image:url('https://methodise.me/R/find.png');background-size:30px 29px;font-size:12px;font-weight:bold;position:absolute;top:0px;right:0px;color:#ffffff;text-align:center;line-height:31px;cursor:pointer;width:29px;padding-left:1px;"></div>
                        </a>
                    </div>
                    <br>
                    <b><a id="find_newest" href="https://methodise.me/find.php?published=<?php echo file_get_contents('http://methodise.me:10001/newest');?>" style="text-decoration:none;">Newest <b class="hash" target="_top">#ByEveryone</b></a></b>
                    <br>
                    <b><a id="find_created" class="unauthorised" href="https://methodise.me/find.php?created=<?php echo $pid;?>" style="text-decoration:none;">More <b class="hash" target="_top">#ByThisContentCreator</b></a></b>
                    <br>
                    <b><a id="find_published" class="unauthorised" href="https://methodise.me/find.php?published=" style="text-decoration:none;" rel="nofollow" target="_top">Published <b class="hash">#ByMe</b></a></b>
                    <br>
                    <b><a id="find_drafts" class="unauthorised" href="https://methodise.me/find.php?drafts" style="text-decoration:none;" rel="nofollow" target="_top">Drafts <b class="hash">#ByMe</b></a></b>
                    <br>
                    <div style="position:relative;height:2px;left:-10px;width:370px;margin-bottom:5px;margin-top:3px;"></div>
                    <div class="tip" tip="Manage the pages by other users that apper in your Rabbit Hole tool (You can remove pages from here once you have applied them to your own pages. This will clean up your Rabbit Hole tools list while not effecting any pages you have linked to!)" style="background:none;">
                        <a id="find_stars" class="unauthorised" href="https://methodise.me/find.php?stars=" style="color:#fff;text-decoration:none;font-weight:bold;" rel="nofollow" target="_top"><img class="protect_img_black" src="https://methodise.me/R/starred.png" style="height:15px;vertical-align:-2px;"/>  Rabbit Holes <b class="hash">#ByOthers</b></a>
                    </div>
                </div>
                <div id="options_notifications" class="options" style="position:absolute;right:-5px;width:350px;top:20px;padding:10px;line-height:20px;display:none;background:#f04448;">
                    <div style="padding:5px 10px;font-weight:bold;background:#e2292e;color:rgba(0,0,0,0.5);">
                        Some of your published pages need moderations:
                    </div>
                    <div id="alerts" style="position:relative;padding:5px 10px;background:#e2292e;"></div>
                </div>
                <div id="menu_notifications" style="display:inline-block;height:20px;width:fit-content;cursor:pointer;">
                    <div id="button_notifications" class="menu_button" style="display:none;background:#ff1100;position:relative;right:0px;padding:3px 10px 0px 7px;height:17px;cursor:pointer;">
                        <div id="number_notifications" style="position:absolute;right:-3px;top:0px;width:fit-content;padding:3px 6px;font-weight;font-weight:bold;background:#ff1100;">0</div>
                        <!--options are in the main header ^^^ above-->
                    </div>
                </div>
                <div style="display:inline-block;width:50px;height:20px;">
                    <div id="button_find" class="menu_button" style="position:absolute;padding:3px 10px 0px 10px;height:17px;cursor:pointer;"><b>Find</b></div>
                    <!--options are in the main header ^^^ above-->
                </div>
                <div id="menu_page" style="display:inline-block;width:50px;height:20px;cursor:pointer;">
                    <div id="button_page" class="menu_button" style="position:absolute;padding:3px 10px 0px 10px;height:17px;"><b>Page</b></div>
                    <div id="options_page" class="options" style="overflow:visible;position:absolute;left:57px;top:20px;padding:5px 10px;line-height:20px;display:none;cursor:auto;width:100%;">
                        <div class="option_page unauthorised tip" id="new_page" tip="Create a new draft"><b>New</b></div>
                        <div class="option_page tip" id="copy_page" style="display:none;" tip="Copy this page as a new draft"><b>Copy</b></div>
                        <div class="option_page unauthorised tip" id="edit_page" tip="Edit this page"><b>Edit</b></div>
                        <div class="option_page unauthorised tip" id="publish_page" tip="Make this page public (It will no-longer be in your drafts)"><b>Publish</b></div>
                        <div class="option_page unauthorised tip" id="gift_page" style="display:none;" tip="Gift this page (and it's ability to earn) to another account"><b style="color:rgba(255,255,255,0.6);">&#x21B3; </b><b>Give To <b class="hash">@user</b></b></div>
                        <div class="option_page unauthorised tip" id="unpublish_page" tip="Revert this page back into a private draft"><b>Un-publish</b></div>
                        <div class="option_page tip" id="delete_page" tip="Delete this page (This page must be an unpublished page in order to perform this action! (Warning: this cannot be undone!))">
                            <div class="unauthorised"><b style="display:none;">&#x21B3; </b><b>Delete</b></div>
                        </div>
                        <div class="option_page tip" style="display:none;" id="lock_page" tip="Prevent other users from adding additional rabbit holes"><b>Lock</b></div>
                        <div class="option_page tip" id="import_page" tip="Import a Methodise.me page file into your drafts" style="display:none;"><b>Import</b></div>
                        <div class="option_page tip" id="export_page" tip="Export this page as a file download to your computer" style="display:none;"><b>Export</b></div>
                        <input type="file" id="file_system" value="import" style="display:none;">
                        <div class="cc" style="display:none;position:relative;height:2px;left:-10px;padding:0% 100%;margin-bottom:5px;margin-top:3px;"></div>
                        <div class="cc option_page unauthorised tip" style="display:none;" id="donate_page" tip="Donate Monero directly to this page's creator's wallet"><b><img src="https://methodise.me/R/qr.png" style="height:15px;vertical-align:-3px;"/><div style="display:inline-block;margin-left:3px;"> Donate <b class="hash">@Page</b></div></b></div>
                        <canvas id="qr" width="212" height="212" style="position:relative;left:-129px;top:6px;border:10px solid rgb(255, 255, 255);background-color:#fff;background-image:url('/R/monero.png');background-size: 212px 212px;margin-bottom:5px;display:none;"/></canvas>
                        <b class="tip" tip="Store this page in your Rabbit Hole tool so you can link your pages to it later"><div class="cc option_page unauthorised" style="display:none;" id="remember_page"><b><img class="protect_img_gray" src="https://methodise.me/R/star.png" style="height:15px;vertical-align:-2px;"/> Link To <b class="hash">@Page</b></b></div></b>
                        <div class="cc option_page" id="report_page"  style="display:none;"><b><a target="_blank" style="text-decoration:none;" class="tip" tip="Tell us if you think this page is doing something ilegal"><img class="protect_img_black" src="https://methodise.me/R/warning.png" style="height:15px;vertical-align:-2px;"/> Report</a></b></div>
                        <div class="cc option_page tip" id="safe_mode" style="display:none;" tip="View all rabbit holes (Even the ones that have not yet been moderated)">
                            <input type="checkbox" id="safe_mode_toggle" checked="checked" style="position:relative;top:4px;margin:0px 3px 0px 2px;pointer-events:none;"/><b>Safe Mode</b>
                        </div>
                    </div>
                </div>
                <div style="display:inline-block;width:63px;height:20px;margin-left:-3px;">
                    <div id="button_account" class="menu_button" style="position:absolute;padding:3px 10px 0px 10px;height:17px;cursor:pointer;"><b id="attract">Account</b></div>
                    <!--options are in the main header ^^^ above-->
                </div>
            </div>
        </div><!--Header-->





        <div id="notepad" class="protect_img_black app" style="display:none;width:250px;height:10px;padding:5px;position:fixed;top:calc(100% - 380px);left:calc(50% - 134px);background:#eddb3d;z-index:6;">
            <div id="notepad_drag" style="width:250px;height:10px;padding:5px;position:absolute;top:0px;left:0px;background:#eddb3d;">
            </div>
            <div id="notepad_hide" style="position:absolute;top:0px;right:0px;bottom:0px;width:20px;text-align:center;line-height:20px;color:#bd9c36;cursor:pointer;">
                <div style="font-weight:bold;transform:rotate(45deg);">+</div>
            </div>
            <div id="notepad_text" contenteditable="true" spellcheck="false" style="font-family:monospace;font-size:10px;font-weight:bold;overflow:auto;outline:none;width:250px;height:300px;position:absolute;top:20px;left:0px;background:#f5ea74;padding:5px;color:#614037;"></div>
        </div>





        <div id="white_rabbit" class="protect_img_black app" style="display:none;width:427px;height:10px;padding:5px;position:fixed;top:calc(100% - 334px);left:calc(50% - 221px);z-index:6;">
            <div id="white_rabbit_drag" style="width:427px; height: 10px; padding: 5px; position: absolute; top: 0px; left: 0px; background: rgb(2, 138, 212); cursor: move;"></div>
            <div id="white_rabbit_hide" style="position:absolute;top:0px;right:0px;bottom:0px;width:20px;text-align:center;line-height:20px;color:#ffffff;cursor:pointer;" class="tip" tip="Hide">
                <div style="font-weight:bold;transform:rotate(45deg);">+</div>
            </div>
            <div class="help_text" style="position:absolute;right:15px;top:-5px;padding:5px;color:#fff;filter:drop-shadow(0px 0px 0px #fff)drop-shadow(0px 0px 0px #fff)drop-shadow(0px -1px 0px rgba(255,255,255,0.5));">
                <img src="https://methodise.me/R/help_b.png" style="height:7px;" class="tip" tip="Drag 'n' drop rabbit holes to other pages. You may drop any links on your own pages but, you are only alowed to drop holes leading to your own page's while you are on other peoples pages! Be careful that your page's don't get blocked by other users for dropping bad/irrelivent pages as it will effect your page's quality score!">
            </div>
            <div id="white_rabbit_cc2u" class="white_rabbit_content" style="font-size:10px;font-weight:bold;overflow:auto;outline:none;width:427px;height:fit-content;position:absolute;top:20px;left:0px;background:#03a0f5;padding:5px;color:#fff;">
                <div id="cc2u" style="position:relative;background:#000;font-weight:normal;height:130px;resize:vertical;min-height:130px;width:427px;margin-bottom:5px;overflow-y:scroll;" class="tip" tip="Pick a page that your rabbit hole will lead to">
                    (Before you can add Rabbit Holes to your page please visit, star and/or create some pages)
                    <div style="background:#03a0f5;position:absolute;width:100%;height:4px;bottom:-3px;"></div>
                </div>
                <div style="background:#03a0f5;position:absolute;width:427px;height:4px;top:1px;"></div>
                <div style="position:relative;background:#27b3ff;padding:0px 3px;height:26px;">
                    <div style="position:absolute;left:40px;top:5px;font-size:13px;color:#b0e2ff;" class="tip" tip="Think of this option as coming up out of a rabbit hole"><b>Link this to your page? <i style="color:#fff;font-size:10px;font-weight:bold;">(as softer / simplified information)</i></b></div>
                    <img class="protect_img" style="height:26px;margin-left:3px;" src="https://methodise.me/R/up.png"/>
                    <div class="ctrl_done new_up tip" style="top:3px;right:3px;" tip="Click this then click the page background in the spot where you would like to add the hole"></div>
                </div>
                <div style="position:relative;background:#27b3ff;padding:0px 3px;height:26px;margin-top:5px;">
                    <div style="position:absolute;left:40px;top:5px;font-size:13px;color:#b0e2ff;" class="tip" tip="Think of this option as going down into a rabbit hole"><b>Link this to your page? <i style="color:#fff;font-size:10px;font-weight:bold;">(as deeper / expanded information)</i></b></div>
                    <img class="protect_img" style="height:26px;margin-left:3px;" src="https://methodise.me/R/down.png"/>
                    <div class="ctrl_done new_down tip" style="top:3px;right:3px;" tip="Click this then click the page background in the spot where you would like to add the hole"></div>
                </div>
                <div style="position:relative;background:#27b3ff;padding:0px 3px;height:26px;margin-top:5px;">
                    <div style="position:absolute;left:7px;top:5px;font-size:13px;">Erase</div>
                    <div class="ctrl_eraser tip" style="top:3px;right:3px;" tip="Click this and then click on a rabbit hole to delete it! (You may delete any hole on your own pages but, you may only delete rabbit holes that you added when you are on other peoples pages)"></div>
                </div>
            </div>
            <div id="white_rabbit_u2cc" class="white_rabbit_content" style="font-size:10px;font-weight:bold;overflow:auto;outline:none;width:427px;height:fit-content;position:absolute;top:20px;left:0px;background:#03a0f5;padding:5px;color:#fff;">
                <div id="u2cc" style="position:relative;background:#000;font-weight:normal;height:130px;resize:vertical;min-height:130px;width:427px;margin-bottom:5px;overflow-y:scroll;" class="tip" tip="Pick a page that your rabbit hole will lead to">
                    (Before you can add Rabbit holes to other peoples pages please create some pages!)
                    <div style="background:#03a0f5;position:absolute;width:100%;height:4px;bottom:-3px;"></div>
                </div>
                <div style="background:#03a0f5;position:absolute;width:427px;height:4px;top:1px;"></div>
                <div style="position:relative;background:#27b3ff;padding:0px 3px;height:26px;">
                    <div style="position:absolute;left:40px;top:5px;font-size:13px;color:#b0e2ff;" class="tip" tip="Think of this option as coming up out of a rabbit hole"><b>Suggest your page as a link? <i style="color:#fff;font-size:10px;font-weight:bold;">(to softer / simplified information)</i></b></div>
                    <img class="protect_img" style="height:26px;margin-left:3px;" src="https://methodise.me/R/up.png"/>
                    <div class="ctrl_done new_up tip" style="top:3px;right:3px;" tip="Click this then click the page background in the spot where you would like to add the hole"></div>
                </div>
                <div style="position:relative;background:#27b3ff;padding:0px 3px;height:26px;margin-top:5px;">
                    <div style="position:absolute;left:40px;top:5px;font-size:13px;color:#b0e2ff;" class="tip" tip="Think of this option as going down into a rabbit hole"><b>Suggest your page as a link? <i style="color:#fff;font-size:10px;font-weight:bold;">(to deeper / expanded information)</i></b></div>
                    <img class="protect_img" style="height:26px;margin-left:3px;" src="https://methodise.me/R/down.png"/>
                    <div class="ctrl_done new_down tip" style="top:3px;right:3px;" tip="Click this then click the page background in the spot where you would like to add the hole"></div>
                </div>
                <div style="position:relative;background:#27b3ff;padding:0px 3px;height:26px;margin-top:5px;">
                    <div style="position:absolute;left:7px;top:5px;font-size:13px;">Erase</div>
                    <div class="ctrl_eraser tip" style="top:3px;right:3px;" tip="Click this and then click on a rabbit hole to delete it! (You may delete any hole on your own pages but, you may only delete rabbit holes that you added when you are on other peoples pages)"></div>
                </div>
            </div>
        </div>


        <div id="mouse" style="position:absolute;top:0px;left:0px;width:0px;height:0px;pointer-events:none;opacity:0.0001;z-index:6;"></div>

        <div id="tipsmouse" style="position:absolute;top:0px;left:0px;width:200px;height:0px;pointer-events:none;z-index:7;">
            <div id="tips" style="display:none;bottom:0px;right:0px;position:absolute;border:1px solid #fff;padding:2px;background:#000000;color:#ffffff;font-weight:bold;max-width:200px;width:fit-content;font-size:10px;pointer-events:none;"></div>
        </div>


        <div id="workarea" style="display:none;"></div><!--needed C.me-->

        <div id="test_area" style="position:absolute;left:-99999px;top:-99999px;">
            <img id="new_img_test_width"/>
        </div>






        <script>

        window.onerror=function(msg,url,lineNo,columnNo,error){
            console.log(msg,url,lineNo,columnNo);
            console.trace(error);
            if($.localStorage.getItem('debug')){
                alert(error.toString()+'\n\n@'+lineNo+':'+columnNo+':'+'draft.php');
                }
            return false;
            };
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



            var xytip=[0,0];
            $('body').on('mouseenter','.tip',function(){
                if($(this).attr('xytip')){xytip=$(this).attr('xytip').split(',');}
                $('#tips').text($(this).attr('tip'));
                $('#tips').show();
                });
            $('body').on('mouseleave','.tip',function(){
                $('#tips').hide();
                xytip=[0,0];
                });
            document.getElementById('body').onmousemove=function(ev){
                $('#tipsmouse').css({left:(ev.pageX-215+Number(xytip[0]))+'px',top:(ev.pageY-10+Number(xytip[1]))+'px'});
                };


            $('.link').each(function(i,v){
                geticon($(v).find('a').attr('url'),function(src,bool){if(bool){$(v).find('img').attr({'src':src})}});
                });




            function splitValue(value,index){
            	return [value.substring(0,index),value.substring(index)];
            	}



            var loaded=0;


            var G={};
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
                $('#'+id+' > .mod_link').on('mousemove',function(){
                    if($('#mouse > .found').length){
                        clearTimeout(G.previews);
                        $('#mouse').css({'opacity':0});
                        $('#mouse > .found').appendTo('#'+id);
                        }});
                return;
                };





            function REWIRE(){
                loaded=2;
                $('#page_height').append(
                    '<div id="LOADER"style="position:fixed;height:2px;left:0px;right:0px;bottom:20px;color:#FFFFFF;z-index:4;">'
                +		'<div id="LOADERIMG" style="position:absolute;font-weight:bold;font-size:8px;padding:3px;padding-right:5px;left:0px;bottom:0px;background:#FF0000;"><i>Loading API</i></div>'
                +		'<div id="LOADERBAR" style="width:0px;height:2px;position:absolute;bottom:0px;left:0px;transition:700ms linear;"></div>'
                +	'</div>'
                    );
                var s={};
                G.loader={img:'',text:false,bar:{background:'#FF0000',color:'#FF0000',max:$('#page_height').width()}};
                G.page=page;
                G.me=me;
                G.captcha=captcha;
                var noreplayattack=forge.util.bytesToHex(forge.pki.rsa.generateKeyPair({bits:896,e:0x10001}).publicKey.encrypt(''+(+new Date()+5000)+''));
                $.getScript('https://methodise.me/c.REWIRE2.js',function(a,b,c){connect('methodise.me',[0],['10002/?'+noreplayattack],s,G,G.loader,'C.me.js?'+(+new Date()));});
                }

            var page_height;

            $('#monero_public,#publisher_key').val('');//stop autofill

            create_account=function(){
                $('#monero_public,#publisher_key').val('');//stop autofill
                me=JSON.parse($.localStorage.getItem('me'));
                delete me.guest;
                if(!me.publisher_key){me.publisher_key=gen_publisher_key();}
                save('update publisher_key');
                not_guest();
                G.check_privilages();
                return;
                };
            function not_guest(){
                console.log('not a guest');
                $('#mining_info').removeAttr('tip');
                $('#mining_info').removeClass('tip');
                $('#notepad_toggle').removeClass('unauthorised');
                $('#new_page,#find_drafts').removeClass('unauthorised');
                if(me.published.length){
                    $('#find_published').attr({'href':$('#find_published').attr('href')+JSON.stringify(me.published).replace(/\"/g,'').replace(/\'/g,'').replace('[','').replace(']','')});
                    $('#find_published').removeClass('unauthorised');
                    }
                $('#account_create').hide();
                $('#account_backups,#account_setup,#account_keys').show();//,#account_coinhive
                if(me.signature){
                    $('#admin_signature').text(me.signature);
                    var copy_sig=document.querySelector('#copy_sig');
                    copy_sig.addEventListener('click',function(event){
                        var copy_text=document.getElementById("admin_signature");
                        var range=document.createRange();
                        range.selectNode(copy_text);
                        window.getSelection().addRange(range);
                        try{
                            var successful=document.execCommand('copy');
                            var msg=successful?'successful':'unsuccessful';
                            console.log('Copying text command was '+msg);
                            }
                        catch(err){console.log('Oops, unable to copy');}
                        });
                    }
                return;
                }

            $('#create_an_account').one('click',function(){
                $('#attract').removeClass('attract');
                create_account();
                });


            var ec;
            if(evercookie){ec=new evercookie({history:false,java:false,silverlight:false,baseurl:'/S/evercookie',asseturi:'/assets'});}
            G.ec=ec;


            var me=JSON.parse($.localStorage.getItem('me'))||{};

            function gen_publisher_key(){
                var key=(''+(+new Date())).split('');
                var map=[
                    ['0','^','a','c','w','d','E','P','t']
                ,   ['1','f','O','F','G',']','/','H','i']
                ,   ['2','k','K','l','=','N','o','S','j']
                ,   ['3','p','T','|','q','[','?','r','<']
                ,   ['4','u','*','V','>','X','Y','s','Q']
                ,   ['5','&','z',';','Z','A','g','M','I']
                ,   ['6','-','R','+','_','b',')','(','!']
                ,   ['7','£','$','%','W','x','h','n','e']
                ,   ['8',':',',','U','v','B','y','J','}']
                ,   ['9','@','#','~','{','L','m','C','D']
                    ];
                for(var i=0;i<key.length;i+=1){
                    key[i]=map[Number(key[i])][Math.floor(Math.random()*9)];
                    }
                document.getElementById('publisher_key').innerHTML=key.join('');
                return key.join('');
                }

            if(Object.keys(me).length===0){
                $('#attract').addClass('attract');
                me.guest=true;
                me.notes='';
                me.monero_public=undefined;
                me.publisher_key=gen_publisher_key();
                me.personal_miner='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
                me.mining_settings=[1,1,1];
                me.drafts={};
                me.published=[];
                me.stars=[];
                setTimeout(function(){
                if(evercookie&&ec){
                    ec.get("me",function(lost){
                        if(lost&&lost!==''){
                            ec.set('me',lost);
                            me=JSON.parse(lost);
                            not_guest();
                            }});}
                },0);
                }
            else{not_guest();}
            window.onbeforeunload=function(){
                G.page_hashed(function(){console.log('Bye!');});
                };
            if(!me.personal_miner){me.personal_miner='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';}

            $('#backup_yes').change(function(){
                if(this.checked){
                    if(navigator.storage&&navigator.storage.persist){
                        navigator.storage.persist(function(){var Q=confirm("Alow your data to persist?");return Q;}).then(function(granted){
                        if(granted){
                            $('#backup_yes').attr({'disabled':true});
                            me.backup=true;
                            if(evercookie&&ec){
                                ec.set('me',JSON.stringify(me));
                                alert("Storage/cookies will not be cleared for this site except by explicit user action");
                                }
                            else{
                                alert("Your browser prevents Evercookies, so this action cannot be completed");
                                }}
                        else{
                            $('#backup_yes').attr({'checked':false}).removeAttr('disabled');
                            }});}
                    else{
                        $('#backup_yes').attr({'disabled':true});
                        me.backup=true;
                        if(evercookie&&ec){ec.set('me',JSON.stringify(me));}
                        }
                    }});
            if(me.backup){$('#backup_yes').attr({'checked':true,'disabled':true});}




            function alowsignup(){
                if(!me.monero_public){
                    $('#signup_footer').show();
                    $('#body').append('<iframe id="start" src="https://methodise.me/monerosignup.php" style="z-index:100;position:absolute;top:0px;bottom:0px;left:0px;right:0px;width:100%;height:100%;background:#fff;display:none;"></iframe>');
                    }
                $('#signup_large').contents().find('#go').on('click',function(){
                    console.log(2);
                    if(me.monero_public){alert('You already have an account on this browser.');}
                    else{
                        var monero_public=$('#signup_large').contents().find('#signup_monero').val();
                        var Q=confirm('Do you agree to use cookies? (Needed to store your account)');
                        if(Q==true){
                            if((/^[a-z0-9]+$/i).test(monero_public)&&monero_public.length==95){
                                me.monero_public=monero_public;
                                if(!me.publisher_key){me.publisher_key=gen_publisher_key();}
                                save('signup');
                                alert('Success, your account has been created! You can now create new pages! Click ok to start.');
                                window.location.href='https://methodise.me/editor.php';
                                }
                            else{
                                alert('Error: You need a Monero address!');
                                }}
                        else{
                            alert('Unable to create your account!');
                            }}});
                function clicksignup(){
                    if(me.monero_public){alert('You already have an account on this browser.');}
                    else{
                        $('#start').contents().find('#go').on('click',function(){
                            if($('#start').contents().find('#tearms').attr('checked')=='checked'){
                                if($('#start').contents().find('#cookies').attr('checked')=='checked'){
                                    var monero_public=$('#start').contents().find('#signup_monero').val()
                                    if((/^[a-z0-9]+$/i).test(monero_public)&&monero_public.length==95){
                                        me.monero_public=monero_public;
                                        if(!me.publisher_key){me.publisher_key=gen_publisher_key();}
                                        save('signup');
                                        alert('Success, your account has been created! You can now create new pages! Click ok to start.');
                                        window.location.href='https://methodise.me/editor.php';
                                        }
                                    else{
                                        alert('Error: Your Monero address is malformed!');
                                        }
                                    }
                                else{alert('Without cookies we cant store your account! It is only one cookie and it does not collect or share your info! (This is not a deep-state site!)');}
                                }
                            else{
                                alert('You need to aggree to the tearms ...');
                            }});
                        $('#start').show();
                        }}
                $('#signup').contents().find('#signup_getstarted').on('click',function(){clicksignup();});
                $('#signup_footer').on('click',function(){clicksignup();});
                }
            setTimeout(function(){alowsignup();},5000);



            if(me.monero_public){
                $('#check_monero_earning').attr({'href':'https://xmr.omine.org/en/?wallet='+me.monero_public});
                $('#monero_instructions').hide();
                $('#monero_earning').show();
                }






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
                            check_out_of_range();//todo:???? needed ????
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





            ////////////////////////////////////////////////////////////////////////////////////dragable ^

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
            function appposition(app){
                if(app=='?'){
                    appposition('#notepad');
                    appposition('#white_rabbit');
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




            $('#notepad_text').bind('paste',function(ev){
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
                    },100);
                });
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








            var page;

            <?php

            $page=file_get_contents('http://methodise.me:10001/page?id='.$pid);
            if($page){echo 'page='.$page.';';}

            ?>



            if(!page&&window.location.href.indexOf('?')!==-1&&me.drafts[(window.location.href.split('?')[1]).split('&')[0]]){
                page=me.drafts[(window.location.href.split('?')[1]).split('&')[0]];
                }
            else if(!page){
                $('#board').append(
                    '<div style="position:absolute;top:0%;left:0%;height:100%;width:100%;background:rgba(237,193,2,1);">'
                +       '<img src="https://methodise.me/R/404.png" style="width:500px;height:375px;position:absolute;top:50%;left:50%;margin-top:-177px;margin-left:-250px;"/>'
                +   '</div>'
                    );
                $('#comments_area').hide();
                }
            else if(!page.published){
                $('#header').append('<div class="unauthorised" style="pointer-events:none;font-style:italic;font-weight:bold;position:absolute;width:50px;height:20px;line-height:20px;text-align:center;left:50%;margin-left:-25px;top:0px;">Draft</div>');
                $('#comments_area').hide();
                }
            else{
                if(window.location.href.indexOf('?')==-1){//home
                    //window.history.replaceState({},'?welcome','?welcome');//messing up page rank
                    }
                page.earning=splitValue(page.earning,page.earning.indexOf('.')+3);
    			page.earning=
                    '<div style="display:inline-block;color:rgba(0,0,0,0.72);text-shadow:0px 0px 0px rgba(0,0,0,0.72),1px 0px 1px #ffffff,0px 0px 1px #ffffff,0px 0px 1px #ffffff,0px 0px 1px #ffffff,0px 0px 1px #ffffff,0px 0px 1px #ffffff,0px 0px 1px #ffffff,0px 0px 1px #ffffff;margin-right:2px;position:relative;top:0px;font-size:11px;">$</div>'
                +   '<div style="display:inline-block;">'
                +       '<b style="color:#ffffff;text-shadow:0px 0px 0px #fff,0px 0px 0px #fff,0px 0px 0px #000000,0px 0px 0px #000000,0px 0px 0px #000000;margin-right:1px;">'+page.earning[0]+'</b>'
                +       '<b style="color:rgba(255,255,255,0.80);">'+page.earning[1]+'</b>'
                +   '</div>';
                $('#header').append('<div class="tip" xytip="0,60" tip="How much money this page creator'+"'"+'s generator has produced from their pages (estimated in USD)" style="font-style:italic;font-weight:bold;position:absolute;display:inline-block;height:20px;line-height:22px;left:50%;margin-left:-34px;top:0px;width:94px;text-align:center;margin-left:-50%px;font-size:10px;">'+page.earning+'</div>');
                }








            if(page){
                $('#report_page').find('a').attr({'href':'https://twitter.com/intent/tweet?url=https%3A%2F%2Fmethodise.me%2F%3F'+page.id+'&hashtags=BadPage,moderationNeeded&via=Methodiseme'});
                }
            else{$('#report_page').addClass('unauthorised');}

            function personal_miner_enable_start(){
                $('#personal_miner_start').on('click',function(){
                    adblock=false;//assumed
                    if(me.monero_public){mine(me.monero_public,me.mining_settings,'You',0);}
                    });
                return;
                }




            var account={};
            G.check_privilages=function(){
                if(!page){return;}
                $('#monero_public,#publisher_key,#personal_miner').css({'pointer-events':'auto'});
                if(me.monero_public&&me.monero_public!=''&&(/^[a-z0-9]+$/i).test(me.monero_public)&&me.monero_public.length==95){
                    $('#monero_public').val(me.monero_public);
                    }
                if(me.publisher_key&&me.publisher_key!=''&&me.publisher_key.length==13&&me.publisher_key.indexOf('<script>')==-1&&me.publisher_key.indexOf('eval(')==-1){
                    $('#publisher_key').val(me.publisher_key);
                    var publisher_key=forge.md.sha512.create();
                    publisher_key.update(me.publisher_key);
                    publisher_key=publisher_key.digest().toHex();
                    if(me.drafts[page.id]||publisher_key==page.protect){//you own the page
                        if(me.drafts[page.id]){
                            if(page.board.length>0){$('#publish_page').removeClass('unauthorised');}
                            $('#edit_page').removeClass('unauthorised');
                            $('#delete_page > div').removeClass('unauthorised');
                            $('#delete_page > div').find('b:first').hide();
                            }
                        else{
                            $('#delete_page > div').addClass('unauthorised');
                            $('#delete_page > div').find('b:first').show();
                            $('#unpublish_page,#edit_page').removeClass('unauthorised');
                            }}
                    else{}//you don't own the page
                    }
                else if(me.drafts[page.id]){
                    $('#edit_page').removeClass('unauthorised');
                    $('#delete_page > div').removeClass('unauthorised');
                    $('#delete_page > div').find('b:first').show();
                    }
                else if(publisher_key!=page.protect&&!me.drafts[page.id]){
                    $('#remember_page,#donate_page').removeClass('unauthorised');
                    }
                if(me.personal_miner&&me.personal_miner!=''&&(/^[a-z0-9]+$/i).test(me.personal_miner)&&me.personal_miner.length==32){
                    $('#personal_miner').val(me.personal_miner);
                    setTimeout(function(){personal_miner_enable_start();},0);
                    }
                console.log('==================',me,me.monero_public,me.publisher_key,me.personal_miner,loaded==1);
                if(me.monero_public&&me.publisher_key&&me.personal_miner&&loaded==1){
                    profile();
                    REWIRE();
                    }
                else if(me.monero_public&&me.publisher_key&&me.personal_miner&&loaded==0){
                    profile();
                    };
                return;
                }

            function profile(){
                $('#account_setup').hide();
                $('#step1').text('Your Monero Address:');
                $('#step2').text('Your Coinhive Miner:');
                $('#step2b').text('Backups:');
                $('#account_profile').show();
                $('#monero_public,#publisher_key,#personal_miner').attr({'readonly':'readonly'});
                $('#monero_public,#publisher_key,#personal_miner').on('click',function(){
                    if(loaded==2&&$(this).attr('readonly')=='readonly'){
                        var Q=confirm('Are you sure you want alter your account details? (This will alter any published pages you have made)');
                        if(Q==true){
                            $('#monero_public,#publisher_key,#personal_miner').removeAttr('readonly');
                            $(this).focus();
                            }}});
                return;
                }

            if(me.monero_public&&me.publisher_key&&me.personal_miner){profile();}


            $('#find_search_words').on('keyup',function(ev){
                if($(this).val()!=''){
                    if(ev.which==13){window.parent.location='https://methodise.me/find.php?search='+(forge.util.encode64($(this).val()).replace(/\//g,'|').replace(/\+/g,'-').replace(/\=/g,'_'));}
                    $('#find_search').attr({'href':'https://methodise.me/find.php?search='+(forge.util.encode64($(this).val()).replace(/\//g,'|').replace(/\+/g,'-').replace(/\=/g,'_'))});
                    $('#find_search').removeClass('unauthorised');
                    }
                else{
                    $('#find_search').addClass('unauthorised');
                    }});



            $('#monero_public').on('input',function(ev){
                if(ev.which==undefined){$(this).val('');}
                if($(this).val()!=''&&(/^[a-z0-9]+$/i).test($(this).val())&&$(this).val().length==95){
                    if($.localStorage.getItem('me')){me=JSON.parse($.localStorage.getItem('me'));}
                    account._donate=me.monero_public;//keep this line!
                    me.monero_public=$(this).val();
                    account.donate=me.monero_public;
                    if($.localStorage.getItem('me')){save('monero input');}
                    if(!me.guest){G.check_privilages();}
                    }});
            $('#publisher_key').on('input',function(ev){
                if(ev.which==undefined){$(this).val('');console.log(ev);}
                if($(this).val()!=''&&$(this).val().length==13&&$(this).val().indexOf('<script>')==-1&&$(this).val().indexOf('eval(')==-1){
                    if($.localStorage.getItem('me')){me=JSON.parse($.localStorage.getItem('me'));}
                    account.oldkey=me.publisher_key;
                    me.publisher_key=$(this).val();
                    account.newkey=me.publisher_key;
                    if($.localStorage.getItem('me')){save('publisher key input');}
                    if(!me.guest){G.check_privilages();}
                    }});
            $('#personal_miner').on('input',function(ev){
                if($(this).val()!=''&&(/^[a-z0-9]+$/i).test($(this).val())&&$(this).val().length==32){
                    if($.localStorage.getItem('me')){me=JSON.parse($.localStorage.getItem('me'));}
                    account._mines=me.personal_miner;
                    me.personal_miner=$(this).val();
                    account._mines=me.personal_miner;
                    setTimeout(function(){personal_miner_enable_start();},0);
                    if($.localStorage.getItem('me')){save('miner input');}
                    if(!me.guest){G.check_privilages();}
                    }});











            if(page&&page.size=='0x0'){
                page.size=$('#board_bg').width()+'x'+$('#board_bg').height();
                }
            function check_out_of_range(){
                $('.box').each(function(i,v){
                    if(Number($(v).css('top').replace('px',''))>(($('#board').height()-$(v).height())-0)){// +bottom / +100%
                        $(v).css({'top':(($('#board').height()-$(v).height())-0)+'px'});
                        }
                    if(Number($(v).css('left').replace('px',''))>(($('#board').width()-$(v).width())-0)){// +right / +100%
                        $(v).css({'left':(($('#board').width()-$(v).width())-0)+'px'});
                        }
                    if(Number($(v).css('top').replace('px',''))<0){// -top -0%
                        $(v).css({'top':(-5)+'px'});
                        }
                    if(Number($(v).css('left').replace('px',''))<0){// -left -0%
                        $(v).css({'left':(-5)+'px'});
                        }
                    });
                return;
                }
            var out_of_range;
            function board_size(){
                if(!page){return;}
                console.log('board_size');
                $('#board').css({'width':(Number(page.size.split('x')[0])-($('#page_height').width()==$('body').width()?15:0))+'px','height':page.size.split('x')[1]+'px','right':'auto','bottom':'auto'});//todo: why do 15px need removing!!??? do they always need removing?
                if($('#board').width()<$('#page_height').width()){
                    $('#board').css({'margin-left':(($('#page_height').width()-$('#board').width())/2)+'px'});
                    }
                if($('#board').height()<$('#page_height').height()){
                    $('#board').css({'margin-top':(($('#page_height').height()-$('#board').height())/2)+'px'});
                    }
                setTimeout(function(){
                    if(parseInt($('#page_height').height())==parseInt($('#board').height())){$('#board').css({'margin-top':''});}
                    if(parseInt($('#page_height').width())==parseInt($('#board').width())){$('#board').css({'margin-left':''});}
                    console.log(parseInt($('#page_height').height()),'==',parseInt($('#board').height()));
                    },100);
                if(loaded==1){//needed (for when users add rabbit holes) [keep the same code as the editor]
                    clearTimeout(out_of_range);
                    out_of_range=setTimeout(function(){
                        check_out_of_range();
                        },500);
                    }
                return;
                }
            board_size();



            function page_height_change(){
                $('#page_height').css({'bottom':'20px','height':''});//reset
                page_height=$('#page_height').height()+15;
                $('#page_height').css({'bottom':'','height':page_height+'px'});
                $('#options_account').css({'height':(page_height-25)+'px'});
                var excess=(Number($('#page_height').css('height').replace('px',''))+20)-Number($('#footer').css('top').replace('px',''));
                if(excess>0){$('#page_height').css({'height':'-='+((excess+'').replace('-',''))+'px'});}
                return;
                }
            page_height_change();
            window.onresize=function(event){
                page_height_change();
                setTimeout(function(page_height_change){page_height_change();},2000,page_height_change);
                board_size();
                };




            function captcha(payload,n,go){
                var E;
                try{var cfx=fx.canvas();}
                catch(e){E=e;}
                finally{
                    if(E){
                        alert('Your browser is out of date! (Error: Insecure web browser)');
                        window.location='https://www.google.com/chrome/browser/desktop/index.html';
                        }
                    else{
                        if(n>5){location.href="https://google.com";}
                        $('#cap_glass').remove();
                        $('body').append(
                             '<div id="cap_glass" style="background:rgba(0,0,0,0.5);position:fixed;top:0px;left:0px;right:0px;bottom:0px;">'
                            +	'<div id="cap_box" style="background:#ffffff;color:#000000;position:absolute;top:50%;left:50%;width:180px;margin-left:-90px;height:228px;margin-top:-114px;">'
                            +		'<center><b>'
                            +			'<br>What do you see? <img id="cap_re" src="https://methodise.me/R/re.png" style="height:18px;vertical-align:top;cursor:pointer;"/><br><br>'
                            +			'<canvas id="cap" width="160" height="60"></canvas>'
                            +			'<br><br>'
                            +			'<input type="text" id="cap_answer" style="background:#f5f5f5;width:150px;padding:5px;margin-bottom:-4px;outline:none;border:none;" spellcheck="false" placeholder="Type your answer">'
                            +			'<br><br>'
                            +			'<div id="cap_go" class="btn" style="background:#61d045;color:#ffffff;width:160px;height:32px;line-height:32px;text-align:center;margin-top:10px;cursor:pointer;">Go</div>'
                            +		'</b></center>'
                            +	'</div>'
                            +'</div>');
                        var c=$('<canvas width="160" height="60"></canvas>')[0];
                        var ctx=c.getContext("2d");
                        var f='01234567890aAbBcCdDeEfFgGhHijJkKLmMnNmMoOpPqQrRsStTuUvVwWxXyYzZ$&@!?#';
                        var word='';
                        function between(max,min,cb){
                            max+=1;min-=1;
                            function notzero(cb){cb(parseInt(Math.random()*(max-min)+min));}
                            function then(f){if(f!=0){cb(f);}else{notzero(then);}}
                            notzero(then);captcha
                            }
                        between(5,3,function(j){
                            for(var i=0;i<j;i+=1){
                                word+=f[Math.floor(Math.random()*f.length-1)+1];
                                }
                            ctx.fillStyle="#edc102";
                            ctx.fillRect(0,0,160,60);
                            ctx.font="Bold 50px Arial";
                            ctx.textAlign="center";
                            ctx.fillStyle="#02a0f5";
                            ctx.fillText(word,c.width/2,(c.height/2)+18);
                            var texture=cfx.texture(c);
                            between(7,-7,function(sw){captcha
                                sw/=10;
                                cfx.draw(texture).swirl(80, 30,160,Number(sw)).update();
                                var image=new Image();
                                image.onload=function(){
                                    ctx.drawImage(image,0,0);
                                    for(var i=0;i<6;i+=1){
                                        ctx.beginPath();
                                        ctx.moveTo(c.width*Math.random(),c.height*Math.random());
                                        ctx.lineTo(c.width*Math.random(),c.height*Math.random());
                                        ctx.lineWidth=2;
                                        ctx.strokeStyle="#02a0f5";
                                        ctx.stroke();
                                        }
                                    for(var i= 0;i<6;i+=1){
                                        ctx.beginPath();
                                        ctx.moveTo(c.width*Math.random(),c.height*Math.random());
                                        ctx.lineTo(c.width*Math.random(),c.height*Math.random());
                                        ctx.lineWidth=2;
                                        ctx.strokeStyle="#edc102";
                                        ctx.stroke();
                                        }
                                    $('#cap_answer').focus();
                                    $('#cap_re').unbind('click').bind('click',function(){
                                        $('#cap_answer').val('');
                                        captcha(payload,n,go);
                                        });
                                    $('#cap_go').unbind('click').bind('click',function(){
                                        if($('#cap_answer').val()==word){
                                            $('#cap_glass').remove();
                                            go(payload);
                                            }
                                        else{captcha(payload,(n+=1),go);}
                                        });};
                                image.src=cfx.toDataURL('image/png');
                                var cap=document.getElementById("cap");
                                var ctx=cap.getContext("2d");
                                ctx.fillStyle="#edc102";
                                ctx.fillRect(0,0,160,60);captcha
                                ctx.drawImage(image,0,0);
                                });});}}}

            if($('#comments_area').css('display')!='none'){
                $('#comments_toggle').click(function(){
                    if($('#footer').css('overflow')=='hidden'){
                        $('#comments_intent').text('Hide');
                        $('#comments_arrow_unpack').hide();
                        $('#comments_arrow_collapse').show();
                        $('#footer').css({'overflow':'visible'});
                        $("html, body").animate({scrollTop:$(document).height()},"slow");
                        }
                    else{
                        $('#comments_intent').text('View');
                        $('#comments_arrow_collapse').hide();
                        $('#comments_arrow_unpack').show();
                        $('#footer').css({'overflow':'hidden'});
                        }});
                $('.new_comment').on('mouseenter',function(){
                    $('.new_comment').removeClass('comment_as');
                    $(this).addClass('comment_as');
                    });
                $('.new_comment').on('mouseleave',function(){
                    $('.new_comment').removeClass('comment_as');
                    });
                $('.new_comment').on('click',function(){
                    if($(this).attr('twitter')){
                        var win=window.open($(this).attr('twitter'),'win','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        win.focus();
                        }
                    else if($(this).attr('gab')){//todo
                        var win=window.open($(this).attr('gab'),'win','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                        win.focus();
                        }
                    });
                $('#comment_as_twitter').attr({'twitter':'https://twitter.com/intent/tweet?url=https%3A%2F%2Fmethodise.me%2F%3F'+page.id+'&hashtags=Methodiseme&via=POTUS'});
                }



            $('#new_page').on('click',function(){
                window.location.href='https://methodise.me/editor.php';
                });
            $('#edit_page').on('click',function(){
                if($(this).hasClass('unauthorised')){return false;}
                window.location.href='https://methodise.me/editor.php?'+page.id;
                });
            $('#delete_page').on('click',function(){
                if($(this).find('div').hasClass('unauthorised')){return false;}
                var Q=confirm('Are you sure you want to delete this draft?');
                if(Q==true){
                    me=JSON.parse($.localStorage.getItem('me'));
                    delete me.drafts[page.id];
                    save('delete page click');
                    window.location.href='https://methodise.me/find.php?drafts';
                    }});
            var qr_interval;
            $('#donate_page').on('click',function(){
                clearInterval(qr_interval);
                draw(page.donate);
                $('#qr').toggle();
                if($('#qr').css('display')!='none'){
                    qr_interval=setInterval(function(){
                        draw(page.donate);
                        if($('#options_page').css('display')=='none'){
                            clearInterval(qr_interval);
                            $('#qr').hide();
                            }
                    },100);}
                });


    var cells
    ,	row
    ,	c1,c2,c3,c4,c5
    ,	num=4
    ,	canvas
    ,	ctx
    ,	img
    ,	modA=0//alpha
    ,	wayA='up'
    ,	modB=0//brightness
    ,	wayB='down'
    ,	x,y
    ,	iv//qr draw interval
    ,	check//iv2
        ;
    function draw(addr){
		cells=qr(addr);
		canvas=document.getElementById('qr');
		ctx=canvas.getContext('2d');
		img=new Image();
		ctx.patternQuality='fast';
		ctx.textDrawingMode='glyph';
		ctx.clearRect(0,0,212,212);
		ctx.fillStyle='rgba(0,0,0,0)';
        ctx.fillRect(0,0,212,212);
		num=212/cells.modules.length;
		if(wayA==='up'){modA+=5;if(modA>=95 ){wayA='down';}}else{modA-=5;if(modA<=10){wayA='up';}}
		if(wayB==='up'){modB+=5;if(modB>=180){wayB='down';}}else{modB-=5;if(modB<=20 ){wayB='up';}}
		for(y=0;y<cells.modules.length;++y){
			row=cells.modules[y];
			c1=Math.floor(Math.random()*cells.modules.length)+0;
			c2=Math.floor(Math.random()*cells.modules.length)+0;
			c3=Math.floor(Math.random()*cells.modules.length)+0;
			c4=Math.floor(Math.random()*cells.modules.length)+0;
			c5=Math.floor(Math.random()*cells.modules.length)+0;
			for(x=0;x<row.length;++x){
				ctx.fillStyle=row[x]?'rgba('+modB+','+modB+','+modB+',0.'+modA+')':'rgba(255,255,255,0.'+modA+')';ctx.fillRect((x*num),(y*num),num,num);//outer square
				ctx.fillStyle=row[x]?'rgba('+modB+','+modB+','+modB+',0.'+modA+')':'rgba(255,255,255,0.'+modA+ 10 +')';ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));//inner dot
				if(x===c1||x===c2||x===c3||x===c4||x===c5){//random tiny full sparkle dots
					ctx.fillStyle=row[x]?'#000':'#FFF';
					ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));
					}
				if(x==6||y==6){//lines
					ctx.fillStyle=row[x]?'rgba('+modB+','+modB+','+modB+',1)':'#FFF';
					ctx.fillRect((x*num),(y*num),num,num);
					}
				if(x===6&&y===6||x===(cells.modules.length-1)&&y===6||x===6&&y===(cells.modules.length-1)){//biggest markers
					ctx.fillStyle='#FFF';ctx.fillRect((x-7)*num,(y-7)*num,(num*9),(num*9));
					ctx.fillStyle='rgba('+modB+','+modB+','+modB+',1)';ctx.fillRect((x-6)*num,(y-6)*num,(num*7),(num*7));
					ctx.fillStyle='#FFF';ctx.fillRect((x-5)*num,(y-5)*num,(num*5),(num*5));
					ctx.fillStyle='rgba('+modB+','+modB+','+modB+',1)';ctx.fillRect((x-4)*num,(y-4)*num,(num*3),(num*3));
					}
				if(y>4&&
				cells.modules[y-0][x-4]===true &&cells.modules[y-0][x-3]===true &&cells.modules[y-0][x-2]===true &&cells.modules[y-0][x-1]===true &&cells.modules[y-0][x-0]===true &&
				cells.modules[y-1][x-4]===true &&cells.modules[y-1][x-3]===false&&cells.modules[y-1][x-2]===false&&cells.modules[y-1][x-1]===false&&cells.modules[y-1][x-0]===true &&
				cells.modules[y-2][x-4]===true &&cells.modules[y-2][x-3]===false&&cells.modules[y-2][x-2]===true &&cells.modules[y-2][x-1]===false&&cells.modules[y-2][x-0]===true &&
				cells.modules[y-3][x-4]===true &&cells.modules[y-3][x-3]===false&&cells.modules[y-3][x-2]===false&&cells.modules[y-3][x-1]===false&&cells.modules[y-3][x-0]===true &&
				cells.modules[y-4][x-4]===true &&cells.modules[y-4][x-3]===true &&cells.modules[y-4][x-2]===true &&cells.modules[y-4][x-1]===true &&cells.modules[y-4][x-0]===true){//medium markers
					ctx.fillStyle='rgba('+modB+','+modB+','+modB+',1)';ctx.fillRect((x-4)*num,(y-4)*num,num*5,num*5);
					ctx.fillStyle='#FFF';ctx.fillRect((x-3)*num,(y-3)*num,num*3,num*3);
					ctx.fillStyle='rgba('+modB+','+modB+','+modB+',1)';ctx.fillRect((x-2)*num,(y-2)*num,num*1,num*1);
					}}}
			return canvas.toDataURL();
			}

            var box;
            function display(cb){
                console.log('display');
                $('.box').remove();
                $('#page_height').append(
                    '<div id="LOADER_D"style="position:fixed;height:2px;left:0px;right:0px;bottom:20px;color:#FFFFFF;z-index:8;">'
                +		'<div id="LOADERIMG_D" style="position:absolute;font-weight:bold;font-size:8px;padding:3px;padding-right:5px;left:0px;bottom:0px;background:#FF0000;"><i>Loading Draft</i></div>'
                +		'<div id="LOADERBAR_D" style="width:0px;height:2px;position:absolute;bottom:0px;left:0px;transition:700ms linear;background:#ff0000;"></div>'
                +	'</div>'
                    );
                function next(i){
                    if(i<page.board.length-1){loop((i+1));}
                    else{
                        setTimeout(function(){$('#LOADER_D').remove();},800);
                        if(cb){
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
                    else if(box[0]=='f'){new_iframe(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='m0'){new_down(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='m1'){new_up(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='#t'){new_twithash(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='@t'){new_twitat(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='#g'){new_gabhash(box[3],box[1],box[2]);next(i);}
                    else if(box[0]=='@g'){new_gabat(box[3],box[1],box[2]);next(i);}
                    else if(box[0][0]=='|'){new_line(box[0][1],box[3],box[4],box[1],box[2]);next(i);}
                    }
                next(-1);
                }













            if(!page){page={};}

            var load=function(){
                console.log('load?');
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
                if(page.font&&page.font!==''){
                    $('#font_style').replaceWith('<link id="font_style" href="https://fonts.googleapis.com/css?family='+page.font+'" rel="stylesheet">');
                    $('#board').css({'font-family':"'"+page.font.split('+').join(' ')+"'"+',NotoColorEmoji'});
                    }
                var $0da2f4='#0da2f4',_0da2f4;
                var $007dc3='#007dc3',_007dc3;
                var $0289d4='#0289d4',_0289d4;
                function change_ui_colors(){
                    try{_0da2f4=surfacecurve.color(surfacecurve.color(surfacecurve.color(surfacecurve.color($0da2f4).hue('+'+page.ui.split(',')[0]).hex6()).shade(page.ui.split(',')[1]).hex6()).tint(page.ui.split(',')[2]).hex6()).saturation(page.ui.split(',')[3]).hex6();}catch(e){console.log(e,$0da2f4);}
                    try{_007dc3=surfacecurve.color(surfacecurve.color(surfacecurve.color(surfacecurve.color($007dc3).hue('+'+page.ui.split(',')[0]).hex6()).shade(page.ui.split(',')[1]).hex6()).tint(page.ui.split(',')[2]).hex6()).saturation(page.ui.split(',')[3]).hex6();}catch(e){console.log(e,$007dc3);}
                    try{_0289d4=surfacecurve.color(surfacecurve.color(surfacecurve.color(surfacecurve.color($0289d4).hue('+'+page.ui.split(',')[0]).hex6()).shade(page.ui.split(',')[1]).hex6()).tint(page.ui.split(',')[2]).hex6()).saturation(page.ui.split(',')[3]).hex6();}catch(e){console.log(e,$0289d4);}
                    $('#custom-ui-colors').replaceWith(
                        '<style id="custom-ui-colors">'
                    +       '#header,.menu_button,.options > div,#page_height{background:'+_0da2f4+';}'
                    +       '.inp-lable{color:'+_0da2f4+';}'
                    +       '.options,.tab{background:'+_0289d4+';}'
                    +   '</style>'
                        );
                    return;
                    }
                if(page.ui){change_ui_colors();}
                if(page.repeat=='false'){style[1]='#board_bg{background-repeat:no-repeat;background-size:cover;}';}
                if(page.url==''){style[0]='#board_bg{background-image:none);}#board_bg{background-color:'+page.bg+';}';}
                else{style[0]='#board_bg{background-image:url('+httpsbg+');}#board_bg{background-color:'+page.bg+';}';}
                style[2]='.box{background:'+page.box+';}.tyt,.txt{text-shadow:0 0 1px '+page.box+',0 0 1px '+page.box+',0 0 1px '+page.box+';}';
                style[3]='.tyt,.txt{color:'+page.text+';}';
                style[4]='.link a{color:'+page.link+';}';
                style[5]='.line{background:'+page.line+';}';
                style[6]='#board_bg{filter:blur('+page.blur+'px);}';
                style[7]='#logo{filter:hue-rotate('+page.logo+'deg);}';
                $('#custom-theme').replaceWith('<style id="custom-theme">'+style.join('')+'</style>');
                loaded=1;
                function got_items(){
                    console.log('hey?');
                    $('.box').each(function(i,v){
                        if(['up','down'].indexOf($(v).attr('type'))!==-1){
                            G.setup_preview($(v).attr('id'));
                            }});
                    return;
                    }
                console.log('display??',page.id,page,me.drafts,me.drafts[page.id]);
                if(me.drafts[page.id]){
                    display(function(){
                        got_items();
                        if(!me.guest){REWIRE();}
                        });
                    }
                else if(!me.guest){
                    got_items();
                    REWIRE();
                    }
                else{got_items();}
                };


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
            $('#page_height,#board').on('mousedown',function(){
                $('#tips').hide();
                if(close_options){
                    $('.menu_button').removeClass('tab');
                    $('.options').hide();
                    }
                else{close_options=true;}
                });


            var t={};
            var ID=-1;












            function new_txt(val,width,top,left){
                $('#board').append(
                    '<div class="box" type="txt" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="txt" style="width:'+width+'px;">'+val+'</div>'
                +   '</div>');
                return;
                }
            function new_emoji(emoji,top,left){
                $('#board').append(
                    '<div class="box transparent" type="emoji" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="box_drag"></div>'
                +       '<div class="emoji_large">'+emoji+'</div>'
                +   '</div>');
                return;
                }
            function new_link(href,lable,icon,top,left){
                $('#board').append(
                    '<div class="box transparent" type="link" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="link">'
                +           '<img src="'+(icon||'https://methodise.me/R/link.png')+'" class="protect_img_black"/>'
                +           '<a target="_blank" href="'+href+'" url="'+href+'" rel="'+(false?'':'no')+'follow">'
                +               '<i>'+lable+'</i>'
                +           '</a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_preview(object,top,left){
                $('#board').append(
                    '<div class="box" type="preview" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<a class="big_link_a" target="_blank" href="'+object.href+'" url="'+object.href+'" rel="'+(false?'':'no')+'follow">'
                +           '<div class="big_link">'
                +               '<div class="h130">'
                +                   '<img class="cover big_link_img" src="'+object.src+'"/>'
                +               '</div>'
                +               '<div class="tyt">'+(object.title||object.href)+'</div>'
                +               '<div class="txt">'+(object.description||'')+'</div>'
                +           '</div>'
                +       '</a>'
                +   '</div>');
                return;
                };
            function new_img(base64,image,width,clickable,top,left){
                $('#board').append(
                    '<div class="box '+((''+clickable)=='true'?'clickable':'transparent')+'" type="img" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<a class="big_link_a" target="_blank" url="'+image+'"'+(clickable=='true'?' href="'+image+'"':'')+'>'
                +           '<img style="height:auto;width:'+width+'px;display:block;" src="'+base64+'"/>'
                +       '</a>'
                +   '</div>');
                return;
                }
            function new_youtube(id,top,left){
                $('#board').append(
                    '<div class="box" type="youtube" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox">'
                +           '<iframe allowfullscreen allow="encrypted-media" src="https://www.youtube.com/embed/'+id+'"></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_dtube(id,top,left){
                $('#board').append(
                    '<div class="box" type="dtube" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox">'
                +           '<iframe style="width:267px;" src="https://emb.d.tube/#!/'+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_bitchute(id,top,left){
                $('#board').append(
                    '<div class="box" type="bitchute" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox">'
                +           '<iframe style="width:267px;" src="https://www.bitchute.com/embed/'+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_liveleak(id,top,left){
                $('#board').append(
                    '<div class="box" type="liveleak" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox">'
                +           '<iframe style="width:267px;" src="https://www.liveleak.com/ll_embed?i='+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_vimeo(id,top,left){
                $('#board').append(
                    '<div class="box" type="vimeo" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox">'
                +           '<iframe style="width:219px;" src="https://player.vimeo.com/video/'+id+'" allowfullscreen></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_soundcloud(src,top,left){
                $('#board').append(
                    '<div class="box" type="soundcloud" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox">'
                +           '<iframe height="166" width="400" scrolling="no" src="'+src+'"></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_map(src,top,left){
                $('#board').append(
                    '<div class="box" type="map" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox">'
                +           '<iframe allowfullscreen style="width:300px;height:250px;" src="'+src+'"></iframe>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_iframe(code,top,left){
                var isme=(((code.split('src="')[1]||'').split('"')[0]||'').indexOf('https://methodise.me/'))==0;
                $('#board').append(
                    '<div class="box'+(isme?' transparent':'')+'" type="iframe" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       (isme?'':'<div class="box_warn tip" tip="This box contains 3rd party code, so it is not explicitly trusted by Methodise.me"><b>⚠️ </b>Warning: Never give away your private keys!</div>')
                +       '<div class="ibox">'
                +           code
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_up(href,top,left){
                $('#board').append(
                    '<div class="box transparent rabbit" type="up" id="'+(ID+=1)+'" rabbit="'+href+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<a class="big_link_a" href="https://methodise.me/?'+href+'" url="https://methodise.me/?'+href+'" rel="follow" target="_top">'
                +           '<img src="https://methodise.me/R/up.png" class="protect_img_board" style="width:31px;"/>'
                +       '</a>'
                +       page.links[href].preview
                +   '</div>');
                return;
                }
            function new_down(href,top,left){
                $('#board').append(
                    '<div class="box transparent rabbit" type="down" id="'+(ID+=1)+'" rabbit="'+href+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<a class="big_link_a" href="https://methodise.me/?'+href+'" url="https://methodise.me/?'+href+'" rel="follow" target="_top">'
                +           '<img src="https://methodise.me/R/down.png" class="protect_img_board" style="width:31px;"/>'
                +       '</a>'
                +       page.links[href].preview
                +   '</div>');
                return;
                }
            function new_twithash(hash,top,left){
                $('#board').append(
                    '<div class="box transparent" type="twithash" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox hashtag twitter">'
                +           '<a target="_blank" href="https://twitter.com/hashtag/'+hash+'" rel="nofollow"><i>'+hash+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_twitat(at,top,left){
                $('#board').append(
                    '<div class="box transparent" type="twitat" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox at twitter">'
                +           '<a target="_blank" href="https://twitter.com/'+at+'" rel="nofollow"><i>'+at+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_gabhash(hash,top,left){
                $('#board').append(
                    '<div class="box transparent" type="gabhash" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox hashtag gab">'
                +           '<a target="_blank" href="https://gab.ai/hash/'+hash+'" rel="nofollow"><i>'+hash+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_gabat(at,top,left){
                $('#board').append(
                    '<div class="box transparent" type="gabat" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="ibox at gab">'
                +           '<a target="_blank" href="https://gab.ai/'+at+'" rel="nofollow"><i>'+at+'</i></a>'
                +       '</div>'
                +   '</div>');
                return;
                }
            function new_line(orient,length,color,top,left){
                $('#board').append(
                    '<div class="box transparent'+(({'h':'','v':'','l':' deg45l','r':' deg45r'})[orient])+'" type="line" id="'+(ID+=1)+'" style="top:'+top+'px;left:'+left+'px;">'
                +       '<div class="line '+(['l','v'].indexOf(orient)!==-1?'v':'h')+'" style="'+(['l','v'].indexOf(orient)!==-1?'height:':'width:')+length+'px;background:#'+(color||'ffffff')+';"></div>'
                +   '</div>');
                return;
                }




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
                            $('.sheild').remove();
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
                            getimg(h.src,function(b,bool){h.src=b;cb(h,bool);});
                            }
                        else{cb(h,true);}
                        }});}




            function getimg(img,cb){
                $.get("https://methodise.me/b64.php",{"img":img})
                 //.error(function(e){console.log(e);})
                 .always(function(d){
                    if(!d||d==''||typeof d=='object'){
                        cb(img,false);
                        }
                    else{
                        img=(img.split('?')[0]).split('.').pop();//get the extention
                        if(img=='gif'){img=img+';loop=0'}//bogus param with = instead of :
                        $('#new_img_test_width').replaceWith('<img id="new_img_test_width" src="'+(d.indexOf('data:image')==-1?('data:image/'+img+';base64,'):'')+d+'"/>');
                        setTimeout(function(d,cb){cb((d.indexOf('data:image')==-1?('data:image/'+img+';base64,'):'')+d,true,$('#new_img_test_width').width());},100,d,cb);
                        }});}




            function geticon(site,cb){
                if(site.indexOf('http')==-1){site='http://'+site;}
                var fav=new Image();
                fav.onload=function(){getimg(fav.src,function(b,bool){cb(b,bool);});};
                fav.onerror=function(){
                    $.get("https://methodise.me/middleman.php",{"site":site})
                    .always(function(d,a,b,c){
                        if(!d||d==''||typeof d=='object'){cb('https://methodise.me/R/link.png',false);}
                        else{
                            console.log('dddd',typeof d);
                            if(typeof d==Object){d=d.esponseText;}//wtf?!
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









            var adblock=true;
            try{if(OMINE){adblock=false;}}catch(e){}
            G.adblock=adblock;
            console.log(adblock);
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
                    if($.localStorage.getItem('me')){me=JSON.parse($.localStorage.getItem('me'));}
                    me.mining_settings[miner]=threads;
                    if(!adblock&&me.monero_public&&miner==0){
                        mine(me.monero_public,me.mining_settings,'You',miner);
                        }
                    else if(!adblock&&miner==1){
                        mine(page.donate,me.mining_settings,'ContentCreator',1);
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
                    else if(!adblock&&miner==1){
                        mine(page.donate,me.mining_settings,'ContentCreator',1);
                        }
                    else if(!adblock&&miner==2){
                        mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',miner);
                        }
                    mining_fairness();
                    if($.localStorage.getItem('me')){save('less mining threads');}
                    }});
            var mining;
            G.hashing=0;
            G.hashed=0;
            window.miner_status=function(report){
                window.mining_status=report;
                miners[report.miner]=report;
                mining=0;
                for(var miner in miners){
                    if(miners[miner].running==true){
                        mining+=1;
                        if(miner=='ContentCreator'){
                            if(report['accepted-hashes']>0){G.hashing=report['accepted-hashes'];}
                            else{G.hashed+=G.hashing;G.hashing=0;}
                            }
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
                    if(me.mining_settings[1]==0&&page.mines&&page.mines!==me.personal_miner){
                        me.mining_settings[1]=1;
                        mine(page.donate,me.mining_settings,'ContentCreator',1);
                        }
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
            if(!adblock&&page&&page.mines&&page.mines!==me.personal_miner){
                mine(page.donate,me.mining_settings,'ContentCreator',1);
                }
            if(!adblock){mine("49Tu2XSGrCsCusmr1m2f8YVNCCoqkut1YRMfDAupNKFbF4zGkZDxi9g5LQwJ9jAbbYcnik8KzWEw6W8kwHDXXfA45FtXpXv",me.mining_settings,'MethodiseMe',2);}
            for(var i=0;i<me.mining_settings.length;i+=1){$('#m'+i).find('.lessthreads').css({'height':(me.mining_settings[i]*20)+'px'});}

            if(!page){throw new Error('zzz...zzz...(Mmmm... Carrots! nom nom nom)');}
            else{load();}
            });
        </script>



    </body>
</html>
