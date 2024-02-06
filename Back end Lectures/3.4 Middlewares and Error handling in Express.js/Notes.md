What is Express Middleware?
- Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client. They are arranged in a chain and are called in sequence.

- We can use middleware functions for different types of processing tasks required for fulfilling the request like database querying, making API calls, preparing the response, etc, and finally calling the next middleware function in the chain.

- Middleware functions take three arguments: the request object (request), the response object (response), and optionally the next() middleware function:

const express = require('express');
const app = express();
function middlewareFunction(request, response, next){
...
next()
}

app.use(middlewareFunction)

- app.use() to add a middleware function to our Express application.

Built-in middleware provided by Express like express.static, express.json, express.urlencoded

- Error handling middleware for handling errors
- Third-party middleware maintained by the community
- We will next install the Express framework using the npm install command as shown below:

- npm install express --save

We will now create a file named index.js
const express = require('express');

const app = express();

// Route for handling get request for path /
app.get('/', (request, response) => {
response.send('response for GET request');
})

// Route for handling post request for path /products
app.post('/products', (request, response) => {
...
response.json(...)
})

// start the server
app.listen(3000,
() => console.log('Server listening on port 3000.'))

We can run our application with the node command:

- node index.js

Using Express' Built-in Middleware

We use the express.static built-in middleware function to serve static files such as images, CSS files, and JavaScript files.

const express = require('express');

const app = express();
app.use(express.static('images'))  
app.use(express.static('htmls'))

app.get('product', (request, response)=>{
response.sendFile("productsample.html")
})

<html>
<body>
    <h2>My sample product page</h2>
    <img src="sample.jpg" alt="sample"></img>
</body>
</html>

\*\*Using express.json for Parsing JSON Payloads

- We use the express.json built-in middleware function to JSON content received from the incoming requests.

const express = require('express');

const app = express();

// Attach the express.json middleware to route "/products"
app.use('/products', express.json({ limit: 100 }))

// handle post request for path /products
app.post('/products', (request, response) => {
...
...
response.json(...)
})

Adding a Middleware Function to a Route

- const requireJsonContent = (request, response, next) => {
  if (request.headers['content-type'] !== 'application/json') {
  response.status(400).send('Server requires application/json')
  } else {
  next()
  }
  }

\*\*Understanding The next() Function

- The next() function is a function in the Express router that, when invoked, executes the next middleware in the middleware stack.

Environment Variables

- Environment variables are a fundamental part of developing with Node.js, allowing your app to behave differently based on the environment you want them to run in.

Why?

- Because they externalize all environment specific aspects of your app and keep your app encapsulated.

when ?

- In short, any place in your code that will change based on the environment. When you see these situations, use environment variables for anything you need to change or configure.

Here are some specific examples of common scenarios when you should consider using environment variables.

1. Which HTTP port to listen on
2. What path and folder your files are located in, that you want to serve
3. Pointing to a development, staging, test, or production database

## \*\*Using Environment Variables

// server.js
const port = process.env.PORT;
console.log(`Your port is ${port}`);
using the command line
using a .env file

Command Line:

- The simplest way to pass the port into your code is to use it from the command line

- PORT=8626 node server.js

You will see the port displayed in the message like this “Your port is 8626”.

- PORT=8626 NODE_ENV=development node server.js

==========================================================================================================================================
Less Mess with a .env File:

- Drawback
  1.there is no good place to see the list of variables
  2.it’s far too easy to make a typing mistake from the command line
  3.it’s not ideal to remember all of the variables and their values
  4.even with npm scripts, you still have to keep them current

- Create the .env file in the root of your app and add your variables and values to it.

NODE_ENV=development
PORT=8626

# Set your database/API connection information here

API_KEY=\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***
API_URL=\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***

- npm install dotenv
  1.create a package.json file
  2.install the dotenv npm package
  3.write the code to read the .env
  4.run the code

// server.js
console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626

================================================================================================================

- Error Handling in Express.js
  Error handling often doesn’t get the attention and prioritization it deserves. Especially for newbie developers, there is more focus on setting up routing, route handlers, business logic, optimizing performance.

- Default Error Handling in Express.js
  Express implicitly takes care of catching your errors to prevent your application from crashing when it comes to error handling.

- Synchronous Code:
  Synchronous code refers to statements of code that execute sequentially and one at a time. When an error encounters synchronous code, Express catches it automatically.

app.get('/', (req, res) => {
throw new Error("Hello error!")
})

All of this is taken care of thanks to Express’s default built-in error handler middleware function inserted at the end of your code’s middleware stack. This automatic handling saves you from bulky try/catch blocks and explicit calls to the in-built middleware (shown below) while also providing some fundamental default error handling functionality.

app.get('/', (req, res, next) => {
try {
throw new Error("Hello error!")
}
catch (error) {
next(error)
}
})

Asynchronous Code:

- When writing server-side code, most of your route handlers are likely using asynchronous Javascript logic to read and write files on the server, query databases, and make external API requests.

app.get('/', (req, res) => {
setTimeout(() => {
console.log("Async code example.")
throw new Error("Hello Error!")
}, 1000)
})

more convenient and common way of catching errors from promises:

const fsPromises = require('fs').promises
app.get('/', (req, res, next) => {
fsPromises.readFile('./no-such-file.txt')

     .then(data => res.send(data))

     .catch(err => next(err))

})

Note: Express 5.0 (currently in alpha) can automatically catch errors (and rejections) thrown by returned Promises.

Handling Custom Errors :-

- Express’s default error-handling middleware is super helpful for beginners to take care of unexpected, unhandled errors.

Custom Handling for Each Route:

const express = require('express')
const fsPromises = require('fs').promises;

const app = express()
const port = 3000

app.get('/one', (req, res) => {
fsPromises.readFile('./one.txt')
.then(data => res.send(data))
.catch(err => { // error handling logic 1
console.error(err) // logging error
res.status(500).send(err)
})
})

app.get('/two', (req, res) => {
fsPromises.readFile('./two.txt')
.then(data => res.send(data))
.catch(err => { // error handling logic 2
console.error(err)
res.redirect('/error') // redirecting user
})
})

app.get('/error', (req, res) => {
res.send("Custom error landing page.")
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

Adding a Middleware Function for Error Handling

- Express comes with a default error handler that takes care of any errors that might be encountered in the application. The default error handler is added as a middleware function at the end of the middleware function stack.

function customErrorHandler(error, request, response, next) {

// Error handling middleware functionality

}

When we want to call an error-handling middleware, we pass on the error object by calling the next() function with the error argument like this:

- const errorLogger = (error, request, response, next) => {
  console.log( `error ${err.message}`)
  next(error) // calling next middleware
  }

Interview Questions
What is Middleware in express.js?

- Middleware is a function that is invoked by the express routing layer before the final request processed.

Middleware functions can perform the following tasks:

1. Execute any code - validation, setting headers, etc.
2. You can make changes to the request (req) and response (res) objects.
3. You can also end the request-response cycle, if rquired.
4. You can call the next middleware function in the stack to proceed and process the final request.

Types of Middleware:

1.Application-level middleware
2.Router-level middleware
3.Error-handling middleware
4.Built-in middleware
5.Third-party middleware

What is global Error handling middleware in Express.js?

- var express = require('express'),
  app = express();

app.use(function (err, req, res, next) {
console.error(err.stack) // error first callback
res.status(500).send('Something went wrong!')
})