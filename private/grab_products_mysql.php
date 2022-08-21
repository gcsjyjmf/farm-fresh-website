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

    $db_connection = get_new_connection();


    $result = mysqli_query($db_connection, SQL_OPS["SelectAll"]);

    while ($row = mysqli_fetch_assoc($result)) {
        $product_array[] = $row;
    }
    echo json_encode($product_array);

    close_connection($db_connection);
}