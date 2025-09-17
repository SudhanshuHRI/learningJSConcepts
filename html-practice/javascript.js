console.log("hello World");

































////////////////////////////////////////////////////////////  Puzzles for Practice  ///////////////////////////////////////////////////////////

// ------------------------------------------------------------------
// (function (){
//     var a = b = 3;
// })();
// console.log( typeof a)
// console.log(typeof b)

// Ans. here b=3 assigned successfully beacuse of hoisting . while declaring var a means a's scope limited to function so it is not accesible outside the function. if we use only 'a=b=3' without using var, then both values  will be accesible.

// ---------------------------------------------------------------------------------------------------------------------

// function foo (){
//     return
//          {
//             name:"anil"
//          }
// }
// console.log(foo())

// Ans. it is required to set data in front of "return" statement. other wise it will return "undefined"

// ---------------------------------------------------------------------------------------------------------------------

// console.log({}=={}); //false
// var a = {};
// var b = {};
// console.log(a===b); //false

// Ans. when we compare 2 variables , the will compare 2 values. when we comapre 2 objects, it will compare memory locations so it is false.

// ---------------------------------------------------------------------------------------------------------------------

// var a = 0;

// function b(){
//     a = 10;
//     return;
//     var a = function(){}
// }
// b();
// console.log(a)//0

// Ans. beacuse when we use var inside function , this a will become scope based and become local variable. if we not use var in function b then a will become 10.

// ---------------------------------------------------------------------------------------------------------------------

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

// Ans. here a object memory location is copied in b so true + if object and array  compare whether it is blank or have values , it will compare memory location .

// ---------------------------------------------------------------------------------------------------------------------

// var a;
// var b;

// console.log(a);//undefined
// console.log(b);// undefined
// console.log(a===b)//true
// console.log(typeof a)// undefined

//  Ans. here both values are compared because they both are variables not array or objects. they both are undefined.

// ---------------------------------------------------------------------------------------------------------------------

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

// Ans. here because functions also have hoisting quality. so both foo function go on top . first foo goes up and second foo goes second. then after calling foo() , 2nd foo function overwrite first foo. so output is 10 .

// ---------------------------------------------------------------------------------------------------------------------

// test();
// console.log(test)

// var test = function (){
//     console.log("test function");
// }

// test()

// Ans. here if we use function in variable , then hoisting not works. if we console test then it will be undefined because of hoisting. same goes for arrow functions.
// function (){} => this is function declaration
// var test = fucntion (){} => this is function expression

// ---------------------------------------------------------------------------------------------------------------------

// let data = [3, 1, 7, 12, 23, 45];

// console.log(data.sort()); //[1,12,23,3,45,7]  // here it sort the array uncorrectly beacuse sort() function first converts arry's element in string, then sort it according to letter.

// console.log(
//   data.sort((a, b) => {
//     return a - b;
//   })
// ); //[1,3,7,12,23,45] it will sort array according.

// ---------------------------------------------------------------------------------------------------------------------

// const obj = {
//     a:"one",
//     b:"two",
//     a:"three"
// }

// console.log(obj)
// Ans. here on 'a'  key "three" will updated. and "one" will overwrited

// ---------------------------------------------------------------------------------------------------------------------

// let person = {
//     name:"salil"
// }

// const member = person
// person = null
// console.log(member)

// ---------------------------------------------------------------------------------------------------------------------

// var a = 8;
// var a =10;

// console.log(a) // variable can be redeclare and reassign. but last assign value will store

// ---------------------------------------------------------------------------------------------------------------------

//  let data = {
//     name:"Sudhanshu",
//     age:29,
//     city:"hardoi"
//  }

//  console.table(data)
// Ans.  console data in table format

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

// => if want to swipe values without third variable with destructuring:-
// var a = 1;
// var b = 2;
// [a, b] = [b, a];
// console.log("a:", a);
// console.log("b:", b);

// ---------------------------------------------------------------------------------------------------------------------

// function fruit() {
//   console.log(name);
//   console.log(price);

//   var name = "apple";
//   let price = 20;
// }
// fruit();

// Ans.  hoisting is not applied on const and let

// ---------------------------------------------------------------------------------------------------------------------

// for (var i=0;i <3; i++){
//     setTimeout(()=>{console.log(i)},2000)
// }

// Ans. beacuse var have global scope. first full loop will finished and setTimout will be in callback que. so all values will be 3

// ---------------------------------------------------------------------------------------------------------------------

// for (let i=0; i<3; i++){
//     setTimeout(()=>{console.log(i)},2000)
// }
// Ans. beacuse let have block scope . so when all 3 setTimeout will be in callback que, each have unique value of i so it will be 0,1,2.

// ---------------------------------------------------------------------------------------------------------------------

// let data = "size";
// const bird={
//     size:"small",
// }

// console.log(bird[data]) //small beacuse it will treat it as bird['size].   it is getting key dynamically.
// console.log(bird['size']) // small because  it is a dynamic way to acces object's keys.
// console.log(bird.size) // small beause it is used if key is static
// console.log(bird.data) // undefined because  it dont have data property and it is static key getting method.

// ---------------------------------------------------------------------------------------------------------------------

// let c = {
//   name: "peter",
// };
// let d;
// d = c;
// c.name = "bruce";
// console.log(d.name); // copy by memory reference;

// ---------------------------------------------------------------------------------------------------------------------

// var x;
// var x = 10;
// var x = 14
// var x = 20;
// console.log(x)
// Ans. we  can declare same varibale multiple times with var not let. but latest value will be considered . var have global scope and let have block scope.

// ---------------------------------------------------------------------------------------------------------------------

// var x;
// let x = 10;
// console.log(x) // error beacuse var have global scope so x cannot be redeclare.

// let x;
// let x = 10;
// console.log(x) // error beacuse var have global scope so x cannot be redeclare.

// ---------------------------------------------------------------------------------------------------------------------

// let a = 3;
// let b = new Number(3);

// console.log(a==b) //true beacuse it check only value that is 3
// console.log(a===b) // false becz new Number is a object.

// ---------------------------------------------------------------------------------------------------------------------

// a=20;
// console.log(a)
// Ans.  if no let var const is used to declare a variable it will be treat as var and global variable. it will be hoisted, reassigned and accessed from anywhare.

// ---------------------------------------------------------------------------------------------------------------------

// function fruit() {
//   console.log("woof");
// }

// fruit.name = "apple";

// fruit();
// Ans. if fruit is function then we can assign multiple properties still funciton will have no effect on excuting.

// ---------------------------------------------------------------------------------------------------------------------

// let number = 0;
// console.log(number++)//0
// console.log(++number)//2
// console.log(number)//2

// ---------------------------------------------------------------------------------------------------------------------

// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age);
// }

// getAge()
// Ans. beacuse we are using strict mode so we have to put var or let in front of age. this use strict is limited to this function only. when we use 'use strict ' on top of page , it will apply on all page.
// strict mode :- dont allow recieving argument with same name + always have to declare with let const var + stops "this" keyword and make it undefined +  not accepts octal values

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// Ans. when go to contiue , it will exit current loop and not go to console.log(i).

// ---------------------------------------------------------------------------------------------------------------------

{
  /* <div onclick='console.log("first div clicked")'>
  <div onclick='console.log("second div clicked")'>
    <button onclick="console.log('button clicked')">Click</button>
  </div>
</div> */
}

// first button, then second div ,then first div.
// it is called event bubbling in js. it works from inside to outside.

// ---------------------------------------------------------------------------------------------------------------------

// const person = {name:"Nadia"};

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21))
// console.log(sayHi.bind(person,21)())

// Ans. call() dont have to call again but bind have to call itself again.

// ---------------------------------------------------------------------------------------------------------------------

// function sayHi() {
//   //   return (() => 0)();
//   return (() => 0)();
// }
// console.log(typeof sayHi());

// ---------------------------------------------------------------------------------------------------------------------

// const numbers = [1,2,3];
// numbers[4] = numbers;
// console.log(numbers)

// ---------------------------------------------------------------------------------------------------------------------

// console.log(setInterval(()=> console.log('HI'),1000))
// console.log(setInterval(()=> console.log('HI'),1000))
// console.log(setInterval(()=> console.log('HI'),1000))

// Ans. every setInterval returns a unique id. so it will return 3 unique id.

// ---------------------------------------------------------------------------------------------------------------------

// (() => {
//   let x = y = 10;
// })();
// console.log(typeof y);
// console.log(typeof x);

// ---------------------------------------------------------------------------------------------------------------------

// let x = 100;
// (() => {
//   var x = 20; // now this x is local variable;
// })();

// console.log(x);

// ---------------------------------------------------------------------------------------------------------------------

// let a = [];
// let b = a;

// console.log(a==b);//true
// console.log(a===b);//true becz memory  reference is same and copied in b.

// ---------------------------------------------------------------------------------------------------------------------

//let z = [1,2,3,4];
//console.log(...z) // output will come in 1 2 3 4 in string without array. when we use spread operator it will destruct.

//let data = {name:"sudhanshu"}
//console.log(delete data.name)
//Ans.  true becz delete action is completed  successfully and it will return true. if action is not completed, then it will be false.

// ---------------------------------------------------------------------------------------------------------------------

//let data = {name:"sudhanshu"};
//console.log(delete data); // false becz we cannot delete whole object with delete keyword. we can delete only properties;

// ---------------------------------------------------------------------------------------------------------------------

// const data = ["peter","bruce","tony"];

// //const [y] = data;
// const[,,y] = data; // getting items from array through destructuring.
// console.log(y); // peter becz it will take first value of array.

// ---------------------------------------------------------------------------------------------------------------------

// const data = {name:"sudhanshu",age:29, city:"faridabad"};

// const {age} = data; // getting property from object without dot operator.
// console.log(age) // sudhanshu

// ---------------------------------------------------------------------------------------------------------------------

// how to concat 2 objects

// let data1={name:"sudhanshu", age:29};
// let data2={city:"faridabad", country:"india"};

// let data = {...data1, ...data2};

// console.log(data)

// ---------------------------------------------------------------------------------------------------------------------

// const result = false || {} || null;
// console.log(result)

// it will return first true value. if all are false then it will return last value. here it will return {} becz it is first true value.
// empty string is false value.
// blank array is true value.
// 0 is false value.
// blank object is true value.

// ---------------------------------------------------------------------------------------------------------------------

// console.log('emoji' === 'emoji') // true becz emoji's have unicode value so it will be true.

//console.log(`${(x=>x)('I love')} to code`) // here  it  is immidiate invoked funciton . So, "i love" will pass as params in x and it is returning x so 'i love ' will be returned . so output will be "i love to code"

// ---------------------------------------------------------------------------------------------------------------------

// function sumValues(a, b, c) {
//   console.log(a + b + c);
// }

//sumValues([...1, 2, 3]);
//sumValues([...[1, 2, 3]]);
//sumValues(...[1, 2, 3]);
//sumValues([1, 2, 3]);

// ---------------------------------------------------------------------------------------------------------------------

// let person = {name:"Anil"};
// Object.seal(person);
// person.age = 29;
// console.log(person);

// Ans. if we seal the object then we cannot add new properties in object. but we can change the existing properties.

// ---------------------------------------------------------------------------------------------------------------------

// const data = [1, 2, 3, 4, 5];

// data.shift(); // to remove first element of array
// data.pop(); // to remove last element of array
// data.unshift(0); // to add element in front of array

// ---------------------------------------------------------------------------------------------------------------------

// const data = ["peter", "bruce", "tony"];
// delete data[1];
// console.log(data);
//console.log(data.length);
// Ans. it will remove bruce and make it empty. null and undefined take some space but empty dont take any space. array's length will remain same.

// ---------------------------------------------------------------------------------------------------------------------

// let a = 2;
// setTimeout(() => {
//   console.log(a);
// }, 0);

// a = 100;

// ---------------------------------------------------------------------------------------------------------------------

// let a = "like";
// let b = `like`

// console.log(a === b)
// Ans. true becz both are same. backticks are used to write multi line strings and to use variables in strings.

// ---------------------------------------------------------------------------------------------------------------------

// let a = 1;
// let c=2;
// console.log(--c===a)
//Ans.  true becz first c will be decremented then compared with a.

// ---------------------------------------------------------------------------------------------------------------------

// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a === b === --c);
// Ans. false becz first a===b will be true then it will compare with c.

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

//  let x = 10;

// function printX() {
//   let x = 20;
//   console.log(x);
// }

// printX();
// console.log(x);

// ---------------------------------------------------------------------------------------------------------------------
// function testScope() {
//   if (true) {
//     var a = 5;
//     let b = 10;
//   }
//   console.log(a);
//   console.log(b);
// }

// testScope();

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------
// function outer() {
//   let outerVar = "I’m outside!";

//   function inner() {
//     console.log(outerVar);
//   }

//   return inner;
// }

// const myInner = outer();
// myInner();
// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

// console.log(myVar); // ?
// var myVar = 10;

// console.log(myFunc()); // ?
// function myFunc() {
//   return 20;
// }

// ---------------------------------------------------------------------------------------------------------------------

// console.log(myLetVar); // ?
// let myLetVar = 5;

// console.log(myConstVar); // ?
// const myConstVar = 10;

// ---------------------------------------------------------------------------------------------------------------------

// function test() {
//   console.log(a); // ?
//   var a = 10;
//   console.log(a); // ?
// }

// test();

// ---------------------------------------------------------------------------------------------------------------------

// {
//   console.log(myVar); // ?
//   let myVar = 100;
// }

// ---------------------------------------------------------------------------------------------------------------------

// var x = 1;

// function test() {
//   console.log(x); // ?
//   var x = 2;
//   console.log(x); // ?
// }

// test();
// console.log(x); // ?

// ---------------------------------------------------------------------------------------------------------------------

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// ---------------------------------------------------------------------------------------------------------------------

// setTimeout(() => {
//   console.log("First timeout");
//   setTimeout(() => {
//     console.log("Second timeout");
//   }, 0);
// }, 0);

// console.log("Sync log");

// ---------------------------------------------------------------------------------------------------------------------

// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

//The reason the Promise callback executes before the setTimeout callback lies in JavaScript's event loop and task queues.

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

// async function asyncFunc() {
//   console.log("1");
//   await Promise.resolve();
//   console.log("2");
// }

// console.log("3");
// asyncFunc();
// console.log("4");

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

// Array.prototype.sum = function () {
//   return this.reduce((a, b) => a + b, 0);
// };

// const numbers = [1, 2, 3];
// console.log(numbers.sum()); // ?

// delete Array.prototype.sum;
// console.log(numbers.sum()); // ?

// ---------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------

// const obj = { value: 10 };

// console.log(obj == "[object Object]"); // ?
// console.log(obj.toString() == "[object Object]"); // ?
// console.log(obj + 10); // ?

// ---------------------------------------------------------------------------------------------------------------------

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