<div style="font-family:arial;font-weight:bold;font-size:10px;">
    <?php if(isset($_GET['jquery'])&&$_GET['jquery']){echo '<script>'.file_get_contents("https://methodise.me/S/jquery-3.3.1.min.js").'</script>';}?>
    <style>
    .ld{padding:5px;bold;color:#777;background:#222;font-family:monospace;border-radius:3px;margin-bottom:10px;margin-top:5px;overflow:auto;}
    .k{color:#777;}
    .v{color:#03A9F4;}
    .v > div{display:inline-block;}
    .allowed{white-space:nowrap;}
    .e{outline:none;user-select:auto!important;}
    .blank{color:#4c4c4c!important;text-decoration:line-through;}
    .t1{margin-left:30px;}
    .t2{margin-left:60px;}
    .t3{margin-left:90px;}
    .t4{margin-left:120px;}
    .chosen{display:block!important;}
    .com{opacity:0;}
    </style>
    <h2>Create A Rich Card</h2>
    <br>
    <i>About something on your page:</i>
    <div class="ld_pannel" style="padding:5px;bold;color:#fff;background:#00BCD4;font-family:monospace;border-radius:3px;position:relative;margin-top:5px;">
        <div id="ld_offscreen" style="position:absolute;left:-10000px;top:10000px;"></div>
        <b style="font-size:14px;">
            <select id="choose_ld"style="display:inline-block;width:100%;margin-bottom:5px;">
                <option id="show_ldfinal" value=".ld_nothing" selected>Nothing chosen...</option>
                <option value=".ld_article">An article</option>
                <option value=".ld_person">A person</option>
                <option value=".ld_video">A video</option>
                <option value=".ld_product">A product</option>
                <option value=".ld_localbusiness">A local business</option>
                <option value=".ld_event">An event</option>
                <option value=".ld_place">A place</option>
                <option value=".ld_factcheck">A fact check</option>
                <option value=".ld_recipe">A recipe</option>
            </select>







        </b>
        <div id="ld_index" style="position:absolute;top:38px;right:10px;color:#03A9F4;font-size:10px;max-width:200px;display:none;">
            <div style="display:inline-block;vertical-align:1px;">■</div> Add your details
        </div>




        <div id="ldjsonfinal" class="ld ld_nothing chosen" style="display:none;user-select:none;position:relative;white-space:pre;">
            //nothing selected
        </div>





        <div class="ld ld_article" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k"><b class="omit article_dn" style="color:#fff;cursor:pointer;">◄</b> <b class="omit article_dn" style="color:#fff;cursor:pointer;">►</b>"<b class="article" style="color:#fff;">Article</b>"</b><b class="com">,</b><br>
                <b class="k t1">"headline"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Article headline</div>"</b><b class="com">,</b><br>
                <b class="k t1">"alternativeHeadline"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">This article is also about</div>"</b><b class="com">,</b><br>
                <b class="k t1">"description"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">A most wonderful article</div>"</b><b class="com">,</b><br>
                <b class="k t1">"articleBody"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">The quick brown fox jumps over the lazy dog ...</div>"</b><b class="com">,</b><br>
                <b class="k t1">"genre"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">search engine optimization</div>"</b><b class="com">,</b><br>
                <b class="ld_tip" ld_tip="A keyword can be more than one word"><b class="k t1">"keywords"</b>: <b>[
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>,
                    <b class="v">"<div class="e" contenteditable spellcheck="false"></div>"</b>]</b><b class="com">,</b></b><br>
                <b class="k t1">"image"</b>: [<br>
                <b class="k t2"><b class="v">"<div class="e" contenteditable spellcheck="false">https://example.com/photos/1x1/photo.jpg</div>"</b></b><b class="com">,</b><br>
                <b class="k t2"><b class="v">"<div class="e" contenteditable spellcheck="false">https://example.com/photos/4x3/photo.jpg</div>"</b></b><b class="com">,</b><br>
                <b class="k t2"><b class="v">"<div class="e" contenteditable spellcheck="false">https://example.com/photos/16x9/photo.jpg</div>"</b></b><br>
                <b class="k t2"></b>],<br>
                <b class="k t1">"datePublished"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2015-02-05T08:00:00+08:00</div>"</b><b class="com">,</b><br>
                <b class="k t1">"dateModified"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2015-02-05T09:20:00+08:00</div>"</b><br>
                <b id="personarticle_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add author details" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>author<br></b>
                <b id="personarticle" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:12px;"><b id="personarticle_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove author details" style="color:#ff0000;cursor:pointer;">x</b>"author"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"Person"</b><b class="com">,</b><br>
                    <b class="k t2">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">John Doe</div>"</b><br>
                    <b class="k t2"></b>}<br>
                </b>
                    <b id="publisherarticle_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add publisher details" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>publisher<br></b>
                    <b id="publisherarticle" class="omit" style="display:none;"><b class="com">,</b>
                        <b class="k" style="margin-left:12px;"><b id="publisherarticle_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove publisher details" style="color:#ff0000;cursor:pointer;">x</b>"publisher"</b>: {<br>
                        <b class="k t2">"@type"</b>: <b class="k">"Organization"</b><b class="com">,</b><br>
                        <b class="k t2">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Google</div>"</b><b class="com">,</b><br>
                            <b id="contactarticle_on" class="t2 ld_op_toggle omit ld_tip" ld_tip="Add a contact number" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>telephone<br></b>
                            <b id="contactarticle" class="omit inner" style="display:none;">
                                <b id="contactarticle_off" class="t2 ld_op_toggle omit ld_tip" ld_tip="Remove this contact number" style="color:#ff0000;cursor:pointer;">x</b><b class="k">"contactPoint"</b>: {<br>
                                <b class="k t3">"@type"</b>: <b class="k">"ContactPoint"</b>,<br>
                                <b class="k t3">"telephone"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">+1-401-555-1212</div>"</b>,<br>
                                <b class="k t3">"contactType"</b>: <b class="k"><b class="omit contactType_dn" style="color:#fff;cursor:pointer;">◄</b> <b class="omit contactType_dn" style="color:#fff;cursor:pointer;">►</b>"<b class="contactType" style="color:#fff;">customer support</b>"</b><br>
                                <b class="k t3"></b>}<b class="com">,</b><br>
                            </b>
                        <b class="k t2">"logo"</b>: {<br>
                        <b class="k t3">"@type"</b>: <b class="k">"ImageObject"</b><b class="com">,</b><br>
                        <b class="k t3">"url"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://google.com/logo.jpg</div>"</b><b class="com">,</b><br>
                        <b class="k t3">"height"</b>: <b class="v"><div class="e" contenteditable spellcheck="false">60</div></b><b class="com">,</b><br>
                        <b class="k t3">"width"</b>: <b class="v"><div class="e" contenteditable spellcheck="false">600</div></b><br>
                        <b class="k t3"></b>}<br>
                        <b class="k t2"></b>}<br>
                    </b>
                    <b id="webpagearticle_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add webpage details" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>webpage<br></b>
                    <b id="webpagearticle" class="omit" style="display:none;"><b class="com">,</b>
                        <b class="k" style="margin-left:12px;"><b id="webpagearticle_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove webpage details" style="color:#ff0000;cursor:pointer;">x</b>"mainEntityOfPage"</b>: {<br>
                        <b class="k t2">"@type"</b>: <b class="k">"WebPage"</b><b class="com">,</b><br>
                        <b class="k t2">"@id"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://google.com/article</div>"</b><br>
                        <b class="k t2"></b>}<br>
                    </b>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>






        <div class="ld ld_person" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k">"Person"</b><b class="com">,</b><br>
                <b class="k t1">"email"</b>: <b class="v">"<i style="color:#3e6279;">mailto:</i><div class="e" contenteditable spellcheck="false">info@example.com</div>"</b><b class="com">,</b><br>
                <b class="k t1">"image"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://www.example.com/janedoe.jpg</div>"</b><b class="com">,</b><br>
                <b class="k t1">"jobTitle"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Research Assistant</div>"</b><b class="com">,</b><br>
                <b class="k t1">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Jane Doe</div>"</b><b class="com">,</b><br>
                <b class="k t1">"alumniOf"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Dartmouth</div>"</b><b class="com">,</b><br>
                <b class="k t1">"birthPlace"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Philadelphia, PA</div>"</b><b class="com">,</b><br>
                <b class="k t1">"birthDate"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">1979.10.12</div>"</b><b class="com">,</b><br>
                <b class="k t1">"height"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">72 inches</div>"</b><b class="com">,</b><br>
                <b class="k t1">"gender"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">female</div>"</b><b class="com">,</b><br>
                <b class="k t1">"memberOf"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Republican Party</div>"</b><b class="com">,</b><br>
                <b class="k t1">"nationality"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">African American</div>"</b><b class="com">,</b><br>
                <b class="k t1">"telephone"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">(123) 456-6789</div>"</b><b class="com">,</b><br>
                <b class="k t1">"url"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://www.example.com</div>"</b><br>
                <b id="postaladdress_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add an address" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>address<br></b>
                <b id="postaladdress" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:24px;"><b id="postaladdress_off" class="ld_op_toggle omit ld_tip" ld_tip="Remove this address" style="color:#ff0000;cursor:pointer;">x</b>"address"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"PostalAddress"</b><b class="com">,</b><br>
                    <b class="k t2">"addressLocality"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Colorado Springs</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"addressRegion"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">CO</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"postalCode"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">80840</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"streetAddress"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">100 Main Street</div>"</b><br>
                    <b class="k t2"></b>}<br>
                </b>
                <b id="colleagueperson_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add colleagues" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>colleagues<br></b>
                <b id="colleagueperson" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:12px;"><b id="colleagueperson_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove colleagues" style="color:#ff0000;cursor:pointer;">x</b>"colleague"</b>: [<br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">http://www.example.com/JohnColleague.html</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">http://www.example.com/JameColleague.html</div>"</b><br>
                    <b class="k t2"></b>]<br>
                </b>
                <b id="sameasperson_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add social profiles" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>social profiles<br></b>
                <b id="sameasperson" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:12px;"><b id="sameasperson_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove social profiles" style="color:#ff0000;cursor:pointer;">x</b>"sameAs"</b>: [<br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">https://www.facebook.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">https://www.linkedin.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">http://twitter.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">http://instagram.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">https://plus.google.com/your-profile</div>"</b><br>
                    <b class="k t2"></b>]<br>
                </b>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>







        <div class="ld ld_video" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k">"VideoObject"</b><b class="com">,</b><br>
                <b class="k t1">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Title</div>"</b><b class="com">,</b><br>
                <b class="k t1">"description"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Video description</div>"</b><b class="com">,</b><br>
                <b class="k t1">"thumbnailUrl"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://www.example.com/thumbnail.jpg</div>"</b><b class="com">,</b><br>
                <b class="k t1">"uploadDate"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2015-02-05T08:00:00+08:00</div>"</b><b class="com">,</b><br>
                <b class="k t1">"duration"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">PT1M33S</div>"</b><b class="com">,</b><br>
                <b class="k t1">"contentUrl"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://www.example.com/video123.flv</div>"</b><b class="com">,</b><br>
                <b class="k t1">"embedUrl"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://www.example.com/videoplayer.swf?video=123</div>"</b><b class="com">,</b><br>
                <b class="k t1">"interactionCount"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2347</div>"</b><br>
                <b id="personvideo_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add author details" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>author<br></b>
                <b id="personvideo" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:12px;"><b id="personvideo_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove author details" style="color:#ff0000;cursor:pointer;">x</b>"author"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"Person"</b><b class="com">,</b><br>
                    <b class="k t2">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">John Doe</div>"</b><br>
                    <b class="k t2"></b>}<br>
                </b>
                <b id="publishervideo_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add publisher details" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>publisher<br></b>
                <b id="publishervideo" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:12px;"><b id="publishervideo_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove publisher details" style="color:#ff0000;cursor:pointer;">x</b>"publisher"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"Organization"</b><b class="com">,</b><br>
                    <b class="k t2">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Example Publisher</div>"</b><b class="com">,</b><br>
                    <b id="contactvideo_on" class="t2 ld_op_toggle omit ld_tip" ld_tip="Add a contact number" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>telephone<br></b>
                    <b id="contactvideo" class="omit inner" style="display:none;">
                        <b id="contactvideo_off" class="t2 ld_op_toggle omit ld_tip" ld_tip="Remove this contact number" style="color:#ff0000;cursor:pointer;">x</b><b class="k">"contactPoint"</b>: {<br>
                        <b class="k t3">"@type"</b>: <b class="k">"ContactPoint"</b>,<br>
                        <b class="k t3">"telephone"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">+1-401-555-1212</div>"</b>,<br>
                        <b class="k t3">"contactType"</b>: <b class="k"><b class="omit contactType_dn" style="color:#fff;cursor:pointer;">◄</b> <b class="omit contactType_dn" style="color:#fff;cursor:pointer;">►</b>"<b class="contactType" style="color:#fff;">customer support</b>"</b><br>
                        <b class="k t3"></b>}<b class="com">,</b><br>
                    </b>
                    <b class="k t2">"logo"</b>: {<br>
                    <b class="k t3">"@type"</b>: <b class="k">"ImageObject"</b><b class="com">,</b><br>
                    <b class="k t3">"url"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://example.com/logo.jpg</div>"</b><b class="com">,</b><br>
                    <b class="k t3">"height"</b>: <b class="v"><div class="e" contenteditable spellcheck="false">60</div></b><b class="com">,</b><br>
                    <b class="k t3">"width"</b>: <b class="v"><div class="e" contenteditable spellcheck="false">600</div></b><br>
                    <b class="t3"></b>}<br>
                    <b class="t2"></b>}<br>
                </b>
                <b id="webpagevideo_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add webpage details" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>webpage<br></b>
                <b id="webpagevideo" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:12px;"><b id="webpagevideo_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove webpage details" style="color:#ff0000;cursor:pointer;">x</b>"mainEntityOfPage"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"WebPage"</b><b class="com">,</b><br>
                    <b class="k t2">"@id"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://google.com/article</div>"</b><br>
                    <b class="k t2"></b>}<br>
                </b>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>




        <div class="ld ld_product" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k">"Product"</b><b class="com">,</b><br>
                <b class="k t1">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Executive Anvil</div>"</b><b class="com">,</b><br>
                <b class="k t1">"image"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://www.example.com/anvil_executive.jpg</div>"</b><b class="com">,</b><br>
                <b class="k t1">"description"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height</div>"</b><b class="com">,</b><br>
                <b class="k t1">"category"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Widgets</div>"</b><b class="com">,</b><br>
                <b class="k t1">"brand"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"Thing"</b><b class="com">,</b><br>
                <b class="k t2">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">ACME</div>"</b><br>
                <b class="k t2"></b>}<br>
                <b id="aggregateRatingproduct_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add a rating" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>rating<br></b>
                <b id="aggregateRatingproduct" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:24px;"><b id="aggregateRatingproduct_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove a rating" style="color:#ff0000;cursor:pointer;">x</b>"aggregateRating"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"AggregateRating"</b><b class="com">,</b><br>
                    <b class="k t2">"ratingValue"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">4.4</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"reviewCount"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">89</div>"</b><br>
                    <b class="k t2"></b>}<br>
                </b>
                <b id="offerproduct_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add an offer" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>offer<br></b>
                <b id="offerproduct" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:24px;"><b id="offerproduct_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove an offer" style="color:#ff0000;cursor:pointer;">x</b>"offers"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"Offer"</b><b class="com">,</b><br>
                    <b class="k t2">"priceCurrency"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">USD</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"price"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">119.99</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"priceValidUntil"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2020-11-05</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"itemCondition"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://schema.org/UsedCondition</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"availability"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://schema.org/InStock</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"seller"</b>: {<br>
                    <b class="k t3">"@type"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Organization</div>"</b><b class="com">,</b><br>
                    <b class="k t3">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Executive Objects</div>"</b><br>
                    <b class="k t3"></b>}<br>
                    <b class="k t2"></b>}<br>
                </b>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>




        <div class="ld ld_localbusiness" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k">"LocalBusiness"</b><b class="com">,</b><br>
                <b class="k t1">"address"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"PostalAddress"</b><b class="com">,</b><br>
                <b class="k t2">"addressLocality"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Manhattan</div>"</b><b class="com">,</b><br>
                <b class="k t2">"addressRegion"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">NY</div>"</b><b class="com">,</b><br>
                <b class="k t2">"postalCode"</b>:<b class="v">"<div class="e" contenteditable spellcheck="false">10036</div>"</b><b class="com">,</b><br>
                <b class="k t2">"streetAddress"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">400 Broadway</div>"</b><br>
                <b class="k t2"></b>}<b class="com">,</b><br>
                <b class="k t1">"description"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">This is your business description</div>"</b><b class="com">,</b><br>
                <b class="k t1">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Craig's Car Repair</div>"</b><b class="com">,</b><br>
                <b class="k t1">"telephone"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">555-111-2345</div>"</b><b class="com">,</b><br>
                <b class="k t1">"openingHours"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Mo,Tu,We,Th,Fr 09:00-17:00</div>"</b><br>
                <b id="geolocalbusiness_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add geo location" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>geo location<br></b>
                <b id="geolocalbusiness" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:24px;"><b id="geolocalbusiness_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove geo location" style="color:#ff0000;cursor:pointer;">x</b>"geo"</b>: {<br>
                    <b class="k t2">"@type"</b>: <b class="k">"GeoCoordinates"</b><b class="com">,</b><br>
                    <b class="k t2">"latitude"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">20.75</div>"</b><b class="com">,</b><br>
                    <b class="k t2">"longitude"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">13.98</div>"</b><br>
                    <b class="k t2"></b>}<br>
                </b>
                <b id="sameaslocalbusiness_on" class="t1 ld_op_toggle omit ld_tip" ld_tip="Add social profiles" style="color:#65c623;cursor:pointer;"><b style="margin-left:-7px;">✔ </b>social profiles<br></b>
                <b id="sameaslocalbusiness" class="omit" style="display:none;"><b class="com">,</b>
                    <b class="k" style="margin-left:24px;"><b id="sameaslocalbusiness_off" class="omit ld_op_toggle ld_tip" ld_tip="Remove social profiles" style="color:#ff0000;cursor:pointer;">x</b>"sameAs"</b>: [<br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">https://www.facebook.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">https://www.linkedin.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">http://twitter.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">http://instagram.com/your-profile</div>"</b><b class="com">,</b><br>
                    <b class="v t2">"<div class="e" contenteditable spellcheck="false">https://plus.google.com/your-profile</div>"</b><br>
                    <b class="k t2"></b>]<br>
                </b>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>




        <div class="ld ld_event" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k">"MusicEvent"</b><b class="com">,</b><br>
                <b class="k t1">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Shostakovich Leningrad</div>"</b><b class="com">,</b><br>
                <b class="k t1">"startDate"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2014-05-23T20:00</div>"</b><b class="com">,</b><br>
                <b class="k t1">"location"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"MusicVenue"</b><b class="com">,</b><br>
                <b class="k t2">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Chicago Symphony Center</div>"</b><b class="com">,</b><br>
                <b class="k t2">"address"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">220 S. Michigan Ave, Chicago, Illinois, USA</div>"</b><br>
                <b class="k t2">}<b class="com">,</b><br>
                <b class="k t1">"offers"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"Offer"</b><b class="com">,</b><br>
                <b class="k t2">"url"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">/examples/ticket/12341234</div>"</b><b class="com">,</b><br>
                <b class="k t2">"category"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">primary</div>"</b><b class="com">,</b><br>
                <b class="k t2">"price"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">$40</div>"</b><b class="com">,</b><br>
                <b class="k t2">"availability"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://schema.org/InStock</div>"</b><br>
                <b class="k t2"></b>}<b class="com">,</b><br>
                <b class="k t1">"performer"</b>: [<br>
                <b class="k t2"></b>{<br>
                <b class="k t3">"@type"</b>: <b class="k">"MusicGroup"</b><b class="com">,</b><br>
                <b class="k t3">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Chicago Symphony Orchestra</div>"</b><b class="com">,</b><br>
                <b class="k t3">"sameAs"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://cso.org/</div>"</b><br>
                <b class="k t2"></b>},{<br>
                <b class="k t3">"@type"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Person</div>"</b><b class="com">,</b><br>
                <b class="k t3">"image"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://example.com/examples/jvanzweden_s.jpg</div>"</b><b class="com">,</b><br>
                <b class="k t3">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Jaap van Zweden</div>"</b><b class="com">,</b><br>
                <b class="k t3">"sameAs"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://www.jaapvanzweden.com/</div>"</b><br>
                <b class="k t3"></b>}<br>
                <b class="k t2"></b>]<b class="com">,</b></b>
                <b class="k t2">"workPerformed"</b>: [<br>
                <b class="k t2"></b>{<br>
                <b class="k t3">"@type"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">CreativeWork</div>"</b><b class="com">,</b><br>
                <b class="k t3">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Britten Four Sea Interludes and Passacaglia from Peter Grimes</div>"</b><b class="com">,</b><br>
                <b class="k t3">"sameAs"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://en.wikipedia.org/wiki/Peter_Grimes</div>"</b><br>
                <b class="k t2"></b>},{<br>
                <b class="k t3">"@type"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">CreativeWork</div>"</b><b class="com">,</b><br>
                <b class="k t3">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Shostakovich Symphony No. 7 (Leningrad)</div>"</b><b class="com">,</b><br>
                <b class="k t3">"sameAs"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://en.wikipedia.org/wiki/Symphony_No._7_(Shostakovich)</div>"</b><br>
                <b class="k t3"></b>}<br>
                <b class="k t2"></b>]<br>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>




        <div class="ld ld_place" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: [</br>
                <b class="k t2"></b>{<br>
                <b class="k t3">"@type"</b>: <b class="k">"Place"</b><b class="com">,</b><br>
                <b class="k t3"><b class="k">"address"</b></b>: {<br>
                <b class="k t4">"@type"</b>: "PostalAddress"<b class="com">,</b><br>
                <b class="k t4">"addressLocality"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Denver</div>"</b><b class="com">,</b><br>
                <b class="k t4">"addressRegion"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">CO</div>"</b><b class="com">,</b><br>
                <b class="k t4">"postalCode"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">80209</div>"</b><b class="com">,</b><br>
                <b class="k t4">"streetAddress"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">7 S. Broadway</div>"</b><br>
                <b class="k t4"></b>}<b class="com">,</b><br>
                <b class="k t3">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">The Hi-Dive</div>"</b><br>
                <b class="k t3"></b>}<b class="com">,</b>{<br>
                <b class="k t3">"@type"</b>: "Offer"<b class="com">,</b><br>
                <b class="k t3">"price"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">13.00</div>"</b><b class="com">,</b><br>
                <b class="k t3">"priceCurrency"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">USD</div>"</b><b class="com">,</b><br>
                <b class="k t3">"url"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://www.ticketfly.com/purchase/309433</div>"</b><br>
                <b class="k t3"></b>}<br>
                <b class="k t2"></b>]<br>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>




        <div class="ld ld_factcheck" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k">"ClaimReview"</b><b class="com">,</b><br>
                <b class="k t1">"datePublished"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2016-06-22</div>"</b><b class="com">,</b><br>
                <b class="k t1">"url"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://example.com/news/science/worldisflat.html</div>"</b><b class="com">,</b><br>
                <b class="k t1">"itemReviewed"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"CreativeWork"</b><b class="com">,</b><br>
                <b class="k t2">"author"</b>: {<br>
                <b class="k t3">"@type"</b>: <b class="k">"Organization"</b><b class="com">,</b><br>
                <b class="k t3">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Square World Society</div>"</b><b class="com">,</b><br>
                <b class="k t3">"sameAs"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">https://example.flatworlders.com/we-know-that-the-world-is-flat</div>"</b><br>
                <b class="k t3"></b>}<b class="com">,</b>
                <b class="k t2">"datePublished"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2016-06-20</div>"</b><br>
                <b class="k t2"></b>}<b class="com">,</b><br>
                <b class="k t1">"claimReviewed"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">The world is flat</div>"</b><b class="com">,</b><br>
                <b class="k t1">"author"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"Organization"</b>,<br>
                <b class="k t2">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Example.com science watch</div>"</b><br>
                <b class="k t2"></b>}<b class="com">,</b><br>
                <b class="k t1">"reviewRating"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"Rating"</b><b class="com">,</b><br>
                <b class="k t2">"ratingValue"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">1</div>"</b><b class="com">,</b><br>
                <b class="k t2">"bestRating"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">5</div>"</b><b class="com">,</b><br>
                <b class="k t2">"worstRating"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">1</div>"</b><b class="com">,</b><br>
                <b class="k t2">"alternateName"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">False</div>"</b><br>
                <b class="k t2"></b>}<br>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>




        <div class="ld ld_recipe" style="display:none;user-select:none;position:relative;">
            <b class="allowed">
                {<br>
                <b class="k t1">"@context"</b>: <b class="k">"http://schema.org"</b><b class="com">,</b><br>
                <b class="k t1">"@type"</b>: <b class="k">"Recipe"</b><b class="com">,</b><br>
                <b class="k t1">"author"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Jake  Smith</div>"</b><b class="com">,</b><br>
                <b class="k t1">"cookTime"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">PT2H</div>"</b><b class="com">,</b><br>
                <b class="k t1">"datePublished"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">2015-05-18</div>"</b><b class="com">,</b><br>
                <b class="k t1">"description"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Your recipe description goes here</div>"</b><b class="com">,</b><br>
                <b class="k t1">"image"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://www.example.com/images.jpg</div>"</b><b class="com">,</b><br>
                <b class="k t1">"recipeIngredient"</b>: [<br>
                <b class="v t2">"<div class="e" contenteditable spellcheck="false">ingredient 1</div>"<b class="com">,</b></b><br>
                <b class="v t2">"<div class="e" contenteditable spellcheck="false">ingredient 2</div>"<b class="com">,</b></b><br>
                <b class="v t2">"<div class="e" contenteditable spellcheck="false">ingredient 3</div>"<b class="com">,</b></b><br>
                <b class="v t2">"<div class="e" contenteditable spellcheck="false">ingredient 4</div>"<b class="com">,</b></b><br>
                <b class="v t2">"<div class="e" contenteditable spellcheck="false">ingredient 5</div>"</b><br>
                <b class="k t2"></b>]<b class="com">,</b><br>
                <b class="k t1">"interactionStatistic"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"InteractionCounter"</b><b class="com">,</b><br>
                <b class="k t2">"interactionType"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">http://schema.org/Comment</div>"</b><b class="com">,</b><br>
                <b class="k t2">"userInteractionCount"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">5</div>"</b><br>
                <b class="k t2"></b>}<b class="com">,</b><br>
                <b class="k t1">"name"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">Rand's Cookies</div>"</b><b class="com">,</b><br>
                <b class="k t1">"nutrition"</b>: {<br>
                <b class="k t2">"@type"</b>: <b class="k">"NutritionInformation"</b><b class="com">,</b><br>
                <b class="k t2">"calories"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">1200 calories</div>"</b><b class="com">,</b><br>
                <b class="k t2">"carbohydrateContent"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">12 carbs</div>"</b><b class="com">,</b><br>
                <b class="k t2">"proteinContent"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">9 grams of protein</div>"</b><b class="com">,</b><br>
                <b class="k t2">"fatContent"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">9 grams fat</div>"</b><br>
                <b class="k t2"></b>}<b class="com">,</b><br>
                <b class="k t1">"prepTime"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">PT15M</div>"</b><b class="com">,</b><br>
                <b class="k t1">"recipeInstructions"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">This is the long part, etc.</div>"</b><b class="com">,</b><br>
                <b class="k t1">"recipeYield"</b>: <b class="v">"<div class="e" contenteditable spellcheck="false">12 cookies</div>"</b><br>
            </b>
            <b class="k t1"></b><b class="omit">}</b>
            <div class="ld_fire" style="position:absolute;left:-3px;bottom:-2px;display:none;"><img src="https://methodise.me/R/fire.gif" style="width:30px;"></div>
        </div>








        <br>
        <div id="ld_done" class="ld_tip" ld_tip="Click here, to set this to the rich card for this page" style="background-image:url(https://methodise.me/R/ok.png);border:2px solid #ffffff;background-color:#ffffff;display:inline-block;width:15px;height:15px;background-size:15px 15px;border-radius:15px;cursor:pointer;position:absolute;bottom: 1px;left:1px;margin: 5px;"></div>
        <div id="ld_tips" style="height:15px;position:absolute;bottom:1px;right:1px;margin:5px;text-align:right;font-family:arial;color:#222;"></div>
    </div>
    <script>
        $(function(){
            $('.ld_tip').on('mouseenter',function(){$('#ld_tips').text($(this).attr('ld_tip'))});
            $('.ld_tip').on('mouseleave',function(){$('#ld_tips').text('')});
            $('#choose_ld').on('change',function(){
                if($(this).val()!=='.ld_nothing'){$('#ldjsonfinal').hide();}
                $('.ld').removeClass('chosen');
                $($(this).val()).addClass('chosen');
                if($('.ld.chosen').text().replace(/\s/g,'')=='//nothingselected'){$('#ld_index').hide();}else{$('#ld_index').show();}
                });
            $('.ld_op_toggle').on('click',function(){
                var op=$(this).attr('id').split('_');
                $('#'+op[0]+'_on,#'+op[0]).toggle();
                $('#'+op[0]).toggleClass('omit');
                });
            $('.e').parent().on('click',function(ev){
                if($($(this).children('.e')[0]).text()==''){$($(this).children('.e')[0]).trigger('focus');}
                });
            $('.e').on('keydown paste',function(ev){
                if(ev.originalEvent.shiftKey,ev.which==50){return false;}
                if(ev.which==13){return false;}
                setTimeout(function(that){if($(that).text().indexOf('"')!==-1){$(that).text($(that).text().replace(/\"/g,''));}},100,this);
                });
            $('.e').on('keyup',function(ev){
                if($(this).text().replace(/\s/g,'')==''){
                    $(this).parent().addClass("blank");
                    $(this).parent().prev('.k').addClass("blank");
                    }
                else{
                    $(this).parent().removeClass("blank");
                    $(this).parent().prev('.k').removeClass("blank");
                    }});
            var articles=["Article","NewsArticle","TechArticle","BlogPosting"];
            var article=0;
            $('.article_dn').on('click',function(){
                if((article-=1)<0){article=articles.length-1;}
                $('.article').text(articles[article]);
                });
            $('.article_up').on('click',function(){
                if((article+=1)>articles.length-1){article=0;}
                $('.article').text(articles[article]);
                });
            var contactTypes=["customer support","technical support","billing support","bill payment","sales","reservations","credit card support","emergency","baggage tracking","roadside assistance","package tracking"];
            var contactType=0;
            $('.contactType_dn').on('click',function(){
                if((contactType-=1)<0){contactType=contactTypes.length-1;}
                $('.contactType').text(contactTypes[contactType]);
                });
            $('.contactType_up').on('click',function(){
                if((contactType+=1)>contactTypes.length-1){contactType=0;}
                $('.contactType').text(contactTypes[contactType]);
                });
            $('#ldjson_done').removeClass('prevent');
            $('#ld_done').on('click',function(v){
                //clone the html
                // then remove the class from the real html











                $('#ld_offscreen').html($('.ld.chosen').find('.allowed'));
                $('#ld_offscreen').find('.omit').remove();
                var richcard=$('#ld_offscreen').text();
                var er=false;
                try{richcard=JSON.parse(richcard+'}');}catch(e){console.log(e);er=e;richcard={};}
                if(!er&&Object.keys(richcard).length){
                    for(var k in richcard){
                        if(["","mailto:"].indexOf(richcard[k])!=-1){delete richcard[k];}
                        else if(typeof richcard[k]=='object'){
                            if(!(richcard[k] instanceof Array)&&JSON.stringify(richcard[k])=="{}"){delete richcard[k];}
                            else if(richcard[k].constructor==Array){
                                for(var i=0;i<richcard[k].length;i+=1){if(richcard[k][i]==''){richcard[k].splice(i,1);i-=1;}}if(!richcard[k].length){delete richcard[k];}}
                            if(richcard[k]){
                                for(var kk in richcard[k]){
                                    if(["","mailto:"].indexOf(richcard[k][kk])!=-1){delete richcard[k][kk];}
                                    else if(typeof richcard[k][kk]=='object'){
                                        if(!(richcard[k][kk] instanceof Array)&&JSON.stringify(richcard[k][kk])=="{}"){delete richcard[k][kk];}
                                        else if(richcard[k][kk].constructor==Array){
                                            for(var i=0;i<richcard[k][kk].length;i+=1){if(richcard[k][kk][i]==''){richcard[k][kk].splice(i,1);i-=1;}}if(!richcard[k][kk].length){delete richcard[k][kk];}
                                            }
                                        if(richcard[k][kk]){
                                            for(var kkk in richcard[k][kk]){
                                                if(["","mailto:"].indexOf(richcard[k][kk][kkk])!=-1){delete richcard[k][kk][kkk];}
                                                else if(typeof richcard[k][kk][kkk]=='object'){
                                                    if(richcard[k][kk][kkk]){
                                                        if(!(richcard[k][kk][kkk] instanceof Array)&&JSON.stringify(richcard[k][kk][kkk])=="{}"){delete richcard[k][kk][kkk];}
                                                        else if(richcard[k][kk][kkk].constructor==Array){
                                                            for(var i=0;i<richcard[k][kk][kkk].length;i+=1){if(richcard[k][kk][kkk][i]==''){richcard[k][kk][kkk].splice(i,1);i-=1;}}if(!richcard[k][kk][kkk].length){delete richcard[k][kk][kkk];}
                                                            }
                                                        else{
                                                            for(var kkkk in richcard[k][kk][kkk]){
                                                                if(["","mailto:"].indexOf(richcard[k][kk][kkk][kkkk])!=-1){delete richcard[k][kk][kkk][kkkk];}
                                                                if(!(richcard[k][kk][kkk][kkkk] instanceof Array)&&JSON.stringify(richcard[k][kk][kkk][kkkk])=="{}"){delete richcard[k][kk][kkk][kkkk];}
                                                                else if(richcard[k][kk][kkk][kkkk].constructor==Array){
                                                                    for(var i=0;i<richcard[k][kk][kkk][kkkk].length;i+=1){if(richcard[k][kk][kkk][kkkk][i]==''){richcard[k][kk][kkk][kkkk].splice(i,1);i-=1;}}if(!richcard[k][kk][kkk][kkkk].length){delete richcard[k][kk][kkk][kkkk];}
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    if(richcard){
                        console.log(0);
                        $('#ldjson_done').css({'background':'#65c623','cursor':'pointer'});
                        $('#ldjson_done').addClass('prevent');
                        $('#show_ldfinal').text('Your Rich Card');
                        $('#ldjsonfinal').text(JSON.stringify(richcard,null,'\t'));
                        $('#choose_ld > option')[0].selected='selected';
                        $('.ld').removeClass('chosen');
                        $('#ldjsonfinal').show();
                        }
                    else{
                        console.log(1);
                        $('#ldjson_done').css({'background':'#ff0000','cursor':'not-allowed'});
                        $('#ldjson_done').addClass('prevent');
                        }
                    }
                else{
                    console.log(2);
                    $('#ldjson_done').css({'background':'#ff0000','cursor':'not-allowed'});
                    $('#ldjson_done').addClass('prevent');
                    }

                });
            });
    </script>
</div>
