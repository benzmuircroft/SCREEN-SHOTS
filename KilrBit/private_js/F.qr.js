var
	C=require('../node_modules/canvas')
,	fs=require('fs')
,	cache={}
,	wss=require('../node_modules/ws').Server
,	h=[]
,	Ɵ='Ɵ'
,	db={
		find:function(collection,obj,cb){
			require('../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(e,view){
				if(e){
					view.close();
					cb(null);
					}
				else{
					try{
						view.collection(collection).find(obj).toArray(function(e,result){
							view.close();
							cb(result);
							});
						}catch(e){
							console.log('caught: '+e);
							view.close();
							cb(null);
							}}});}};







function A(m,h){

	m.d=m.d.split('|'),m.d={b:m.d[0],q:m.d[1]};
	var n=(((Number(m.d.b))*100)+Number(m.d.q));
	if(isNaN(n)||1>n||n>1000000||n%1!==0){}else{
		//console.log(n);
		function onrow(lv2){
			var c=new C(164,164)
			,	ᐁ=c.getContext('2d')
			,	ꕤ=new C.Image
			,	ⴲ='../home/engine/public_html/img/scanpedia/million/'+(lv2.o==1?n:0)+'.png';
			lv2=lv2._id//qr million id
			+Ɵ+lv2.e//mobile end location
			+Ɵ+lv2.r//screen reaction
			+Ɵ+lv2.o//owner user id
			+Ɵ+lv2.dt//date transaction <when the user bought or ended
			+Ɵ+lv2.gw//give aways remaining
			+Ɵ+lv2.ge//give away mobile end location
			+Ɵ+lv2.gr//give away rule 1/100 #500
			+Ɵ+lv2.tp//tips btc amounts list since last update ??
			+Ɵ+lv2.rd//rent duration months
			+Ɵ+lv2.rp//rent price btc
			+Ɵ+lv2.rf//owner aditional release fee btc
			/*+Ɵ+lv2.lu*/;//TODO need to add owner last updated (not to add any new var to this it must be defined else each lv2 data will become -1)
			fs.stat(ⴲ,function(e){
				if(e==null){//no err so there is an image file!
					ꕤ.onload=function(){
						ᐁ.drawImage(ꕤ,0,0);
						if(h.readyState==1){h.send(JSON.stringify({f:'@',d:(m.d.b+'|'+m.d.q)+','+c.toDataURL().replace('data:image/png;base64,','')+','+lv2}));}else{console.log('closed');}
						};
					ꕤ.src=ⴲ;
					}
				else{
					if(h.readyState==1){h.send(JSON.stringify({f:'@',d:(m.d.b+'|'+m.d.q)+','+''+','+lv2}));}else{console.log('closed');}
					}});}
		if(!cache[n]){
			db.find('million',{_id:n},function(r){cache[n]=r[0];onrow(r[0]);});
			}
		else{onrow(cache[n]);}
		}}





function G(){//kill the cache on object recently updated

	}





h[02]=new wss({port:8022});h[02].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});//TODO this isnt secure
h[03]=new wss({port:8023});h[03].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[04]=new wss({port:8024});h[04].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[05]=new wss({port:8025});h[05].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[06]=new wss({port:8026});h[06].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[07]=new wss({port:8027});h[07].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[08]=new wss({port:8028});h[08].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[09]=new wss({port:8029});h[09].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[10]=new wss({port:8030});h[10].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[11]=new wss({port:8031});h[11].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[12]=new wss({port:8032});h[12].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[13]=new wss({port:8033});h[13].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[14]=new wss({port:8034});h[14].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[15]=new wss({port:8035});h[15].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});
h[16]=new wss({port:8036});h[16].on('connection',function(s){s.on('message',function(m){m=JSON.parse(m);A(m,s);});});


//TODO handle bad close



	