<!-- 
    The following people have worked on this file:
     Lei Li 
-->
<?php
const SQL_OPS = [
    "AddProduct" =>
        "insert into t_product (name, fruitveg, description, price_cents, organic, image_location) values (?, ?, ?, ?, ?, ?);",
    "DelProduct" =>
        "delete from t_product where id = ?",
    "updateProduct " =>
        "update t_product set name = ?, fruitveg = ?, description = ?, price_cents = ?, organic = ? where id = ? ",
    "SelectAll" =>
        "select id, name, fruitveg, description, organic, price_cents, image_location, invalid from t_product;",
    "VerifyUserByUserName" =>
        "select id,
       user_name,
       first_name,
       last_name,
       admin_group,
       invalid from t_user where user_name = ?;",
    "VerifyUserByUserNameAndPwd" =>
        "select id,
       user_name,
       first_name,
       last_name,
       admin_group,
       invalid from t_user where user_name = ? and password = ?;",
    "AddUser" => "insert into t_user (user_name, first_name, last_name, password) values (?,?,?,?);"
];
