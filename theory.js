



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

// Event loop in node.js. ============================
// => first request goes to event queue container + then event loop take one request and checks if request is sync(blocking) or async(non-blocking) + if async then goes to event queue and after solving event loop push it to evetn queue and the give respone to user + if blocking task then it goes to thread pool and if any thread is free then assign the task to that thread and thread gives the result , if not then it will wait for thread to be empty

// Microtask Queue vs Macrotask Queue ===============================
// => when request comes, after catogarise in sync task or async task , event loop sends all async tasks to microtask Queue and macrotask Queue to excute + microtask has priority over macroTask + MicroTask : async functions, promise, process.nextTick etc + MacroTask : setIntervel, setTimeout etc.

// process.nextTick() vs setImmidiate()? ============================
// => both used for async task + process.nextTick() has priority on setImmidiate () + process.nextTick() will excute after current JS Call Stack completes [before the event loop conticues] and setImmidiate will excute on the next iteration of the event loop

// setTimeout() vs setIntervel() ============================
// => setTimeout() used when a task should excute a specific delay, it will exucte once after delay + setIntervel() used when a task should retedely after a specific delay, it will excute again and again after delay

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
// => under "fs" module + used to stream data + data is read or write in chunks + dont load entire file , besides use chucks
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
// through event loop , callback, Promises, async/await etc.

// What are the advantages of using the async/await syntax over callbacks and promises? =======================================
// simplified syntex + avoid callback hell + better error handling with try-catch

// How do you handle errors in asynchronous code in Node.js? =======================================
// using callback ((err,data)=>{}) + using promises (.catch()) + async/await (try-catch block)

// is event loop in react.js and node.js different ? =========================================
// => yes + react.js doesn't have its own event loop , it works on browser's event loop + react's async ops handles with web api +  node's event loop provided by libuv + node handles async ops with libuv

// What are Promises in Node.js, and how do they differ from callbacks?  =======================================
// => promise is an object represent eventual compilation of async operation + states: pending, fulfilled, rejected + more powerful than callback + error handling and chaining cleaner
// => eg:
//  const myPromise = new Promise ((resolve,reject)=>{
//     const success = true;
//     if(success) resolve("it worked")
//         else reject("Something went wrong")
//  })

//  myPromise.then((result) => console.log("result is :",result)).catch((error)=>console.log("This is error:",err)).finally(()=>console.log("finally it wil exucte is success or reject"));

// How do you handle WebSockets in Node.js for real-time communication? ============================
// => it allows realTime, 2 way communication between client and server without repeating http requests + used for chat apps, instant notifications, live dashboards + only once http connection is stablished + "ws" library is used + instead of using it we use socket.io library for better functions + socket.io is library over websocket + websocket is a protocol

// How can you manage session state in a stateless environment like Node.js? ===========================
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
// => this middleware is used to parse the body of incoming http requests + when client send request, usually node don's parse it autoamtically in JSON

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
// => eg:
// app.use(express.json()); // Applies to all routes

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
// => Specific middleware : it applies on specific routes
// => eg:
// function checkAdmin(req, res, next) {
//   if (req.user && req.user.role === 'admin') {
//     return next();
//   }
//   res.status(403).send('Forbidden');
// }
// app.get('/admin', checkAdmin, (req, res) => {
//   res.send('Welcome, Admin!');
// });

// How to handle file uploads securely so that malicious files cannot be uploaded ===========================
// => limit file size + restrict file types + rename uploaded files + we use "multer" library
// => eg:
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

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
// write a Promise and Promise.all() code.
// write a code for jwt auth
// make authorization and authentication apis.
// write a code for refresh token and accesstoken


// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ Express.js Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// What is Express.js, and why is it popular for web development? ===========================================
// => Node.js web framework + it simplifies the process of creating server side logic and apis

// How do you create a basic Express.js server? =====================================
// => eg:
// import express from "express";
// const app = express();
// app.listen(3000,()=>{console.log("Server is running on port:3000")})

// Explain the role of middleware in Express.js. =============================
// => middleware used for request and authentication handling + middleware works on both request and response + if we want to check or update the request / response then we need middleware + Two type of middleware : global and route-specific
// => Global Middelware: runs on all routes + declared with "app.use()"
// => Route Specific Middleware : runs on specific routes + passed as 2nd argument in routes
// => Route-level middleware : applied on all route within a router
// => eg:
// import express from "express";
// const app = express();
// const adminRouter = express.Router();

// // Global middelware

// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   req.body.name = "Sudhanshu" // here req is updated before going to server;
//   next(); // Go to next middleware
// });

// app.use((req, res, next) => {
//   console.log(req.body.name);
//   console.log('Middleware 2');
//   next();
// });

// // Route-Specific middleware

// const RouteMiddleware = (req,res,next) =>{
//   if(req.body.name=="Sudhanshu"){
//     next()
//   }else{
//     res.json({message:"user is not sudhanshu"})
//   }
// }
// app.get("/getUsers",RouteMiddleware,()=>{})

// // Route-Level middleware

// // Route-level middleware for all /admin routes
// adminRouter.use((req, res, next) => {
//   if (req.headers.authorization === 'admin-token') {
//     next();
//   } else {
//     res.status(403).send('Admin Access Denied');
//   }
// });

// // These inherit the above middleware
// adminRouter.get('/dashboard', (req, res) => {
//   res.send('Admin Dashboard');
// });

// adminRouter.get('/settings', (req, res) => {
//   res.send('Admin Settings');
// });

// app.use('/admin', adminRouter);

// what is "app.use(express.urlencoded({extended:false}))" middleware do ? ================================
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
// => modular routing means spliting routes into seprate files to keep code clean and organized + as done in management console project it MRM + we create all routes in different files and import them in main index.js

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

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ DSA Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// 1. Array
// 2. Linked list
// 3. Stack
// 4. Queue
// 5. Tree
// 6. Heap
// 7. graph
// 8. Hashing

///////////////////////////////////////////////////////////////  Theory  ///////////////////////////////////////////////////

// * 2 type of data staructure :-
// 1.linear data structure = array, stack, queue
// 2.Non-linear data staructures= tree, graph

// * Array Traversing = to check each element in array
// * Array Accessing = to get a specific element from array
// * Algorithm = steps to do any task in program.
// * Algorithm complexity = 1.time complexity, 2. space complexity
// 1. Time complexity = it is calculated by counting the number of steps to finish the execution. if a program have 50 lines of code then time complexity will be 50 but if we have loop who excutes 100 times in 50 lines then time complexity will be 150.
// 2.Space complexity = space required to excute the program + space complexity = Auxilary space / supportive space + input size / variable space. if a program needs 1 MB to excute program, then Space complexity will be 1 MB.
// * To do a task there is multiple algorithm / multiple ways.
// * Big-O-Notation = it is a unit to denote complexity. eg- weight's Big-O-Notation is "kg"
// * which algorithm we have to choose, it depends on data size. choosing wrong algorithm will increase complexity. That is why we have multiple algirithm to do single task.
// * Asymptotic analysis = tells which algorithm is best for doing that single task. In Asymptotic analysis we use different notations to find the best algorithm . time and space complexity is also calculated in asymptotic analysis. also in time and space complexity, time complexity is important to measure because using large running loops will increase time complexity. eg- if we have array of 100 elements and we have to search element then linear search algorithm is best but if we have 1000000 elements the binary search will be best for searching.
// * Asymptotic Notation = we have 3 notations. big-O-notation, omega notation, theta notation.
// * Time complexity directly depends on input. eg- if we use nested loops , and we have 6 elements array then loop will run 6*6=36 times. so time complexity depends upon inputs.
// * input is chuncks of data where algorithm is going to implement. eg- [1,2,3,4,5] in this it's elements are chunks and each element is called input.
// f(N) = 5N*5N + 6N + 12. This formula is used to find time complexity where nested loops are used. here N = no of elements in Array.
// f(N) = 6N + 12. This formula is used to find time complexity with no nested loops. here N = no of elements in Array.

///////////////////////////////////////////////////////////  Sorting  //////////////////////////////////////////////////////////////////////
// * loop will always excute (arraylength * arraylength) times maximum to sort an array. if we have some elements that are sorted already, then no of excution will decrease.

///////////////////////////////////////////////////////////////// Recurtion  ///////////////////////////////////////////////////////////////
// * recurtion = a function that calls itself + it have 2 types-
// 1.direct/basice recurtion = it is default recurion
// 2. indirect recurtion = 2 functions that calls themselfs and stops on a perticular conditions.

//////////////////////////////////////////////////////////////// Stack ///////////////////////////////////////////////////////////////

// * In stack data structure, elements are added / removed / updated from a single end + in array we do same where we want like adding element in first or last or in middle of array but in stack we can do it with single end.
// * It works on Last in first out (LIFO) . means last item added to stack is the first one to be removed.
// * we decalre maximum value of stack. eg- we have to declare stack will be of 10 element so only 10 elements will be enter.
//* key operations in stack = push, pop , peek(view the top elememt) , isEmpty(checks if stack is empty)
//* Stack is used when you need to maintain history of operations. Stack is used in browser history naivgation, undo functionallity etc
//* Stack is not required if you want to access random elements

/////////////////////////////////////////////  Queue  ////////////////////////////////////////////////////////////////

// * it is a lienear data structure + queue have 2 points front and rear.
// * elements add from front point and remove from rear point + it works on FIFO concept.
// * we can perform different operation on Queue: En-queue(add element in front), de-queue(remove element from end), isEmpty(check if queue is empty), isFull(check if queue is full), peek(get first element without removing it)
// * "front" means oldest element in queue and "rear" means latest element in queue.
// * Circular Queue :- the rear connects back to front to optimize space by using empty slots + in simple queue when front is removed , front space is cleared and it cannot be filled becz in queue we insert element from rear. so for this we use circular queue to reuse that space + in circular queue suppose if we have circular queue [1,2,3,4,5]. here front is 1 and rear is 5. if we want to remove a element, only 1 can be removed becz of FIFO. so 1 will be removed and space will be null like [null,2,3,4,5]. Now we want to add element 111 so it will be place on null like [111,2,3,4,5]. Now fornt will be 2 and rear will be 111. Now, if we want to remove one more element then only 2 can be removed and it will be like [111,null,3,4,5]. Now, if we want to add 222 then it will become [111,222,3,4,5]. Now front will be 3 and rear will be 222.

//[1,2,3,4,5]
//[null,2,3,4,5]
//[111,2,3,4,5]
//[111,null,3,4,5]
//[111,222,3,4,5]

///////////////////////////////////////////////////  Linear search  //////////////////////////////////////////////////

// * Search element by one by one

/////////////////////////////////////////////////  Binary Search /////////////////////////////////////////////////////

// * if we want to use binary seach then we have to first sort the array.
// * Binary search is of 2 types :- 1. Itrative, 2. Recursive

// 1. Itrative Approch :-
// eg:- we have a array [1,2,3,4,5,6,7,8] and we want to find 6. Then it breaks the array in [1,2,3] and [5,6,7,8] and make 4 as middle point. + then compare middle point with 6. if 6 is greater than 4 then it will search in 2nd array first. if element not found in 2nd array then it will search in first array and if the middle point and searching point is same the it will return the result and stop searching further + Now, it will again break [5,6,7,8] into [5] and [7,8] and 6 as a middle point and give the result that 6 is answer.

// let data = [5, 9, 13, 17];
// let find = 13;
// let start = 0;
// let end = data.length - 1;
// let position = undefined;

// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);

//   if (data[mid] == find) {
//     position = mid;
//     break;
//   } else if (data[mid] < find) {
//     start = mid +1
//   } else  {
//     end = mid-1
//   }

// }

// console.log(position);

///////////////////////////////////////////////////////////////////////  InterView Questions  //////////////////////////////////////////////////

// Q.Find the largest and smallest element in an array.
// Q.Find the second largest and second smallest elements in an array.
// Q.Rotate an array by k positions.
// Q.Find the majority element in an array (appears more than n/2 times).
// Q.Find the missing number in a given array of size n with elements from 1 to n.
// Q.Find all pairs in an array that sum up to a given number.
// Q.Merge two sorted arrays without using extra space.
// Q.Find the subarray with the maximum sum (Kadane’s Algorithm).
// Q.Rearrange an array such that positive and negative numbers alternate.
// Q.Find the longest consecutive sequence in an unsorted array.

// Q.Check if a string is a palindrome.
// Q.Find the first non-repeating character in a string.
// Q.Reverse a string without using extra space.
// Q.Check if two strings are anagrams of each other.
// Q.Find the longest repeating subsequence in a string.
// Q.Implement string matching using the KMP algorithm.
// Q.Find the longest common prefix among an array of strings.
// Q.Count the number of vowels and consonants in a string.
// Q.Find the smallest window in a string containing all characters of another string.
// Q.Generate all permutations of a string.

// Q.Reverse a linked list.
// Q.Detect and remove a cycle in a linked list.
// Q.Find the middle element of a linked list.
// Q.Merge two sorted linked lists.
// Q.Remove duplicates from a sorted linked list.
// Q.Add two numbers represented as linked lists.
// Q.Flatten a multilevel linked list.
// Q.Find the intersectioa point of two linked lists.
// Q.Check if a linked list is a palindrome.
// Q.Rotate a linked list by k nodes.

// Q.Implement a stack using arrays.
// Q.Implement a queue using stacks.
// Q.Find the next greater element for every element in an array.
// Q.Evaluate a postfix expression.
// Q.Implement a min stack (a stack that supports push(), pop(), and getMin()).
// Q.Implement a circular queue.
// Q.Find the maximum in each sliding window of size k.
// Q.Implement a priority queue.
// Q.Check for balanced parentheses in an expression.
// Q.Design a stack that supports push(), pop(), top(), and retrieving the maximum element.

// Q.Perform in-order, pre-order, and post-order traversal of a binary tree.
// Q.Find the height of a binary tree.
// Q.Check if two binary trees are identical.
// Q.Convert a binary tree into its mirror.
// Q.Find the lowest common ancestor (LCA) of two nodes in a binary tree.
// Q.Check if a binary tree is a binary search tree (BST).
// Q.Find the maximum width of a binary tree.
// Q.Serialize and deserialize a binary tree.
// Q.Print the left view of a binary tree.
// Q.Find the diameter of a binary tree.

// Q.Implement Breadth-First Search (BFS) for a graph.
// Q.Implement Depth-First Search (DFS) for a graph.
// Q.Detect a cycle in a graph (directed and undirected).
// Q.Find the shortest path in an unweighted graph using BFS.
// Q.Implement Dijkstra’s algorithm for the shortest path in a weighted graph.
// Q.Find the Minimum Spanning Tree (MST) using Kruskal’s algorithm.
// Q.Implement Prim’s algorithm for MST.
// Q.Check if a graph is bipartite.
// Q.Topologically sort a directed acyclic graph (DAG).
// Q.Find all strongly connected components (SCC) in a graph.
// Q.Recursion and Backtracking
// Q.Solve the N-Queens problem.
// Q.Find all subsets of a set.
// Q.Solve the rat in a maze problem.
// Q.Find all permutations of a string or array.
// Q.Solve the Sudoku puzzle.
// Q.Generate all valid parentheses combinations of length n.
// Q.Partition a string into all possible palindromic substrings.
// Q.Print all paths from the top-left to the bottom-right of a matrix.
// Q.Find the Kth permutation of a sequence.f
// Q.Implement the word search problem.

// Q.Find the nth Fibonacci number using dynamic programming.
// Q.Solve the Longest Common Subsequence (LCS) problem.
// Q.Solve the Longest Increasing Subsequence (LIS) problem.
// Q.Solve the 0/1 Knapsack problem.
// Q.Find the number of ways to make change for a given amount using coins.
// Q.Find the minimum number of coins required to make a given amount.
// Q.Solve the Matrix Chain Multiplication problem.
// Q.Solve the Partition Equal Subset Sum problem.
// Q.Find the maximum profit in a stock trading problem (at most 2 transactions).
// Q.Solve the Edit Distance problem between two strings.

// Q.Implement the Merge Sort algorithm.
// Q.Implement the Quick Sort algorithm.
// Q.Perform Binary Search on a sorted array.
// Q.Find the Kth largest element in an array.
// Q.Find the peak element in an array.
// Q.Implement Heap Sort.
// Q.Find the square root of a number using binary search.
// Q.Find the minimum number of platforms required for trains at a station.
// Q.Solve the Median of Two Sorted Arrays problem.
// Q.Search for an element in a rotated sorted array.

// Q.Find the only non-repeating element in an array where every other element repeats twice.
// Q.Count the number of 1s in the binary representation of a number.
// Q.Determine if a number is a power of 2.
// Q.Swap two numbers without using a temporary variable.
// Q.Find the XOR of all elements in an array.
// Q.Find two non-repeating numbers in an array where every other number repeats twice.
// Q.Count the number of bits needed to flip to convert one number to another.
// Q.Check if two numbers have opposite signs.
// Q.Find the position of the rightmost set bit in a number.
// Q.Solve the Subset XOR problem.

// Q.Write a function to find the length of the longest substring without repeating characters.
// Example:
// Input: "abcabcbb"
// Output: 3 (substring is "abc")
// Input: "bbbbb"
// Output: 1 (substring is "b")

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ SQL Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

//
// To create database : CREATE DATABASE <database_name>;
// check if not created then : CREATE DATABASE IF NOT EXISTS <database_name>;
// Delete a database : DROP DATABASE <database_name>;[delete a database]
// Select database for use : USE <database_name>;

// Create a table : CREATE TABLE <table_name> (column_1 datatype contraints, column_2 datatype constraints, ...);
// Check if table already exists then : CREATE TABLE IF NOT EXISTS <table_name> (column_1 datatype contraints, column_2 datatype constraints, ...);
// DROP TABLE <table_name>;[delete a table]

// Show all databases: SHOW DATABASES;
// Show all tables : SHOW TABLES;

// Select all data of table : SELECT * FROM <table_name>;
// Select specific column of table : SELECT column_1, column_2, ... FROM <table_name>;
// Insert data in table : INSERT INTO <table_name> (column_1, column_2, ...) VALUES (value_1, value_2, ...);

////////////////////////////////////////// keys /////////////////////////////////////////

// Primary Key ==> It cannot be NULL and must be unique. one table can have only one primary key.
// Foreign Key ==> in 2 tables one table's primary key is used as a foreign key in another table. It can accept Null values. Also it can accept duplicate values. one table can have multiple foreign keys.
// Unique Key ==> A unique key constraint ensures that all values in a column are different from each other. It can accept NULL values, but only one NULL value is allowed.

//////////////////////////  constraints /////////////////////////////////////////

// constraints is a rule for data in the table.
// NOT NULL ==> column cannot be empty. eg: CREATE TABLE USERS (ID INT NOT NULL, NAME VARCHAR(255) NOT NULL);
// Unique => all values in a column must be unique. eg: CREATE TABLE USERS (ID INT UNIQUE, NAME VARCHAR(255) UNIQUE);
// primary key => make column unique and not null + only one column can be primary key.
// forign key => other table's primary key can become new table column's forign key. eg: CREATE TABLE temp(cust_id int, forign key (cust_id) references customer(id));
// DEFAULT => set the default value of column. eg: salary int default 25000;
// CHECK => to check the condition before storing data in column. eg: create table newTab(age int check (age >= 18));

/////////////////////////////////////////  Important command and keywords ////////////////////////////////////////////

// => SELECT : SELECT <column name> from <table name>;

// => DISTINCT keyword : removes duplicates in column . eg: SELECT DISTINCT city from students

// => WHERE : to define condition || We use multiple operator with WHERE. eg: +,-,*,/,%,=, !=, >, <, AND , OR, NOT, IN, BETWEEN, ALL, LIKE, ANY, &, |
// eg1 : SELECT * from students WHERE marks+10 > 100;
// eg2 : SELECT * FROM students WHERE marks BETWEEN 80 AND 90;
// eg3 : SELECT * FROM students WHERE city IN ("DELHI","MUMBAI");
// eg4 : SELECT * FROM students WHERE city NOT IN ("DELHI","MUMBAI");
// eg5 : SELECT * FROM STUDENTS WHERE marks >=80 AND city = "mumbai";

// => LIMIT: apply limit on rows.
// eg1: SELECT * FROM students WHERE marks > 75 LIMIT 3;

// => ORDER BY : get rows in ascending or decending order;
// eg1: SELECT * FROM students ORDER BY city ASC;
// eg2: SELECT * FROM students ORDER BY MARKS DESC;

// => GROUP BY : used to create groups on any basis condition.
// eg: SELECT city, COUNT(name) FROM students GROUP BY city; Here first city column is selected > made group of cities > count name that which name is from which city and return total name in each city. we can also do it for multiple columns like select city,name,count(rollNo) from students group by city,name;

// HAVING : similer to WHERE  but apply only on conditions after grouping.
// eg: SELECT city ,COUNT(roll_no)FROM `students` GROUP by city HAVING MAX(marks) > 90;

// General Order to write a query ====>
// SELECT column
// FROM table_name
// WHERE condition
// GROUP BY column
// HAVING condition
// ORDER BY column ASC;

// ALTER : to change the schema means to add or remove or rename any column in table.
// add column : ALTER TABLE table_name ADD COLUMN column_name datatype constraint;
// drop column : ALTER TABLE table_name DROP COLUMN column_name;
// rename table : ALTER TABLE table_name RENAME TO new_table_name;
// rename column : ALTER TABLE table_name CHANGE COLUMN old_name new_name new_datatype new_constrant;
// modify constraints / datatype : ALTER TABLE table_name MODIFY col_name new_datatype new_constraint;
// delete all table's data : TRUNCATE TABLE table_name;

///////////////////////////////////////////////////  Table related queries  /////////////////////////////////////

// update a value in table || Syntex: UPDATE table_name SET col1=val1,col2=val2 WHERE condition; || eg: UPDATE students SET grade="O" WHERE grade="c"
// delete a value in table || Syntex: DELETE FROM table_name WHERE conditon; || eg: DELETE FROM students WHERE id=101;

////////////////////////////////////////////////  forign key in detail /////////////////////////////////

// we have 2 tables. deparments, teachers. deparments table have science , english , hindi and their primary key is id which is 101, 102, 103, respectively. teachers have id , name , department id columns in which id is primary key.

// we make department's primary key to teacher's dept_id forign key. || CREATE TABLE teachers(id int primary key,dept_id int, Forign key (dept_id)  references deparments(id));

// Cascading in Forign key: means if change in parent table the reflect in child table also. To do this we use "ON UPDATE CASCADE" AND 'ON DELETE CASCADE'
// eg: CREATE TABLE teacher(
// id INT PRIMARY KEY,
// name VARCHAR(20),
// dept_id INT,
// FORIGN KEY (dept_id) REFERENCES dept(id)
// ON UPDATE CASCADE
// ON DELETE CASCADE
// );

/////////////////////////////////////////////////////// AGGREGATE FUNCTIONS ///////////////////////////////

// => these functions perform calculations on all values and return a single value.
// =>COUNT() : TO COUNT VALUE
// =>MAX() : TO GET MAXIMUM VALUE
// =>MIN() : TO GET MINIMUM VALUE
// =>SUM() : TO GET SUM OF VALUE
// =>AVG() : TO GET AVRAGE OF VALUE

// eg: SELECT MAX(marks) FROM students;

/////////////////////////////////////////////////// Data Types /////////////////////////////////////////

// Datatypes ==> int, varchar(0-255), char(0-255), text, date, datetime, timestamp, boolean, decimal(p,s), float, double, blob
// char vs varchar ==> if a char is of 50 then memory will be allocated for 50 char even if string is empty. whereas varchar will only allocate memory for the number of char used in string. 50 will be max value for varchar.
// BLOB ==> Binary Large Object, used to store large binary data like images, videos.(0-65,535 bytes)
// INT => To save integer values. (-2,147,483,648 to 2,147,483,647)
// Float=> To save floating point values. (7 decimal digits)
// Double=> To save double precision floating point values. (15 decimal digits)
// Date => To save date values. (YYYY-MM-DD)
// Time => To save time values. (HH:MM:SS)
// Timestamp => To save date and time values. (YYYY-MM-DD HH:MM:SS)
// signed vs unsigned data types ==> signed can store negative values, unsigned can only store positive values.

////////////////////////////////////////////////  Joins in sql /////////////////////////////////////////////////

// used to combine rows from 2 or more tables.
// There is 2 type of joins: 1) Inner Join , 2) Outer Join
// 1) Inner Join : return data which is common in both tables + SELECT columns FROM tableA INNER JOIN tableB ON tableA.col_name = tableB.col_name;
// eg: SELECT * FROM students INNER JOIN cources ON students.student_id = courses.courses.id;

// 2) Outer Join : It has 3 types. i) Left Join , ii) Right Join iii) Full Join.

// i) Left Join : gets full data of table A with common data with table B. + SELECT * FROM tableA LEFT JOIN tableB ON tableA.col_name = tableB.col_name; + here tableA is left joined with tableB so it will return tableA's full data and tableB's common data.
// eg: SELECT * FROM students LEFT JOIN courses ON students.student_id = courses.course_id;

// ii) Right Join : gets full data of table B with commom data with table A + SELECT * FROM tableA as tbA RIGHT JOIN tableB as tbB ON tableA.col_name = tableB.col_name; + here tableA is right joined with tableB so it will return tableB's full data and tableA's commin data.
// eg: SELECT * FROM students as s RIGHT JOIN courses as c ON s.student_id = c.course_id;

// iii) Full Join : we use UNION between left join query and right join query to get all data of TableA and TableB;
// eg: SELECT * FROM students LEFT JOIN courses ON students.student_id = courses.course_id
//  UNION
// SELECT * FROM students as s RIGHT JOIN courses as c ON s.student_id = c.course_id ;

// Left exculsive join / Right exclusive join : to get unique value in TableA / TableB + to do this we use WHERE command
// eg: SELECT * FROM students LEFT JOIN courses ON students.student_id = courses.course_id WHERE courses.course_id IS NULL;

//////////////////////////////////////////////////////////////  UNION  ///////////////////////

// used to combine 2 data sets + Also removes duplicate values + UNION ALL will give all values including duplicates +  SELECT columns FROM TableA UNION SELECT columns FROM TableB

/////////////////////////////////////////////////////// Sub Queries  //////////////////////////////////////////////

// to write query into query + SELECT column FROM table_name WHERE col_name <operator> (subquery);
// eg: select full_name,marks from students where marks > (select AVG(marks) from students);

///////////////////////////////////////////////  MySQL Views   ///////////////////////////////////

// it is used to restrict column  data to user + CREATE VIEW view1 SELECT rollno, name FROM student;

//////////////////////////////////////////////////////////////////  Questions for Practice  /////////////////////////////////////////

// first create database of company to excute these sql queries.

// CREATE DATABASE CompanyDB;
// USE CompanyDB;

// CREATE TABLE departments (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100)
// );

// CREATE TABLE employees (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     first_name VARCHAR(50),
//     last_name VARCHAR(50),
//     email VARCHAR(100) UNIQUE,
//     department_id INT,
//     manager_id INT,
//     hire_date DATE,
//     job_title VARCHAR(100),
//     FOREIGN KEY (department_id) REFERENCES departments(id),
//     FOREIGN KEY (manager_id) REFERENCES employees(id)
// );

// CREATE TABLE projects (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(100),
//     start_date DATE,
//     end_date DATE,
//     budget DECIMAL(10, 2)
// );

// CREATE TABLE salaries (
//     employee_id INT PRIMARY KEY,
//     amount DECIMAL(10, 2),
//     effective_date DATE,
//     FOREIGN KEY (employee_id) REFERENCES employees(id)
// );

// CREATE TABLE attendances (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     employee_id INT,
//     date DATE,
//     status ENUM('Present', 'Absent', 'Leave'),
//     FOREIGN KEY (employee_id) REFERENCES employees(id)
// );

// -- Departments
// INSERT INTO departments (name) VALUES
// ('Engineering'), ('HR'), ('Sales'), ('Finance');

// -- Employees
// INSERT INTO employees (first_name, last_name, email, department_id, manager_id, hire_date, job_title)
// VALUES
// ('John', 'Doe', 'john.doe@example.com', 1, NULL, '2020-01-10', 'Engineering Manager'),
// ('Jane', 'Smith', 'jane.smith@example.com', 1, 1, '2021-03-15', 'Software Engineer'),
// ('Mike', 'Taylor', 'mike.taylor@example.com', 2, NULL, '2019-08-01', 'HR Manager'),
// ('Emily', 'Clark', 'emily.clark@example.com', 2, 3, '2022-07-11', 'HR Executive'),
// ('Robert', 'King', 'robert.king@example.com', 3, NULL, '2018-05-25', 'Sales Manager'),
// ('Laura', 'Jones', 'laura.jones@example.com', 3, 5, '2023-01-03', 'Sales Executive');

// -- Projects
// INSERT INTO projects (name, start_date, end_date, budget)
// VALUES
// ('Website Revamp', '2023-01-01', '2023-06-30', 50000.00),
// ('Recruitment Drive', '2023-02-15', '2023-04-15', 10000.00),
// ('Product Launch', '2023-03-01', '2023-07-01', 75000.00);

// -- Salaries
// INSERT INTO salaries (employee_id, amount, effective_date)
// VALUES
// (1, 95000.00, '2023-01-01'),
// (2, 65000.00, '2023-01-01'),
// (3, 80000.00, '2023-01-01'),
// (4, 50000.00, '2023-01-01'),
// (5, 88000.00, '2023-01-01'),
// (6, 47000.00, '2023-01-01');

// -- Attendance
// INSERT INTO attendances (employee_id, date, status)
// VALUES
// (1, '2023-05-01', 'Present'),
// (2, '2023-05-01', 'Absent'),
// (3, '2023-05-01', 'Present'),
// (4, '2023-05-01', 'Leave'),
// (5, '2023-05-01', 'Present'),
// (6, '2023-05-01', 'Present');

//  Beginner Level (1–30)

// List all columns of all employees.

// Show first names and last names of employees.

// What are the distinct department IDs in the employee table?

// Find all employees who work in the 'HR' department.

// List all employees who joined after January 1, 2020.

// Get the employee(s) with a salary greater than 70,000.

// Show all employees ordered by their first names.

// List employees ordered by hire date in descending order.

// How many employees are there in total?

// What is the maximum salary?

// What is the minimum salary?

// What is the average salary?

// What is the total sum of all salaries?

// Find all employees whose job title contains "Manager"

// List all attendances marked as "Absent"

// Find employees with first names either "John" or "Jane".

// Find all employees in department 1 with the job title "Engineer". <===============

// Find employees who have a non-null email.

// Show the first 5 employees in the table.

// Find projects that have no end date.

// Display the id and first_name of all employees with an alias.

// Show the length of each employee's first name.

// Convert all last names to uppercase.

// Convert all email addresses to lowercase.

// Show the year part of the hire date of each employee.

// List employees hired in 2022.

// Show how many days each employee has worked till today.

// Display the current date and time.

// Show only the current date.

// Find employees hired between 2021 and 2023.

// 🧠 Intermediate Level (31–70)
// Count the number of employees in each department.

// Count how many times each attendance status appears.

// Show average salary per job title.

// Show department name with number of employees in each.

// Find projects with a budget between 10,000 and 60,000.

// List employees whose last name starts with 'S'.

// Display employees and their department names using a join.

// Show each employee with their manager's name.

// Display only employees who have managers.

// Find employees earning the highest salary.

// Find employees working in the 'Sales' department.

// List departments where no employee is assigned.

// Show employees that have a salary record.

// Update the email of employee with id = 1.

// Increase employee 2’s salary by 5,000.

// Delete all attendance records marked as "Absent" before 2023.

// Delete projects that ended before 2022.

// Insert a new department named 'Legal'.

// Add a new salary record for a new employee.

// List employees earning more than 60,000 with their salary.

// Calculate the duration of each project in days.

// Show department names with average salary of their employees.

// Show job titles having more than one employee.

// List employees that do not have a salary entry.

// Find employees present on '2023-05-01'.

// Find projects whose budget is above average.

// Count distinct employees in the attendance table.

// Show total number of days each employee has attendance.

// Order employees by length of their first name (longest first).

// Display full names of employees (first + last).

// Find employees whose job title contains either “Engineer” or “Manager”.

// Join employees with their departments and filter only 'Engineering'.

// Show employees hired over 2 years ago.

// List salaries greater than or equal to all other salaries.

// List emails that end with '@example.com'.

// Show most common job titles in the company.

// List employees and their departments using a subquery.

// Show all departments that have more than 1 employee.

// Find the project with the longest duration.

// Get the latest hire date in each department.

// 🚀 Advanced Level (71–100)
// Create a view showing employees and their salary.

// Select all employees from the salary view whose salary > 70,000.

// Create a stored procedure to list employees by department ID.

// Call the stored procedure for department ID = 1.

// Create a trigger that logs salary changes.

// Find employees whose salary increased compared to a previous value.

// Show employee salary rank using RANK() window function.

// Show department-wise average salary using PARTITION BY.

// Get each employee’s salary vs. overall average using window function.

// Get top 2 earners from each department using DENSE_RANK().

// Create a CTE that lists high-earning employees (salary > 70k).

// Use a CTE to count employees per department.

// Show the employee with the longest name.

// Find departments with the highest number of employees.

// List employees with more attendance days than average.

// Write a query to transpose attendance statuses by employee.

// Find average number of days present per department.

// Show employee-manager pairs where both belong to same department.

// List employees who never took leave.

// Find employees working on the most expensive project.

// Calculate the percentage of "Present" days per employee.

// Write a query to find salary difference between manager and reportee.

// Create a function to return full name of employee by ID.

// List top 3 employees with highest salary overall.

// Show departments with less than 2 employees.

// Generate a running total of salaries department-wise.

// Rank projects by budget.

// Show total cost of salaries by department.

// Find employees whose names appear more than once (duplicates).

// Display employees hired in the same year as their manager.
