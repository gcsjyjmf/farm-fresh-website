<!-- 
    The following people have worked on this file:
     Lei Li 
-->
<?php
/**
 * database host
 */
const DB_SERVER = "127.0.0.1";
/**
 * database user
 */
const DB_USER = "root";
/**
 * database user's password
 */
const DB_PASS = "";
/**
 * selected database
 */
const DB_NAME = "web_team_work";
/**
 * specific port
 */
const DB_PORT = 3306;

const PG_CONNECT_STRING = "host=" . DB_SERVER
    . " port=5432 dbname=" . DB_NAME
    . " user=" . DB_USER
    . " password=" . DB_PASS;