Intro To HTTP :-hypertext transfer protocol it is used to transfer data acrross the web.it's the communication protocol you use when you browser the web.
At a fundamental level, when you visit website, your browser makes an HTTP request to a server.

How Does It work?
HTTP s a command and response text-based protocol using a client-server communication model.

- All request originate at the client(your browser)
- The server responds to a request.
- The request(commands) and resoponse are in readable text.
- The request are independent of each other and the server doesn't need to track the request.

A Reqeust consisit of:-
A command or request + optinal header + optional body content.
A Response consist of:-
A Status code + optinal header + optional body content.

URL :- (uniform resource locator)
-Protocol :- most often they are HTTP (or HTTPS for a secure version of HTTP).
-Domain :- Name that is used to identify one or more IP addresses where the resouces is located.
-Path :- specifies the resources locarion on the server.
-Parameter :- Additional data used to identify to filter the resources on the server.

HTTP Requests :- every request must have an URL address.(GET,PUT,POST,DELETE)
-And these methods directly correspond to actions:
read,update,create,delete.
1.Referre header :- tells the URL from where the request has originated.
2.User-Agent header :- addittional information about the browser being used to generate the request.
3.Host header:- uniquely identifies a hostname; it is necessary when multiple web pages are hosted on the same server.
4.Cookie header :- submits additonal parameter to the client.

HTTP Response Codes:- (1xx – Informational)
(2xx – Successful)
(3xx -Multiple Choice)
(4xx– Client Error)
(5xx -Server Error)
(-Go to webisite)

HTTP Methods:-
1.GET :- you use this method to requst data from a specify resources where data is not modified it in any way.GET requst do not change the state of resouces.
2.POST :- you use this method to send data to a server to create a resources.
3.PUT :- you use this method to upload the existing resources on a server by using the content in the body of request.
4.PATCh :- you use this method to apply partialy modifications to a resources.
5.DELETE :- you use this method to delete the specified resources.

HTTP Headers :-(First line,Headers,Body/Content)
1.General header :- header that can be used in both request and response messages and that are indepenedent of the data being exchages.
2.Reuest header:- these header define parameter for the data requst or paraeter that give important info about the cliet making the request.
3.Response header :- these header containg info about incoming response 4. Entity header :- the entity header describe the content that makes up the body of the message.

2.HTTPS (Hypertext Transfer Protocol Secure) :- The secure version of http protocol is hypertext tranfer protocol secure(HTTPS). HTTPS provides encrypted communication betn the browser and the website.

- the communication protocol is encrypted using transport layer security(TSL) or secure sockets layer(SSL).
  -Both the TLS and SSL protocols use an asymmetric encryption system.

Benefits of HTTPS :- customer info, like credit card number and other senstive info, is encrypte and cannot be intercepted.
-visitor can verify you are a registered business and that you own the domain.
-customers know they are not suppose to visit sites without HTTPS.

Intro To AJAX :- asynchoronous j.s and XML. it is not a programming language.it is a technology front developing better, faster and more interactive web application using HTML, CSS,J.S And XML

- ajax is just a means of loading data from the server and selecting updating parts of a web page without reloading the whole page.
- what ajax does is make use of the browser's build-in XMLHttpRequest(XHR) object to send and receive info to and from a web page.
  XML :- Extensible Markup Language(XML) is a format to store and transfer data from the web server.
  Q.What's the meaning of Asynchronous in AJAX?
  =>the web application could send and receives data from the web server without refreshing the page.
  Q.Understanding How Ajax Works?
  to perform ajax communication j.s uses a special object build into the browser-an XMLHttpRequest(XHR) object to make http request to the server and receive data in respons.
  var request = new XMLHttpRequest();
  request.open("GET", "info.txt"); -Or- request.open("POST", "add-user.php");
  NOTE: The file can be of any kind, like .txt or .xml or server-side scripting files, like .php or .asp, which can perfrom some action on the server before sending the reponse back to the client.
  request.send(); -Or- request.send(body);

=>Performing an Ajax GET Request.
The GET request is typically used to get or retriveve kind of info from the server that doesn't require any manipultion or change in the database.

 <!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="loadDoc()">Request data</button>
<p id="demo"></p>
<script>
function loadDoc() {
  // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();
    // Instantiating the request object
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    // Defining event listener for readystatechange event
    request.onreadystatechange = function() {
        // Check if the request is compete and was successful
        if(this.readyState === 4 && this.status === 200) {
            // Inserting the response from server into an HTML element
           document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    // Sending the request to the server
    request.send();

}
</script>

</body>
</html>

(go to website)
NOTE:- Theoretically, the readystatechnages event should be triggred every time the readystage property changes.but most browser do not fire this event when readyState changes 0 to 0.1. all browser fire this event when readystate chnages to 4.

=>Performing an Ajax POST Request

 <!DOCTYPE html>
<html>
<body>
<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="loadDoc()">Post data</button>
<script>
function loadDoc() {
  // Creating the XMLHttpRequest object
    var request = new XMLHttpRequest();
    // Instantiating the request object
    request.open("POST", "https://jsonplaceholder.typicode.com/posts");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Sending the request to the server
    request.send(JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }));
}
</script>
</body>
</html>

JQuery AJAX Introduction :-The Jquery library includes various method to send Ajax request.These methods internally use HMLHtppRequest object of j.s.(go to website)

jQuery get() Method:-the jQuery get() method sends asynchronous http GET request to the server and retrives the data.

<!-- $.get(url, [data],[callback]); -->

url:- request url from which you want to retrives the data
data:- data to be send to the server with the request as a query string.
callback:- function to be execute when reqest secceeds.

shows how to retrieve data:-

 <!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
	<script type="text/javascript" 
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
    </script>
	<script type="text/javascript">
     $(document).ready(function () {
			
		 $('#ajaxBtn').click(function(){
			
			$.get('https://jsonplaceholder.typicode.com/todos/1', function (data, textStatus, jqXHR) {
            console.log(data);
			});
		});
    });
    </script>
</head>
<body>
	<h1> jQuery get() method demo 
	</h1>
	<input type="button" id="ajaxBtn" value="Send GET request" />
</body>
</html>
jQuery post() Method:-
The JQuery post() methods sends asynchronous http POST request to the server to submit the data to the server and get response.
<!-- $.post(url,[data],[callback],[type]); -->
Parameter Description:
url:-request url from which you want to submit & retrieves the data.
data:-json data to be sent to the server with request as from data.
callback:- function to be execute when request succeeds.
type:- data type of the response content.

using post() method:-

<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
	<script type="text/javascript" 
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
    </script>
	<script type="text/javascript">
        $(document).ready(function () {
			
		 $('#ajaxBtn').click(function(){
			
			$.post('https://jsonplaceholder.typicode.com/posts',// url
			  {
			    title: 'foo',
			    body: 'bar',
			    userId: 1,
			  }, // data to be submit
			   function(data, status, jqXHR) {// success callback
						$('p').append('status: ' + status + ', data: ' + JSON.stringify(data));    
				});
			});
    });
    </script>
</head>
<body>
	<h1> jQuery post() method demo 
	</h1>
	<input type="button" id="ajaxBtn" value="Send POST request" />
	<p>
	</p>
</body>
</html>

AJAX Calls Using Fetch API In Javascript:-fetch is an interface for making an AJAX Request in j.s

<!-- const promise = fetch(url, [options]) -->

The request is sent as a GET by default.to send a POST/PATCH/DELETE/PUT you use the method property as a part of option parameter.
-method:-such as GET,POST,PATCH
-HEADER: header object.
-mode:- such as cors,no-cors,same origin.
-cache:- cache mode for request.
-credentials;
-body.
