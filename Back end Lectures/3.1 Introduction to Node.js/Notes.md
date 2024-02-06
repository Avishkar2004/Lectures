What is Node.Js ?

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

What is a Multi-Page application ?
Multiple-page applications work in a “traditional” way. Every change eg. display the data or submit data back to server requests rendering a new page from the server in the browser.

Pros of the Multiple-Page Application:

-It’s the perfect approach for users who need a visual map of where to go in the application. Solid, few level menu navigation is an essential part of traditional Multi-Page Application.
-Very good and easy for proper SEO management. It gives better chances to rank for different keywords since an application can be optimized for one keyword per page.

- Cons of the multiple-page application:

- There is no option to use the same backend with mobile applications.

- Frontend and backend development are tightly coupled.

- The development becomes quite complex. The developer needs to use frameworks for either client and server side. This results in the longer time of application development.

NPM(Node Package Manager):
NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

It's also known as "Ninja Pumpkin Mutants".

package.json
Every project in JavaScript – whether it's Node.js or a browser application – can be scoped as an npm package with its own package information and its package.json job to describe the project.

:- package.json will be generated when npm init is run to initialise a JavaScript/Node.js project, with these basic metadata provided by developers:

1.name: the name of your JavaScript library/project
2.version: the version of your project. Often times, for application development, this field is often neglected as there's no apparent need for versioning opensource libraries. But still, it can come handy as a source of the deployment's version.

3.description: the project's description

4.license: the project's license

Downloads:-

npm install

- it will install everything the project needs, in the node_modules folder, creating it if it's not existing already.

Installing a single package

npm install <package-name>

- -save-dev installs and adds the entry to the package.json file devDependencies

- -no-save installs but does not add the entry to the package.json file dependencies

- -save-optional installs and adds the entry to the package.json file optional Dependencies

- -no-optional will prevent optional dependencies from being installed

S: --save
D: --save-dev
O: --save-optional

Types of Modules in Node.Js
1.Core Modules
2.local Modules
3.Third-party Modules

1. Nodejs Core Modules:
   Built-in modules of node.js that are part of nodejs and come with the Node.js installation process are known as core modules.

let module = require('module_name')

2. Nodejs Local Modules:

Local modules are created by us locally in our Node.js application. These modules are included in our program in the same way as we include the built in module.

exports.add=function(n,m){
return n+m;
};

3. Nodejs Third Party Modules:

Modules that are available online and are installed using the npm are called third party modules. Examples of third party modules are express, mongoose, etc.

HTTP Module:
The http module is a core module of Node designed to support many features of the HTTP protocol.

const http = require('http');

create an HTTP server using the createServer() method of the http object.

const server = http.createServer((req, res) => {
if (req.url === '/') {
res.write('<h1>Hello, Node.js!</h1>');
}
res.end();
});

The createServer() accepts a callback that has two parameters: HTTP request (req) and response (res). Inside the callback, we send an HTML string to the browser if the URL is / and end the request.

server.listen(5000);
console.log(`The HTTP Server is running on port 5000`);

const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/') {
res.write('<h1>Hello, Node.js!</h1>');
}
});

server.listen(5000);
console.log(`The HTTP Server is running on port 5000`);

node server.js

The HTTP Server is running on port 5000

Now, you can launch the web browser and go to the URL http://localhost:5000/. You’ll see the following message:

Hello, Node.js

File System Module:

fs.readFile(fileName [,options], callback)

var fs = require('fs');

fs.readFile('TestFile.txt', function (err, data) {
if (err) throw err;

    console.log(data);

});

The following is a sample TextFile.txt file.

This is test file to test fs module of Node.js

var fs = require('fs');

var data = fs.readFileSync('dummyfile.txt', 'utf8');
console.log(data);

fs.writeFile(filename, data[, options], callback)

filename: Full path and name of the file as a string.

Data: The content to be written in a file.

options: The options parameter can be an object or string which can include encoding, mode and flag. The default encoding is utf8 and default flag is "r".

callback: A function with two parameters err and fd. This will get called when write operation completes.

var fs = require('fs');

fs.writeFile('test.txt', 'Hello World!', function (err) {
if (err)
console.log(err);
else
console.log('Write operation complete.');
});

In the same way, use fs.appendFile() method to append the content to an existing file.

var fs = require('fs');

fs.appendFile('test.txt', 'Hello World!', function (err) {
if (err)
console.log(err);
else
console.log('Append operation complete.');
});

Open File
fs.open(path, flags[, mode], callback)

path: Full path with name of the file as a string.
Flag: The flag to perform operation
Mode: The mode for read, write or readwrite. Defaults to 0666 readwrite.

URL Module:
The URL module splits up a web address into readable parts.
To include the URL module, use the require() method:

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

Using the URL module will not let you read the URL you receive from the request. This module let you parse a URL string. If you want to read the URL you recieve from a request in Node.Js, you have to use the HTTP module in Node.Js.

OS Module:
To use the os module, you include it as follows:

const os = require('os');

let currentOS = {
name: os.type(),
architecture: os.arch(),
platform: os.platform(),
release: os.release(),
version: os.version()
};

console.log(currentOS);

{
name: 'Windows_NT',
architecture: 'x64',
platform: 'win32',
release: '10.0.18362',
version: 'Windows 10 Pro'
}

Checking server uptime
console.log(`The server has been up for ${os.uptime()} seconds.`);

output :-
The server has been up for 44203 seconds.

Getting the current user information

The os.userInfo() method returns the information about the current user:

console.log(os.userInfo());

{
uid: -1,
gid: -1,
username: 'john',
homedir: 'C:\\Users\\john',
shell: null
}

Getting the server hardware information

The os.totalmem() method returns the total memory in bytes of the server:

let totalMem = os.totalmem();
console.log(totalMem);

8464977920

To get the amount of free memory in bytes, you use the os.freemem() method:

let freeMem = os.freemem();
console.log(freeMem);

1535258624

Node.Js argv property:

The process.argv property is an inbuilt application programming interface of the process module which is used to get the arguments passed to the node.js process when run in the command line.

process.argv

Return Value: This property returns an array containing the arguments passed to the process when run it in the command line. The first element is the process execution path and the second element is the path for the js file.

const process = require('process');

// Printing process.argv property value
console.log(process.argv);

[ 'C:\\Program Files\\nodejs\\node.exe',
'C:\\nodejs\\g\\process\\argv_1.js',
'extra_argument1',
'extra_argument2',
'3'
]

Interview Questions:

What is Node.Js and Where you can use it ?

Node.Js is an open source, cross-platform Javascript runtime environment and library to run web applications outside the client’s browser**.** It is used to create server-side web applications.

What are modules in Node.JS ? Name any three main modules in Node.Js.

Modules are like Javascript libraries that can be used in a Node.js application to include a set of functions. To include a module in a Node.js application, use the require() function with the parentheses containing the module's name.

Core Modules :- Description
HTTP :- Includes classes, methods, and events to create a Node.js HTTP server
fs :- Includes events, classes, and methods to deal with file I/O operations
url :- Includes methods for URL parsing
