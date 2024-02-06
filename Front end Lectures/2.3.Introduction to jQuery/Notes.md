Jquery:-
    what
    why => very less coding.
    simple Jquery code - syntax
    Jquery selector
    Manipulation
        HTML i.e. DOM
        CSS
        Events
        Browser Events :-

        -you dont use id again and again id is unique in nature inside the id field.
        -you can use class again and again inside the class field. 


        1.what is Jquery :- (<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>)
        =>stand for java script query
        => using the j.s we are going to make some query upon execution we get some result
        => it is a library based on j.s. this library is used since it gives us more with very less coding.
        =>"Write Less Do More"
        => CDN =>CDN is hosted on a remote server.
        3.=> approaches to implement jquery.
            1. Link to a file via Content Delivery Network (CDN).
            2. having a local copy of the jquery library.

            CDN :- 
            NOTE :- A content delivery network(CDN) is a system of multiple servers that delivr web content to a user based on geographical location.

    4.Jquery selector :-

    <p>Hello How are you</p>

    => Syntax ->
        $(selector).action()
        where,
            $ is used to access the jquery library and also to define selector - used to selecct the element from a document.
            action - used to perform some tasks on the selected element.
    => The Jquery method will be enclosed in a function  which inturn will be triggered only after the document is ready which means documnet is loaded in the browser.


    $(document).ready(function(){
        //statement or jquery methods !!!
    })

    or shorthand too exixt
    
    $(function(){
    //statement or jquery methods !!!
})

append :- add something to the existing data.
Toggle :- changing the state from one to another.
Hover :- combination of enter and mouse leave.

MATERIAL :- Include the jQuery by CDN 
1. Firstly, we have to open that Html file in which we want to add the jQuery using CDN.
2. After then, we have to place the cursor betn the headd tag just before the title tag. and then we have to use the <script> tag, which specify the src attribute for adding.
and then, you have to type the following path in the src attribute.
https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js
3. and, at, last save the Html file and the jQuery file is successfully added into our html page
Notes:-Your J.S file(script.js) must be includes below the jQuery library in the document or it will not work.

jQuery Selector :-
selector are how we tell jQuery which element we want to work on. most jQuery selector are the same as what you're fimiliar with in css, with a few jQuery-specific additinal.
To access a selector, use the jQuery symbol $, followed by parentheses().
$("selector")

Below is a brief overview of some of the most commanly used selector.

1.=> $("*") = Wildcard : selects every element on the page.
2.=> $(this) = Current: selects the current element being operated on within a function.
3.=> $("p") = Tag: select every instance of the <p> tag.
4.=> $(.example) = class: selects every element that has the example class applied to it.
5.=> $(#example) = id: select a single instance of the unique example id.
6.=> $("[type='text']") = Attribue: selects any element with text applied to the type attribute.
7.=> $("p:first-of-type") = pseudo element: selects the first <p>.

HTML/DOM Manipulation :-

Method	 Description
append()   =Inserts content to the end of element(s) which is specified by a selector.
before()    =Inserts content (new or existing DOM elements) before an element(s) which is specified by a selector.
after()     =Inserts content (new or existing DOM elements) after an element(s) which is specified by a selector.
prepend()    = Insert content at the beginning of an element(s) specified by a selector.
remove()     = Removes element(s) from DOM which is specified by selector.
replaceAll() = Replace target element(s) with specified element.
wrap()       = Wrap an HTML structure around each element which is specified by selector.

CSS Manipulation :-The jQuery library includes various methods to manipulate style properties and CSS class of DOM element(s).

jQuery Methods	 Description
css()	= Get or set style properties to the specified element(s).
addClass() = Add one or more class to the specified element(s).
hasClass()	= Determine whether any of the specified elements are assigned the given CSS class.
removeClass() =	Remove a single class, multiple classes, or all classes from the specified element(s).
toggleClass() = Toggles between adding/removing classes to the specified elements

HTML events methods :-
Category	jQuery Method	DOM Event
Form events	 blur	        onblur
             change	        onchange
             focus	        onfocus
             focusin	    onfocusin
             select	        onselect
             submit	        onsubmit
Keyboard events:keydown	    onkeydown
                keypress	onkeypress
                keyup	    onkeyup
                focusout	
Mouse events:	click	onclick
                dblclick	ondblclick
                focusout	
                hover	
                mouseenter	onmouseenter
                mouseleave	onmouseleave
                mousemove	onmousemove
                mouseout	onmouseout
                mouseover	onmouseover
                mouseup	    onmouseup
                Toggle	
Browser events: Resize	onresize
                Scroll	onscroll
Document loading: Ready	

Interview Questions :-
 Q1.what are the effects method used in jQuery.
 => show() - it displays or shows the selected elements.
 => hide() -it hides the matched or selected elements.
 => toggle() - it shows or hides the matches elements.
 => fadeln() -it fades in the selected elements.
 => fadeOut() -it fades out the selected elements.

 Q2.What is the use of delay() method in JQuery?
 => The jQuery delay() method is used to delay the execution of function in the queue.
 => it is the best  method to make a delay between the queued jQuery effects.
=> The jQUery delay () method sets a timer to delay the execution of the next item in the queue.
$(selector).delay (speed, queueName)

speed: it is a optional parameter.it specify the speed of the delay.its posibble values are slow, fast and milliseconds.
queueName: it is also an optional parameter. it specifies the name of the queue. its default values is "fx" the standard queue effect. 
