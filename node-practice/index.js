// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ Node.js Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Q. How to setup node project ??=========================

// 1. make a project folder.
// 2. open in vs code
// 3. make entry file with index.js
// 4. install package.json with "npm init" in terminal
// 5. install node modules with "npm install" in terminal
// 6. add gitignone file in the project.
// 7. add dependencies as required and add modules and other files as required.

// What is Node.js and it's history? ================================
// => created by Ryan Dahl in 2009 + js runtime environment that runs js outside the browser

// Node.js is single threaded means ?  ==============================
// => means only one operation is excuted in one time + code is excuted synchronously

// What are the main disadvantages of Node.js? ===================================================
// => single thread + callback hell + many npm packages are poorly maintained or lack documentation + npm ecosystem is vulnerable to milicious packages + for data-heavy, CPU-bound appliction, Multi-threaded other tech may be better

// how node.js defeats single thread system ? ======================================
// => libuv thread pool used to solve this issue + libuv give node.js async and non-blocking power + when any async task comes , main thread passes it to libuv thread pool and moves on + libuv thread pool have default 4 background threads to do heavy tasks + Event loop is also provided by libuv in node.js

// Core vs thread vs process =====================
// =>CPU
//  └── Core(s)
//       └── Process (e.g., node app.js)
//           ├── Main Thread (single thread runs JS code)
//           │    ├── Call Stack (executes your JavaScript)
//           │    └── Event Loop (libuv - schedules async tasks)
//           └── Worker Threads (libuv thread pool for async I/O)

// Cluster , child_process, worker_thread module in node.js ? ==================================
// => Cluster module : used to seperate process + mainly used for Scaling http servers
// => child_process module : used to excute external commands or scripts
// => workers_thread : used to create more threads in same process

// what is non-blocking I/O in node.js ? ============================
// => I/O stands for Input/Output operations like reading file, quering database, making network requests + in blocking I/O program waits for each task to finish + non-blocking I/O means your program not wait + when one task is in progress, it keeps doing other task and when I/O is done it runs a callback or promise.

// Explain the non-blocking I/O model in Node.js. How does it impact performance? =====================
// I/O means operations like reading files, quering database, makeing network requests + blocking I/O means program waits until the operation completes before moveing to next task + Non-blocking I/O means program initiates the operation and keeps running other code immidiately + non-blocking I/O is important in node because it is single theread + if it blocked on I/O operation, node could not handle other requests.

// process.nextTick() vs setImmidiate()? ============================
// => both used for async task + process.nextTick() has priority on setImmidiate () + process.nextTick() will excute after current JS Call Stack completes [before the event loop conticues] and setImmidiate will excute on the next iteration of the event loop

// How does Node.js manage memory?===================================
// manages memory using v8 engine + node uses main 2 memory: stack (stores primitive data types, fast,small in size,managed by call stack), heap (stores object, array, larger than stack, managed by garbage collector)

// What is the role of the garbage collector? ==================================
// Autometic memory cleanup by deleting objects, variables, functions that are no longer used + helps to manage memory + garbage collector dont remove global variables because they are always reachable in program running + GC only removes memory that is unrechable + unreachable means when your code has no way to access it anymore

// What is the EventEmitter in Node.js, and how does it work? ==================================
// => provided by 'events' module + used to click events in node.js
// => eg:

// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("greet", () => {
//   console.log("Hello! An event was triggered.");
// });
// emitter.emit("greet");

// What are streams in Node.js, and how do they improve performance? ==================================
// => under "fs" module + used to stream data + data is read or write in chunks + dont load entire file
// => eg:
// const fs = require('fs');
// const readStream = fs.createReadStream('largefile.txt', { encoding: 'utf8' });

// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk.length);
// });

// readStream.on('end', () => {
//   console.log('Finished reading file.');
// });

// How many types of streams? give example code. ==================================
// => 4 types +  read, write, duplex (read and write in same time), Tranform (used to manipulate chunk before read or write)

// pipe() method in streams? ==================================
// => used to connect a read stream to write stream + pipe() automatically handles data,end, error events
// => eg:
// const fs = require('fs');
// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('output.txt');
// readStream.pipe(writeStream);

// How would you manage concurrency in node.js application ?  =========================================
// through callback, Promises, async/await etc.

// What are the advantages of using the async/await syntax over callbacks and promises? =======================================
// simplified syntex + avoid callback hell + better error handling with try-catch

// How do you handle errors in asynchronous code in Node.js? =======================================
// using callback ((err,data)=>{}) + using promises (.catch()) + async/await (try-catch block)

// is event loop in react.js and node.js different ? =========================================
// => yes + react.js doesn't have its own event loop , it works on browser's event loop +  node's event loop provided by libuv + node handles async ops with libuv

// What are Promises in Node.js, and how do they differ from callbacks?  =======================================
// => promise is an object represent eventual compilation of async operation + states: pending, fulfilled, rejected + more powerful than callback + error handling and chaining cleaner

// Q. How do you handle WebSockets in Node.js for real-time communication? ============================
// => it allows realTime, 2 way communication between client and server without repeating http requests + used for chat apps, instant notifications, live dashboards + only once http connection is stablished + "ws" library is used + instead of using it we use socket.io library for better functions + socket.io is library over websocket + websocket is a protocol

// Q. How can you manage session state in a stateless environment like Node.js? ===========================
// => restfull api are stateless means each request from client must contain all the info every time , server dont retain any info + so we use token or cookies that validate on each request

// Explain the concept of caching in Node.js. How would you implement caching for better performance? =====================
// => to store the data once and next time read it from memory + we use redis library  + also can be saved in node.js's process memory but if server restarts , data is lost + suppose we fetch user details with id 23 from database, every time it will be fetched when requred so we save details in cache on server side + we use server side cache when want to reduce database API calls, data dont change frequently, fast access to frequently used data

// What are memory leaks in Node.js, and how do you detect and fix them? ===============================
// => when app is using more and more memory without relasing memory that is no longer needed + common cause :  global variables (globals never garbage collected) , setInterval keep running , clousers keep variable references , eventListener not removed + to detect memory leaks we use built in "node -- inspect index.js"

// What is Zero-configuration deployment in Node.js, and how does it impact scalability? ============================
// => it is a deployment method in which we push code with minimal or no configrations + varcel,netlify, heroku plateforms commonly used for that + automatically detects the application type, install dependencies, set env variables etc + used to build ci/cd pipeline

// How do you ensure security in a Node.js application? ===============================
// => use https + use parameterise query to prevent sql injections + validate and sanitize input + use helmet middleware + implement jwt + bycrypt to hash password + keep senstive data in .env + keep dependencies updated + use Strict mode for common bugs

// Cross-Site-Scripting(XSS) ===========================================
// => when attacker injects malicious JS through input box + it can steal cookies, redirece users, log keystrokes + for preventing we have to sanatise input using "xss" library
// => eg:
// import xss from 'xss';
// const safeInput = xss(req.body.comment);

// Cross-Origin-Resource-sharing(CORS) =================================================
// => It is a security feature implemented by web browsers to restrict resource sharing + We have to use "cors" library
// => eg :
// import cors from "cors";
// app.use(cors()); // allow all origin
// app.use(
//   cors({
//     origin: "http://example.com",
//     method: ["GET", "POST"],
//     credentials: true, // allows cookies and headers
//   })
// );

// Cross-Site-Request-Forgery(CSRF) ===============================================
// => it is a type of attack where malicious site tricks a user browser into sending request to your backend + to protect it we use "csurf" library
// => eg:
// import csrf from "csrf"
// const csrfProtection = csrf({cookie:true});
// app.get("/getData",csrfProtection,(req,res)=>{})

// How would you handle rate limiting in a Node.js application? =============
// technique to control no of request by client in limited time + we use "express-rate-limit" library for that

// How do you manage OAuth 2.0 authentication in Node.js? =====================================
// OAuth 2.0 means node will interact with third party (google,facebook,linkdin,github) to authenticate user + we use "passport library" for that

// What are some best practices you follow when writing a Node.js application? ============
// we use modular architecture + use async/await instead of callbacks + security of app with helmet, csurf, validate user, sanitize inputs + use .env file + use middlewares

// How to make import export work on node.js ? which is better import export or require() ? =========================
// we add {"type":"module"} in package.json + import / export comes from ECMAScript 2015

// What kind of API function / modules is supported by Node.js?  =======================
// => fs module : allows you to read, write, update, delete and manage files and directories directly.
// => http : used to create http severs in node
// => buffer : used to handle binary data directly in memory
// => stream : used to read data from source and wirte to desitnation in chuncks
// => events : used to create,emit,listen events in backend + EventEmmiter comes in it
// => child process : used to excute external programs + run shell commands or scripts
// => worker thread : used to run js in parallel threads
// => path : used to work with file and directory path  + join , resolve paths
// => url : used to work with urls
// => tls : used to implement TLS and SSL in client-server communications + encrypt communication + authentication of server
// => crypto : used to perform cryptographic operations + hashing,encryption,decryption,tokengeneration etc

// What is REPL in Node.js? ========================================================
// => REPL means READ, EVAL, PRINT, LOOP + used to run node.js on CMD

// What is the difference between Node.js and AJAX? ========================================================
// => Node : runs on server side + runs js on server + used to build api,server,backend app
// => AJAX : runs on client-side + send and recieve data without refreshing browser + used to fetch data from server and update UI dynamatically

// What is event-driven programming in Node.js? ========================================================
// => where flow of program works on events + http, fs, net, streams are used for emit events  + it is good for real-time, I/O heavy applications

// What is the difference between spawn() and fork() methods?========================================================
// => both are used in Child_process + spawn() is used to run any script like cmd, python scripts while fork() is used to run only node.js scripts

// What is body-parser in Node.js? ========================================================
// => this middleware is used to parse the body of incoming http requests + when client send request, usually node dont parse it autoamtically in JSON

// How to read command line arguments in Node.js? ========================================================
// We can read cmd arguments using built-in "process.argv" array

// Difference between PUT and PATCH ?========================================================
// PUT updates the full record with new data, PATCH updates only specific fields

// different functions to get,put,post,delete data in mongodb =================================
// => To get all users : const allUsers = await users.find();
// => To get Single user : const oneUser = await users.findById("123abcd...");
// => to create singe User : const newUser = new User({name:"Alice",email:"exmple@gmail.com"}); await newUser.save();
// => to put or patch : await User.findByIdAndUpdate("64abcd1234...", { name: "Updated Name" });
// => to Delete user : await User.findByIdAndDelete("64abcd1234...");

// What is error first callback function? ========================================================
// where first argument of a callback is always the error + const callback = (err,result) => {if(err){}else{}} + used for async operations + helps avoid crashing the app beacuse it catches error early

// When did you used and where did you used redis cache ========================================================
// Redis is a small database in server's RAM +  for storing and fetching small data in backend we dont use Main database every time, so we use redis as temperory database on server's RAM to store small data and if data is not find in redis then backend goes to main database  + we use if for caching

// What's swagger and how to add authentication in swagger ========================================================
// => tool for testing , building, desining REST APis + it provides web based UI

// What is cyclic dependency in. Node js ========================================================
// => When 2 or more modules depends on each other directly or indirectly + it can cause type error or undefined values + We have 2 modules A,B. WE import B in A and again import A in B module then it will be create error

// What is a first class function in Javascript? ========================================================
// => means functions can be treated like any other value + we can assign function to variable, pass it as argument , return it from another function, store function in arrays or object

// cache vs cookies ?? ========================================================
// => cookies : small key-value pairs stored in browser + used to manage login + automatically send to server with every request
// => cache : stores data in browser to avoid re-downloading + reduces server load + it stores website images, scripts and data to help load webpage faster when you visit again

// Q.What are microtasks queue and macrotasks queue in Node.js?========================================================
// => Microtasks : high priority + excuted immidiately after corrent operation and before macrotasks + process.nextTick(), Promises + goes in Check Queue + Process.nextTick will excute first from promises
// => Macrotasks : regular async tasks + excuted in next phase of event loop + setTimeout, SetIntervel, setImmediate etc + goes in Timer Queue

// How can you monitor and debug event loop lag?===============================================
// => event loop lag means when event loop is blocked + often caused by sync or blocking operations + we use perf_hooks built in library to moniter

// How does backpressure work in streams?===============================================
// => Backpressure happens when the data producer (Readable stream) is sending data faster than the consumer (Writable stream) can process.To prevent overload, Node.js provides built-in mechanisms to pause or slow down the producer until the consumer catches up.

// Explain how Node handles connection pooling.===============================================
// => A technique to manage or reuse open database connections + Connection pooling is a way to efficiently reuse existing connections instead of creating new ones repeatedly

// How to handle socket hang-up errors?=================
// => socket hangUp means client or server closed the connection before request is completed + We have to use try-catch block

// What’s the difference between "Connection : keep-alive" and "Connection : upgrade" headers?===================
// => keep-alive : means reuse the same TCP connection for multiple http request/response + good for fast page loads
// => upgrade : means once the connection is stabilshed, it will upgrade to webSocket Protocol + good for read-time apps

// Difference between polling and WebSockets.=============================
// => Polling : means client repetedly asks the server for new data at fixed intervals + only client send request continously
// => WebSockets : means once connected then send request in both directions

// How do you cache modules in Node.js? ==================================
// modules are cached automatically with require() + means node loads a moule only once with it + if me import same module multiple times, cached varsion will be imported + to check we can use console.log(require.cache) + import-export also caches module

// Difference between fs.readFile and fs.promises.readFile. ================================
// => fs.readFile uses callback + fs.promises.readFile uses Promises

// How to watch for file changes? ==============================
// => we use fs.watch()
// => eg:
// const fs = require('fs');

// fs.watch('example.txt', (eventType, filename) => {
//   console.log(`File ${filename} changed! Event: ${eventType}`);
// });

// What is the purpose of fs.fsync()? =================================
// => When you write a file with fs.writeFile(), the data may be temporarily catched in memory by os + This means a crash could cause data loss before it written in disk + fs.fsync() reduces it by flusing the data of file to the disk

// How to retry a failed async operation? ===========================
// => we can use "async-retry" library or we have  to use function for recall

// What are async generators? ===========================
// => special kind of functions that allows you to  use await inside the generator + combination of async functions and generator functions
// eg:
// async function* myAsyncGenerator() {
//   yield await Promise.resolve(1);
//   yield await Promise.resolve(2);
//   yield await Promise.resolve(3);
// }

// How do you debug memory leaks? =====================
// => memory leaks happens when app keeps holding onto memory that is no longer needs + cause of memory leaks : global variables, event listener not removed, closures capturing large data, timers, unresolved promises

// Difference between operational and programmer errors. ========================================
// => Operational Errors : Failures that are expected to happen during normal operations as network failure and file not found
// => Programmer Errors : Bugs and mistakes in logic code

// What is unhandledRejection and how do you handle it? ========================================
// => it is a event that occurs when a Promise is rejected and not catch() or try-catch handles it + We have to add listener for it to prevent
// => eg:
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Unhandled Rejection at:', promise);
//   console.error('Reason:', reason);

//   // Optionally exit
//   process.exit(1);
// });

// Difference between process.exit() and uncaughtException. ===================================
// => process.exit() : it immidiately ends the node process + dont wait for async opration to finish
// => uncoughtException : this listens for errors that were not caught anywhere in your code

// How to handle graceful shutdown in Node? ====================================.
// => graceful shutdown means cleaning up resources properly before application exit + close http servers, end database connections , cancel background tasks, prevent data leaks

// How to fork processes in Node? ===============================================
// => fork is in "child_process" module + it creates seperate process to run concurrently and communicate with parent process + in "child_process" fork is used for child node process, spawn() is used to run shell commands and external scripts, exec() is used to run small shell commands.

// What is a zombie process? =============================
// => this is a process that has completed execution, but still remains in process table because it's parent hasn't yet read it's exit status + zombie processes can appear if you fork child processes and don't handle their termination properly + to prevent it always listen to exit event
// => eg:

// child.on('exit', (code) => {
//   console.log(`Child exited with code ${code}`);
// });

// How do you measure Node.js performance? =======================================
// => to measure node performance we moniter CPU usage, memory usage, response time, event loop delay etc + we use "process" object to measure it
// => eg:
// console.log('Memory:', process.memoryUsage());
// console.log('CPU:', process.cpuUsage());

// What is nvm and why use it? ======================================
// => NVM is Node Version Manager + CMD command to intall, manage, switch between multiple version of node.js

// How to use PM2 for process management? ========================================
// PM2 is Production Process Manager for node + it keeps apps alive even after crashes or restarts + npm install -g pm2 + pm2 start index.js

// How to handle rate limiting in Express? ====================================
// rate limiting is important to protext our express app from abuse [like DDos attacks, brute-froce login, api overuse] + it limits how many request can a client make in certain period of time + we use "express-rate-limit" library

// Difference between global and route-specific middleware. ==============================
// => Global MiddleWare : it applies of all imcomming request
// => Specific middleware : it applies on specific routes

// Q. How to handle file uploads securely so that malicious files cannot be uploaded ===========================
// => limit file size + restrict file types + rename uploaded files + we use "multer" library

// How to handle JSON streaming? =====================================
// JSON streaming means instead of sending or recieving full JSON you send it in chunks + used in large database exports, streaming apis, real-time dashboards

// What is schema validation and how to implement it? ============================================
// => we use "joi" library
// => eg:
// const Joi = require("joi");

// const userSchema = Joi.object({
//   name: Joi.string().required(),
//   age: Joi.number().integer().min(0),
//   email: Joi.string().email().required(),
// });

// app.post("/register", (req, res) => {
//   const { error, value } = userSchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({ error: error.details[0].message });
//   }
//   res.send("User is valid!");
// });

// What is the purpose of NODE_ENV? ===================================
// => it is a variable in .env + it tells if app is in development, test, production + NODE_ENV=development + it changes app behaviour based on environment

//////////////////////////////////////////////////// Practice /////////////////////////////////////////

// write a code for schema and model
// write a code for middleware implimentation on Procted routes and global routes
// write a code for connecting a database
// write a code for get,put,patch, post, delete apis with database functions
// write a Promise
// write a code for Promise.all()
// write a code for Promise.race()
// write a code for Promise.getSettled();
// write a code for jwt auth
// make authorization and authentication apis.
// write a code for refresh token and accesstoken
// write a code to click a event using EventEmmiter
// write a code to validate the schema using Joi library


// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ Express.js Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Q. What is Express.js, and why is it popular for web development? ===========================================
// => Node's web framework + it simplifies the process of creating server side logic and apis

// Q. what is "app.use(express.urlencoded({extended:false}))" middleware do ? ================================
// => it is built-in middleware + when form is submits from client , it recieves in URL-encoded format like "username=john&password=12345" + express.urlencoded converts it in js Object like "{username:"John",password:"12345"}"

// what is "app.use(express.json());" middleware do ? ===================================
// it is built-in middleware + helps server to understand JSON data send in body + whend client send data like "{"name":"john", "email":"John@example.com"}" , it parses that JSON as "req.body={name:"john",email:"john@example.com"}"

// What are the differences between app.use() and app.get() in Express.js? ======================================
// => app.use() : used to define middleware (logic that runs before routes)
// => app.get() : used to define GET route handler

// How do you handle query parameters in Express.js? =================================
// => query parameters are part of url appear after "?" like "http://localhost:3000/search?name=John&age=25" + we can get these parameter in "req.query" variable

// How do you retrieve route parameters in Express.js? ========================================
// Route paramters are dynamic part of url defined useing ":" like "http://localhost:3000/users/42" + we can get these in "req.params" variable

// How do you serve static files in an Express.js application? ===========================
// => static files means that dont change + these can be assets like images, css, html, font etc + we can use use this with "app.use(express.static("public"))" middleware + make sure all static files should be in this "public" folder and dont nested files  + make sure public folder will be parallel with node_modules folder

// What is the difference between res.send() and res.json()? ====================================
// => res.send() : send any type of content like string, object,html
// => res.json() : used to send only JSON + automatically sets "content-type : application/json"

// absolute vs relative path ?? ===========================
// => paths are used to loacte files or dirctories + absolute path means full location from the root + "__dirname" gives absolute path to current directory + relative path refers to location relative to current file

// What is the purpose of the body-parser middleware, and how do you use it? =================
// => body-parser is middleware used to extract data from body + especially in post , put, patch requests + it is older way to get that + now we get it with "express.json()" and "express.urlencoded()" mehtods

// How do you set up a 404 error handler in Express.js? =======================
// => means what we should do if no routes found + we use a middleware in last of the code + app.use((req,res,next)=>{res.send("404. no routes found!!")})

// How do you implement URL encoding and decoding in Express.js? ===================
// => URL encodeing and decoding are important for safely handling data in URLs + for URL encodieng we use "encodeURIComponent()" + for decoding we use "decodeURIComponent()"
// => eg:
// const name = "sudhanshu";
// const encodeName = encodeURIComponent(name);
// const decodeName = decodeURIComponent(encodeName);

// Explain how to use third-party middleware in an Express.js app.=======================
// => as we use "cors" in node + cors is third party middleware

// How do you handle file uploads in Express.js using multer? ==================================
// "multer" is third party middlware + used to upload files +

// What is the purpose of res.redirect(), and how is it used? =============================
// => res.redirect() is used to redirect client to different URL or route + used for : redirect after form submission, redirect unauthorized users to login page , redirect from old URL to new + app.get("/",(req,res)=>{res.redirect("/home") || res.redirect("https://www.google.com")})

// How do you set and retrieve cookies in Express.js? =========================
// => first we have to use "cookie-parser" library +
// => eg:
// import express from "express";
// import cookieParser from "cookie-parser";
// const app = express();
// app.use(cookieParser()) // to enable cookie parsing so that we CRUD cookies in browser
// app.get("/putCookies",(req,res)=>{res.cookie("username","jonDoe",{maxAge:3600000,httpOnly:true,sameSite:true})}) // to set cookie for 1 hour
// app.get("/getCookies",(req,res)=>{const userName = req.cookies.username}) // to get cookies stored in browser
// app.get("/DeleteCookies",(req,res)=>{res.cleanCookie("username")}) // to delete cookie in browser

// How do you create modular routes using express.Router()? ==============================
// => modular routing means spliting routes into seprate files to keep code clean and organized + as done in management console project in MRM + we create all routes in different files and import them in main index.js

// How do you handle sessions in Express.js? ==========================================
// => to handle sessions we use "express-session" library + it lets you store user data like login info between request + session is like small memory box that stores data for one user on the server + suppose when user log in , you save his name in session like req.session.username = "john". now you can use it any page in application + session are safer then cookies because data is stored on server +
// => eg:
// import session from "express-session"
// const app = express();
// // use session middleware first
// app.use(session({
//   secret:"mySecreatKey",
//   resave:false,
//   saveUninitialized:true
// }))

// app.get("/login",(req,res)=>{req.session.username = "John"}) // how to save value in session
// app.get("/getUser",(req,res)=>{console.log(req.session.username)}) // how to use session value
// app.get("/deleteUser",(req,res)=>{req.session.destroy(()=>{res.send("session deleted")})}) // how to clean session

// How can you log requests in an Express.js application? ====================================
// => we use "morgan" library + it helps to see which route is hit, what method is used, how fast it was + it is used for debugging and tracking + it gives the output in console.log
// => eg:
// import morgan from "morgan";
// app.use(morgan("dev"))

// How do you handle timeouts in an Express.js application? ===========================================
// => means stop the request if it takes too long to respond + we use "connect-timeout" library
// => eg:
// import timeout from "connect-timeout";
// app.use(timeout("5s")) // means every request have 5 seconds to excute
// app.get("/",(req,res)=>{if(req.timeout){res.send("taking too much time")}})

// How do you set custom headers in an Express.js response? ==============================================
// => used to give custom instructions to client + we use use.set() to set custom headers +
// => eg:
// app.get("/",(req,res)=>{res.set("x-Custom-Header","Hello Client")})

// What is the purpose of res.locals, and how is it used? ==============================
// => it is a object in express +  used to store and share data during a single request + data is cleaned after the request + it helps share data between middlware and api function without using global variables + means it's value will store for only one api hit
// => eg:
// app.use((req, res, next) => {
//   res.locals.username = 'John Doe';  // Store data in res.locals
//   next();  // Move to the next middleware or route
// });

// app.get('/', (req, res) => {
//   res.send(`Hello, ${res.locals.username}`); // Access data stored earlier
// });

// How do you debug an Express.js application effectively? ===================================================
// => use console.log() + use app.use((err,req,res,next)) + use "morgan" logging libraries

// What is the difference between app.use() and app.all() in Express.js? ===================================
// => app.use() is used for middlewares + app.all() is used for all http requsets, used when you want to handle all methods on one specific route
// => eg:
// app.all("/health",(req,res)=>{res.send("working")}) // it will work for GET, POST, DELETE, PUT etc

// How do you structure a large-scale Express.js application for better maintainability? =========================
// =>
// my-app/
// ├── app.js                 # Entry point
// ├── package.json
// ├── config/                # Configuration files (DB, environment)
// │   └── config.js
// ├── controllers/           # Route handler logic
// │   └── user.controller.js
// ├── routes/                # Route definitions
// │   └── user.routes.js
// ├── models/                # Database models (e.g., Mongoose, Sequelize)
// │   └── user.model.js
// ├── middlewares/           # Custom middleware
// │   └── auth.middleware.js
// ├── services/              # Business logic
// │   └── user.service.js
// ├── utils/                 # Utility/helper functions
// │   └── logger.js
// ├── validations/           # Joi or express-validator schemas
// │   └── user.validation.js
// └── .env                   # Environment variables

// How do you use the compression middleware to optimize responses? ===================================================
// => when server response the data can be compressed + browser automatically unzips it + we use "compression" library + express will compress the response automatically + on browser network tab headers will be "content-encoding:gzip"
// eg:
// import compression from "compression"

// app.use(compression());

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ Mongo DB Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// What is MongoDB and how does it differ from traditional RDBMS? ===================================
// => NoSQL database that stores data in JSON like format called BSON [Binary JSON]

// What is a document in MongoDB? =================================
// => Mongo DB stores each piece of data as document - a single object + every document has a unique _id field + it holds all the related information about one thing + document = one record

// What are collections in MongoDB? ===========================
// => it is like a table + it is a group of documents stored togather + collection is like folders and document are like files + collection dont require a fixed schema so each document can be different + one database have many collections

// What are the advantages of using MongoDB? =====================
// => flexible Schema means every doucment can have different format + mongo is fast for reading and writing large data + Mongo DB supports horizontal scaling + data stored in BSON which is easy to read and write + we dont have to use SQL +

// Explain BSON in MongoDB. ==================================
// => it is a data format mongo uses to store data + it is a faster and smarter verison on JSON + it looks like json but it  stored in binary form for better performance + JSON is text based good for human not for computers

// What is the maximum size of a document in MongoDB? =====================================
// max size of a single document is : 16 MB + there is a size limit to keep document fast to read

// How do you insert a document in MongoDB? =================================
// db.collectionName.insertOne({ key1: value1, key2: value2 }); + if collection doesnot exist then mongoDB creates it automatically + an "_id" field will be added automatically if you dont provide it + if want to add multiple documents then : db.collectionName.insertMany([ {doc1}, {doc2}, ... ]);

// How do you update nested fields in a document?=============================
// we use $set for updating
// => eg:
// db.users.updateOne(
//   { _id: 1 },
//   { $set: { "address.city": "Mumbai" } }
// )

// What does the $set operator do? ========================================
// => it is used to add or update field in document + if feild exist then update otherwise creates

// How do you delete documents in MongoDB? ======================================
// => for one document : db.users.deleteOne({ name: "Alice" }) + for many document : db.users.deleteMany({ city: "Delhi" }) it delete all users where city is delhi

// What is projection in MongoDB? ============================
// => means only get those keys from document that we require + if we use "db.users.find({ name: "Alice" })" then it will give all the doucment that name is alice + so we can use "db.users.find({name:"Alice"},{name:1,email:1})" . this will give only name and email from the document and  _id + if we use "db.users.find({name:"Alice"},{age:0,address:0})" then it will not give age and address and other fields will be return

// How do you use regular expressions in MongoDB queries?
// => We can also search the doucment using RegEx + db.users.find({ name: /^A/ })

// How can you sort, skip, and limit results? ===================================
// => these commands runs on all the doucments in collection + here users,products,orders are collections
// => sorting : db.users.find().sort({ age: 1 })   // Sort by age (youngest to oldest) + if we use "{age:-1}" then it will be oldest to newest
// => limiting : db.products.find().limit(10) // get top 10 products
// => skiping : db.orders.find().skip(20)   // Skip first 20 orders

// What is an index in MongoDB? ======================================
// => index is like book's index + mongo directly jumps to matching data using index + without index mongo scans every document + if you oftern search by "name" then create a index by "db.users.createIndex({name:1})". now query will be faster

// What is a compound index? ==========================
// => compound index means making index for more then one + db.users.createIndex({ age: 1, city: 1 }) if you use age and city often for search

// What is the purpose of explain() in MongoDB? ==============================
// => explain () shows whether your query uses an index or not, how many documents it scans + db.users.find({ email: "a@example.com" }).explain("executionStats")

// What is a covered query? =================================
// => it is a query where mongo gives result using only index, without scanning the actual document + it is very fast + first we have to createIndex "db.users.createIndex({ name: 1, age: 1 })" then "db.users.find({ name: "Alice" }, { name: 1, age: 1, _id: 0 })" will be covered query becz name is in filter , name and age are in projection

// When should you normalize data in MongoDB? ============================
// => normalize means breaking data in seprate collections and using references(id) to connect them + when a user appears in orders, posts or comments, then we dont copy user everywhere

// What is aggregation in MongoDB?
// => Aggregation in MongoDB means processing and combining data from your documents to get summarized results — like totals, averages, counts, or grouped data
