console.log('db');

var kb
,	uzr//collection
,	doc//document
,	ix=1//index
;







require('../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(err,KB){
    kb=KB;
    uzr=kb.collection('uzr');
    uzr.count(function(err,count){
    	ix=count;
    	console.log(ix,'docs');
    	if(ix==0){
            kb.createCollection("uzr",{autoIndexID:false},function(err,UZR){
                console.log(err||"=db.createCollection");
                uzr=UZR;
                console.log('done');
                });}
        else{console.log('done');}

    });});












