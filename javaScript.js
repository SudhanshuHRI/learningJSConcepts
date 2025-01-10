///////////////////////////////////////////////////// Practice Questions for DSA ///////////////////////////////////////////

// 1. Program to find longest word in a given sentence ?
//  2. How to check whether a string is palindrome or not ?
//  3. Write a program to remove duplicates from an array ?
//  4. Program to find Reverse of a string without using built-in method ?
//  5. Find the max count of consecutive 1’s in an array ?
//  6. Find the factorial of given number ?
//  7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ? hint:- sorting can done by destructuing swaping
//  8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same. ex-arr1 = [1, 2, 2]; arr2 = [1, 4, 9]; then it will give [true,true,false]
//  9. Given two strings. Find if one string can be formed by rearranging the letters of other string.  find anagrams
//  10. Write logic to get unique objects from below array ?
//  I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
//  O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
//  11. Write a JavaScript program to find the maximum number in an array.
//  12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//  13. Write a JavaScript function to check if a given number is prime.
//  14. Write a JavaScript program to find the largest element in a nested array.
//  [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
//  15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
//  16. Given a string, write a javascript function to count the occurrences of each character in the string.
//  17. Write a javascript function that sorts an array of numbers in ascending order.
//  18. Write a javascript function that sorts an array of numbers in descending order.
//  19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
//  20. Implement a javascript function that flattens a nested array into a single-dimensional array.
// write a program to find element accurence in array; ex-{1:2,4:6,8:7times}
// remove duplicate from array
// multiply 2 no without multiply sign
// document.designMode = 'on'

//////////////////////////////////////////////////// Puzzle topics //////////////////////////////////////////////

// Scope and Closure Puzzles: Challenge yourself to identify variables in different scopes and predict closures' behavior.
// Hoisting Puzzles: Figure out how JavaScript hoists variables and functions and predict the result of variable assignments and function calls.
// Event Loop and Asynchronous Behavior Puzzles: Predict the sequence of execution in asynchronous code and how events are processed.
// Object and Prototype Puzzles: Solve puzzles involving inheritance and prototype chains.
// Type Coercion and Comparison Puzzles: Work with type coercion in JavaScript and understand how comparisons behave under type conversion. //////Done
// Function and Execution Context Puzzles: Delve into execution contexts and the stack, and solve puzzles related to this and function calls.
// Array and String Manipulation Puzzles: Solve challenges involving sorting, slicing, and other array manipulations.
// Algorithm and Data Structure Puzzles: Practice solving common algorithmic challenges like sorting, searching, and optimization.
// Destructuring and Spread Operator Puzzles: Solve puzzles that involve destructuring arrays and objects, and using the spread operator for both objects and arrays.
// Regular Expression Puzzles: Challenge yourself to write regular expressions that match specific patterns.
// Error Handling and Exception Puzzles: Predict and handle errors in code, such as try-catch blocks and asynchronous error handling.
// Bitwise Operations Puzzles: Solve challenges using bitwise operators for efficient calculations.
// Logical Puzzles and Challenges: Solve logical puzzles that require reasoning through JavaScript’s behavior.
// Functional Programming Puzzles: Work with higher-order functions, immutability, and pure functions.
// Performance and Optimization Puzzles: Optimize code for performance and solve challenges related to memory usage and execution time.
// Recursion Puzzles: Solve puzzles that involve recursive function calls.
// Promise and Async/Await Puzzles: Dive into asynchronous code and solve challenges using promises and async/await.
// Destructuring and Template Literal Puzzles: Combine destructuring with template literals to solve complex puzzles.
// Garbage Collection and Memory Puzzles: Solve puzzles related to garbage collection and memory management.
// Date and Time Puzzles: Work with JavaScript's Date object and solve puzzles related to date/time manipulation.


/////////////////////////////////////////  interview questions  ////////////////////////////////////////////////////////

// Q. What are Call, apply and bind methods? ============================================================

// Ans. when we want to attach a function to different object for re-use then we use these methods.

// Problem:-
// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// let student = {
//   firstName: "Sudhanshu",
//   lastName: "Srivastava",
//   getFullName: getFullName(this.firstName, this.lastName),
// };

// console.log(student.getFullName); // here it will come undefined undefined so we need call apply bind methods + normal functions cannot be called in object for reuse

// => call() :- it invokes immidiately + set "this" value to first argument + takes two arguments + second argument is optional. + attached function called autometically
// example : -

// let student = {
//   firstName: "Sudhanshu",
//   lastName: "Srivastava",
// };

// let teacher = {
//   firstName: "Anil",
//   lastName: "Siddhu",
// };

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

//console.log(getFullName.call(student)); // here getFullName function is attached with student's object.
//console.log(getFullName.call(teacher)); // here getFullName function is attached with techer's object.

// function chooseSubject(sub1,sub2){
//     return [sub1,sub2]
// }

//console.log(chooseSubject.call(teacher,"maths","hindi")) // here cooseSubject function is attached with teacher object and 2 arguments are passed in chooseSubject(). if we want to send a lot of arguments then we use apply() method. call() takes any datatype of params.

// => apply() :- similer to call() but takes arguments in array. it takes only array as params + function called autometically
// example:-

//console.log(chooseSubject.apply(teacher,["maths","hindi"]))

// => bind() :- did not invokes immidiately + returns a function +  attach function in object but dont call it + it can called when ever required.
//example:-
//  let bindVariable = getFullName.bind(teacher) // here getFullName function in bind with teacher object but dont call it by self.

//  console.log(bindVariable());


// Q.diff between var let const ? ============================================================
// Ans.
// var : function scope + hoisted + allowed to redeclare in same scope and reassign values
// let : block scoped + hoisted but can't use it before declaration + can't redeclare in same scope but reassign value ;
// const : block scoped + hoisted but cant use it before declaration + can't redeclare and can't reassign;

// Q.What are callback function ? Give disadvantages ============================================================
// Ans. functiion that passed as argument to another function + excuted when parent function excuted fully + used in asyncronous programming
// => disadvantages : nested callback (also known as callback hell) is hard + defecult debugging

// Q. What are ES6 features ?? ==========================================================
// Ans.
// 1. block scoped variabels (let, const)
// 2. Arrow function
// 3. templete letrals
// 4. Rest and spread operators
// 5. array and object destructuring .
// eg- const [a,b] = [1,2];
// const {name,age} = {name:"John",age:25}

// Q. difference between normal funciton and arrow funciton ? ====================================================
// Ans. 'this' dont work in arrow function  +  arrow function dont have default "arguments" object so we have to use rest parameter in it +  it is not required to write "return" in single line function

// Q. all built - in array functions in react==================================================
// Ans. React dont have any built in methods. it takes form js.
// 1. forEach() :- itrate over each element + dont return array + params - value,index,array
// 2. map() :- itrate over each element + return array + params - value,index,array
// 3. filter( ) :- returns array with filter value / const even = [1, 2, 3, 4].filter(num => num % 2 === 0);
// 4. find() :- returns first element that satisfies the condition / const found = [1, 2, 3].find(num => num > 2); // 3
// 5. findIndex() :- returns the index of first element that satisfies condition
// 6. some() :- checks if at least one element satisfies the condition.
// 7. every() :- checks if all elements satisfies the condition.
// 8. push():-  to add element on last index of array.
// 9. pop():- removes last element.
// 10. unshift(value) :- add element on first index.
// 11. shift ():- removes first element .
// 12. splice() :- add or remove elements at specific index + returns arry containing removed elements + if no elements removed, return blank array + arr.splice(1,2) means remove 2 elements starting from 1 index + arr.splice(1,0,2,3) means add 2 and 3 at index 1 without removing anything + arr.splice(0) means remove all elements from array.
// 13. concat() :- add two array.
// 14. slice():- remove portion in array + returnes new array + params-start,end / const subArray = [1, 2, 3, 4].slice(1, 3); // [2, 3]
// 15. reduce():- Reduces the array to a single value by applying a callback. / const sum = [1, 2, 3].reduce((acc, num) => acc + num, 0); // 6
// 16. reduceRight():- Similar to reduce but starts from the end of the array. / const reversed = [1, 2, 3].reduceRight((acc, num) => acc + num, ''); // '321'
// 17. sort():- sorts array by converting elements in string. / const sorted = [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
// 18. reverse() : - reverse array.
// 19. includes():- checks if array contains specific value.
// 20. indexOf() :- to know the index of element. /const index = [1, 2, 3].indexOf(2); // 1
// 21. lastIndexOf() :- returns last index of value. / const lastIndex = [1, 2, 3, 2].lastIndexOf(2); // 3
// 22. join():- join all elemnts with secific separator. / const joined = [1, 2, 3].join('-'); // '1-2-3'
// 23. Array.from('123') :- creates an array of [1,2,3] /const arr = Array.from('123'); // ['1', '2', '3']
// 24. Array.of(1,2,3):- creates array of [1,2,3] / const arr = Array.of(1, 2, 3); // [1, 2, 3]

// Q.slice vs splice who modify orignal array?? =================================================================
// Ans.
// 1.slice():- dont modify orignal array + gives copy of portion of array + arguments- start,end + arr.slice(1,4)
// 2.splice():- modify orignal array + add/remove/replace elements + arr.splice(1, 2, "a", "b"); // Removes 2 items starting from index 1 and adds "a" and "b"

// Q.all object buit-in functions??

// 1.Object.create():- Create an object with a specified prototype.
// 2.Object.assign():- 	Shallow copy properties into a target object.
// 3.Object.keys():- 	Get enumerable property names.
// 4.object.values():- Get enumerable property values.
// 5.object.entries():- 	Get key-value pairs as arrays.
// 6.Object.getOwnPropertyNames():- Get all property names (including non-enumerable).
// 7.Object.defineProperty():- 	Define or modify a property.
// 8.object.freeze():- 	Freeze an object to make it immutable.
// 9.object.seal():- 	Prevent adding/removing properties.
// 10. object.is():- 	Compare values with improved edge cases.

// Q. pure functions and impure functions in js and what are side effects in js. ======================================
// Ans. if we have a component, when we pass 2 variable in a function whose value is static and not changing in whole component then those funtion's output will always return same because we pass static variables as a parameters. so it will called pure function. when we pass dynamic variable or state whos value is changing in compnent then each time output of a function will change so it will called impure function.
// side effect :- side effect is called when function update variable or state's value in it.

// Q.Difference between promise and async await ?===========================================================================================
// Ans. Promise : - it is a object + uses .then() and .catch()  + harder to readable + uses .catch() to hadle error
// Async/await :- uses async and await keyword + easy to read + uses try-catch to handle error

// Q. throw keyword in js ?=============================================================================
// Ans. throw stops the excution of current function and pass the error to the catch block of calling function + if we use try-catch block, throw will send error in catch function.

// Q.controlled and uncontrolled components?========================================================================
// Ans.
// controlled:- when input fields controlled by state
// uncontrolled:- those who directly controlled by DOM + get input field value with getElementById +

// Q.Explain about the Oops concepts.========================================================================
// Ans. 4 priciple-
// 1.Encapsulation:- building data and methods and restricting direact access to database + goal is data security and integrity.
// 2. Abstraction:- hiding implimentation details and exposing only essential features + goal is to simplify complexicity
// 3. inheritance:- reusing properties and behaviours of parent class + goal is code reuse and hierarchy.
// 4. polimorphism:- one function have multiple features + goal is flexibility and reuse.

// Q.what is use strict in js?===========================================
// Ans. with this we cannot use variable without declaring + it maintains syntex validation in js + added in ES5 + it is implimented only on that function

// Q. setTimeout vs setInterval
// Ans. both used to shedule the excution of function
// 1.setTimeout:- excutes the function when time is completed + we can also clear it by using clearTimeout();
// eg:-
// const timeoutId = setTimeout(() => {
//   console.log("This won't be executed");
// }, 2000);

// clearTimeout(timeoutId); // Cancels the timeout

// 2.setInterval:- excute the function repeted when time is over.
// eg:-
// const intervalId = setInterval(() => {
//   console.log("This will console every 1 sec");
// }, 1000);

//   clearInterval(intervalId); // Cancel the intervel


// spread and rest operator
// promise vs callback
// event bubbling and event capturing
// 
// null vs undefined
// all false values in js
// setTimeout vs setInterval
// object.seal vs object.freeze
// weakmap vs weakSet.
// json.stringify vs parse
// how to stop event prapagation in js
// what is dead zone in js
// what is mutation observer in js
// Q.high order functions??
// Ans. it is a function that accepts function as parameter and returns function. eg:-map(),filter(), reduce(),some() etc.
// 
// Module, Factory, Observer, and Singleton
// Memory Leaks


//////////////////////////////////////////////// working of JS /////////////////////////////////////////////////////////////////

// => Crome's v8 engine have 2 parts :- 1.Memeory Heap, 2. Call Stack.
// => Memeory Heap :- where variable are saved. browser's memeory
// => Call Stack :- a container in which tasks are stored line wise. it works on FILO(first in last out).
//=> js is single threaded. means it has single call stack so it can do only one task in one time.
// => js is single threaded and syncronous by default but it has built in features to handl async operations like callback, Promises, async/await, Event loop.
//=>syncronise example:-
// console.log("start")
// console.log("end")

// => async example:-

// console.log("start");
// setTimeout(() => console.log("async operation"), 2000);
// console.log("end");

// => js use event loop and task que to manage asyncronous operation without blocking main thread. it helps in fetching api and file reading
// => in call stack which task is on top it will excute first.

//*code                                //*WebAPI
// *task Que/callback que
//*call stack                  //*event loop

// 𝟏. 𝐂𝐚𝐥𝐥 𝐒𝐭𝐚𝐜𝐤: 
// - This is where JavaScript runs your code one step at a time.

// 𝟐. 𝐖𝐞𝐛 𝐀𝐏𝐈𝐬: 
// - Things like setTimeout or fetching data are handled outside the Call Stack by Web APIs provided by the browser.

// 𝟑. 𝐂𝐚𝐥𝐥𝐛𝐚𝐜𝐤 𝐐𝐮𝐞𝐮𝐞: 
// - Once a task (like a timer or data fetch) is done, the result goes to the Callback Queue, waiting for the Call Stack to be empty.

// 𝟒. 𝐄𝐯𝐞𝐧𝐭 𝐋𝐨𝐨𝐩: 
// - The Event Loop keeps checking if the Call Stack is empty. When it is, it takes the next task from the Callback Queue and puts it in the Call Stack to run.

// ==> while excuting call stack container 's task, if any task comes who takes time, it send to callback que container(container that contains all callbacks). tasks stored in  callback que goes to webAPI container to excute(excuted by ajax and DOM) one by one. when task is completed by webAPI then it comes back in callback que. Then event loop pushes that task back in call stack.

// reference links :- 1. https://www.jsv9000.app
//                     2. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=14
//                     3. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=15

/////////////////////////////////////// Laxical Scope and closures //////////////////////////////////////////////////////

// Laxical Scope => when inner function can access outer function's variable. eg-

// function hello(){
//     var a = 10;

//     function innerFunction (){
//         return a;
//     }

//     return innerFunction();
// }

// console.log(hello())

// Clousers => it is a inner function who remembers outer function's variables while outer function is excuted fully.eg-

// function hello() {
//   var a = 10;
//   function innerFunction() {
//     return a;
//   }
//   return innerFunction;
// }

// var inner = hello();

// console.log(inner());//10

///////////////////////////////////////////////// Promises in JS //////////////////////////////////////////////////////////////

// => it is a object which returns a value which can be recived in future. Promise means task will ither solve or reject.
// => JS is single threaded so it dont wait for function to excute fully when it takes time to excute. if it takes time, js start excuting next code.
// => fetch() always returns 2 Promieses. so we use 2 times .then and await. it's called "Promise chaining". it can be more then 2 .
// => then() function takes a call back. it is excuted when Promise is completed(resolve or reject)
//=> catch() function is used to check the error or Promise rejected.
//=>finally function is used whether Promise resolve or reject, this function will excute 100%.

// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//     //reject("Promiese rejected");
//     // here if we use both so first will excute and second will not.
//   }, 2000);
// });

// data
//   .then((item1) => {
//     console.log("item1", item1);
//     return item1;
//   })
//   .then((item2) => {
//     console.log("item2", item2);
//   })
//   .catch((error) => {
//     console.log("error is:", error);
//   })
//   .finally(() => {
//     console.log("finally statement excuted");
//   });

/////////////////////////////////////////// Promise.all / Promies.allsettled / Promise.race ///////////////////////////////

//=> Promiese.all :- used when multiple promises is used + when all Promise completed then it will give response + if any reject it will response reject + it will not tell other promises solved or rejected  + it takes array and console's array + eg-

// let data = Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2 sec promise resolved");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3 sec promise resolved");
//     }, 3000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("4 sec promise resolved");
//     }, 4000);
//   }),
// ]);

// data.then((item1)=>{return item1}).then((item2)=>{console.log("item2",item2)})

// => Promise.allSettled :- it responds which promise is resolved and which is rejected + it consoles array of objects + it responds when all promise completed. eg-

// let data = Promise.allSettled([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2 sec promise resolved");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3 sec promise resolved");
//     }, 3000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("4 sec promise rejected");
//     }, 4000);
//   }),
// ]);

// data.then((item1)=>{return item1}).then((item2)=>{console.log("item2",item2)})

//=> Promise.race : -  which promise first resolves or rejected, it returnes that. eg-

// let data = Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("2 sec promise resolved");
//     }, 2000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("3 sec promise resolved");
//     }, 3000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("4 sec promise rejected");
//     }, 4000);
//   }),
// ]);

// data.then((item1)=>{return item1}).then((item2)=>{console.log("item2",item2)})

//////////////////////////////////////// Prototypes in JS ////////////////////////////////////////////

// => prototypes are concepts in which object inherit features from one another + before Ecma script , prototypes are used
// => eg-

// let student = {
//     firstName:"Sudhanshu",
//     lastName:"Srivastava",
//     getFullName: function (){
//         return this.firstName +" " + this.lastName
//     }
// }

// let teacher  = {
//     firstName:"Anil",
//     lastName:"Sidhu",
//     getFullName:function(){
//         return this.firstName + " " + this.lastName
//     }
// }

// => here getFullName is used in both objects. So, we use prototype. eg-;

// let person = {
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// let student = {
//   firstName: "Sudhanshu",
//   lastName: "Srivastava",
// };
// let teacher = {
//   firstName: "Anil",
//   lastName: "Sidhau",
// };

// student.__proto__ = person;
// teacher.__proto__ = person;

// console.log(student.getFullName());
// console.log(teacher.getFullName());

//=> if you want to do same without prototype then :-

// let person = {
//     getFullName: function () {
//       return this.firstName + " " + this.lastName;
//     },
//   };

//   let student = {
//     firstName: "Sudhanshu",
//     lastName: "Srivastava",
//     getFullName:person.getFullName
//   };
//   let teacher = {
//     firstName: "Anil",
//     lastName: "Sidhau",
//     getFullName:person.getFullName
//   };

//   console.log(student.getFullName());
//   console.log(teacher.getFullName());

// =>  here we dont use prototype. but if we use prototype, property will load when required while without it is default loaded.

// => if you want that in all object used in project a variable or function is stored by default then :-
// Object.prototype.defaultData = "This is default data";
// var a = {};
// console.log(a.defaultData);

//=> Same for string:-
// String.prototype.defaultData = "This is string default data"
// var a = "this is a string"
// console.log(a.defaultData)

//////////////////////////////////////////////// Deep copy and shallow copy //////////////////////////////////////////

// let obj ={
//     name:"Peter"
// }

// let user = obj;

// user.name = "Bruce"
// console.log(obj) //Bruce beacuse when we copy object it copy only referenct not value so obj's value is changed. variable copy only value

// =>  to solve refrence issue we use shallow copy and deep copy.

// => Shallow copy : - it works only on first level of object. it copy object values of first level.  eg:-

// let obj = {
//   name: "Peter",
// };

// let user = Object.assign({}, obj);
// user.name = "Bruce";
// console.log(obj);

// => Deep copy:- to copy all levels of object values, we use Deep copy . also deep copy dont work with data and functions. eg:-
//     let obj = {
//         name:"Peter",
//         address:{
//             city:"Faridabad",
//             state:"Haryana",
//             country:"India"
//         }
//     }

// let user = JSON.parse(JSON.stringify(obj))
// user.address.city = "Gurgaon";
// console.log(obj)
// console.log(user)

//////////////////////////////////////////////////// Generator functions in Js //////////////////////////////////////////////////////////

// => These are functions whoes excution we can control. we can pause and resume their excution. eg -
// function* simpleGenerator (){
//     console.log("function activated");
//     console.log("step 1 start")
//     yield "Reached at step 1";
//     console.log("step 2 start");
//     yield "Reached at step 2";
//     console.log("step3 start")
//     yield 'Reached at step 3'
//     console.log("function deactivated")
// }

// let simpleGen = simpleGenerator();

// console.log(simpleGen.next())
// console.log(simpleGen.next())
// console.log(simpleGen.next())
// console.log(simpleGen.next())

// => we have to call the function each time to count steps. also value written in front of yield with be console in object. when all steps completed  it will console "{value:undefined, done:true}"

////////////////////////////////////////////////////// Quama Operator ////////////////////////////////////////////////

// let x = 10;
// let y = 20;

// x = ((y += 20), y);
// console.log(x) // here first argument (y = y+20) is calculated and stored in y and second argument y is printed.

// => in quama operator first argument is calculated and second argument will be print . it is important to store first argument calculation result in a variable.

/////////////////////////////////  Some definations in JS ///////////////////////////////////////////////

// => optional chaining operator (?.) is used to avoid errors while accessing object's properties.

// => Nullish coalescing operaotr (??) is Ecma script feature. eg -  const result = value ?? defaultValue; //here if value is null or undefined, it will take dafault value.

// => matchAll() is Ecma script feature. powerful way to find all maches in string. eg-
// const str = "The rain in Spain stays mainly in the plain.";
// const regex = /in/g;

// const matches = str.matchAll(regex);

// for (const match of matches) {
//   console.log(match);
// }

// => str.at() method is used to find index of specific charactor. eg-
// let str = "hello world"
// console.log(str.at(6))

// => map vs foreach function :- map function returns new array and foreach function dont return anything.
// => navigator object is used to get information about browser in js
// => how to know in js if function is called by use click or by any script? button me onclick me jo function call hota hai use event object pass hota hai. to if event.isTrusted==true then user clicked and if false then script clicked.

///////////////////////////////////////////  some object concepts //////////////////////////////////////

// =>  in js object is collection of related data or functionallity.
// => if we declare object in const, we can change their property but cannot reassign that object.
// => to delete any property or function from object- delete user.name;
// =>if we want to access or assign a object's property who contains space then :- user['pin code'] = 241001;

// let key = "State";
// let city = "hardoi"

// const user = {
//     name:"peter",
//     ['pin code']: 241001, // if contains space;
//     [key]: "Haryana", // if key is dynamic;
//     city // these are called short hand properties
// }
// console.log(user)

// => how to loop a object:-

// const user = {
//   name: "peter",
//   ["pin code"]: 241001,
//   state: "Haryana",
//   city:"faridabad"
// };

// for (item in user){
//     console.log(item) // for keys
//     console.log(user[item]) // for values
// }



///////////////////////////////////// string built-in methods ///////////////////////////////////////////////////

// let data = "Hello, How are you?"

// console.log(data.split())
// console.log(data.split(''))
// console.log(data.split(' '))
// console.log(data.split('a'))

// console.log(data.replace('H','_'))
// console.log(data.replace(/H/g,'_'))

// console.log(data.substring(1,data.length)) // remove first character
// console.log(data.substring(0,data.length-1)) // remove last character
// console.log(data.split('o')[0]) // remove string before specific character
// console.log(data.split('o')[1]) // remove string after specific character
//console.log(data.split('').reverse().join('')) // reverse string
//console.log(data.trim()) // remove extra space

////////////////////////////////////////////////// some outputs ///////////////////////////////////////////////////////////////////

// console.log(1 + "2" + "2"); // it will give 122
// console.log(1 + +"2" + "2"); // it will take it as (1 + (+"2") + "2") // it will give 32
// console.log(1 + +"2" + +"2"); // it will give 5
// console.log(1 + -"2" + "2"); // it will give -12
// console.log("A" - "B" + "2"); // NaN2
// console.log("A" - "B" + 2); // NaN
// console.log(typeof NaN); // it will consider as number
// console.log(0==false)
// console.log(''==false)
// console.log(0==false)
// console.log(null <=0) // true
// console.log(null>=0) //true when comparison operator is used the null treated as zero.
// console.log(NaN==NaN) // false
// console.log( true && 'hello') // hello becz && returns the first false value. if no of those are false then last value will considered.
// console.log(Array(3)==",,") // true
// console.log(!!10+20) // 21 because (!! true + 20)
// console.log(typeof typeof 1) // string  because typeof 1 is "number" then it is string.
//console.log([..."Sudhanshu"]) // it will break string in array.
// console.log(!!undefined); // false becz null and undefined both are consider as false value.
// console.log(!!null); //false
// console.log(!!"a"); // true
// console.log(!!""); // false because empty string consider as false but proper string consider as true;
// console.log(!!-2); // true but if we use zero it will consider as false. negative value will also consider as true.
// console.log(!!0); // false
// console.log(!!2); // true
//console.log(typeof 3 + 4 + "5"); // number45
// console.log(false || "Hello"); // ?
// console.log(true && "World"); // ?
// console.log(null || undefined); // ?
// console.log("" && 0); // ?
// console.log(0 || (1 && 2)); // ?
// console.log("5" - 2); // ?
// console.log("5" + 2); // ?
// console.log("5" * "2"); // ?
// console.log(true + false); // ?
// console.log("5" - true); // ?
// console.log(1 === "1"); // ?
// console.log(0 === false); // ?
// console.log(null === undefined); // ?
// console.log([] === []); // ?
// console.log({} === {}); // ?
// console.log(1 == "1"); // ?
// console.log(0 == false); // ?
// console.log(null == undefined); // ?
// console.log([] == false); // ?
// console.log([] == ![]); // ?

/////////////////////////////////////////////////// Puzzles in JS ////////////////////////////////////////////////////////////////////
// (function (){
//     var a = b = 3;
// })();

// console.log( typeof a)
// console.log(typeof b)

// here b=3 assigned successfully beacuse of hoisting . while declaring var a means a's scope limited to function so it is not accesible outside the function. if we use only 'a=b=3' without using var, then both values  will be accesible.

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function foo (){
//     return
//          {
//             name:"anil"
//          }
// }
// console.log(foo())

//it is required to set data in front of "return" statement. other wise it will return "undefined"

////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log({}=={}); //false
// var a = {};
// var b = {};
// console.log(a===b); //false

// when we compare 2 variables , the will compare 2 values. when we comapre 2 objects, it will compare memory locations so it is false.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// var a = 0;

// function b(){
//     a = 10;
//     return;
//     var a = function(){}
// }
// b();
// console.log(a)//0

// beacuse when we use var inside function , this a will become scope based and become local variable. if we not use var in function b then a will become 10.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var a = {};
// var b = a;

//console.log(a===b)//true

// var a = {name:"salil"}
// var b = {name:"salil"}

//console.log(a===b)//false

// var a = [1,2,3,4]
// var b = [1,2,3,4]

// console.log(a===b)//false
// console.log(a[0]===b[0])//true because it is checking values of array

// here a object memory location is copied in b so true + if object and array  compare whether it is blank or have values , it will compare memory location .

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var a;
// var b;

// console.log(a);//undefined
// console.log(b);// undefined
// console.log(a===b)//true
// console.log(typeof a)// undefined

//  here both values are compared because they both are variables not array or objects. they both are undefined.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function test(){
//     function foo(){ //1st foo
//         return 100;
//     }
//     return foo();

//     function foo(){ //2nd foo
//         return 10;
//     }
// }

// console.log(test())//10

// here because functions also have hoisting quality. so both foo function go on top . first foo goes up and second foo goes second. then after calling foo() , 2nd foo function overwrite first foo. so output is 10 .

////////////////////////////////////////////////////////////////////////////////////////////

// test();
// console.log(test)

// var test = function (){
//     console.log("test function");
// }

// test()

// here if we use function in variable , then hoisting not works. if we console test then it will be undefined because of hoisting. same goes for arrow functions.
// function (){} => this is function declaration
// var test = fucntion (){} => this is function expression

//////////////////////////////////////////////////////////////////////////////////////////

// let data = [3, 1, 7, 12, 23, 45];

// console.log(data.sort()); //[1,12,23,3,45,7]  // here it sort the array uncorrectly beacuse sort() function first converts arry's element in string, then sort it according to letter.

// console.log(
//   data.sort((a, b) => {
//     return a - b;
//   })
// ); //[1,3,7,12,23,45] it will sort array according.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// }

// console.log(obj) // here on 'a'  key "three" will updated. and "one" will overwrited

//////////////////////////////////////////////////////////////////////////////

// let person = {
//     name:"salil"
// }

// const member = person
// person = null
// console.log(member)

/////////////////////////////////////////////////////////////////////////

// var a = 8;
// var a =10;

// console.log(a) // variable can be redeclare and reassign. but last assign value will store

//////////////////////////////////////////////////////////////////////////////////////////
//  let data = {
//     name:"Sudhanshu",
//     age:29,
//     city:"hardoi"
//  }

//  console.table(data) // console data in table format

///////////////////////////////////////////////////////////////////////////////////

// let data = [4, 7, 1, 7, 4, 9, 2, 4];

// data.length = 4;
// console.log(data); // to delete other values form array;

// let sum = data.reduce((x, y) => x + y);
// console.log(sum); // to sum all values of array;

//  => to remove duplicate  values form array:-
// let data = [1, 2, 3, 1, 2, 3];
// let unique = new Set(data);
// console.log(unique); // returnes value in {};
// console.log([...unique]); // returnes value in array[]

////////////////////////////////////////////////////////////////////////////////
// => if want to swipe values without third variable with destructuring:-
// var a = 1;
// var b = 2;
// [a, b] = [b, a];
// console.log("a:", a);
// console.log("b:", b);

/////////////////////////////////////////////////////////////////////////////////////

// function fruit() {
//   console.log(name);
//   console.log(price);

//   var name = "apple";
//   let price = 20;
// }
// fruit();

// => hoisting is not applied on const and let
///////////////////////////////////////////////////////////////////////////////////////////

// for (var i=0;i <3; i++){
//     setTimeout(()=>{console.log(i)},2000)
// }

// =>beacuse var have global scope. first full loop will finished and setTimout will be in callback que. so all values will be 3

///////////////////////////////////////////////////////////////////////////////////////////

// for (let i=0; i<3; i++){
//     setTimeout(()=>{console.log(i)},2000)
// }
// => beacuse let have block scope . so when all 3 setTimeout will be in callback que, each have unique value of i so it will be 0,1,2.

///////////////////////////////////////////////////////////////////////////////////////////

// let data = "size";
// const bird={
//     size:"small",
// }

// console.log(bird[data]) //small beacuse it will treat it as bird['size].   it is getting key dynamically.
// console.log(bird['size']) // small because  it is a dynamic way to acces object's keys.
// console.log(bird.size) // small beause it is used if key is static
// console.log(bird.data) // undefined because  it dont have data property and it is static key getting method.

/////////////////////////////////////////////////////////////////////////////////////////////////////

// let c = {
//   name: "peter",
// };
// let d;
// d = c;
// c.name = "bruce";
// console.log(d.name); // copy by memory reference;

/////////////////////////////////////////////////////////////////////////////////////////////////////

// var x;
// var x = 10;
// var x = 14
// var x = 20;
// console.log(x) // we  can declare same varibale multiple times with var not let. but latest value will be considered . var have global scope and let have block scope.

/////////////////////////////////////////////////////////////////////////////////////////////////////

// var x;
// let x = 10;
// console.log(x) // error beacuse var have global scope so x cannot be redeclare.

// let x;
// let x = 10;
// console.log(x) // error beacuse var have global scope so x cannot be redeclare.

////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 3;
// let b = new Number(3);

// console.log(a==b) //true beacuse it check only value that is 3
// console.log(a===b) // false becz new Number is a object.

/////////////////////////////////////////////////////////////////////////////////////////////////////

// a=20;
// console.log(a) // if no let var const is used to declare a variable it will be treat as var and global variable. it will be hoisted, reassigned and accessed from anywhare.

//////////////////////////////////////////////////////////////////////////////////////////////////////

// function fruit() {
//   console.log("woof");
// }

// fruit.name = "apple";

// fruit();
// if fruit is function then we can assign multiple properties still funciton will have no effect on excuting.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let number = 0;
// console.log(number++)//0
// console.log(++number)//2
// console.log(number)//2

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age);
// }

// getAge()
// beacuse we are using strict mode so we have to put var or let in front of age. this use strict is limited to this function only. when we use 'use strict ' on top of page , it will apply on all page.
// strict mode :- dont allow recieving argument with same name + always have to declare with let const var + stops "this" keyword and make it undefined +  not accepts octal values

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const obj = {
//   1: "a",
//   2: "b",
//   3: "c",
//   hello:"d"
// };

// console.log(obj.hasOwnProperty("1")); //true
// console.log(obj.hasOwnProperty(1)); // true
// console.log(obj.hasOwnProperty('hello')); // true
// console.log(obj.hasOwnProperty(hello));// error
// hasOwnProperty() function is used to check that object have that key or not.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

//when go to contiue , it will exit current loop and not go to console.log(i).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  /* <div onclick='console.log("first div clicked")'>
  <div onclick='console.log("second div clicked")'>
    <button onclick="console.log('button clicked')">Click</button>
  </div>
</div> */
}

// first button, then second div ,then first div.
// it is called event bubbling in js. it works from inside to outside.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const person = {name:"Nadia"};

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21))
// console.log(sayHi.bind(person,21)())

// call() dont have to call again but bind have to call itself again.

//////////////////////////////////////////////////////////////////////////////////////////////////////

// function sayHi() {
//   //   return (() => 0)();
//   return (() => 0)();
// }
// console.log(typeof sayHi());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [1,2,3];
// numbers[4] = numbers;
// console.log(numbers)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(setInterval(()=> console.log('HI'),1000))
// console.log(setInterval(()=> console.log('HI'),1000))
// console.log(setInterval(()=> console.log('HI'),1000))

// every setInterval returns a unique id. so it will return 3 unique id.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// (() => {
//   let x = y = 10;
// })();
// console.log(typeof y);
// console.log(typeof x);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let x = 100;
// (() => {
//   var x = 20; // now this x is local variable;
// })();

// console.log(x);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = [];
// let b = a;

// console.log(a==b);//true
// console.log(a===b);//true becz memory  reference is same and copied in b.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//let z = [1,2,3,4];
//console.log(...z) // output will come in 1 2 3 4 in string without array. when we use spread operator it will destruct.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//let data = {name:"sudhanshu"}
//console.log(delete data.name) // true becz delete action is completed  successfully and it will return true. if action is not completed, then it will be false.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//let data = {name:"sudhanshu"};
//console.log(delete data); // false becz we cannot delete whole object with delete keyword. we can delete only properties;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const data = ["peter","bruce","tony"];

// //const [y] = data;
// const[,,y] = data; // getting items from array through destructuring.
// console.log(y); // peter becz it will take first value of array.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const data = {name:"sudhanshu",age:29, city:"faridabad"};

// const {age} = data; // getting property from object without dot operator.
// console.log(age) // sudhanshu

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// how to concat 2 objects

// let data1={name:"sudhanshu", age:29};
// let data2={city:"faridabad", country:"india"};

// let data = {...data1, ...data2};

// console.log(data)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const result = false || {} || null;
// console.log(result)

// it will return first true value. if all are false then it will return last value. here it will return {} becz it is first true value.
// empty string is false value.
// blank array is true value.
// 0 is false value.
// blank object is true value.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log('emoji' === 'emoji') // true becz emoji's have unicode value so it will be true.

//console.log(`${(x=>x)('I love')} to code`) // here  it  is immidiate invoked funciton . So, "i love" will pass as params in x and it is returning x so 'i love ' will be returned . so output will be "i love to code"

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// function sumValues(a, b, c) {
//   console.log(a + b + c);
// }

//sumValues([...1, 2, 3]);
//sumValues([...[1, 2, 3]]);
//sumValues(...[1, 2, 3]);
//sumValues([1, 2, 3]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let person = {name:"Anil"};
// Object.seal(person);
// person.age = 29;
// console.log(person);

// if we seal the object then we cannot add new properties in object. but we can change the existing properties.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const data = [1, 2, 3, 4, 5];

// data.shift(); // to remove first element of array
// data.pop(); // to remove last element of array
// data.unshift(0); // to add element in front of array

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const data = ["peter", "bruce", "tony"];
// delete data[1];
// console.log(data);
//console.log(data.length);
// it will remove bruce and make it empty. null and undefined take some space but empty dont take any space. array's length will remain same.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 2;
// setTimeout(() => {
//   console.log(a);
// }, 0);

// a = 100;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = "like";
// let b = `like`

// console.log(a === b) // true becz both are same. backticks are used to write multi line strings and to use variables in strings.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 1;
// let c=2;
// console.log(--c===a) // true becz first c will be decremented then compared with a.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c); //false becz first a===b will be true then it will compare with c.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// function testBlockScope() {
//   if (true) {
//     let x = 10;
//     const y = 20;
//     var z = 30;
//   }
//   console.log(typeof x); // ?
//   console.log(typeof y); // ?
//   console.log(typeof z); // ?
// }
// testBlockScope();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//  let x = 10;

// function printX() {
//   let x = 20;
//   console.log(x);
// }

// printX();
// console.log(x);

/////////////////////////////////////////////////////////////////////////////////////////////////////////// chat gpt
// function testScope() {
//   if (true) {
//     var a = 5;
//     let b = 10;
//   }
//   console.log(a);
//   console.log(b);
// }

// testScope();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createFunctions() {
//   let funcs = [];
//   for (var i = 0; i < 3; i++) {
//     funcs.push(() => console.log(i));
//   }
//   return funcs;
// }

// const functions = createFunctions();
// functions[0](); // ?
// functions[1](); // ?
// functions[2](); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createFunctionsFixed() {
//   let funcs = [];
//   for (var i = 0; i < 3; i++) {
//     funcs.push(((index) => () => console.log(index))(i));
//   }
//   return funcs;
// }

// const functionsFixed = createFunctionsFixed();
// functionsFixed[0](); // ?
// functionsFixed[1](); // ?
// functionsFixed[2](); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// function outer() {
//   let outerVar = "I’m outside!";

//   function inner() {
//     console.log(outerVar);
//   }

//   return inner;
// }

// const myInner = outer();
// myInner();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Counter() {
//   let count = 0;

//   return {
//     increment: () => count++,
//     getCount: () => count
//   };
// }

// const counter1 = Counter();
// counter1.increment();
// counter1.increment();
// console.log(counter1.getCount()); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const add = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// })();

// console.log(add()); // ?
// console.log(add()); // ?
// console.log(add()); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(myVar); // ?
// var myVar = 10;

// console.log(myFunc()); // ?
// function myFunc() {
//   return 20;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(myLetVar); // ?
// let myLetVar = 5;

// console.log(myConstVar); // ?
// const myConstVar = 10;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function test() {
//   console.log(a); // ?
//   var a = 10;
//   console.log(a); // ?
// }

// test();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// {
//   console.log(myVar); // ?
//   let myVar = 100;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// var x = 1;

// function test() {
//   console.log(x); // ?
//   var x = 2;
//   console.log(x); // ?
// }

// test();
// console.log(x); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// setTimeout(() => {
//   console.log("First timeout");
//   setTimeout(() => {
//     console.log("Second timeout");
//   }, 0);
// }, 0);

// console.log("Sync log");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

//The reason the Promise callback executes before the setTimeout callback lies in JavaScript's event loop and task queues.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 100);

// setTimeout(() => {
//   console.log("C");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// console.log("E");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// async function asyncFunc() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// console.log("3");
// asyncFunc();
// console.log("4");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   return `Hello, my name is ${this.name}`;
// };

// const john = new Person("John");

// console.log(john.sayHello()); // ?
// console.log(john.__proto__ === Person.prototype); // ?
// console.log(Person.prototype.__proto__ === Object.prototype); // ?
// console.log(Object.prototype.__proto__); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const obj1 = {
//   value: 10,
// };

// const obj2 = Object.create(obj1);
// obj2.value = 20;

// console.log(obj2.value); // ?
// delete obj2.value;
// console.log(obj2.value); // ?
// delete obj1.value;
// console.log(obj2.value); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Animal() {
//   this.legs = 4;
// }

// Animal.prototype.walk = function () {
//   return `I walk on ${this.legs} legs`;
// };

// const dog = new Animal();
// dog.legs = 3;

// console.log(dog.walk()); // ?
// delete dog.legs;
// console.log(dog.walk()); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array.prototype.sum = function () {
//   return this.reduce((a, b) => a + b, 0);
// };

// const numbers = [1, 2, 3];
// console.log(numbers.sum()); // ?

// delete Array.prototype.sum;
// console.log(numbers.sum()); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Car(model) {
//   this.model = model;
// }

// Car.prototype.getModel = function () {
//   return this.model;
// };

// const tesla = new Car("Model S");

// console.log(tesla.constructor === Car); // ?
// console.log(tesla.getModel()); // ?
// Car.prototype = {};
// console.log(tesla.constructor === Car); // ?
// console.log(tesla.getModel()); // ?

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const obj = { value: 10 };

// console.log(obj == "[object Object]"); // ?
// console.log(obj.toString() == "[object Object]"); // ?
// console.log(obj + 10); // ?
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function outer() {
//   console.log("Outer Start");
//   function inner() {
//     console.log("Inner Start");
//   }
//   inner();
//   console.log("Outer End");
// }
// outer();
// console.log("Global End");

///////////////////////////////////////////////////////////////////////////////////////////////////////////
