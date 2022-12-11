
(function($){
    
    
    window.inviewport={};
    //window.spaceleft={X:$(window).width(),Y:$(window).height()}

    

    

    
    
    


    
    $.inviewport=function(e){
        //if(spaceleft.X<1&&spaceleft.Y<1){return false;}
        console.log('inviewport?');
        if(!$(e).hasClass('b')/*||$(e).hasClass('seen')*/){return false;}
        var c='b'+($(e).attr('class').match(/\d+/)[0]);//.attr('class').replace('b ','').replace(' seen','').replace(' mouse','');
        //var index=window.inviewport.indexOf(e[0]);
        var p = $(e).offset(),
            wX = $(window).scrollLeft(), wY = $(window).scrollTop(),
            wH = $(window).height(), wW = $(window).width(),
            oH = $(e).outerHeight(), oW = $(e).outerWidth();
        // check the edges
        if((p.left>=wX&&p.top>=wY&&oW+p.left<=wX+wW&&oH+p.top<=wY+wH)||(((p.left<=wX&&p.left+oW>wX)||(p.left>=wX&&p.left<=wX+wW))&&((p.top<=wY&&p.top+oH>wY)||(p.top>=wY&&p.top<=wY+wH)))){
            window.inviewport[c]=$(e);//[0];
            //spaceleft.X-=((p.left>=0)?p.left:wW-(oW-Math.abs(p.left)));
            //spaceleft.Y-=((p.top>=0)?p.top:wH-(oH-Math.abs(p.top)));
            return e;//fully / part visible
            }
        else{
            delete window.inviewport[c];
            return false;
            }};
    
    $.yourhere=function(e){
        var pos = $(e).offset(),
            wX = $(window).scrollLeft(), wY = $(window).scrollTop(),
            wH = $(window).height(), wW = $(window).width(),
            oH = $(e).outerHeight(), oW = $(e).outerWidth();
        // check the edges
        if((pos.left >= wX && pos.left <= wX + wW)&&(pos.top  >= wY && pos.top  <= wY + wH))return e;//here top left
        else return false;
        };
    
    
    $.extend($.expr[':'],{
        "in-viewport":function(a){return $.inviewport(a);},
        "your-here":function(a){return $.yourhere(a);}
        });
    
    })(jQuery);