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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(1 + "2" + "2"); // it will give 122
// console.log(1 + +"2" + "2"); // it will take it as (1 + (+"2") + "2") // it will give 32
// console.log(1 + +"2" + +"2"); // it will give 5
// console.log(1 + -"2" + "2"); // it will give -12
// console.log("A" - "B" + "2"); // NaN2
// console.log("A" - "B" + 2); // NaN
// console.log(typeof NaN); // it will consider as number

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

/////////////////////////////////////////////////////////////////////////////////////////////

// Laxical Scope => when inner function can access outer function's variable. eg-

// function hello(){
//     var a = 10;

//     function innerFunction (){
//         return a;
//     }

//     return innerFunction();
// }

// console.log(hello())

// Clouser => it is a inner function who remembers outer function's variables while outer function is excuted fully.eg-

// function hello() {
//   var a = 10;
//   function innerFunction() {
//     return a;
//   }
//   return innerFunction;
// }

// var inner = hello();

// console.log(inner());//10

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// ==> while excuting call stack container 's task, if any task comes who takes time, it send to callback que container(container that contains all callbacks). tasks stored in  callback que goes to webAPI container to excute(excuted by ajax and DOM) one by one. when task is completed by webAPI then it comes back in callback que. Then event loop pushes that task back in call stack.

// reference links :- 1. https://www.jsv9000.app
//                     2. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=14
//                     3. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=15

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(!!10+20) // 21 because (!! true + 20)

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

////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////// Prototypes in JS ////////////////////////////////////////////