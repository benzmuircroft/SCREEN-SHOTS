var D=require('domain').create();
console.dir(D);

var JSON=require('../node_modules/JSON');
var server=require('http').createServer();
server.on('request',function(req,res){
    if(req.url === '/'){
        res.writeHead(302,{'ERR':'switchboard not found'});
        res.end('x');
        }});
server.listen(8005,function(err){// start the server
    if(err){return console.log('Encountered error starting server: ',err);}
    console.log('server running at http://localhost:'+8005+'/');
    });
var kb={};//the room
var WebSocketServer=require('../node_modules/ws').Server;
var wss=new WebSocketServer({server:server});
wss.on('connection',function connection(s){
		if(s.readyState==1){s.send('open');}
        s.on('message',function(m){
        	var o=JSON.tryparse(m);
            if(!o.rid){return;}
            else if(!kb[o.rid]&&o.rid[0]!='@'&&!s.rid){
            	s.rid=o.rid;
            	kb[o.rid]=s;
            	}
            if(o.to){
                o.to=o.to[0]=='@'?o.to.slice(1):o.to;
                if((kb[o.to]||{readyState:0}).readyState==1){kb[o.to].send(m);}
            	}
            else{
            	for(var k in kb){
                    if(k==this.rid){continue;}
                    if((kb[k]||{readyState:0}).readyState==1){kb[k].send(m);}
                    }}});
        s.on('close',function(){
            delete kb[this.sid];
            this.close();
            });});