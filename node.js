// 1. Interview Questions + give example code where required.
// 2. Practice Questions
// 3. Puzzles

////////////////////////////////////////////  interview questions  //////////////////////////////////////////////////////
// Q. How to setup node project ??

// 1. make a project folder.
// 2. open in vs code
// 3. make entry file with index.js
// 4. install package.json with "npm init" in terminal
// 5. install node modules with "npm install" in terminal
// 6. add gitignone file in the project.
// 7. add dependencies as required and add modules and other files as required.

// What is Node.js and it's history?
// how node.js work ?
// what is non blocking I/O in node.js ?
// Event loop in node.js.
// process.nextTick() vs setImmidiate()? 
// setTimeout() vs setIntervel()?  
// Explain the concept of callback hell and how can it be avoided in Node.js? 
// How does Node.js manage memory? 
// What is the role of the garbage collector?
// What is the EventEmitter in Node.js, and how does it work?  
// What are streams in Node.js, and how do they improve performance? 
// How many types of streams? give example code.
// pipe() method in streams?
// How does Node.js handle child processes module, and when should you use them? 
// What is the cluster module in Node.js, and how does it help in scaling applications?
// How would you manage concurrency and parallelism in a Node.js application?
// Explain the non-blocking I/O model in Node.js. How does it impact performance? <=====================
// What are worker threads in Node.js, and how are they used ?
// What are the advantages of using the async/await syntax over callbacks and promises?
// How do you handle errors in asynchronous code in Node.js?
// What are Promises in Node.js, and how do they differ from callbacks?
// Can you explain the concept of Event Loop phases in Node.js?
// How does Node.js handle HTTP requests and responses? Explain how the http module works.
// How would you implement RESTful API with Node.js?
// What is the purpose of the middleware in Express.js, and how is it used in routing?
// Explain the difference between HTTP/1.1 and HTTP/2 in the context of Node.js.
// How do you handle WebSockets in Node.js for real-time communication?
// How would you implement authentication and authorization in a Node.js application?
// How would you secure a Node.js REST API using JWT (JSON Web Tokens)?
// What is the difference between GET and POST HTTP methods in terms of Node.js handling?
// How can you manage session state in a stateless environment like Node.js?
// How would you optimize the performance of a Node.js application?
// How can you profile and debug a Node.js application?
// What tools would you use for load balancing in Node.js?
// Explain the concept of caching in Node.js. How would you implement caching for better performance?
// How can you handle large file uploads in Node.js efficiently?
// How can you improve the response time of an HTTP server in Node.js?
// What are memory leaks in Node.js, and how do you detect and fix them?
// How do you optimize database queries when working with MongoDB in a Node.js application?
// What is Zero-configuration deployment in Node.js, and how does it impact scalability?
// How do you ensure security in a Node.js application?
// What is cross-site scripting (XSS), and how can you prevent it in a Node.js application?
// What is cross-site request forgery (CSRF), and how can you prevent it in Node.js?
// How do you protect sensitive data using encryption in Node.js?
// What is the helmet middleware in Express.js, and how does it help secure an app?
// How would you handle rate limiting in a Node.js application?
// What is CORS (Cross-Origin Resource Sharing), and how do you configure it in Node.js?
// How do you manage OAuth 2.0 authentication in Node.js?
// How would you implement unit testing in a Node.js application?
// What is the purpose of the Mocha framework in Node.js, and how do you use it for testing?
// Explain the concept of Test-Driven Development (TDD) in the context of Node.js.
// What are some best practices you follow when writing a Node.js application?
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
// What is a cluster in Node.js?
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

// What are microtasks and macrotasks in Node.js?

// How does the call stack differ from the event loop queue?

// What is the difference between process.nextTick() and setImmediate()?

// How does Node.js handle blocking code?

// What is the role of the libuv library?

// Explain how timers work in Node.js.

// What happens if you block the event loop?

// How can you monitor and debug event loop lag?

// Explain process.hrtime() and its usage.

// 🧵 2. Concurrency & Parallelism
// Difference between cluster module and child_process.

// How do worker threads differ from cluster?

// How do you manage shared memory between threads?

// What are Atomics in Node.js?

// How do you use MessageChannel and TransferList?

// 🔩 3. Streams & Buffers
// What are the types of streams in Node.js?

// How does backpressure work in streams?

// Difference between fs.createReadStream() and reading entire file at once.

// How do you pipe streams together?

// What is a Duplex stream?

// 📡 4. Networking & HTTP
// How does the HTTP module work in Node.js?

// How would you build an HTTPS server?

// Explain how Node handles connection pooling.

// How to handle socket hang-up errors?

// What’s the difference between keep-alive and upgrade headers?

// 💬 5. WebSockets & Real-time
// How do you implement WebSockets in Node.js?

// What is the role of the ws module?

// Difference between polling and WebSockets.

// How does Socket.IO differ from native WebSockets?

// How do you handle authentication in real-time apps?

// 📦 6. Modules & Imports
// Difference between CommonJS and ES Modules in Node.js.

// How does Node.js resolve module paths?

// What is a cyclic dependency, and how does Node handle it?

// How to create custom native addons?

// How do you cache modules in Node.js?

// 🗃️ 7. File System & OS
// Difference between fs.readFile and fs.promises.readFile.

// How to watch for file changes?

// What is the purpose of fs.fsync()?

// How do you handle large file uploads/downloads?

// How does Node interact with the underlying OS?

// 🔐 8. Security
// How to protect against injection attacks?

// What is the purpose of Helmet.js?

// How to securely store API keys and secrets?

// How does Node handle TLS/SSL?

// How to prevent DOS attacks in Node.js?

// 🔁 9. Asynchronous Programming
// Difference between callbacks, promises, and async/await.

// How to handle multiple promises concurrently?

// What is the Promise.race() method?

// How to retry a failed async operation?

// What are async generators?

// 🧪 10. Testing & Debugging
// How do you test asynchronous code in Node.js?

// What are the best practices for unit testing?

// Difference between mocha, jest, and ava.

// How do you mock dependencies in tests?

// How do you debug memory leaks?

// 🚦 11. Error Handling
// Difference between operational and programmer errors.

// How do you catch async/await errors?

// What is unhandledRejection and how do you handle it?

// How does Node.js handle synchronous exceptions?

// Explain try/catch vs. .catch() for promises.

// 🔄 12. Process Management
// Difference between process.exit() and uncaughtException.

// How to handle graceful shutdown in Node?

// How to fork processes in Node?

// Explain child_process.exec() vs spawn().

// What is a zombie process?

// 🚀 13. Performance & Optimization
// How do you measure Node.js performance?

// What are memory leaks and how to find them?

// How to use clinic.js or node --inspect?

// How do you improve startup time in Node?

// How do you handle CPU-intensive tasks?

// 🧰 14. Tools & Ecosystem
// Difference between npm and yarn.

// What is nvm and why use it?

// How does Webpack help in Node.js development?

// How to use PM2 for process management?

// What are monorepos and how do tools like Lerna help?

// 🏗️ 15. Architecture & Design
// What is a microservice architecture in Node.js?

// How do you handle inter-service communication?

// Explain the 12-Factor App methodology.

// How to use message queues with Node.js?

// What is an event-driven architecture?

// 🌐 16. API & Express.js
// How to handle rate limiting in Express?

// How do middlewares work?

// Difference between global and route-specific middleware.

// How to structure a scalable Express app?

// How to handle file uploads securely?

// 🧱 17. Data Handling
// How to handle JSON streaming?

// How to prevent JSON overflows?

// What is schema validation and how to implement it?

// Difference between ORM and query builders.

// How to sanitize user input in APIs?

// 🛢️ 18. Database Integration
// How to handle database pooling in Node.js?

// What is optimistic concurrency control?

// Difference between MongoDB and PostgreSQL integration in Node.

// How to perform transactions in Node.js?

// How to prevent N+1 query problems?

// 📈 19. Logging & Monitoring
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
