<?php
$i=file_get_contents($_GET["img"]);
if(base64_encode(base64_decode($i))===$i){print $i;}
else{print base64_encode($i);}
?>
