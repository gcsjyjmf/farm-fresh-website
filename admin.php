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

    <form action="private/add_new_prod.php" method="POST" enctype="multipart/form-data">

        <div id="product-container-outer">
            <div class="product-container-inner">
                <div class="image-container-inner">
                    <label class="detailpage-image" for="image-upload">Upload Image Here</label>
                    <input type="file" name="product-image" id="image-upload" accept="images/*" multiple>
                </div>
                <h1 class="detailpage-product-name">
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name" placeholder="Add Name Here"></input>
                </h1>
            </div>
            <div class="detail-container-inner">
                <div class="detailpage-price">
                    <label for="price">Price ($$1-20): </label>
                    <input type="number" id="price" name="price" min="0.01" max="20000">
                </div>
                <div id="detailpage-vegfruit-selector">
                    <label for="fruitveg">Category:</label>
                    <select name="fruitveg" id="fruitveg">
                        <option value="0">Fruit</option>
                        <option value="1">Vegetable</option>
                    </select>
                </div>
                <div id="detailpage-organic-checker">
                    <label for="organic" class="organic-checker">Organic</label>
                    <select id="organic" name="organic">
                        <option value="0">Not organic</option>
                        <option value="1">Organic</option>
                    </select>
                </div>
                <p id="detailpage-description">
                    <label for="description">Feature: </label>
                    <input type="text" id="description" name="description" placeholder="Add product Description here">
                </p>
                <div class="button-container">
                    <button id="save-button" type="submit">Save</button>
                    <button id="reset-button" type="reset">Reset</button>
                </div>
            </div>

        </div>

    </form>
<?php
include("footer.html");
?>
</body>

</html>