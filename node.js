// 1. Interview Questions + give example code where required.
// 2. Practice Questions
// 3. Puzzles

////////////////////////////////////////////  interview questions  //////////////////////////////////////////////////////
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

// CORS =================================================
// CSRF ===============================================
// What is helmet library how to use it ? ==================================

// What is cross-site request forgery (CSRF), and how can you prevent it in Node.js? ====================
// user is tricked to perform action they didn't intend + prevent it by csrf token + use csurf library + set cookies sameSite to "strict" + restrict which domain can send request using cors + avoid get request for changing data the data in db

// What is the helmet middleware in Express.js, and how does it help secure an app? ===================
// security middleware + helps app for common web vulnerabies by setting secure http headers + it protect from : XSS, MIME sniffing, clickjacking, hides "X-powered-By: Express" header

// How would you handle rate limiting in a Node.js application? =============
// technique to control no of request by client in limited time + we use "express-rate-limit" library for that

// What is CORS (Cross-Origin Resource Sharing), and how do you configure it in Node.js? ==================
// Allows server to share resource to indicated origin

// How do you manage OAuth 2.0 authentication in Node.js? =====================================
// OAuth 2.0 means node will interact with third party (google,facebook,linkdin,github) to authenticate user

// What are some best practices you follow when writing a Node.js application? ============
//

// How to make import export work on node.js ? which is better import export or require() ? =========================

// What kind of API function / modules is supported by Node.js?  =======================
// => fs module, http , buffer , stream, timer, events, child process, worker thread, path, url, crypto, network, passport, mongoose, mysql2, express, jsonwebtoken, ws, socket.io

// What is middleware? give example to varify user on protected routes ========================
// =>eg:
// const middleware = async (req, res, next) => {
//   const userToken = req.cookies["usejwtToken"];
//   const jwtSecreatKey = process.env.JWT_SECREAT_KEY;

//   const result = await jwt.varify(userToken, jwtSecreatKey);

//   if (result) next();
//   else res.json("user not varified!!");
// };

// app.get("/getUser", middleware, (req, res) => {});

// What is the control flow in Node.js? ============================================
//
// What are the main disadvantages of Node.js?
// What is REPL in Node.js?
// How to import a module in Node.js?
// What is the difference between Node.js and AJAX?
// What is event-driven programming in Node.js?
// What is buffer in Node.js?
// Explain crypto module in Node.js.
// Explain the use of the timers module in Node.js.
// What is the difference between spawn() and fork() methods?
// Explain the use of the passport module in Node.js.
// What is a fork in Node.js?
// What is body-parser in Node.js?
// Explain the tls module in Node.js.
// How to manage sessions in Node.js?
// How can we implement authentication and authorization in Node.js?
// Explain the packages used for file uploading in Node.js.
// How to handle database connections in Node.js?
// How to read command line arguments in Node.js?

// what is JWT ?
// Difference between POST, PUT and GET and PATCH ?
// Difference between RDBMS and No-sql DBMS ?
// How do you deploy your Nodejs application?
// Do you follow agile or any other SDLC model?
// What is collection framework
// What is error first callback function?
// When did you used and where did you used redis cache
// How does Nodejs differentiate and handle synchronous and asynchronous task
// What is encapsulation
// How can a linked list be created without utilizing arrays?
// Difference between public, private, protected access modifiers.
// How to make Nodejs handle multiple thread
// What's swagger and how to add authentication in swagger
// What is OAuth and how you implement it?
// Fork vs spawn and when you used this
// How to implement caching using rabitmq
// what is the role of libuv ?
// how to scale app for more users
// What is cyclic dependency in. Node js
// What is Pharmacovilance
// Explain about Microservices Architecture
// What tools can be used to assure consistent code style?
// What is a first class function in Javascript?
// How do you manage packages in your node.js project?
// How is Node.js better than other frameworks most popularly used?
// Explain the steps how “Control Flow” controls the functions calls?
// What are some commonly used timing features of Node.js?
// What are the advantages of using promises instead of callbacks?
// What is fork in node JS?
// Why is Node.js single-threaded?
// How do you create a simple server in Node.js that returns Hello World?
// How many types of API functions are there in Node.js?
// What is REPL?
// List down the two arguments that async.queue takes as input?
// What is the purpose of module.exports?
// Explain the concept of stub in Node.js?
// Describe the exit codes of Node.js?
// For Node.js, why Google uses V8 engine?
// Why should you separate Express app and server?
// Explain what a Reactor Pattern in Node.js?
// What is middleware?
// What are node.js buffers?
// What is node.js streams?
// How can we use async await in node.js?
// How does Node.js overcome the problem of blocking of I/O operations?
// If Node.js is single threaded then how does it handle concurrency?
// What is a thread pool and which library handles it in Node.js
// What is WASI and why is it being introduced?
// How are worker threads different from clusters?
// How to measure the duration of async operations?
// How to measure the performance of async operations?
// cache vs cookies ??
// explain these modules => zlib, stream, query string, url, os, fs, util, http
// How do you install, update, and delete a dependency?
// How do you create a simple server in Node.js that returns Hello World?

// Explain the Node.js event loop in detail.

// Q.What are microtasks and macrotasks in Node.js?
// A.
// 1)Microtasks : high priority + excuted immidiately after corrent operation and before macrotasks + process.nextTick(), Promises + goes in Check Queue + Process.nextTick will excute first from promises
// 2)Macrotasks : regular async tasks + excuted in next phase of event loop + setTimeout, SetIntervel, setImmediate etc + goes in Timer Queue

// How does the call stack differ from the event loop queue / task queue / callback queue?

// What is the difference between process.nextTick() and setImmediate()?

// How does Node.js handle blocking code?

// What is the role of the libuv library?
// libuv is the engine that provides node.js async power.

// Explain how timers work in Node.js.
// Timers are functions that allow you to schedule code excution after delay + setTimeout, setInterval, setImmidiate etc.

// What happens if you block the event loop?
// whole application will stop processing other taska until the blocking code finishes.

// How can you monitor and debug event loop lag?
// event loop lag means when event loop is blocked + often caused by sync or blocking operations + we use perf_hooks built in library to moniter

// How does backpressure work in streams?
// Backpressure happens when the data producer (Readable stream) is sending data faster than the consumer (Writable stream) can process.To prevent overload, Node.js provides built-in mechanisms to pause or slow down the producer until the consumer catches up.

// How does the HTTP module work in Node.js?
// HTTP module is built-in + used to create a server without express.js + allow to make http requests

// Explain how Node handles connection pooling.
// A technique to manage or reuse open database connections + Connection pooling is a way to efficiently reuse existing connections instead of creating new ones repeatedly

// How to handle socket hang-up errors?

// What’s the difference between keep-alive and upgrade headers?

// How do you implement WebSockets in Node.js?

// What is the role of the ws module?

// Difference between polling and WebSockets.

// How does Socket.IO differ from native WebSockets?

// How do you handle authentication in real-time apps?

// Difference between CommonJS and ES Modules in Node.js.

// How does Node.js resolve module paths?

// What is a cyclic dependency, and how does Node handle it?

// How to create custom native addons?

// How do you cache modules in Node.js?

// Difference between fs.readFile and fs.promises.readFile.

// How to watch for file changes?

// What is the purpose of fs.fsync()?

// How do you handle large file uploads/downloads?

// How does Node interact with the underlying OS?

// How to protect against injection attacks?

// What is the purpose of Helmet.js?

// How to securely store API keys and secrets?

// How does Node handle TLS/SSL?

// How to prevent DOS attacks in Node.js?

// Difference between callbacks, promises, and async/await.

// How to handle multiple promises concurrently?

// What is the Promise.race() method?

// How to retry a failed async operation?

// What are async generators?

// How do you test asynchronous code in Node.js?

// What are the best practices for unit testing?

// Difference between mocha, jest, and ava.

// How do you mock dependencies in tests?

// How do you debug memory leaks?

// Difference between operational and programmer errors.

// How do you catch async/await errors?

// What is unhandledRejection and how do you handle it?

// How does Node.js handle synchronous exceptions?

// Explain try/catch vs. .catch() for promises.

// Difference between process.exit() and uncaughtException.

// How to handle graceful shutdown in Node?

// How to fork processes in Node?

// Explain child_process.exec() vs spawn().

// What is a zombie process?

// How do you measure Node.js performance?

// What are memory leaks and how to find them?

// How to use clinic.js or node --inspect?

// How do you improve startup time in Node?

// How do you handle CPU-intensive tasks?

// Difference between npm and yarn.

// What is nvm and why use it?

// How does Webpack help in Node.js development?

// How to use PM2 for process management?

// What are monorepos and how do tools like Lerna help?

// What is a microservice architecture in Node.js?

// How do you handle inter-service communication?

// Explain the 12-Factor App methodology.

// How to use message queues with Node.js?

// What is an event-driven architecture?

// How to handle rate limiting in Express?

// How do middlewares work?

// Difference between global and route-specific middleware.

// How to structure a scalable Express app?

// How to handle file uploads securely?

// How to handle JSON streaming?

// How to prevent JSON overflows?

// What is schema validation and how to implement it?

// Difference between ORM and query builders.

// How to sanitize user input in APIs?

// How to handle database pooling in Node.js?

// What is optimistic concurrency control?

// Difference between MongoDB and PostgreSQL integration in Node.

// How to perform transactions in Node.js?

// How to prevent N+1 query problems?

// How to implement logging in production apps?

// How to use winston or pino for logging?

// How to monitor Node.js applications with tools like New Relic, Datadog, or Elastic?

// How to enable application profiling in Node.js?

// How to create and monitor health checks in Node.js?

// 5. If Node.js is single-threaded, then how does it handle concurrency?
// 6. Explain callback in Node.js.
// 7. What are the advantages of using promises instead of callbacks?
// 8. How would you define the term I/O?
// 9. How is Node.js most frequently used?
// 10. Explain the difference between frontend and backend development.
// 11. What is NPM?
// 12. What are the modules in Node.js?
// 13. What is the purpose of the module `.exports`?
// 14. Why is Node.js preferred over other backend technologies like Java and PHP?
// 15. What is the difference between Angular and Node.js?
// 16. Which database is more popularly used with Node.js?
// 17. What are some of the most commonly used libraries in Node.js?
// 18. What are the pros and cons of Node.js?
// 19. What is the command used to import external libraries?
// 20. What does event-driven programming mean?
// 21. What is an Event Loop in Node.js?
// 22. Differentiate between `process.nextTick()` and `setImmediate()`.
// 23. What is an EventEmitter in Node.js?
// 24. What are the two types of API functions in Node.js?
// 25. What is the `package.json` file?
// 26. How would you use a URL module in Node.js?
// 27. What is the Express.js package?
// 28. How do you create a simple Express.js application?
// 29. What are streams in Node.js?
// 30. How do you install, update, and delete a dependency?
// 31. How do you create a simple server in Node.js that returns "Hello World"?
// 32. Explain asynchronous and non-blocking APIs in Node.js.
// 33. How do we implement async in Node.js?
// 34. What is a callback function in Node.js?
// 35. What is REPL in Node.js?
// 36. What is the control flow function?
// 37. How does control flow manage the function calls?
// 38. What is the difference between `fork()` and `spawn()` methods in Node.js?
// 39. What is the buffer class in Node.js?
// 40. What is piping in Node.js?
// 41. What are some of the flags used in read/write operations in files?
// 42. How do you open a file in Node.js?
// 43. What is callback hell?
// 44. What is a reactor pattern in Node.js?
// 45. What is a test pyramid in Node.js?
// 46. For Node.js, why does Google use the V8 engine?
// 47. Describe Node.js exit codes.
// 48. Explain the concept of middleware in Node.js.
// 49. What are the different types of HTTP requests?
// 50. How would you connect a MongoDB database to Node.js?
// 51. What is the purpose of NODE_ENV?
// 52. List the various Node.js timing features.
// 53. What is WASI, and why is it being introduced?

//////////////////////////////////////////////////// Practice /////////////////////////////////////////
// write a code for schema and model
// write a code for middle Writable
// write a code for connecting a database
// write a code for get,put,patch, post, delete apis
