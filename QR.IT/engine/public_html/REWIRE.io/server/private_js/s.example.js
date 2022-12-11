module.exports = function (ss,s){
  
  s[4].WHEN['send to server']=function(_){
		
		s[4].WIRE('send to client',{str2:'Hello '+_.str1});
		
		console.log('Hello '+_.str1+' Sent from server');
		
		};
}