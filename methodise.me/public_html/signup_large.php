<html>
    <head>
        <script src="https://methodise.me/S/jquery-1.11.3.js"></script>
    </head>
    <body style="font-family:arial;">
        <div style="position:absolute;top:0px;left:0px;width:1266px;height:420px;overflow:hidden;background:#02a0f5;">
            <div style="font-size:40px;font-weight:bold;position:absolute;top:140px;left:0px;width:100%;text-align:center;color:#ffffff;text-shadow:0px -1px rgba(0,0,0,0.34);"><b id="who">CREATORS</b>, COME GET PAID</div>
            <div style="font-size:14px;font-weight:bold;display:inline-block;top:198px;left:423px;position:absolute;color:#ffffff;">Create unlimited <i style="color:#ffd142;">#FREE</i> pages and get <i style="color:#ffd142;">#PAID</i> for each page view!</div>
            <img style="width: 50px;position:absolute;top:55px;left:508px;" src="https://methodise.me/R/followthewhiterabbit.png">
            <div style="font-size:30px;font-weight:bold;font-style:italic;position:absolute;top:64px;left:564px;color:#ffffff;text-shadow:0px 2px #000;">Methodise<b style="color:#edc102;">.me</b></div>
            <div style="width:500px;position:absolute;top:235px;left:402px;">
                <input id="signup_monero" type="text" placeholder="Your Monero Address" style="border-radius:3px;position:absolute;left:-50px;border:none;outline:none;padding:26px;padding-right:0px;width:360px;border-right:5px solid #fff;height:68px;text-align:center;">
                <div id="go" style="background:#ffd142;padding:17px 20px 17px 19px;font-size:30px;font-weight:bold;width:163px;text-align:center;text-shadow:0px 1px 1px #fff298, 0px 1px 1px #fff298;position:absolute;top:0px;left:308px;cursor:pointer;font-style:italic;border-top-right-radius:3px;border-bottom-right-radius:3px;">
                    Get Started
                </div>
                <div style="background:#02a0f5;position:absolute;top:68px;left:-50px;height:4px;width:558px;"></div>
            </div>
            <div style="font-size:14px;font-weight:bold;display:inline-block;top:320px;left:403px;position:absolute;">
                <a href="https://methodise.me/offline-key-generator/" target="_blank" style="text-decoration:none;color:rgba(255,255,255,0.7);">
                    Don't have a Monero address? Get one
                    <div id="getwallet" style="display:inline-block;padding:2px 8px 3px;border-radius:10px;font-weight:bold;color:#ffffff;background:#FF9800;">here</div>
                    to receive your earnings
                </a>
            </div>
        </div>
        <div id="benefit_0" class="benefit" style="position:absolute;top:420px;left:0px;width:1266px;height:500px;overflow:hidden;background:#ffffff;">
            <center>
                <h1 style="color:#02a0f5;">BE SEEN FIRST</h1>
                <b>Your pages will jump above position #1 search results on top search engines</b>
                <br>
                <img zrc="https://methodise.me/R/richcards.png" style="height:300px;"/>
            </center>
        </div>
        <div id="benefit_1" class="benefit" style="position:absolute;top:420px;left:0px;width:1266px;height:500px;overflow:hidden;background:#ffffff;display:none;">
            <center>
                <h1 style="color:#02a0f5;">EXPAND YOUR REACH</h1>
                <b>Share with 40+ social media sites in just a few clicks and save time on Social Media</b>
                <br>
                <img zrc="https://methodise.me/R/socialmedia.png" style="height:300px;margin-left:50px;"/>
            </center>
        </div>
        <div id="benefit_2" class="benefit" style="position:absolute;top:420px;left:0px;width:1266px;height:500px;overflow:hidden;background:#ffffff;display:none;">
            <center>
                <h1 style="color:#02a0f5;">FASTER VISIBILITY</h1>
                <b>Rapidly appear in search results on top search engines within 1-3 days</b>
                <br>
                <img zrc="https://methodise.me/R/searchengines.png" style="height:300px;margin:10px;margin-left:10px;"/>
            </center>
        </div>
        <div id="benefit_3" class="benefit" style="position:absolute;top:420px;left:0px;width:1266px;height:500px;overflow:hidden;background:#ffffff;display:none;">
            <center>
                <h1 style="color:#02a0f5;">EARN BY DEFAULT</h1>
                <b>Each person that views your page automatically generates new Monero coins to your wallet address</b>
                <br>
                <img zrc="https://methodise.me/R/moneros.png" style="height:320px;"/>
            </center>
        </div>
    </body>
    <script>
        var whos=['CREATORS','BLOGGERS','YOUTUBERS','AFFILIATES','PROMOTERS','SELLERS','VENDORS','ARTISTS','JOURNALISTS','TEACHERS','STUDENTS'],who=1;
        var benefit=0;
        $(function(){
            $('img').each(function(i,v){
                $(v).attr({'src':$(v).attr('zrc')});
                });
            setInterval(function(){
                $('#who').text(whos[who]);
                who+=1;
                if(!whos[who]){
                    who=0;
                    $('.benefit').hide();
                    if(benefit==$('.benefit').length-1){benefit=-1;}
                    $('#benefit_'+(benefit+=1)).show();
                    }
            },900);
            });
    </script>
</html>
