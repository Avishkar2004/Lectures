NPM :- node package manager
NPX :-Node package Execute/Executable

React :- 
what ? = front end framwork, single page application there is no reloade in web page.
Architecture :- virtual, browse and server dom
why = bandwidth gets saved, server is not overloaded
NPM & NPX :- Node package manager, Node package execute
    packages diff names :- packages/library/modules/dependensiec/3rd party library/ functions/bundles/ etc...

JSX :- we pass html data inside the j.s
       then these script with the html data is rendred to the browser.

Diff approaches ->
                1.create-react-app, 
                2.react-bones(this will create a skeletol project of react), 
                3.using CDN's of react and react-dom
npm js is website which were you can find all the depenecies.

React component 2:-
       class components :-when we use the class consept to creatw a component then it is said to be a class component.

    class concept 
          class
          predefined method
          constructor,render,etc...
        user defined data

        -every class you create will act as a component
        -lets consider the webpage is divided into 4 component 
        -5 class
        -5 th class is used as a containerr/root to enclose the 4 class you created

    states
    => it is a data management solution that is used by the react component
    => store,update, manage the data, etc.... the data using stage.


Flows of the project :-
1.index.html => index.js => App.js => app.html => app.css => index.html.

       Components life cycles:-diff stages of a component
              1.Muont Stage :- component initialization 
              => method of mount stage 
              1. constructor method
              2. rendor method
              3.componentDidMount() => it will check whether the component is mounted or not.
                  => this method gets triggred automatically once mount is completed. 

              2.Update Stage :- component is update - chnage in state
                    => method of mount stage
                    1.render mehtod => you have to re render the new data
                    2.componentDidUpdate() => it will check whether the component is update or not.
                        => this method gets triggred automatically once the update is completed.

              3.Unmount Stage :- component is deleted/removed/moved
                =>Methods of mount stage.
                =>componentWillUnmount()
                =>this method gets triggred automatically once the delete/move operation is completed.

MATERIAL :-
Class Components in React :-to define a react component class, we have to create a class and extned react.component class.output of any class component we create is depenedent on the return value of a method called render(). The render() method is the only require method needs to be implement in a class component.

State in React :-
React componet will oftrn need dynamic info in order to render.
-There are two ways for a component to get dynamic info :-
props and state. beside props and state every value used in a component should always exactly the same.
-props and state are all that you need to set up an ecosystem of interacting react component.

Setting initial State:-
A react compoent can access dynamic info in two ways : props and state.
unlike props, a component's state is notpassed in from the outside. A component decides it's own stage.

-this.state should be equal to an objecct.This object represents the initial 'state' of any component instance.
How about the rest of the code ? constructor and super are both feature of ES6, not unique to react. it is important to note that react component always have to call super in their constructors to be set up properly.

Updating state with this.setState :
-A component can do more than just read it own state. a component can alsochange it's own state.
-A component changes it's state by calling the function this.setState().

this.setState(). takes two arguments:- an object that will update the component's state, and a callback.you basically never need the callback.
-takes an object, and mrege that object with the component's current state.

=>this.setState :- is to call a custom function that wrap a this.setState() call.

The Component’s Lifecycle in React :- React components can be highly dynamic.They get created, rendered,added to the DOM, updated, and removed.
1.Mounting :- when the component is being initialized and put into the Dom for the first time.
2.Updating :- when the component updates as a result of changed state or changed props.
3.Unmounting :- when the component is being removed from the DOM.

Introduction to Lifecycle Methods :
React components have several methods, called lifecycle methods, that are called at diff parts of a component's lifecycle.
Methods :- constructor() and render()! Constructor() is the first method called during the mounting phase.render() is called later during the mounting phase, to render the component for the first time, and during the updating phase =, to re-render the component.

Mounting Lifecycle Methods :
React support three mounting lifecycle methods for components classes :- componentWillMount(), render(), and componentDidMount().componentWillMount() be called first followed by the render() methodds and finally the componentDidMount() methods.

1.componentDidMount :
1.Mounting:- when the componnet is being initialized and put into the DOM for the first time.
2.Updating :- when the component updates as a result of changed state or changed props.
3.Unmounting :- when the componnet is being removed from the dom.

componentDidMount() is the final method called during the mounting phase.The order is :-
1.The constructor
2.render()
3.componentDidMount()

Unmounting Lifecycle Method :
React support one unmounting lifecycle method,componentWillUnmount, whicch will be called right before a component is removed from the DOM.
-componentWillUnmount() is used to do any neccessary cleanup(cancelling any timers or interval) before the component disapperars.

ComponentWillUnmount :
when the component is unmounted(in other words, removed from the page.)that timer will keep on ticking, trying to update the state of a component that's effectively gone.

Updating Lifecycle Method :- 
when a component updates,shouldComponentUpdate() gets called after componentWillReceiveProps(),but still before the rendering begins.it automatically receives two arguments:nextProps and nextState.

shouldComponentUpdate() should return either true or false. the best way to use this method is to have it return false only under certaing consition.if those conditions are met, then your component will not update.

componentDidUpdate :
1.Mounting :- when the component is being initialized and put into the DOM for the first time.
2.Updating :- when the component updates as a result of changes state or changes props.
3.Unmounting :- when the component is being removed from the DOM.

The first is render(), which we've seen in every react component.when a component's props or state changes,render() is called.