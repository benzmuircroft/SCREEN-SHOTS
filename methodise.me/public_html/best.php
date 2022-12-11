<?php
date_default_timezone_set('Africa/Lagos');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<html>
    <head>
        <script src="https://methodise.me/S/jquery-3.3.1.min.js"></script>
        <link rel="stylesheet" href="ui.css?<?php echo strtotime(date("Y-m-d H:i:s"));?>">
        <style>
            body{background:#edc102;}
        </style>
    </head>
    <body>
        <?php

        $newest=file_get_contents('http://methodise.me:10001/newest');

        echo file_get_contents(
            'http://methodise.me:10001/find?published='.$newest
            /*.'truth-agenda21terrorismfm-911,jamiedlux,cannabis-bad-mkay,learn-to-build-the-map,earn-money-from-your-research-now,health-circulatorysystem,health-endocrinesystem,health-immunelymphaticsystem,health-integumentaryexocrinesystem,health-nervoussystem,health-renalurinarysystem,health-reproductivesystem,health-respiratorysystem,health-skeletalsystem,health-healthhazardstoavoid,health-healthylifestyleimprovements,QdilN9dOb,QfLqNzbYV,flowers-a-zlisting,flowers-ediblevarieties,flowers-floraldesignsofcreation,flowers-flowervarieties,flowers-gardenartideas,flowers-gardenhacks,flowers-healthfromyourgarden,truth-geochemtrailsurvival,truth-geohumanexperimentation,truth-geohaarpmindcontrolnanotech,creationsevidence-20left-handedaminoacids,creationsevidence-evolutionlie,creationsevidence-finetuning,health-digestiveexcretorysystems,creationsevidence-fractalsinnature,creationsevidence-intelligentdesign,creationsevidence-photosynthesis,tetragrammaton,black-cube-and-saturn-isum,health-detoxnaturally,creationsevidence-thecell,creationsevidence-thegoldenangle,embed-live-youtube-video,creationsevidence-floodevidence,creationsevidence-thefossilrecord,homepage,creationsevidence-thegoldenratio,health-naturalmedicinesources,qanon-xanon-the-kryptos-inqlustion,health-naturalremediesforbetterhealth,truth-geohaarpchemtraildevastation,truth-geoglobalwarmingclimatechange'*/
            );
        ?>
        <script>
            $(function(){
                $('a').attr({'target':'_parent'});
                });
        </script>
    </body>
</html>
