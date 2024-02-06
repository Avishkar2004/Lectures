Agenda:
1.Store
2.Reducer
3.Action
4.Dispatching Actions

1.Redux :-
=> it is a state managment library.
=>it is used to create a global state of all the component are stored here which is called as store.

Redux working :-
=>The user will trigger a event.
=>This event is converted into a action
=> This action is dispatched to the appopriate reducer which is present inside the store.
=>The reducer upon execution, it may update the state or retain the state.
=>these state if updated it also update in the browser
=>The user now sees the update in the browser if any

Event:- which will used by the user to perform some task

- 106 events
  Action:- it describe the change that the user wants
  Dispatch:- it is used to pass the action to invoke the appropriate state through store
  Reducer :- It is a logic which upon execution may/may not update the state
  -this are function which are used to update this state based on the action received.

state :- initial data of the component
View :- browser UI/it is the place the update gets render.
store :- it is a container. it will store the state of all the components.it also acts like a wrapper

- it is a single place/ location where all the states are stored
- it is used to manage the lifecycle of a state
  -methods that are used in store
  1.store.getState() :- get/retrive the state
  2.store.dispatch() :- to send the action to invoke appropriate reducer
  3.store.subscribe() :- to get the latest state

Advantages :-
-transfer the data from one point to another point
-managing the data becomes easier

- Flexibility

redux :- npm install redux

- it is the module which is used to implement redux to a react project
  -react-redux :-this wraps/binds react and redux.

MATERIAL :-
Context API makes it easier to share data beetween components and eliminates props-drilling. but as the size of application grows , and the components not only demands the data, but also need to modify and manage state, context API falls quite short of keeping the codebase maintainable and organized.

1.Redux:-
Redux is a state-managment library, that does not just centralize the state but can aslo manage it. it is especially helpful over context API when :-
-you have large amounts of application state that are needed in many places in the app
-the app state is updated frequently over time.
-the logic to update that state may be complex
-the app has a medium or large-sized codebase, and might be worked on by many people

To understand how redux manages state, it's important to understand the building block of redux
1.store
2.Reducer
3.Action

Store :-
store is a single immutable j.s object which redux uses the store the entire state of an application.it a single source of state, and is acceesible by all parts of the UI.
-we can only use plain JS such as ARRAY, OBJECTS, NUMBERS, STRINGS, BOOLEANS, etc.to describe the state of our application.That means you may not pput other things into the Redux stat- no class instance, build-in j.s type like map/set Promise/ Date, function or anything else that is not plain j.s data.
-// Define an initial state value for the app
const initialState = {
value: 0
}
Now, since the store is immutable, this means that we cannpt directly modify or mutable this store.so to update it we need a function that takes the store as an argumetns.and return the updates value of the store(we can use the spread operator to create a copy of the store inside the function.)

Reducer :-
The reducer receives two arguments, the current state and action object describing what happened. based on the action object, Reducer can run complex logic or calculations and return the updated store.

Reducers must always follow some specific rules:
-They should only calculate the new state value based on the state and action arguments.
-They are not allowed to modify the existing state.instead they must make immutable updates, by copying the existing state and making changes to the copied value.
-They must not do any asynchronous logic, calcu;ate random values, or cause other "Side-effects"

The logic inside reducer functions typically follows the same series of steps:

- check to see if the reducers cares about this actions.
  -if so, make a copy of the state, update the copy with new values,and return it.
  otherwise, return the existing state unchanged.

Action :-
now, when a part of our application wants to update state, it'll need to call the reducer.This is done through plain JS objects called actions.actions are plain j.s object that we have a type field.

Dispatch Actions :-
The redux store has a method called displatch. the only way to update tha stat is to call store.dispatch() and pass in an action object.You can think of dispatching actions as "triggering an event" in the application.

Application:- [ npx create-react-app redux-shop ]
we'll buldingn a simple e-commerce web page where user can add and remove products from cart using :-

-ReactJS
-Redux
-TailwindCSS

cd into root directory of app and run following commands to initialize tailwindCSS in the app :

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Now run the following commands in terminal to install Redux and Redux-thunk:

npm install redux react-redux
