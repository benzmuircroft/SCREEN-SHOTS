'App code goes here';
			
	
s[4].WIRE('send to server',{str1:'world!'});
			
s[4].WHEN['send to client']=function(_){
				
	console.log(_.str2+' Received from server');
				
	};