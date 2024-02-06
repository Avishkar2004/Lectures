Buffer :-

Buffer objects are used to represent a fixed-length sequence of bytes. Many Node.js APIs support Buffers.

The Buffer class is a subclass of JavaScript's Uint8Array class and extends it with methods that cover additional use cases. Node.js APIs accept plain Uint8Arrays wherever Buffers are supported as well.

const { Buffer } = require('node:buffer');

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10,
// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10, 1);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using fill(), write(), or other functions that fill the Buffer's
// contents.
const buf3 = Buffer.allocUnsafe(10);

// Creates a Buffer containing the bytes [1, 2, 3].
const buf4 = Buffer.from([1, 2, 3]);

// Creates a Buffer containing the bytes [1, 1, 1, 1] – the entries
// are all truncated using `(value & 255)` to fit into the range 0–255.
const buf5 = Buffer.from([257, 257.5, -255, '1']);

// Creates a Buffer containing the UTF-8-encoded bytes for the string 'tést':
// [0x74, 0xc3, 0xa9, 0x73, 0x74] (in hexadecimal notation)
// [116, 195, 169, 115, 116] (in decimal notation)
const buf6 = Buffer.from('tést');

// Creates a Buffer containing the Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf7 = Buffer.from('tést', 'latin1');

URL :-

The node:url module provides utilities for URL resolution and parsing. It can be accessed using:

const url = require('node:url');

URL strings and URL objects

const myURL =
new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

Parsing the URL string using the Legacy API:

const url = require('node:url');
const myURL =
url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

Managing Modules with NPM :-

The Node.js Package Manager (npm) is the default and most popular package manager in the Node.js ecosystem, and is primarily used to install and manage external modules in a Node.js project.

npm install axios --save

// OUTPUT
...

- axios@0.27.2
  added 5 packages from 8 contributors and audited 5 packages in 0.764s
  found 0 vulnerabilities

{
"name": "AlmaBetter",
"version": "1.0.0",
"description": "Finds the country of origin of the incoming request",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [
"ip",
"geo",
"country"
],
"author": "AlmaBetter",
"license": "ISC",
"dependencies": {
"axios": "^0.27.2"
}
}

Development Dependencies :-

Packages that are used for the development of a project but not for building or running it in production are called development dependencies. They are not necessary for your module or application to work in production, but may be helpful while writing the code.

npm i eslint@8.0.0 --save-dev

{
"name": "AlmaBetter",
"version": "1.0.0",
"description": "Finds the country of origin of the incoming request",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [
"ip",
"geo",
"country"
],
"author": "AlmaBetter",
"license": "ISC",
"dependencies": {
"axios": "^0.27.2"
},
"devDependencies": {
"eslint": "^8.0.0"
}
}

Automatically Generated Files: node_modules and package-lock.json

When you first install a package to a Node.js project, npm automatically creates the node_modules folder to store the modules needed for your project and the package-lock.json file that you examined earlier.

Installing from package.json

With your package.json and package-lock.json files, you can quickly set up the same project dependencies before you start development on a new project. To demonstrate this, move up a level in your directory tree and create a new folder named in the same directory level as the previous sample folder:

cd ..
mkdir cloned_sampleproject
cd cloned_sampleproject

Now copy the package.json and package-lock.json files from locator to cloned_locator. To install the required modules for this project, type:

npm i

Global Installations
To install a package globally, you append the -g flag to the command :

npm i nodemon -g

Updating Modules
npm outdated
npm up

Uninstalling Modules
npm un axios

Auditing Modules

npm i request@2.60.0

// When you install this outdated version of request, you’ll notice output similar to the following:
npm WARN deprecated cryptiles@2.0.5: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated sntp@1.0.9: This module moved to @hapi/sntp. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
npm WARN deprecated boom@2.10.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
npm WARN deprecated har-validator@1.8.0: this library is no longer supported
npm WARN deprecated hoek@2.16.3: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated request@2.60.0: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated hawk@3.1.3: This module moved to @hapi/hawk. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.

added 56 packages, and audited 139 packages in 4s

13 packages are looking for funding
run `npm fund` for details

9 vulnerabilities (5 moderate, 2 high, 2 critical)

To address all issues, run:
npm audit fix --force

Run `npm audit` for details.

Nodemon

In Node.js, you need to restart the process to make changes take effect. This adds an extra step to your workflow. You can eliminate this extra step by using [nodemon](https://nodemon.io/) to restart the process automatically.

nodemon is a command-line interface (CLI) utility that wraps your Node app, watches the file system, and automatically restarts the process.

Global Installation

npm install nodemon --global

Local Installation

You can also install nodemon locally. When performing a local installation, you can install nodemon as a dev dependency with --save-dev (or --dev).

Install nodemon locally with npm:

npm install nodemon --save-dev

Debugging Nodejs Applications

In Node.js development, tracing a coding error back to its source can save a lot of time over the course of a project. But as a program grows in complexity, it becomes harder and harder to do this efficiently.

Using Watchers with the Node.js Debugger

mkdir debugging
cd debugging
npm init -y

Interview Questions :-

How can you manage the packages in your Node.js project?

- We can manage the packages in our Node.js project by using several package installers and their configuration file accordingly. Most of them use npm or yarn

What are the modules in Node.js?

- In Node.js applications, modules are like JavaScript libraries and include a set of functions. To include a module in a Node.js application, we must use the require() function with the parentheses containing the module's name.

What are buffers in Node.js?

- In general, a buffer is a temporary memory mainly used by the stream to hold on to some data until it is consumed. Buffers are used to represent a fixed-size chunk of memory allocated outside of the V8 JavaScript engine.

What is the package.json file?

- The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module.
