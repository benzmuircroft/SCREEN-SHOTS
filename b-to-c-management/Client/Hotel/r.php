<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="https://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />




<title>QR - Location</title>
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
<script type="text/javascript" src="_S/Object.observe.poly.js"></script>
<!--script src="http://jsconsole.com/remote.js?211553A5-46C9-4AD5-BBDD-EC6B22AF3848"></script-->


<script src="_S/iphone/megapix-image.js"></script>


<!--script type="text/javascript" src="S/kinetic.js"></script-->
<script type="text/javascript" src="_S/delivery.js"></script>


<script type="text/javascript" src="_S/png.js"></script>
<script type="text/javascript" src="_S/zlib.js"></script>




<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">



<style id="sheet">
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

.def{pointer-events:auto;background:#272723;color:#FFFFFF;}
.sel{pointer-events:auto;background:#E75C00;color:#FFFFFF;}
.red{pointer-events:none;background:#DD0B2D;color:#FFFFFF;}

*{-webkit-touch-callout:none;-webkit-user-select: none;/*prevent save image as menu*/}
#feedback,#pass,#email{-webkit-touch-callout:auto;-webkit-user-select:auto;/*overide*/}

/*lang*/
.lang_w_x{top:14px!important;font-size:10px!important;}
.lang_w_s{top:17px!important;font-size:10px!important;}
.lang_w_m{top:17px!important;font-size:12px!important;}
.lang_w_b{top:15px!important;font-size:14px!important;}

.lang_m_x{top:31px!important;font-size:13px!important;}
.lang_m_s{top:28px!important;font-size:15px!important;}
.lang_m_m{top:26px!important;font-size:17px!important;}
.lang_m_b{top:22px!important;font-size:20px!important;}

.lang_c_x{top:13px!important;font-size:10px!important;}
.lang_c_s{top:17px!important;font-size:10px!important;}
.lang_c_m{top:15px!important;font-size:13px!important;}
.lang_c_b{top:15px!important;font-size:15px!important;}

.lang_l_x{top:12px!important;font-size:10px!important;}
.lang_l_s{top:17px!important;font-size:10px!important;}
.lang_l_m{top:15px!important;font-size:13px!important;}
.lang_l_b{top:15px!important;font-size:15px!important;}

.trans,.notrans{cursor:pointer;}

/*
.lock{background:#FFFFFF!important;}
#title{color:#67113C!important;}
#water,#water2{background:#9C3B70!important;}
#pass,#email,#water,#water2{color:#FFFFFF!important;}

.main,.lang{background:url('/R/phuket/css.testcss/bg.png')!important;}
#ads{background:#FFFFFF!important;color:#9C3B70!important;}

.msg_minibar,.msg_clean,.msg_laundry{background:#67113C!important;color:#FFFFFF!important;}
.msgA{background:#67113C!important;}
#thankyou{background:#FFFFFF!important;}
#requestreceived{background:#C29AAE!important;}


.def{pointer-events:auto;background:rgba(0,0,0,0.5)!important;color:#FFFFFF!important;}
.sel{pointer-events:auto;background:#9C3B70!important;color:#FFFFFF!important;}
.red{pointer-events:none;background:#DD0B2D!important;color:#FFFFFF!important;}

#feedback{background:rgba(0,0,0,0.5)!important;}
#img0{background:url('R/phuket/camera.png'),rgba(0,0,0,0.5)!important;}
*/
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






<div class="splash"style="z-index:9;position:relative;height:480px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:#000;color:#FFF;font-family:'gisha';">

		<div id="splashlogo"style="background:url('/R/phuket/loading.png');position:relative;margin-left:auto;margin-right:auto;top:143px;width:148px;height:153px;"></div>

</div>



<div class="lock"style="z-index:9;position:relative;height:480px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:#000;color:#FFF;font-family:'gisha';display:none;">
	<div id="title"style="position:relative;top:70px;left:035px;width:250px;height:28px;text-direction:left;line-height:28px;">
		<div style="position:relative;top:28px;">
			<div id="water"style="position:absolute;top:0px;width:250px;height:28px;background:#FFFC00;color:#000;text-direction:center;line-height:28px;pointer-events:none;">enter password</div>
			<div id="pass"style="position:absolute;top:0px;width:250px;height:28px;color:#000;text-direction:center;line-height:28px;text-transform:lowercase;"contenteditable="true">	</div>
		</div>
	</div>
</div>



<div class="lang"style="position:relative;height:480px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:url('R/phuket/phuket.png');color:#FFF;font-family:gisha;display:none;">
<div class="lang2"style="z-index: 9;position:relative;height:281px; width:249px;padding-top:4px;margin-left:auto;margin-right:auto; text-align:center;top:100px;background:#000;font-family:gisha;">
	<img class="notrans"src="R/phuket/flags/notrans.png">
	<img class="trans _2"src="R/phuket/flags/uk.png"					w="Wake Up Call~m"								m="Mini Bar<br>Low / Empty~m"				c="Make Up Room~m"							l="Laundry~m"							t="Taxi"						f="Comments"					s="Send"				d="Things To Do"								ty="Thank You! "					rr="- Your request has been received"		a="@gmail alert?"													gm="Good news, your minibar has been refilled!"	gc="Good news, your room has been cleaned!"	gl="Good news, your laundry is done!">
	<img class="trans _1"src="R/phuket/flags/china.png"				w="叫醒服务~b"										m="迷你酒吧<br>低 / 空~b"								c="打扫我的房间~b"									l="收集洗衣~m"							t="出租车"					f="评语"								s="发送"					d="事情要做"											ty="谢谢! "								rr="- 请求 接获"												a="@gmail 警报?"													gm="迷你吧台重新灌装"													gc=" 房间已清洁"														gl="洗衣完成">
	<img class="trans _1"src="R/phuket/flags/netherlands.png"	w="Wakker Worden~m"							m="Klein Bar<br>Lag / Leeg~m"					c="Schoonmaken Kamer~s"					l="Wasserij~m"							t="Taxi"						f="Aanmerking"					s="Sturen"				d="Dingen Te doen"							ty="Dank u! "							rr="- Verzoek Ontvangen"						a="@gmail Waakzaam?"										gm="Koelkast Bijgevuld"											gc="Kamer Schoongemaakt"								gl="Wasserij Wordt Afgewerkt">
	<img class="trans _1"src="R/phuket/flags/denmark.png"		w="Vågne Op Ringe~m"						m="Minibar<br>Lav / Tom~m"						c="Fyldes Op Værelse~s"					l="Vaskeri~m"							t="Taxi"						f="Kommentarer"				s="Sender"				d="Ting At Gøre"								ty="Takke Dem! "					rr="- Anmodning modtaget"						a="@gmail Underretning?"									gm="Minibar  Genopfyldt"											gc="Værelse Rengøres"										gl="Bin Vaskeri Er Fuldføre">
	<img class="trans _2"src="R/phuket/flags/estonian.png"    	w="äratus~b"        									m="mini baar<br>on tühi~m"    					c="koristage tuba~m"       					l="pesu pesemiseks~x"       		t="takso"   					f="kommentaarid"  			s="saadetud"    		d="asju teha"        								ty="täname!"     					rr="- Päring on vastu"  								a="@gmail alarm?"             									gm="mini täidetud" 													gc="tuba koristatud!" 											gl="pesu on pestud!">
	<img class="trans _2"src="R/phuket/flags/finland.png"			w="herätyspalvelu~m"							m="Minibaari<br>matala / Tyhjä~s"			c="siistiä huone~m"								l="kerätä pesula~m"					t="taksi"						f="kommenttia"					s="lähettää"			d="Tekemistä"									ty="kiitos! "							rr="- pyyntö vastaanotettu"						a="@gmail Ilmoitus?"											gm="Minibaari täytetty"											gc="Huone siivottu"												gl="Pyykki on valmis">
	<img class="trans _1"src="R/phuket/flags/french.png"			w="Réveiller Appel~m"							m="Minibar<br>Basse / Vide~m"					c="Maquillage Chambre~s"					l="Blanchisserie~m"					t="Taxis"					f="Commentaires"				s="Envoyer"			d="Choses à Faire"							ty=" Merci! "							rr="- demand reçue"									a="@gmail notification?"										gm=minibar réapprovisionné""									gc="La chambre a été nettoyée"							gl="Lavement terminé">
	<img class="trans _2"src="R/phuket/flags/germany.png"		w="Weckdienst~m"								m="Mini Kneipe<br>Gering /Leer ~s"			c="Zimmereinigen~m"							l="Wäschedienst~m"					t="Taxi"						f="Kommentare"					s="Senden"			d="Dinge Zu Tun"								ty=" Vielen Dank! "				rr="- Auftrag empfangen"							a="@gmail Mitteilung?"											gm="Minibar nachgefüllt"											gc="Zimmer sauber"												gl="Wäsche ist fertig">
	<img class="trans _0"src="R/phuket/flags/greek.png"				w="Ξυπνήστε με κλήση~s"						m="Μίνι<br>μπαρ / ξαναγέμισμα~x"				c="Aνανεώσετε δωμάτιο~s"					l="πλυντήριο~b"							t="ταξί"						f="σχόλια"							s="στέλλω"				d="δραστηριότητες"							ty="Σας ευχαριστώ! "				rr="- αίτηση  δέχομαι"								a="@gmail ανακοίνωση?"										gm="Μίνι ξαναγεμίζε"												gc="δωμάτιο καθαρίζεται"										gl="Πλυντήριο έχει ολοκληρωθεί">
	<img class="trans _0"src="R/phuket/flags/hindi.png"				w="कॉल जाग~b"											m="मिनी बार<br>कम / खाली~m"							c="कमरे ऊपर बना~b"									l="लॉन्ड्री~b"									t="टैक्सी"						f="टिप्पणी"								s="भेजें"					d="बातें करते हैं"										ty="आप का "								rr="शुक्र है"														a="@gmail अधिसूचना?"												gm="मिनी बार पूर्ण"															gc="आपके कमरे में साफ किया गया है"									gl="लॉन्ड्री पूर्ण">
	<img class="trans _0"src="R/phuket/flags/hungarian.png"		w="Felébred Szolgáltatás~s"				m="Minibár<br>Utántöltés / Üres~x"			c="Tiszta Szoba~b"								l="Mosoda~b"							t="Taxi"						f="Megjegyzések"				s="Küld"					d="dolgom"											ty=" Köszönöm! "					rr="- Kérés érkezett"									a="@gmail bejelentés?"										gm="minibár újratöltött"											gc="Szoba tisztítani"												gl="Mosoda befejeződött">
	<img class="trans _0"src="R/phuket/flags/indonesia.png"		w="Bangun Layanan~s"							m="Kecil Kulkas<br>Rendah / Kosong~x"	c="Rapikan Kamar~m"							l="Cucian~b"								t="Taksi"					f="Komentar"						s="Mengirim"			d="Hal Yang Harus Dilakukan"			ty="Terima Kasih! "				rr="- Pesan yg diakui"								a="@gmail Pemberitahuan?"								gm="Kulkas diisi kembali"										gc="kamar dibersihkan"										gl="Cucian telah selesai">
	<img class="trans _0"src="R/phuket/flags/irland.png"				w="Múscail Glaoch~s"							m="Mini Barra<br>Íseal / Folamh~s"			c="Glan Seomra~b"								l="Neachtlann~b"						t="Tacsaí"					f="Tráchtanna"					s="Sheoladh"			d="Rudaí Le Déanamh"						ty="Go raibh maith agate! "	rr="- Larraidh faighte"								a="@gmail Teachtaireacht?"								gm="Mini Barra stocáilte"											gc="Seomra glanadh go"										gl="Neachtlann chríochnaigh">
	<img class="trans _2"src="R/phuket/flags/italian.png"			w="Servizio Di Sveglia Telefonica~x"	m="Frigo-Bar<br>Basso / Vuoto~s"			c="Rassetare la stanza~s"					l="Bucato~b"								t="Taxi"						f="Commenti"						s="Inviare"				d="Cose da fare"								ty="Ringraziarti! "					rr="- richiesta ricevuta"							a="@gmail Avviso?"												gm="Mini Bar riempito"												gc="Stanza pulita"													gl="lavanderia è pronta">
	<img class="trans _0"src="R/phuket/flags/japan.png"				w="モーニングコール~m"									m="ミニバー<br>低/空の~b"									c="クリーンルーム~b"										l="ランドリー~b"								t="タクシー"						f="注釈"								s="よこす"					d="やること"											ty="お疲れ様 "							rr="-  申請 受け"											a="@gmail 届出?"													gm="完全なミニバー"														gc=" ハウスキーピングは完了です"										gl="ランドリーは、準備ができてい">
	<img class="trans _0"src="R/phuket/flags/korean.png"			w="모닝 콜~b"											m="미니 바<br>로우 / 빈~b"								c="클린 룸~b"											l="세탁 수집~b"							t="택시"						f="댓글"								s="보내"					d="관광 정보"										ty="감사합니다 "						rr="- 소원 받은"											a="@gmail 공고?"													gm="미니 바 다시 채워"													gc="주택의 지키는이 완료됩니다"									gl="되는 세탁물은 준비가">
	<img class="trans _0"src="R/phuket/flags/latvian.png"			w="Mosties Zvanu~m"							m="Mini Bārs<br>Zems / Tukša~m"			c="Tīras Telpas~b"								l="Veļas<br>Mazgātava~x"		t="Taksi"					f="Komentāri"						s="Nosūtīt"			d="Lietas, Kas Darīt"							ty="Pateicos! "						rr="- pieprasījums saņemts"						a="@gmail paziņojums?"										gm="minibārs atkārtoti uzpildīt"								gc="istabu jātīra"													gl="Veļas mazgātava ir gatavs">
	<img class="trans _0"src="R/phuket/flags/lithuanian.png"		w="Pabusti Skambutį~s"						m="Mini Baras<br>Žema / Tuščias~x"		c="Praskiedžiama Iki Kambarys~x"		l="Skalbykla~b"							t="Taksi"					f="Komentarai"					s="Siųsti"				d="Dalykų Daryti"								ty="Dėkoju! "							rr="- prašymas gavo"								a="@gmail pranešimas?"										gm="Mini baras užpildomas"										gc="kambarys išvalyti"											gl="skalbykla yra pasirengusi">
	<img class="trans _0"src="R/phuket/flags/macedonian.png"	w="се разбудам на услуги~s"				m="Мини бар<br>ниско / Празен~s"			c="го сочинуваат соба~s"					l="перална~b"							t="таксито"				f="коментарите"				s="испрати"			d="нешта да се направи"					ty="ви "									rr="благодариме"										a="@gmail нотификација?"									gm="минибар полнат"												gc="соба исчистени"											gl="перална е подготвена">
	<img class="trans _0"src="R/phuket/flags/malay.png"				w="Bangun Tidur Panggilan~s"				m="Bar Mini<br>Rendah / Kosong~x"			c="Bilik Bersih~b"									l="Mengumpulkan<br>Dobi~x"t="Teksi"						f="Komen"							s="Maklum Balas"	d="Perkara Yang Perlu Dilakukan"	ty="Terima Kasih! "				rr="- permintaan diterima"						a="@gmail pemberitahuan?"									gm="Bar mini diisi ulang"											gc="bilik dibersihkan"											gl="dobi sedia">
	<img class="trans _2"src="R/phuket/flags/norwegian.png"		w="Telefonvekking~m"							m="Minibar<br>Trenger / Påfyll~x"				c="Vennligst rengjør<br>rommet~x"	l="vaskeritjenester~s"				t="drosje"					f="kommentarer"				s="send"					d="ting å gjøre"									ty="Takk! "								rr="- forespørsel mottatt"							a="@gmail underretning?"									gm="Minibar etterfylt"												gc="Rommet er rengjort"										gl="klesvask klar">
	<img class="trans _0"src="R/phuket/flags/poland.png"			w="Obudzić Się Cal~m"						m="MiniBar<br>Podle / Pusty~m"				c="Tworzą Pokój~m"								l="Pranie~b"								t="Taksówka"				f="Komentarze"					s="Posłać"				d="Atrakcje"										ty="Dziękuję! "						rr="- prośba ogólnie przyjęty"					a="@gmail zawiadomienie?"									gm="minibar uzupełniany"											gc="pokój sprzątano"											gl="pranie jest gotowy">
	<img class="trans _0"src="R/phuket/flags/portuguese.png"	w="Acordar  Serviço~m"						m="De Mini Barra<br>Baixo / Vazio~s"		c="Compo Quarto~m"							l="Lavanderia~m"						t="Táxi"						f="Comentários"				s="Enviar"				d="Coisas Para Fazer"						ty="Obrigado! "						rr="- pedido recebido"								a="@gmail notificação?"										gm="frigobar recarregados"										gc="quarto limpos"												gl="lavanderia está pronto">
	<img class="trans _2"src="R/phuket/flags/russia.png"    		w="разбудить звонком~m"        			m="наполнить бар~m"									c="убрать номер~m"							l="стирка"									t="вызвать такси"		f="комментарии/другое"	s="отправить"		d="реклама"										ty="спасибо, запрос получен"	rr=""														a="@gmail получить уведомление на почту"     gm="бар наполнен"													gc="номер убран"													gl="стирка закончена">
	<img class="trans _0"src="R/phuket/flags/serbian.png"			w="Ваке Уп Цалл~m"							m="Ваке<br>Уп / Цалл~b"							c="цлеан роом~b"									l="рубље~b"								t="такси"					f="Коментари"					s="послати"			d="ствари које треба урадити"		ty="Хвала!"							rr=""															a="@gmail обавештење?"									gm="Мини бар  напуњени"										gc="Соба очишћена"											gl="перионица је спреман">
	<img class="trans _0"src="R/phuket/flags/slovak.png"			w="Zobúdzať Sa Služby~s"					m="Minibarom<br>Nízky  / Prázdny~x "		c="čistiť  izba~b"									l="Práčovňa<br>Prádla~x"		t="Taxík"					f="Komentáre"					s="Odoslať"			d="Veci Na Robiť"								ty="Ďakujem vám!"				rr=""															a="@gmail Uradno obvestilo?"								gm="Znovu naplniť"													gc="Izba upratať"													gl="Bielizeň je pripravený">
	<img class="trans _0"src="R/phuket/flags/slovenian.png"		w="zbudi se klic~~m"							m="Minibarom<br>Nizka / Prazna~s"			c="čisto sobo~b"									l="pralnica~b"							t="Taksi"					f="komentarji"					s="poslati"				d="stvari za početi"							ty="Zahvaljujemo se vam"	rr=""															a="@gmail meddelande?"										gm="minibarom napolni"											gc="soba očiščena"												gl="pralnica je pripravljena">
	<img class="trans _1"src="R/phuket/flags/spanish.png"    		w="Llamada para despertar~s"        		m="Mini bar<br>bajo/vacio~m"    				c="Hacer habitación~m"       				l="Lavandería~m"       				t="Taxi"   					f="Comentarios"  				s="Enviar"    			d="Cosas que hacer"        					ty="Gracias!! "     					rr="- Petición recibida"  							a="@gmail alert?"             										gm="Minibar recargado!" 											gc="Habitación limpia!" 										gl="Lavandería completo">
	<img class="trans _0"src="R/phuket/flags/swahilli.png"			w="Huamka Wito~m"								m="Minibar  Cha<br>Chini / Tupu~m"			c="Safi Chumba~m"								l="Kufulia~b"								t="Teksi"					f="Maoni"							s="Kutuma"			d="Mambo Ya Kufanya"						ty="Asante! "							rr="- Ombi kupokea"									a="@gmail notisi?"												gm="Kamili wa"															gc="Chumba kusafishwa"										gl="Kufulia ni tayari">
	<img class="trans _1"src="R/phuket/flags/swedish.png"			w="Väckningstjänst~s"							m="MiniBar<br>knapp / Tom~b"					c="Rumsstädning~m"							l="Tvättservice~s"					t="Taxi"						f="Anmärkningar"				s="Skicka"				d="Saker Att Göra"							ty="Tack! "								rr="- begärans mottagen"							a="@gmail  meddelande?"									gm="minibaren återflld"												gc="rumsstadning färdig"										gl="tvätten är färdig">
	<img class="trans _2"src="R/phuket/flags/thailand.png"			w="โทรปลุกลูกค้า~m"									m="ตรวจเช็คมินิบาร์~b"											c="ทำตวามสะอาดห้อง~m"								l="ซักรีด~b"									t="แทกซี่"						f="แสดงความคิดเห็น"					s="จัดส่ง"					d="สิ่งที่คุณอยากทำ"									ty="ขอบคุณที่ส่งคำร้อง"					rr=''																a="@gmail กระตือรือร้น"												gm="เติมมินิบาร์แล้ว"															gc="ทำความสะอาดห้องแล้ว"												gl="ผ้าทีส่งเรียบร้อยแล้ว">
	<img class="trans _0"src="R/phuket/flags/turkey.png"			w="çağrı uyanmak~m"							m="minivan bar<br>alçak / boş~m"				c="odama kadar yapmak~s"					l="çamaşırhane~m"					t="Taksi"					f="geri besleme"				s="göndermek"		d="Yapılacak şeyler"							ty="Teşekkür ederim! "			rr="- istek alındığında"								a="@gmail bildiri?"												gm="Minibar yeniden doldurulmuş"							gc="Oda temizlenir"												gl="çamaşırhane hazır olduğunda">
	<img class="trans _0"src="R/phuket/flags/ukrainian.png"		w="прокидатися послуга~s"				m="Міні-бар<br>Низька / Порожній~x"		c="прибирають кімнату~s"					l="Пральня~b"							t="таксі"						f="зауваження"					s="прислати"			d="розваг"											ty="Спасибі "							rr="- запит одержаний"								a="@gmail повідомлення?"									gm="міні-бар поповнюється"									gc="номер прибирав"											gl="Пральня готовий">
	<img class="trans _0"src="R/phuket/flags/vietnamese.png"	w="Thức Dậy Gọi~m "							m="Quán bar<br>nhỏ thấp / rỗng~x"			c="làm Cho lập Phòng~s"						l="Giặt ủi~b"								t="Taxi"						f="ý kiến"							s="Gửi tin"				d="điều cần làm"								ty="Cám ơn."							rr=" yêu cầu nhận được"							a="@gmail được thông báo?"								gm="Quán bar đổ đầy"												gc="phòng sạch"													gl="giặt ủi là sẵn sàng">
	<img class="trans _0"src="R/phuket/flags/welsh.png"				w="Deffro  Alw~m"									m="Minibar<br>Isel / Gwag~m"					c="Gwneud I Fyny Ystafell~s"				l="Golchi Dillad~m"					t="Tacsi"					f="Sylwadau"						s="Anfon"				d="Pethau i'w wneud"						ty="Diolch yn fawr!"				rr="- gysylltiad a ddaw"								a="@gmail hysbysu?"											gm="minibar ail-lenwi"												gc="ystafell eu glanhau"										gl="golchi dillad yn barod">
	<img class="trans _1"src="R/phuket/flags/icelandic.png"		w="Vekja Upp Hringja~s"						m="Míníbar<br>Lágt / Tómur~s"					c="Gera Upp  Herbergi~s"					l="þvottahús~b"							t="Leigubíl"				f="Athugasemdir"				s="Senda"				d="Atriði sem þarf að gera"				ty="Þakka þér "						rr="- beiðni barst"										a="@gmail tilkynning?"											gm="minibar fylla aftur"												gc="Þægindi þrifin"												gl="þvottahús er tilbúinn">
	<img class="trans _0"src="R/phuket/flags/persian.png"			w="از خواب بیدار تماس بگیرید~s"							m="مینی بار<br>کم / خالی~m"									c="تمیز کردن اتاق~b"										l="لباسشویی~b"								t="تاکسی"						f="ارسال نظر"							s="ارسال کنید"				d="همه چیز برای انجام"									ty="تشکر"									rr="- به درخواست دریافت کرده "								a="@gmail خبر?"														gm="پر مینی بار"																gc="اتاق تمیز شده"															gl="لباس های شسته شده آماده است">
	<img class="trans _0"src="R/phuket/flags/hebrew.png"			w="מתעורר השיחה~s"								m="מיני בר<br>נמוך / ריק~m"							c="לנקות את החדר~m"								l="כביסה~b"								t="מונית"						f="הערות"								s="לשלוח"				d="דברים לעשות"									ty="תוֹדָה! "								rr=" בקשה קבלנו"										a="@gmail הודעה?"												gm="מיני בר מילא"														gc="חדר ניקיתי"														gl="כביסה מוכנה">
	<img class="trans _0"src="R/phuket/flags/arabic.png"			w="أعقاب المكالمة~m"										m="منخفض / فارغ<br>بار صغير~s"							c="الماكياج غرفة~b"										l="مغسلة~b"									t="تاكسي"						f="تعليقات"								s="إرسال"					d="أشياء للقيام بها"										ty="شكرا لك."								rr=" طلب يرد"													a="@gmail إعلام?"													gm="إعادة ملء ميني بار"														gc="الغرفة تنظف"															gl="مغسلة مستعدة">
</div></div>




<div class="main"style="position:relative;height:480px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:0px;background:url('R/phuket/phuket.png');color:#FFF;font-family:'gisha';display:none;">
  
	<div id="translate"style="position:absolute;top:13px;left:252px;width:27px;border:2px solid #FFF;cursor:pointer;"><img id="flag"src="R/phuket/flags/uk.png"style="width:16px;float:left;"/><img src="R/phuket/drop.png"style="width:11px;float:left;"/></div>


	
	
	<div id="wakeclock"style="position:absolute;top:86px;left:035px;width:096px;height:47px;background:#000000;color:#BBB;cursor:pointer;">
		<div style="position:relative;top:16px;left:25px;">
		<div id="waketime"style="font-size:14px;float:left;">
			<div id="wakehour"style="float:left;">00</div>
			<div style="float:left;">:</div>
			<div id="wakemin"style="float:left;">00</div>
			</div>
			<div id="wakeampm"style="font-size:12px;float:left;margin:2px;">am</div>
		</div>
	</div>
	<div id="wakeshift"style="position:absolute;top:86px;left:131px;width:030px;height:47px;background:#1C1B19;cursor:pointer;"><img id="wakeup"src="R/phuket/up.png"/><img id="wakedown"src="R/phuket/down.png"/></div>
	<div id="wake"class="def"style="position:absolute;top:86px;left:161px;width:122px;height:47px;cursor:pointer;">
		<div id="w_"style="position:relative;top:17px;font-size:12px;">Wake Up Call</div>
		<!--img class="waketick"src="R/2.png" style="position:relative;top:4px;left:50px;width:13px;"-->
		</div>


    <div id="minibar"class="def"style="position:absolute;top:137px;left:035px;width:122px;height:94px;cursor:pointer;">
    	<!--div id="m"style="position:relative;top:26px;">
    		<div id="m_1"style="font-size:19px;">Mini Bar</div><div id="m_2">low/empty</div>
    	</div-->
    	<div id="m_"style="position:relative;top:26px;font-size:17px;">
    		Mini Bar<br>low/empty
    	</div>
    	<!--img class="minibartick"src="R/2.png" style="position:relative;top:31px;left:45px;width:19px;"-->
    </div>
    
    <div id="clean"class="def"style="position:absolute;top:137px;left:161px;width:122px;height:45px;cursor:pointer;">
    	<div id="c_"style="position:relative;top:15px;font-size:13px;">Make Up Room</div>
    	<!--img class="cleantick"src="R/2.png" style="position:relative;top:2px;left:49px;width:13px;"-->
    </div>
    
    <div id="laundry"class="def"style="position:absolute;top:186px;left:161px;width:122px;height:45px;cursor:pointer;">
    	<div id="l_"style="position:relative;top:13px;font-size:17px;">Laundry</div>
    	<!--img class="laundrytick"src="R/2.png" style="position:relative;top:-1px;left:49px;width:13px;"-->
    </div>
    
    
    
    
    
    
    
	
	
	<div id="taxiclock"style="position:absolute;top:235px;left:035px;width:096px;height:47px;background:#000000;color:#BBB;cursor:pointer;">
		<div style="position:relative;top:16px;left:25px;">
		<div id="taxitime"style="font-size:14px;float:left;">
			<div id="taxihour"style="float:left;">00</div>
			<div style="float:left;">:</div>
			<div id="taximin"style="float:left;">00</div>
			</div>
			<div id="taxiampm"style="font-size:12px;float:left;margin:2px;">am</div>
		</div>
	</div>
	<div id="taxishift"style="position:absolute;top:235px;left:131px;width:030px;height:47px;background:#1C1B19;cursor:pointer;"><img id="taxiup"src="R/phuket/up.png"/><img id="taxidown"src="R/phuket/down.png"/></div>
    <div id="taxi"class="def"style="position:absolute;top:235px;left:161px;width:122px;height:47px;cursor:pointer;">
    	<div id="t_"style="position:relative;top:13px;font-size:17px;">Taxi</div>
    	<!--img class="taxitick"src="R/2.png"style="position:relative;top:-2px;left:50px;width:13px;"-->
    </div>
	
	
	<div id="feedback"class="imp"style="position:absolute;top:286px;left:035px;width:240px;height:86px;background:#272723;color:#999;padding:4px;word-wrap:break-word;text-align:left;font-size:13px;overflow-y:auto;white-space:wrap;cursor:text;"contenteditable="true">Comment...</div>
	
	<div id="img0"style="position:absolute;top:380px;left:035px;width:040px;height:32px;background:url('R/phuket/camera.png'),#272723;text-direction:center;cursor:pointer;">
		<img id="spin0"class="spin"src="R/spinner.png"style="position:relative;left:0px;top:2px;height:27px;z-index:2;display:none;"/>
	</div>
	
	
	
	<div id="send"style="position:absolute;top:384px;left:079px;width:204px;height:28px;background:#00CC33;text-direction:center;line-height:28px;cursor:pointer;">Send</div>
	
	<div id="ads"style="position:absolute;top:416px;left:0px;width:320px;height:auto;background:#EFFF35;color:#AD8E00;padding-bottom:30px;">
		<div id="things" style="text-align:center;margin:10px;">Things To Do</div>
	</div>
  
</div>





<script>







var qr=document.location.href.split('?');
qr=qr[1].split('&');
var c=qr[1];
qr=qr[0];  
var nickname='nn'+qr+'_'+c;
	console.log('?');

var s={}, S={}, data={'nickname':nickname};$.getScript('c.REWIRE.js',function(){connect('serveraddress@8001',[1],[8007],data,'C.qrit_r_.js');});




</script>









</body></html>