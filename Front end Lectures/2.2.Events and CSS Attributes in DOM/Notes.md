Agenda :-
Adding and removing element form dom:-
modifying element's attribute:-
Event listner:-
modifying css of the element:- 

1.adding element =
1.createElement - used to create new empty HTML Tag.
2.appendChild - responsible for adding a new child after the exixting children.

2.Removing Element:-
1.RemoveChild - is used to remove a particular child from the parent node.
Eg:-
let chilNode = parentNode.removeChild(childNode)
2.appendChild - responsible for adding a new child after thr existing children.

Removing Element :-
=> RemoveChild - is used to remove a particular child from the parent node.
eg:-
let childNode = parentNode.removeChild('childNode')

3.Modify Elements attributes.
=> setAttribute - used to set the attribute of an element.
=> getattribue - get the value of the passed attribute
=> hasAttribute - check if the attribute exist
    
4.Event bubbling :-
event start at the most specific element and then flows upward towards the least specific element.
5.Event Capturing :-
an event starts as the least specific element and flows downward toward the most specific

6.Add and removing event listner :-
addEventLitners - It helps in registering an event on a particular element.
eg:-
element.addEventListner(event.function,useCapture)
removeEventListner - unregister an event from a particular element.
eg:-
btn.removeEventListner('click'.showAlert)

7.Setting inline css :-
element.style.color='red';
element.style.cssText='color:red;background-color:yellow';
element.setAttribute('style'.'color:red;background-color:yellow'); 

8.Manipulation Class:-
ClassName -let menu = document.querySelector(#menu);
console.log(menu.className)

element.className +=newClassName;
                             var x=document.getElementById('extra');
classList - .add()/.remove() 
                             x.classList.remove('btn-warning').add 

 MATERIAL :-

1.Adding an element:
use document.createElement() to create a new element which in to the dom tree.it accept the html tag.
eg:-
let element = document.createElement(htmlTag);
Now we can use appendChild() method to add this element in to our DOM

The appendChild() is a method of the Node interface.

=>first, the createMenuitem() function create a new list item element with a specified name by using the createElement() method.
second, select the <ul> element with id menu using the querySelector() method.
Third, call the createMenuitem() function to create a new menu item and use the appendChild() method to append the menu item to the <ul> element.

2.Removing an Element :-
in order to remove a child element from a node, we can use the removeChild() method, 
Eg:-
let childNode = parentNode.removeChild(childNode);
The childNode is the child node of the parentNode, that you want  to remove.
The removeChild() return the remove the remove child node form the DOM tree but keeps it in the memory.
parentNode.removeChild(childNode);
Eg:-
let menu = doucment.getElementbyId('menu');
menu.removeChild(menu.lastElmentChild);

How its work :-
1. get the ul element with the id menu by using the getElementbyId() method.
2.Then, remove the last element of the ul element by using the removeChild() method.
The menu.lastElementChild property return the last child elemetn of the menu.
Eg:-
let menu = document.getElementById('menu');
while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
}

3.Modifying element’s attributes:
when the web browser loads a HTML page, it generates the corresponding DOM object based on the DOM nodes of the docuent.
<input type="text" id="username">
The web browser will generate an HTMlinputElement object.
The input element has two attributes:
The type attribute with the value text.
Ths id attribute with the value username.
The generated HTMLInputElement object will have the corresponding properties:
=>The input.type with the value text.
=>The input.id with the value username.
 
1. => element.getAtrribue(name) - get the value of the attribute. 
2. => element.setAttribute(name, value) - set the value of the attribute.
3. => element.hasAttribute(name) - check for the existense of the attribute.
4.=> element.removeAttribute(name) – remove the attribute

in Details:-
1.getAttribute() method:-
To get the value of an attribute on a special element, you call the getAttribute() method of the element.
Eg:-
let value = element.getAttribute(name);
Parameters :-
The getAttribute() accepts an argument which is the name of the attribute from which you want to return the value.
Return value :-
if the attribute exixt on the element, getAttribute() return a string that represents value of the attrobute.
<script>
        let link = document.querySelector('#js');
        if (link) {
            let target = link.getAttribute('target');
            console.log(target);
        }
    </script>
    How it's work :-
    =>First, select the link element with the id js using the querySelector() method.
    =>Second, get the target attribute of the link by calling the getAttribute() of the selected link element.
2.setAttribute() method:-
To set a value of an attribute on a specified element, you use the setAttribute() method:
eg:-
element.setAttribute(name, value);
Parameter :-
the name specifies the attribute name whose value is set.it;s automatically caonverted to a lowercase if you call the setAttribute().
Return value:-
The setAttribute() returns undefined.

  <script>
        let btnSend = document.querySelector('#btnSend');
        if (btnSend) {
            btnSend.setAttribute('name', 'send');
        }

    Output:
<button id="btnSend" name="send">Send</button>

3.hasAttribute method:-
let result = element.hasAttribute(name);
Parameter:-The hasAttribute() method accepts an argument that specifies the name of the attribute that you want to check.
Return Value :-
the hasAttribute return a boolean value that indicates if the element has the specified attribute.

4.RemoveAttribute :-
The removeAttribute() removes an attribut with a specified name from an element.
Eg:-
element.removeAttribute(name);
Parameter :-
the removeAttribute() accept an argument which is the name of the aatribute that you want to remove. if the attribute does not exist it will give error.
The removeAttribute() returns a value of undefined.

5.Event Listners :- An event is an action that occurs in the web page browser, which the web browser feedback to you so that you can respond to it.

6.HTML Event Handler Attributes:
Event handlers typically have names that begin with on, for eg, the event handdlers for the click event is onclick.
Eg;-
<input type="button" value="Save" onclick="alert('Clicked!')">
Eg:-
<script>function showAlert() {
        alert('Clicked!');
    }
</script><input type="button" value="Save" onclick="showAlert()">
the button calls the showAlert() funcrion when it is clicked.

Disadvantages of using HTML evet handler attribute :-
1.=>the event handler code is mixed with the HTML code,
which will make the code more diff to maintain and extend.
2.=>it is a timing issue. if the element is loaded fully before the j.s code, user can start interacting with the element on the webpage which will cause an error.
1.=> addEventListener() method:
addEventListener() - registers an event handler
syntax:
element.addEventListener(event, function, useCapture)

The addEventListener() method accepts three arguments:
* an event :- it is a require parameter. it can be defined as a string that specifies the event's name.
* **function:** it is also reqire parameter.
* useCapture : it is a optional paramter.it a specify type value that specifies whether the evnet is execute in the bubbling or capturing phase.
Eg:-
let btn = document.querySelector('#btn');
btn.addEventListener('click',function(event) {
    alert(event.type); // click
});

we are adding only a single event handler to handle a single event, but we can also add multiple event handlers to a single event.

let btn = document.querySelector('#btn');
btn.addEventListener('click',function(event) {
    alert(event.type); // click
});

btn.addEventListener('click',function(event) {
    alert('Clicked!');
});

2.removeEventListener() method:
removeEventListner() - remove an event handler.
The removeEventListner() removes an event listner that was added via the
addEventListner(). 
Eg:-

let btn = document.querySelector('#btn');

// add the event listener
let showAlert = function() {
    alert('Clicked!');
};
btn.addEventListener('click', showAlert);

// remove the event listener
btn.removeEventListener('click', showAlert);
(go to website)

7.Setting inline styles :-
To see the inline style of an element, you use the style property of that element.
Eg:-
element.style
The style property returns the read-only CSS Style Declaration object that contains a list of css properties.
eg:-
element.style.color = 'red';

if the css property contians hyphens ( - ) for eg -webkit-text-strokes you can use the array-lke notation ( [] ) to acces the property.

element.style.['-webkit-text-stock'] = 'unset';

To completely override the existing inline style, you set the cssText property of the style object.
element.style.cssText = 'color:red;background-color:yellow';
or you can use the setAttribute() method:-
element.setAttribute('style','color:red;background-color:yellow');
once setting the inline style, you can modify one or more css properties.
element.style.color = 'blue';

if you do not want  to completely overwrite the existing the css properties.
element.style.cssText += 'color:red;background-color:yellow';
in this case, the += operate appends the new style string to the existing one.

8.Manipulating CSS Classes:-
The className is the property of an element.it return a space-separated list of css classes of the element.
element.className
<ul id="menu" class="vertical main"><li>Homepage</li><li>Services</li><li>About</li><li>Contact</li></ul>
=> The following code shows the classes of the ul element on the Console window: 

let menu = document.querySelector('#menu');
console.log(menu.className);
Output:
vertical main
To set a class to an element, you use the following code :
element.className += newClassName;

The += operator adds the newClassName to the existing class list of the element.
we can aslo use classList property of an element to manipulate it's css.so let understand it:
The classList is a read-only property of an element that returns a live collection of CSS classes:
const classes = element.classList;

HTML Snippet :-
<div id="content" class="main red">JavaScript classList</div>
let div = document.querySelector('#content');
for (let cssClass of div.classList) {
    console.log(cssClass);
}
Output:
main
red
How it works:
=> First, select the div element with the id content using the querySelector() method.
=> Then, iterate over the elements of the classList and show the classes in the Console window.

