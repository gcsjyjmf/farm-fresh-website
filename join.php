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
        <h1>Create an account</h1>
    </div>
    <fieldset>
        <div id="box14">
            <form id="form1" action="signin.php" method="POST" >
                <p class="comment">* indicates required field</p><br>
                <p id="pp" class="per">Personal Information</p>
                <input type="text" id="fname" name="firstname" placeholder='* First name'>
                <input type="text" id="lname" name="psw" placeholder="*Last name">
                <p class="per">Account Security</p>
                <div id="boxa">
                    <input type="text" id="usname" name="username" placeholder='* Email address'><br><br>
                </div>
                <p class="comment">This will be your username</p>
                <div id="boxb">
                    <input type="password" id="psword1" name="psw1" placeholder="*Password"><br><br>
                </div>
                <p class="comment">Create a password 6+ characters long that includes at least 1 uppercase and 1
                    lowercase letter.</p>
                <br>
                <div id="boxe">
                    <input type="checkbox" id="signin" name="sign" checked>
                    <label for="signin">I agree to the terms above</label>
                </div>
                <button type="submit" id="btn5">Create account</button>
            </form>
        </div>
    </fieldset>
<?php
include("footer.html");
?>
<script type="module" src="js/users.js"></script>
</body>
</html>