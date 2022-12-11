console.log('db-addr');

var kb
,	addr//collection
,	doc//document
,	ix=1//index
;




require('../../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(err,KB){
    kb=KB;
	kb.collection('addr').find({a:'1FRLXkKpYLAUGAqUExYM2HkofWyNJ9nVpB'}).toArray(function(e,result){
		console.log(e);
		console.dir(result);
		});
	});




/*

var fs=require('fs');







var Ƀ={
	Bitcore:require('../node_modules/bitcore')
,	settings:{
		network:'livenet'
		}
,	privateKey:undefined
,	publicKey:undefined
,	address:undefined
,	make:function(callback){
		Ƀ.privateKey=new Ƀ.Bitcore.PrivateKey();
		Ƀ.publicKey=Ƀ.privateKey.toPublicKey();
		Ƀ.address=Ƀ.publicKey.toAddress(Ƀ.settings.network);
		fs.appendFile('/home/engine/private_js/k.txt',ix+'.)\t'+Ƀ.privateKey.toWIF()+'\n',function(err){callback(Ƀ.address.toString());});
		}
	}







function after(){if((++ix)<=1000){wait();}else{console.log('done');}}


function wait(){
	Ƀ.make(function(address){
		doc={_id:ix,a:address,q:0,e:0,t:[]};
		addr.insert(doc,function(){
			console.dir(doc);
			after();
			});});}






require('../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(err,KB){
    kb=KB;
    addr=kb.collection('addr');
    addr.remove({},function(err, removed){
	    addr.count(function(err,count){
			ix=count;
	        if(ix==0){
	            kb.createCollection("addr",{autoIndexID:false},function(err,ADDR){
	                console.log(err||"=db.createCollection");
	                addr=ADDR;
	                wait();
	                });}
	        else{wait();}
	    });});});*/
