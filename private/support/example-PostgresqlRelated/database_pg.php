<?php
// Load db credentials before build a connection with database
require_once('db_credentials.php');

/**
 * Create a new connection to database
 *
 * @return PgSql\Connection database connection
 */
function get_new_connection()
{
    $connection = pg_connect(PG_CONNECT_STRING);
    check_db_connection($connection);
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
        pg_close($connection);
    }
}

/**
 * Check whether connect successfully
 *
 * @return void
 */
function check_db_connection($connection)
{
    if (pg_last_error($connection)) {
        $msg = "Database connection failed: ";
        $msg .= pg_last_error($connection);
        $msg .= " (" . pg_last_error($connection) . ")";
        exit($msg);
    }
}

/**
 * check whether query successfully
 *
 * @param void|PgSql\Connection $connection a database connection
 * @return void
 */
function check_execution_successfully($connection)
{
    $error_msg = pg_last_error($connection);
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