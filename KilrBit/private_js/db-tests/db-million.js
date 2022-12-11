console.log('db');

var kb
,	million//collection
,	doc//document
,	ix=1//index
;


var pause=0;



var durations=[1,1,1,2,3,4,6,12,2,3,4,6,12,2,3,4,6,12,2,3,4,6,12,24,24,36,0];





var prices=[
	0.0017,0.00171,0.00172,0.00173,0.00174,0.00175,0.00176,0.00177,0.00178,0.00179,0.0018,0.00181,0.00182,0.00183,0.00184,0.00185,0.00186,0.00187,0.00188,0.00189,0.0019,0.00191,0.00192,0.00193,0.00194,0.00195,0.00196,0.00197,0.00198,0.00199,0.0020,0.00201,0.00202,0.00203,0.00204,0.00205,0.00206,0.00207,0.00208,0.00209,0.0021,0.00211,0.00212,0.00213,0.00214,0.00215,0.00216,0.00217,0.00218,0.00219,0.0022,0.00221,0.00222,0.00223,0.00224,0.00225,0.00226,0.00227,0.00228,0.00229,0.0023,0.00231,0.00232,0.00233,0.00234,0.00235,0.00236,0.00237,0.00238,0.00239,0.0024,0.00241,0.00242,0.00243,0.00244,0.00245,0.00246,0.00247,0.00248,0.00249,0.0025,0.00251,0.00252,0.00253,0.00254,0.00255,0.00256,0.00257,0.00258,0.00259
	];

var pricecopy=[];

function after(){if((++ix)<=1000000){if(pause==100){setTimeout(function(){wait();},1);}else{wait();}}else{console.log('done');}}


function wait(){
	if((Math.floor(Math.random()*8)+1)==1){
		if(!pricecopy.length){pricecopy=JSON.parse(JSON.stringify(prices));console.log(pricecopy.length);}
		million.update(
				{_id:ix}
			,	{$set:{rp:pricecopy.pop()}}
			,	function(e,res){
					
					million.find({_id:ix}).toArray(function(e,r){
						console.log(1000000-ix,' = ',r[0]);
						pause=100;
						after();
						});
			});}
	else{after();}
	/*million.findAndModify({query:{_id:ix},update:{$rename:{u:'o'}}},function(err,res){
		if((++ix)<=1000000){
			if(pause==100){setTimeout(function(){console.log(1000000-ix);pause=0;wait();},1);}
			else{wait();}
			}
		else{console.log('done');}
		});*/
	/*doc={_id:ix,e:"",r:"",u:0,t:[],s:0};
	million.insert(doc,function(){
		console.dir(doc);
		if((++ix)<=1000000){wait();}
		});*/
	}




require('../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(err,KB){
    kb=KB;
    million=kb.collection('million');//table.find({'_id':{$lt:1428004670243}}).toArray(function(err,res){console.dir(err||res);});
    million.count(function(err,count){
    	//ix=count;
    	//console.log(ix,'docs');
    	/*
    	million.update({_id:400},{$set:{e:"https://soundcloud.com/pumkinbeats",r:"sc=pumkinbeats/nov-rock-2014",u:1}});
    	million.update({_id:499},{$set:{e:"http://www.amazon.co.uk/Mr-Bean-Whole-Complete-Collection/dp/B00F5UC6AC",r:"yt=dBocu1btClk",u:1}});
    	million.update({_id:480},{$set:{e:"http://angrybirds.com",r:"swf=http://bestangrybirdgames.com/abg/swf/angry-birds-flash.swf",u:1}});
		million.update({_id:485},{$set:{e:"http://goo.gl/zehbao",r:"yt=dBocu1btClk",u:1}});
		million.update({_id:487},{$set:{e:"http://www.coca-cola.co.uk",r:"yt=S2nBBMbjS8w",u:1}});
		million.update({_id:490},{$set:{e:"http://www.amazon.co.uk/Mattel-Games-X6913-Angry-Birds/dp/B007FRHZ4A",r:"yt=_wYyV6ADylE",u:1}});
		million.update({_id:498},{$set:{e:"http://www.lexus.co.uk",r:"kd=DGBA311UOUA5",u:1}});
		million.update({_id:489},{$set:{e:"http://giraffecenter.org/?page_id=2042",r:"yt=t6bUmpAHBEA",u:1}});
		million.update({_id:478},{$set:{e:"http://giraffecenter.org/?page_id=2042",r:"yt=OxTh7cXRPrI",u:1}});
		million.update({_id:479},{$set:{e:"http://giraffecenter.org/?page_id=2042",r:"yt=6ufOI6_g4ig",u:1}});
		million.update({_id:488},{$set:{e:"http://giraffecenter.org/?page_id=2042",r:"yt=r7j8u8X7Gcs",u:1}});
		million.update({_id:476},{$set:{e:"http://www.virginholidays.co.uk/destinations/caribbean/jamaica-holidays",r:"yt=p8LQ0lY-IGQ",u:1}});
		million.update({_id:486},{$set:{e:"http://www.virginholidays.co.uk/special-offers/disney",r:"yt=8GsV6Eso6AQ",u:1}});
		million.update({_id:496},{$set:{e:"http://www.virginholidays.co.uk/cruise",r:"yt=aA4kryEYWi4",u:1}});
		million.update({_id:581},{$set:{e:"https://play.google.com/store/apps/details?id=com.daqri.d4DAnatomy&hl=en_GB",r:"img=http://cdn2.hubspot.net/hub/298792/file-1460978310-jpg/anatomy4D-body.jpg?t=1421180522773",u:1}});
		million.update({_id:582},{$set:{e:"https://play.google.com/store/apps/details?id=com.layar&hl=en_GB",r:"img=https://static.layar.com/tile/toysrus-896a.png",u:1}});
		million.update({_id:583},{$set:{e:"https://play.google.com/store/apps/details?id=com.layar&hl=en_GB",r:"img=https://static.layar.com/tile/club-social-venezuela-08b8.png",u:1}});
		million.update({_id:562},{$set:{e:"http://debbies.bigcartel.com",r:"sc=teriootakuboss/lil-debbie-2-cups-feat",u:1}});
		million.update({_id:469},{$set:{e:"https://itunes.apple.com/us/album/weezer/id115255",r:"sc=producer-chris-shaw/weezer-hash-pipe",u:1}});
		million.update({_id:477},{$set:{e:"http://www.yosushi.com/restaurants",r:"vm=8169452",u:1}});
		*/

		


		/*
		million.find({_id:{$in:[400,499,480,485,487,490,498,489,478,479,488,476,486,496,581,582,583,562,469,477]}}).toArray(function(e,res){
			console.log(res);
			});*/
		

		

		


		

		/*
		million.update(
				{"u":{"$exists":true}}
			,	{"$rename":{"u":"o"}}
			,	{"multi":true}
			,	function(e,res){
			console.log(e||res);
			});*/




		wait();

        /*if(ix==0){
            kb.createCollection("million",{autoIndexID:false},function(err,MILLION){
                console.log(err||"=db.createCollection");
                million=MILLION;
                wait();
                });}
        else{wait();}*/

    });});












/*

[
	 {_id:1,n:400,e:"https://soundcloud.com/pumkinbeats",r:"sc=pumkinbeats/nov-rock-2014",u:13,t:"ben"}
	,{_id:2,n:499,e:"http://www.amazon.co.uk/Mr-Bean-Whole-Complete-Collection/dp/B00F5UC6AC",r:"yt=dBocu1btClk",u:13,t:"ben"}
	,{_id:3,n:480,e:"http://angrybirds.com",r:"swf=http://bestangrybirdgames.com/abg/swf/angry-birds-flash.swf",u:13,t:"ben"}
	,{_id:4,n:0,e:"",r:"",u:13,t:""}
	,{_id:5,n:485,e:"http://goo.gl/zehbao",r:"yt=dBocu1btClk",u:13,t:"ben"}
	,{_id:6,n:487,e:"http://www.coca-cola.co.uk",r:"yt=S2nBBMbjS8w",u:13,t:"ben"}
	,{_id:7,n:490,e:"http://www.amazon.co.uk/Mattel-Games-X6913-Angry-Birds/dp/B007FRHZ4A",r:"yt=_wYyV6ADylE",u:13,t:"ben"}
	,{_id:8,n:498,e:"http://www.lexus.co.uk/",r:"kd=DGBA311UOUA5",u:13,t:"ben"}
	,{_id:9,n:489,e:"http://giraffecenter.org/?page_id=2042",r:"yt=t6bUmpAHBEA",u:13,t:"ben"}
	,{_id:10,n:478,e:"http://giraffecenter.org/?page_id=2042",r:"yt=OxTh7cXRPrI",u:13,t:"ben"}
	,{_id:11,n:479,e:"http://giraffecenter.org/?page_id=2042",r:"yt=6ufOI6_g4ig",u:13,t:"ben"}
	,{_id:12,n:488,e:"http://giraffecenter.org/?page_id=2042",r:"yt=r7j8u8X7Gcs",u:13,t:"ben"}
	,{_id:13,n:476,e:"http://www.virginholidays.co.uk/destinations/caribbean/jamaica-holidays",r:"yt=p8LQ0lY-IGQ",u:13,t:"ben"}
	,{_id:14,n:486,e:"http://www.virginholidays.co.uk/special-offers/disney",r:"yt=8GsV6Eso6AQ",u:13,t:"ben"}
	,{_id:15,n:496,e:"http://www.virginholidays.co.uk/cruise",r:"yt=aA4kryEYWi4",u:13,t:"ben"}
	,{_id:16,n:581,e:"https://play.google.com/store/apps/details?id=com.daqri.d4DAnatomy&hl=en_GB",r:"img=http://cdn2.hubspot.net/hub/298792/file-1460978310-jpg/anatomy4D-body.jpg?t=1421180522773",u:13,t:"ben"}
	,{_id:17,n:582,e:"https://play.google.com/store/apps/details?id=com.layar&hl=en_GB",r:"img=https://static.layar.com/tile/toysrus-896a.png",u:13,t:"ben"}
	,{_id:18,n:583,e:"https://play.google.com/store/apps/details?id=com.layar&hl=en_GB",r:"img=https://static.layar.com/tile/club-social-venezuela-08b8.png",u:13,t:"ben"}
	,{_id:19,n:562,e:"http://debbies.bigcartel.com",r:"sc=teriootakuboss/lil-debbie-2-cups-feat",u:13,t:"ben"}
	,{_id:20,n:469,e:"https://itunes.apple.com/us/album/weezer/id115255",r:"sc=producer-chris-shaw/weezer-hash-pipe",u:13,t:"ben"}
	,{_id:21,n:477,e:"http://www.yosushi.com/restaurants",r:"vm=8169452",u:13,t:"ben"}
]

*/