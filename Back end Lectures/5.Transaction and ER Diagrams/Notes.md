Transactions :-
A Transactions in sql server is sequential group of statements or queries to perform single or multiple tasks in a database. each transition may have single read, write, update or delete operation or a combination of all these operatio. Each transaction must happen two things in sql server:-

- Either all modification is successful when the transaction is committed.
- Or, all modifications are undone when the transaction is rollback.

MySQL Transaction Statement

SET autocommit = 0;  
OR,  
SET autocommit = OFF:

Again, use the below statement to enable auto-commit mode:

SET autocommit = 1;  
OR,  
SET autocommit = ON:

COMMIT Example :-
if we want to use a transaction, it is required to break the SQL statement into logical portions.After that, we can define whether the data should be committed or rollback.

- The following steps illustrate to create a transaction:

1. Begin the transaction using START TRANSACTION statement.
2. Then, select maximum income among the employee.
3. Add a new record to the employee table.
4. Add a new record into the order table.
5. Use the COMMIT statement to complete the transaction.

-- 1. Start a new transaction

START TRANSACTION;

-- 2. Get the highest income

SELECT @income:= MAX(income) FROM employees;

-- 3. Insert a new record into the employee table

INSERT INTO employees(emp_id, emp_name, emp_age, city, income)  
VALUES (111, 'Alexander', 45, 'California', 70000);

-- 4. Insert a new record into the order table

INSERT INTO Orders(order_id, prod_name, order_num, order_date)  
VALUES (6, 'Printer', 5654, '2020-01-10');

-- 5. Commit changes  
COMMIT;

ROLLBACK Example :-

-- 1. Start a new transaction  
START TRANSACTION;

-- 2. Delete data from the order table  
DELETE FROM Orders;

SAVEPOINT, ROLLBACK TO SAVEPOINT, RELEASE SAVEPOINT

- The SAVEPOINT statement creates a special mark with the name of the identifier inside a transaction.

ROLLBACK TO SAVEPOINT :- allows us to rolls back all transactions to the given savepoint was established without aborting the transaction.

RELEASE SAVEPOINT :- this statement destroy the named savepoint from the current transaction without undoing the effect of queries executed after the savepoint was established. after these statement, no rollback command occurs.

SAVEPOINT savepoint_name  
ROLLBACK TO [SAVEPOINT] savepoint_name  
RELEASE SAVEPOINT savepoint_name

Entity Relationship (ER) Diagrams :-
ER Diagram stands for Entity Relationship Diagram, also known as ERD is a diagram that displays the relationship of entity sets stored in a database.

- in other word, ER diagrams help to explain the logical str of databases. ER diagrams are created based on three basic concepts : entities, attributes and relationships.

What is ER Model?

- ER model stands for entity relationship model is a high-level conceptual data model diagram. ER Model helps to systematically analyze data requirements to produce a well-designed database.

Facts about ER Diagram Model
-ER model allows you to draw database design
-it is an easy to use graphics tool for modeling data
-widely used in database design
-it is a GUI representation of the logical str of a database.
-it helps you to identify the entities which exist on a system and the relationships betn those entity.

ER Diagrams Symbols & Notations
Entity Relationship Diagram Symbols & Notations mainly contains three basic symbols which are rectangle, oval and diamond to represent relationships between elements, entities and attributes.

Following are the main components and its symbols in ER Diagrams:

1. Rectangles: This Entity Relationship Diagram symbol represents entity types

2. Ellipses : Symbol represent attributes

3. Diamonds: This symbol represents relationship types

4. Lines: It links attributes to entity types and entity types with other relationship types

5. Primary key: attributes are underlined

6. Double Ellipses: Represent multi-valued attributes

Components of the ER Diagram

This model is based on three basic concepts:

Entities
Attributes
Relationships

WHAT IS ENTITY?
A real-world thing either living or non-living that is easily recognizable and non-recognizable.

How to Create an Entity Relationship Diagram (ERD)

Step 1:- Entity Identification
We have three entities

Student
Course
Professor

Step 2:- Relationship Identification
We have the following two relationships

The student is assigned a course
Professor delivers a course

Step 3:- Cardinality Identification
For them problem statement we know that,

A student can be assigned multiple courses
A Professor can deliver only one course

Step 4:- Identify Attributes
You need to study the files, forms, reports, data currently maintained by the organization to identify attributes.

Step 5 :- Create the ERD Diagram

A more modern representation of Entity Relationship Diagram Example.