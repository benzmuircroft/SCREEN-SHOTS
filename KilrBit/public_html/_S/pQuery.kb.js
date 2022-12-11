Object.defineProperty(Array.prototype,"has",{
     enumerable:false
    ,value:function(x){return this.indexOf(x)!==-1;}
    });//Array.prototype.has=function(x){return this.indexOf(x)!==-1;};



var ᵽaper={};




var paper=window.paper||{project:{activeLayer:{},layers:[],ᵽ:{}}};
console.dir(paper);
var pQuery,ᵽ;

(function(){
    var ilog='background: #0099ff; color: #fff';
    pQuery=ᵽ=function(selector,options){
        return new _pQuery(selector,options);
        };
    ᵽ.help=function(selector,options){
        if(!selector){
            console.info("%c Selectors------------ ",ilog),
            console.info("%c _1                   select everything on layer 1 ",ilog),
            console.info("%c _@                   select everything on the ActiveLayer ",ilog),
            console.info("%c _@~                  select all open paths on the ActiveLayer ",ilog),
            console.info("%c ~                    select all open paths (lines) ",ilog),
            console.info("%c +                    select all closed paths (fills) ",ilog),
            console.info("%c &                    select all Groups ",ilog),
            console.info("%c $                    select all symbols ",ilog),
            console.info("%c =1                   select paprt.js object with numeric id 1 ",ilog),
            console.info("%c #myButton            select paprt.js object with name 'myButton' ",ilog),
            console.info("%c .bounces             select all objects with class 'bounces' ",ilog),
            console.info("%c $popular             select the symbol #named 'popular' ",ilog),
            console.info("%c $.bounces            select symbols with class 'bounces' ",ilog),
            console.info("%c !                    everything after '!' is not selected ",ilog),
            console.info("%c +!=21=34             select all fills except ids 21 and 34 ",ilog),
                //////////////////////////////////
            console.info("%c                      pQuery also accepts objects and arrays of objects.",ilog),
            console.info("%c A cached object      myVar=$('=5'); $(myVar);",ilog),
            console.info("%c many objects         $([object,object,object]) ",ilog),
            console.info("%c myVar.selected;      access paper.js methods ",ilog),
            console.info("%c myVar.each()         or wrapp around pQuery methods ",ilog),
            console.info("%c Methods-------------- ",ilog),
            console.info("%c full examples at     http:// ",ilog),
            console.info("%c each(job,done)       does a custom function and builds a matching array in $(array).results ",ilog),
            console.info("%c attr(a,b)            set or get properties much like jQuery returning $(array).results ",ilog),
            console.info("%c rename(newname)      name must be unique ",ilog),
            console.info("%c addClass             much like jQuery ",ilog),
            console.info("%c removeClass          much like jQuery ",ilog),
            console.info("%c Papeer.js api notes-- ",ilog),
            console.info("%c                      pQuery is built to handle paper.js paths",ilog),
            console.info("%c                      visit http://paperjs.org/reference/paths for full reference.",ilog),
            console.info("%c                      Some things are different in pQuery..",ilog),
            console.info("%c path.length          pQuery.pathLength",ilog),
            console.info("%c path.className       pQuery.pathShape",ilog),
            console.info("%c                      everything else in the paper.js api can be accessed normally.",ilog),
            console.info("%c $.chains('scale')    Ask if a pQuery/paper method/value is chainable returns true or false",ilog),
            console.info("%c $.chains(true)       or get a full list",ilog),
            console.info("%c $.chains(false)      ",ilog),
            console.info("%c Extentions----------- ",ilog),
            console.info("%c Example              $.install('colorChange',function(rgb){for(var i=0;i<this.length;i++){this[i].strokeColor=rgb;}return this;}); ",ilog),
            console.info("%c Use                  $('=1').colorChange('rgb(255,0,0)'); ",ilog),
            console.info("%c Uninstalling         $.uninstall('colorChange'); ",ilog);
                return;}
        else{//run a test
            var test=new _pQuery(selector,options,'test');
            console.info("%c test result:",ilog);
            return test;
            }}
    ᵽ.chains=function(what){
        var answer=false,
            yes=['each','attr','rename','addClass','removeClass','add','insert','addSegments','insertSegments','removeSegment','removeSegments','flatten','reduce','simplify','split','join','set','reverse','addChild','insertChild','addChildren','insertChildren','insertAbove','insertBelow','sendToBack','bringToFront','appendTop','appendBottom','moveAbove','moveBelow','reverseChildren','translate','rotate','scale','shear','skew','transform','fitBounds','on','off','removeOn','removeOnMove','removeOnDown','removeOnDrag','removeOnUp','smooth','moveTo','lineTo','cubicCurveTo','quadraticCurveTo','curveTo','arcTo','closePath','moveBy','lineBy','curveBy','cubicCurveBy','quadraticCurveBy','arcBy','unite','intersect','subtract','exclude','divide'],
            maybe=['style','name','visible','closed','blendMode','opacity','clipMask','data','position','strokeColor','strokeWidth','strokeCap','strokeJoin','dashOffset','strokeScaling','dashArray','miterLimit','windingRule','fillColor','selectedColor','onFrame','onMouseDown','onMouseUp','onClick','onDoubleClick','onMouseMove','onMouseEnter','onMouseLeave','fullySelected','selected','clockwise'],
            no=['tangent','normal','curvature','id','pathShape','pivot','bounds','strokeBounds','handleBounds','rotation','scaling','matrix','globalMatrix','applyMatrix','transformContent','project','view','layer','parent','children','firstChild','lastChild','nextSibling','previousSibling','index','segments','firstSegment','lastSegment','curves','firstCurve','lastCurve','pathLength','area','interiorPoint','pathData',,'removeChildren','replaceWith','remove','getLocationOf','getOffsetOf','getLocationAt','getPointAt','getTangentAt','getNormalAt','getCurvatureAt','getNearestPoint','clone','copyTo','rasterize','contains','isInside','intersects','hitTest','matches','getItems','getItem','exportJSON','importJSON','exportSVG','importSVG','isEmpty','hasFill','hasStroke','hasShadow','hasChildren','isInserted','isAbove','isBelow','isParent','isChild','isDescendant','isAncestor','isGroupedWith','globalToLocal','localToGlobal','parentToLocal','localToParent','emit','responds','getIntersections'];
        if(what===true){var i=maybe.length;while(i--){maybe[i]+=' only for set';}answer=yes.concat(maybe);}
        else if(what===false){answer=no.concat(["...arn't chainable, because they return an array of results instead of 'this'."]);}
        else if(yes.has(what)){answer=[true];}
        else if(maybe.has(what)){answer=['true only for set',"else it returns an array of results instead of 'this'."];}
        else if(no.has(what)){answer=[false,"as it returns an array of results instead of 'this'."];}
        else if(what=='length'){answer=["pQuery refers to 'length' through 'pathLength' instead"];}
        else if(what=='className'){answer=["pQuery refers to 'className' through 'pathShape' instead"];}
        else{console.error("ERR: expected true or false or a paper.js path value/method. (for a full chainable list type 'ᵽ.chains(true);')");return;}
        for(var i=0;i<answer.length;i++){console.info(answer[i]);}
        return;
        }
    ᵽ.install=function(apiName,apiFunction){
        pQuery.fn[apiName]=apiFunction;
        try{Object.defineProperty(pQuery.fn,apiName,{enumerable:false});}catch(err){}//renamed same as a previously installed extension.
        return;
        };
    ᵽ.uninstall=function(apiName){
        delete ᵽ.fn[apiName];
        return;
        };
    var _pQuery=function(get,options,test){
        (!options)&&(options={});
        var omit=false;
        var what=[
             '~'                           ,'+'                           ,'&'             ,'$'              ,'#'       ,'.'       ,'=']
        ,   _options=[
             '"type":"path","closed":false','"type":"path","closed":true','"type":"group"','"type":"symbol"','"name":?','"name":?','"id":?']
        ,   _q='',q=get,p=0,find,ERR=0,qwas='',that={}
        ,   layer=paper['project']
        ,   got=[],not=[]
        ,   queryParts=[],queryPart={part:'',paperjs:{},result:[]};
        if(typeof get=='string'){
            function updateQuery(){
                if((q=q.slice(p)).length&&(test)){console.log("query became shorter by "+p+" characters",q);}
                else{"query is empty";}
                p=0;
                return;
                }
            function called(x){
                var is,n='',info='';
                if(((is=(x[0]=='='))&&((n=((x.slice(1).match(/[a-zA-Z]+/)||'').length)?(n='ERR1'):((nn=x.slice(1).match(/\d+/)||0).length?nn:'ERR2')).length))||is){//will skip if not =, ERR if word, ok if '' or 0-9
                    info=_options[_options.length-1].replace('?','"'+n+'"');
                    if(n=='ERR1'){ERR=1;console.error("ERR: pQuery: '=id's are numerical only (=1=8=34) not =named.");return;}
                    else if(n=='ERR2'){ERR=2;console.error("ERR: pQuery: '=' must be followed by an item id (=1=8=34)");return;}
                    }
                else{
                    info=_options[what.indexOf(x[0])];
                    if((n=x.slice(1).match(/^[\w-]+\b/)||'').length){//looks for classes or names aZ09_ only
                        if(x[0]=='#'){info=(_options[what.indexOf(x[0])]).replace('?','"£^'+n+'£"');}
                        else if(x[0]=='.'){info=(_options[what.indexOf(x[0])]).replace('?','"£ .'+n+'£"');}
                        else{
                            info=_options[what.indexOf(x[0])]+','+(_options[what.indexOf('#')].replace('?','"£^'+n+'£"'));// found a type with a name
                            }}
                    else if(x[1]=='.'&&(n=x.slice(2).match(/^[\w-]+\b/)||'').length){
                        p+=1;
                        info=_options[what.indexOf(x[0])]+','+(_options[what.indexOf('.')].replace('?','"£ .'+n+'£"'));// found a type with a class name
                        }}
                p+=1+(((n[0])&&(n[0].length)||0));
                queryPart.part=q.slice(0,p);
                try{info=JSON.parse('{'+info+'}');}catch(err){ERR=3;console.error("ERR: pQuery: '"+x[0]+"' must be followed by a name (A-Za-z0-9-_). NAME_ERR: "+'{'+info+'}');return;}
                for(var k in info){if(info[k][0]=='£'){info[k]=new RegExp(info[k].slice(1,info[k].length-1)+'\\b');}}
                return info;
                }
            function selector(){
                var R={};
                if(what.has(_q=q[0])){
                    _q=called(q.slice(p));
                    if(ERR==0){
                        R=_q;
                        }
                    else{
                        p=0;q='';got=[];
                        }}
                return R;
                }
            function getItems(put,opts){
                find=selector();
                updateQuery();
                if(opts){
                    for(var i in opts){find[i]=opts[i];}
                    }
                if(find.id){find.id=parseInt(find.id);}
                if(test){var paperjs=find;(find.name)&&(paperjs.name="'"+find.name+"'");queryPart.paperjs=JSON.stringify(paperjs);}
                var result;
                try{
                    var result=[];
                    for(var i=layer.children.length-1;i+1;--i){//re-write get items (needs to include exotic shape types)
                        for(var k in find){if(layer.children[i][k]==find[k]){result.push(layer.children[i]);}}
                        }
                    }catch(err){ERR=5;console.error("ERR: pQuery cannot find "+(paper?"the layer":"paper.js")+": "+err);return false;}
                if(!result.length){result=[];}
                (test)&&(console.info("%c '"+queryPart.part+"' told paper.js "+queryPart.paperjs+" ",ilog),console.log("result:",result));
                return put.concat(result);
                }
            function handleParts(){
                if(q.length){
                    if(q[0]=='!'){
                        (test)&&(console.info("%c '"+q[0]+"' told paper.js to omit all of the following results: ",ilog));
                        omit=true;
                        p+=1;
                        updateQuery();
                        not=getItems(not,{});
                        }
                    else if(omit){
                        not=getItems(not,{});
                        }
                    else{
                        got=getItems(got,options);
                        }
                    if(q=='?'){q='';p+=1;}
                    updateQuery();
                    if(q.length){
                        if(qwas==q){ERR=6;console.error("ERR: pQuery: bad sellector '"+get+"', UNREADABLE at >'"+q+"'");q='';return;}qwas=q;
                        next();
                        }}
                    return;
                    }
            function next(){
                handleParts();
                return q.length;
                }
            function isLayer(){
                if(q[0]=='_'||q[1]=='@'){
                    p+=1;
                    if(_q=q.slice(1).match(/^\d+/)){//store number for layer
                        layer=paper['project']['layers'][_q];
                        p=_q.length+1;
                        }
                    else{//is an @
                        p=2;
                        if(q[0]=='_'){//active layer
                            layer=paper['project']['activeLayer'];
                            }
                        else{
                            layer=paper['project']['layers'];//,q[0]; is ] sign at the moment unusable   (so this selects all layers) TODO make this better / more flexable
                            }}}
                    else if(q[0]=='ʭ'){
                        p+=1;
                        if(q[1]=='G'){//global
                            p+=1;
                            layer=paper['project']['layers'][0].getItem({type:"group"});
                            }}
                return layer;
                }
            if(test){console.info("%c layer: "+((isLayer())?'':'ENOENT'),ilog,layer);}
            else{isLayer();}
            updateQuery();
            next();//artificial loop, when done drops out
            for(var i=0;i<got.length;i++){
                if((got[i].name||'').match(/^canvas\-pro\.project\.tools\./)){got[i]=undefined;continue;}
                for(var x=0;x<not.length;x++){if(got[i]){if(got[i].matches(not[x])){got[i]=undefined;}}}//things in not
                for(var d=0;d<got.length;d++){if(!got[d]){continue;}if(got[i]){if(got[i].matches(got[d])&&(i!==d)){got[i]=undefined;}}}//duplicate items
                }
            for(var u=0;u<got.length;u++){if(got[u]===undefined){got.splice(u,1);u--;}}//clean undefined gots
            }
        else if(typeof get=='object'){
            got=[get];
            }
        else if(typeof get=='array'){
            got=get;
            }
        else{
            ERR=4;
            console.error("ERR: pQuery: ᵽ('[INVALID]') accepts only pQuery strings, paper.js objects or an array of such.");
            }
        for(var i=0;i<got.length;i++){that[i]=got[i]};
        that.length=got.length;
        for(var i in ᵽaper){delete ᵽaper[i];}
        for(var i in that){this[i]=that[i];ᵽaper[i]=that[i];}
        return ((!ERR)?this:[]);
        };
    pQuery.fn=_pQuery.prototype={};
    Object.defineProperties(_pQuery.prototype,{
        //pQuery api
         each:{value:function(perform,callback){var that=this;that.result=[];function next(i){if(i<that.length){iterator(that[i],i);}else{callback(that);}}function iterator(v,i){that.result[i]=perform(v,i);i+=1;next(i);}iterator(that[0],0);},enumerable:false}
        ,attr:{value:function(mulitple_single,single){delete this.result;if(typeof mulitple_single=='string'&&typeof single=='string'){for(var i=0;i<this.length;i++){this[i][mulitple_single]=single;}}else if(typeof mulitple_single=='object'){for(var i=0;i<this.length;i++){for(var key in mulitple_single){this[i][key]=mulitple_single[key];}}}else if(typeof mulitple_single=='string'){this.result=[];for(var i=0;i<this.length;i++){this.result[i]=this[i][mulitple_single];}}return this;},enumerable:false}
        ,rename:{value:function(newname){var index;for(var i=0;i<this.length;i++){index=undefined;if(this[i].name==undefined){this[i].name=newname;}else if(index=(this[i].name.match(/^[\w-]+\b/)||[0])[0].length){this[i].name=newname+this[i].name.slice(index);}}return this;},enumerable:false}
        ,addClass:{value:function(add){var index;add=add.split(' ');for(var v=0;v<add.length;v++){for(var i=0;i<this.length;i++){index=undefined;if(index=((this[i].name+' ').match(new RegExp(' .'+add[v]+' '))||{index:undefined}).index){}else{this[i].name+=(' .'+add[v]);}}}return this;},enumerable:false}
        ,removeClass:{value:function(rem){rem=rem.split(' ');var index;for(var v=0;v<rem.length;v++){for(var i=0;i<this.length;i++){index=undefined;if(index=((this[i].name+' ').match(new RegExp(' .'+rem[v]+' '))||{index:undefined}).index){this[i].name=this[i].name.slice(0,index)+this[i].name.slice(index+(2+rem[v].length));}}}return this;},enumerable:false}
        //paper api read only
        ,tangent:{get:function(){               var f='tangent',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,normal:{get:function(){                var f='normal',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,curvature:{get:function(){             var f='curvature',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,id:{get:function(){                    var f='id',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,pathShape:{get:function(){             var f='pathShape',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}//api redirect
        ,pivot:{get:function(){                 var f='pivot',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,bounds:{get:function(){                var f='bounds',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,strokeBounds:{get:function(){          var f='strokeBounds',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,handleBounds:{get:function(){          var f='handleBounds',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,rotation:{get:function(){              var f='rotation',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,scaling:{get:function(){               var f='scaling',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,matrix:{get:function(){                var f='matrix',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,globalMatrix:{get:function(){          var f='globalMatrix',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,applyMatrix:{get:function(){           var f='applyMatrix',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,transformContent:{get:function(){      var f='transformContent',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,project:{get:function(){               var f='project',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,view:{get:function(){                  var f='view',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,layer:{get:function(){                 var f='layer',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,parent:{get:function(){                var f='parent',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,children:{get:function(){              var f='children',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,firstChild:{get:function(){            var f='firstChild',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,lastChild:{get:function(){             var f='lastChild',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,nextSibling:{get:function(){           var f='nextSibling',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,previousSibling:{get:function(){       var f='previousSibling',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,index:{get:function(){                 var f='index',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,segments:{get:function(){              var f='segments',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,firstSegment:{get:function(){          var f='firstSegment',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,lastSegment:{get:function(){           var f='lastSegment',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,curves:{get:function(){                var f='curves',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,firstCurve:{get:function(){            var f='firstCurve',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,lastCurve:{get:function(){             var f='lastCurve',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,pathLength:{get:function(){            var f='pathLength',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}//api redirect
        ,area:{get:function(){                  var f='area',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,interiorPoint:{get:function(){         var f='interiorPoint',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        ,pathData:{get:function(){              var f='pathData',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},enumerable:false}
        //paper api read & write
        ,style:{get:function(){                 var f='style',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='style';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,name:{get:function(){                  var f='name',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='name';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,visible:{get:function(){               var f='visible',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='visible';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,closed:{get:function(){                var f='closed',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='closed';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,blendMode:{get:function(){             var f='blendMode',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='blendMode';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,opacity:{get:function(){               var f='opacity',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='opacity';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,clipMask:{get:function(){              var f='clipMask',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='clipMask';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,data:{get:function(){                  var f='data',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='data';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,position:{get:function(){              var f='position',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='position';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,strokeColor:{get:function(){           var f='strokeColor',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='strokeColor';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,strokeWidth:{get:function(){           var f='strokeWidth',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='strokeWidth';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,strokeCap:{get:function(){             var f='strokeCap',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='strokeCap';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,strokeJoin:{get:function(){            var f='strokeJoin',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='strokeJoin';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,dashOffset:{get:function(){            var f='dashOffset',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='dashOffset';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,strokeScaling:{get:function(){         var f='strokeScaling',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='strokeScaling';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,dashArray:{get:function(){             var f='dashArray',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='dashArray';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,miterLimit:{get:function(){            var f='miterLimit',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='miterLimit';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,windingRule:{get:function(){           var f='windingRule',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='windingRule';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,fillColor:{get:function(){             var f='fillColor',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='fillColor';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,selectedColor:{get:function(){         var f='selectedColor',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='selectedColor';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,onFrame:{get:function(){               var f='onFrame',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onFrame';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return;},enumerable:false}
        ,onMouseDown:{get:function(){           var f='onMouseDown',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onMouseDown';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,onMouseUp:{get:function(){             var f='onMouseUp',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onMouseUp';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,onClick:{get:function(){               var f='onClick',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onClick';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,onDoubleClick:{get:function(){         var f='onDoubleClick',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onDoubleClick';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,onMouseMove:{get:function(){           var f='onMouseMove',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onMouseMove';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,onMouseEnter:{get:function(){          var f='onMouseEnter',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onMouseEnter';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,onMouseLeave:{get:function(){          var f='onMouseLeave',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='onMouseLeave';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,fullySelected:{get:function(){         var f='fullySelected',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='fullySelected';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,selected:{get:function(){              var f='selected',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='selected';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        ,clockwise:{get:function(){             var f='clockwise',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f];}return r;},
            set:function(value){                var f='clockwise';for(var i=0;i<this.length;i++){this[i][f]=value;}delete this[f];return this;},enumerable:false}
        //paper.js api chainable methods
        ,add:{value:function(a){                var f='add';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,insert:{value:function(a,b){           var f='insert';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,addSegments:{value:function(a){        var f='addSegments';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,insertSegments:{value:function(a,b){   var f='insertSegments';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,removeSegment:{value:function(a){      var f='removeSegment';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,removeSegments:{value:function(a,b){   var f='removeSegments';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,flatten:{value:function(a){            var f='flatten';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,reduce:{value:function(){              var f='reduce';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,simplify:{value:function(a){           var f='simplify';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,split:{value:function(a,b){            var f='split';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,join:{value:function(a){               var f='join';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,set:{value:function(a){                var f='set';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,reverse:{value:function(){             var f='reverse';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,addChild:{value:function(a){           var f='addChild';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,insertChild:{value:function(a,b){      var f='insertChild';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,addChildren:{value:function(a){        var f='addChildren';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,insertChildren:{value:function(a,b){   var f='insertChildren';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,insertAbove:{value:function(a){        var f='insertAbove';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,insertBelow:{value:function(a){        var f='insertBelow';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,sendToBack:{value:function(a){         var f='sendToBack';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,bringToFront:{value:function(a){       var f='bringToFront';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,appendTop:{value:function(a){          var f='appendTop';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,appendBottom:{value:function(a){       var f='appendBottom';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,moveAbove:{value:function(a){          var f='moveAbove';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,moveBelow:{value:function(a){          var f='moveBelow';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,reverseChildren:{value:function(){     var f='reverseChildren';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,translate:{value:function(a){          var f='translate';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,rotate:{value:function(a,b){           var f='rotate';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,scale:{value:function(a,b,c){          var f='scale';for(var i=0;i<this.length;i++){this[i][f](a,b,c);}return this;},enumerable:false}
        ,shear:{value:function(a,b,c){          var f='shear';for(var i=0;i<this.length;i++){this[i][f](a,b,c);}return this;},enumerable:false}
        ,skew:{value:function(a,b,c){           var f='skew';for(var i=0;i<this.length;i++){this[i][f](a,b,c);}return this;},enumerable:false}
        ,transform:{value:function(a){          var f='transform';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,fitBounds:{value:function(a,b){        var f='fitBounds';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this},enumerable:false}
        ,on:{value:function(a,b){               var f='on';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,off:{value:function(a,b){              var f='off';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,removeOn:{value:function(a){           var f='removeOn';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,removeOnMove:{value:function(){        var f='removeOnMove';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,removeOnDown:{value:function(){        var f='removeOnDown';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,removeOnDrag:{value:function(){        var f='removeOnDrag';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,removeOnUp:{value:function(){          var f='removeOnUp';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,smooth:{value:function(){              var f='smooth';for(var i=0;i<this.length;i++){this[i][f]();}return this;},enumerable:false}
        ,moveTo:{value:function(a){             var f='moveTo';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,lineTo:{value:function(a){             var f='lineTo';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,cubicCurveTo:{value:function(a,b,c){   var f='cubicCurveTo';for(var i=0;i<this.length;i++){this[i][f](a,b,c);}return this;},enumerable:false}
        ,quadraticCurveTo:{value:function(a,b){ var f='quadraticCurveTo';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,curveTo:{value:function(a,b,c){        var f='curveTo';for(var i=0;i<this.length;i++){this[i][f](a,b,c);}return this;},enumerable:false}
        ,arcTo:{value:function(a,b){            var f='arcTo';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,closePath:{value:function(a){          var f='closePath';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,moveBy:{value:function(a){             var f='moveBy';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,lineBy:{value:function(a){             var f='lineBy';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,curveBy:{value:function(a,b,c){        var f='curveBy';for(var i=0;i<this.length;i++){this[i][f](a,b,c);}return this;},enumerable:false}
        ,cubicCurveBy:{value:function(a,b,c){   var f='cubicCurveBy';for(var i=0;i<this.length;i++){this[i][f](a,b,c);}return this;},enumerable:false}
        ,quadraticCurveBy:{value:function(a,b){ var f='quadraticCurveBy';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,arcBy:{value:function(a,b){            var f='arcBy';for(var i=0;i<this.length;i++){this[i][f](a,b);}return this;},enumerable:false}
        ,unite:{value:function(a){              var f='unite';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,intersect:{value:function(a){          var f='intersect';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,subtract:{value:function(a){           var f='subtract';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,exclude:{value:function(a){            var f='exclude';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        ,divide:{value:function(a){             var f='divide';for(var i=0;i<this.length;i++){this[i][f](a);}return this;},enumerable:false}
        //paper.js api non-chainable methods
        ,removeChildren:{value:function(a,b){   var f='removeChildren',r=[];for(var i=0;i<this.length;i++){r[i]=this[i].children;this[i][f](a,b);}return r;},enumerable:false}
        ,replaceWith:{value:function(a){        var f='replaceWith',r=[];for(var i=0;i<this.length;i++){r[i]=this[i];this[i][f](a);}return r;},enumerable:false}
        ,remove:{value:function(){              var f='remove',r=[];for(var i=0;i<this.length;i++){r[i]=this[i];this[i][f]();}return r;},enumerable:false}
        ,getLocationOf:{value:function(a){      var f='getLocationOf',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,getOffsetOf:{value:function(a){        var f='getOffsetOf',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,getLocationAt:{value:function(a,b){    var f='getLocationAt',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,getPointAt:{value:function(a,b){       var f='getPointAt',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,getTangentAt:{value:function(a,b){     var f='getTangentAt',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,getNormalAt:{value:function(a,b){      var f='getNormalAt',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,getCurvatureAt:{value:function(a,b,c){ var f='getCurvatureAt',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b,c);}return r;},enumerable:false}
        ,getNearestPoint:{value:function(a){    var f='getNearestPoint',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,clone:{value:function(a){              var f='clone',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,copyTo:{value:function(a){             var f='copyTo',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,rasterize:{value:function(a){          var f='rasterize',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,contains:{value:function(a){           var f='contains',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,isInside:{value:function(a){           var f='isInside',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}



        ,intersects:{value:function(a,bool){    var f='intersects',r=[];
            if(bool!==undefined){
                for(var i=0;i<this.length;i++){
                    if(bool&&this[i][f](a)){
                        r.push(this[i]);
                        }
                    else if(!bool&&!this[i][f](a)){
                        r.push(this[i]);
                        }}
                for(var i=0;i<this.length;i++){delete this[i];}
                for(var i=0;i<r.length;i++){this[i]=r[i];}
                this.length=r.length;
                }
            else{
                for(var i=0;i<this.length;i++){
                    r[i]=this[i][f](a);
                    }}
            return ((bool!==undefined)?this:r);},enumerable:false}//return array of boolian values or refine filter the selected items to only bool





        ,hitTest:{value:function(a,b){          var f='hitTest',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,matches:{value:function(a,b){          var f='matches',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,getItems:{value:function(a){           var f='getItems',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,getItem:{value:function(a){            var f='getItem',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,exportJSON:{value:function(a){         var f='exportJSON',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,importJSON:{value:function(a){         var f='importJSON',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,exportSVG:{value:function(a){          var f='exportSVG',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,importSVG:{value:function(a,b){        var f='importSVG',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,isEmpty:{value:function(){             var f='isEmpty',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f]();}return r;},enumerable:false}
        ,hasFill:{value:function(){             var f='hasFill',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f]();}return r;},enumerable:false}
        ,hasStroke:{value:function(){           var f='hasStroke',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f]();}return r;},enumerable:false}
        ,hasShadow:{value:function(){           var f='hasShadow',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f]();}return r;},enumerable:false}
        ,hasChildren:{value:function(){         var f='hasChildren',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f]();}return r;},enumerable:false}
        ,isInserted:{value:function(){          var f='isInserted',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f]();}return r;},enumerable:false}
        ,isAbove:{value:function(a){            var f='isAbove',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,isBelow:{value:function(a){            var f='isBelow',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,isParent:{value:function(a){           var f='isParent',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,isChild:{value:function(a){            var f='isChild',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,isDescendant:{value:function(a){       var f='isDescendant',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,isAncestor:{value:function(a){         var f='isAncestor',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,isGroupedWith:{value:function(a){      var f='isGroupedWith',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,globalToLocal:{value:function(a){      var f='globalToLocal',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,localToGlobal:{value:function(a){      var f='localToGlobal',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,parentToLocal:{value:function(a){      var f='parentToLocal',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,localToParent:{value:function(a){      var f='localToParent',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,emit:{value:function(a,b){             var f='emit',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        ,responds:{value:function(a){           var f='responds',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a);}return r;},enumerable:false}
        ,getIntersections:{value:function(a,b){ var f='getIntersections',r=[];for(var i=0;i<this.length;i++){r[i]=this[i][f](a,b);}return r;},enumerable:false}
        });}());





















/*





$('_@#name').addClass('foo').removeClass('baz');
$('_@#name').rename('newname');

//short hand: anything past optional ! is not selected!!

$('_@!.class')//names class

$('_@#name')//name

$('_@=22')//id

//motivation:

pQuery('_@~+$',{overlapping:rectangleArea});
pQuery('_@!#canvas-pro',{overlapping:rectangleArea});




project.activeLayer.getItems({name:ᐁ.$.not.tools,overlapping:rectangleArea});

//^(?!canvas\-pro\.project\.tools\.)/

//(\.\bfoo\b)/    //  would get classes of foo

$("_1")//all things on the layer 1
$("_@")//all things on the activeLayer
$("[@")//all things on all layers above active layer
$("]@")//all things on all layers below active layer



*/


/*
var mouse =new paper.Path.Circle(new paper.Point(5,5), 5);
mouse.fillColor = 'red';
mouse.visible = true;
mouse.position+=event.delta;
*/



//resuse libry bridge remains original clone

//image imports dont alter original


//save as png, gif, htmlCssJs, base64, share, jsfiddle? app-2-app

//code: frame or symbol/frame and colors just paper js

//undo: undo x user.setting or from user.setting.backup folder + note: (them you selected/deleted/changed tool)

//project name propt at start? or random??

//i think that the user should not be prompted to first name the project
//instead they should have a non  intrusive option they decide to set to default
//which makes it that they require projects to be prenamed
//this makes symbols not ever coflict when improted from other projects

//time stamp symbols: format: simbol-1425003550336 === can show library in order


//brush done setting: make strokes direct to canvas?  make all the strokes into a symbol?



//ok got it! the loading screen will show a hint that lets you learn and not show hints.
//the help starts with tools you have recently used
//help has search or help select item you don't understand > right click the item and ask for help...



//transform line, default, custom1, etc... (original line = path visible false)



//dpi?????


//change canvas area
//change canvas zoom
//change canvas 0.0 position

//save image as

//import object: json format// code for a symbol is added to the data attr for the symbol then mounted back un-serialised to its timeframe


//price = free. addons/brush-sets/item-packs are paid/free


//export to desktop (to upload youself)
//pay 1.99 per month no contract to host online you get an embed weblink widjet.


/*



A canvas based flash


There would be layers

each user defined layer would be a canvas but things on the canvas would be thought of as separate as an interactive layer 
for that canvas would identify things as seperately mouldable.

difference between symbol and shape

a shape can be choped by another shape but a symbol can't. a shap sits on the floor

a symbol must be edited, can contain other shapes and can sit higher than the floor.


]*/

/*
layers=[

    [//layer 0
        [['x','y'],{'fill':'#000','line':0,'lineCap':'round'},[['x','y'],['x','y'],{'beiser-curve-instruction?'},['x','y']]],//to handle curves?
        {//a symbol is just an object
            [['x','y'],{'fill':'#000','line':0,'lineCap':'round'},['x','y'],['x','y'],['x','y']]],
            [['x','y'],{'fill':''    ,'line':0,'lineCap':'round'},[['x','y'],['x','y'],['x','y']]],
            [['x','y'],'zoom','z-index','rotation']
        }
    ],
    [//layer 1
        [['x','y'],{'fill':'#000','line':0,'lineCap':'round'},[['x','y'],['x','y'],['x','y']]]
    ]

];
*/




/*

to cut a hole ??

_____________
V     |     |
V     |     |
|    / \    |
|    \_/    |
|           |
|           |
|___________|


how do I exclude parts that are outside what is being drpped on and how do I update the shape???

events:
    beforeDrop: if dragging on every mouse move get dragged obj coordinates
    afterDrop: if dropped cowardinates are less than other.each coordinates then what are the ones inside and do any lead outside. then subtract/build new lines?????
    also if same color then dont cut!
    
    this will also apply to points dragged... will i have to manipulate two shapes?
    
    maybe settings touching: [id1,id2,id3]
    
    if i was to pick a whole shape up i would first click to select then drag and drop,
    or i could grab a point and move... this would be the same action as drag, but the shap being dragged now is not moving but instead is going to be a different shape
    when dropped.... what changes is the xy is offset to the same position - the new movment. so the shape looks like it has not moved.


*/





//a timeline could be like setTimeout nextFrame()

//on keyframe function




//the app could spit out a png, base64 or html file





/*

tools:
    line
    shape: elips, rect, poligon, star
    fill: color, gradient-css, img
    eraser
    zoom
    resize/rotate/skew + imgfill ((also must let the user change the center point)
    break
    line-to-fill
    img-to-Vector
    effect: pixle magick (still remember points, but longer render time)
    lassoo
    text
    picker: text, fill, line, brush, default=any
    snap on/off + intensity
    clipboard
    brush ------ this will be the killer
    canvas: (the area is huge but the canvas is at 0,0 and has h,w and will only spit out that area!!)
    onion: a symbol can be seen as onion, by click, then onion, to un-onion do the reverse or right click

modules:
    properties (this could be just tool settings)
    color/swatches/imgs
    pharagraph
    tweening?
    layers/timeframe
    
    
    
    
code: each item can be assigned events click, hover ect...

*/


//brush can be a list of where to put a cached thing -.--.-.---..-.-.---.-
// with pixle magick effects added
//so more blur on the brush?

//can I blur an area of an image?????? can i access it as a mask??




//the tools will greyout if the option is not availabe under a shape/symbol




/*

blind selection and snapping:


I want turn magnet on/off

pulling a point with magnet on over two points? === closest > farthest

and x y has to snap! (but how? we need rules)

snap could auto reduce (shows visually then resets eather after drop or afer total loss)...snap will return to user setting and also give you option to user last used snap %
this would help the user who is hovering/struggling to place something at current snap not working.

with magnet off things are hard to select = no (same as snap on, but no rule of where things are dropped, no locking what-so-ever)


---------



blind selection

show points and curves
selected objects have blue outline or real outline.
selected shapes have dots
when click happens preview move /\ on top or realtime drag?
when drag symbol realtime or alpha real or outline or both...?

*/




//right click can edit any settings in properties eg: color, onion-off/on







/*




big shape is star

small shape is star

drag small over big =

now i need three shapes






*/



//http://perfectionkills.com/exploring-canvas-drawing-techniques/






