1.JSX
2.writing JSX
3.componenet
4.Class and function component
5.React project
6.Routing

1.JSX = having your html inside in j.s at a high level.

const a = <h1>Title</h1>

babel - it is a transpiler(convert one language to another language)
JSX ->BABEL -> Browser understandable jsx

syntax :-
1.Function component
function App(){
return(

<h1>Hello</h1> //jsx has to return
)
}

2.Arrow function :-
const App = () =>{
return(

<h1>Hello</h1> //jsx has to return
)
}

2.class component:-

class JSXDemo extends React.Component{
render(){
return(

<h2 class="abc">Second heading</h2>

        )
    }

}

<JSXDemo/> //this is how u can call component

//object Notation:-
{
type:'h2'
props:{
class:'abc',
children:'Second heading'
}
}

//COMPONENT :-

function something(){
//header
//navbar
//content
//footer
//1000000 lines of code
}

4.Routing in React:-
-you need to install react routing library using 1.cd my-app 2.npm install react-router-dom@6

What is JSX?
jsx stand for j.s XML. JSX is a j.s extenstion syntax used in react to easilt write to easily write html and j.s together.
const jsx = <h1>This is JSX</h1>

What is the React.createElement Function?
every JSX is converted to the React.createElement function call that the browser understand.
syntax:-React.createElement(type, [props], [...children])
-type can be an html tag like h1,div or it can be a react component.
-props are the attribbute you ant the element to have.
-children contain other HTML tags or can be a component.

The React.createElement can will also be converted to the object rep like this:-
{  
 type: 'h1',  
 props: {  
 children: 'This is JSX'  
 }
}

React.Fragment :- was added in React version 16.2 bcoz we always have to wrap multiple adjacent elements in some tag(like div)inside every JSX returned by a component.but that adds unnecessary div tags.

<> </> this is called empty tag in react. this is a shorter syntax for react fragment.

and you want to add a comment for thst code, then you have to wrap that code in JSX expression syntax inside the /\* \*/ commnent symbol look like.

How to Add JavaScript Code in JSX ?
we have only used HTML tags as a part of JSX.but JSX becomes nore useful when we actually add j.s code inside it.
const App = () => {
const number = 10;
return (

  <div>
   <p>Number:{number}</p>
  </div>
 );
};

inside the curly brackets we can only write an expression that evaluates to some value.

so often this syntax of using curly bracktes is knows as jsx expression syntax:-
-A string like "hello"
-a number like 10
-an array like[1,2,3,4]
-an object property that will evaluate to some vales
-a function call thst return some values which may be JSX.
-a map method that always return a new array
-jsx itself

=> following are the invalid things and can't be used in a jsx expression :-

- a for loop or while loop or any other loop
- a variable declaration
- a function declaration
- an if condition
- an object

we can write array in jsx Expression bcoz <p>{[1,2,3]}</p> is finally convverted to <p>{1}{2}{3}{4}</p> when rendering(which can be rendered without any issue).

=> also note that undefined, null and boolean are not displayed on the UI when used inside JSX.

How to Add a Class in JSX ?
we can add attribute to JSX elements.
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
const id = "some-id";
return (

<div>
<h1 id={id}>This is a heading</h1>
<h2 className="active">This is another heading</h2>
</div>
);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

-NOTE THAT IN REACT :- we need to use className instead of class
-NOTE THAT IN REACT :- all attribute names are written in camelCase.

what is component in React :- developres had to write thounsands of lines of codde to create a single-page application. making updates to these programs was a difficult to undertaking bcoz they folows the standard DOM str.
-a component is considered as the core building blocks of a react application.it makes the task of building UI's much easier.

ReactJS, we have mainly two types of components.
1.Functional Components
2.Class components

1.Functional Components:
A functional component is basically a j.s/ES6 function that return a react Element(JSX).

function WelcomeMessage(props) {  
 return <h1>Welcome to the React</h1>;  
}

Alternatively, you can also create a functional component with the arrow function definition:

const WelcomeMessage = (props) => {  
 return <h1>Welcome to the React</h1>;  
}

=>so a functional compoentns in React :-
-is a j.s/ES6 function
-must return a react element (jsx)
-always start with a capital letter(naming convention)
-takes props as a parameter if necessary.

2.Class Components:-
the seconds type of component is the class component.class component are ES6 classes that return JSX.

class WelcomeMessage extends React.Component {
render() {
return <h1>Welcome to the React</h1>;
}
}
diffrenet from function components, class component must have an additional render() method for returning JSX.

- A Class Component :-
  -is an ES6 class,will be a component once it 'extends' a react component.
  -takes props(in the constructor) if needed
  -must have a render() \*\*\*methods for returning JSX

apart from these two main components we also have pure components and high order components which we will study in future.

3.Conditional Rendering :-
in react, you can create distinct components that encapsulate behavior you need. then, you can render only some of them, depending on the state of your application.

condition rendering in react works the same way conditions works in j.s use j.s operator like if or the condition operator to create elements representing the current state, and let react update the UI to match them.

Consider these two components:

function UserGreeting(props) {
return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
return <h1>Please sign up.</h1>;
}
