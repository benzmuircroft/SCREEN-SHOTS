<?php
if(strpos($_GET["site"],'../')===false){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $_GET["site"]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_PROXY, $proxy); // $proxy is ip of proxy server
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $response = curl_exec($ch);
    if(strpos($_GET["site"],'.png')){
        $response=imagecreatefromstring($response);
        imagealphablending($response, false);
        imagesavealpha($response, true);
        imagepng($response,NULL,9);
        imagedestroy($response);
        }
    else if(strpos($_GET["site"],'.gif')){
        echo $response;
        }
    else{
        $response=imagecreatefromstring($response);
        imagejpeg($response,NULL,50);
        imagedestroy($response);
        }
    curl_close($ch);
    }
else{echo '';}
?>
