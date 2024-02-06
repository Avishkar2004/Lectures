1. Aggregate Function in Mysql
2. Join and Union Operator
3. Time, Date, TimeStamp, etc... im mysql
4. Triggers in mysql
5. Conversion of one data type to another data type in mysql

1.Go to XAMPP
2.Run xampp
3.click on shell
4. mysql -h 127.0.0.1 -u root



we need table to explain or see the demo about these concepts hence we are going to create 2 diff tables


table1
name    empid       email           age     dob             salary

ram     alma001     ram@gmail.com   23      11/11/2009      1500
ran     alma002     ran@gmail.com   27      07/06/2008      1600
raa     alma003     raa@gmail.com   21      08/07/2011      1200
raw     alma004     raw@gmail.com   28      11/08/2006      1800
rar     alma005     rar@gmail.com   25      01/11/2012      1100


COMMAND :-

CREATE TABLE table1(name VARCHAR(30), empid       VARCHAR(7) PRIMARY KEY, email VARCHAR(30), age TINYINT, dob DATE, salary INT);

    INSERT INTO table1(name,empid,email,age,dob,salary) VALUES ("ram","alma001", "ram@gmail.com","23", "11/11/2009", 1500);

    
     INSERT INTO table1(name,empid,email,age,dob,salary) VALUES ("ran","alma002", "ran@gmail.com",27, "11/11/2009", 1600),("raa", "alma003","raa@gmail.com",21,"08/07/2011",1200),("raw","alma004", "raw@gmail.com",28,"11/08/2006",1800),("rar", "alma005","rar@gmail.com" ,25,"01/11/2012",1100);


select * from table1;



table2
empid       projectname      projectid
7               5                 3

PRIMARY
alma001     alpha               p01
alma002     alpha               p01
alma003     alpha               p01
alma004     delta               p04
alma005     alpha               p01
alma003     beta                p02
alma005     beta                p02
alma002     gamma               p03


COMMANDS :-

         CREATE TABLE table2 ( projectname VARCHAR(5), empid VARCHAR(7), projectid VARCHAR(3));

         INSERT INTO table2(empid,projectname, projectid) VALUES("alma001","alpha","p01"),("amla002","alpha","p01"),("alma003","alpha","p01"),("alma004","delta","p04"),("alma005","alpha","p01"),("alma003","betha","p02"),("alma005","betha","p02"),("alma002","gamma","p03");


Aggregate Function in Mysql

average:-

SELECT AVG(salary) FROM table1;

Division:-
SELECT SUM(salary) DIV 5 from table1;

Sum :-
SELECT SUM(salary) from table1;

Count:-
SELECT SUM(salary) DIV COUNT(salary) from table1;

MAX:-
 SELECT MAX(salary) from table1;

MAX with name:-
 SELECT MAX(salary),name from table1;

MIN:-
 SELECT MIN(salary)from table1;

MIN with name:-
  SELECT MIN(salary),name from table1;



JOIN and UNION Operator :-

1. Join :- Bringing 2 things together as one.
5 diff types: -
1.Inner join
 SELECT table1.empid,table2.empid FROM table1 INNER JOIN table2 ON table1.empid=table2.empid;

2.Full outer join
 SELECT table1.empid,table2.empid FROM table1  JOIN table2 ON table1.empid=table2.empid;

3.left join
    SELECT table1.empid, table2.empid FROM table1 LEFT JOIN table2 ON table1.empid=table2.empid;

4.right join
     SELECT table1.empid, table2.empid FROM table1 RIGHT JOIN table2 ON table1.empid=table2.empid;

5.cross join
      SELECT table1.empid, table2.empid FROM table1 CROSS JOIN table2 ON table1.empid=table2.empid;

2. Union :- Different combination are brought together from 2 tables.



=========================================================================================================================================================================


LECTURE 2 :-

MySQL Triggers :-

1. Create Triggers

CREATE TRIGGER <trigger name> <trigger time > <trigger event>
ON <table name>
FOR EACH ROW
<trigger body>;

Use almabetter;

create table Person (
    ID int,
    Name varchar(30),
    Age int
)


insert into Person values(001, 'john', 27);

select * from person;

DELIMITER //
CREATE TRIGGER person_bi BEFORE INSERT ON person
FOR EACH ROW
BEGIN
    IF NEW.age < 18 THEN
        SIGNAL SQLSTATE "50001" SET MESSAGE_TEXT = "Person must be older than 18 years.";
    END IF;
END;
//
DELIMITER ;

insert into Person values(001, 'john', 17);

MariaDB [almabetter]> insert into Person values(001, 'john', 17)


DROP TRIGGER :-
drop trigger <name of the trigger>

drop trigger person_bi;

Uses :- for email, password, sending notification ... etc