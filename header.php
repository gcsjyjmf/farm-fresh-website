<!-- 
  The following people have worked on this file:
    Justin Mountain
    Lei Li
 -->
 
 <?php
session_start();

if (isset($_SESSION["current_user"])) {
    if (1 == $_SESSION["current_user"]["admin_group"]) {
        include("header-admin.html");
    } else {
        include("header-user.html");
    }
} else {
    include("header-default.html");
}

?>
