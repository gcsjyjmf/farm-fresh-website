<!-- 
    The following people have worked on this file:
     Lei Li 
-->
<?php
// Load db credentials before build a connection with database
require_once('db_credentials.php');

/**
 * Create a new connection to database
 *
 * @return false|mysqli database connection
 */
function get_new_connection()
{
    $connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME, DB_PORT);
    check_db_connection();
    return $connection;
}

/**
 * Close the database connection
 *
 * @param [type] $connection a database connection
 * @return void
 */
function close_connection($connection)
{
    if (isset($connection)) {
        mysqli_close($connection);
    }
}

/**
 * Check whether connect successfully
 *
 * @return void
 */
function check_db_connection()
{
    if (mysqli_connect_errno()) {
        $msg = "Database connection failed: ";
        $msg .= mysqli_connect_error();
        $msg .= " (" . mysqli_connect_errno() . ")";
        exit($msg);
    }
}

/**
 * check whether query successfully
 *
 * @param mysqli $connection a database connection
 * @return void
 */
function check_execution_successfully($connection)
{
    $error_msg = mysqli_error($connection);
    exit($error_msg);
}

/**
 * check query result validation
 *
 * @param $result_set
 * @return void
 */
function confirm_result_set($result_set)
{
    if (!$result_set) {
        exit("Database query failed.");
    }
}