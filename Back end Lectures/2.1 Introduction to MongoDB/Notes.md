what ?
- MongoDB is a non-relational Database.
- This is a document oriented NRDB(non-relationa database)
- The data is semi structured or it is un structured.
- Data/record/row Size is not fixed (variable). it varies.
- data format is of type key value pair where the key acts likes a files name (or column name) and value is the actual data (or value)
- started in 2000's
- it is the most popular document based NRDBMNS

MySql               MongoDB

Database            Database    
Table               collection
Record/tuple        documnent
column Name         Key in the doc
value               Value in the doc
primart key         _id Field
SQL                 Pre Defined Functions


what is the advantage ?
=> 1. Flexibility in size of the data
=> 2. Scalability of the database
=> 3. Performance
=> 4. Auto indexing is Done. it becomes faster in fetching the record
=> 5. Load balancing :- we can create multiple instance of mongoDB database


MongoDB Atlas :- cloud based mongo database. provides us the power of creating cluster(Group of MongoDB Instance)

JSON :- javascript object notation
= it is a object with key value pair
= the object is enclosed with {}
= the key value pair is separated by :
= it is case sensitive
= the key and the value should be enclosed with "" or ''. except the value which are of type numbers
= we have arrays as a value
= we can also define data, time, month, year, etc...

{
    "student":[
        {"name":"avishkar"},
        {"name":"anmol"},
        {"name":"saurabh"}
    ]
}

REST API also has a json data as a response

BSON :-Binary JSON 
-the json data is converted into BSON i.e binary str.
-binary str will have the type of encoding & also have the size of the data. it becomes very easy to parse the data.
-binary data will be indexed and hence querying them becomes very easy.


Huge Amount of Data
and sometimes we may need to analyse the data to find out the customers intrests.


** _id Field :-

- objectID
- it is like a primary key which was created by default. the indexing by done by default.the querying of data becomes very fast
- this key _id will have a 24 character value.
- the space or memory that this 24 character occupiess is only 12 bytes.
- these 24 character is divided into 4 parts

1. 4 bytes :-Timestamp
2. 3 bytes :-your own system _id
3. 2 bytes :- process ID
4. 3 bytes :- Counter

0   0
1   1   
2   2
3   3
4   4
5   5
6   6
7   7
8   8
9   9   
10  a
11  b
12  c
13  d
14  e
15  f


- the data is of type hexadecimal, the value range is from 0 to f  

"_id" : "12345678454f1234567823452389"

MongoDB Server :- data base => storage area

MognoDB shell :- cmd => used to communicate with the server by using shell command we will perform some operation on the server.

MongoDB Composs :- Graphical user interface => used to communicate with the server => by using the graphical interface we will perform some operations on the server

MongooDB Atlas :-Remote Database :- storage area => it has both the shell and composs to commnicate with the remote database.


Database shell command :-
Create :-
- use "database name"
Delete :-
- db.dropDatabase();

view :-
- show collections or show dbs

Collection :- 
Create :-
- db.createCollection("lee")

delete :-
- db.lee.drop()

view :-
- show collections


** MongoDB - II
1. Import and Export Date
2. Querying data
3. Creating and manipulation document
4. Advanced CRUD Operation in MongoDB


Sample Document :-
[
{
    "name" : "anmol",
    "age" :22,
    "skillser":["R","Python","DotNet"],
    "salary" :850
},

{
    "name" : "anand",
    "age" :32,
    "skillser":["C","php","java"],
    "salary" :1000
}
]

Insert Function => create operation
 1- insertOne
=> db.lee.insertOne(data)


 2-insertMany
=> when you want to pass data use array and separate with [,]

=> db.lee.insertMany(Array of data)

 3-insert
=> This can used to pass single or multiple document

=> db.lee.insert(data or Array of Data)

Find Function => Read Operation

1.find
:- db.lee.find()

2.FindOne
:- db.lee.findOne()

1. Find with conditions
2. Find with multiple condition
3. Find with comparision Operator
4. find with predefined methods such as count method, skip method, limit method, sort method, etc...