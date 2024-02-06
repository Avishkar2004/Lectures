1.uplifting state, composition and inheritance
Agenda :-
1.Lifting states up :- whatever is a state variable to it can be pass as props to the other component.

2.component's composition
3.component's inheritance
4.contrast

MATERIAL :-
1.Lifting The State Up in React Js:-
in react,each component has it's state.
we lift the state up to make the parent state a single shared state and a sole "Source of truth" and pass the paret's data to it's children.
this concept is called lifting state up. it is of great use to maitain data consistence in our react applicatio.

When to lift the state up ?
:-many times, multiple components must reflect the same changing data.and if the data is not sync betn 'parent n children component' or "Cousin compoents" it is it recommeded to lift ths shared state up to the closet common ancestor.

2.Component’s Inheritance in React :- inheritence is a way to achieve code readability when some objects have the same number of properties that can be shared accross the app.
-inheritence is allows the app to do the couplinf betn the parent-child component and reuse properties such as state values and function on it's child components.

-React does not use inheritance exceptt in the initial component class, which extends from the react package.
