URL:- (UNIFORM RESOURCE LOCATOR)

https://www.puyusggarg.dev/

https (https protocol) www.piyushgarg.dev(user friendly Domain name of ip address) (/ root path)

protocol :- how to cummunicate

1.  https:- hypertext transfer protocol secure
    req are increpted
    use ssl certificate :- secure socket layer

2.  http:- hypertext transition protocol
    dont use ssl certificate
    less secure

3.  ws:- for web socket
    real time communication

www.puyusggarg.dev
Domain:- user friendly name of ip address of my server

/ :- Homepage or root path

URL Path :-
www.puyusggarg.dev/about
www.puyusggarg.dev/contact

Nested Path :-
www.puyusggarg.dev/project/e-commerce

URL Query Parameters :-
www.puyusggarg.dev/about?userid1@a=2    

Url module is used to parse url

http://localhost:8000/about?myname=avishkar

Url {
protocol: null,
slashes: null,
auth: null,
host: null,
port: null,
hostname: null,
hash: null,
search: '?myname=avishkar',
query: 'myname=avishkar',
pathname: '/about',
path: '/about?myname=avishkar',
href: '/about?myname=avishkar'
}

Youtube search query :-
http://localhost:8000/search?search_query=javascript+tic+tac+toe

const http = require("http");
const fs = require("fs");
const url = require('url')

const myServer = http.createServer((req, res) => {
if(req.url === "/favicon.ico" ) return res.end();
const log = `${Date.now()} :${req.url}  New Req Received\n`;
const myUrl = url.parse(req.url, true)
console.log(myUrl)
fs.appendFile("log.txt", log, (err, data) => {
switch (myUrl.pathname) {
case "/":
res.end("This is a Homepoge");
break;
case "/about":
const username = myUrl.query.myname
res.end(`Hello ${username}`);
break;
case '/search':
const search = myUrl.query.search_query;
res.end("Here are your result for " + search)
default:
res.end("404 page not found");
}
});
});

//we need port number to listen
myServer.listen(8000, () => {
console.log("Server Stared");
});

Server Stared
Url {
protocol: null,
slashes: null,
auth: null,
host: null,
port: null,
hostname: null,
hash: null,
search: '?myname=avishkar@userId=1&search=dog',
query: [Object: null prototype] {
myname: 'avishkar@userId=1',
search: 'dog'
},
pathname: '/about',
path: '/about?myname=avishkar@userId=1&search=dog',
href: '/about?myname=avishkar@userId=1&search=dog'
}
Url {
protocol: null,
slashes: null,
auth: null,
host: null,
port: null,
hostname: null,
hash: null,
search: '?search_query=javascript+tic+tac+toe',
query: [Object: null prototype] { search_query: 'javascript tic tac toe' },
pathname: '/search',
path: '/search?search_query=javascript+tic+tac+toe',
href: '/search?search_query=javascript+tic+tac+toe'
}


=======================
Node.js URL Module :-

The Built-in URL Module

The URL module splits up a web address into readable parts.

To include the URL module, use the require() method:

var url = require('url');
Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

Node.js File Server
Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.

Create two html files and save them in the same folder as your node.js files.


summer.html


<!DOCTYPE html>
<html>
<body>
<h1>Summer</h1>
<p>I love the sun!</p>
</body>
</html>


winter.html
<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>

Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:

demo_fileserver.js:

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


Remember to initiate the file:

Initiate demo_fileserver.js:

C:\Users\Your Name>node demo_fileserver.js


If you have followed the same steps on your computer, you should see two different results when opening these two addresses:

http://localhost:8080/summer.html

Will produce this result:

Summer
I love the sun!

http://localhost:8080/winter.html

Will produce this result:

Winter
I love the snow!