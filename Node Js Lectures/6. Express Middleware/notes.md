Middleware :-

clinet ===> get req on /users ====> on server we havea function app.get("/user") => then server will send res to server 



What happend in middleware :-

clietn ====> middleware(custom) ===>  function app.get("/")

1.req will go to the middlware :- middleware can do processing (is he hacker, is he invalid user, detail verify, validate) ===> is everything is oky ==> then send req to server

1.middle function is run on every req and res 
middle ware is plugin


*Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

1.Execute any code.
2.Make changes to the request and the response objects.
3.End the request-response cycle.
4.Call the next middleware function in the stack.


Using middleware :-
https://expressjs.com/en/guide/using-middleware.html