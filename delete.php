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
    <form action="private/delete_prod_item.php" method="POST" enctype="multipart/form-data">
    <div id="product-container-outer">
        <div class="product-container-inner">
            <img id="detailpage-image" src="images/watermelon.png" alt="">
            <h1 id="detailpage-product-name">Watermelon</h1>
        </div>
        <div class="detail-container-inner">
            <div class="detailpageid">
                <label for="IDinput">ID</label>
                <input type="number" id="IDinput" name="id" min="1">
            </div>
            <div class="detailpage-price">
                <p>Price: $</p>
                <p id="price">0.79</p>
                <p> /kg</p>
            </div>
            <div id="detailpage-vegfruit-selector">
                <label for="fruitveg">Category:</label>
                <select id="fruitveg" disabled>
                    <option value="0">Fruit</option>
                    <option value="1">Vegetable</option>
                </select>
            </div>
            <div id="detailpage-organic-checker">
                <label for="organic" class="organic-checker">Organic</label>
                <select id="organic" disabled>
                    <option value="0">Not organic</option>
                    <option value="1">Organic</option>
                </select>
            </div>
            <p id="detailpage-description">Nothing can make you feel as refreshed on a hot summer's day than a slice of
                watermelon!</p>
        </div>
        <div class="button-container">
            <button id="delete-btn">Delete</button>
        </div>
    </div>
    </form>

    <?php
    include("footer.html");
    ?>
    <script type="module" src="js/product-delete.js"></script>
</body>

</html>