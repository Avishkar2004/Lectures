URL:- (UNIFORM RESOURCE LOCATOR)

https://www.puyusggarg.dev/

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
