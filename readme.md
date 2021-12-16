Using Express
Express Basics
Application
The Application Object

Every Express application requires the creation of what is known as the application object. All of the core functions of express take place on the application object including endpoint methods. After importing express to use in your application, the first thing you do is create your application object most commonly using the name app.

To create the object, you set your application name = to the top-level Express function.

const app = express();

Core Methods

    .listen() - listens for connections to a specified host and port
    .get() - used to get a route and takes a route and a callback function as arguments. The callback function takes two arguments, the request from the browser and the response from the server. Additionally, middleware can also be passed in as an argument which will be covered in the middleware section.
    .post(), .put(), .delete() - the other app methods that make up endpoints. They require having the ability to store data. .post() is used to post a new item, .put() used to edit an item already in existence, and .delete() to remove an item from the data. Like get above, all three methods will take a route.

Three steps for creating a server: import Express, create an application object, listen on a port

Creating a Server
The Request Object
Dissecting an endpoint

Endpoints are made up of a method you wish to perform on your data, and the route you would like to use for that data.

GET https://restcountries.eu/rest/v2/name/canada

To create an endpoint in express we use the following syntax:

app.method('/route', middleware, (callback) => {
  // what you want to do with the request or response
});

app.get('/students', (req, res) => {
  // perform an action with req or res. 
});

Request and Response
Request

The request object is the HTTP request to the server. Request has many properties and methods available to it for getting information about the request from the browser.

ip - a property to get the ip of the request.

console.log(req.ip);
// prints '127.0.0.1'

cookies - a property to access cookie information of a request.

console.log(req.cookies.name); 
// prints 'cookie name'

path - a property to get the path of the URL request.

https://website.com/students
console.log(req.path); 
// prints '/students'

subdomains - a property to get the subdomain of a URL request.

https://students.website.com
console.log(req.subdomains);
// prints 'students'

params() - a method to get the param values from a request URL.
Response

The Response object is returned by the server after a request. It is the response from server back to the browser. Like request, it has many properties and methods available to it.

send() - sends a response from the server to the browser.

app.get('/students', (req, res) => {
  res.send('Hello, world.');
});

status() - set's an HTTP status.

app.get('/students', (req, res) => {
  res.status(400).send('bad request');
});

cookie() - set's a cookie for the route.

app.get('/students', (req, res) => {
  res.cookie('admin', { expires: new Date(Date.now() + 1000000));
});

Setting Up a Server

Walking through this preconfigured express server we can see the following

package.json

    Express is installed through NPM along with express type definitions
    Nodemon is installed and a "start" script is created to run nodemon on the application entry file

index.js

    Express is imported into the app
    the application object is created and a port is defined
    an endpoint is created that gets the route API and sends a message back to the browser
    the app listens on the defined port and starts a server on localhost then sends a message to the console that the server has started

;


