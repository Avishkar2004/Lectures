static app/ simple app

Header
Navbar

Side Bar | Content

Footer

Routing :-

1.react-router

2.react-router-dom(install this library)
keyword install to DOM.
1.npm install/i react-router-dom

MATERIAL :-
Sample Project Creation:-
1. npx create-react-app (file name)
cd (file name)
npm start process to start.
2. Create separate components

2.Routing In React
Routing is a process in which a user is directed to diff pages based on their action or req.Reactjs is mainly used for a developing single page web application.

Need of React Router:-
React Router plays an imp role to display multiple views in sigle page application.

React Router Installation:-

1.react-router: the core library
2.react-router-dom: a variant of the core library meant to be used for web application
3.react-router-native: a variant of the core library used with react native in the development of android and ios application.

npm install react-router-dom@6

1.Routes:-acts as a container/parent for all the individual routes that will be created in our app.
2.Route :- is used to create a single route. it takes in two attribute.

path:-which specifies the url path of the desired component.
element:-which specifies the component the route should render.

The (Link) component is similiar to the anchor element(<a>)in HTML.it's to attribute specifies which path the link takes you to.

Always remember to you have to import Link from react-router-dom before using it.

4.Nested Routes:-This is one of the most powerful features of react router making it so you dont have to mess around with complicated layout code.

5.<Outlet> :The <Outlet> should be used in parent route element to render their child route element. this allow nested UI to show up when child route are rendered.if the parent route matched exactly,it will render a child index route or nothing if there is no index route.

6.Index Routes:-Index Routes can be thought of as "default child routes'. when a parent route has a multiple children, but the URL is just at the parent's path.you probably want to render something into the outlet.

7.Relative Links:-Relative <Link to> value(that do not begin with a /)are relative to the path of the route that rendered them.The two links below will link to /dashboard/invoices and /dashboard/team because they're rendered inside of <Dashboard>. This is really nice when you change a parent's URL or re-arrange your components because all of your links automatically update.

8.“Not Found” Routes:- when no ther route matches the URL, you can render a 'not found' route using path="\*".This route will match menu URL, but will have the weakest precedence so the route will only pick if it no other routes match.

9.Multiple Set Of Routes:- althought you should only ever have a single <Router> in an app, you way have as many <Routes> as you need, wherever you need them. each <Routes> element operators independently of the other and picks a child route to render.
