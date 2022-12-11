module.exports = function (ss,s){


  
var qr = require('../public_html/node_modules/qr.js');
var fs = require('fs');
var anyDB = require('../public_html/node_modules/any-db');
var demo1_issues = anyDB.createConnection('mysql://quickrep_user:53S){~Fl6NJW@quickreport.it/quickrep_issues',function(e,r){console.log('demo1.sqlerr: '+e);});
var demo2_issues = anyDB.createConnection('mysql://quickrep_user:53S){~Fl6NJW@quickreport.it/quickrep_issues',function(e,r){console.log('demo2.sqlerr: '+e);});
var demo3_issues = anyDB.createConnection('mysql://quickrep_user:53S){~Fl6NJW@quickreport.it/quickrep_issues',function(e,r){console.log('demo3.sqlerr: '+e);});
var hotel_issues = anyDB.createConnection('mysql://quickrep_user:53S){~Fl6NJW@quickreport.it/quickrep_issues',function(e,r){console.log('hotel.sqlerr: '+e);});
var scanipedia_sql = anyDB.createConnection('mysql://quickrep_user:53S){~Fl6NJW@quickreport.it/quickrep_scanipedia',function(e,r){console.log(e);});
var SendGrid=require('../public_html/node_modules/sendgrid').SendGrid;
var sendgrid=new SendGrid('benz','xxxx');
var nodemailer = require("../public_html/node_modules/nodemailer");
var gmail=nodemailer.createTransport("SMTP",{service:'Gmail','auth':{'user':'quickreport.it@gmail.com','pass':'xxxxxx'}});
var hotmail=nodemailer.createTransport("SMTP",{service:'Hotmail','auth':{'user':' quickreport.it@hotmail.com','pass':'xxxxx'}});//33pnidjq43vx6opb
var FTPClient = require('../public_html/node_modules/ftp');
var ftpkey={
    host    : "quickreport.it",
    user    : "quickrep",
    port    : 21,
    password: "James;;;:::Bond007"
    }

var imgs=1;
 
  





function hexEncode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[i]=b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15);}var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16_map[data.charCodeAt(i)];}return result.join('');}
function hexDecode(data){var b16_digits='0123456789abcdef';var b16_map=new Array();for(var i=0;i<256;i++){b16_map[b16_digits.charAt(i >> 4)+b16_digits.charAt(i & 15)]=String.fromCharCode(i);}if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length % 2)data='0'+data;var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16_map[data.substr(i,2)];}return result.join('');}
 
















  
  
  



var sqlvar;


/*

s[1].WHEN['img_upload']=function(_){//socket.on('img_upload',function(_){
    if(_.c==='demo1'){sqlvar=demo1_issues;}
    else{}
    //
    if(imgs<=2){
    var stamp=_.id;
    sqlvar.query("UPDATE "+_.c+" SET img"+imgs+"='"+stamp+"_"+imgs+".png' WHERE id='"+_.id+"'").on('end',function(r){
      var data=_.file.replace(/^data:image\/\w+;base64,/,"");
      var buffer=new Buffer(data,'base64');
      fs.writeFile('/home/engine/public_html/img/'+stamp+'_'+imgs+'.png',buffer,function(err){
        if(err){console.log(err+'!');}else{
          var c=new FTPClient();
          c.on('ready',function(){
            c.put('/home/engine/public_html/img/'+stamp+'_'+imgs+'.png','public_html/img/'+_.c+'/'+stamp+'_'+imgs+'.png',function(err){
              if (err) throw err;
              c.end();
              fs.unlink('/home/engine/public_html/img/'+stamp+'_'+imgs+'.png',function(err){
                imgs=imgs+1;
                s[1].WIRE('get_imgs',{'id':_.id});//socket.emit('get_imgs',{'id':_.id});
                });
              });});
          c.connect(ftpkey);
      }});});
    }else{
      imgs=1;s[1].WIRE('report_saved',{});//socket.emit('report_saved');
      sqlvar.query("SELECT * FROM "+_.c+" WHERE id='"+_.id+"'").on('row',function(r){
      if(bg==='#006699'){bg='none';}else{bg='#006699';}
      io.sockets.in(_.c).emit('put_issues',{'bg':bg,'id':r.id,'qr':r.qr,'type':r.type,'jobdone':r.jobdone,'text':r.text,'img1':_.c+'/'+r.img1,'img2':_.c+'/'+r.img2,'date':r.date});
      });
      }
    });




socket.on('save_report',function(_){
  if(_.c==='demo1'){sqlvar=demo1_issues;}
  else{}
  sqlvar.query("INSERT INTO "+_.c+" (qr,type,text,date,jobdone) Values ('"+_.qr+"','"+_.type+"','"+_.description+"','"+_.timeref+"',0)").on('end',function(r){
    sqlvar.query("SELECT id FROM "+_.c+" WHERE date='"+_.timeref+"'").on('row',function(r){
    socket.emit('get_imgs',{'id':r.id});
    });});
  });



var bg;


socket.on('get_issues',function(_){
  socket.join(_.c);
  bg='#006699';
  
  demo1_issues.query("DELETE FROM demo1 WHERE (created < NOW() - INTERVAL 5 MINUTE) && (created!='0000-00-00 00:00:00')");
  
  if(_.c==='demo1'){sqlvar=demo1_issues;}
  else{}
  //console.dir(sqlvar);
  sqlvar.query("SELECT * FROM "+_.c+" ORDER BY date").on('row',function(r){
    if(bg==='#006699'){bg='none';}else{bg='#006699';}
    socket.emit('put_issues',{'bg':bg,'id':r.id,'qr':r.qr,'type':r.type,'jobdone':r.jobdone,'text':r.text,'img1':_.c+'/'+r.img1,'img2':_.c+'/'+r.img2,'date':r.date});
    })
  .on('end',function(r){});
  });



socket.on('update_job',function(_){
  if(_.c==='demo1'){sqlvar=demo1_issues;}
  else{}
  if(_.c==='demo1'&&(_.id==='137'||_.id==='140'||_.id==='143'||_.id==='149')){io.sockets.in(_.c).emit('job_updated',{'fix':_.jobdone,'me':_.id,'type':_.type,'text':_.text});}//demo
  else{
  sqlvar.query("UPDATE "+_.c+" SET jobdone='"+_.jobdone+"',type='"+_.type+"',text='"+_.text+"' WHERE id='"+_.id+"'").on('end',function(r){
    io.sockets.in(_.c).emit('job_updated',{'fix':_.jobdone,'me':_.id,'type':_.type,'text':_.text});
    });}
  });



socket.on('remove_job',function(_){
  if(_.c==='demo1'){sqlvar=demo1_issues;}
  else{}
  if(_.c==='demo1'&&(_.id==='137'||_.id==='140'||_.id==='143'||_.id==='149')){io.sockets.in(_.c).emit('job_removed',{'me':_.id});}//demo
  else{
  console.log(_.id+' :removed');
  sqlvar.query("DELETE FROM "+_.c+" WHERE id='"+_.id+"'").on('end',function(r){io.sockets.in(_.c).emit('job_removed',{'me':_.id});});
  var c=new FTPClient();
  c.on('ready',function(){
    c.delete(['public_html/img/'+_.c+'/'+_.id+'_1.png','public_html/img/'+_.c+'/'+_.id+'_2.png'],function(err){
      if (err) throw err;
      c.end();
      sqlvar.query("OPTIMIZE TABLE "+_.c);
      });});
  c.connect(ftpkey);
  }
  });






//scanpedia








socket.on('browse_allqr',function(_){
  console.log(_.uid);
  socket.join(_.uid);
  scanipedia_sql.query("SELECT * FROM qr ORDER BY id DESC").on('row',function(r){
  function numbertwelve(n){n=n.toString();if(n.length<12){var twelve = 12 - n.length;for(var i=1;i<=twelve;i++){n='0'+n;}return n;}else{return n;}}
  var n12=numbertwelve(r.id);
  var qrcode = qr('quickreport.it/b.php?='+n12+'='+_.uid);//console.log(_.room);
  var cells = qrcode.modules;//console.log(cells.length);
  var num=4;
  var qrsize=cells.length*num;
  var Canvas = require('../public_html/node_modules/canvas');
  var canvas=new Canvas(qrsize,qrsize);
  var ctx = canvas.getContext('2d');
  var img = new Canvas.Image;
  img.onload=function(){
  ctx.drawImage(img,0,0);
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'rgba(0,0,0,0.13)':'rgba(255,255,255,0.13)';
      ctx.fillRect((x*num),(y*num),num,num);
      ctx.fillStyle=row[x]?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.5)';
      ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));
      if(x===6&&y===6||x===(cells.length-1)&&y===6||x===6&&y===(cells.length-1)){
        ctx.fillStyle='#000';
        ctx.fillRect((x-6)*num,(y-6)*num,(num*7),(num*7));
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-5)*num,(y-5)*num,(num*5),(num*5));
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,(num*3),(num*3));
        }
      if(y>4&&
         cells[y-0][x-4]===true &&cells[y-0][x-3]===true &&cells[y-0][x-2]===true &&cells[y-0][x-1]===true &&cells[y-0][x-0]===true &&
         cells[y-1][x-4]===true &&cells[y-1][x-3]===false&&cells[y-1][x-2]===false&&cells[y-1][x-1]===false&&cells[y-1][x-0]===true &&
         cells[y-2][x-4]===true &&cells[y-2][x-3]===false&&cells[y-2][x-2]===true &&cells[y-2][x-1]===false&&cells[y-2][x-0]===true &&
         cells[y-3][x-4]===true &&cells[y-3][x-3]===false&&cells[y-3][x-2]===false&&cells[y-3][x-1]===false&&cells[y-3][x-0]===true &&
         cells[y-4][x-4]===true &&cells[y-4][x-3]===true &&cells[y-4][x-2]===true &&cells[y-4][x-1]===true &&cells[y-4][x-0]===true
         ){
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,num*5,num*5);
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-3)*num,(y-3)*num,num*3,num*3);
        ctx.fillStyle='#000';
        ctx.fillRect((x-2)*num,(y-2)*num,num*1,num*1);
        }
      }}
      socket.emit('take_qr',{'img':canvas.toDataURL(),'qrsize':qrsize,'realid':r.id,'react':r.react});
      }
  img.src='/home/engine/public_html/R/'+r.id+'.png';
  });//sql
});



socket.on('set_qr',function(_){
  console.log('quickreport.it/b.php?=000000000000='+_.uid);
  var qrcode = qr('quickreport.it/b.php?=000000000000='+_.uid);//console.log(_.room);
  var cells = qrcode.modules;//console.log(cells.length);
  var num=4;
  var qrsize=cells.length*num;
  var Canvas = require('../public_html/node_modules/canvas');
  var canvas=new Canvas(qrsize,qrsize);
  var ctx = canvas.getContext('2d');
  var img = new Canvas.Image;
  img.onload=function(){
  ctx.drawImage(img,0,0);
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'rgba(0,0,0,0.13)':'rgba(255,255,255,0.13)';
      ctx.fillRect((x*num),(y*num),num,num);
      ctx.fillStyle=row[x]?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.5)';
      ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/2),(num/2));
      if(x===6&&y===6||x===(cells.length-1)&&y===6||x===6&&y===(cells.length-1)){
        ctx.fillStyle='#000';
        ctx.fillRect((x-6)*num,(y-6)*num,(num*7),(num*7));
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-5)*num,(y-5)*num,(num*5),(num*5));
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,(num*3),(num*3));
        }
      if(y>4&&
         cells[y-0][x-4]===true &&cells[y-0][x-3]===true &&cells[y-0][x-2]===true &&cells[y-0][x-1]===true &&cells[y-0][x-0]===true &&
         cells[y-1][x-4]===true &&cells[y-1][x-3]===false&&cells[y-1][x-2]===false&&cells[y-1][x-1]===false&&cells[y-1][x-0]===true &&
         cells[y-2][x-4]===true &&cells[y-2][x-3]===false&&cells[y-2][x-2]===true &&cells[y-2][x-1]===false&&cells[y-2][x-0]===true &&
         cells[y-3][x-4]===true &&cells[y-3][x-3]===false&&cells[y-3][x-2]===false&&cells[y-3][x-1]===false&&cells[y-3][x-0]===true &&
         cells[y-4][x-4]===true &&cells[y-4][x-3]===true &&cells[y-4][x-2]===true &&cells[y-4][x-1]===true &&cells[y-4][x-0]===true
         ){
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,num*5,num*5);
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-3)*num,(y-3)*num,num*3,num*3);
        ctx.fillStyle='#000';
        ctx.fillRect((x-2)*num,(y-2)*num,num*1,num*1);
        }
      }}
      socket.emit('put_qr',{'img':canvas.toDataURL(),'qrsize':qrsize,'realid':0,'react':'000000000000'});
      }
  img.src='/home/engine/public_html/R/defaultqr.png';
});


socket.on('scanpedia_reaction',function(_){console.log('reaction');
  var uid=_.args.split('_');
  var qr=uid[0].replace(/^0+/,'');
  //function numbertwelve(n){n=n.toString();if(n.length<12){var twelve = 12 - n.length;for(var i=1;i<=twelve;i++){n='0'+n;}return n;}else{return n;}}
  uid=uid[1];
  console.log('r: '+uid);
  io.sockets.in(uid).emit('scanpedia_play',{'uid':uid,'qr':qr});
  
  scanipedia_sql.query("SELECT * FROM qr WHERE id='"+qr+"'").on('row',function(r){
    socket.emit('scanpedia_playing',{'end':r.end});
    });
  });






socket.on('scanpedia_registration_check',function(_){
  var result='not_set';
  scanipedia_sql.query("SELECT * FROM login WHERE (email='"+_.remail+"' OR name='"+_.rname+"')").on('row',function(r){
    if(r.email===_.remail){
      result='email_exists';
      socket.emit('scanpedia_registration_result',{'result':result});
      }
    else if(r.name===_.rname){
      result='name_exists';
      socket.emit('scanpedia_registration_result',{'result':result});
      }
    }).on('end',function(){
    if(result==='not_set'){
      function _ref(){var text='';var possible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';for(var i=0;i<10;i++){text+=possible.charAt(Math.floor(Math.random()*possible.length));}return text;}
      var ref=_ref();
      scanipedia_sql.query("INSERT INTO login (email,name,pass,ref) Values ('"+_.remail+"','"+_.rname+"','"+_.rpass+"','"+hexEncode(ref)+"')");
      sendgrid.send({
                to      : hexDecode(_.remail),
                from    : 'scanpedia.com@gmail.com',
                subject : 'Verify your account',
                html    : '<div id="header"style="width:316px;height:46px;background:#EAEEF2;border:2px solid #B1C5D9;margin-bottom:0px;margin-left:auto;margin-right:auto;text-align:center;"><img src="https://quickreport.it/R/scanpedia.png"style="margin:10px;"/></div>'+
                          '<div class="PAGE"style="position:relative;height:300px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:10px;text-align:left;">'+
                          'Click this <b><a href="https://quickreport.it/qrl2.php?ref='+ref+'">link</a></b> to complete your registration.'+
                          '<br><br>'+
                          '<b>Have a nice day!</b>'+
                          '<br><br>'+
                          'The Scanpedia Team'+
                          '<br><br>'+
                          '<br><br>'+
                          '<table><tbody><tr><td style="background:#eeeeee;width:320px;border-bottom:5px solid #FF0000;">'+
                          '<div style="color:#C8C8C8;margin:auto;width:320px;font-size:10px;">'+
                          '<b style="color:#999999;">Disclaimer:</b>'+
                          '<br><br>'+
                          'This e-mail, its content and any files transmitted with it are intended solely for the addressee(s) and may be legally privileged and/or confidential. '+
                          'Access by any other party is unauthorised without the express written permission of the sender.'+
                          'If you have received this e-mail in error you may not copy, forward or use the contents, attachments or information in any way.'+
                          'Please delete this e-mail from your system and contact the sender on:&nbsp;+44 (0)7729 455 151&nbsp; Any quotation contained in this '+
                          'e-mail is subject to our standard terms and conditions of sale, a copy of which is available on request. '+
                          'Although any attachments to this e-mail have been virus checked, the sender cannot accept liability in respect of any virus which has not been detected.'+
                          '<br><br></div></td><td></td></tr></tbody></table>'+
                          '</div>'
                },
              function(success,message){
                if(!success){
                  console.log(message);
                  socket.emit('scanpedia_registration_email_send.err');
                  }
                else{
                  console.log('sent');
                  socket.emit('scanpedia_registration_result',{'result':'200:ok'});
                  }
              });
      }
    });
  });




socket.on('scanpedia_account_activate_check',function(_){
  scanipedia_sql.query("SELECT name FROM login WHERE ref='"+_.ref+"'").on('row',function(r){
    scanipedia_sql.query("UPDATE login SET ref='a' WHERE ref='"+_.ref+"'");
    socket.emit('scanpedia_account_activate_result',{'name':r.name});
    });
  });


socket.on('scanpedia_login_check',function(_){
  var result='not_set';
  scanipedia_sql.query("SELECT name,ref FROM login WHERE (name='"+_.ename+"' OR email='"+_.ename+"') AND pass='"+_.pass+"'").on('row',function(r){
      console.log(r.ref);
      if(r.ref==='a'){
        result='active';console.log(result);
        socket.emit('scanpedia_login_result',{'name':r.name});
        }
      else{
        result='unverified';console.log(result);
        socket.emit('scanpedia_registration_result',{'result':'200:ok'});
        }
    }).on('end',function(){
      if(result==='not_set'){
        socket.emit('scanpedia_login_result',{'name':'not_set'});
        }
    });
  });















socket.on('make_qr',function(_){
  var qrcode = qr('quickreport.it/'+_.room);//console.log(_.room);
  var cells = qrcode.modules;//console.log(cells.length);
  var num=3;
  var qrsize=cells.length*num;
  var Canvas = require('../public_html/node_modules/canvas');
  var canvas=new Canvas(qrsize,qrsize);
  var ctx = canvas.getContext('2d');
  
  var img = new Canvas.Image;
  
  img.onload=function(){console.log('loaded');
  ctx.drawImage(img,0,0);
  
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)';
      ctx.fillRect((x*num),(y*num),num,num);
      ctx.fillStyle=row[x]?'#000':'#FFF';
      ctx.fillRect((x*num)+(num/num),(y*num)+(num/num),(num/num),(num/num));
      if(x===6&&y===6||x===(cells.length-1)&&y===6||x===6&&y===(cells.length-1)){
        ctx.fillStyle='#000';
        ctx.fillRect((x-6)*num,(y-6)*num,(num*7),(num*7));
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-5)*num,(y-5)*num,(num*5),(num*5));
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,(num*3),(num*3));
        }
      if(y>4&&
         cells[y-0][x-4]===true &&cells[y-0][x-3]===true &&cells[y-0][x-2]===true &&cells[y-0][x-1]===true &&cells[y-0][x-0]===true &&
         cells[y-1][x-4]===true &&cells[y-1][x-3]===false&&cells[y-1][x-2]===false&&cells[y-1][x-1]===false&&cells[y-1][x-0]===true &&
         cells[y-2][x-4]===true &&cells[y-2][x-3]===false&&cells[y-2][x-2]===true &&cells[y-2][x-1]===false&&cells[y-2][x-0]===true &&
         cells[y-3][x-4]===true &&cells[y-3][x-3]===false&&cells[y-3][x-2]===false&&cells[y-3][x-1]===false&&cells[y-3][x-0]===true &&
         cells[y-4][x-4]===true &&cells[y-4][x-3]===true &&cells[y-4][x-2]===true &&cells[y-4][x-1]===true &&cells[y-4][x-0]===true
         ){
        ctx.fillStyle='#000';
        ctx.fillRect((x-4)*num,(y-4)*num,num*5,num*5);
        ctx.fillStyle='#FFF';
        ctx.fillRect((x-3)*num,(y-3)*num,num*3,num*3);
        ctx.fillStyle='#000';
        ctx.fillRect((x-2)*num,(y-2)*num,num*1,num*1);
        }
      }}
      socket.emit('take_qr',{'img':canvas.toDataURL(),'qrsize':qrsize});
      }
  img.src='/home/engine/public_html/R/bg111.png';
  console.log(img.src);
});







socket.on('send.enquiry',function(_){
  if(_.e.match('40')){
    sendgrid.send({
              to      : 'benzmuircroft@gmail.com',
              from    : hexDecode(_.e),
              subject : 'QR.IT enquiry',
              html    : hexDecode(_.m)
              },
            function(success,message){
              if(!success){console.log(message);socket.emit('enquiry.err');}
              else{console.log('sent');socket.emit('enquiry.sent');}
            });
    }else{socket.emit('enquiry.err');}
  });
 
  
  
  



//inventory setup




socket.on('join.inventory',function(_){
  socket.join(_.c);
  if(_.c==='demo2'){sqlvar=demo2_issues;}
  else{}
  sqlvar.query("SELECT property,id FROM "+_.c).on('row',function(r){
      socket.emit('put_inventory_setup_property',{'property':r.property,'id':r.id});
      });
  });





socket.on('get_inventory_setup_items',function(_){
  if(_.c==='demo2'){sqlvar=demo2_issues;}
  else{}
  for(var i=1;i <= 100;i++){    
    sqlvar.query("SELECT k"+i+" FROM "+_.c+" WHERE property='"+_.property+"'").on('row',function(r){
      socket.emit('put_inventory_setup_item',{'property':_.property,'k':r[Object.keys(r)[0]]});//io.sockets.in(_.c).emit('put_inventory_setup_item',{'property':_.property,'k':r[Object.keys(r)[0]]});
      });
    if(i===100){setTimeout(function(){io.sockets.in(_.c).emit('done_inventory_setup_items');},300);}
    }
  });




socket.on('save_inventory_item',function(_){
  if(_.c==='demo2'){sqlvar=demo2_issues;}
  else{}
  sqlvar.query("UPDATE "+_.c+" SET "+_.k+"='"+_.v+"' WHERE property='"+_.property+"'");
  });





socket.on('duplicate_inventory_property',function(_){console.log('duplicate_inventory_property');
  if(_.c==='demo2'){sqlvar=demo2_issues;}
  else{}
  if(_.newproperty!==''){
  sqlvar.query("SELECT * FROM "+_.c+" WHERE id='"+_.id+"'").on('row',function(r){
    sqlvar.query("INSERT INTO "+_.c+" (property) Values ('"+_.newproperty+"')");//,function(){
      sqlvar.query("SELECT property,id FROM "+_.c+" WHERE property='"+_.newproperty+"'").on('row',function(rr){
        socket.broadcast.to(_.c).emit('put_inventory_setup_property',{'property':rr.property,'id':rr.id});
        socket.emit('update_inventory_setup_property',{'id':rr.id,'fake':_.fake});
        console.log('put_inventory_setup_property: '+rr.property+'_'+rr.id);
        for(var key in r){
          if(r.hasOwnProperty(key)){
            if(key!=='id'&&key!=='property'){sqlvar.query("UPDATE "+_.c+" SET "+key+"='"+r[key]+"' WHERE property='"+_.newproperty+"'");}
            }}});
      //});
    });}
  else{console.log('nothing to duplicate or delete');}
  });


socket.on('save_inventory_property',function(_){console.log('save_inventory_property');
  if(_.c==='demo2'){sqlvar=demo2_issues;}
  else{}
  if(_.id==='new'){
    sqlvar.query("INSERT INTO "+_.c+" (property) Values ('"+_.newproperty+"')");
    sqlvar.query("SELECT property,id FROM "+_.c+" WHERE property='"+_.newproperty+"'").on('row',function(r){
      socket.broadcast.to(_.c).emit('put_inventory_setup_property',{'property':r.property,'id':r.id});
      socket.emit('update_inventory_setup_property',{'id':r.id,'fake':_.fake});
      });
    }
  else if(_.newproperty!==''){
    sqlvar.query("UPDATE "+_.c+" SET property='"+_.newproperty+"' WHERE id='"+_.id+"'");
    delete props['prop'+_.id];
    io.sockets.in(_.c).emit('opened_property_name',{'prop':'prop'+_.id});
    }
  else{
    sqlvar.query("DELETE FROM "+_.c+" WHERE (id='"+_.id+"' || property='')");
    delete props['prop'+_.id];
    io.sockets.in(_.c).emit('deleted_property_name',{'propid':_.id});
    }
  });

var props=[];
socket.on('lock_property_name',function(_){
  props.push(_.prop);
  socket.broadcast.to(_.c).emit('locked_property_name',{'prop':_.prop,'val':_.val});
  });



socket.on('lock_inventory_property',function(_){
  socket.join(_.c+'_'+_.property);
  io.sockets.in(_.c).emit('locked_inventory_property',{'property':_.property});
  });

socket.on('open_inventory_property',function(_){
  socket.leave(_.c+'_'+_.property);
  io.sockets.in(_.c).emit('opened_inventory_property',{'property':_.property});
  io.sockets.in(_.c).emit('opened_property_name',{'prop':'prop'+_.property});
  });


socket.on('find_locks',function(_){
  if(_.c==='demo2'){sqlvar=demo2_issues;}
  else{}
  var rooms=io.sockets.manager.rooms;
  for(var key in rooms){
    if(key!=='/'+_.c&&key.match(_.c)){
      var property=key.replace('/'+_.c+'_','');
      io.sockets.in(_.c).emit('locked_inventory_property',{'property':property});
      sqlvar.query("SELECT property FROM "+_.c+" WHERE id='"+property+"'").on('row',function(r){
        io.sockets.in(_.c).emit('locked_property_name',{'prop':'prop'+property,'val':r.property});
        });
      }}
  });
  




//inventory location


socket.on('get addresscheck',function(_){
  if(_.c==='demo2'){sqlvar=demo2_issues;}
  else{}
  sqlvar.query("SELECT * FROM "+_.c+" WHERE id='"+_.id+"'").on('row',function(r){
    for(var key in r){
      if(r[key]===''||r[key]===0||key==='id'||key==='parse'||key==='_typeCast'){delete r[key];}
      else if(key==='property'){socket.emit('put addresscheck-property',{'property':r[key]});}
      else{
        if(key.match('k')){
          socket.emit('put addresscheck-item',{
          'key':key,
          'val':r[key],
          'text':r['t'+key.replace('k','')],
          'img':r['i'+key.replace('k','')]
          });
          }
        }
    }
    io.sockets.in(_.c).emit('locked_inventory_property',{'property':_.id});
    io.sockets.in(_.c).emit('locked_property_name',{'prop':'prop'+_.id,'val':r.property});
    });
  });





socket.on('inventory_upload_part',function(_){
  if(_.c==='demo2'){sqlvar=demo1_issues;}
  else{}
  sqlvar.query("UPDATE "+_.c+" SET i"+_.kid+"='"+_.propertyid+"_"+_.kid+".png', t"+_.kid+"='"+_.text+"' WHERE id='"+_.propertyid+"'").on('end',function(r){
    var data=_.file.replace(/^data:image\/\w+;base64,/,"");
    var buffer=new Buffer(data,'base64');
    fs.writeFile('/home/engine/public_html/img/'+_.propertyid+'_'+_.kid+'.png',buffer,function(err){
      if(err){console.log(err+'!');}else{
      var c=new FTPClient();
      c.on('ready',function(){
        c.put('/home/engine/public_html/img/'+_.propertyid+'_'+_.kid+'.png','public_html/img/'+_.c+'/'+_.propertyid+'_'+_.kid+'.png',function(err){
          if (err) throw err;
          c.end();
          fs.unlink('/home/engine/public_html/img/'+_.propertyid+'_'+_.kid+'.png',function(err){
            socket.emit('inventory_upload_part_done',{'id':_.kid});
            });
          });
        });
      c.connect(ftpkey);
      }});
    });
  });





socket.on('inventory_location_text',function(_){
  if(_.c==='demo2'){sqlvar=demo1_issues;}
  else{}
  sqlvar.query("UPDATE "+_.c+" SET t"+_.tid+"='"+_.val+"' WHERE id='"+_.propertyid+"'");
  });




socket.on('inventory_location_remove_img',function(_){
  sqlvar.query("UPDATE "+_.c+" SET i"+_.img+"='' WHERE id='"+_.propertyid+"'").on('end',function(r){
    var c=new FTPClient();
    c.on('ready',function(){
      c.delete(['public_html/img/'+_.c+'/'+_.propertyid+'_'+_.img+'.png'],function(err){
      if (err) throw err;
      c.end();
      sqlvar.query("OPTIMIZE TABLE "+_.c);
      });});
    c.connect(ftpkey);
    });
  });





socket.on('inventory_complete',function(_){
  if(_.c==='demo2'){sqlvar=demo1_issues;}
  else{}
  sqlvar.query("UPDATE "+_.c+" SET complete='2',email='"+hexDecode(_.e)+"' WHERE id='"+_.propertyid+"'").on('end',function(r){
    PDFDocument=require('../public_html/node_modules/pdfkit'),
    doc=new PDFDocument;
    sqlvar.query("SELECT * FROM "+_.c+" WHERE id='"+_.propertyid+"'")
      .on('row',function(r){
        var d=new Date();
        var month=d.getUTCMonth();
        var day=d.getUTCDate();
        var year=d.getUTCFullYear();
        d=day+'/'+month+'/'+year;
        doc
        .fontSize(25)
        .text(_.c+' Inventory Report')
        .text(hexDecode(r.property))
        .text(d)
        .text('Signed by: '+hexDecode(_.e))
        .addPage();
        var arrimgs=[];
        var k=1;
        function doagain(){
          if(r['k'+k]){
            var k_=r['k'+k];
            var t_=r['t'+k];
            if(t_===''){t_=hexEncode('Good Condition');}
            if(r['i'+k]){
              var i_=r['i'+k];
              var c=new FTPClient();
                c.on('ready',function(){
                  c.get('public_html/img/'+_.c+'/'+i_,function(err,stream){
                    if(err)throw err;
                    stream.once('close', function(){
                      c.end();
                      img='/home/engine/public_html/img/'+_.c+'_temp_'+i_;
                      arrimgs.push(img);
                      makepdf();
                      });
                    stream.pipe(fs.createWriteStream('/home/engine/public_html/img/'+_.c+'_temp_'+i_));
                    });
                });c.connect(ftpkey);
              function makepdf(){
                  doc
                  .text('Item '+k+': '+hexDecode(k_))
                  .text('Description: '+hexDecode(t_))
                  .image('/home/engine/public_html/img/'+_.c+'_temp_'+i_)
                  .text('.')
                  .moveDown();
                  finished();
                  }
              }
            else{
              doc
                .text('Item '+k+': '+hexDecode(k_))
                .text('Description: '+hexDecode(t_))
                .text('No image taken.')
                .moveDown();
                finished();
              }
            }
          else{finished();}
          }
        function finished(){
          k++;
          if(k<101){doagain();}else{writepdf();}
          }
        function writepdf(){
          doc.write('public_html/img/'+_.c+'_'+_.propertyid+'.pdf',function fn(){
            fs.readFile('public_html/img/'+_.c+'_'+_.propertyid+'.pdf',function(err,data){console.log(data);//var base64data = new Buffer(data).toString('base64');
            for(var i=0;i<arrimgs.length;i++){
              fs.unlink(arrimgs[i],function(err){
                delete arrimgs[i];
                });
              }
              var company='benzmuircroft@gmail.com';//---------------------------------------------------------------------company
              sendgrid.send({
                to      : hexDecode(_.e),
                from    : 'benzmuircroft@gmail.com',
                bcc     : 'benzmuircroft@gmail.com',
                subject : _.c+' Inventory report - '+d,
                
                files   : [{filename:_.c+' Inventory Report.pdf',content:data}],
                html    : '<div class="HEAD"style="position:relative;height:91px;width:100%;background:#FFF;">'+
                          '<div class="HEADC"style="position:relative;height:51px;width:320px;margin-left:auto;margin-right:auto;">'+
                          '<img src="http://quickreport.it/R/hsdemo.png"style="margin:5px;height:41px;outline:none;"href="http://www.hostingstudio.net"/>'+
                          '<img src="http://quickreport.it/R/qritlogo41.png"style="height:41px;float:right;margin:5px;outline:none;"href="http://quickreport.it"/>'+
                          '</div>'+
                          '<div class="topic"style="text-align:center;position:relative;height:30px;background:#FF6600;padding-top:20px;font-size:12px;"><b>Thank you for taking the time to complete your Inventory Report</b></div> '+
                          '</div>'+
                          '<div class="PAGE"style="position:relative;height:300px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:10px;text-align:left;">'+
                          'Please find attached your copy of the report for your own records.'+
                          '<br><br>'+
                          '<b>Have a nice day!</b>'+
                          '<br><br>'+
                          'The Hosting Studio Team'+
                          '<br><br>'+
                          '<br><br>'+
                          '<table><tbody><tr><td style="background:#eeeeee;width:320px;border-bottom:5px solid #FF734D;">'+
                          '<div style="color:#C8C8C8;margin:auto;width:320px;font-size:10px;">'+
                          '<b style="color:#999999;">Disclaimer:</b>'+
                          '<br><br>'+
                          'This e-mail, its content and any files transmitted with it are intended solely for the addressee(s) and may be legally privileged and/or confidential. '+
                          'Access by any other party is unauthorised without the express written permission of the sender.'+
                          'If you have received this e-mail in error you may not copy, forward or use the contents, attachments or information in any way.'+
                          'Please delete this e-mail from your system and contact the sender on:&nbsp;+44 (0)7729 455 151&nbsp; Any quotation contained in this '+
                          'e-mail is subject to our standard terms and conditions of sale, a copy of which is available on request. '+
                          'Although any attachments to this e-mail have been virus checked, the sender cannot accept liability in respect of any virus which has not been detected.'+
                          '<br><br></div></td><td></td></tr></tbody></table>'+
                          '</div>'
                },
              function(success,message){
                if(!success){
                  console.log(message);
                  socket.emit('invenetory_send.err');
                  }
                else{
                  console.log('sent');
                  socket.emit('invenetory.sent');
                  fs.unlink('public_html/img/'+_.c+'_'+_.propertyid+'.pdf');
                  }
              });
              console.log('pdf:tobase64data');});
          console.log('pdf:saved');});
          }
        doagain();
        });});});


//loo report

//sql location=hexEncode(looid)=[address]||[geolocation]




socket.on('save_loo_report',function(_){
  if(_.c==='demo3'){sqlvar=demo3_issues;}
  else{}
  sqlvar.query("INSERT INTO "+_.c+" (looid,choice,feedback,star,timeref) Values ('"+_.looid+"','"+((_.choice!=='|')?_.choice:'')+"','"+_.feedback+"','"+_.star+"','"+_.timeref+"')");
  //io.sockets.in(_.c).emit('put_loo_report',{'looid':_.looid,'choice':_.choice,'feedback':_.feedback,'star':_.star,'timeref':_.timeref});
  io.sockets.in(_.c).emit('new_loo_tally_data',{'looid':_.looid,'choice':_.choice,'feedback':_.feedback,'star':_.star,'timeref':_.timeref});
  });






//socket.on('get_loo_reports',function(_){
//  socket.join(_.c);
//  if(_.c==='demo3'){sqlvar=demo3_issues;}
//  else{}
//  sqlvar.query("SELECT * FROM "+_.c).on('row',function(r){
//   socket.emit('put_loo_report',{'looid':r.looid,'choice':r.choice,'feedback':r.feedback,'star':r.star,'timeref':r.timeref});
//    });
//  });




//socket.on('tally_loo_stats',function(_){
//  if(_.c==='demo3'){sqlvar=demo3_issues;}
//  else{}
//  var r1=0,r2=0,r3=0,r4=0,r5=0;
//  var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c10=0,c11=0,c12=0;
//  var people=0;
//  var feedbacks='';
//  sqlvar.query("SELECT * FROM "+_.c+" WHERE looid='"+_.looid+"'").on('row',function(r){
//    if(r.feedback){
//     feedbacks='@'+r.timeref+','+r.feedback+feedbacks;
//     }
//    people+=1;
//    if(r.star===1){r1+=1;}else
//    if(r.star===2){r2+=2;}else
//    if(r.star===3){r3+=3;}else
//    if(r.star===4){r4+=4;}else
//    if(r.star===5){r5+=1;}
//    var choice=r.choice.split('|');
//    for(var i=0;i<=choice.length;i++){
//      if(choice[i]==='1'){c1+=1;}else
//      if(choice[i]==='2'){c2+=2;}else
//      if(choice[i]==='3'){c3+=3;}else
//      if(choice[i]==='4'){c4+=4;}else
//      if(choice[i]==='5'){c5+=5;}else
//      if(choice[i]==='6'){c6+=6;}else
//      if(choice[i]==='7'){c7+=7;}else
//      if(choice[i]==='8'){c8+=8;}else
//      if(choice[i]==='9'){c9+=9;}else
//      if(choice[i]==='10'){c10+=10;}else
//      if(choice[i]==='11'){c11+=11;}else
//      if(choice[i]==='12'){c12+=12;}
//      }
//    }).on('end',function(){
//   socket.emit('loo_tally_data',{
//      'r1':r1,
//      'r2':r2,
//     'r3':r3,
//      'r4':r4,
//      'r5':r5,
//      'c1':c1,
//      'c2':c2,
//      'c3':c3,
//      'c4':c4,
//      'c5':c5,
//      'c6':c6,
//      'c7':c7,
//      'c8':c8,
//      'c9':c9,
//      'c10':c10,
//      'c11':c11,
//      'c12':c12,
//      'people':people,
//      'feedbacks':feedbacks
//      });
//    });
//  });







socket.on('tally_all_loo_stats',function(_){
  socket.join(_.c);
  if(_.c==='demo3'){sqlvar=demo3_issues;}
  else{}
  sqlvar.query("SELECT DISTINCT looid FROM "+_.c).on('row',function(r){
  var r1=0,r2=0,r3=0,r4=0,r5=0;
  var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0,c10=0,c11=0,c12=0;
  var people=0;
  var feedbacks='';
  sqlvar.query("SELECT * FROM "+_.c+" WHERE (looid='"+r.looid+"' && feedback NOT LIKE '*%')").on('row',function(r){
    if(r.update){console.log('found');}else{
      if(r.feedback){
        feedbacks='@'+r.timeref+','+r.feedback+feedbacks;
        }
      people+=1;
      if(r.star===1){r1+=1;}else
      if(r.star===2){r2+=1;}else
      if(r.star===3){r3+=1;}else
      if(r.star===4){r4+=1;}else
      if(r.star===5){r5+=1;}
      var choice=r.choice.split('|');
      for(var i=0;i<=choice.length;i++){
        if(choice[i]==='1'){c1+=1;}else
        if(choice[i]==='2'){c2+=1;}else
        if(choice[i]==='3'){c3+=1;}else
        if(choice[i]==='4'){c4+=1;}else
        if(choice[i]==='5'){c5+=1;}else
        if(choice[i]==='6'){c6+=1;}else
        if(choice[i]==='7'){c7+=1;}else
        if(choice[i]==='8'){c8+=1;}else
        if(choice[i]==='9'){c9+=1;}else
        if(choice[i]==='10'){c10+=1;}else
        if(choice[i]==='11'){c11+=1;}else
        if(choice[i]==='12'){c12+=1;}
        }}
    }).on('end',function(){
      if(r.update){
        socket.emit('loo_show_update',{'looid':r.looid,'review':r.update,'timeref':r.timeref});
      }else{
        socket.emit('loo_tally_data',{
          'looid':r.looid,
          'r1':r1,
          'r2':r2,
          'r3':r3,
          'r4':r4,
          'r5':r5,
          'c1':c1,
          'c2':c2,
          'c3':c3,
          'c4':c4,
          'c5':c5,
          'c6':c6,
          'c7':c7,
          'c8':c8,
          'c9':c9,
          'c10':c10,
          'c11':c11,
          'c12':c12,
          'people':people,
          'feedback':feedbacks
          });
      }
    });
    });//DISTINCT looid
  });





socket.on('send_looreview',function(_){
  if(_.c==='demo3'){sqlvar=demo3_issues;}
  else{}
  var feedbacks='';
  var allchoice='';
  var c={c1:0,c2:0,c3:0,c4:0,c5:0,c6:0,c7:0,c8:0,c9:0,c10:0,c11:0,c12:0};
  var stars={r1:0,r2:0,r3:0,r4:0,r5:0,avg:0};
  var timerefs=[];
  sqlvar.query("SELECT * FROM "+_.c+" WHERE (looid='"+_.looid+"' && update='')").on('row',function(r){
    var pipedchoice='|'+r.choice+'|';
    for(var i=1;i<=12;i++){if(pipedchoice.search(new RegExp("\\|"+i+"\\|"))!==-1){c['c'+i]+=1;}}
    if(r.star!==0){stars['r'+r.star]+=1;}
    timerefs.push(r.timeref);
    if(r.feedback){feedbacks='<b style="color:#999;">'+r.timeref+'</b><br><b>'+hexDecode(r.feedback)+'</b><br><br>'+feedbacks;}
    sqlvar.query("DELETE * FROM "+_.c+" WHERE id='"+r.id+"'");
  }).on('end',function(){
      stars.avg=((stars.r5*5)+(stars.r4*4)+(stars.r3*3)+(stars.r2*2)+(stars.r1*1))/(stars.r5+stars.r4+stars.r3+stars.r2+stars.r1);
      var allstars=stars.r5+'-'+stars.r4+'-'+stars.r3+'-'+stars.r2+'-'+stars.r1+'-'+stars.avg;
      var mindate=new Date(Math.min.apply(null,timerefs));
      var maxdate=new Date(Math.max.apply(null,timerefs));
      mindate=toString(mindate).replace(' GMT-0400 (EDT)','');
      maxdate=toString(maxdate).replace(' GMT-0400 (EDT)','');
      allchoice=(((c.c1!==0)?'1*'+c.c1+'|':'')+
                 ((c.c2!==0)?'2*'+c.c2+'|':'')+
                 ((c.c3!==0)?'3*'+c.c3+'|':'')+
                 ((c.c4!==0)?'4*'+c.c4+'|':'')+
                 ((c.c5!==0)?'5*'+c.c5+'|':'')+
                 ((c.c6!==0)?'6*'+c.c6+'|':'')+
                 ((c.c7!==0)?'7*'+c.c7+'|':'')+
                 ((c.c8!==0)?'8*'+c.c8+'|':'')+
                 ((c.c9!==0)?'9*'+c.c9+'|':'')+
                 ((c.c10!==0)?'10*'+c.c10+'|':'')+
                 ((c.c11!==0)?'11*'+c.c11+'|':'')+
                 ((c.c12!==0)?'12*'+c.c12+'|':'')+'|').replace('||','');
      //remove old update
     sqlvar.query("DELETE * FROM "+_.c+" WHERE looid='"+r.id+"' && update!=''");
      sqlvar.query("INSERT INTO "+_.c+" (looid,choice,feedback,star,timeref,update) Values ('"+_.looid+"','"+allchoice+"','"+mindate+' -'+maxdate+"','"+allstars+"','"+_.timeref+"','"+_.review+"')").on('end',function(){
        io.sockets.in(_.c).emit('loo_show_update',{'looid':_.looid,'review':_.review,'timeref':_.timeref});
        });
      var data=_.file.replace(/^data:image\/\w+;base64,/,"");
      var buffer=new Buffer(data,'base64');
      fs.writeFile('/home/engine/public_html/img/'+_.c+'_'+_.looid+'.png',buffer,function(err){
        fs.readFile('public_html/img/'+_.c+'_'+_.looid+'.png',function(err,data){
          sendgrid.send({
            to      : 'benzmuircroft@gmail.com',
            from    : 'benzmuircroft@gmail.com',
            subject : _.c+' Toilet '+_.looid+' Report',
            files   : [{filename:'performance.png',content:data,cid:'1234567890'}],
            html    : '<div class="HEAD"style="position:relative;height:91px;width:100%;background:#FFF;">'+
                      '<div class="HEADC"style="position:relative;height:51px;width:320px;margin-left:auto;margin-right:auto;">'+
                      '<img src="http://quickreport.it/R/hsdemo.png"style="margin:5px;height:41px;outline:none;"href="http://www.hostingstudio.net"/>'+
                      '<img src="http://quickreport.it/R/qritlogo41.png"style="height:41px;float:right;margin:5px;outline:none;"href="http://quickreport.it"/>'+
                      '</div>'+
                      '<div class="topic"style="text-align:center;position:relative;height:30px;background:#FF6600;padding-top:20px;font-size:12px;"><b>Toilet '+_.looid+' Report</b></div> '+
                      '</div>'+
                      '<div class="PAGE"style="position:relative;height:300px;width:320px;margin-left:auto;margin-right:auto;text-align:center;margin-top:10px;text-align:left;">'+
                      '<h2>Work Related Update:</h2>'+
                      hexDecode(_.review)+
                      '<br><br>'+
                      '<h2>Customer Feedback:</h2>'+
                      feedbacks+
                      '<br><br>'+
                      '<h2>Performance:</h2>'+
                      '<img src="cid:1234567890"/>'+
                      '<br><br>'+
                      '<br><br>'+
                      '<table><tbody><tr><td style="background:#eeeeee;width:320px;border-bottom:5px solid #FF734D;">'+
                      '<div style="color:#C8C8C8;margin:auto;width:320px;font-size:10px;">'+
                      '<b style="color:#999999;">Disclaimer:</b>'+
                      '<br><br>'+
                      'This e-mail, its content and any files transmitted with it are intended solely for the addressee(s) and may be legally privileged and/or confidential. '+
                      'Access by any other party is unauthorised without the express written permission of the sender.'+
                      'If you have received this e-mail in error you may not copy, forward or use the contents, attachments or information in any way.'+
                      'Please delete this e-mail from your system and contact the sender on:&nbsp;+44 (0)7729 455 151&nbsp; Any quotation contained in this '+
                      'e-mail is subject to our standard terms and conditions of sale, a copy of which is available on request. '+
                      'Although any attachments to this e-mail have been virus checked, the sender cannot accept liability in respect of any virus which has not been detected.'+
                      '<br><br></div></td><td></td></tr></tbody></table>'+
                      '</div>'
                      },
          function(success,message){
            if(!success){console.log(message);}
            else{console.log('sent');fs.unlink('public_html/img/'+_.c+'_'+_.looid+'.png');}
            });});});});});













//soundcloud
socket.on('soundcloud_join_track',function(_){socket.join(_.track);});

socket.on('soundcloud_server',function(_){console.log('soundcloud_server');
  io.sockets.in(_.track).emit('soundcloud:',{'track':_.track});
  });

socket.on('soundcloud_leave_track',function(_){socket.leave(_.track);});










*/








//------------------------------------------------------------------------------------------------thailand

var co='not_set';//=company from db array

var adminemail='quickreport.it@gmail.com';


function theday(){
    var today = new Date();
    var first = new Date(today.getFullYear(), 0, 1);
	return theDay = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
    }


var secroom='_';//for security alwasys store room on server session
var cid=0;


s[1].WHEN['http:??']=function(_){//socket.on('http:??',function(_){
	cid=_.c;
	var r='';
	hotel_issues.query("SELECT * FROM customers WHERE app='multi-language-hotel-mobile' AND id='"+_.c+"'")
		.on('row',function(r){
			co=r.users;
			console.log('>>>>>> '+co);
			s[1].WIRE('http:!!',{//socket.emit('http:!!',{
				'c':co,'cn':r.longname,
				'css':r.css,
				'nopass':r.nopass
				});//starts app for both admin and room
			});
};//);




s[1].WHEN['thailand_room.security']=function(_){console.dir(_);
	//var r='';
	//hotel_issues.query("SELECT * FROM customers WHERE app='multi-language-hotel-mobile'").on('row',function(res){r=(res)?res:{'users':'none'};}).on('end',function(){companys=r.users.split(',');co=($.inArray(_.c,companys)!==-1)?_.c:co;
	if(co!=='not_set'){sqlvar=hotel_issues;}
	var r='';
	if(sqlvar){sqlvar.query("SELECT * FROM "+co+" WHERE room='"+_.roomid+"' OR room='0'").on('row',function(res){console.log('res.room'+res.room+' '+(res.room==='0'));if(res.room==='0'){console.dir(res);adminemail=res.email;}else{r=res;}}).on('end',function(){
		console.log('_'+r.user+'_'+_.user+'_');
		if(((r)?r.user:'<*&^$££:::_=~###£%*()>')===_.user){
			secroom=_.roomid;
			console.dir(r);
			console.log('.................................................'+adminemail+' co='+co);
			s[1].WIRE('thailand_security.ok',{//socket.emit('thailand_security.ok',{
				'wakeup':r.wakeup,
				'minibar':r.minibar,
				'clean':r.clean,
				'laundry':r.laundry,
				'taxi':r.taxi,
				'feedback':r.feedback,
				'img':r.img,
				'email':((r.email!==undefined)?r.email:'not_set')
				});
			console.log('ok JOINING: '+co+'_'+_.roomid);
			s[1].JOIN(co+'_'+_.roomid);//socket.join(co+'_'+_.roomid);
			//
			sqlvar.query("SELECT * FROM ads WHERE "+co+"!='0' ORDER BY "+co).on('row',function(r){if(r.co!==0){
				s[1].WIRE('ads',{'ad':r.id+'@'+r.href});//socket.emit('ads',{'ad':r.id+'@'+r.href});
				}});
			}
		else{
			s[1].WIRE('thailand_security.error');//socket.emit('thailand_security.error');
			console.log('err2');
			}
	 	});}};//);//});




s[1].WHEN['thailand_admin.security']=function(_){//socket.on('thailand_admin.security',function(_){
	//var r='';
	//1
	//hotel_issues.query("SELECT * FROM customers WHERE app='multi-language-hotel-mobile'").on('row',function(res){r=(res)?res:{'users':'none'};}).on('end',function(){companys=r.users.split(',');co=($.inArray(_.c,companys)!==-1)?_.c:co;
	if(co!=='not_set'){sqlvar=hotel_issues;}
	var r='';
	if(sqlvar){sqlvar.query("SELECT * FROM "+co/*_.c*/+" WHERE room='0'").on('row',function(res){r=res;}).on('end',function(){
		console.log('_'+r.user+'_'+_.user);
		if(r.user===_.user){
			adminemail=r.email;
			console.log('.................................................'+adminemail+' co='+co);
			//
			qrcode = qr('https://quickreport.it/a.php?0&'+cid);
  			cells = qrcode.modules;
  			num=5;
  			qrsize=cells.length*num;
  			Canvas = require('../public_html/node_modules/canvas');
  			canvas=new Canvas(qrsize,qrsize);
  			ctx = canvas.getContext('2d');
  			for(var y = 0; y < cells.length ; ++y){
    			var row = cells[y];
    			for(var x = 0; x < row.length ; ++x){
      				ctx.fillStyle=row[x]?'#000':'#FFF';
      				ctx.fillRect((x*num),(y*num),num,num);
      				}}
  				s[1].WIRE('admin_qr:set',{'simple':canvas.toDataURL(),'url':'?0&'+cid});//socket.emit('admin_qr:set',{'simple':canvas.toDataURL(),'url':'?0&'+cid});
				//
			s[1].WIRE('thailand_security.ok');//socket.emit('thailand_security.ok');
			sqlvar.query("SELECT * FROM "+co/*_.c*/+" WHERE room!='0'").on('row',function(r){console.log(r.id);
			s[1].WIRE('thailand_admin.get.rooms',{//socket.emit('thailand_admin.get.rooms',{//---------------------------------------------------------------------------------------------------------------------!
				'xroom':r.room,
				'wakeup':r.wakeup,
				'minibar':r.minibar,
				'clean':r.clean,
				'laundry':r.laundry,
				'taxi':r.taxi,
				'feedback':r.feedback,
				'img':r.img,
				'timesent':r.time,
				'user':r.user
				});
			console.log('ok');
			s[1].JOIN(co+'_'+r.room);//socket.join(co+'_'+r.room);
			console.log('socket.join('+r.room+');');
			});
			s[1].JOIN(co);//socket.join(co/*_.c*/);
			}
		else{
			s[1].WIRE('thailand_security.error');//socket.emit('thailand_security.error');
			console.log('err');
			}
	 	});}};//);//});
	
	
var uploadedimg=0;


s[1].WHEN['thailand_upload_part']=function(_){//socket.on('thailand_upload_part',function(_){console.log('hi0');
  //if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  //else{}
  //console.log(_.roomid);
  sqlvar.query("UPDATE "+co/*_.c*/+" SET img='"+_.roomid+".png' WHERE room='"+_.roomid+"'").on('end',function(r){
    console.log('hi1');
    var data=_.file.replace(/^data:image\/\w+;base64,/,"");
    console.log('hi2');
    var buffer=new Buffer(data,'base64');
    fs.writeFile('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png',buffer,function(err){
      if(err){console.log(err+'!');}else{
      console.log('hi3');
      uploadedimg=1;
      s[1].WIRE('thailand_upload_part_done',{'id':0});//socket.emit('thailand_upload_part_done',{'id':0});//only one image box
      /*
      var c=new FTPClient();
      c.on('ready',function(){
        c.put('/home/engine/public_html/img/phuket/temp.'+_.c+'/'+_.roomid+'.png','/public_html/img/'+_.c+'/'+_.roomid+'.png',function(err){
          if (err) throw err;
          c.end();
          fs.unlink('/home/engine/public_html/img/phuket/temp.'+_.c+'/'+_.roomid+'.png',function(err){
            socket.emit('thailand_upload_part_done',{'id':0});//only one image box
            });
          });
        });
      c.connect(ftpkey);
      */
      }});
    });
  };//);



s[1].WHEN['thailand_send>']=function(_){//socket.on('thailand_send>',function(_){
    //if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
  	_.xroom=secroom;
  	_.roomid=secroom;
  	var d=new Date();
  	var thaitime=d.getUTCHours();
  	for(var i=1;i<=7;i++){console.log(i);if(thaitime<22){thaitime=thaitime+1;}else{thaitime=0;}}
  	_.timesent=(
  		((thaitime<10)?"0"+thaitime.toString():thaitime )+
  		':'+
  		((d.getUTCMinutes()<10)?"0"+d.getUTCMinutes().toString():d.getUTCMinutes())+
  		((thaitime<11)?'am':'pm')
  		);
  	_.day=theday();
  	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"wakeup='"+_.wakeup+"', "+
  	"minibar='"+_.minibar+"', "+
  	"clean='"+_.clean+"', "+
  	"laundry='"+_.laundry+"', "+
  	"taxi='"+_.taxi+"', "+
  	"feedback='"+_.feedback+"', "+
  	"time='"+_.timesent+"', "+
  	"day='"+_.day+"' "+
  	"WHERE room='"+_.roomid+"'").on('end',function(){
  		var rr='not_set';//where is img
  		sqlvar.query("SELECT img FROM "+co/*_.c*/+" WHERE room='"+_.xroom+"'").on('row',function(rr){
  			r=rr;
  		}).on('end',function(){
  			_.img=(r.img!==undefined)?r.img:r;
  		//_.room=secroom;
  		if(uploadedimg===1){
      		var ftp=new FTPClient();
      		ftp.on('ready',function(){
        		ftp.put('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png','/public_html/img/'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
         			if (err) throw err;
          			ftp.end();
          			//fs.unlink('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
          				_.rooms=[co+'_'+secroom];
            			s[1].SHOUT('thailand_sent>',_);//io.sockets.in(co+'_'+secroom).emit('thailand_sent>',_);//socket.emit('thailand_upload_part_done',{'id':0});//only one image box
            			adminfeedbackemailattachment(secroom,((_.feedback!=='no')?_.feedback:'An image was sent...'));
            		//});
            		});});
      		ftp.connect(ftpkey);
  			}
  		else{
  			_.rooms=[co+'_'+secroom];
  			console.dir(_);
  			s[1].SHOUT('thailand_sent>',_);//io.sockets.in(co+'_'+secroom).emit('thailand_sent>',_);
  			if(_.feedback!=='no'){adminfeedbackemail(secroom,_.feedback);}
  			}
  		});//where is img e
  		});													
	};//);




s[1].WHEN['saveemail']=function(_){//socket.on('saveemail',function(_){
	//if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"email='"+_.email+"' "+
  	"WHERE room='"+secroom+"'").on('end',function(r){console.log('email saved!');});
	};//);



s[1].WHEN['thailand_admin-send>']=function(_){//socket.on('thailand_admin-send>',function(_){
    //if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
  	var d=new Date();
  	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	//"wakeup='"+_.wakeup+"', "+
  	"minibar='"+_.minibar+"', "+
  	"clean='"+_.clean+"', "+
  	"laundry='"+_.laundry+"' "+//,
  	//"taxi='"+_.taxi+"', "+
  	//"feedback='"+_.feedback+"' "+
  	//"time='"+_.timesent+"' "+
  	"WHERE room='"+_.roomid+"'").on('end',function(r){
  		if(uploadedimg===1){
      		var ftp=new FTPClient();
      		ftp.on('ready',function(){
        		ftp.put('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png','/public_html/img/'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
         			if (err) throw err;
          			ftp.end();
          			//fs.unlink('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+_.roomid+'.png',function(err){
            			_.rooms=[co+'_'+_.roomid];
            			s[1].SHOUT('thailand_admin-sent>',_);//io.sockets.in(co+'_'+_.roomid).emit('thailand_admin-sent>',_);
            			thailand_email(co/*_.c*/,_.roomid);
            		//});
            		});});
      		ftp.connect(ftpkey);
  			}
  		else{
  			_.rooms=[co+'_'+_.roomid];
  			s[1].SHOUT('thailand_admin-sent>',_);//io.sockets.in(co+'_'+_.roomid).emit('thailand_admin-sent>',_);
  			thailand_email(co/*_.c*/,_.roomid);
  			}
  		});													
	};//);



function thailand_email(co/*_.c*/,room){
	//console.log(c+' '+room);
	//if(c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("SELECT email FROM "+co/*_.c*/+" WHERE room='"+room+"'").on('row',function(r){console.dir(r);
		//if(r.email.search('@yahoo')!==-1||r.email.search('@ymail')!==-1){
			//todo..
		//	}
		/*else if(r.email.search('@hotmail')!==-1||r.email.search('@live')!==-1||r.email.search('@outlook')!==-1){
			hotmail.sendMail({
        		subject:c+' update received...',
       			from:'quickreport.it@hotmail.com',
        		to:r.email,
        		html: 'Click this <b><a href="http://quickreport.it/'+c+'-room.php?qr='+room+'">link</a></b> to veiw your room update.'
        		},function(error,response){
        			if(error){console.log(error+'!!!!!!!!!!!!');socket.emit('email_send.err');}
        			else{console.log("Message sent: " + response.message);socket.emit('email_send.ok',{'result':'200:ok'});}});
					}*/
		//else if(r.email.search('@gmail')!==-1||r.email.search('@')!==-1){
			gmail.sendMail({
        		subject:co/*_.c*/+' update received...',
        		from:'quickreport.it@gmail.com',
        		to:r.email,
        		html: 'Click this <b><a href="http://quickreport.it/'+co/*_.c*/+'-room.php?qr='+room+'">link</a></b> to veiw your room update.'
       			 },function(error,response){
        			if(error){
        				console.log(error+'!!!!!!!!!!!!');
        				s[1].WIRE('email_send.err');//socket.emit('email_send.err');
        				}
        			else{
        				console.log("Message sent: " + response.message);
        				s[1].WIRE('email_send.ok',{'result':'200:ok'});//socket.emit('email_send.ok',{'result':'200:ok'});
        				}});
					//}
					});}
					
					
					
					
					
					
function adminfeedbackemail(room,feedback){
	sqlvar.query("SELECT email FROM "+co/*_.c*/+" WHERE room='0'").on('row',function(r){console.dir(r);
			console.log('.................................................'+adminemail);
			gmail.sendMail({
        		subject:'room: '+room+' update received...',
        		from:'quickreport.it@gmail.com',
        		to:adminemail,
        		html:feedback
       			 },function(error,response){
        			if(error){
        				console.log(error+'!!!!!!!!!!!!');
        				s[1].WIRE('email_send.err');//socket.emit('email_send.err');
        				}
        			else{
        				console.log("Message sent: " + response.message);
        				s[1].WIRE('email_send.ok',{'result':'200:ok'});//socket.emit('email_send.ok',{'result':'200:ok'});
        				}});
					});
					}
function adminfeedbackemailattachment(room,feedback){
	sqlvar.query("SELECT email FROM "+co/*_.c*/+" WHERE room='0'").on('row',function(r){console.dir(r);
			console.log('.................................................'+adminemail);
			gmail.sendMail({
        		subject:'room: '+room+' update received...',
        		from:'quickreport.it@gmail.com',
        		to:adminemail,
        		attachments:[{'fileName':'room.'+room+'.png','filePath':'/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+room+'.png'}],
        		html:feedback
       			 },function(error,response){
        			if(error){
        				console.log(error+'!!!!!!!!!!!!');
        				s[1].WIRE('email_send.err');//socket.emit('email_send.err');
        				}
        			else{
        				console.log("Message sent: " + response.message);
        				s[1].WIRE('email_send.ok',{'result':'200:ok'});//socket.emit('email_send.ok',{'result':'200:ok'});
        				fs.unlink('/home/engine/public_html/img/phuket/temp.'+co/*_.c*/+'/'+room+'.png',function(err){
        					/*var ftp=new FTPClient();
      						ftp.on('ready',function(){
        						ftp.delete('/public_html/img/'+co+'/'+room+'.png',function(err){
         							if (err) throw err;
          							ftp.end();
          							sqlvar.query("UPDATE "+co+" SET img='' WHERE room='"+room+"'").on('end',function(r){console.log('img wiped');});//don't wipe for staff
            						});});
      						ftp.connect(ftpkey);*/
        					});
        				}});
					});
					}



s[1].WHEN['destroy_notification']=function(_){//socket.on('destroy_notification',function(_){
	// if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	_.seen+"='no' "+
  	"WHERE room='"+secroom+"' AND "+_.seen+"='complete'").on('end',function(r){console.log(_.seen+' reset to no');});
	};//);





s[1].WHEN['now_wakeup']=function(_){//socket.on('now_wakeup',function(_){
	// if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"wakeup='no' "+
  	"WHERE room='"+_.room+"'").on('end',function(r){
  		_.rooms=[co+'_'+_.room];
  		s[1].SHOUT('*alarm*wakeup',_);//io.sockets.in(co+'_'+_.room).emit('*alarm*wakeup',_);
  		console.log('woke!');
  		});
	};//);

s[1].WHEN['now_taxi']=function(_){//socket.on('now_taxi',function(_){
	// if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"taxi='no' "+
  	"WHERE room='"+_.room+"'").on('end',function(r){
  		_.rooms=[co+'_'+_.room];
  		s[1].SHOUT('*alarm*taxi',_);//io.sockets.in(co+'_'+_.room).emit('*alarm*taxi',_);
  		console.log('taxi here!');
  		});
	};//);





s[1].WHEN['thailand_admin-checkout>']=function(_){//socket.on('thailand_admin-checkout>',function(_){
	if(_.c==='hotel'){sqlvar=hotel_issues;}//each company has own db // this is only a demo!!
  	//else{}
  	var d=new Date();
  	var thaitime=d.getUTCHours();
  	for(var i=1;i<=7;i++){console.log(i);if(thaitime<22){thaitime=thaitime+1;}else{thaitime=0;}}
  	_.timesent=(
  		((thaitime<10)?"0"+thaitime.toString():thaitime )+
  		':'+
  		((d.getUTCMinutes()<10)?"0"+d.getUTCMinutes().toString():d.getUTCMinutes())+
  		((thaitime<11)?'am':'pm')
  		);
  	sqlvar.query("UPDATE "+co/*_.c*/+" SET "+
  	"wakeup='"+_.wakeup+"', "+
  	"minibar='"+_.minibar+"', "+
  	"clean='"+_.clean+"', "+
  	"laundry='"+_.laundry+"', "+//,
  	"taxi='"+_.taxi+"', "+
  	"img='', "+
  	"feedback='"+_.feedback+"', "+
  	"time='"+_.timesent+"', "+
  	"user='"+_.user+"' "+
  	"WHERE room='"+_.xroom+"'").on('end',function(r){
  		_.user='changeto:'+_.user;
  		_.rooms=[co];//_.rooms=[co];
  		console.dir(_);
  		s[1].SHOUT('thailand_admin.get.rooms',_);//io.sockets.in(co/*_.c*/).emit('thailand_admin.get.rooms',_);
  		});
    };//);
    
    
    
s[1].WHEN['simple_qr:get']=function(_){//socket.on('simple_qr:get',function(_){
  //each hotel has a the same app different face
  qrcode = qr('https://quickreport.it/r.php?'+_.n+'&'+cid);
  cells = qrcode.modules;
  num=5;
  qrsize=cells.length*num;
  Canvas = require('../public_html/node_modules/canvas');
  canvas=new Canvas(qrsize,qrsize);
  ctx = canvas.getContext('2d');
  for(var y = 0; y < cells.length ; ++y){
    var row = cells[y];
    for(var x = 0; x < row.length ; ++x){
      ctx.fillStyle=row[x]?'#000':'#FFF';
      ctx.fillRect((x*num),(y*num),num,num);
      }}
  s[1].WIRE('simple_qr:set',{'simple':canvas.toDataURL(),'url':'?'+_.n+'&'+cid});//socket.emit('simple_qr:set',{'simple':canvas.toDataURL(),'url':'?'+_.n+'&'+cid});
  };//);








};//exports
