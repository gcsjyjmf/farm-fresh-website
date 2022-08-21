<!-- 
    The following people have worked on this file:
     Lei Li 
-->
<?php
// in order to use database connection, import the related function
require_once('db_credentials.php');
require_once('db_operate_sql.php');
require_once('database_mysql.php');

// Only handel POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // determine if the file is uploaded.
    if (isset($_FILES['product-image'])) {
        $image_location = "images/" . $_FILES['product-image']['name'];
        // The image file will be replaced if the name is repeated
        move_uploaded_file($_FILES['product-image']['tmp_name'], "../".$image_location);
        // begin to process other form properties after moving the picture to images folder
        if (isset($_POST['name'])) {
            // product name
            $name = $_POST['name'];
            // category
            $fruitveg = $_POST['fruitveg'];
            // product description
            $description = $_POST['description'];
            // organic
            $organic = $_POST['organic'];
            // product price, convert price to cents
            $price_cents = $_POST['price'] * 100;

            $db_connection = get_new_connection();

            // prepare and bind
            $stmt = $db_connection->prepare(SQL_OPS["AddProduct"]);
            $stmt->bind_param("sisiis", $name, $fruitveg, $description, $price_cents, $organic, $image_location);
            //Executing the statement
            $stmt->execute();
            $new_id = $stmt->insert_id;
            echo $new_id;
            //Closing the statement
            $stmt->close();
            // close the connection after successfully execute
            mysqli_close($db_connection);

            //redirect to show page
            header("Location: ../detail.php?id=$new_id");
        }
    }

} else {
    header("Location: ../admin.php");
}