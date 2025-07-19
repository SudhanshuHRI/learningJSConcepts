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

// What is helmet library how to use it ? ==================================
// => it is a middleware for express applications + it help in preventing Cross-site scription, clickjacking, MIME-sniffing, Information leak via headers
// => eg:
// import helmet from "helmet";
// app.use(helmet());

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
// => REPL means READ, EVAL, PRINT, LOOP + used to run node on CMD

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

// Why should you separate Express app and server? ========================================================
// Explain what a Reactor Pattern in Node.js? ========================================================

// What is WASI and why is it being introduced? ========================================================
// cache vs cookies ?? ========================================================
// explain these modules => zlib, stream, query string, url, os, fs, util, http ========================================================




// Q.What are microtasks and macrotasks in Node.js?========================================================
// A.
// 1)Microtasks : high priority + excuted immidiately after corrent operation and before macrotasks + process.nextTick(), Promises + goes in Check Queue + Process.nextTick will excute first from promises
// 2)Macrotasks : regular async tasks + excuted in next phase of event loop + setTimeout, SetIntervel, setImmediate etc + goes in Timer Queue


// How does Node.js handle blocking code?

// How can you monitor and debug event loop lag?
// event loop lag means when event loop is blocked + often caused by sync or blocking operations + we use perf_hooks built in library to moniter

// How does backpressure work in streams?
// Backpressure happens when the data producer (Readable stream) is sending data faster than the consumer (Writable stream) can process.To prevent overload, Node.js provides built-in mechanisms to pause or slow down the producer until the consumer catches up.

// Explain how Node handles connection pooling.
// A technique to manage or reuse open database connections + Connection pooling is a way to efficiently reuse existing connections instead of creating new ones repeatedly

// How to handle socket hang-up errors?

// What’s the difference between keep-alive and upgrade headers?

// Difference between polling and WebSockets.

// How does Socket.IO differ from native WebSockets?

// What is a cyclic dependency, and how does Node handle it?

// How to create custom native addons?

// How do you cache modules in Node.js?

// Difference between fs.readFile and fs.promises.readFile.

// How to watch for file changes?

// What is the purpose of fs.fsync()?

// How does Node interact with the underlying OS?

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

// What is unhandledRejection and how do you handle it?

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

// How to use PM2 for process management?

// What are monorepos and how do tools like Lerna help?

// What is a microservice architecture in Node.js?

// How do you handle inter-service communication?

// Explain the 12-Factor App methodology.

// How to use message queues with Node.js?

// What is an event-driven architecture?

// How to handle rate limiting in Express?

// Difference between global and route-specific middleware.


// How to handle file uploads securely?

// How to handle JSON streaming?

// How to prevent JSON overflows?

// What is schema validation and how to implement it?

// Difference between ORM and query builders.

// How to handle database pooling in Node.js?


// How to perform transactions in Node.js?

// How to prevent N+1 query problems?

// How to implement logging in production apps?

// How to use winston or pino for logging?

// How to monitor Node.js applications with tools like New Relic, Datadog, or Elastic?

// How to enable application profiling in Node.js?

// How to create and monitor health checks in Node.js?


// What is the difference between Angular and Node.js?
// Which database is more popularly used with Node.js?
// What is the command used to import external libraries?
// What does event-driven programming mean?
// What is an Event Loop in Node.js?

// What are the two types of API functions in Node.js?



// 36. What is the control flow function?
// 37. How does control flow manage the function calls?

// What is piping in Node.js?
// What are some of the flags used in read/write operations in files?
// How do you open a file in Node.js?
// What is a reactor pattern in Node.js?
// What is a test pyramid in Node.js?
// For Node.js, why does Google use the V8 engine?
// Describe Node.js exit codes.
// What is the purpose of NODE_ENV?
// What is WASI, and why is it being introduced?

//////////////////////////////////////////////////// Practice /////////////////////////////////////////
// write a code for schema and model
// write a code for middleware implimentation on Procted routes
// write a code for connecting a database + write a functions for database add,update,delete functions
// write a code for get,put,patch, post, delete apis
// write a Promise and Promise.all() code.
// make authorization and authentication apis.