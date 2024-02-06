How to create and drop Database ?

Creating a Database:
CREATE DATABASE [IF NOT EXISTS] database_name
[CHARACTER SET charset_name]
[COLLATE collation_name]

Droping a Database:

DROP DATABASE [IF EXISTS] database_name;

Tables in mySQL :
A table is used to organize data in the form of rows and columns and used for both storing and displaying recoreds in the structure format.

Data types in mySQL:
a datatypes contains multiple columns with specify data types such as numeric or string.MYSQL provides more data types other than just numeric and string.

-The kind of values it represents.
-The space that takes up and whether the values are a fixed-length or variable length.
-The values of the data type can be indexed or not.
-How MySQL compares the values of a specific data type.

INT data type(integar) :-
MySQL support all standard all interger types integer or int and smallint. in addation mySQL provides TINYINT MEDIUMINT and BIGINT.

BIT data type:
The BIT type that allows you to store bit values. Here is the syntax:

BIT(n)
The BIT(n) can store up to n-bit values. The n can range from 1 to 64.

CHAR data type:
The CHAR data type is a fixed-length character type in MySQL. You often declare the CHAR type with a length that specifies the maximum number of characters that you want to store.

The length of the CHAR data type can be any value from 0 to 255. When you store a CHAR value, MySQL pads its value with spaces to the length that you declared.

BOOLEAN data type:
MySQL does not have built-in Boolean type.

Creating a Table:
The CREATE TABLE statement allows you to create a new table in a database.

CREATE TABLE [IF NOT EXISTS] table_name(
column_1_definition,
column_2_definition,
...,
table_constraints
)

The following shows the syntax for a column’s definition:

column_name data_type(length) [NOT NULL] [DEFAULT value] [AUTO_INCREMENT] column_constraint;

The following statement creates a new table named tasks:

CREATE TABLE IF NOT EXISTS tasks (
task_id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
start_date DATE,
due_date DATE,
status TINYINT NOT NULL,
priority TINYINT NOT NULL,
description TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

Droping a Table:
DROP [TEMPORARY] TABLE [IF EXISTS] table_name [, table_name] ...
[RESTRICT | CASCADE]

SELECT statement:
The SELECT statement allows you to select data from one or more tables. To write a SELECT statement in MySQL, you use this syntax:

SELECT select_list
FROM table_name;

ORDER BY statement:
SELECT
select_list
FROM
table_name
ORDER BY
column1 [ASC|DESC],
column2 [ASC|DESC],
...;

INSERT statement:
INSERT INTO table(c1,c2,...)
VALUES (v1,v2,...);

The following statement inserts a new row into the tasks table:

INSERT INTO tasks(title,priority)
VALUES('Learn MySQL INSERT Statement',1);

MySQL returns the following message:

1 row(s) affected

UPDATE statement:
The UPDATE statement updates data in a table. It allows you to change the values in one or more columns of a single row or multiple rows.

UPDATE [LOW_PRIORITY] [IGNORE] table_name
SET
column_name1 = expr1,
column_name2 = expr2,
...
[WHERE
condition];

Conditional Statements and Operators:

WHERE clause:

The WHERE clause allows you to specify a search condition for the rows returned by a query. The following shows the syntax of the WHERE clause:

SELECT
select_list
FROM
table_name
WHERE
search_condition;

AND Operator:
The AND operator is a logical operator that combines two or more Boolean expressions and returns 1, 0, or NULL:

A AND B

OR Operator:
The MySQL OR operator is a logical operator that combines two Boolean expressions.

A OR B

IN Operator:
The IN operator allows you to determine if a value matches any value in a list of values. Here’s the syntax of the IN operator:

value IN (value1, value2, value3,...)\

BETWEEN Operator:
The BETWEEN operator is a logical operator that specifies whether a value is in a range or not. Here’s the syntax of the BETWEEN operator:

value BETWEEN low AND high;

The BETWEEN operator returns 1 if:

value => low AND value <= high

IS NULL Operator:
To test whether a value is NULL or not, you use the IS NULL operator. Here’s the basic syntax of the IS NULL operator:

value IS NULL

SELECT 1 IS NULL, -- 0
0 IS NULL, -- 0
NULL IS NULL; -- 1

       To check if a value is not NULL, you use IS NOT NULL operator:

value IS NOT NULL
This expression returns true (1) if the value is not NULL. Otherwise, it returns false (0).

Interview Questions:
How do you create a database in MySQL?

`CREATE DATABASE books;`

How do you create a table using MySQL?


```sql
CREATE TABLE history (
author VARCHAR(128),
title VARCHAR(128),
type VARCHAR(16),
year CHAR(4)) ENGINE InnoDB;
```

###How do you Insert Data Into MySQL?

> The INSERT INTO statement is used to add new records to a MySQL table:

```sql
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)
```

If we want to add values for all the columns of the table, we don't need to specify the column names in the SQL query. However, the order of the values should be in the same order as the columns in the table. The INSERT INTO syntax would be as follows:

INSERT INTO table_name
VALUES (value1, value2, value3, ...);
