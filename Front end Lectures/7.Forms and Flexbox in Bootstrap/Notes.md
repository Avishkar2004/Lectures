<!-- Bootstrap is a library but some time he has capability to act as a framework.
nested grid :- a grid inside another grid
Agneda:-
1.Bootstrap Forms
2.Flex with Bootstrap
3.Tailwind :-UI library.

when you use (selected attribute) the value is by default selected.
"mt-1" use for spacing in bootstrap.
"mb-2" margin bottom.
"p-5" p for padding
"m-3" m for margins
d-flex = justify and flex thing
you can use this thing in one class using class.

bootstrap work with classes only.

type of validation ?
there are 2 type of validation:-
1.if you are doing something wrong  then you need to let your know.
eg:-when user writting or filling a form of somethinf is incorrect then you need to tell user.

imp of network tab :- we see your call whatever call are going to the server we saw all those call on network call.
web storage :-when your browser store some values and all will get store here this is called web storage.

1.Tailwind :-Tailwind is a css library.
>=you need to use css also while using tailwind.
>=tailwind is more dependent on css.
>taiwind is a very much lighter.as compare to bootstrap, bootsrap is a wast.

play CDN content delivery network.
<script src="https://cdn.tailwindcss.com"></script>f
you need this link to use tailwind in css.

MATERIAL:- 

1.Forms:-
Bootsraps from control expand on our reboots form style with classes.
Be sure to use an appropriate type attribute on all inputs (e.g., email for email adress or number for  numerical info) to take advantage  of new input control like email varification, number,selection and more.

Eg:-
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" 
			aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email 
			with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

2.From Control:-We can give textual form control like <input>s and <textarea>s an upgrades with customm styles, sizing, focus,states and more.
we can set height using classes like .form-control-lg and .form-control-sm.
Eg:-
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1"
	 placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">
	Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" 
	rows="3"></textarea>
</div>

3. Select:-we can customize the native <select>s with custom css that changes's the element's initial appearance.
Custom <Select> menus need only a custom class, .form-select to trigger the custom styles.Custom styles are limited to the <select> initial appearance and cannot modify the <option> due to browser limitations.

Eg:-
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>    

4.Input Group:-Using input-group class we can easily extent form controls by adding text,buttons,or buttons, group on either side of textual inputs, customs selects, and cutsom file inputs.
Eg:-<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" 
		aria-label="Username" aria-describedby="basic-addon1">
</div>

5.Flexbox in Bootstrap:- The flexible box layout module, makes it easier to design flexible responsive layout structure without using float or positioning.

=> To create a flexbox container and to transform direct children into flex items, use the d-flex  class.
=> To create an inline flexbox container, use the d-inline-flex class.
=> Use .flex-row to display the flex items horizontally (side by side). This is the default behaviour
=> Use .flex-column to display the flex items vertically (on top of each other), or .flex-column-reverse to reverse the vertical direction.
=> Use the .justify-content-* classes to change the alignment of flex items. Valid classes are start (default), end, center, between or around.
=> Use .flex-fill on flex items to force them into equal widths.
=> Use .flex-grow-1 on a flex item to take up the rest of the space.
=> We can change the visual order of a specific flex item(s) with the .order classes. Valid classes are from 0 to 5, where the lowest number has highest priority (order-1 is shown before order-2, etc..).
=> We can control how flex items wrap in a flex container with .flex-nowrap (default), .flex-wrap or .flex-wrap-reverse.
=> We can also control the vertical alignment of gathered flex items with the .align-content-* classes. Valid classes are .align-content-start (default), .align-content-end, .align-content-center, .align-content-between, .align-content-around and .align-content-stretch.
=> We can control the vertical alignment of single rows of flex items with the .align-items-* classes. Valid classes are .align-items-start, .align-items-end, .align-items-center, .align-items-baseline, and .align-items-stretch.
=> We can control the vertical alignment of a specified flex item with the .align-self-* classes. Valid classes are .align-self-start, .align-self-end, .align-self-center, .align-self-baseline, and .align-self-stretch.

6.Introduction to Tailwind css :
Tailwind css is a utility-based framework based on css. it provide a catalof of css classes that makes the process of styling more convenient.
Tailwinf is a bit diff from framework like bootstrap in that it's not a UI kit.
it comes with a menu of predesigned widgets to build your site with, but doesn't impose design decisions that are difficult to undo.

7.Container:-
not like unlike container in bootstrap,tailwind's container is a component for fixing an element's width to the current breakpoint.
The container class sets the  max-width of an element to match the min-width of the current breakpoint.This is useful if you'd prefer to design for a fixed set of screen size instead of tryinh to accommodate a fully fluid viweport.
The container class also includes responsive variants like md:container by default that allow you to make something behave like a container at only a certain breakpoint and up.
Eg:-
Full-width fluid until the `md` breakpoint, then lock to container 
<div class="md:container md:mx-auto"> </div>

In tailwind css, we can define our own customized theme instead of the default theme. for expamle to center containers by default, set the center option to true in the theme.container section of your config file:

Interview Questions:
Q.1:-in Bootstrap 4, what is flexbox?
=> flexbox is a layout module for flexible boxes.without using float or positionning, you can quickly create a flexible layout design with felxbox.

Q.2:-Explain the concept of creating a basic form in bootstrap.
=> first, add a <form> element. Then,inside the form element,wrap labels and control in a <div> element with the .form-group class. Next the .form-control class to text input elements like <input>,<textarea> and <select> elements. 