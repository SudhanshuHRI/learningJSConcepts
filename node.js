// 1. Interview Questions + give example code where required.
// 2. Practice Questions
// 3. Puzzles

////////////////////////////////////////////  interview questions  //////////////////////////////////////////////////////
// Q. How to setup node project ??======================================
// Ans. to make a project of Node.js follow the steps--------------------

// 1. make a project folder.
// 2. open in vs code
// 3. make entry file with index.js
// 4. install package.json with "npm init" in terminal
// 5. install node modules with "npm install" in terminal
// 6. add gitignone file in the project.
// 7. add dependencies as required and add modules and other files as required.

//. Q.What is Node.js and it's history?========================================================
// Ans. open source + runtime environment to run on server + built on js's v8 + asynchronours + single threaded  +  with event loop +  rich eco system like npm + cross plateform supported + created 2009  by Ryan Dahl + writen in c, c++, javascript

// Q. how node.js work?===============================================
// Ans. Asynchronous node architecure have following component:-
// 1. code : Place where code is written
// 2. call Stack : first function register here + call stack have default function called main(). if we use calculation without any funciton , then it will go in main() + works on FILO +
// 3. Node API / Web API :- functinos inherite from c, c++ will go here + like setTimeout() + first which task is completed, it will go to callback queue +
// 4.callback queue : it will get those funcition that have completed excution in node API +
// 5.event loop : it pushes callback queue task to call stack.

// Reference video:-https://www.youtube.com/watch?v=mGVFltBxLKU&t=619s

// Q. what is non blocking I/O in node.js ?=========================================================
// Ans. node dont wait for tasks like database queries and file system to finish before moving on to the next operation.

// Q. How async tasks are handled in node.js ?=================================================================
//Ans. through callback, promises, async/await.

// Q.`What is the purpose of the process.nextTick() method?========================================================
// Ans. it is used to shedule a callback funtion that excute immidiately after current operation completes + used to do high priority task + it will excute first in setTimeout()s
// eg:-
// console.log("start")
// setTimeout(() => {
//     console.log("Timeout");
//   }, 0);

//   process.nextTick(() => {
//     console.log("NextTick");
//   });

//   console.log("stop");

// Q. What is the use of the setImmediate() function in Node.js?=====================================================
// Ans. used same for process.nextTick() + setImmediate have preference over setTimeout()  but not the process.nextTick();
// example:-
// console.log("Start")
// setTimeout(() => console.log("Timeout"),0);
// setImmediate(() => console.log("Immediate"));
// process.nextTick(() => console.log("Next Tick"));
// console.log("end");

// Q.Explain the concept of callback hell and how can it be avoided in Node.js?===============================================
// Ans. setting nested callbacks in same function will create callback hell + to avoid it use named functions, use Promise, use Async/await
// eg:-
// fs.readFile('file1.txt', (err, data1) => {
//     if (err) throw err;
//     fs.readFile('file2.txt', (err, data2) => {
//       if (err) throw err;
//       fs.writeFile('output.txt', data1 + data2, (err) => {
//         if (err) throw err;
//         console.log('Files merged successfully');
//       });
//     });
//   });

// Q.What is the difference between setTimeout() and setInterval() in Node.js?===============================================
// Ans. setTimeout():- excute code after given seconds + const setTiomeoutID = setTimeout(()=>{}) + clearTimeout(setTimeoutID)
// setInterval():- excute code repetedly after given seconds + const setIntervelID = setIntervel(()=>{}) + clearInterveal(setIntervelID)

// Q.How does Node.js manage memory?========================================================
// Ans. node uses 2 type of memmory:-
// 1.Stack memory: LIFO + faster + stores variable , function when called and arguments
// 2.Heap memory : slower + stores objects and array

// Q.What is the role of the garbage collector?========================================================
// Ans. used for automatic memory management + when memory is about to fill , it is activated and removes unused variables and object from memory

// Q. What is the EventEmitter in Node.js, and how does it work?======================================================
// Ans. core built-in module in node + event means trigger to excute something + it is used to keep track of events in node.js + in node we trigger a event when we hit api (in front end we fire or create event by pressing a button) + suppose in application we have 5 apis /home, /about, /form, /contact, /projects. we want to count how many times /about api is hit(or event created). So, for that we use event Emmiter.
// eg:-

// const EventEmitter = require("events");
// const event = new EventEmitter();
// let count = 0;

// // function for tracking action
// event.on("countAPI", () => {
//   count = count + 1;
//   console.log("total API hit:", count);
// });

// app.get("/about", (req, res) => {
//   res.send("api hit");
//   event.emit("countAPI");
// });

// Q.What are streams in Node.js, and how do they improve performance?======================================================
// Ans. streams are objects to read or write data from source in real time + data send in chunks in it + effective for large files + consume memory of current chunk not whole file so saves memory, saves time becz at first chunk it starts working + mostly used in fs + streaming have 4 events: data,end,error,finish.

// Q.How many types of streams? give example code.=======================================================================
// Ans.
// 1. readable Stream: used for reading
// 2. Writeable Stream: used for writing
// 3. Duplex Stream: used for writing and reading
// 4. transform Stream: used where output is computed based of input

// eg:-

// 1. read stream:-
// const fs = require('fs');

// const readableStream = fs.createReadStream('input.txt', 'utf8');

// readableStream.on('data', (chunk) => {
//   console.log(`Received chunk: ${chunk}`);
// });

// readableStream.on('end', () => {
//   console.log('No more data to read.');
// });

// readableStream.on('error', (err) => {
//   console.error(`Error: ${err.message}`);
// });

// 2. Write Stream:-
// const writableStream = fs.createWriteStream('output.txt');

// writableStream.write('This is the first line.\n');
// writableStream.write('This is the second line.\n');

// // Signal that no more data will be written
// writableStream.end();

// // Listen to the 'finish' event to know when writing is done
// writableStream.on('finish', () => {
//   console.log('Finished writing to the file.');
// });

// // Handle errors
// writableStream.on('error', (err) => {
//   console.error(`Error: ${err.message}`);
// });

// 3. Duplex Stream:-
// const net = require('net');

// // Create a server using a duplex stream (socket)
// const server = net.createServer((socket) => {
//   console.log('Client connected.');

//   // Read data from the client and send it back (echo)
//   socket.on('data', (data) => {
//     console.log(`Received: ${data}`);
//     socket.write(`Echo: ${data}`);
//   });

//   // Handle client disconnection
//   socket.on('end', () => {
//     console.log('Client disconnected.');
//   });

//   // Handle errors
//   socket.on('error', (err) => {
//     console.error(`Error: ${err.message}`);
//   });
// });

// // Start the server
// server.listen(8080, () => {
//   console.log('Server is running on port 8080.');
// });

// 4. tramform Stream:-
// const { Transform } = require('stream');

// // Create a transform stream that converts input to uppercase
// const uppercaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     const uppercased = chunk.toString().toUpperCase();
//     callback(null, uppercased);
//   },
// });

// // Pipe data through the transform stream
// process.stdin.pipe(uppercaseTransform).pipe(process.stdout);

// Q. ".pipe()" method in streams?==========================================================================
// Ans. it allows to connect to readable stream  and write it as recieves data + it automatic manages backpressure
// eg:-
// const readableStream = fs.createReadStream('input.txt');
// const writableStream = fs.createWriteStream('output.txt');

// //Pipe the readable stream into the writable stream
// readableStream.pipe(writableStream);

// writableStream.on('finish', () => {
//   console.log('File copied successfully.');
// });


// Q. How does Node.js handle child processes, and when should you use them?  ========================================================
// Ans. child_process is built-in module + allows to create and manage child process + useful when need to excute system commands , run other program, perform expensice in parallel to avoid blocking event loop. 

// What is the cluster module in Node.js, and how does it help in scaling applications?
// How would you manage concurrency and parallelism in a Node.js application?
// Explain the non-blocking I/O model in Node.js. How does it impact performance?
// What are worker threads in Node.js, and how are they used?
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
//
//
// 4. What kind of API function is supported by Node.js?
// 5. What is a module in Node.js?
// 6. What is npm and its advantages?
// 7. What is middleware?
// 8. How does Node.js handle concurrency despite being single-threaded?
// 9. What is the control flow in Node.js?
// 10. What do you mean by the event loop in Node.js?
// 11. What are the main disadvantages of Node.js?
// 12. What is REPL in Node.js?
// 13. How to import a module in Node.js?
// 14. What is the difference between Node.js and AJAX?
// 15. What is package.json in Node.js?
// 16. What is the most popular Node.js framework used these days?
// 17. What are promises in Node.js?
// 18. What is event-driven programming in Node.js?
// 19. What is buffer in Node.js?
// 20. What are streams in Node.js?
// 21. Explain crypto module in Node.js.
// 22. What is callback hell?
// 23. Explain the use of the timers module in Node.js.
// 24. What is the difference between setImmediate() and process.nextTick() methods?
// 25. What is the difference between setTimeout() and setImmediate() methods?
// 26. What is the difference between spawn() and fork() methods?
// 27. Explain the use of the passport module in Node.js.
// 28. What is a fork in Node.js?
// 29. What are the three methods to avoid callback hell?
// 30. What is body-parser in Node.js?
// 31. What is CORS in Node.js?
// 32. Explain the tls module in Node.js.
// 33. What is a cluster in Node.js?
// 34. How to manage sessions in Node.js?
// 35. Explain the types of streams in Node.js.
// 36. How can we implement authentication and authorization in Node.js?
// 37. Explain the packages used for file uploading in Node.js.
// 38. How to handle database connections in Node.js?
// 39. How to read command line arguments in Node.js?
// 40. What are child processes in Node.js?

// Q1. 2. What are the main modules of Node.js? Explain in detail.
// Q2. what is middleware ?
// Q.what is JWT ?
// Q.Difference between POST, PUT and GET ?
// Q. Difference between RDBMS and No-sql DBMS ?
// Q4. How do you deploy your Nodejs application?
// Q6. Do you follow agile or any other SDLC model?
// Q7. what is the difference between cluster and thread ?
// Q8. What are streams and its type, write a code using the any of the stream.
// Q10. What is collection framework
// Q11. If you have large csv data how would you process it.
// Q12. What is error first callback function?
// Q16. When did you used and where did you used redis cache
// Q17. How does Nodejs differentiate and handle synchronous and asynchronous task
// Q20. What is encapsulation
// Q23. How can a linked list be created without utilizing arrays?
// Q28. Difference between public, private, protected access modifiers.
// Q29. How to make Nodejs handle multiple thread
// Q32. What's swagger and how to add authentication in swagger
// Q42. What is OAuth and how you implement it?
// Q48. Fork vs spawn and when you used this
// Q49. How to implement caching using rabitmq
// Q60. what is the role of libuv ?
// Q69. how to scale app for more users
// Q78. What is cyclic dependency in. Node js
// Q79. What is Pharmacovilance
// Q96. Explain about Microservices Architecture

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
// Differentiate between process.nextTick() and setImmediate()?
// If Node.js is single threaded then how does it handle concurrency?
// What is an event-loop in Node JS?
// What do you understand by callback hell?
// What is an Event Emitter in Node.js?
// Enhancing Node.js performance through clustering.
// What is a thread pool and which library handles it in Node.js
// What is WASI and why is it being introduced?
// How are worker threads different from clusters?
// How to measure the duration of async operations?
// How to measure the performance of async operations?
////////////////////////////////////////////////////////  Practice ////////////////////////////////////////

//Design db of payment gateway interface, cart functionality, amazon delivery service
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
