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

// how node.js work ? ==============================
// => Single thread + non-blocking I/O

// How node handle single thread behaviour for multiTask ? ==========================
// Event loop helps node to perform non-blocking I/O like reading a file without blocking the main thread. + Libuv library handles I/O in background threads 

// Core vs thread vs process =====================
//  => CPU -> cores -> Process -> thread -> callStack / Event Loop  + A cpu can have multiple cores , Each core can run one or more process , each process can have one or more threads , threads shares memeory in same process but process dont share memory 

// what is non-blocking I/O in node.js ? ============================
// => means all async tasks . 

// Event loop in node.js. ============================
// => first request goes to event queue container + then event loop take one request and checks if request is sync(blocking) or async(non-blocking) + if async then goes to event queue and after solving event loop push it to evetn queue and the give respone to user + if blocking task then it goes to thread pool and if any thread is free then assign the task to that thread and thread gives the result , if not then it will wait for thread to be empty +

// process.nextTick() vs setImmidiate()? ============================
// setTimeout() vs setIntervel()? ============================
// Explain the concept of callback hell and how can it be avoided in Node.js? ============================

// How does Node.js manage memory?===================================
// manages memory using v8 engine + node uses main 2 memory: stack (stores primitive data types, fast,small in size,managed by call stack), heap (stores object, array, larger than stack, managed by garbage collector)

// What is the role of the garbage collector? ==================================
// Autometic memory cleanup by deleting objects that are no longer used + helps to manage memory +

// What is the EventEmitter in Node.js, and how does it work? ==================================
// provided by events module + used to click events + emitter.on('greet',(name)=>console.log(hello, ${name})); emitter.emit ('greet','Alice')

// What are streams in Node.js, and how do they improve performance? ==================================
// under fs module + used to stream data + data is read or write in chunks + dont load entire file besides use chucks + fs.createReadStream() 

// How many types of streams? give example code. ==================================
// 4 types +  read, write, duplex (read and write in same time), Tranform (used to manipulate chunk before read or write)

// pipe() method in streams? ==================================
// used to connect a read stream to write stream + readableStream.pipe(writeableStream) 

// How does Node.js handle child processes module, and when should you use them? ==================================
// used to run external scripts + When run cpu intensive operations or external cmd commands, it can block event loop because it takes time so child process keeps main thread non-blocking by creating child_process

// What is the cluster module in Node.js, and how does it help in scaling applications? ==================================
// used for load balancing of server by using multi core cpu processor + create workers + each worker per core + each worker handles incomming requests separately + great for makeing scalable node servers that fully utilize all cpu cores. 

// Difference between cluster module and child_process. ==================================
// cluster module : Scale node.js server using cpu's multi core + used for load balancing of server
// child_process module : used to run external scripts

// How do worker threads differ from cluster? ==========================
// Both are used for Parallelism
// worker_thread : runs tasks in parallel threads inside same process
// cluster module : runs seperate processess to scale server workload

// How would you manage concurrency in node.js application ?  =========================================
// through event loop , callback, Promises, async/await etc.
// 
// how would you manage . in a Node.js application? ==================================
// through worker_threads, child_process, cluster modules.

// Explain the non-blocking I/O model in Node.js. How does it impact performance? =====================
// I/O means operations like reading files, quering database, makeing network requests + blocking I/O means program waits until the operation completes before moveing to next task + Non-blocking I/O means program initiates the operation and keeps running other code immidiately + non-blocking I/O is important in node because it is single theread + if it blocked on I/O operation, node could not handle other requests.


// What are worker threads in Node.js, and how are they used ? =================================
// used to work js in parallel on multiple threads without blocking main event loop thread.

// What are the advantages of using the async/await syntax over callbacks and promises? =======================================
// simplified syntex + avoid callback hell + better error handling with try-catch 

// How do you handle errors in asynchronous code in Node.js? =======================================
// using callback ((err,data)=>{}) + using promises (.catch()) + async/await (try-catch block)

// What are Promises in Node.js, and how do they differ from callbacks?  =======================================
// promise is an object represent eventual compilation of async operation + states: pending, fulfilled, rejected + more powerful than callback + error handling and chaining cleaner 


// How does Node.js handle HTTP requests and responses? Explain how the http module works. =======================
// http requests are handle with http module in node + http module is also used to create HTTP server, send response 

// What is the purpose of the middleware in Express.js, and how is it used in routing? ==================================
// mostly used to authenticate the user + app.use((req,res,next)=>{console.log("hello"); next();})


// How do you handle WebSockets in Node.js for real-time communication? ============================
// provides read time two-way communication + ws library is used 

// How can you manage session state in a stateless environment like Node.js? ===========================
// restfull api are stateless means each request from client must contain all the info every time , server dont retain any info + so we use token or cookies that validate on each request 

// How would you optimize the performance of a Node.js application? ============================
// use non-blocking async code + use cluster or worker_threads etc.

// What tools would you use for load balancing in Node.js? ===========================
// built in cluster module.

// Explain the concept of caching in Node.js. How would you implement caching for better performance? =====================
// to store the data once and next time read it from memory + we use redis library  + also can be saved in node.js's process memory but if server restarts , data is lost + suppose we fetch user details with id 23 from database, every time it will be fetched when requred so we save details in cache on server side + we use server side cache when want to reduce database API calls, data dont change frequently, fast access to frequently used data

// How can you handle large file uploads in Node.js efficiently? =================================
// we can use streams to do that.

// How can you improve the response time of an HTTP server in Node.js? ===========================
// avoid blocking event loop by using async/await + implement caching + use cluster or worker_threads

// What are memory leaks in Node.js, and how do you detect and fix them? ===============================
// when app is using more and more memory without relasing memory that is no longer needed + common cause :  global variables (globals never garbage collected) , setInterval keep running , clousers keep variable references , eventListener not removed + to detect memory leaks we use built in "node -- inspect index.js"



// What is Zero-configuration deployment in Node.js, and how does it impact scalability? ============================
// it is a deployment method in which we push code with minimal or no configrations + varcel,netlify, heroku plateforms commonly used for that + automatically detects the application type, install dependencies, set env variables etc + used to build ci/cd pipeline

// How do you ensure security in a Node.js application? ===============================
// use https + prevent sql injections + cross-site scripting(XSS) + prevent injecting query operators in mongodb + use helmet middleware + implement jwt and bycrytp to hash password + keep senstive data in .env + keep dependencies updated + use CSRF (Cross site request forgery) protection through csurf library + use Strict mode for common bugs + 

// What is cross-site scripting (XSS), and how can you prevent it in a Node.js application? ====================
// attackers inject malicious script like <script>alert("hacked")</script> + can stole cookies or session + to prevent this we use "sanitize-html" library that removes html tags from user input + we can also use "helmet" library that include content-security-policy(CSP) in HTTP headers.


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

// unit testing in a Node.js application? =======================
// Through JEST library or Mocha etc

// What are some best practices you follow when writing a Node.js application?============
// 

// How to make import export work on node.js ? which is better import export or require() ?
// What kind of API function is supported by Node.js?
// What is a module in Node.js?
// What is npm and its advantages?
// What is middleware?
// How does Node.js handle concurrency despite being single-threaded?
// What is the control flow in Node.js?
// What are the main disadvantages of Node.js?
// What is REPL in Node.js?
// How to import a module in Node.js?
// What is the difference between Node.js and AJAX?
// What is package.json in Node.js?
// What is the most popular Node.js framework used these days?
// What are promises in Node.js?
// What is event-driven programming in Node.js?
// What is buffer in Node.js?
// Explain crypto module in Node.js.
// Explain the use of the timers module in Node.js.
// What is the difference between setImmediate() and process.nextTick() methods?
// What is the difference between setTimeout() and setImmediate() methods?
// What is the difference between spawn() and fork() methods?
// Explain the use of the passport module in Node.js.
// What is a fork in Node.js?
// What are the three methods to avoid callback hell?
// What is body-parser in Node.js?
// What is CORS in Node.js?
// Explain the tls module in Node.js.
// How to manage sessions in Node.js?
// Explain the types of streams in Node.js.
// How can we implement authentication and authorization in Node.js?
// Explain the packages used for file uploading in Node.js.
// How to handle database connections in Node.js?
// How to read command line arguments in Node.js?
// What are child processes in Node.js?
// What are the main modules of Node.js? Explain in detail.
// what is middleware ?
// what is JWT ?
// Difference between POST, PUT and GET ?
// Difference between RDBMS and No-sql DBMS ?
// How do you deploy your Nodejs application?
// Do you follow agile or any other SDLC model?
// what is the difference between cluster and thread ?
// What are streams and its type, write a code using the any of the stream.
// What is collection framework
// If you have large csv data how would you process it.
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

// 1. What is Node.js? Where can you use it?
// 2. Why use Node.js?
// 3. How does Node.js work?
// 4. Why is Node.js single-threaded?
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

////////////////////////////////////////////////////////  Practice ////////////////////////////////////////

// Design db of payment gateway interface, cart functionality, amazon delivery service
// Q62. Write a parenthesis validation program in JavaScript

///////////////////////////////////////////////////  Puzzles /////////////////////////////////////////////////

// Asynchronous Programming Patterns: Solve puzzles related to async/await, promises, and callback functions.
// Event Loop and Concurrency: Predict how the event loop handles concurrency and multiple asynchronous operations.
// Streams and Buffers: Solve puzzles involving streams, buffers, and efficient data handling in Node.js.
// Error Handling in Async Code: Implement error handling in asynchronous code using promises or async/await.
// Event Emitters and Pub/Sub Pattern: Use event emitters and the publish/subscribe pattern to create event-driven applications.
// File System Operations: Solve challenges related to reading/writing files using Node.js's fs module.
// Networking and TCP/UDP Sockets: Implement networking solutions using TCP/UDP sockets in Node.js.
// Process and Child Processes: Handle child processes and inter-process communication in Node.js.
// Building and Consuming RESTful APIs: Build RESTful APIs and solve problems related to API development.
// WebSocket and Real-Time Communication: Implement real-time communication using WebSockets in Node.js.
// Dependency Injection and Modularization: Use dependency injection and modularization to structure your Node.js code.
// Middleware in Express: Solve puzzles related to creating custom middleware in Express.js.
// Database Connectivity and ORM/ODM: Connect to databases like MongoDB, MySQL, or PostgreSQL and solve database integration challenges.
// Caching with Redis: Implement caching strategies with Redis to improve performance.
// JWT and Authentication: Solve puzzles related to implementing JWT-based authentication.
// Rate Limiting and Throttling: Use libraries to implement rate limiting and protect APIs from abuse.
// Handling Large JSON or Data Parsing: Solve puzzles that involve parsing large JSON objects and handling big data in Node.js.
// Clustering and Load Balancing: Implement load balancing in Node.js for scaling applications.
// Implementing Worker Threads: Use worker threads to handle CPU-intensive tasks in Node.js.
// Testing with Mocha, Chai, and Jest: Write unit and integration tests for Node.js applications.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
