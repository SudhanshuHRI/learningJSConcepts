// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ JavaScript Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Q. Explain the working of JavaScript ? =============================================================================
// Ans.
// => Crome's v8 engine have 2 parts :- 1.Memeory Heap, 2. Call Stack.
// => Memeory Heap :- where variable are saved. browser's memeory
// => Call Stack :- a container in which tasks are stored line wise. it works on FILO(first in last out).

// working of js ----------------------
// 𝟏. 𝐂𝐚𝐥𝐥 𝐒𝐭𝐚𝐜𝐤: This is where JavaScript runs your code one step at a time.
// 𝟐. 𝐖𝐞𝐛 𝐀𝐏𝐈𝐬: Things like setTimeout or fetching data are handled outside the Call Stack by Web APIs provided by the browser.
// 𝟑. 𝐂𝐚𝐥𝐥𝐛𝐚𝐜𝐤 𝐐𝐮𝐞𝐮𝐞: Once a task (like a timer or data fetch) is done, the result goes to the Callback Queue, waiting for the Call Stack to be empty.
// 𝟒. 𝐄𝐯𝐞𝐧𝐭 𝐋𝐨𝐨𝐩: The Event Loop keeps checking if the Call Stack is empty. When it is, it takes the next task from the Callback Queue and puts it in the Call Stack to run.

// ==> while excuting call stack container 's task, if any task comes who takes time, it send to callback que container(container that contains all callbacks). tasks stored in  callback que goes to webAPI container to excute(excuted by ajax and DOM) one by one. when task is completed by webAPI then it comes back in callback que. Then event loop pushes that task back in call stack.

// reference links :- 1. https://www.jsv9000.app
//                     2. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=14
//                     3. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=15

// Q. diff between var , let ,const ? ============================================================
// => let and const inrtoduces in ES6 + var has function scope and let,const have block scope + all 3 are hosted but only var is initialised as undefined
// => eg:
// const scope = () => {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//   }
//   console.log("Inside Function Scope", a);
//   console.log("Inside Function Scope", b);
//   console.log("Inside Function Scope", c);
// };
// scope();

// Q. What are callback function ? Give advantages and disadvantages ============================================================
// => function passed as argument to another function + advantage : async + disadvantage : callback hell

// Q. What is callback hell or pyramid of doom? =================================================
// => passing too much calback functions will become call back hell +  to avoid use Promises or async/await

// Q. What are ES6 features ?? ==========================================================
// => Blocke scoped variables(let,const) + arrow function + templete letrals + default parameters + array , object destructuring + spread and rest operators + Promises + import/export modules + for-of loop + map,set data structures

// Q. difference between normal funciton and arrow funciton ? ====================================================
// => normal function : has it's own "this" + "arguments" object available + can work as constructor with "new" + hoisted
// => Arrow function : dont have own "this" + "arguments" object not available + connot work as constructor + not hoisted

// Q. What are premitive and non-premetive data types in js ? =============================================
// => Premitive : immutable (unable to change) + copied by value + stored in Stack memory + string, Number, Boolean, undefined, null, symbol, bigInt
// => Non-premetive : mutable (able to change) + copied by reference + stores collention or more complex data + Object, Array, Function, all built in objects (Date,Map,Set etc) + stored in Heap memory 

// Q. Explain all built in functions of js ?? =================================================

// 1. forEach() : Itrate over each element + dont return any array + change original array + cannot break or return early + only works on array not objects or string + used when you want to do something with each element

// 2. map() : itrates over each element + return a new array with transform values + dont change original array

// 3. filter() : create a new array of only condition passed elements + returns a new array + dont change original array

// 4. find() : search the array and return first element that satisfies the condition + if no element pass , it will return undefined +

// 5. findIndex() : search the array and return first element's index that satisfies the condition +if no element passed, it will return "-1"

// 6. some() : tests wheather at least one element pass the test + it will return boolean + if no element passed, it will return false

// 7. every() : tests wheater all element pass the test +  it will also return boolean +  if any of the elemnt dont pass the test, it will return false.

// 8. push() : add one or more element in end or array and returns new length of array + modifies orignal array

// 9. pop() : remove last elemnt of array + return removed element +  modifies original array

// 10. unshift() : add element in beginning + return new length of array + modifies orignal array

// 11. shift () : remove first element of array + return removed element + modifies original array

// 12. splice() : add,remove,replace element in array + modifies original array + return array of removed elements , if no element removed,it returns blank array + array.splice(startIndex, noOfValuesToDelete, addItem1,addItem2,addItem3,.....)

// 13. concat() : merge 2 or more array + returns new concated array +

// 14. slice() : used to get a portion of array + dont modify original array + array.slice(startIndex,endIndex); + return new array with portion +

// 15. reduce() : used to reduce an array to single value +

// 16. reduceRight() : works from right index of array

// 17. sort() : used to sort the array + returns sorted array + element are converted in string then short

// 18. reverse() : reverse the order of elements in array + modifies orignal array + returns the reverse array

// 19. includes() : checks if an array or string contains certain element or substring + returns boolean

// 20. indexOf() : used to find first index of specified element in array or string + if not found returns -1

// 21. lastIndexOf() : returns the last index at which element is found + serches from backword

// 22. join() : used to combine all elements of array into single string with specified operator + array.join("-")

// Q. sort [1,2,3,11,22,33] using sort() method. =========================
// => arr.sort((a,b)=>a-b) for increment + arr.sort((a,b)=>b-a) for decriment

// Q. why 2 similer objects comparing returns false ? =========================================
// => beacuse object are declared by refrence

// Q. slice vs splice who modify orignal array?? give example =================================================================
// => splice is used to modify orignal array + slice give only shallow copy + splice(1,0,12,13) + slice (2,5)

// Q. what is IIFE ? why it is usefull? ====================================
// => immidiately inveked function + runs code immidiately + variables and functions inside it are not accessible outsite it

// Q. how to create a object without a prototype ? ===============================
// => const obj = Object.create(null) + It dont have .toString(),.hasOwnProperty() functions

// Q. how to destructure object ?? ========================
// => const person = {name:"sudhanshu",age:28} ; const {name,age} = person ;

// Q. how to destructure array ? ===================
// => const [a,b] = [1,2]

// Q. What are wrapper Objects ? ========================
// => primitive values like string,numbers,booleans are not objects but they behave like objects when you access their properties or methods + js automatically wraps these with temperory objects called wraper objects + string - String, number - Number, boolean - Boolean
// => eg: const str = "hello" ; console.log(str.toUpperCase()); + here str is primitive still js automatically converts it in String Object so .toUpperCase() will work

// Q. implicit vs explicit coercion ? =================================
// => coercion means converting value from one type to another + js is dynamic typed so automatically convert types + explicit means when manually changed , eg: Number("42") it will convert it in number + implicit means when convert automatically , eg: console.log("5" + 1 )

// Q. How to check value is NaN ? ================================
// => Number.isNan(value) + give boolean

// Q. How to check a number is even or odd without using modular operator ? ============================
// => Math.floor(num/2)*2===num ; + if it is true the even other false

// Q. How to check certain property exists in object ? =============================================
// => using "in" operator + obj.hasOwnProperty("name")

// Q. "in " vs "hasOwnProperty" ? =================================
// in operator finds in object's prototype also to check if value is present or not + hasOwnProperty only check in object's keys not in prototype

// Q. Function expression and function declaration ? =====================================
// => function expression : when function is assigned to variable , not hoisted , cannot called before it defined ,eg: const sayHi = function(){console.log("Hi")} + function declaration : when defined with function keyword , hoisted, can be called before , eg: function sayHi(){console.log("hi")}

// Q. How to check if value is null ?  why typeof null == object ? ===============================
// => using '===' operator + if(value===null) + typeof null== object becz it is a historical hub in js, null means novalue or empty , now it cannot be changed because live old code working on typeof null = object

// Q. What is "new" keyword do ? ===============================
// => new keyword is used to create instance of object form constructor function or class

// Q. concat 2 array using spread operator ? =======================================
// => [...arr1,...arr2]

// Q. merge 2 objects using spread operator ? =======================================
// => {...obj1,...obj2}

// Q. merge 2 strings using spread operator ? =======================================
// => const merged = [...str1, ' ',...str2].join("")

// Q.  What is AJAX ? =======================================
// => Asyncronous JavaScript And XML + it is a technique that send or recieve data form server without reloading the entire page + with ajax send request to server , receive the response in json, update the webpage without refreshing it + eg: you fill a form, you enter email to check if already registered, it check in real time without refreshing the page

// Q.all object buit-in functions?? give examples ========================================================================

// 1.Object.create() : used to create new object with choosen prototype + const dog = Object.create(animal) + here dog will have animal's properties

// 2.Object.assign() : used to copy properties from source object to target objects + Object.assign(target, source1,source2,......)

// 3.Object.keys() : returns the array of keys + const keys = Object.keys(user)

// 4.object.values() : returns the array of values + returns Own values not prototype + const values = Object.values(user)

// 5.object.entries() : returns the array of key-value pairs + [[key1,value1],[key2,value2],.......]

// 6.Object.getOwnPropertyNames() : returns array of all own property names of object

// 7.Object.defineProperty() : lets you to add or modify a property + Object.defineProperty(objectName, propertyName, {value:"value"}) + Object.defineProperty(person,"name",{value:"Sudhanshu"})

// 8.object.freeze() : cannot add,remove,change property + object becoms immutable(read-only) + only freeze first level

// 9.object.seal() : prevent adding and deleting property + allows to modify existing properties + only woks on first level +

// 10. object.is() : compare 2 values to check if same + like === + returns boolean + Object.is(25,25)

// Q. What are Call, apply and bind methods? ============================================================

// Problem:-
// function getFullName(greet) { console.log(`${greet}! My full name is ${this.firstName} ${this.lastName}`);}
// const person = { firstName: "Sudhanshu",lastName:"Srivastava" };
// getFullName("Hello") // this will give undefined

// => all of three are used to attach this keyword's value to a function
// 1.Call : invoked immidiatedly + pass the arguments individually + func.call(object, arg1, arg2)
// 2.Apply : invoked immidiately + pass the arguments in array + func.apply(object,[arg1, arg2])
// 3.Bind : dont call immidiately + pass the argument individually + const newFunc = func.bind(object,arg1,arg2)

// Q. object.seal vs object.freeze ==============================================================
// => object.seal : prevent adding or removing properties from an object + modify the existing objects
// => object.freeze : prevent adding or removing or modifying the existing objects

// Q. pure functions and impure functions in js ? ==============================================
// => Pure functions : always give same output for same input + has no side effects + dont change any external states
// => impure function : always give different output + has side effects like modifying a global variable + changes external states

// Q. what are side effects in js ? ======================================
// => when function changes the value of states or global variables , it is called side effects

// Q.Difference between promise , async await, callbacks? ===========================================================================================
// => Promises : a object that represent 3 states + Pending, fulfilled, rejected + cleaner and easier avoids deep nesting + should use when api calling or chaining tasks
// => Async/Await : makes async code look like synchronous + vary clean and readable + easy error handling with try-catch blocks +
// => Callbacks : a function passed as an argument + using too much callback will result to callback hell + hard to read, debug, maintain + should used when code is simple

// Q. "throw" keyword in js ? =============================================================================
// => used to throw manually error + should be used with try-catch + should throw error with "throw new Error("something went wrong")" object for good practice +  it stops excution of all the loops (map or for) +

// Q.controlled and uncontrolled components? ========================================================================
// => component that used in form can be controlled or uncontrolled + controlled means react state controls the form data + uncontrolled means when DOM direactly controls the elements , using useRef hook in react is used to directly cange in DOM, value is stored in DOM

// Q.Explain about the Oops concepts 4 principle.========================================================================
// 4 principle of oops :-
// 1. Encapsulation : Keep inner working of machine hidden + keep data safety + only give result
// 2. Polymorphism : Using same command to do different things according to context
// 3. Inheritence : Taking parents properties in child
// 4. Abstraction : Hiding complex stuff and only show simple things.

// Q.what is use strict in js? ===========================================
// => react's useStrict is differenct +  in js it is used to apply normal rules in the application + makes app more secure and less error + in react we dont want to put "use Strict" because babel, webpack etc enables it automatically + use Strict throw undeclare variables's error, duplicate params name will not accept + this in functions is undifined

// Q. setTimeout vs setInterval ============================================================
// => setTimeout : excute function after delay +
// => setInterval : excute functions repeted after give time +

// Q. macroTask Queue vs MicroTask Queue ===============================================================
// => macroTask queue : also called task queue + runs after call stack is empty + setTiemout, setInterval etc
// => microTask queue : also called job queue + runs immidiately after current task + have high priority + Promises etc

// Q.spread and rest operator ? =====================================================================
// => spread : used to spread elements of array or object
// => rest : used to collect multiple elements in single array + used in params, destructuring of array and object + const [first, ...rest] = [10, 20, 30, 40] + const { a, ...rest } = { a: 1, b: 2, c: 3 };

// Q.event bubbling and event capturing =====================================
// => event bubbling : from bottom to up side component + addEventListner('click',handler)
// => event capturing : from top component to bottom component + addEveentListner ('click', handler, true)

// Q. how to stop event prapagation in js ?=================================================
// => prapagation means when we click on a componet , three phases  activated : Capturing phase > target phase > bubbling Phase + this is called event prapagation + to stop prapagation : element.addEventListner('click',(event)=> event.stopPropagation();)

// Q. null vs undefined ====================================================================
// => undefined : variable is diclared but not assigned any value
// => null : variable is declared but assigned  no value or empty value

// Q. all false values in js? ====================================================
// => false + 0 + -0 + "" + null + undefined + NaN

// Q. all true values in js? ==========================================
//=>  true + "hello" + ' ' + any non-zero number + [] + {} + function(){} + any float that isn't 0 or NaN

// Q.json.stringify vs parse ==================================================================
//=> JSON.stringify is used to convert JSON to string + JSON.parse is used to convert string to JSON data

// Q.what is dead zone in js ? ========================================================
// => Only let and const have dead zone(TDZ) + we cannot uset let and const before it's declaration +  that is called dead zone

// Q.what is mutation observer in js? =====================================================================
//=> it is built-in api in js which lets you watch changes in DOM tree + const observer = new MutationObserver(callback) + detect new elements or removed elements + good for dynamic UI

// Q.high order functions ?? ================================================================
// => takes function as a argument + returns function as a result + they are called high order functions becz they operate on other functions + some built-in HOF in js : map(), filter(), reduce(), forEach(),sort()

// Q.Private property and private fucntion in js ? ====================================================
// => Works in function based components + only valid in classes +

// Q. What is Laxical Scope vs closures ? give code ===========================================================================
// => laxical scope means where variables are accessible based on code structure + closures are a feature that comes because of laxical scope, allow a function to remember variables even after parent function has excuted

// Q. Promise.all / Promies.allsettled / Promise.race ? =========================================================================
// => Promise.all : takes array of promise + wait for all of them to fulfill + if any rejected, all will reject + Promise.all([Promise1,Promise2, Promise3])
// => Promise.allsettled : takes array of promise + wait for all of them to fulfilled +  returns an array with the result of each promise
// => Promise.race : takes array of promise + returnes as the first promise settles (fullfilled or rejected) + dont wait for others

// Q. What are Prototypes in JS  ? why we use them in js ? ==================
// => Every object has hidden internal property called prototype + js use prototype based inharitence + we use it to share methods and properties between multiple objects

// Q. I want when a object/string is declared, a defalut variable or function is already present there . How can i do that using prototype ?====
// => Sting.prototype.name = "Sudhanshu" + Object.prototype.name = "Srivastava"

// Q. What is  Deep copy and shallow copy  of object ? give code ===================================================
// => shallow copy means copy only first level of methods and property + deep copy means copy all level of methods and properties +  for deep copy : const deep = JSON.parse(JSON.stringify(original));

// Q. What are Generator functions in Js ?? give code =====================================================================
// => a function that can pause and resume during excution + function* greet(){yield "hello"; yield "How are you?"; yield "Goodbye";}

// Q. What is Quama Operator in js ===========================================================
// => all expresions excutes from left to right + returns last expression only

// Q. Optinal chining operator in js ?========================================================
// => ?. + insted of throwing error , it returns undefined + used to safely access nested object's properties without error

// Q. Nullish operator in js?? =============================================================
// => used to set default value if left value is null or undefined + let result = a ?? b;

// Q.  e.preventDefault() vs e.stopPropagation() ? ==================================
// => preventDefault prevents the default browser of an element + stopPropogation is used to stop event bubbling

// Q. What is str.at() in js ?==============================================
// => used to get character of specific index + str.at(index)

// Q. map vs foreach function ? ==========================================
// => map returns new array with transform element + forEach returns undefined + map is used when need to transform data into new array + forEach is used when do something with each element

// Q. What is navigator in js ? ============================================
// => built in Object + provids info about browser and device environment as giolocations, user online or offline + part of window object (window.navigator)

// Q. .has() vs .add() ? ===================================
// => Both used in "Set" Objects + add is used to add value to a set + has is used to check if value exists

// Q. how to know in js if function is called by use click or by any script ? =======================================
// => we use element.addEventListner('click', (event)=>{event.isTrusted}) method to check it + if event.isTrusted is true then clicked by user

// Q. What is object ? give advantages and disadvantages ==================================
// => object is collection of data in key-value pairs + advantages : organized data , dynamically update properties + disadvantages : deep nested object cunsume more memory

// Q. How to loop a object ?? =========================================================
// => for(let key in user){console.log(key, user[key])}

// Q. In object how you can add "pin code" key with space ? ==========================
// => address["pin code"] = 241001

// Q. In object how you can add key dynamically ? ==============================
// => user[keyName] = "test@example.com"

// Q.  In object if we decalre it as const can we reassign it or add only properties ? ======================================
// =>  we cannot reassign but modify it's contents

// Q. how to delete a key in object ? ==============================
// => delete object.key || delete object['key']

// Q. Guess the output of the following ? ===================================================================

// let data = "    Hello, How are you?    ";

// console.log(data.split())
// console.log(data.split(''))
// console.log(data.split(' '))
// console.log(data.split('a'))

// console.log(data.replace('H','_'))
// console.log(data.replace(/H/g,'_'))

// console.log(data.substring(1,data.length))
// console.log(data.substring(0,data.length-1))
// console.log(data.split('o')[0])
// console.log(data.split('o')[1])
// console.log(data.split('').reverse().join(''))
// console.log(data.trim())

// Q. guess the output of the following ? ==================================================================================
// Ans.
// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + +"2" + +"2");
// console.log(1 + -"2" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);
// console.log(typeof NaN);
// console.log(0==false)
// console.log(''==false)
// console.log(-0===false)
// console.log(null <=0)
// console.log(null>=0)
// console.log(NaN==NaN)
// console.log( true && 'hello')
// console.log(Array(3)==",,")
// console.log(!!10+20)
// console.log(typeof typeof 1)
// console.log([..."Sudhanshu"])
// console.log(!!undefined);
// console.log(!!null);
// console.log(!!"a");
// console.log(!!"");
// console.log(!!-2);
// console.log(!!0);
// console.log(!!2);
// console.log(typeof 3 + 4 + "5");
// console.log(false || "Hello");
// console.log(true && "World");
// console.log(null || undefined);
// console.log("" && 0);
// console.log(0 || (1 && 2));
// console.log("5" - 2);
// console.log("5" + 2);
// console.log("5" * "2");
// console.log(true + false);
// console.log("5" - true);
// console.log(1 === "1");
// console.log(0 === false);
// console.log(null === undefined);
// console.log([] === []);
// console.log({} === {});
// console.log(1 == "1");
// console.log(0 == false);
// console.log(null == undefined);
// console.log([] == false);
// console.log([] == ![]);

//////////////////////////////////////////////////////////  Puzzles in JS  ////////////////////////////////////////////////////////////////////

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

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ React.js Section ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Q. element vs component ? =======================================================
// element is plain js object that describes a DOM node , const element = <h1>Hello World</h1> + component is a function that returns react elements, comonents can be reused

// Q. how lifting state up in react or pass data from childen to parent ? =======================================================
// => lifting state means moving state from child to parent + used to share data with sibling component
// eg:

// const ParentComp = () => {
//   const [data, setData] = useState("");
//   const handleDataFromChild = (childData) => {
//     setData(childData);
//   };
//   console.log("Data got from child is :", data);

//   return (
//     <>
//       <Child sendData={handleDataFromChild} />
//     </>
//   );
// };

// const ChildComp = ({ sendData }) => {
//   sendData("Hello");
// };

// Q.why fragments are better then div container =======================================================
// fragments dont add extra nodes to DOM + so app gets render quickly + reduce memory usage

// Q.why react use className over class =======================================================
// => class is a reserve keyword in JS + JSX is javaScript not HTML + JSX uses React.createElement('div',{className:'box'})

// Q. What is React.js  and it's history? ============================================================
// => created by facebook in 2011 + open source + SPA +

// Q. What are the advantages of react? and disadvantages ============================================================
// => advantage : component based architecture , Virtual DOM , Unidirectional Data flow, React Hooks + Disadvantages : Poor in SEO, Dependency on libraries

// Q.What are higher-order components? ============================================================
// => a function that takes component as arguments and returns a new component with additional behaviour
// eg:
// function withMessage(WrappedComponent) {
//   return function EnhancedComponent() {
//     return <WrappedComponent message="Hello from HOC!" />;
//   };
// }

// Q.  typescript vs js. ============================================================
// => Js dont provide type checking of variables + in js error catching is at runtime while typescript catch error at compile time

// Q. how would you add a Dynamic title on every page in React?? =====================================================
// => document.title = "about-us page" + we can use react-helmet library also

// Q. virtual DOM Vs Actual DOM ?  ================================================================
// => Dom is a tree structure that represent HTML elements in the browser + Real Dom : it is actual Dom elements in browser, slower for frequent updates, any update will direct update DOM, give less performance for big apps, managed by browser + Virtual Dom : JS copy of real Dom, faster for frequent updates, only updates real dom for bulk changes , give good performance for big apps, managed by react

// Q.What is  currying in react? ====================================================
// => in Currying, function dont take all arguments at once + instead takes only one argument at a time and return a new function each time + useful for breaking one function to many reusable pieces
// eg:

// function addCurried(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(addCurried(2)(3));

// Q.What is Data binding in react js? ==================================================================
// => Data binding means a process where data is connected to UI so that UI updates automatically when data changes + in react default is one-way data binding (UniDirectional) means data flows in one direction from parent to child to UI

// Q. what is uni directioanl data flow in react? ====================================================================
// => means data goes in one direction from parent to child to UI

// Q.What is anti pattern in react? =========================================================================================
// => anti pattern means common coding practice + patterns you should avoid

// Q.how to handle cors error on front end or postman? ==============================================================================
// =>We use proxy in package.json + "proxy" : "http://localhost:5000"

// Q. we have so many states declared in a component. How to avoid to declare it multiple times ?? ======================
// => const [form,setForm] = useState({name:"",email:"",age:0}) + to update : setForm(prev=>({...prev,name:"john"}))

// Q. What is reconcilation in ReactJs? ===============================================================================
// => react process to update the DOM Effectiently + updating only the changed part of your UI, innstead of rebuilding the whole thing.

// Q. statefull component vs stateless component ? ===========================================================
// => stateless compnent dont have state inside. it only shows data it gets from props + statefull component has it's own state and changes overtime

// Q.Explain microfrontend approach in react? =========================================================
// => microfrontend means instead of bulding on big app, split it into small, independent apps and then combine them to look like one

// Q. What is CI/CD pipeline ? ===========================================================
// => CI : Continous Integration + CD : Continous Development

// Q.What is the difference between useref and createRef in React ? ==============================
// =>  createRef is used in class based component + useRef is used in Function based component + useRef dont reder the component + used to direct change in DOM + commonly used in uncontrolled components (manages their own state internally) + works as "getElememntById" +

// Q. Explain why and how to update state of components using callback? =========================================
// => state update in react is async + callback helps to safely perform logic that depends on the updated state + setCount ((previousValue)=> previousValue + New Value)

// Q. Does React useState Hook update immediately ? ==============================================
// => No + useState updates are async + it update the state at re-render + correct way is to use useEffect hook or We can use
// eg:
// const [count,setCoung] = useState(0);
// setCount(5);
// useEffect(()=>{console.log("updated Count is :",count)},[count]);

// Q.how to update array and object that is in state in React?? ===========================================
// => for array : setCount(prev=> []...prev , newValue]) + for object : setCount(prev =>{ ...prev, name:"Jane" })

// Q.What is StrictMode in React ? Why we use it ? ===================================
// => used to highlight potential problems + helps to write better code + sends warnings + re-renders component twice in development mode + it does not impact production + it doesnot fix bugs automatically, it just warns you

// Q. Explain the concept of lazy loading in React and how it can be implemented? ==============================================
// => means only render component when needed, instead of loading everything at once + reduces initial load time + we can lazy load routes, pages, models etc.
// eg:
// import React,{Suspense} from "react";
// const LazyCompnent = React.lazy(()=>import('./myComponent'));

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyCompnent />
//       </Suspense>
//     </div>
//   );
// }

// Q. Describe static site generation (SSG) in the context of React. ============================
// => SSG is a method where react pages are pre-rendered to HTML at bulid time + when user visit site, server just send prebulit files directly + We can use SSG when page content not changes often, We dont need reat time dynamic content + React dont use SSG directly instead of Next.js uses it + good for SEO because search engines see prebuilt HTML  + SSR means page is rendered on Server on each request , SSG means page is Pre-rendered on built time and served as static file

// Q. tree shaking. ==================================
// => used in js build tools + removing unused code from your final build + reduce bundle size, speeds load time + tree shaking works on ES modules only + bundler(Webpack) uses this

// Q. What is Webpack in react ? ===========================================
// => Webpack is a bundler in react who bunldes js,css,images into optimaized files for production + Babel is a library used to transpiles modern js nad jsx to browser compatible code.

// Q.react 19 and its fearures? ====================================================================================
// React 19 have new compilor who can memoize components automatically without react.memo or useMemo to avoid re-renders + use() hook etc

// Q.export default vs export ? ============================================================================
// => export default: used when module export single value + no curly braces required when import + rename the import [import add from './math';] +
// => export : used when want to export multiple value from a single module + must use curly braces + cannot rename unless use "as" [import { add as addition } from './math';]

// Q.how can we change local server port in react =====================================================================
// by usign .env file

// Q.What are lifecycle methods of component in react? How we can achieve same in functional components? ========================================
// => useEffect, useState, useRef hooks are used for lifecycle method in react
// => Lifecycle phases : mount -> update -> unmount

// Q. Props vs state ============================================================
// => props : passed from parent to child + read-only + child cannot change it +
// => State : internal data maintained by component + mutable  + triggers re-render when changed

// Q. Debouncing in react =====================================================================
// => a function is excuted , after a time, until user stops typing or doing something + we use it in search box + if we dont use it , on each keyStroke we fetch too many api, update too many state, makes too many re-reders. + without debouncing it calls api on every keystorke +  With debouncing it waits until you stop typing for a few miliseconds, then calls the api only once

// Q.Throttling in react ===========================================================================
//  Trottling runs a function at regular intervals even if you're still doing something + used in Window Scroll, mouse move, resize

// Q. polyfills in react ===========================================================================
// => polyfill in a piece of code + It "fills in the gap" for older browsers that don't support modern JavaScript features like Promise, fetch, Array.includes() etc.

// Q.what is portal in react ===================================================================================
// => normally component is render in it's parent DOM node, but sometimes we need to appear outside the current DOM node like z-index,position:relative etc + it is called portal + ReactDOM.createPortal(jsxElement, DOMName(document.getElementById()) where to add  )

// Q.API polling ? =========================================================================
// => a technique where fron-end repeatedly sends request to server at regular intervals to check for new updated data. + to keep UI updated with real time without websockets + used to check for new messages, monitoring job progress, tracking live status +
// eg:
// useEffect(() => {
//     const interval = setInterval(() => {
//       fetch("https://api.example.com/data")
//         .then((res) => res.json())
//         .then((json) => setData(json));
//     }, 5000); // every 5 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);

// Q. React Profiler ============================================
// => a tool helps to measure and analyze performance of react components + we have to use react's Profiler to do so +
// eg:
// import React, { Profiler } from 'react';

// function onRenderCallback(
//   id, // the "id" prop of the Profiler tree
//   phase, // "mount" or "update"
//   actualDuration, // time spent rendering
//   baseDuration, // estimated time without memoization
//   startTime, // when React started rendering
//   commitTime, // when React committed changes
//   interactions // Set of interactions
// ) {
//   console.log(`${id} rendered in ${actualDuration}ms`);
// }

// function App() {
//   return (
//     <Profiler id="MyApp" onRender={onRenderCallback}>
//       <MyComponent />
//     </Profiler>
//   );
// }

// Q. How does React’s reconciliation algorithm work? ============================================================
// => Reconciliation is the process of comparing the new Virtural DOM with previous one + algorithm : first creates a new virtual DOM > compares it with previous virtual DOM > calculates the difference > updates the real DOM only when necessory

// Q.What is React Fiber, and how does it improve React’s performance? ============================================================
// => it is a reconciliation engine of react from react 16 + before fiber react was unable to prioritise the task and renders as syncronous
//
// Q.What is Concurrent Mode in React, and how does it improve UI responsiveness? ============================================================
// => it is a set of new features that let react work on multiple tasks at once + also pause, abort, resume and prioritise rendering tasks. + it is a part of react fiber

// Q.How does useTransition work in React? ============================================================
// => used to prioritize state updates in UI + if 2 states are updating , one is updating suddenly then a loop is running 20000000 times, then second is updating , first state is updating soon and other is updating in some time then we use useTransiton
// eg:
// const [isPending, startTransiton] = useTransition();
// const [val, setVal] = useState();
// const [items, setItems] = useState();

// function changeHandler(e) {
//   setVal(e.target.value);

//   startTransiton(() => {
//     const arr = [];
//     for (let i = 0; i < 2000000; i++) {
//       arr.push(e.target.value);
//     }
//     setItems(arr);
//   });
// }

// return (
//   <>
//     <div>
//       <input type="text" value={val} onchange={changeHandler} />
//       {isPending ? "Loading..." : items.map((item, i) => <div>{item}</div>)}
//     </div>
//   </>
// );

// Q.What is the difference between Concurrent Mode and Legacy Mode? ============================================================
// => before react 18 legacy mode is working now concurrent mode is working + in legacy mode, every state change blocks the UI until it's fully done , no built-in prioritize method + in concurrent mode react can pause, resume rendring, allows non blocking rendering with large state updates

// Q.What are React’s rendering phases? ============================================================
// => REACT rendering process have 2 phases. + 1. render phase [called reconcilation phase] : react checks what to render according to latest state and props , then calles components to build new virtual DOM , then compares it with previous one for changes , then does not touch the real DOM yet + 2. commit phase : react applies changes to real DOM , then run side effects like useEffect, useLayoutEffect etc

//
// Q.How does React’s batching mechanism work in React 18? ============================================================
// batching means group multiple state updates togather and process them in single render + react 18 automatically batches but still gives you control via flushSync() function when needed.

// Q.What are the key differences between SSR, SSG, ISR, and CSR? ============================================================
// SSR : Server Side Rendering : rendered on every request + runs on server + fresh HTML generated on every request + used for dyncmic pages
// SSG : Static Site Generation : rendered on build time + runs on built + html generated as static on built time + used for blog, docs etc.
// ISR : Incremental Static Regeneration : rendered on build + runs on server + html is generated as static and auto updated + used ofr news etc
// CSR : Client Side Rendering : render on client + runs on user browser + js fetches data + dashboard and SPA

// Q.How does React’s hooks dependency array work in useEffect? ============================================================
// => []: effect runcs only once after the initial render + no array : effect runs after every render
// Q.What are the best practices to prevent stale closures in hooks? ============================================================
//
// Q.What is useDeferredValue, and how does it differ from useMemo? ============================================================
// => useDeferredValue : used when you want to delay expensive rendering like large list duting user interactions like typing adn clicking
// => memo : a computed value to avoid recalculating it on every render.

// Q.What are the challenges of server-side rendering with lazy-loaded components? ============================================================
// => React.lazy() uses dynamic import() which is async while SSR is sync by default beacuse server renders everyting on one go. So on server react can't wait for import() to resolve before rendering + SEO suffered if important components aren't rendered. +

// Q.How does dynamic imports work in Next.js? ============================================================
// => A dynamic import loads a component on demand, instead of at the initial page load + const MyComponent = dynamic(()=> import ("../components/mycomponents"))

// Q.How do you share logic between components efficiently in React? ============================================================
// using custom hooks

// Q.How do you prevent unnecessary re-renders in event handlers? ============================================================
// => to prevent unnessary re-renders we use useCallback, react.memo, + using inline functions like [<Child onClick={() => doSomething()} />] creates a new function every time which cuses child to re-render

// Q.What is React’s Offscreen Rendering, and how does it work? ============================================================
// => it allows react to pre-render components in the background while keeping them hidden, then reveal them instantly when required - without re-rendering them from scratch.

//  Q. difference between useCallback, useMemo, React.memo? ============================================================
// Ans.
// 1. React.memo : - when parent's state is changed, it's children also re-render. so we use React.memo() in child component to stop unnessasory render + it is pure component + also HOC + syntex = export defalut React.memo(child); + it will only re-render when props will change + it works on shallow level only means it wont work on nested objects.

// 2. React.useCallback :- in js if we create 2 same functions with different name and compare, it will return false + When we create a function in parent and send that function as a prop in child component, then when parent re-reders it take parent's same function as unique function so it re-reders child component also because we pass parent's function to child as props + here memo will not work becz according to js props is changing. sot we use useCallback in parent's function to tell js that function is same at all renders + useCallback is used to freeze a function so it will not consider as updated function +  it will take dependency array + so when dependency updated, only then child re-rendered + we only use useCallback hook when function will be static in program that's why it is called useCallback is used to chache a function
// example:-.
// const parentComponentFunction = useCallback(()=>{
//   //task to do
// },[])

// 3. React.useMemo:- a component have 2 states. in one state we have array named "numbers" with 10000000000 objects. and we finding a property whose name is "Salil" in all the objects . then if we update second state, whole component will re-render so that calculation will also done again so we use useMemo here + useMemo also take dependency array that is why it is called to chache a calculation's value + useCallback and useMemo is also called memoization in react.

// example:-
// const userWithNameABCD = useMemo(()=>{numbers.find((item)=>{item.name=="Salil"})},[])

// Q. how to make custom hooks ? ============================================================
// custom hooks are normal js function that starts with "use" and can use useState and useEffect in it + custom hooks are used to reuse the logic like fetching data, handling forms accross mulitple components without repeating code.
// eg :
// import { useState, useEffect } from "react";

// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(json => {
//         setData(json);
//         setLoading(false);
//       });
//   }, [url]);

//   return { data, loading };
// }

// => how to use custom hooks : const { data, loading } = useFetch("https://api.example.com/users");

// Q. how to implement context api? give code. ============================================================
// => it have 3 steps :
// Step 1. createContext : to initiate Context API.
// Step 2. Provider : used for update or provide data.
// Step 3. useContext : get data from context api

// => Step 1 : create context

// import React, { createContext, useState } from "react";
// export const GlobalData = createContext();
// export default App = () => {return (<></>)};

// => Step 2 : Provider

// export default App = () => {
//     const [color, setColor] = useState("green");   // used to send data from parent to child using context not props
//     const getDay = (item) =>{console.log("data got from child:",item)}  // used to recieve data from chilt to parent using context
//   return (
//     <>
//       <GlobalData.Provider value={{ appColor : color , getDay : getDay }}>
//         <div>
//           <h1>App component</h1>
//         </div>
//       </GlobalData.Provider>
//     </>
//   );
// };

// Step 3 : useContext

// import React, { useContext } from "react";
// import { GlobalData } from "./App";
// export default SuperChild = () => {
//   const { appColor, getDay } = useContext(GlobalData);
//   const day = "Sunday";
//   return (
//     <div>
//       <h1 style={{ color: appColor }}>SuperChild Component</h1>
//       <button onClick={() => getDay(day)}>Click Me</button>
//     </div>
//   );
// };

// Q.Explain all hooks in React.js. why react hooks are use full? ============================================================
// Ans. hooks are usefull becz = manage state easily + use lifecycle method easily + Reusability of hooks and others.
// => UseState : for update state
// => useEffect : for lifeCycle method
// => useCallback : used for rerendering
// => useMemo : used for reredering
// => useContext : used in Context API
// => useReducer : alternate of useState hook + it works like redux
// eg:
// import React, { useReducer } from "react";

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, 0);

//   const reducer = (state, action) => {
//     if(action.type=="Increment") return state+1;
//     if(action.type=="Decrement") return state-1;
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => { dispatch({ type: "Increment" })}}>Increment</button>
//       <button onClick={() => {dispatch({ type: "Decrement" })}}>Decrement</button>
//     </div>
//   );
// };

// export default App;

// => useRef : used to change dom directely without re-render + used to control any html element + we gell all the control of input field in useRef +
// eg:
// import { useRef } from "react";

// const APP = () => {
//   const inputRef = useRef(null);
//   const h1Ref = useRef(null);
//   const inputHandle = () => {
//     inputRef.current.focus();
//     inputRef.current.style.color = "red";
//     inputRef.current.placeholder = "New Placeholder";
//   };

//   const h1Handler = ()=>{

//     h1Ref.current.style.color="green"
//   }
//   return (
//     <>
//       <h1 ref={h1Ref}>This is h1</h1>
//       <input ref={inputRef} placeholder="Enter user name" />
//       <button onClick={inputHandle}>Focus on input field</button>
//       <button onClick={h1Handler}>H1 useRef</button>
//     </>
//   );
// };

// export default APP;

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
// write a code for connecting a database + write a functions for database add,update,delete functions
// write a code for get,put,patch, post, delete apis
// write a Promise and Promise.all() code.
// make authorization and authentication apis.

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
// body-parser is middleware used to extract data from body + especially in post , put, patch requests + it is older way to get that + now we get it with "express.json()" and "express.urlencoded()" mehtods

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
// import timeout from "connect-timeout"
// app.use(timeout("5s")) // means every request have 5 seconds to excute
// app.get("/",(req,res)=>{if(req.timeout){res.send("taking too much time")}})

// How do you set custom headers in an Express.js response?==============================================
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
