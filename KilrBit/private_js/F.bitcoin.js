var db={
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
							}}});}
	,	findAndModify:function(collection,a,b,c,cb){
			require('../node_modules/mongodb').MongoClient.connect('mongodb://localhost:27017/kb',function(e,view){
				if(e){
					view.close();
					cb(e,null);
					}
				else{
					try{
						view.collection(collection).findAndModify(a,b,c,{'new':true},function(e,result){
							view.close();
							cb(e,result);
							});
						}catch(e){
							console.log('caught: '+e);
							view.close();
							cb(e,null);
							}}});}};
	



//addr database _id=matches offline list,a=address,q=qrid million number,e=expected amount,d=data from pay qr appeared,t=txid list


var Ƀ={
	Bitcore:require('../node_modules/bitcore')//new version
,	depositAddress:undefined
,	settings:{
		network:'testnet'//'livenet'
		}
,	hasPaied:function(_id,addr,qrid,expected,d,txidList){//the client told me this was true
		}
,	bill:function(payToAddress,amount){
		console.log('Ƀ.settings.network is '+Ƀ.settings.network+' whereas this address is livenet...');
		return ('bitcoin:'+payToAddress+'?amount='+amount);
		}
,	listen:function(){
		s[1][NULL].WHEN['Ƀ']=function(_){//[U.pid,qmenu.i,ɣ.mode,ɣ.btc,ɣ.coin];
			Ƀ.cancel(function(){//TODO needs to be canceled
				db.find('million',{_id:Number(_[1])},function(e,row){
					p=row[0].rp.toFixed(8);
					Ƀ.findAddress(_[1],_[0],p,function(row){//Ƀ.addr.findAndModify({'q':{$eq:-1}},[['q',1]],{$set:{'q':_[1],'o':_[0],'e':p}},{'new':true},function(e,row){//TODO I would need to update the user in real time so when it comes to login I should store the uid session
						var addr=row.addr
						,	id=row.id;
						if(addr.indexOf('Error: ')!==-1){
							s[1][NULL].WIRE('Ƀ',addr);
							}
						else{
							Ƀ.depositAddress=addr;
							s[1][NULL].WIRE('Ƀ',Ƀ.bill(addr,p));
							}});});});};
			Ƀ.recoverDepositeAddress();
			return;}
,	recoverDepositeAddress:function(){
		db.find('addr',{'o':U.pid},function(row){Ƀ.depositAddress=row[0];return 'Recovered: '+Ƀ.depositAddress+' Ƀ.depositAddress.';});
		}
,	findAddress:function(qr,owner,expectedPrice,cb){
		db.findAndModify('addr',{'q':{$eq:-1}},[['q',1]],{$set:{'q':qr,'o':owner,'e':expectedPrice}},function(e,row){
			row=row.value||{a:'Error: KillrBit is busy right now',_id:-1};
			cb({'addr':row.a,'id':row._id});
			});}
,	cancel:function(cb){//TODO even on shapeshift the addr associated with the user is pending this must be canceled even when the user closes the browser
		if(Ƀ.depositAddress){
			console.log('Ƀ canceling...');
			db.findAndModify('addr',{'o':U.pid},[['q',1]],{$set:{q:-1,o:-1,e:-1}},function(e,row){
				console.dir(e||row.value||'Error: Ƀ.empty_cancel for owner ('+U.pid+')');
				cb();
				});}
		else{cb();}
		}
};'> listen on startup >';//Ƀ.listen();




//TODO cancel on shutdown / close