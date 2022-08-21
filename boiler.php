<!-- 
    The following people have worked on this file:
     Lei Li
     Justin Mountain
-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Mengya Shi, Fei Ma, Raymond Lei Li, Justin Mountain">

    <title>Farm Fresh Foods</title>

    <?php

    if (strpos($_SERVER['PHP_SELF'], "detail.php") ||
        strpos($_SERVER['PHP_SELF'], "shopping_cart.php") ||
        strpos($_SERVER['PHP_SELF'], "admin.php") ||
        strpos($_SERVER['PHP_SELF'], "delete.php")) {
        echo '<link rel="stylesheet" type="text/css" href="css/productandshoppingcart.css">';
    }
    if (strpos($_SERVER['PHP_SELF'], "signin.php") ||
        strpos($_SERVER['PHP_SELF'], "join.php") ) {
        echo '<link rel="stylesheet" type="text/css" href="css/menuforlogin.css">';
        echo '<link rel="stylesheet" type="text/css" href="css/main.css">';
    }else{
        echo '<link rel="stylesheet" type="text/css" href="css/main.css">';
        echo '<link rel="stylesheet" type="text/css" href="css/menu.css">';
    }
    ?>

    <link rel="stylesheet" type="text/css" href="css/header-footer.css">
</head>
