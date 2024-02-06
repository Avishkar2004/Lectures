Agenda:-
1.DOM
what:-
Why:-
How to access the dom element:-
DOM Basic:-
HTML DOM element:-

DOM:-
=> Document Object model
=>DOM - Tree like representation of your HTML Document. - Each element from HTML document called as "node" in the DOM tree - Collection of nodes is also called as DOM - the tree like a str is in the form of a hierarchy model

      <html>
    <head>
        <title>DOM Tree</title>
    </head>
    <body>
        <p style="color:red;">hello</p>
        <h1>how are you</h1>
    </body>

</html>

How to access the DOM element:-
=> The document node is the entry point to a dom tree
There are many method which is provided by the document class through which you can access the element.
array=[1,2,3,4]
array.length is a property
or
array.toString() is a method

:-you can acess the data
getElementById(is atribute)
getElementByClassName()
getElementByTagName()
queryselector

in j.s are how many apparoches are there:-
there are 5 apparoches for implementing j.s in page.
1.External script
2.Internal script
3 sub categary
(i) inside the body
(ii) inside the head
(iii) inside the html element.
5th apparoches is not find over here they are find in react.js

success full embeded in j.s file

<script src="index.js"></script>

you can access html value in j.s file
console.log(
document.getElementById("myId").value //hello will be printed in the console
)

.innerHTML to access the content it will printing hello

if we use j.s to manipulate the style content then it will be a inline apparoche

<input/> => tag is used to provide input
=> it is used to collect the input from the users.
=> 20+ diff types are available.
<input type="(text {widely use}),password,document,number,DOB,gmail id,upload the document"/>

what is DOM ?
=> The Document object model (DOM) is a programming interface that lets us add, edit and delete component from a document.
=>The DOM views an HTML documnet as a tree of nodes. A nodes represents an html element.

why DOM is require ?
=>The DOM is what allows you to change the content and design on structure via j.s.
=>This is bcoz it gives you the ability to add new or modify existing elements in or it in your script.Which can speed up the task(like dynamically adding iframe) and becrease load times for page using it.

why DOM Covers ?
=>The DOM API allows full control, both querying and altering the DOM, and you have pratically full supports in the API to leverages all features provided by the HTML markup.
=>First of all, it allows access to a certain part of the documents(the HTML markup).you can access a certain markup element using its identifier, or a collection of element by their names,class type(according to the values of the element's class attributes).
eg:-
const element = document.getElementsByTagName("h1");

=> you can query the metadata of a documnets including it's URL, character set, last modification data,etc.
console.log(document.lastModified)
ALmost every intercation between a user and a web page is build in DOM. when you click a component of a page,a node of the DOM hierarchy receives the events and response by executing some code.

=> web pages that keep the UI responsive while running queries against the server in the background use the DOM to update the page when result arrive, too.
Eg:-
If the viewport is less than, or equal to, 700 pixels wide, change the background color to yellow. If it is greater than 700, change it to pink

function myFunction(x) {
if (x.matches) { // If media query matches
document.body.style.backgroundColor = "yellow";
} else {
document.body.style.backgroundColor = "pink";
}
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
=> many pages generate additional UI component at the clinet-side, right after the page is loaded, such as thumbnails,quick links, table of content, or other elements that hepls with page navigation. The script behind these activities also utilize the DOM.

=>DOMContentLoaded - the browser fully loaded HTML, and the DOM tree is build, but external resourced like pictures <img> and stylesheets may not yet have loaded.
eg:-
function ready() {
alert('DOM is ready');

    // image is not yet loaded (unless it was cached), so the size is 0x0
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
}

document.addEventListener("DOMContentLoaded", ready);
=> moving charts, animated figures,interactive footer and banner all leaverage the DOM.

DOM Basics :- THe DOM represents an html documents as a heiarchy of nodes.consider as a following documents.

<html>
    <head>
        <title>JavaScript DOM</title>
    </head>
    <body>
        <p>Hello DOM!</p>
    </body>
</html>.

in the DOM tree, the document is the root node. The root node has one child node which is the <html> element. The <html> element is called the document element.
Each document can have only one document element. In an HTML document. Each markup can be represented by a node in the tree.

Node and Element:-
a node is a generic name of any object in the dom tree. it can be in build-in dom element such as the document.or it can be any HTML tag specified in the HTML documents like <div> or <p>.

An element is a node with a specific node type Node.ELEMENT_NODE.
in other words,the node is the generic type of element.

Note:- that the getElementByid() and querySelector() return an object with the element type while getElementsByTagName() or querySelectorAll() return nodelist which is a collection of nodes.

Node Relationships:-
any node has relationships to the other nodes in the DOM tree.
For example, <body> is a child node of the <html> node, and <html> is the parent of the <body> node.

HTML DOM Elements :-
when the web page is loaded the browser creates a documents objects model of the page.
The HTML DOM model is constructed as a tree of Objects:

The element object:-
in the HTML DOm, the element object represents an html element, likes P,DIV, A, TABLE, or any other HTML element. each element object has certain properties and method associated with it.

DOM Attributes/Properties :-
The values you can set or change the HTML elements are called HTML DOM Property.(go to the website)

DOM Methods:-
The "actions" you perform on html elements are called html DOM Methods.(go to the website)

Accessing DOM Elements:-
The DOM API provides us with some methods through which we can access the elements.

getElementByid() method:The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.
=> if the document has no element with the specific id it return null.

<html>
    <head>
        <title>JavaScript getElementById() Method</title>
    </head>
    <body>
        <p id="message">A paragraph</p>
    </body>
</html>
The document contains a <p>element that has the id attribute with the value message:

const p = document.getElementById('message');
console.log(p);
OUTPUT:

<p id="message">A paragraph</p>

2.getElementsByName() method:- the getElementsByName() accepts a name which is the value of the same attributes of elements and return a live nodelist of element.
=> it return collection of element is live.
Eg:-

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>JavaScript getElementsByName Demo</title>
</head>

<body>
    <p>Please rate the service:</p>
    <p>
        <label for="very-poor">
            <input type="radio" name="rate" value="Very poor" id="very-poor"> Very poor
        </label>
        <label for="poor">
            <input type="radio" name="rate" value="Poor" id="poor"> Poor
        </label>
        <label for="ok">
            <input type="radio" name="rate" value="OK" id="ok"> OK
        </label>
        <label for="good">
            <input type="radio" name="rate" value="Good"> Good
        </label>
        <label for="very-good">
            <input type="radio" name="rate" value="Very Good" id="very-good"> Very Good
        </label>
    </p>
    <p>
        <button id="btnRate">Submit</button>
    </p>
    <p id="output"></p>
    <script>
        let btn = document.getElementById('btnRate');
        let output = document.getElementById('output');

        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });
        });
    </script>

</body>
</html>

3.getElementByTagName() method:-
the getElementByTagName() is a method of the document object or a specific DOM element.

3.getElementByClassName() method:-
The getElementByClassName() method return an array-like of object of the child element with a specified class name.

let elements = document.getElementsByClassName(names);
Eg:-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript getElementsByClassName</title>
</head>
<body>
    <header>
        <nav>
            <ul id="menu">
                <li class="item">HTML</li>
                <li class="item">CSS</li>
                <li class="item highlight">JavaScript</li>
                <li class="item">TypeScript</li>
            </ul>
        </nav>
        <h1>getElementsByClassName Demo</h1>
    </header>
    <section>
        <article>
            <h2 class="secondary">Example 1</h2>
        </article>
        <article>
            <h2 class="secondary">Example 2</h2>
        </article>
    </section>
</body>
</html>

let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);

console.log(data);

OUTPUT:-
['HTML', 'CSS', 'JavaScript', 'TypeScript']

4.querySelector() and querySelectorAll method:-
The querySelector() is a method of that of the element interface.the querySelector method allows you to select the first element that matches one or more css selector.

let element = parentNode.querySelector(selector);
Besides the querySelector(), you can use the querySelectorAll() method to select the all element that match a css selector or a group of css selector.
Eg:-
let elementList = parentNode.querySelectorAll(selector);

Basic Selector:-

<!DOCTYPE html>
<html lang="en">
<head>
    <title>querySelector() Demo</title>
</head>
<body>
    <header>
        <div id="logo">
            <img src="img/logo.jpg" alt="Logo" id="logo">
        </div>
        <nav class="primary-nav">
            <ul>
                <li class="menu-item current"><a href="#home">Home</a></li>
                <li class="menu-item"><a href="#services">Services</a></li>
                <li class="menu-item"><a href="#about">About</a></li>
                <li class="menu-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to the JS Dev Agency</h1>

        <div class="container">
            <section class="section-a">
                <h2>UI/UX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem placeat, atque accusamus voluptas
                    laudantium facilis iure adipisci ab veritatis eos neque culpa id nostrum tempora tempore minima.
                    Adipisci, obcaecati repellat.</p>
                <button>Read More</button>
            </section>
            <section class="section-b">
                <h2>PWA Development</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni fugiat similique illo nobis quibusdam
                    commodi aspernatur, tempora doloribus quod, consectetur deserunt, facilis natus optio. Iure
                    provident labore nihil in earum.</p>
                <button>Read More</button>
            </section>
            <section class="section-c">
                <h2>Mobile App Dev</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos culpa laudantium consequatur ea!
                    Quibusdam, iure obcaecati. Adipisci deserunt, alias repellat eligendi odit labore! Fugit iste sit
                    laborum debitis eos?</p>
                <button>Read More</button>
            </section>
        </div>
    </main>
    <script src="js/main.js"></script>

</body>
</html>

1.Universal Selector :-
The universal selector is donated by \* that mathes all element of any type:-

The following example uses the querySelector() selects the first element in the document:
Eg:-
let element = document.querySelector('\*');

this select all elements in the document:
Eg:-
let elements = document.querySelectorAll('\*');

2.Type Selector :-
to select element by node name, you use the type selector
eg:-
let firstHeading = document.querySelector('h1');

3. Class Selector:-
   To find the element with a given css class, you use the class selector syntax .className
   eg:-
   let note = document.querySelector('.menu-item');

4.ID selector:-
To select an element based on the value of it's id, you use the id selector syntax #id
Eg:-
let logo = document.querySelector('#logo');

5.Attribute selector:-
To select all element that have a given attribute, you use one of the following attribute selector syntaxes:-
[attribute] [attribute=value] [attribute~=value] [attribute|=value] [attribute^=value] [attribute$=value] [attribute*$*=value]

Eg:-
let autoplay = document.querySelector('[autoplay]');

6.Grouping Selectors :-
To group multiple selector, you use the following syntax :-
selector,selector,...
The selector list will match any element with one of the selector in one group.
eg:-
let elements = document.querySelectorAll('div, p');

Combinators
1.Descendant combinator:
To find the descendant of a node, you use the space ( ) descendant combinator syntax.
=> selector selector
Eg:-
let links = document.querySelector('p a');

2.Child Combinator :-
The > child combinator finds all elements that are direct children of the first element :
selector > selector
Eg:-
let listItems = document.querySelectorAll('ul > li');

3.General sibling combinator :-
The ~ combinator selects sibling that share the same parent:-
selector ~ selector
Eg:-
let links = document.querySelectorAll('p ~ a');

4.Adjacent Sibling:-
The + adjacent sibling combinator select adjacent sibling:
selector + selector
Eg:-
let links = document.querySelectorAll('h1 + a');

Pseudo :-
[1.] pseudo classes :-
The : pseudo matches elements based on their states: element:state

For example, the li:nth-child(2) selects the second <li> element in a list:
let listItem = document.querySelectorAll('li:nth-child(2)')

[2.]Pseudo Element :-
The :: represents entities that are not included in the documents.
Eg:-
let links = document.querySelector('p::first-line');

Get the parentNode:
To get the parent node of a specified node in the DOM tree, you use the parentNode property:
The Document and DocumentFragment nodes do not have a parent. Therefore, the parentNode will always be null.
Eg:-

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JavaScript parentNode</title>
</head>
<body>
    <div id="main">
        <p class="note">This is a note!</p>
    </div>

    <script>
        let note = document.querySelector('.note');
        console.log(note.parentNode);
    </script>

</body>
</html>

Get the children:-
1.To get the first child element of a specified element, you use the firstChild property of the element.Or to get the first child with the Element node only, you can use the firstElementChild property.
2.To get the last child element of a node, you use the lastChild property.If you want to select only the last child element with the element node type, you use the lastElementChild property.
Eg:-

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Get Child Elements</title>
</head>
<body>
  <ul id="menu">
    <li class="first">Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li class="last">About Us</li>
  </ul>
</body>
</html>

1.First Child:
The following script shows the first child of the #menu element:

let content = document.getElementById('menu');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);

2.Last Child :-
The following code returns the list item which is the last child element of the menu:

let content = document.getElementById('menu');
let lastChild = content.lastChild.nodeName;
console.log(firstChild);

3.Get All Child Elements :-

The following example selects all child elements of the element with the Id main:

let menu = document.getElementById('menu');
let children = menu.children;
console.log(children);

[3.]Get the sibling :-
To get the next sibling of an element, you use the next Element Sibling attribute.

The next Element Sibling returns null if the specified element is the first one in the list.
Eg of nextElementSibling property :-

<ul id="menu">
    <li>Home</li>
    <li>Products</li>
    <li class="current">Customer Support</li>
    <li>Careers</li>
    <li>Investors</li>
    <li>News</li>
    <li>About Us</li>
</ul>

let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling);

OUTPUT:

<li>Careers</li>

To get the previous siblings of an element, you use the previous Element Sibling attribute.

previous Element Sibling property returns null if the current element is the first one in the list.

Eg of previousElementSibling :-
let current = document.querySelector('.current');
let prevSibling = current.previousElementSibling;
console.log(prevSibling);

OUTPUT:

<li>Products</li>

:-Interview Questions
What are the HTML DOM methods involved?

The following are HTML DOM methods that are mostly used.

getElementById(idName) = this method allows you to access or find an element associated with id name defined in parenthesis(). Example – document.getElementById(“demo”)
getElementsByClassName(className) – this method allows you to access or find elements associated with className defined in parenthesis(). Example – document.getElementsByClassName(“main”)
getElementsByTagName(tagName) – this method allows you to access or find elements associated with tagName defined in parenthesis(). Example – document.getElementsByTagName(“p”)
appendChild(element) – this method allows you to add a new element(node) in DOM(Document Object Model) tree structure as the last child of a node. Example – document.appendChild(element)
removeChild(element) – this method allows you to remove a child element(node) in DOM(Document Object Model) tree structure. Example – document.appendChild(element)
createChild(element) – this method allows you to create an element(node) in DOM(Document Object Model) tree structure. Example – document.createElement(element)
replaceChild(new, old) – this method allows you to replace an old element with a new element in DOM(Document Object Model) tree structure. Example – document.replaceChild(new, old)

How can I find the number of elements (length) in the HTML collection?

To find the number of elements in HTML collection, we have to use length properties.

<body>
<p>This is paragraph one. </p>
<p>  This is paragraph two. </p>
<p>  This is paragraph three. </p>
<p id=”demo”></p>
<script>
var x = document.getElementsByTagName(“p”);
document.getElementById(“demo”).innerHTML = x.length;
</script>
</body>
The output will be –
4
