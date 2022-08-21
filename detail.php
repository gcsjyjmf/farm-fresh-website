<!-- 
    The following people have worked on this file:
     Mengya Shi (html)
     Justin Mountain (header, footer)
-->
<?php

include("boiler.php");

echo "<body>";

include("header.php");

?>
    <div id="box4"></div>

    <div id="product-container-outer">
        <div class="product-container-inner">
            <img id="detailpage-image" src="images/watermelon.png" alt="">
            <h1 id="detailpage-product-name">Watermelon</h1>
        </div>
        <div class="detail-container-inner">
            <div class="detailpage-price">
                <p>Price: $</p>
                <span id="price">0.79</span>
                <span> /kg</span>
            </div>
            <div class="detailpage-quantity">
                <label for="quantity">Quantity: </label>
                <input type="number" id="quantity" name="quantity" min="1" max="5">
            </div>
            <div id="detailpage-vegfruit-selector">
                <label for="fruitveg">Category:</label>
                <select name="fruitveg" id="fruitveg" disabled>
                    <option value="0">Fruit</option>
                    <option value="1">Vegetable</option>
                </select>
            </div>
            <div id="detailpage-organic-checker">
                <label for="organic" class="organic-checker">Organic: </label>
                <select id="organic" name="organic" disabled>
                    <option value="0">Not organic</option>
                    <option value="1">Organic</option>
                </select>
            </div>
            <p id="detailpage-description">Nothing can make you feel as refreshed on a hot summer's day than a slice of
                watermelon!</p>
            <div class="button-container">
                <button id="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    </div>

    <?php
    include("footer.html");
    ?>
    <script type="module" src="js/shoppingcart.js"></script>
</body>

</html>