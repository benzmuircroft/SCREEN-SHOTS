module.exports = function (ss,s){


	var nodemailer = require("../public_html/node_modules/nodemailer");
	var gmail=nodemailer.createTransport("SMTP",{service:'Gmail','auth':{'user':'quickreport.it@gmail.com','pass':'khmipreuziviixiz'}});
	
	
	
	
	
	s[1].WHEN['?test']=function(_){
		s[1].WHEN['?test']=null;
		s[1].nickname=_.nickname;
		console.log('nickname: '+s[1].nickname);
		s[1].WIRE('!test',{'nickname':s[1].nickname});
		};
	
	
	
	s[1].WHEN['@send']=function(_){
		_.to=(_.to==='Fabio')?'fabio.gangarossa@computerstudio.eu':_.to;
		_.to=(_.to==='Benz')?'benz.muircroft@computerstudio.eu':_.to;
		_.to=(_.to==='Carol')?'carol.gangarossa@computerstudio.eu':_.to;
		_.to=(_.to==='Jon')?'jon.varley@computerstudio.eu':_.to;
		_.to=(_.to==='Carl')?'carl.muircroft@computerstudio.eu':_.to;
		gmail.sendMail({//send receipt
        		subject:'Your message to Computer Studio Limited'+_.pg,
        		from:'noreply@computerstudio.eu',
        		to:_.fm,
        		html:'Thank you! Your message has been received - We will reply as soon as we can...<br><br>----original-message----<br><br>'+_.tx
       			},function(error,response){
        			if(error){s[1].WIRE('@res',{'r':'e'});}
					else{//send real
						gmail.sendMail({
        					subject:'CS Customer '+_.pg,
        					from:_.fm,
        					to:_.to,
        					html:'To: '+_.to+'<br>Customer: '+_.fm+'<br><br><br>'+_.tx
       						},function(error,response){
        						if(error){}//-------------------------- <- interal error
								else{s[1].WIRE('@res',{'r':'s'});}
								});}});
		};//@send----------------------
	
	






};//exports