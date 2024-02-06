React :-React is a j.s library of building user interface.
- react support a component type.
-using virtual dom.


1.NPM 
-> Node package manager
-> abc -npm abc test

2.NPX
->Node package execute/executable
->npx abc test


1.we are going to create our first react app

what is react ?
react.js was released by a software engeneer working for facebook -jordan walke in 2011.
-reace is a j.s library 

Why use React instead of other frameworks ?
-sppedless.react allows developers to use individual parts application on both the client and server sides.
-component support
-easy to use and learn
-SEO friendly
-one-way data binding.

=>Single Page Application:-
- A single-page application is an app that works inside a browser and does not require page reloading during use.
-SPA is fast, as most resources(HTML+CSS+SCRIPT)
-The development is simplified and streamlined
-SPAs are easy to debug with chrome.
-it's easier to make a mobile application bcoz the developer can reuse the same backend code for web application and native associated with it.
-SPA can cache and local storage effectively.

=>Multiple Page Application:-Multiple Page Application
 work in a traditional way.display the data or submit data to server req rendering a new page from the server in the browser.

What makes DOM manipulation slow?
The DOM is repreents as a tree data str.bcoz of that, the changes and update to the DOM Are fast.

1.Virtual DOM =>That's where the concept of virtual DOM comes in and performence significantly better than the real DOM. the virtual dom is only a virtual representation of the dom.

How is Virtual DOM faster?=>
when new elements are added to the UI,in a virtual DOM, which is represents as a tree is created.each element is a node on this tree.

How does React use Virtual DOM
=>in React every UI component, and each component has a state.React follows the observable pattern and listner for stage changes. when the state of a component changes, react updateds the virtual DOM tree.

Architecture:
MVC Architecture react is the view responsible for how the app looks and feels.
MVC is an architectural pattern that split the application layer into model,view and controller.

NPM :(node package manager) is regards as the standard package manager used in j.s
NPX : npx is a NPM package runner that makes it really easy to install any sort of node executable that would have normally been installed using NPM.
Why use NPX?
-instead of installing locally or globally, you can go straight to running those package with NPX.

How does it work?
NPX comes bundle with NPM starting with version 5.2+ so if your version of NPM is 5.2 or higher, then you have NPX install.
One great way for you to see how quickly NPX works is to create a react app using:
<!-- $ npx create-react-app 'file name' -->

files name
name :- is the name of your app
version :- is the current version
"private": true :- is a failsafe setting to avoid accidently publishing your app as a public package with the npm eco sysytem.
dependencies :- contains all the requires node modules and version requires for the application.
scripts:- sscripts specify aliases that you can  use to access some of the react-script commands in a more efficiently manner.
-u can also see two more attribute, elsintConfig and browserslist. both of these are node modules having their own set of values.

Starting the React App Development Server : in terminal using these command (npm run start)