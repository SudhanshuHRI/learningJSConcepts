// 1.  Interview Questions
// 2.  Practice Questions
// 3.  Puzzles

/////////////////////////////////////////  interview questions  ////////////////////////////////////////////////////////

// Q. Explain the working of JavaScript ? =============================================================================
// Ans.
// => Crome's v8 engine have 2 parts :- 1.Memeory Heap, 2. Call Stack.
// => Memeory Heap :- where variable are saved. browser's memeory
// => Call Stack :- a container in which tasks are stored line wise. it works on FILO(first in last out).
// => js is single threaded. means it has single call stack so it can do only one task in one time.
// => js is single threaded and syncronous by default but it has built in features to handle async operations like callback, Promises, async/await, Event loop.

// working of js----------------------
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

// Q. What are premitive and non premetive data types in js ? =============================================
// => Premitive : immutable (unable to change) + copied by value + stored in Stack memory + string, Number, Boolean, undefined, null, symbol, bigInt
// => Non-premetive : mutable (able to change) + copied by reference + stores collention or more complex data + Object, Array, Function, all built in objects (Date,Map,Set etc) + stored in Heap memory +

// Q. all built - in array functions in react ? give all ==================================================
// Ans. React dont have any built in methods. it takes form js.

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

// 22. join() : used to combine all elements of array into single atring with specified operator + array.join("-")

// Q. sort [1,2,3,11,22,33] using sort() method. =========================
// => arr.sort((a,b)=>a-b) for increment + arr.sort((a,b)=>b-a) for decriment

// Q. why 2 similer objects comparing returns false ? =========================================
// => beacuse object are declared by refrence

// Q. slice vs splice who modify orignal array?? give example =================================================================
// => splice is used to modify orignal array + slice give only shallow copy + splict(1,0,12,13) + slice (2,5)

// Q. what is IIFE ? why it is usefull? ====================================
// => immidiately inveked function + runs code immidiately + variables and functions inside it are not accessible outsite it

// Q. Why are functions called first class objects ? ======================================
// => becz functions can assign to variables + passed as arguments
// Q. "Array.prototype.map" ?? ========================================

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


