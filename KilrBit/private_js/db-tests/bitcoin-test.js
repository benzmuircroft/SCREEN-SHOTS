









//how does this work if the user logs off    ??????

/*

maybe i should have a main node wallet
that imports the keys of a trascation pending

this will use the address to check the blockchain
if success there is a balance
send the balance to main cold wallet

on the server instance:

1. create qr
2. save keys store the keys in mongodb
3. mark qr as unpaid waiting on address and which user to reward

node server:

1. pick next pending from list (over ten minutes)
2. import the keys
3. check the wallet (blockchain.info would only check the address whereas there is a function to get the entire balance)
4. send the balance to the cold wallet
5. send email
6. update clients in the app


If i make the wallet specific to the user session then there maybe more payments in there??? or i can move all the ammounts manually or later when they have lots of confirms


todo: test settings.storePath, test import wif??


can i send a socket further into the server after creation??? through the Global object?? and that way update all clients????????!!!!! only do outgoing alerts??


s[1].ALERT('paied','user|qr');


*/

//http://testnetwallet.com/

var Ƀ={
	settings:{
		network:'livenet'//'testnet'
	,	coldWallet:'1FRLXkKpYLAUGAqUExYM2HkofWyNJ9nVpB'//'1AHyBwJme28e9VPu9SxAKNfS4wMJCXvGfz'
	,	checkTransactionEvery:60000
	,	minimumConfirmations:1
		}
,	https:require('https')
,	JSON:{
		stringify:require('../../node_modules/JSON/node_modules/json-stringify-safe')
	,	parse:require('../../node_modules/JSON/node_modules/try-json-parse')
	,	get:function(url,callback){var req=Ƀ.https.request(url,function(res){var buffer='';res.setEncoding('utf8');res.on('data',function(chunk){buffer+=chunk;});res.on('end',function(){try{var data=Ƀ.JSON.parse(buffer);callback(data,res.statusCode);}catch(e){console.log(e);}});});req.end();}
	,	post:function(url,path,data,callback){
			data=Ƀ.JSON.stringify(data);
			var options={
					hostname:url,
					path:path,
					method:'POST',
					headers:{'Content-Type':'application/json','Content-Length':data.length}
					};
			console.dir([options,data]);
			var req=Ƀ.https.request(options,function(res){
				var buffer='';
				res.setEncoding('utf8');
				res.on('data',function(chunk){
					buffer+=chunk;
				});
				res.on('end',function(){
					try{
						var data=Ƀ.JSON.parse(buffer);
						callback(data,res.statusCode);
					}catch(e){
						console.log(e);}});
			});
			req.write(data);
			req.end();}}
,	Bitcore:require('../../node_modules/bitcore')//new version
,	crypto:require('crypto')
,	crypt:{
		encrypt:function(text,pass){
      		var cipher,crypted;
      		if(pass==null){pass='BBBBBBBBBBBBBBBBBBBBBB';}
      		cipher=Ƀ.crypto.createCipher("aes-256-cbc",pass);
      		crypted=cipher.update(text,"utf8","hex");
			crypted+=cipher.final("hex");
			return crypted;
			}
	,	decrypt:function(text,pass){
			var dec,decipher;
			if(pass==null){pass='BBBBBBBBBBBBBBBBBBBBBB';}
			decipher=Ƀ.crypto.createDecipher("aes-256-cbc",pass);
			dec=decipher.update(text,"hex","utf8");
			dec+=decipher.final("utf8");
			return dec;
			}
	,	gui:function(){return Math.random().toString(36).substring(2);}
		}
,	address:undefined//function(){return Ƀ.publicKey||Ƀ.wk.storeObj().addr;};
,	privateKey:undefined//function(){return Ƀ.privateKeyWif||Ƀ.wk.storeObj().priv;};
,	publicKey:undefined
,	export:undefined//privateKey
,	pay:function(payToAddress,unspents,amount,fee,callback){//(payToAddress, o, cb) {
		var fee=Ƀ.Bitcore.Unit.fromBTC(fee).toSatoshis()||Ƀ.Bitcore.Unit.fromBTC(0.00001).toSatoshis();
		var transaction=new Ƀ.Bitcore.Transaction()
		.fee(fee)//should be higher????
		.from(unspents)
		.to(Ƀ.Bitcore.Address.fromString(payToAddress),amount-fee)
		.change(Ƀ.address)
		.sign(Ƀ.privateKey);
		console.dir(transaction.toJSON());
		var network=Ƀ.settings.network=='testnet'?'t':'';
		Ƀ.JSON.post(network+'btc.blockr.io','/api/v1/tx/push',{'hex':transaction.serialize()},function(r,n){
			callback([r,n]);
			});}
,	checkUnspent:function(address,callback){
		var unspents=[];//fill this up
		var amount=0;
		var total=0;
		var network=Ƀ.settings.network=='testnet'?'t':'';
		Ƀ.JSON.get('https://'+network+'btc.blockr.io/api/v1/address/unspent/'+address+'?unconfirmed=0',function(r,n){
			if(r.status=='success'){
				console.log(r.data.unspent||[]);
				if((unspent=r.data.unspent||[]).length>0){
					console.dir(['unspent',unspent]);
					for(var i=0;i<unspent.length;++i){
						unspent[i].amount=parseFloat(unspent[i].amount);//this is a BTC value
						amount+=Ƀ.Bitcore.Unit.fromBTC(parseFloat(unspent[i].amount)).toSatoshis();//but this is a satoshi value
						console.log('++++');
						console.dir(unspent[i].amount);
						total+=unspent[i].amount;
						console.log('++++');
						unspents.push({//Ƀ.uotxToHash(unspent[i])
							txid: 			unspent[i].tx
						,	outputIndex: 	unspent[i].n
						,	address: 		Ƀ.address.toString()
						,	scriptPubKey: 	unspent[i].script
						,	amount: 		unspent[i].amount//value in BTC
						,	confirmations: 	unspent[i].confirmations
						});}}}
			console.log(total);
			callback(unspents,amount,total);
			});}
,	init:function(privateKey,addressToRecover){
		if(!privateKey){//create new
			Ƀ.privateKey=new Ƀ.Bitcore.PrivateKey();
			}
		else{
			//import existing
			Ƀ.privateKey=new Ƀ.Bitcore.PrivateKey(privateKey);
			}
		Ƀ.export=Ƀ.privateKey.toWIF();
		Ƀ.publicKey=Ƀ.privateKey.toPublicKey();
		Ƀ.address=Ƀ.publicKey.toAddress(Ƀ.settings.network);
		console.log(Ƀ.address.toString());
		Ƀ.checkUnspent(Ƀ.address,function(unspents,amount,total){//this will return [] zero or more uotxHashs
			console.dir({'total':amount,'unspents':unspents});
			if(unspents.length){//should i check if the amount is too low??
				var fee=(total/100)*0.03;
				console.log('\n\n\n');
				console.log(Ƀ.settings.coldWallet,unspents,amount,fee,'function(r)');

				console.log('\n\n\n');
				console.log(0.00001,Ƀ.Bitcore.Unit.fromBTC(0.00001).toSatoshis());
				console.log(fee,Ƀ.Bitcore.Unit.fromBTC(fee).toSatoshis());

				Ƀ.pay(Ƀ.settings.coldWallet,unspents,amount,fee,function(r){
					console.dir(r);
					});
				}
			else{console.log('nothing to do.');}
			//console.log(Ƀ.Bitcore);
			});
		}
	};Ƀ.init('');//'L1qZ7n5b17ZsssssssssssssssssssssssssssskFysHBHxPhbCSwNtd'=benz









// split this into two modules

// ---- PAY -----

// 1  ) Provide a qr to pay with required amount attached this will go to look for the qr in pay (online) data base


//    _id      |    addr     |    qr     |     expected    |     d            |      txid

//   matches         !           if 0          price to       date
// private key                  can use        fullfill       became busy

//     1       |   XXXXXX     |   20     |      0.0055     | 1435076330729


// 2  ) lock the address till *Z


//give the user addr + expected + d

//http://tbtc.blockr.io/api/v1/address/info/myHtNgECiAjBctWz1tM2TN2PupWwfHtgMi?confirmations=0




// 3  ) have the user poll via cors the block chain to see when payment has gone through





// A ) on client result success ask the server to confirm Z do this on zero and one confirms

// B ) client canceled listening Z







// ----SPEND ----
