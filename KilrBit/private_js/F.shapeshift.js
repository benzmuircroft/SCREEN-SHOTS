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
							}}});}};





var JSON=require('../node_modules/JSON');





var ϟ={
	key:'e778494d7d870fd40d01224d812c203e551e003c51a3e67f922ad9ba5190790d340cd777b895a03f7146e38e6449e89830f32af038155fe63650ef3f888f72dc'
,	io:require('../node_modules/shapeshift.io')
,	depositAddress:undefined
,	depositAmount:undefined
,	expiration:undefined
,	coin:undefined
,	symbol:undefined
,	listen:function(){
		s[1][NULL].WHEN['ϟ']=function(_){//[U.pid,qmenu.i,ɣ.mode,ɣ.btc,ɣ.coin];
			Ƀ.cancel(function(){//TODO needs to be canceled
				db.find('million',{_id:Number(_[1])},function(row){
					p=row[0].rp.toFixed(8);
					Ƀ.findAddress(_[1],_[0],p,function(row){//TODO I would need to update the user in real time so when it comes to login I should store the uid session
						var addr=row.addr
						,	id=row.id;
						if(addr.indexOf('Error: ')!==-1){
							s[1][NULL].WIRE('Ƀ',addr);
							}
						else{
							Ƀ.depositAddress=addr;
							ϟ.fixedshift(_[4],_[2],addr,Number(p),undefined,function(bill){
								s[1][NULL].WIRE('ϟ',bill);
								});}});});});};return;}
,	fixedshift:function(coin,symbol,withdrawal,amount,returnAddress,callback){
		ϟ.cancel(function(){
			ϟ.io.shift(
				withdrawal
			,	symbol+'_btc'
			,	{	apiKey:ϟ.key
				,	amount:amount
				,	returnAddress:returnAddress
				}
			,	function(e,r){
				if(e){callback(e.toString());}
				else{
					ϟ.coin=coin;
					ϟ.symbol=symbol;
					ϟ.depositAddress=r.deposit;
					ϟ.depositAmount=r.depositAmount;
		  			ϟ.expiration=r.expiration;
		  			console.log('Ƀ.settings.network is '+Ƀ.settings.network+' whereas this address is livenet...');
					callback(ϟ.coin+':'+ϟ.depositAddress+'?amount='+ϟ.depositAmount);
					}});});}
,	cancel:function(cb){
		if(ϟ.depositAddress){
			console.log('ϟ canceling...');
			JSON.post('shapeshift.io','/cancelpending',{address:ϟ.depositAddress},function(data,res,status){
				console.dir({data:data,res:res,status:status});
				cb();
				});}
			else{cb();}}
,	stat:function(failed,returnUpdate,complete){
		function stat(failed,returnUpdate,complete){
			ϟ.io.status(ϟ.depositAddress,function(e,s,d){//console.dir(e||s);
				console.dir(d);
				clearTimeout(ϟ.tick);
				if(s=="no_deposits"){
					if(ϟ.remaining()!="00:00"){
						ϟ.tick=setTimeout(function(){
							returnUpdate('pending');
							stat(failed,returnUpdate,complete);
							},10000);}
					else{failed('TIMED OUT');}
					}
				else if(s=="received"){
					ϟ.tick=setTimeout(function(){
						returnUpdate('received');
						stat(failed,returnUpdate,complete);
						},10000);}
				else if(s=="complete"){
					returnUpdate('complete');
					complete(d);
					}
				else if(s=="failed"){
					failed(e);
					}
				});}stat(failed,returnUpdate,complete);}
,	remaining:function(){
		var dif,min,sec,rem;
		dif=Math.floor((ϟ.expiration-(+new Date()))/1000);
		min="0"+Math.floor(dif/60);
		sec="0"+(dif-min*60);
		rem=(min.substr(-2)+":"+sec.substr(-2));
		return rem.indexOf('aN')!=-1?"00.00":rem;
		}
,	tick:undefined
};'> listen on startup >';//ϟ.listen();





//TODO cancel on shutdown / close