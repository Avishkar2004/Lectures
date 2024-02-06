Asynchronous:-
cooking:-

Things to be done:
1.rice
2.curry

Things Missing :- vegatable

Synchronous:-

30 min + 20 min = 50 min

Boiling Rice:-

Asynchronous:-
Rice
Curry

handleling the side effect is know as redux thunk.

function() :-
if it is self sustained
if produces same output for same input everytime.

Thunk:-
1st scenario :-
white blank page
end scenario :-
run the navbar, side css part ready, dom building, loader will be executed.

MATERIAL :-
Async Logic and Redux Middleware:-
a redux store doesn't know anything about async logic.it only knows how to synchronously dispatch actios.update the state by calling the root reducer function, and notify the ui that something has changed. any asynchronicity has to happen outside the store.

side effect :-
-logging a value to the developer console
-saving the file
-setting an async timer
-making an AJAX HTTP request
-modifying some state that exists outside of a funtion, or mutating arguments to a function

- generating random numbers or unique random IDs (such as Math.floor() or Date.now())

Redux-thunk :-[ npm install redux-thunk ]
Thunk is a programming concept where a function is used to delay the evaluation/calculation of an operation.Here's an example :-

// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2

// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2

Redux thunk is a middleware that lets you call action creator's that return a function instead of an object.The return function receives the store's dospatch method.This means that the middleware can perform asynchronous operation and once they have been completed, it can dispatch regular synchronous action inside the function body.
