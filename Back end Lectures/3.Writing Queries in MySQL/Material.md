Aggregate Functions :-

The aggregate functions are often used with the GROUP BY clause to calculate an aggregate value for each group e.g., the average value by the group or the sum of values in each group.

function_name(DISTINCT | ALL expression)

Join Operator :-
A JOIN clause is used to combine rows from two or more tables, based on a related column betn them.

Inner Join :-
The simplest join type is INNER JOIN. The INNER JOIN results with a set of records that satisfy the given condidition in join tables.it matches each rows in one table with every row in other tables and allows users to query rows containing columns from both tables.

The syntax for an INNER JOIN is:

SELECT table1.column1, table1.column2, table2.column1, ...
FROM table1
INNER JOIN table2
ON table1.matching_column = table2.matching_column;

Left Join
The LEFT JOIN (or LEFT OUTER JOIN) return all records from the table on the left side of the join and matching records from the table on the right side of the join. if there are rows for which there are no matching rows on the right-side tbale, the result the value display is NULL.

The syntax for LEFT JOIN is:

SELECT table1.column1, table1.column2, table2.column1, ...
FROM table1
LEFT JOIN table2
ON table1.matching_column = table2.matching_column;

Right Join
The RIGHT JOIN (RIGHT OUTER JOIN) is essentially the reverse of LEFT OUTER JOIN.

The RIGHT JOIN return all records from the table on the right side of the join and matching records from the table on the left side of the join.

The syntax for RIGHT JOIN is:

SELECT table1.column1,table1.column2,table2.column1,....
FROM table1
RIGHT JOIN table2
ON table1.matching_column = table2.matching_column;

Cross Join
the CROSS JOIN (also called CARTESIAN JOIN) joins each row of one tbale to every row to another table.
The CROSS JOIN happens when the matching column or the WHERE condition are not speccified.The result-set of a cross join is the product of the number of rows of the joined tables.

The syntax for CROSS JOIN is:
SELECT table1.column1, table1.column2, table2.column1, ...
FROM table1
CROSS JOIN table2;

MySQL does not support FULL OUTER JOIN, but the same functionality can be implemented using UNION operator about which we’ll learn next.

Union Operator
The UNION operator is used to combine the result-set of two or more SELECT statement.

-Every SELECT statement within UNION must have the same number of columns
-The columns must also have similar data types
-The columns in every SELECT statement must also be in the same order

SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;

UNION ALL
The UNIONoperator selects only distinct values by default. To allow duplicate values, use UNION ALL :

SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;

Implementing FULL OUTER JOIN Using UNION

We can use a combination of LEFT JOIN, UNION ALL, and RIGHT JOIN, which outputs a union of table 1 and table 2, returning all records from both tables. The columns existing only in one table will be displayed as NULL in the opposite table.

SELECT _ FROM table1
LEFT JOIN table2 ON table1.matching_column = table2.matching_column
UNION ALL
SELECT _ FROM table1
RIGHT JOIN table2 ON table1.matching_column = table2.matching_column

Dealing with Dates / Timestamps
MySQL stores date and time values using 5 different data types i.e. – YEAR, DATE, TIME, DATETIME, and TIMESTAMP. Let’s try to understand these briefly in the below table, before diving deeper into DATE FORMATS and DATETIME FUNCTIONS provided by MySQL.

Getting Current Date and Time
SELECT now(); -- date and time
SELECT curdate(); --date
SELECT curtime(); --time in 24-hour format

Adding and Subtracting Dates
ADDDATE()

This function is used to add a date to an existing date value which could be of type – DATE, DATETIME, or TIMESTAMP.

SUBDATE()
SUBDATE is exactly similar to ADDDATE, the only difference being, SUBDATE subtracts the given Interval/No. of days from the column/field value.

SUBTIME subtracts the time value specified in hh:mm:ss from a given datetime or time field value.

Converting Dates
MySQL provides a variety of in-built functions from converting dates from one format to another. Let’s see the most widely used functions for converting dates.

CONVERT_TZ()

This function is used to convert the date from one timezone to another. These come handy in situations where suppose your data was stored using UTC timezone and while displaying you want to convert into timezone of your choice.

SELECT CONVERT_TZ('2004-01-01 12:00:00', 'UTC', 'MET');

FROM_UNIXTIME()

This function is used to convert a given UNIX TIMESTAMP to MySQL datetime format.

UNIX_TIMESTAMP()

This function is used to convert a given MySQL datetime to UNIX timestamp.

UNIX timestamp is the representation of a given date in the form of seconds elapsed since January 1, 1970, UTC.

Extract DAY DATE() – Extract the DATE() part of datetime field. DAYOFMONTH() – Extract the DAY part. Its essentially the day of the month. Shorthand for using this function is DAY() DAYOFWEEK() – Extracts the index corresponding to the day of week – values between 1 to 7. DAYOFYEAR() – Extracts the day in terms of no. of days passed in a year.

Finding Difference between two dates

In order to find the difference between 2 given datetime field values, MySQL provides DATEDIFF() & TIMEDIFF() functions.

Formatting Dates
DATE_FORMAT() function converts the date in the given format.

MySQL Triggers
What is a Trigger in MySQL?

A trigger is a named MySQL object that activates when an event occurs in a table. Triggers are a particular type of stored procedure associated with a specific table.

- you can access new data or old data.

Using MySQL Triggers

1. Time. BEFORE or AFTER a specific row event.

2. Event. INSERT, UPDATE or DELETE.

Create Triggers
Use the CREATE TRIGGER statement syntax to create a new trigger:

CREATE TRIGGER <trigger name> <trigger time > <trigger event>
ON <table name>
FOR EACH ROW
<trigger body>;

Delete Triggers
To delete a trigger, use the DROP TRIGGER \*\*\*\*statement:

DROP TRIGGER <trigger name>;

// Alternatively, you can use :
DROP TRIGGER IF EXISTS <trigger name>;

delimiter //
CREATE TRIGGER person_bi BEFORE INSERT
ON person
FOR EACH ROW
IF NEW.age < 18 THEN
SIGNAL SQLSTATE '50001' SET MESSAGE_TEXT = 'Person must be older than 18.';
END IF; //
delimiter ;

NOTE: A MySQL client uses the delimiter (;) to separate statements and executes each statement separately. However, a stored procedure consists of multiple statements separated by a semicolon (;).

MySQL Datatypes
MySQL supports SQL data types in several categories: numeric types, date and time types, string (character and byte) types, spatial types, and the JSON data type. Apart from the Date and Datetime datatype we already discussed, the most frequently used datatype are :

INT :- A standard integer
DECIMAL :- A fixed-point number
FLOAT :- A single-precision floating point number
DOUBLE :- A double-precision floating point number
BIT :- A bit field
CHAR :- A fixed-length nonbinary (character) string
VARCHAR :- A variable-length non-binary string
BLOB :- A small BLOB
LARGEBLOB :- A large BLOB
TEXT :- A small non-binary string
LARGETEXT :- A large non-binary string

NOTE : MySQL does not have the built-in BOOLEAN or BOOL data type. To represent boolean values, MySQL uses the smallest integer type which is TINYINT(1). In other words, BOOLEAN and BOOL are synonyms for TINYINT(1).

Datatype Conversions
The CONVERT() function in MySQL is used to convert a value from one data type to the other data type specified in the expression. MySQL also allows it to convert a specified value from one character set to the different character set.

What are the types of JOIN operators supported by MySQL?

Inner Join
Left Join
Right Join
Cross Join

How many Triggers are possible in MySQL? There are six Triggers allowed to use in the MySQL database:
Before Insert
After Insert
Before Update
After Update
Before Delete
After Delete
