<!-- 
    The following people have worked on this file:
     Fei Ma (html)
     Justin Mountain (header, footer)
-->
<?php

include("boiler.php");

echo "<body>";

include("header.php");

?>
    <div id="box4"></div>
    <div id="box13">
        <h1>Sign in an account</h1>
    </div>
    <fieldset>
        <div id="box14">
            <form id="user-login" action="menu.php" method="POST" >
                <p>* indicates required field</p>
                <div id="boxc">
                    <input type="text" id="emdress" name="na" placeholder='* Username or email address'>
                </div>
                <div id="boxd">
                    <input type="password" id="psword" name="psw" placeholder="*Password">
                </div>
                <input type="checkbox" id="signin" name="sign" checked>
                <label for="signin">Keep me signed in.</label> <br>
                <button type="submit" id="btn5">Sign in</button>
            </form>
        </div>
    </fieldset>
<?php
include("footer.html");
?>
<script type="module" src="js/users.js"></script>
</body>

</html>