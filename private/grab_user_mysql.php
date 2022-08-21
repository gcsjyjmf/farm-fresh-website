<!-- 
    The following people have worked on this file:
     Lei Li 
-->
<?php
session_start();

// in order to use database connection, import the related function
require_once('db_credentials.php');
require_once('db_operate_sql.php');
require_once('database_mysql.php');

// Only handel POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $db_connection = get_new_connection();
    switch ($_POST['feature']) {
        case "INSERT" :
            // prepare and bind
            $stmt = $db_connection->prepare(SQL_OPS["AddUser"]);
            $stmt->bind_param("ssss",
                $_POST['user_name'],
                $_POST['first_name'],
                $_POST['last_name'], $_POST['password']);
            //Executing the statement
            $stmt->execute();
            //Note: In order to select after insert, we do not need break; here.

        case "VERIFY_USER" :
            // prepare and bind
            $stmt = $db_connection->prepare(SQL_OPS["VerifyUserByUserNameAndPwd"]);
            $stmt->bind_param("ss", $_POST['user_name'], $_POST['password']);
            //Executing the statement
            $stmt->execute();
            $result = $stmt->get_result();
            while ($row = mysqli_fetch_assoc($result)) {
                $product_array[] = $row;
            }

            if (isset($product_array)) {
                $_SESSION["current_user"] = $product_array[0];
            }

            echo json_encode($product_array ?? "");
            //Closing the statement
            $stmt->close();
            break;
        case "VERIFY_USERNAME" :

            // prepare and bind
            $stmt = $db_connection->prepare(SQL_OPS["VerifyUserByUserName"]);
            $stmt->bind_param("s", $_POST['user_name']);
            //Executing the statement
            $stmt->execute();
            $result = $stmt->get_result();
            while ($row = mysqli_fetch_assoc($result)) {
                $product_array[] = $row;
            }
            echo json_encode($product_array ?? "");
            //Closing the statement
            $stmt->close();
            break;
    }

    close_connection($db_connection);
}