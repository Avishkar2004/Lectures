run xampp
open terminal in xampp :-

run this command to run xampp server :-

mysql -h 127.0.0.1 -u root 

-h : host
-u : root
-p : password

Welcome to the MariaDB monitor.

MariaDB [(none)]> :-

i have logged into the database server

1.Create the database

CREATE DATABASE [databaseName] ;

- Query OK, 1 row affected (0.008 sec)

SHOW DATABASES :- it will show me my all databases

.Delete Databases

DROP DATABASE almabetter

- Create & Delete table

  1.Create Table

* first select database for this use this command

USE DATABASE
MariaDB [almabetter]>

CREATE TABLE [TableNAME];

VARCHAR is euivallent to STRING

- CREATE TABLE avishkar(firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30));

  :-creating a table with 2 field of each size 30 and first name can not be null

- show the table

- SHOW TABLES;
  :- it will display the list of all table from the selected database

delete table

- DROP TABLE [TABLENAME];
  :- it will delete the selected table

- DESCRIBE avishkar;
  :- it will show the table str of avishkar

CRUD implementation on the table

1.  Create = Insert Query Statement
    :- INSERT INTO TABLENAME(fields list) VALUES (data);

        INSERT INTO avishkar(firstname, lastname) VALUES ("Berner", "Lee");

    :- used to insert a single record/row/tuple etc...

:-used to insert multiple record/rows/tuple at the same time

INSERT INTO avishkar(firstname, lastname) VALUES ("Berner", "Lee"),("Ravi","Kumar"),("jocky","Pandhare");

2.  Read => SELECT Query statement

        SELECT * FROM avishkar;

    :- displays all the data with the entire table fields.

        SELECT firstname from avishkar;

:- displays all the data with only the firstname field;

    SELECT firstname,lastname FROM avishkar;

:- displays all the data with only 2 fields as mentioned which are separeted by a comma

    SELECT * FROM avishkar ORDER BY firstname ASC;

:- Displays all the data which will be sorted based on the firstname field and it will be arranged in Ascending order

     SELECT * FROM avishkar ORDER BY firstname DESC;

:- Displays all the data which will be sorted based on the firstname field and it will be arranged in descending order

ASC :- ascending order
DESC :- descending order

        SELECT * FROM avishkar WHERE lastname="Lee";

:-Display the data based on a certain condition.

        SELECT * FROM avishkar WHERE lastname="Lee" AND firstname="Berner" ;

:-Display the data based on a multiple using AND condition.

SELECT * FROM avishkar WHERE lastname="Lee" OR firstname="Berner" ;

:-Display the data based on a multiple using OR condition.

        SELECT * FROM avishkar WHERE lastname IN('Lee','Pandhare');

:-Display the data based on the values that the present in the parameters which are passed using IN Operator;

3.  UPDATE => UPDATE query statement

            UPDATE avishkar SET lastname = "A" WHERE firstname="Berner";

    :- it selects the record using the condition specifies in the where clause and for that record it will update the field specified in the SET Clause.

4.  DELETE => DELETE Query Statement

        DELETE FROM avishkar WHERE firstname = "Berner";

    :-It selects the record using the condition specified in thr where clause and that record will be deleted

        DELETE FROM avishkar;

:- It will delete all the records from the table avishkar[tableName];
:-it is also called as TRUNCATE(Removes all the data but the table str remains);

================================================================================================================

Data types in mysql.

Int Data type Category(Number)
tinyint
smallint
mediumint
int
bigint

String Data type category
char
text
varchar

BOOLEAN data type category
BOOL
BOOLEAN

    Bit

DATE
TIME
DATETIME
TIMESTAMP
YEAR
MONTH
DAY
WEEK
SECONDS
HOURS
MINUTES
etc...

================================================================================================================

what are primary and unique keys ?

Primary :- both the index & values are unique

unique keys :- Index is unique but have same values.
