What is Schema Design ?
-A database schema is a blueprint that adress every functional element of a database, sucha as tables, fileds, records and key and their relationalships to each other.

Why design database schemas?
-A well-designed schema helps ensure data intergrity.

when a schema is well-designed for analytics:
-Analysts don't have to clean data or preprocess it before analyzing it.
-Analysts don't have to reverse-engineer the underlying data model.
-Analsts have a clear, easily understood starting point for analystics.

A schema designed for analytics mean faster access to data for creating report and dashboards.
The opposite means extra data modeling.

Types of database models

1. Hierarchical database model
2. Relational model
3. Network model
4. object-oriented database model
5. Document model
6. Entity-attribute-value model
7. star schema
8. The object-relational model, which combined the two that make up it's name.

-- database management system you are using supports a particular model.

what is Database Normalization ?
Database normalization is the process of restructuring a relational database in accordance with a series of so called normal forms in order to reduce data redundancy and improve data integrity.

The database normalization process is further categorized into the following types:

1. First Normal Form (1 NF)
2. Second Normal Form (2 NF)
3. Third Normal Form (3 NF)
4. Boyce Codd Normal Form or Fourth Normal Form ( BCNF or 4 NF)
5. Fifth Normal Form (5 NF)
6. Sixth Normal Form (6 NF)

One of the driving forces behind database normalization is to streamline data by reducing redundant data.

Redundancy of the data means there are multiple copies of the some information spread over multiple location in some database.

Some Drawback of the data redundancy :-

1. Data maintenance becomes tedious - data deletion and data updates becomed problematic.
2. it creates data inconsistencies
3. insert, update and delete anomalies becomes frequently.
4. Redundant data inflates the size of a database and takes up an inordinate amount of space on disk.

Normal Forms

1. First Normal Form (1 NF)
2. Second Normal Form (2 NF)
3. Third Normal Form (3 NF)
   a database is considered third normal form if it meets the requirement of the first 3 normal forms
   
1. First Normal Form (1NF):

-The first normal form requires that a table satisfies the following conditions:

1. Rows are not ordered
2. Columns are not ordered
3. There is duplicated data
4. Row-and-column intersections always have a unique value
5. All columns are “regular” with no hidden values

- second normal form and third normal form are all about the relationship between the column that are keys and the other columns that aren't the key columns.

2. Second Normal Form (2NF):
   An entity is in a second normal form if all of it's attributes depend on the whole primary key.
   so this means that the other value in the diff columns have a dependency on the other columns.

- The table must be already in 1 NF and all non-key columns of the tables must depend on the PRIMARY KEY

- The partial dependencies are removed and placed in a separate table

Note :- Second normal form (2 NF ) is only ever a problem when we're using a composite primary key.That is, a primary key made of two or more columns.

3. Third Normal Form (3NF):
   The third normal form state that you should eliminate field in a table that do not depends on the key.

1. A Table is already on 2 NF
1. Non-primary key columns shouldn't depend on the other non-primary key columns
1. There is no transitive functional dependency

ACID Properties

The transaction properties are referred to as ACID (Atomicity,Consistency,Isolation, Durability ) property

1. Atomicity :- This property ensure that all statement or operation includes in the transaction must be performed successfully. otherwise , the whole transaction will be aborted, and all operation and rolled back into their previous state when any operation is failed.

2. Consistency :- This property ensure that the database changes state only when a transaction will be commited succssfully.
   -protecting data from crashes.

3. Isolation :- This property guarantees that all transactions are isolated form other transaction, meaning each operation in the transaction is operated independently.

4. Durability:- This property guarantees that the result of committed transactions persists in the database permanently even if the stystem crashes or failed.

Interview Questions
1 Q. List the different types of relationships in SQL.

- One-to-One :- This can be defined as the relationship between two tables where each recors in one table is associated with the maximum of one record in the other table.

- One-to-Many & Many-to-One :- This is the most commonly used relationship where a record in a table is assocailted with multiple records in the other table.

- Many-to-Many - This is used in cases when multiple instance on both side are needed for defining a relationship.

2 Q. What is Normalization?

- Normalization represents the way of organizing structured data in the database efficiently. It includes the creation of table, establishing relationships between them, and defining rules for those relationships.

3 Q. What are the disadvantages of not performing database Normalization?

- The major disadvantages are : The occurrence of redundant terms in the database causes the waste or space in the disk. Due to redundant terms, inconsistency may also occurs. if any change is made in the data of one table but not made in the same data of another table, then inconsistency will occurs.