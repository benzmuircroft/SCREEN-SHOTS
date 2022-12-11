
window.avatarGen=function(){
    var p=['247ba070c1b3b2dbbff3ffbdff1654','5bc0ebfde74c9bc53de55934fa7921','bce7845dd39e348aa7525174513b56','ff4e008ea604f5bb00ec9f05bf3100','2b2d428d99aeedf2f4ef233cd90429','083d77ebebd3f4d35eee964bf95738','d3f8e2e4c1f9f694c1ede7b1a9def9','ffb997f67e7d843b620b032d74546a','1b998b2d3047fffd82ff9b71e84855','7ac74fa1cf6bd5d887e0c879e87461','e1ce7afbffb9fdd692ec7357754f44','4935484b4e6d6a8d9280b192a1e887','ceec97f4b393fc60a87a28cb494368','19381feee82c91cb3e53a5484c934c','885053fe5f55777da794c9a9c6ecae','757761f4e76ef7fe728ff7a751bbfe','395e66387d7a32936f26a96c2bc016','6a0136bfab25b81365026c7c055864','48639c4c4c9d712f79976391f7996e','ff4d80ff3e41df367c8839554c3549','edcb96f7c4a59e76826057704d4861','595f72575d9084a07cc3d350e6f14a','0010210347481481ba11b5e40caadc','96adc8d7ffabfcff6cd89d6a6d454c','337ca03ec300fffc31ff1d15e13700'];
    var n=Math.floor(Math.random()*p.length);
    p=p[n].match(/.{1,6}/g);
    for(var i=p.length-1;i>0;i--){var j=Math.floor(Math.random()*(i + 1));var t=p[i];p[i]=p[j];p[j]=t;}
    p[0]='#'+p[0];
    p[1]='#'+p[1];
    p[2]='#'+p[2];
    p[3]='#'+p[3];
    p[4]='#'+p[4];
    console.log(p);
    c=$('<canvas width="166" height="166"><canvas>')[0];
    var ↄ=canvas.getContext('2d')
    ,   a=166;
    ↄ.fillStyle=p[0];
    ↄ.clearRect(0,0,a,a);
    ↄ.fillRect(0,0,a-2,a-2);
    function s(c,ↄ,p){
        var o=[Math.floor(Math.random()*(15-0+1)),Math.floor(Math.random()*(15-0+1)),Math.floor(Math.random()*(15-0+1)),Math.floor(Math.random()*(15-0+1))];
        for(var i=0;i<o.length;++i){
            var xy=[[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3]][o[i]];
            var a=140/4;
            for(var y=0;y<4;++y){
                for(var x=0;x<4;++x){
                    if((y==xy[1])&&(x==xy[0])){
                        ↄ.beginPath();
                        ↄ.fillStyle=p;
                        ↄ.rect(12+(x*a),12+(y*a),a,a);
                        ↄ.fill();
                        ↄ.closePath();
                        }}}}return;}
    s(c,ↄ,p[1]);s(c,ↄ,p[2]);s(c,ↄ,p[3]);s(c,ↄ,p[4]);
    return c.toDataURL();
    }