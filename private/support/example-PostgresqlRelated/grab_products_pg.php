<?php
// in order to use database connection, import the related function
require_once('db_credentials.php');
require_once('db_operate_sql.php');
require_once('database_mysql.php');

// Only handel POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $db_connection = get_new_connection();
    if (pg_connection_status($db_connection) === PGSQL_CONNECTION_BAD) {
        echo 'connection_status: PGSQL_CONNECTION_BAD ';
    }

    $result = pg_query($db_connection, SQL_OPS["SelectAll"]);
//    check_execution_successfully($db_connection);
//    if (!$result) {
//        echo "query did not execute";
//    }

    while ($row = pg_fetch_assoc($result)) {
        $product_array[] = $row;
    }
    echo json_encode($product_array);

//    if ($result) {
//        echo "after if";
//        // associative array
//        while ($row = pg_fetch_array($result)) {
//            $product_array[] = $row;
//        }
//        //Objects in PHP can be converted into JSON by using the PHP function json_encode()
//        echo json_encode($product_array);
//    } else {
//        echo "0 results";
//    }
    close_connection($db_connection);
}