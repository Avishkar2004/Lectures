1..Software testing :-

prereuisting :-
How to develop software using react.

React :- react is most popular j.s library
using react :- facebook, insta, netflix,uber-reactnative

Test Facebook :-
=>effor ? :-

manual (human)/Automation(computer) :-

Unit Testing :-
search functionality (in unit testing) :-
type in textbox -> click on button => send req => validate req => prepare response => receive responce => parse response => render response.

-

Integration Testing :-

Snapshot :-
is getting a current stage of a componetns later comparing it wit the later stages of the components check iff has been any diff changes in the component.

Test suite :-
-collection of test cases

Test case/scenario :-
-one case or scenario.
-one tst will define one scenario.

TDD(Test Driven Development) :- A priciple/practice used for software development.
:-

Client want implement login form :-
step 1:- to write test case for the funcationality
step 2:-test case will fail
step 3:-write your code to make test case pass
step 4:-run tests, test pass/fail
step 5:- until tests dont pass, keep updating your code.

mention in your resume:-
TDD(Test Driven Development) increase your package efficiency 30%/.

<!--
 GO to:
 step 1:-
app.test.js
step 2:- create a TestElement.js file.

 -->

MATERIAL :-

Testing :-
Testing is a line-by-line review of how your code will execute.A suite of tests for an application comprises various bit of code to varify whether an application is executing succeessfull and without error.

Why Test ?
1.The first purpose of testing is to prevent regression.Regression is the reappearance of a bug that had previously been fixed.
2.Testing ensure the functionality of complex components and modular applin.
3.Testing is required for the effective performance of a software application or product.

Testing makes an app more robust and less prone to error.

UNIT TEST :-
in this type of test,individual units or components of the software are tested.A unit might be an individual function, method, procedure, module,or object.

COMPONENT TEST:-
component testing verifies the functionality of an individual part of an application. Tests are performed an each component is isolation from other component.

SNAPSHOT TEST:-
A snapshot test makes sure that the user interface(UI) of a web application does not change unexpectedly.it capture the code of a component at a moment in time.

-it or test you would pass a function to this method,and the test runner would execute that function as a block of test.
-describe this option method is for grouping any number of it or test statement.
-expect this is the condition that the test needs to pass.it compares the receives parameter to the matcher.
-mount this method renders the full DOM.including the child components of the parent components.
-shallow this renders only individual components that we are testing.
What is the React Testing Library?
-The react testing library is a very light-weigth package created by Kent C.Dodds. it's a replacement for Enzyme and provide light utility functions on top if react-dom and react-dom/test-utility.

-The React Testing Library is a DOM testing library, which means that instead of dealing with instance of rendered react components.

NOTE :-
you can also use it without test.

How to create a test snapshot
it("should take a snapshot", () => {
const { asFragment } = render(<App />);

    expect(asFragment(<App />)).toMatchSnapshot();

});

npm test
run this command in the node.
