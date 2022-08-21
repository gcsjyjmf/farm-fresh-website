<!-- 
  The following people have worked on this file:
    Justin Mountain
 -->
 
<?php

  include("boiler.php");

  echo "<body>";

  include("header.php");

?>

    <div class="menu-container">
        <div id="search">
            <input type="text" name="search-bar" id="search-bar" placeholder="Find your favorite fruits and vegetables">
        </div>

        <div id="select-type">
            <input type="radio" id="all" name="selection" value="all" checked="checked">
            <label for="all">All Products</label>

            <input type="radio" id="org-veg" name="selection" value="org-veg">
            <label for="org-veg">Organic Vegetables</label>

            <input type="radio" id="reg-veg" name="selection" value="reg-veg">
            <label for="reg-veg">Regular Vegetables</label>

            <input type="radio" id="org-fruit" name="selection" value="org-fruit">
            <label for="org-fruit">Organic Fruit</label>

            <input type="radio" id="reg-fruit" name="selection" value="reg-fruit">
            <label for="reg-fruit">Regular Fruit</label>
        </div>
        <div id="product-area">
            <div class="product-card">
                <div class="card-top">
                    <img src="images/apple.png" alt="" class="product-img">
                    <div class="product-price">$XX.99/kg</div>
                </div>
                <div class="product-name">Product Name</div>
                <div class="product-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum unde commodi
                    architecto minus accusantium eveniet consectetur et error.

                </div>
            </div>
        </div>
    </div>

<?php
  include("footer.html");
?>

<script type="module" src="js/menu-population.js"></script>
</body>

</html>