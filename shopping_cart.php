<!-- 
    The following people have worked on this file:
     Mengya Shi (html)
     Lei Li (php login user judgement ) 
     Justin Mountain (header, footer)
-->
<?php
include("boiler.php");

echo "<body>";

include("header.php");

?>
    <div id="box4">
    </div>
    <div id="shopping-cart-outer">
        <div id="cart-area">
            <div class="product-wrapper">
                <img class="in-cart-product-photos" src="images/apple.png" alt="">
                <div class="product-wrapper-inner">
                    <p class="cartpage-name">Product Name here</p>
                    <p class="cartpage-price">Price here</p>
                    <p class="cartpage-quantity">Quantity here</p>
                    <h3 class="subtotal">Subtotal here </h3>
                </div>
            </div>
        </div>
        <div class="total-wrapper">
            <div class="space-separater"></div>
            <h2 class="total-amount">Total: $</h2>
            <h2 class="total-amount" id="total"></h2>
        </div>
        <div class="button-container">

            <?php
            if (isset($_SESSION["current_user"]) &&  $_SESSION["current_user"]["id"] > 0) {
                echo '<button id="payment-button" onclick="clearShoppingCart()">Pay Now</button>';
            }else{
                echo '<button id="signin-button" onclick="location.href=\'signin.php\'" type="button">SIGN IN</button>';
            }
            ?>

        </div>
    </div>

    <?php
    include("footer.html");
    ?>
    <script type="module" src="js/shoppingcart.js"></script>
</body>

</html>