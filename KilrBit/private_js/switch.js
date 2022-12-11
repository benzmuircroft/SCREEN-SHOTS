var JSON=require('../node_modules/JSON');
var WebSocketServer=require('../node_modules/ws').Server;
var not=function(target){if(arguments.length>1){target=[].slice.call(arguments,0);}if(Array.isArray(target)){return function(item){return target.indexOf(item)<0;};}return function(item){return item!==target;};};


var server=require('http').createServer();
var kb={};//the room
var switchboard=(function(server,opts){//var switchboard = require('../node_modules/rtc-switchboard/')(server, { servelib: true });
    var wss=new WebSocketServer({server:server});
    var board=(function(opts){//var board=require('../node_modules/rtc-switchboard/node_modules/rtc-switch')();
        console.log('new board');
        var EventEmitter=require('events').EventEmitter;
        var board=new EventEmitter();//This is a processor layer for the rtc-switchboard that is capable of talking with an rtc-signaller up to and including version 5.
        board.connect=function(){
            var peer=new EventEmitter();
            var notMe=not(peer);
            peer.process=function(data){
                console.log('in: ',data);
                var command,parts,target;
                board.emit('data',data,peer&&peer.id,peer);// emit the data for the board to process
                if(data.charAt(0)==='/'){
                    command=data.slice(1,data.indexOf('|',1)).toLowerCase();// initialise the command name
                    parts=data.slice(command.length+2).split('|').map(function(part){var defined=JSON.parse(part);return defined||part;});// get the payload
                    console.log('parts',parts);
                    if(command==='to'){// if we have a to command, and no designated target
                        target=kb.filter(function(){return member.id===parts[0];})[0];//was kb.filter
                        if(!target){console.warn('got a to request for id "'+parts[0]+'" but cannot find target');return false;}// if the target is unknown, refuse to send
                        return target.emit('data',data);
                        }
                    if(!target){
                        board.emit.apply(board,[command,data,peer].concat(parts));
                        if(peer.room){peer.room.filter(notMe).forEach(function(member){member.emit('data',data);});}
                        }}}
            board.emit('peer:connect',peer);// trigger the peer connect
            return peer;
            }
        function emit(name,src){
            var args=[].slice.call(arguments);
            return function(emitter){
                if(emitter===src){return;}// never send messages to ourself
                return emitter.emit.apply(emitter,args);
                };}
        board.on('announce',function(payload,peer,sender,data){// handle announce messages
            console.log(payload,peer,sender,data);
            var targetRoom=data&&data.room;
            if(!peer.room){
                peer.id=data.id;
                peer.room=kb;//put the peer in after this because hes not in there (should help to make sure no messages are sent to self)
                kb.push(peer);
                }});
        return board;
        })();
    wss.on('connection',function connection(s){
        s.on('message',function(_){
            var command,parts,target;
            if(_.charAt(0)==='/'){//message will always be to/from my client then i will send to everyones client
                var parts=_.split('|');
                var to='*';
                if(parts[0]=='/to'){to=parts[1];}
                if(!this.sid){
                    this.sid=parts[1];
                    kb[this.sid]=this;
                    }
                if(to!=='*'){
                    try{kb[to].send(_);}catch(e){console.dir({'error':_});}
                    }
                else{
                    for(var k in kb){
                        if(k==this.sid){continue;}
                        try{kb[k].send(_);}catch(e){console.dir({'error':_});}
                        }}}
            else{console.log('ALERT!');console.dir(_);}
            });
        s.on('close',function(){
            console.log('!!!!!!!!!!!!!! CLOSE !!!!!!!!!!!!!!!!!');
            delete kb[this.sid];
            this.close();
            });});
    return board;
    })(server,{servelib:true});
server.on('request',function(req,res){
    if(req.url === '/'){
        res.writeHead(302,{'ERR':'switchboard not found'});
        res.end('x');
        }});
server.listen(8005,function(err){// start the server
    if(err){return console.log('Encountered error starting server: ',err);}
    console.log('server running at http://localhost:'+8005+'/');
    });




var router=require('http').createServer();
var at={};//the room
var callboard=(function(server,opts){//var switchboard = require('../node_modules/rtc-switchboard/')(server, { servelib: true });
    var wss=new WebSocketServer({server:server});
    var board=(function(opts){//var board=require('../node_modules/rtc-switchboard/node_modules/rtc-switch')();
        console.log('new board');
        var EventEmitter=require('events').EventEmitter;
        var board=new EventEmitter();//This is a processor layer for the rtc-switchboard that is capable of talking with an rtc-signaller up to and including version 5.
        board.connect=function(){
            var peer=new EventEmitter();
            var notMe=not(peer);
            peer.process=function(data){
                console.log('in: ',data);
                var command,parts,target;
                board.emit('data',data,peer&&peer.id,peer);// emit the data for the board to process
                if(data.charAt(0)==='/'){
                    command=data.slice(1,data.indexOf('|',1)).toLowerCase();// initialise the command name
                    parts=data.slice(command.length+2).split('|').map(function(part){var defined=JSON.parse(part);return defined||part;});// get the payload
                    console.log('parts',parts);
                    if(command==='to'){// if we have a to command, and no designated target
                        target=at.filter(function(){return member.id===parts[0];})[0];
                        if(!target){console.warn('got a to request for id "'+parts[0]+'" but cannot find target');return false;}// if the target is unknown, refuse to send
                        return target.emit('data',data);
                        }
                    if(!target){
                        board.emit.apply(board,[command,data,peer].concat(parts));
                        if(peer.room){peer.room.filter(notMe).forEach(function(member){member.emit('data',data);});}
                        }}}
            board.emit('peer:connect',peer);// trigger the peer connect
            return peer;
            }
        function emit(name,src){
            var args=[].slice.call(arguments);
            return function(emitter){
                if(emitter===src){return;}// never send messages to ourself
                return emitter.emit.apply(emitter,args);
                };}
        board.on('announce',function(payload,peer,sender,data){// handle announce messages
            var targetRoom=data&&data.room;
            if(!peer.room){
                peer.id=data.id;
                peer.room=at;//put the peer in after this because hes not in there (should help to make sure no messages are sent to self)
                at.push(peer);
                }});
        return board;
        })();
    wss.on('connection',function connection(s){
        s.on('message',function(_){
            console.log(_);
            var command,parts,target;
            if(_.charAt(0)==='/'){//message will always be to/from my client then i will send to everyones client
                var parts=_.split('|');
                var to='*';
                if(parts[0]=='/to'){to=parts[1];}
                if(!this.sid){
                    this.sid=parts[1];
                    at[this.sid]=this;
                    }
                if(to!=='*'){
                    console.log('>');
                    try{at[to].send(_);}catch(e){console.dir({'error':_});}
                    }
                else{
                    for(var k in at){
                        if(k==this.sid){continue;}
                        console.log('*');
                        try{at[k].send(_);}catch(e){console.dir({'error':_});}
                        }}}
            else{console.log('ALERT!');console.dir(_);}
            });
        s.on('close',function(){
            console.log('!!!!!!!!!!!!!! CLOSE !!!!!!!!!!!!!!!!!');
            delete at[this.sid];
            this.close();
            });});
    return board;
    })(router,{servelib:true});
router.on('request',function(req,res){
    if(req.url === '/'){
        res.writeHead(302,{'ERR':'callboard not found'});
        res.end('x');
        }});
router.listen(8004,function(err){// start the server
    if(err){return console.log('Encountered error starting router: ',err);}
    console.log('router running at http://localhost:'+8004+'/');
    });
