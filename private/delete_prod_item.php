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

    if (isset($_POST['id'])) {
        // product name
        $product_id = $_POST['id'];

        $db_connection = get_new_connection();

        // prepare and bind
        $stmt = $db_connection->prepare(SQL_OPS["DelProduct"]);
        $stmt->bind_param("i", $product_id);
        //Executing the statement
        $stmt->execute();
        //Closing the statement
        $stmt->close();
        // close the connection after successfully execute
        mysqli_close($db_connection);

        //redirect to show page
        header("Location: ../menu.php");
    }

} else {
    header("Location: ../menu.php");
}