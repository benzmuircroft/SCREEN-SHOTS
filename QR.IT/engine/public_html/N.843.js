var polport=843;

var pf=require('policyfile').createServer([
	'quickreport.it:*',
	'scanpedia.com:*'
	]);

pf.listen(polport,function(){
	console.log(wht('policy file')+' listening on port:'+polport)
	});
