//////////////////////////////////////////////// working of JS/////////////////////////////////////////////////////////////////

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

////////////////////////////////// Quama Operator ////////////////////////////////////////////////

// let x = 10;
// let y = 20;

// x = ((y += 20), y);
// console.log(x) // here first argument (y = y+20) is calculated and stored in y and second argument y is printed.

// => in quama operator first argument is calculated and second argument will be print . it is important to store first argument calculation result in a variable.

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

/////////////////////////////////  Some definations in JS ///////////////////////////////////////////////

// => optional chaining operator (?.) is used to avoid errors while accessing properties.

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

///////////////////////////////////////////////////// some tasks to practice ///////////////////////////////////////////

// 1. Program to find longest word in a given sentence ?
//  2. How to check whether a string is palindrome or not ?
//  3. Write a program to remove duplicates from an array ?
//  4. Program to find Reverse of a string without using built-in method ?
//  5. Find the max count of consecutive 1’s in an array ?
//  6. Find the factorial of given number ?
//  7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
//  8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
//  9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
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

for(let i = 1; i<=5; i++){
    if (i===3){
        continue;
    }
    console.log(i)
}

//when go to contiue , it will exit current loop and not go to console.log(i).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////