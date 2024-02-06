What's an API?

- API stand for Application Programming Interface

An API is a set of definitions and protocols for building and integrating application software. It’s sometimes referred to as a contract between an information provider and an information user—establishing the content required from the consumer (the call) and the content required by the producer (the response).

what's an REST api?

- REST (Representational State Transfer) is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.

In order for an API to be considered RESTful, it has to conform to these criteria:

1. Client-server architecture: REST architecture is composed of clients, servers, and resources, and it handles requests through HTTP.

2. Statelessness: No client content is stored on the server between requests. Information about the session state is, instead, held with the client.

3. Cacheability: Caching can eliminate the need for some client-server interactions.

4. Layered system: Client-server interactions can be mediated by additional layers. These layers could offer additional features like load balancing, shared caches, or security.

5. Code on demand (optional): Servers can extend the functionality of a client by transferring executable code.

6. Uniform interface: This constraint is core to the design of RESTful APIs and includes 4 facets:

7. Resource identification in requests: Resources are identified in requests and are separate from the representations returned to the client.

8. Resource manipulation through representations: Clients receive files that represent resources. These representations must have enough information to allow modification or deletion.

9. Self-descriptive messages: Each message returned to a client contains enough information to describe how the client should process the information.

10. Hypermedia as the engine of application state: After accessing a resource, the REST client should be able to discover through hyperlinks all other actions that are currently available.

Intro to Express JS

what is express JS ?

- Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.

- Express.js provides an easy way to create web server and render HTML pages for different HTTP requests by configuring routes for your application.

Why Express JS?

- Express was created to make APIs and web applications with ease,
- It saves a lot of coding time almost by half and still makes web and
- mobile applications are efficient.
- Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous
  knowledge of any language. Express lets so many new developers enter the field of web development.

The reason behind creating an express framework for node js is:

Time-efficient
Fast
Economical
Easy to learn
Asynchronous

Features of Express JS

1. Middleware :-
   Middleware is a request handler that has access to the application's request-response cycle.

2. Routing :-
   It refers to how an application's endpoint's URLs respond to client requests.

3. Templating :-
   It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server.

4. Debugging :-
   Express makes it easier as it identifies the exact part where bugs are.

How to create a server using express?

1. npm init -y
2. npm i express

make web server :-

const express = require('express');
const app = express();

// define routes here..

const server = app.listen(5000, function () {
console.log('Node server is running..');
});

Cannot GET /

Configuring Routes

var express = require('express');
var app = express();

app.get('/', function (req, res) {
res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.post('/submit-data', function (req, res) {
res.send('POST Request');
});

app.put('/update-data', function (req, res) {
res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
res.send('DELETE Request');
});

var server = app.listen(5000, function () {
console.log('Node server is running..');
});

output :- Hello world

Handle POST Request

<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <form action="/submit-student-data" method="post">
        First Name: <input name="firstName" type="text" /> <br />
        Last Name: <input name="lastName" type="text" /> <br />
        <input type="submit" />
    </form>
</body>
</html>

3. Body Parser

-This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request. Install body-parser using NPM as shown below

3. npm install body-parser

var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
res.sendFile('index.html');
});

app.post('/submit-student-data', function (req, res) {
var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully!');

});

var server = app.listen(5000, function () {
console.log('Node server is running..');
});

- The **res.sendFile()** function basically transfers the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension.

- The res.send() function basically sends the HTTP response. The body parameter can be a String or a Buffer object or an object or an Array.

Creating a basic REST API using Express
Step 1 — Build and Run an Express Server with Node.js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.json('Hello World!');
});

app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`)
});

Node.js to run your Express sever:

node index.js

opening http://localhost:3000/

Step 2 — Create a GET Endpoint

list of all the movies stored in a JSON file.
movies.json

[
{
"id": 1,
"title": "Star girl"
},
{
"id": 2,
"title": "Five feet apart"
},
{
"id": 3,
"title": "Fifty shades of Grey"
},
{
"id": 4,
"title": "Fifty shades of Grey"
}
]

We will make use of the fs module to read the file. How to do this is shown below.

const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
res.end('Hello World!');
});

app.get("/list_movies", (req, res) => {
fs.readFile(\_\_dirname + '/' + 'movies.json', 'utf8', (err, data) => {
res.json(data);
});
});

app.listen(port, () => {
console.log(`app listening at http://localhost:${port}`)
});

Next, start up the server by running node index.js.

Finally, opening http://localhost:3000/list_movies should return the same data found in the movies.json file, as expected.

Interview Questions

What is routing and how routing works in Express.js?
- Routing refers to determining how an application responds to a request.

syntax :-
app.METHOD(PATH, HANDLER);
Where:

- app is an instance of express.
- METHOD is an HTTP request method (get, post, put, etc.).
- PATH is a path/endpoint on the server.
- HANDLER is a function executed when the route is matched.

How you can serve static files in Express.js?

Two possible ways:

app.use(express.static('public'))
app.use('/static', express.static(path.join(\_\_dirname, 'public')));

What are some Express.js key features

Middlewares :- Express middleare are functions that access of - request (req), response (res) and next().
Routing :- It is used to define routes in order to perform and handle HTTP requests/operations.
Templates Engine :- It has SSR renders html template used to render the HTML on the browser.
High Performance :- Express prepare a thin layer, therefore, the performance is adequate.
Database Support :- Express supports RDBMS as well as NoSQL databases - MySQL, MongoDB, etc.
MVC Support :- It is a web application which supports MVC architecture.
ORM Support :- It support various ORM/ODM - Mongoose, Sequelize, etc.
