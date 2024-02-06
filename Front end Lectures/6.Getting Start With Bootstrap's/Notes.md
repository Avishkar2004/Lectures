<!--
    :-  we need this link for running bootstrap in html.

1.<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">


2.  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>       
1.library = the collection of predefine classes
Boootstrap is a UI library(in CSS)
bootstrap follow mobile first apparoach

2.why bootstrap is useful = it is a modile-friendly,save your time.

*:-container is class which is define in div 
<div class="container">
<p>container container +container container container</p> 
</div>
tag cha vapar kelya vr text center madhe yet

in container we have 2 types:-
1.Fixed container :-a fixed container is a (responsive) fixed width container.as you resize your browser.
eg:-<div class="container">
...
</div>

2.Fluid Conatainer :-A fluid conatainer span the full width of the viewport.it will expand and contract fluidly as you resize the browser.

eg:-<div class="container-fluid">
...
</div>

3.network tab = so the local server im using first he know when im execute this 

 <button class="(matic is a atribute name)btn btn-primary">Submit</button>(primary,secondary,tertiry,warning)
 (<div class="container">
        <button class=" matic btn btn-warning">Submit</button>
        <p>This is a Alma Better batch This is a Alma Better batch</p>
    </div>)

 class= you can give class any element.

:This is how you can use your j.s file in html
<script src="index.js"></script>

4.Bootstrap's Grid System :-
>=grid system are used for creating page layouts through a series of rows and columns that house your content.
>=rows must be placed within a .container class for proper alignment and padding.
>=use rows to create horizontal group of column
>=predefined grid classes like .rows and .cols-xs-4 are available for quickly making grid layouts.
>=column create gutters(gaps between column content) vai padding.
>=eg:-"col-sm-1" instead of a you can put any number

<div class="row">
                <div class="col">Column 1</div>
                <div class="col">Column 2 </div>
                <div class="col">Column 3</div>
            </div> 

          when you want column 1 diff size and column 2,3
          there constly concept of greed system.

<div class="row">
                <div class="(col-2 this is grid)">Column 1</div>
                <div class="col-4">Column 2 </div>
                <div class="col-6">Column 3</div>

what is view port = total screen size (your screen size)

what is breakpoint ? =(<div class=["col-md-4" this is breakpoint]>Column 1</div>)
<div class="col-md-6 col-sm-8">Column 1</div>

Breakpoint        Class infix  Dimensions
X-Small	           None	       <576px
Small	             sm	         ≥576px
Medium	           md	         ≥768px
Large	             lg	         ≥992px
Extra large        xl	         ≥1200px
Extra extra large  xxl	       ≥1400px

6.Components in Bootstrap
1.>= Button Components :-Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
=> eg:-
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>

2.>=Button Group:-in order to make a <div>, a button group component we have add a class .btn-group to the div.

eg:-(this is horizontal)
<div class="btn-group" role="group">
<button type="button" class="btn btn-outline-primary">Thailand</button>
<button type="button" class="btn btn-secondary">Cambodia</button>
<button type="button" class="btn btn-success">Vietnam</button>
</div>

>=(This is vertical)
eg:-
<div class="btn-group-vertical" role="group">
	<button type="button" class="btn btn-outline-primary">Thailand</button>
	<button type="button" class="btn btn-secondary">Cambodia</button>
	<button type="button" class="btn btn-success">Vietnam</button>
</div>

7.cards:-Bootstraps cards provide a flexible and extensible content container with multiple variants and options.
eg:-
<div class="card" style="width: 18rem;">
  <img src="https://tse2.mm.bing.net/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&pid=Api&P=0" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

8.Dropdowns:-Dropdown allow us to toggle contectual overlays for displaying lists of links and more with the bootstrap dropdown plugin.
Eg:-
<div class="dropdown">
<button class="btn btn-primary dropdown-toggle" type="button" id="about-us"
data-bs-toggle="dropdown" aria-expanded="false">
About Us
</button>
<ul class="dropdown-menu" aria-labelledby="about-us">
<li><a class="dropdown-item" href="#">Our Story</a></li>
<li><a class="dropdown-item" href="#">Our Team</a></li>
<li><a class="dropdown-item" href="#">Contact Us</a></li>
</ul>
</div>

9.List of group:-list group are a flexible and powerful component for displaying a series of content.
To create a default list group,apply the .list-group class to the <ul> tag,and the .list-group-item to each <li> tag.
Eg:-
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

10.progress Bars:-
>=we use the .progress as a wrapper to indicate the max value of the  progress bar.
>=We use the inner .progress-bar to indicate the progress so far.
>=The .progress-bar require an inline style, utility class, or custom css to set their width.
>=The .progress-bars also requires some role and aria attribute to make it accesibble. 
Eg:-
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0"
		 aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%"
		 aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%"
		 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%"
		 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%"
		 aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>

11.Navbar:-
>= .navbar with .navbar-expand{-sm|-md|-lg|-xl|-xxl} for responsive collapsing and color scheme classes like .navbar-light, .navbar-dark etc. and we can add the background color using .bg-primary, .bg-secondary etc.
>=navbar and their contents are fluid by default.
>=navbar are responsive by default.

>= .navbar-brand =for your compant,product,or project name.
>= .navbar-nav =for a full-height and lightweight navigation
>= .navbar-toggler = for use with our collapse plugin and other navigation toggling behaviours.
>= .navbar-text = for adding vertically centered string of text.
>= .collapse.navbar= collapse for grouping and hiding navbar contents by a parent breakpoint.
>= Add an optional .navbar-scroll to set a max-height and scroll expanded navbar content.
>=
Eg:-
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
		 data-bs-target="#navbarSupportedContent" 
			aria-controls="navbarSupportedContent" aria-expanded="false" 
				aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
					role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" 
					aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" 
				aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

12.Carousel :- Carousel mhnje photo skips krne. Skip Carousel mule hote.
Eg:-
<div id="carouselExampleIndicators" class="carousel slide" 
		data-bs-ride="carousel">
  <div class="carousel-indicators">
	    <button type="button" data-bs-target="#carouselExampleIndicators" 
			data-bs-slide-to="0" class="active" aria-current="true" 
			aria-label="Slide 1"></button>
	    <button type="button" data-bs-target="#carouselExampleIndicators" 
			data-bs-slide-to="1" aria-label="Slide 2"></button>
	    <button type="button" data-bs-target="#carouselExampleIndicators" 
			data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" 
		data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" 
		data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

13.media query:- when client want submit button should look diff for diff screen.
whatever the style have right inside media query it will applicable to all the devices where the maximum width is 600 
Test :- go to the dev tools
 (max-width: 600px) this is a break point.


:-Interview Questions
What are the advantages of Bootstrap?
The following are some advantages of Bootstrap:
Bootstrap is simple to use and anyone with a basic understanding of HTML and CSS can get started.
Features that adapt to phones, tablets, and desktops: Bootstrap's responsive CSS adapts to phones, tablets, and desktops.
A mobile-first strategy: Mobile-first styles are built into the Bootstrap framework.
Bootstrap 4 is compatible with all modern browsers, including Chrome, Firefox, Internet Explorer 10+, Edge, Safari, and Opera

What is a Bootstrap Container, and how does it work?
A bootstrap container is a handy class that generates a central region on the page where we can put our site content. The bootstrap .container has the advantage of being responsive and containing all of our other HTML code. Containers are used to pad the content within them, and there are two types of containers:

The .container class creates a fixed-width container that is responsive.
The .container-fluid class creates a full-width container that spans the entire viewport width.

What do you know about the Bootstrap Grid System?
The Bootstrap Grid System is a mobile-first, responsive grid system that scales up to 12 columns as the device or viewport size grows. Predefined classes for quick layout options and powerful mix-ins for creating successful semantic layouts are included in the system.

There are five classes in the Bootstrap 4 grid system:
.col- for extra small devices, whose screen width is less than 576px.
.col-sm- small devices, whose screen width is equal to or greater than 576px.
.col-md- medium devices, whose screen width is equal to or greater than 768px.
.col-lg- large devices, whose screen width is equal to or greater than 992px.
.col-xl- extra large devices, whose screen width is equal to or greater than 1200px.
The classes listed above can be combined to build layouts that are more dynamic and adaptable.
-->