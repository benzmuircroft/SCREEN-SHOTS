<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>
        <link href="_R/favicon.png" rel="shortcut icon">
        <meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
        <meta http-equiv="pragma" content="no-cache" />
        <script type="text/javascript" src="_S/jquery-1.11.1.min.js"></script>
        <script type="text/javascript" src="_S/jquery-ui.js"></script>
        <script type="text/javascript" src="_S/draggable.js"></script>
        <script type="text/javascript" src='https://www.google.com/recaptcha/api.js'></script>
        <script type="text/javascript" src="_S/forge.min.js"></script>
        <script type="text/javascript" src="_S/prvc.js"></script>
        <script type="text/javascript" src="_S/qr.js"></script>
        <script type="text/javascript" src="_S/scrollto.js"></script>      <!--//  its just an animation!!-->
        <script type="text/javascript" src="_S/xpect.js"></script>
        <script type="text/javascript" src="_S/html2canvas.js"></script>
        <script type="text/javascript" src="_S/architect.min.js"></script>
        <script type="text/javascript" src="_S/jquery.html5storage.min.js"></script>
        <script src="//connect.soundcloud.com/sdk.js"></script><script>SC.initialize({client_id:'55a21fa009641e7f1e107fc7ec24dcf6'});</script>
        <script type="text/javascript" src="_S/eventEmitter2.js"></script>
        <script type="text/javascript" src="_S/gsrc.js"></script>
        <!--script type="text/javascript"src="_S/p-d.js"></script-->
        <script type="text/javascript"src="_S/paper-full.min.js"></script>
        <style>
            .test{top:0px;}
            @font-face{font-family: pixel;src: url('_R/pixel.otf')format("opentype"),url('_R/pixel.ttf');}
            body{background:#FFF;font-family:pixel;padding:0px;margin:0px;overflow:hidden;height: 100%;min-height: 100%;position:relative;}
            input,textarea{border:none;font-weight:bold;}input:focus,textarea:focus{outline:none;}
            textarea{resize:none;overflow:hidden;min-height:17px;font-family: 'Arial';}
            .trunk {width: 190px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
            /*a:link.h,a:visited.h,a:hover.h,a:active.h {color:#FFF;text-decoration:none;cursor:pointer;}
            #cusername{text-shadow: 2px 0 0 #FFF, -2px 0 0 #FFF, 0 2px 0 #FFF, 0 -2px 0 #FFF, 1px 1px #FFF, -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF;}
            .inp{background:#FFF;color:#000;max-height:13px;height:13px;font-size:13px;white-space:nowrap;overflow:hidden;border:5px solid #FFF;border-bottom:1px solid #FFF;border-top:1px solid #FFF;cursor:text;}*/
            *,.btn{-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}
            .btn{position:relative;height:24px;line-height:25px;font-size:14px;font-weight:bold;text-align:center;color:#fff;background:#444;cursor:pointer;transition:all .1s ease-in-out;text-shadow: 0px 2px rgba(0,0,0,0.4);border-top:2px solid rgba(0,0,0,0);border-bottom:2px solid rgba(0,0,0,0.2);}
            .btn:hover{-webkit-filter: brightness(110%) grayscale(30%);}
            .btn:active{-webkit-filter: brightness(100%) grayscale(0%);line-height:30px;text-shadow: 0px 0px rgba(0,0,0,0);border-bottom:2px solid rgba(0,0,0,0);border-top:2px solid rgba(0,0,0,0.3);color:rgba(0,0,0,0.3);}
            /*.b607{background:url(_R/bg/doge.png);}//TODO Lazy loading Use a blank.gif as the src of images, and include the width and height of the final image
            .b529{background:url(_R/bg/palm.png);}
            .b5076{background:url(_R/bg/popart.png);}
            .b7240{background:url(_R/bg/zef.png);}
            .b8586{background:url(_R/bg/pop.png);}
            .bi51{background:url(_R/bg/graffiti.png);}
            .b573{background:url(_R/bg/mcfitti.png);}
            .b693{background:url(_R/bg/david.png);}
            .b1415{background:url(_R/bg/homer.png);}
            .b1634{background:url(_R/bg/breakfast.png);}
            .b1251{background:url(_R/bg/sushi.png);}
            .b1668{background:url(_R/bg/tupac.png);}
            .b1486{background:url(_R/bg/pooh.png);}
            .b2324{background:url(_R/bg/super.png);}
            .b2806{background:url(_R/bg/wave.png);}
            .b2378{background:url(_R/bg/pele.png);}
            .b2895{background:url(_R/bg/pizza.png);}
            .b3385{background:url(_R/bg/spa.png);}
            .b3973{background:url(_R/bg/alien.png);}
            .b4160{background:url(_R/bg/fast.png);}
            .b3751{background:url(_R/bg/ppanther.png);}
            .b4142{background:url(_R/bg/lipstick.png);}
            .b2862{background:url(_R/bg/breakdance.png);}//TODO bad quality
            .b2551{background:url(_R/bg/giraffe.png);}
            .b2840{background:url(_R/bg/g6.png);}
            .b3929{background:url(_R/bg/turtle.png);}
            .b3317{background:url(_R/bg/sonic.png);}
            .b5002{background:url(_R/bg/abfab.png);}
            .b5013{background:url(_R/bg/branson.png);}//TODO
            .b5026{background:url(_R/bg/streetfighter.png);}
            .b5038{background:url(_R/bg/car.png);}
            .b6129{background:url(_R/bg/opgea.png);}
            .b6717{background:url(_R/bg/space.png);}
            .b7206{background:url(_R/bg/nyan.png);}
            .b9307{background:url(_R/bg/megatron.png);}
            .b9529{background:url(_R/bg/festival.png);}
            .b8434{background:url(_R/bg/topcat.png);}//TODO bad quality
            .b5942{background:url(_R/bg/gaga.png);}
            .b6351{background:url(_R/bg/brucelee.png);}
            .b8851{background:url(_R/bg/lima.png);}
            .b9851{background:url(_R/bg/garden.png);}
            .b8468{background:url(_R/bg/che.png);}//TODO bad quality
            .b8515{background:url(_R/bg/briancox.png);}
            .b9573{background:url(_R/bg/love.png);}
            .b5099{background:url(_R/bg/walt.png);}
            .b5064{background:url(_R/bg/watch.png);}
            .b5089{background:url(_R/bg/pose.png);}
            .b5960{background:url(_R/bg/scarface.png);}
            .b9393{background:url(_R/bg/fight.png);}
            .b7778{background:url(_R/bg/grumpy.png);}
            .b6173{background:url(_R/bg/spock.png);}
            .b7295{background:url(_R/bg/higgs.png);}
            .b7262{background:url(_R/bg/mud.png);}
            .b7724{background:url(_R/bg/godot.png);}
            .b7551{background:url(_R/bg/mick.png);}
            .b6785{background:url(_R/bg/george.png);}//TODO
            */


            .b{position:absolute;/*relative*/width:1660px;height:1660px;/*float:left;*/background-size:contain;}
            .x0{left:0px;}  .y0{top:0px;}
            .x1{left:1660px;}   .y1{top:1660px;}
            .x2{left:3320px;}   .y2{top:3320px;}
            .x3{left:4980px;}   .y3{top:4980px;}
            .x4{left:6640px;}   .y4{top:6640px;}
            .x5{left:8300px;}   .y5{top:8300px;}
            .x6{left:9960px;}   .y6{top:9960px;}
            .x7{left:11620px;}  .y7{top:11620px;}
            .x8{left:13280px;}  .y8{top:13280px;}
            .x9{left:14940px;}  .y9{top:14940px;}
            .x10{left:16600px;} .y10{top:16600px;}
            .x11{left:18260px;} .y11{top:18260px;}
            .x12{left:19920px;} .y12{top:19920px;}
            .x13{left:21580px;} .y13{top:21580px;}
            .x14{left:23240px;} .y14{top:23240px;}
            .x15{left:24900px;} .y15{top:24900px;}
            .x16{left:26560px;} .y16{top:26560px;}
            .x17{left:28220px;} .y17{top:28220px;}
            .x18{left:29880px;} .y18{top:29880px;}
            .x19{left:31540px;} .y19{top:31540px;}
            .x20{left:33200px;} .y20{top:33200px;}
            .x21{left:34860px;} .y21{top:34860px;}
            .x22{left:36520px;} .y22{top:36520px;}
            .x23{left:38180px;} .y23{top:38180px;}
            .x24{left:39840px;} .y24{top:39840px;}
            .x25{left:41500px;} .y25{top:41500px;}
            .x26{left:43160px;} .y26{top:43160px;}
            .x27{left:44820px;} .y27{top:44820px;}
            .x28{left:46480px;} .y28{top:46480px;}
            .x29{left:48140px;} .y29{top:48140px;}
            .x30{left:49800px;} .y30{top:49800px;}
            .x31{left:51460px;} .y31{top:51460px;}
            .x32{left:53120px;} .y32{top:53120px;}
            .x33{left:54780px;} .y33{top:54780px;}
            .x34{left:56440px;} .y34{top:56440px;}
            .x35{left:58100px;} .y35{top:58100px;}
            .x36{left:59760px;} .y36{top:59760px;}
            .x37{left:61420px;} .y37{top:61420px;}
            .x38{left:63080px;} .y38{top:63080px;}
            .x39{left:64740px;} .y39{top:64740px;}
            .x40{left:66400px;} .y40{top:66400px;}
            .x41{left:68060px;} .y41{top:68060px;}
            .x42{left:69720px;} .y42{top:69720px;}
            .x43{left:71380px;} .y43{top:71380px;}
            .x44{left:73040px;} .y44{top:73040px;}
            .x45{left:74700px;} .y45{top:74700px;}
            .x46{left:76360px;} .y46{top:76360px;}
            .x47{left:78020px;} .y47{top:78020px;}
            .x48{left:79680px;} .y48{top:79680px;}
            .x49{left:81340px;} .y49{top:81340px;}
            .x50{left:83000px;} .y50{top:83000px;}
            .x51{left:84660px;} .y51{top:84660px;}
            .x52{left:86320px;} .y52{top:86320px;}
            .x53{left:87980px;} .y53{top:87980px;}
            .x54{left:89640px;} .y54{top:89640px;}
            .x55{left:91300px;} .y55{top:91300px;}
            .x56{left:92960px;} .y56{top:92960px;}
            .x57{left:94620px;} .y57{top:94620px;}
            .x58{left:96280px;} .y58{top:96280px;}
            .x59{left:97940px;} .y59{top:97940px;}
            .x60{left:99600px;} .y60{top:99600px;}
            .x61{left:101260px;}    .y61{top:101260px;}
            .x62{left:102920px;}    .y62{top:102920px;}
            .x63{left:104580px;}    .y63{top:104580px;}
            .x64{left:106240px;}    .y64{top:106240px;}
            .x65{left:107900px;}    .y65{top:107900px;}
            .x66{left:109560px;}    .y66{top:109560px;}
            .x67{left:111220px;}    .y67{top:111220px;}
            .x68{left:112880px;}    .y68{top:112880px;}
            .x69{left:114540px;}    .y69{top:114540px;}
            .x70{left:116200px;}    .y70{top:116200px;}
            .x71{left:117860px;}    .y71{top:117860px;}
            .x72{left:119520px;}    .y72{top:119520px;}
            .x73{left:121180px;}    .y73{top:121180px;}
            .x74{left:122840px;}    .y74{top:122840px;}
            .x75{left:124500px;}    .y75{top:124500px;}
            .x76{left:126160px;}    .y76{top:126160px;}
            .x77{left:127820px;}    .y77{top:127820px;}
            .x78{left:129480px;}    .y78{top:129480px;}
            .x79{left:131140px;}    .y79{top:131140px;}
            .x80{left:132800px;}    .y80{top:132800px;}
            .x81{left:134460px;}    .y81{top:134460px;}
            .x82{left:136120px;}    .y82{top:136120px;}
            .x83{left:137780px;}    .y83{top:137780px;}
            .x84{left:139440px;}    .y84{top:139440px;}
            .x85{left:141100px;}    .y85{top:141100px;}
            .x86{left:142760px;}    .y86{top:142760px;}
            .x87{left:144420px;}    .y87{top:144420px;}
            .x88{left:146080px;}    .y88{top:146080px;}
            .x89{left:147740px;}    .y89{top:147740px;}
            .x90{left:149400px;}    .y90{top:149400px;}
            .x91{left:151060px;}    .y91{top:151060px;}
            .x92{left:152720px;}    .y92{top:152720px;}
            .x93{left:154380px;}    .y93{top:154380px;}
            .x94{left:156040px;}    .y94{top:156040px;}
            .x95{left:157700px;}    .y95{top:157700px;}
            .x96{left:159360px;}    .y96{top:159360px;}
            .x97{left:161020px;}    .y97{top:161020px;}
            .x98{left:162680px;}    .y98{top:162680px;}
            .x99{left:164340px;}    .y99{top:164340px;}
            .q{margin:1px;position:absolute;transform: translateZ(0);}
            .q1 ,.q2 ,.q3 ,.q4 ,.q5 ,.q6 ,.q7 ,.q8 ,.q9 ,.q10 ,.m1 ,.m2 ,.m3 ,.m4 ,.m5 ,.m6 ,.m7 ,.m8 ,.m9 ,.m10{top:0px;}
            .q1 ,.q11,.q21,.q31,.q41,.q51,.q61,.q71,.q81,.q91 ,.m1 ,.m11,.m21,.m31,.m41,.m51,.m61,.m71,.m81,.m91{left:0px;}
            .q11,.q12,.q13,.q14,.q15,.q16,.q17,.q18,.q19,.q20 ,.m11,.m12,.m13,.m14,.m15,.m16,.m17,.m18,.m19,.m20{top:166px;}
            .q2 ,.q12,.q22,.q32,.q42,.q52,.q62,.q72,.q82,.q92 ,.m2 ,.m12,.m22,.m32,.m42,.m52,.m62,.m72,.m82,.m92{left:166px;}
            .q21,.q22,.q23,.q24,.q25,.q26,.q27,.q28,.q29,.q30 ,.m21,.m22,.m23,.m24,.m25,.m26,.m27,.m28,.m29,.m30{top:332px;}
            .q3 ,.q13,.q23,.q33,.q43,.q53,.q63,.q73,.q83,.q93 ,.m3 ,.m13,.m23,.m33,.m43,.m53,.m63,.m73,.m83,.m93{left:332px;}
            .q31,.q32,.q33,.q34,.q35,.q36,.q37,.q38,.q39,.q40 ,.m31,.m32,.m33,.m34,.m35,.m36,.m37,.m38,.m39,.m40{top:498px;}
            .q4 ,.q14,.q24,.q34,.q44,.q54,.q64,.q74,.q84,.q94 ,.m4 ,.m14,.m24,.m34,.m44,.m54,.m64,.m74,.m84,.m94{left:498px;}
            .q41,.q42,.q43,.q44,.q45,.q46,.q47,.q48,.q49,.q50 ,.m41,.m42,.m43,.m44,.m45,.m46,.m47,.m48,.m49,.m50{top:664px;}
            .q5 ,.q15,.q25,.q35,.q45,.q55,.q65,.q75,.q85,.q95 ,.m5 ,.m15,.m25,.m35,.m45,.m55,.m65,.m75,.m85,.m95{left:664px;}
            .q51,.q52,.q53,.q54,.q55,.q56,.q57,.q58,.q59,.q60 ,.m51,.m52,.m53,.m54,.m55,.m56,.m57,.m58,.m59,.m60{top:830px;}
            .q6 ,.q16,.q26,.q36,.q46,.q56,.q66,.q76,.q86,.q96 ,.m6 ,.m16,.m26,.m36,.m46,.m56,.m66,.m76,.m86,.m96{left:830px;}
            .q61,.q62,.q63,.q64,.q65,.q66,.q67,.q68,.q69,.q70 ,.m61,.m62,.m63,.m64,.m65,.m66,.m67,.m68,.m69,.m70{top:996px;}
            .q7 ,.q17,.q27,.q37,.q47,.q57,.q67,.q77,.q87,.q97 ,.m7 ,.m17,.m27,.m37,.m47,.m57,.m67,.m77,.m87,.m97{left:996px;}
            .q71,.q72,.q73,.q74,.q75,.q76,.q77,.q78,.q79,.q80 ,.m71,.m72,.m73,.m74,.m75,.m76,.m77,.m78,.m79,.m80{top:1162px;}
            .q8 ,.q18,.q28,.q38,.q48,.q58,.q68,.q78,.q88,.q98 ,.m8 ,.m18,.m28,.m38,.m48,.m58,.m68,.m78,.m88,.m98{left:1162px;}
            .q81,.q82,.q83,.q84,.q85,.q86,.q87,.q88,.q89,.q90 ,.m81,.m82,.m83,.m84,.m85,.m86,.m87,.m88,.m89,.m90{top:1328px;}
            .q9 ,.q19,.q29,.q39,.q49,.q59,.q69,.q79,.q89,.q99 ,.m9 ,.m19,.m29,.m39,.m49,.m59,.m69,.m79,.m89,.m99{left:1328px;}
            .q91,.q92,.q93,.q94,.q95,.q96,.q97,.q98,.q99,.q100,.m91,.m92,.m93,.m94,.m95,.m96,.m97,.m98,.m99,.m100{top:1494px;}
            .q10,.q20,.q30,.q40,.q50,.q60,.q70,.q80,.q90,.q100,.m10,.m20,.m30,.m40,.m50,.m60,.m70,.m80,.m90,.m100{left:1494px;}
            #qmenu{margin-left: -29px;margin-top: -29px;box-shadow:2px 4px 10px #000;}
            #QR_canvas,#qmenu_canvas,#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9,#c10,#c11,#c12,#c13,#c14,#c15,#c16,#c17{z-index:-9999999;position:absolute;top:-164px;left:-164px;}
            .simple,.modulate,.pdf,.chat,.share,.tip,.run,.pro{padding-right:2px;}
            .run{width:12px;height:10px;}
            #pay__{position:absolute;top: 247px;left:30px;width:164px;height:60px;overflow: hidden;background:#FFF;}
            .btn-paylogin{height:56px;line-height:24px;z-index:3;}
            #pay-start{position:absolute;top:60px;width:100%;height:100%;background:url(_R/shifty+.png);background-size:164px 60px;cursor:pointer;z-index:1;}
            #pay_{position:absolute;top: 0px;left:0px;width:164px;height:60px;z-index:1;}
            #pay_.hov{cursor:pointer;background:rgba(255,255,255,0.1);}
            #paym{position:absolute;top: -60px;left:0px;width:164px;height:60px;background:url(_R/shiftybg.png);z-index:2;}
            #paymin{position:absolute;top: 0px;left:153px;width:10px;height:10px;background:url(_R/min1.png);cursor:pointer;z-index:2;}
            #coins{width:3000px;height:40px;position:absolute;top:5px;z-index:1;}
            #scrollpay{position:absolute;top:46px;left:5px;width:154px;height:10px;}
            #coinL{position:absolute;top:0px;left:2px;width:10px;height:10px;cursor:pointer;background:url(_R/coinL.png);}
            #coinR{position:absolute;top:0px;right:2px;width:10px;height:10px;cursor:pointer;background:url(_R/coinR.png);}
            .coin{float:left;width:54.6px;height:36px;text-align:center;font-size:10px;color:#fff;border-bottom:2px solid #28394d;}
            .coin.selected{border-bottom:2px solid #e5FF00;color:#e5FF00;}
            .imgcoin{width:20px;height:20px;}
            #paysubmit{cursor:pointer;font-size: 12px;color: white;background: #2F4168;text-shadow: #000 1px 1px,rgba(0, 0, 0, 0.3) -1px 1px;position: absolute;left: 38px;;width: 78px;text-align: center;border-radius: 5px;line-height: 11px;}
            #paysubmit:hover{background:#58D800;}
            #payqr{position:absolute;top:-164px;left:0px;width:164px;height:164px;}
            #map{z-index:100;position:fixed;bottom:5px;left:5px;width:204px;height:204px;background:url(_R/world.png);background-size: contain;}
            #minigrid{z-index:1;position:absolute;top:0px;left:0px;width:204px;height:204px;background:url(_R/minimap.png);}
            @-webkit-keyframes blink{0%{border-color:#000;background:#FFF;}50%{border-color:#FFF;background:#000;}}
            @-moz-keyframes blink{0%{border-color:#000;background:#FFF;}50%{border-color:#FFF;background:#000;}}
            @-o-keyframes blink{0%{border-color:#000;background:#FFF;}50%{border-color:#FFF;background:#000;}}
            #you{pointer-events:none;background:#FFF;border:1px solid #000;width:2px;height:2px;position:absolute;top:2px;left:2px;margin-left:-1px;margin-top:-1px;-webkit-animation: blink 0.5s infinite;-moz-animation: blink 0.5s infinite;-o-animation: blink 0.5s infinite;}
            #bar{background:#FFF;width:0px;height:4px;position:absolute;top:-4px;left:0px;transform:translateZ(0);}
            #screen{width:100%;height:100%;overflow:hidden;}
            #main{width:167100px;height:167100px;position:relative;}
            #m,#users{position:absolute;top:50px;left:50px;width:166000px;height:166000px;}
            .mbg{width:166000px;height:166000px;position:absolute;top:50px;left:50px;}
            .mbg.mbg-col{background:url(_R/world.png);background-size: 100% 100%;}
            .mbg.mbg-img{background:url(_R/build1.png);background-position: 82172px 82159px;background-repeat:no-repeat;}
            .bdr{background:url('_R/kilrbit.png');background-size:auto 38px;background-repeat:repeat-x;height:38px;width:166000px;}
            .bdr.bdr-t{left:50px;top:5px;position:absolute;}
            .bdr.bdr-r{top:166050px;left:5px;position:absolute;transform:rotate(-90deg);transform-origin:0% 0%;-ms-transform:rotate(-90deg);-ms-transform-origin:0% 0%;-webkit-transform: rotate(-90deg);-webkit-transform-origin:0% 0%;}
            .bdr.bdr-b{top:166096px;left:166050px;position:absolute;transform:rotate(180deg);transform-origin:0% 0%;-ms-transform:rotate(180deg);-ms-transform-origin:0% 0%;-webkit-transform: rotate(180deg);-webkit-transform-origin:0% 0%;}
            .bdr.bdr-l{top:50px;left:166096px;position:absolute;transform:rotate(90deg);transform-origin:0% 0%;-ms-transform:rotate(90deg);-ms-transform-origin:0% 0%;-webkit-transform: rotate(90deg);-webkit-transform-origin:0% 0%;}

            #menu{position:fixed;top:0px;left:-215px;width:214px;padding-right:1px;height:100%;background:#fff;box-shadow:0px 0px 0px rgba(0,0,0,0);transition:all .4s ease-in-out;}
            #menu-shadow-mask{position:absolute;top:0px;left:0px;width:100%;height:100%;background:#fff;}
            .menu-toggle{position:absolute;top:50px;left:215px;width:50px;height:50px;cursor:pointer;transition:all .4s ease-in-out;}
            .menu-toggle-image{width:100%;height:100%;background:url(_R/menu-toggle.png);background-size:100% 100%;}
            .menu-toggle-shadow{width:100%;height:100%;background:url(_R/menu-toggle.png);background-size:100% 100%;filter: blur(3px) brightness(-100);-webkit-filter: blur(3px) brightness(-100);}
            .menu-toggle.menu-open{transform:scaleX(-1);}
            #menu.menu-open{transform:translate(215px);box-shadow:2px 0px 10px #000;}
            #menu > .btn{margin:5px;margin-top:0px;margin-bottom:2px;}

            .btn-login,.btn-logout{margin-top:6px!important;}
            .btn-login,.sub-login,.btn-paylogin{background:#ED9900;}.btn-login > div{position:absolute;width:40%;top:0px;}
            #edit-login{width:180px;}
            #btn-login-ok{height: 18px;line-height: 17px;margin-top: 5px;background: #3BA91C;}
            .btn-logout,.sub-logout{background:#ED4800;}
            .btn-settings,.sub-settings{background:#BB3AD0;}
            .btn-profile,.sub-profile{background:#E23232;}
            .btn-help,.sub-help{background:#1767E2;}
            .sub{position: absolute;top: 5px;left: 5px;z-index: 2;width: 204px;border-bottom: 1000px solid #FFF;font-size:14px;display:none;}
            .sub-login{height: 300px;}
            #recaptcha-login{transform: scale(0.61);transform-origin: 0 0;margin-top:10px;}
            .sub-head{position:absolute;top:0px;left:0px;padding-left:10px;color:#FFF;width:194px;height:25px;line-height:23px;text-shadow: 0px 2px rgba(0,0,0,0.4);font-weight:bold;background:rgba(255,255,255,0.1);}
            .sub-body{position:absolute;top:23px;left:0px;color:#FFF;width:184px;margin:10px;}
            .sub-min{background:url(_R/sub-min.png);position:absolute;top:0px;right:2px;width:31px;height:23px;cursor:pointer;}
            .hidden{display:none;}
            .edit{padding:2px;background:#FFF;color:#000;border:none;outline:none;margin-top:10px;}
            #play{position:fixed;top:30%;width:100%;text-align:center;height:0px!important;z-index:900;}
            /*paralayers*/
            #users{pointer-events:none;}
            #screen:active~#users{pointer-events:auto;}
            #users:hover{/*note: can momentary do stuff with jquery*/}
            .grab{cursor:move!important;}
            .user-select-none{
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                }
            /*paralayers!*/
            .user-mouse{transform: translateZ(0);position:absolute;top:-1000px;left:-1000px;background:rgba(255,255,255,0.4);width:100px;height:100px;border-radius:100px;margin-left:-50px;margin-top:-50px;}
            .user-busy{}
            .user-busy:before{content:url('_R/nocall.png');position:absolute;top:0px;left:0px;z-index:2;}
            .user-busy:after{content:'📞';position:absolute;top:40px;left:10px;transform:scaleX(-1);color:#FF0000;font-weight:bold;/*text-shadow:-1px -1px 0 rgba(0,0,0,0.7),1px -1px 0 rgba(0,0,0,0.7),-1px 1px 0 rgba(0,0,0,0.7),1px 1px 0 rgba(0,0,0,0.7);*/}
            .user-call{}
            .user-call:before{content:url('_R/incall.png');position:absolute;top:0px;left:0px;z-index:2;}
            .user-call:after{content:'📞';position:absolute;top:40px;left:10px;transform:scaleX(-1);color:#0066CC;font-weight:bold;/*text-shadow:-1px -1px 0 rgba(0,0,0,0.7),1px -1px 0 rgba(0,0,0,0.7),-1px 1px 0 rgba(0,0,0,0.7),1px 1px 0 rgba(0,0,0,0.7);*/}
            .user-mouse-head{position:absolute;top:25px;left:30px;width:40px;height:40px;pointer-events:auto;}
            .user-head-calling{-webkit-filter:hue-rotate(284deg) brightness(1.4);-filter:hue-rotate(284deg) brightness(1.4);}
            .user-mouse-name{position:absolute;top:70px;left:10px;width:80px;height:13px;text-align:center;font-size:10px;font-weight:bold;word-wrap:break-word;}
            div.speech{pointer-events:auto;position:absolute;transform: translateZ(0);padding:10px;min-width:200px;max-width:400px;text-align: center;background: #FFF;border-radius: 10px;font-weight:bold;word-wrap:break-word;}
            div.speech:before{content:" ";width: 0;height: 0;position: absolute;top: 100%;left: -23px;margin-top:-9px;border: 15px solid #666;border-color: #FFF transparent transparent #FFF;transform:skewX(-45deg) skewY(30deg);}
            div.speech-after{width: 14px;height: 14px;line-height:13px;text-align:center;font-weight:bold;border-radius:100px;position: absolute;top: 0%;left: 100%;margin-left:-11px;margin-top:-7px;border: 2px solid #FFF;background:#F54444;color:#FFF;}
            div.speech-after:hover{background:#DC0303;cursor:pointer;}
            .webcamvideo{
                -webkit-filter:sepia(0.6) saturate(2.5) hue-rotate(-20deg) contrast(0.8);
                -filter:sepia(0.6) saturate(2.5) hue-rotate(-20deg) contrast(0.8);
                }
            .webcamui{position: fixed; width: 200px; border-width: 17px 3px; border-style: solid; border-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.7) 0px 2px 10px; left: 640px; background: rgb(255, 255, 255);}
            .webcamx{background: #FF6160;top: -15px;right: 0px;width: 14px;height: 13px;cursor: pointer;position: absolute;cursor:pointer;}
            .webcamxs{width: 3px;height: 9px;background: #fff;position: absolute;left: 6px;top: 2px;}
            .webcamxa{transform: rotate(45deg);}
            .webcamxb{transform: rotate(-45deg);}
            .webcamvol{width:100px;height:3px;background:#000;border:1px solid #fff;border-bottom-width:5px;bottom:4px;left:50px;position:absolute;display:none;cursor:pointer;}
            .webcamupdn{position:absolute;top:-6px;color:#FFF;font-size:14px;}
            .webcamup{right:-10px;}
            .webcamdn{left:-10px;}
            .webcamvpct{width:50px;height:3px;background: #E63636;top:0px;left:0px;position:absolute;}
            .webcamcl{position:absolute;bottom:5px;right:5px;width:190px;background:#FF0000;opacity:0.9;}
            .webcamon{position:absolute;bottom:5px;left:5px;width:95px;background:#00FF00;opacity:0.9;}
            .webcamoff{position:absolute;bottom:5px;right:5px;width:95px;background:#FF0000;opacity:0.9;}
            .webcaminfo{color:#FFF;background:rgba(0,0,0,0.4);text-align:center;padding:5px;word-wrap:break-word;}
            .alien{position:absolute;overflow:hidden;width:2px;height:2px;ponter-events:none;}
            .alien-bg{background: url(_R/world.png);background-size:204px 204px;width:204px;height:204px;position:absolute;transform:scaleX(-1) scaleY(-1);}
            #peers{position:fixed;top:0px;right:0px;width:32px;height:100%;background:#fff;box-shadow:rgba(0, 0, 0, 0.7) -3px 0px 10px;display:none;}
            .peer{position:relative;margin-top:5px;width:22px;height:22px;background-size:22px 22px;cursor:pointer;border-left: 5px solid #FFF;border-right: 5px solid #FFF;}
            .peer-name-tooltip{float: right;margin-top: 0px;margin-right: 4px;padding: 2px 7px 2px 7px;z-index:999;line-height:17px;height: 107px;min-width:200px;background: #3A3D3E;color: #fff;font-size: 14px;font-weight: bold;display: block;}
            .peer-name-arrow{position:absolute;right:-8px;top:4px;width: 0px;height: 0px;border-top: 6px solid transparent;border-bottom: 6px solid transparent;border-left: 8px solid #3A3D3E;}
            .peer-mouse-guide{position:absolute;top:0px;right:-24px;width:24px;height:44px;}
            .peer-name-big{width:83px;height:83px;background-size:83px 83px;margin-right:10px;margin-top:3px;float:left;}
            #say{position:absolute;bottom: 5px;right: 0px;width: 0px;height: 0px;}
            #edit-say{position: absolute; bottom: 0px; right: 33px; min-width: 148px;padding-left: 8px;padding-right:8px;padding-top:4px;z-index:1;min-height:17px;height:17px;color:#AAA;}
            #btn-say{height: 19px;line-height: 21px;width: 23px;bottom: 23px;right: 27px;background:#27B515;z-index:2;}
            #btn-say-arrow1{width: 0px;height: 1px;position: absolute;top: 3px;left: -5px;border-top: 6px solid transparent;border-left: 8px solid #000;border-bottom: 6px solid transparent;}
            #btn-say-arrow2{width: 0px;height: 1px;position: absolute;top: 3px;left: -6px;border-top: 6px solid transparent;border-left: 8px solid #fff;border-bottom: 6px solid transparent;}
            @-webkit-keyframes nomoretext{from{color:#FF0000!important;}to{color:#000!important;}}
            @-moz-keyframes nomoretext{from{color:#FF0000!important;}to{color:#000!important;}}
            .no-more-text{-webkit-animation:nomoretext 1s;-moz-animation:nomoretext 1s;}
            .z12{z-index:1200!important;}/*players embeds calls*/
            .z11{z-index:1100!important;}/*map*/
            .z10{z-index:1000!important;}
            .z9 {z-index:900!important;}
            .z8 {z-index:800!important;}
            .z7 {z-index:700!important;}/*menu login profile.. && peers menu bar */
            .z6 {z-index:600!important;}
            .z5 {z-index:500!important;}
            .z4 {z-index:400!important;}
            .z3 {z-index:300!important;}/*qr menu lifts qr up to this layer*/
            .z2 {z-index:200!important;}/*users*/
            .z1 {z-index:100!important;}/*m main qrs*/
            .z0 {z-index:0!important;}/*behind hidden*/
        </style>
    </head>
    <body>
        <div id="play" class="z12"></div>
        <canvas id="QR_canvas" class="z0" width="166" height="166"></canvas>
        <canvas id="qmenu_canvas" class="z0" width="166" height="166"></canvas>
        <canvas id="c1"  class="z0" width="166" height="166"></canvas>
        <canvas id="c2"  class="z0" width="166" height="166"></canvas>
        <canvas id="c3"  class="z0" width="166" height="166"></canvas>
        <canvas id="c4"  class="z0" width="166" height="166"></canvas>
        <canvas id="c5"  class="z0" width="166" height="166"></canvas>
        <canvas id="c6"  class="z0" width="166" height="166"></canvas>
        <canvas id="c7"  class="z0" width="166" height="166"></canvas>
        <canvas id="c8"  class="z0" width="166" height="166"></canvas>
        <canvas id="c9"  class="z0" width="166" height="166"></canvas>
        <canvas id="c10" class="z0" width="166" height="166"></canvas>
        <canvas id="c11" class="z0" width="166" height="166"></canvas>
        <canvas id="c12" class="z0" width="166" height="166"></canvas>
        <canvas id="c13" class="z0" width="166" height="166"></canvas>
        <canvas id="c14" class="z0" width="166" height="166"></canvas>
        <canvas id="c15" class="z0" width="166" height="166"></canvas>
        <canvas id="c16" class="z0" width="166" height="166"></canvas>
        <canvas id="c17" class="z0" width="166" height="166"></canvas>
        <div id="map" class="z11" >
        	<div id="minigrid">
                <div id="you"></div>
        	</div>
            <div id="bar"></div>
        </div>
        <div id="screen">
            <div id="main">
                <div class="mbg mbg-col"></div>
                <div class="mbg mbg-img"></div>
                <div class="bdr bdr-t"></div>
                <div class="bdr bdr-r"></div>
                <div class="bdr bdr-b"></div>
                <div class="bdr bdr-l"></div>
                <div id="m" class="paralayer z1"></div>
                <div id="users" class="paralayer z2"></div>
            </div>
        </div>
        <div id="menu" class="z7">
            <div class="menu-toggle">
                <div class="menu-toggle-shadow"></div>
            </div>
            <div class="menu-toggle menu-toggle-btn" style="left:215px;">
                <div class="menu-toggle-image"></div>
            </div>
            <div id="menu-shadow-mask"></div>
            <div class="btn btn-login"><div style="left:10%;">Login</div>-<div style="right:10%;">Sign Up</div></div>
            <div class="btn btn-logout hidden">Logout</div>
            <div class="btn btn-profile">Profile</div>
            <div class="btn btn-settings">Settings</div>
            <div class="btn btn-help">How To</div>
            <div class="sub sub-login">
                <div class="sub-head">
                    Login or Sign up
                    <div class="sub-min"></div>
                </div>
                <div class="sub-body">
                    We don't do passwords. All you'll ever need is your email address to login and sign up.
                    <br>
                    <input id="edit-login" class="edit edit-login" type="text" value="me@example.com"/>
                    <div class="btn" id="btn-login-ok">ok</div>
                    <div id="recaptcha-login"></div>
                </div>
            </div>
        </div>
        <div id="peers" class="z7">
            <div id="say">
                <textarea class="edit edit-say" id="edit-say">What's on your mind?</textarea><!--contenteditable="plaintext-only"-->
                <div class="btn btn-say" id="btn-say">✓<div id="btn-say-arrow1"></div><div id="btn-say-arrow2"></div></div>
            </div>
        </div>
        <div id="LOADER"style="width:100%;height:100%;position:fixed;top:0px;left:0px;z-index:9999997;background:#FFF;"><div style="position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-112px;width:224px;height:150px;font-size:16px;text-align:center;color:#666666;"><img id="LOADERIMG"/><br><br><b><b id="loader"><div id="LOADERBAR" style="width:0px;height:28px;position:absolute;bottom:0px;left:0px;line-height:30px;background:#FFF;"></div></b></div></div>
        <script>
            var s={}
            ,   G={/*paperCanvas:'users'*/}
            ,   loader={
                    img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAABMCAYAAAB087t0AAAMzklEQVR4nO2dz4/bxhXHv49yAq0EdDc55JCkXQXI3domPYc99FQE3v4FXaNAcwm8KlCguXX9F0Q2fIiLoln/BZH/A/Yc2yv/AzFzM'
                       +'wwDVQ7Syrsrvh5ISiRFcoajGUpezQdYYCXOL5F8fPN+zBCwWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisViuA7TuAVg2F77X/jPAHYB8NMcD+gq/rHtM1w0rgJZCuN/mzFcegCH1xn9bw3CuJVYALbnwg+Y+rhp+7kFn5tKd'
                       +'6X8BgB9iF9OWCyKf7oyf1znG68CNdQ/AsqHM6LDgyCgWPgDAeasP0BEY4H7LB2gAZzZIlbEU4qx7AJYNhcktODJMf0wKKnUA9BA0PL63c2xiWNcNK4CWIjoF388FkO83vwCwl1/MGWkf0TXETkG3BH6IXZy3BwD7IAzKbLbQ/qN'
                       +'ubkMOThcFG53CDpvjwUoD3hKsAG4L0/YhABcggLFkswGN0Vwgi+0/pISW+bDAj+fZkIUcVgC3hVxhoQ5Cm60HJASSka/9wH6mvitXzlKEFcDtoSMuQh0AvZLj82llOKUtsP8Idvopiak44LcovZAAgC6AqnGjs6heESMA75WNpd'
                       +'Vq4YMPPkgVIKLuixcvnhfVKaAH4F7J8d1oPOtgAOBP8YfSmF51RgAPABoh/xyNqDfOXgM1Hv74LUCLPhoAmukizVev0bi8QsDcO//my8X1+O7HWyAy/yDgAO1fXkX/c3f8zZeV7mlTGtCVKKMStC0TPmDJRb5c5913380eH2WET'
                       +'6YfIMwKKUOmDVOkz8Os4Wpsew+gI+m+V8NNfcr67IMAjcur+JCXOkZOF8gm8ujHmV3N/68qfIC5MITo5vMU2rwpUUZFAPPquBJ9iU725gggYQjAq8c2404UntBAxhObuVudy7Kbn2s5/87sMuxN8cFjQgBlTr7KYGVOaLbdfWTi'
                       +'VDkC6GU+ywh6tk4eGyOAdGf8nHrj31Nv8gkcdEF8ArBOTZXsrYOg4XG/dcb3WreUm/nXs+X7KHO3Nt5chP9wzvUodCTpZa4BeXMEUMf0bRfh/CH5dyrRbvYkLI1lOp1WriPRTx7rFEAf6XM3z0qhO+PndDy5S73JgTkhBADqgmn'
                       +'A/dYLvt+WeailCYLl8zdLf3QuL6OuMtfj4ZNdkIzTaXUWGlDtXJoQQFeijGiwqjev0JZ7/fo1Li4u5p8dx/EU+s7WyWOdApjFy/2WqG++a+ogwJD77W+rVcu5jy6QEsJYAzKTl67r1HbuG5EGZKexMQIo+vEjAD+v2EYeQvsv5u'
                       +'XLl7EQ+j/99FM2YKxDA1Z/4pulwF4NCtLIltDhze1xv/UDP8SuVOmiKeQUwAygqxmIQydLcCNzPfK0pwFi7QcA0+CdjRDAfYjjTaamb9ICGAQBXr16hdls5uUcdgX9+DDzADGFV3iES72ZSYbUGxOID1ezH+kwTIcT8O9n+6VTy'
                       +'DdJ7Qd/+vc/Zq9HrfYfM3x88welzB/dccBbgDAIewLgbuKzSrwsL96ng5sQPyBSMbaakYlPZukDyF1Am7PgNh8KenR8nop58oPmPmbOEZh6KEzILh7TWhf1PnwivOcal1M0xyMAPBr/40sT9xoA/RrQlSiTvcFl6oja0IUrUcYz'
                       +'1LcMrkIdL+/LSo4RWrKTQV9Pfw6dOeP3AD6tOKYjftDcr1hHH8yuqEjjKtKwhq+3bgFUcWC4Cv2YEkBdHlAT7ELf1BwIcCRXnYUr3ak3uQ2SbQ8AsFeW8G0cCSfNIsDuGL3edWtAH1jKkhfVyWOdAriuld6uQh0fxfaqpDCTL1X'
                       +'qePwoTFGThJ2OdFndVNCAAWU8rJrRmYomM6XpoHp+kIrNJWNX5rWrkupmClHeax5V8mvl2qZAXqicoI+gIavZ8vuvwz6j8t+uw7spi04N6GpsK0ldWTMyGTxe9aEoozLdlBK+KENFznHSqKDVdCChnRbZJ1T93vju2U0IfruzsP'
                       +'+Gqt5NWXQKoCnXb10CuEn2n0ocscrYpK8VfT0VhVwWlK2QXy7s53cofpDPNVQ2A0YGEscIV00vq4LVgNXqeNWHooQ+Z0se0nmSFbUf84l0WYJfcMQVVU2sQKh+b7C4/dj+IzJ/vbXYgPzZZ7uQWvCphL9B7arUqYshPX0qLBQup'
                       +'JX1QJLL/db3IAzoePK4vM3WabSgV5Yl4eG/YhdPf1f6cAgYeMm/CssHs+HHFToEAH76ebcs+r1q+1XR44QJgi4cu8HaWgkCOW0Q7g0jy1605+cR99vxdx4AgNiLNGkX59Sp0CYA9nMFmlEqHADwJrplmTH6+D8KGwELHDCXaMz/'
                       +'V2q/InoE0Kkv+dVSgCMbr+LOiglQbthM4b6hYoiLksCF99EFhwJCYK9qt/wVbop88AkBrMXe16O2uJ7Fj5YCmH16+lTOW8dYXwA8xMumtSUQ3kexBiQoxOckbN9LjkSCTS7VWqBFA9KzZ6YEsEpcK0aUL5mXR2pqDxuV3E0ZVMY'
                       +'S239rfFjyKXYmxefj2WcC+49xHq2AuAF4Yai0Ak9+2wWVa//zIMAlAGIe1qEEdQXiTV1UlTm4KzguvWoiwcjQWFRRs03eNNclfCNQcFKi+WJKx3eR+P/jszMF+088bY5D8A3DGTAxOqagmvb/WEL18SO6ybyc71xBHVNjUUH9sc'
                       +'yy2o/9MLeTB1g99DICcV8kfHxwILyP5nsZcHX7L6L09095YSAqCbgCOjTgJgXgVfaj0bUHTJZNezBVWP9HgzC3E4+A+BVk7cMwS0V6DWHMHphOuN92sTM+LNwxW8KRdxEJCCmcAxkBn2tYdQGvjA4NKCOAXYSut/ivyAuW5Ajpf'
                       +'U1+0DSWujJgZNrtIX1eZBwkR0ifl//JD0lSAxKncjHpK/xCx+NH1Jvcxo1ZB8SHCjusueGrzAqQcOQlpqDVr4dhAVelLgFU2Xczi8xJcQXHR1heHWAqA0Y0FkDtYZDFkylUbf1f8Ya20TrAx9iZRLurVYGOwtde5/YpdMDE28E0'
                       +'SCEHVOJ6xAJONeb81iGAnkKdPGROuspqBlEdH8tLqGSQ+Y3ZpU3GBFDn+j8g1oqTu3DQRZUdDbhw9mPWASOhYWMHzA01AVdiVQFUsbmW9uqURHRSZPaj8XK+cxXqiFDdG8ecAGpe/zcvfWf8HBScVKiyl90v1LQDhg8O9kHUKW0'
                       +'/dsAw+x+encknoK/IqgKoMn37GWm7R1YYfaRtn+yUSsWWk5mWHWX6zftTGYuX890nSJ8bmSfxMDmW37yPfxaUk7T/Kqz/i6scn9+rZBNyRhubts9M25crsKoX1JUoI/pBql7U7DTElajjKdSRQWUsOqbUSzz+S/Ok+1HjBOABiA'
                       +'agmR8tkpV70Cmv/yMf0gn5lB2LK6oRa0Al+8xxxO0vBLx6+yuwqgDKBLDXugdoAh/LtpyOEIrqVFIkgEp7i3Y/inMZ6RCMQ3CjtHyWSuv/dMFcmqFyxTxP4VSyzwQOHmChAZ0a7T9gNQGUWYJk5Clf0K6rUMeUALoS9bS/3OWLT'
                       +'1e1KNS0H99vfoGgymxiEeaQWcqWiM+NPhwOVR4QbtnBpIf112dnte75s8oV0+W+v43qsTAVW64uAdQV2H+Eiuel+9HKTu2R9M7VSQKnWr5rciW7xC7Wq9hnfHAgvB4JAa9V+wGraUBXooypAHa2XVeijpf5rCtTRWUsRs6L+2m1'
                       +'6eYydITz9lG4WChhQwKgO9OUZuD77ZtgdKOwQjWvdiM4XXQpzs9cyT6Tsf/ioaxhz9dVBNBUALuubBZdKXQq7XoK/Qjb1aABE6RtyMSC3JBAueFRys6sYJ8pe0AFKyAuFjmgtWtAk1NQH2YC2Hntugp1dAigylgAAxpwr4VR5/2'
                       +'3YFeC7GJcQYhgZQdMhQyYd2paAZHE1DviLWtgnjQN7oQLb9e59q+AnfFeYUL2FmIF8BrDD5r7CNAJ44B8WHHTJP3kvORl27ECuEVwv/W9wnIiXb0Pw7fyWpK8BUaDRR9F2xHyUGF5UQV4iJ2Ja679txcrgFtCFN/LDxcQTqg3+S'
                       +'Ra2eBp7vkUOxPX2n35WAHcFor3Ax3Fe3RGy5A0ueL5FA661JvctsJXjM63I1k2GebDApM/I3AF5YhP6HhyF4hSz4Boj5l5YvUQFIzgwF9LPulbihXArWFpBULMXAD5fvsmgqK8zMU6wURWzLrelXhtsFPQLSCy/9zcg5RY4MrcK'
                       +'WykOVZcpmQpwwrgNlDyPojUOxqKd832rB1nBiuAWwGPkOvdzIYeCsMUfv73llWxNuAWEGm5x+lUNXJBdJopWhSmsNNPQ9hMGAuAuQMmPwRh8zeNYaegFgBRDNBBN9x0F/3FtJMHVvgsFovFYrFYLBaLxWKxWCwWi8Wixv8BKUyc'
                       +'+6ZA4RwAAAAASUVORK5CYII='
                ,   bar:{
                        background:'#FF8B09'
                    ,   color:'#FFFFFF'
                    ,   max:224
                        }}
            ,   env='main';
            $.getScript('c.REWIRE2.js',function(){connect('137.74.145.40',[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],[8006,8007,8008,8009,8010,8011,8012,8013,8014,8015,8016,8017,8018,8019,8020,8021],s,G,loader,'C.kb.js',env);});
        </script>
    </body>
</html>
