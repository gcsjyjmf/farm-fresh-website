# Database Description

## Database
> Database name: web_team_work <br>
> Use the sql bellow to creat the database account
```sql
create
database web_team_work;
```
## Tables

### t_product 
> Engine: Innodb

|column | type | default value | nullable| comment| index| note |
|---|---|--------|--------|---|-----------|---------------|
|id | bigint | N/A| Not Null|product id | primary key | auto increment |
|name |varchar(128)  | N/A| Not Null| product name| N/A  ||
|fruitveg |smallint  | 0| Not Null| fruit or veg, 0: fruit; 1: veg'| N/A  ||
|description | varchar(1024) | '' | Not Null| description | N/A  ||
|organic |smallint| 0| Not Null|  organic, 0: not organic; 1: yes | N/A  ||
|price_cents|bigint  | 1000000 | Not Null|  product price in cents | N/A  ||
|image_location |varchar(1024)   | N/A|Not Null | image location| N/A  ||
|invalid |smallint  |0   | Not Null |invalid item, 0: valid; 1: invalid| N/A  | |
|operation_time| timestamp| current_timestamp() | Not Null | the date time that the record inserted or updated| N/A  ||

### t_user
> Engine: Innodb

|column | type | default value | nullable| comment | index| note |
|---|---|--------|--------------|---------|-------------|----------------|
|id | bigint | N/A| Not Null| user id | primary key | auto increment |
|user_name|  varchar(512)|   N/A | Not null| user name|N/A|unique index unique_user_user_name|
|first_name| varchar(128)|  '' | Not null| first name|N/A||
|last_name|  varchar(128)|  '' | Not null| last name|N/A||
|password |  varchar(16)| N/A |Not null| user password|N/A||
|admin_group |   smallint|  0 | Not null| admin_group 0: not admin; 1: yes|N/A||
|invalid |   smallint|  0 |  Not null| invalid item, 0: valid; 1: invalid|N/A||
|operation_time| timestamp| current_timestamp()| Not null| the date time that the record inserted or updated|N/A||

## Account
> Use the sql bellow to creat the database account 

```sql
  CREATE
  USER 'appuser'@'localhost' IDENTIFIED BY 'teamwork2022';

  GRANT INSERT,
  UPDATE,
  DELETE,
  SELECT
  ON web_team_work.* TO 'appuser'@'localhost';
  FLUSH PRIVILEGES;
```