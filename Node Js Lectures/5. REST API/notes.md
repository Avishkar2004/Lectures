REST API's :-

Restfull api :-

Rules :-

1.Server client architecture
2.always respect all http methods
GET POST PUT PATCH DELETE

get /user :- user data read kro and return the data
post /user :- handle new users creation
patch /user :- updat the user

rendering html using these method :-
res.send()
res.render()


TASK:-
REST API :- JSON

GET /users
GET /api/users   :- getting all user data return users as a json


GET /api/users/1 :- get the user with id 1
GET /api/users/2 :- get the user with id 2

this is dynamic path parameters
GET /api/users/:id
:id => variable | Dynamic


POST /api/users  :- Create mew user

PATCH /api/users/id :- edit the user with id 1

DELETE  /api/users/1 :- delete the users with id 1