<?php

if (isset($_GET['url'])) {   
    if(file_exists("controleur/".$_GET['url'].".controleur.php"))
        $page = $_GET['url'];
    else
        $page = "404";
} else {
    $page = "accueil";
}

ob_start();
require "controleur/".$page.".controleur.php";
$contents = ob_get_clean();

require "site.php";

?>