AGENDA:-
1.Local state
2.props Drilling and managing state with context API
3.optimizing technique in React.

1.Local state :-componenent's data is local. it is acceessed only with in that particular component.
:-

Bind Method :- this is inbuld method
-whenever you want to pass the data to a function which is used within the same function then we the use bind method.

2.props Drilling :- step by step passing the data to the child and it's child and so on is what is termed as props drilling.

Create context :- is used to create a context and to the data aslo.

Provider :- provide the data
Consumer :- consume the data

useCallback is a hook in react;

why we need this :-
1.function quality
even thought you are calling the same function twice,
the calling is unique in nature.

when ypu call a function you are creating a function object and thne these function object is compiled and executed
to overcome the creation of diff function we used a hook called use call back

After use callback :-
when you call a function, the same object function is compiled and execute again and again.

to overcome the re compiled of the same object function which id not at all changed we use a hook called as useMemo.

Throttling and Debouncing Event Action in j.s

Throttling:-
it is used to specify how many time a function can be triggered

Debouncing:-
it is used to tell when the function can be triggered.

 <p key={index}>{index} - {item}</p>//this is a DOM element.

<!-- ['apple','Pineapple','Banana','Orange']
   0        1             2         3
<p key=0>Apple</p>
<p key=1>Pineapple</p>
<p key=2>Banana</p> -->

MATERIAL :-
1.Local State :-Any component in ReactJs majorly depends on its props and state and manage data. A componennt's state is private to it and responsible for govering it's behavoiur throughtout life.
-a state is nothing but a str that records any data changes in a react application.
-it can be used for stroing valurs,form input, data from an API etc.

Props Drilling :-
Dealing with state managment in react application can be a tricky thinf, especially when data needs to be passed from a root componentn down to deeply-nested components.
-props drilling is the unofficial term for passing data throung several nested children compoennts.

solving props dribling by using the context API.

Provider :- the provider componetns is going to be used to wrap the components that are going to have access to our context.

- the provider compoents receives a props called value, which can  be accessed from all the componetns that are wrapped inside provider, and it will be responsible to grant access to the context api.

Consumer:- After u wrap all the components that are going to need access to the context with the provider components, you need to tell which components is going to consume that data.
-The consumer components allows a react components to subscribe to the context changes.THe components makes the data available using a render prop.

Hooks:- React hooks allows us to manage state data inside function components; now we don't need to create class components jsut to manage store data.

UseContext :- The useContext hook allows us to connect and consume a context. The useContext hook receive a single argument, which is the context that you want to have to access to.

Optimizing React Apps
1.The useMemo Hook:-
useMemo() is a build-in react hook that accepts 2 arguments a fnction compute that compute a result and depedencies array :

const memoizedResult = useMemo(compute, dependencies);

the useMemo hook is used in the function coomponent of React to return a memoized value.

-Memoization refers to the concept of not recompiling a function with the same argument again for the next run bcoz it return the cached result the next time that it is called.

2.The useCallback Hook :- improving performance in React application includes preventing unnecessary renders and reducing the timer a render takes to propagate. useCallback() can help us prevent some unnecessary renders and therefore gain a performance boots.

1.function equality :- function can be treated just like any other variable. a function can be passed as an argument to other functions, returned by nother function, assigned as a value to a variable,compared and so on,

2. The useCallback Hook :- Going back to React, when a component re-renders,every function inside of the components is recreated and therefore these function reference's change betn renders.

useCallback(callback, dependencies) will return a memoized instance of the callback that only changes of one of the dependencies has changed.

React.memo() :- is a higher-order components that we can use to wrap componetns that we do not want to re-render unless props with in them change.

3.Throttling and Debouncing Event Action in JavaScript
Debouncing:-
enforces that a function won't be called again until a certain amount of time has passed without it being clled.

Throttling:-
enforces a maximum number of times a function can be called over time.

4.Avoid using Index as Key for map :-
you often see indexes being used as a key when rendering a list.

5.Code Splitting using React.Lazy & Suspense
The more code a project has, the slower the browser will load.
