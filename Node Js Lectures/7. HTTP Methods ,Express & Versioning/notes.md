HTTP Method :-
GET, POST,PUT,PATCH,DELETE

1.
GET:-
- when you want some data from the server
- you use GET method
- by default browser GET req karta hai

2.
POST:-
when you want to send and mutate some data in server (data send karna db ko)
Eg:- Sign in , Feedback Form

3.
PUT:-
when u want to upload file or photo

4.
PATCh:-
when you want to change your name(existiting entry ko)

5.
DELETE:-
when u want to delete ur account


==========
Expess :- is a framework
is used to handle routes
Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("hello this is a home page");
});

app.get("/about", (req, res) => {
  // return res.send("Hello this is a about page" + " Hey " + req.query.name + " you are " + req.query.age);
  return res.send(`Hey ${req.query.name} your are ${req.query.age} year old`)
  // 
});


app.listen(8000 , () => {
  console.log("Server Started at 8000")
})


http://localhost:8000/about?name=avi&age=20

Hey avi your are 20 year old


benefit of express :-
makes code clean
makes code modular
easy to handle route


==============
How Versioning Works in NodeJS?

Version:-
    "express": "^4.18.2",

1st part :- 4
2nd part :- 18
3rd part :- 2


3rd Part(Last part) :- Minor Fixes(optional update)
latest -> 4.18.2

2nd part :-Recommended bug fixed (security fix)
latest -> 18 version
latest update : 4.19.2

1st part :- Major release :- major/ Breaking update
when we can change :-
for new project

if you have old project then dont change

1.
(^ carrot) version :- compatible with version

 express ^4.18.2
 4th version

^4.18.2 

^ means :- 4 hi rakhna
upadate krna sirf 2 bits but 5 version pe nhi jana

agr maine npm update kiya to ye
^4.18.1 tum 4 ko lock krlo bakio ko update kro
4.18.1
4.18.2
4.18.3
4.18.4

agr main express ne 
5.1.0 version nikala to ye update nhi klrega bcoz of carrot (^) symbol

^ :- install all recommended and minor fixes automatically

2. 
(~ squiggly line) :  only update last bit minor fixes
~4.18.1
~4.18.2
~4.18.3
~4.18.4

this can update minor fixes but dont change major fixes
~4.19.1 Noooo...

