// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ JavaScript ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Explain the working of JavaScript ? =============================================================================
// => Crome's v8 engine have 2 parts :- 1.Memeory Heap, 2. Call Stack. + variables stored in memory Heap. Browser's memory + call stack is a container in which tasks are stored line wise. works on FILO

// => JS excution :-
// 𝟏. 𝐂𝐚𝐥𝐥 𝐒𝐭𝐚𝐜𝐤: This is where JavaScript runs your code one step at a time.
// 𝟐. Micro Task Queue: also called job queue + runs immidiately after current task + have high priority + async/await,Promises etc
// 𝟑. Macro Task Queue: also called task queue + runs after call stack is empty + setTiemout, setInterval etc
// 𝟒. 𝐄𝐯𝐞𝐧𝐭 𝐋𝐨𝐨𝐩: The Event Loop keeps checking if the Call Stack is empty. When it is, it takes the next task from the Callback Queue and puts it in the Call Stack to run.

// => when request comes, after catogarise in sync task or async task , event loop sends all async tasks to microtask Queue and macrotask Queue to excute

// reference links :- 1. https://www.jsv9000.app
//                     2. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=14
//                     3. https://www.youtube.com/watch?v=knLtKU4XvaU&list=PL8p2I9GklV44pN_8iYi2pPl2Gw4Pwb70f&index=15

// Q. diff between var , let ,const ? give example ============================================================
// => let and const inrtoduces in ES6 + var has function scope and let,const have block scope + all 3 are hosted but only var is initialised as undefined + var can redeclare

// Q. What are ES6 features ?? ==========================================================
// => Block scoped variables(let,const) + arrow function + templete letrals + default parameters + array and object destructuring + spread and rest operators + Promises + import/export modules + for-of loop + map,set data structures

// Q. difference between normal funciton and arrow funciton ? ====================================================
// => normal function : has it's own "this" + "arguments" object available + can work as constructor with "new" + hoisted
// => Arrow function : dont have own "this" + "arguments" object not available + connot work as constructor + not hoisted

// Q. What is hoisting ?? ================================================================
// => all variable and function declarations are moved to the top of their scope (before code runs).

// Q. What are premitive and non-premetive data types in js ? =============================================
// => Premitive : immutable (unable to change) + copied by value + stored in stack memory + string, Number, Boolean, undefined, null, symbol, bigInt
// => Non-premetive : mutable (able to change) + copied by reference + stored in Heap memory + Object, Array, Function, all built in objects (Date,Map,Set etc)

// Q. Explain all built in functions of js ?? =================================================

// => these functions are also called "array prototype functions" beacuse it works only on array not on object or string + we can use them indirectly using split() or object.entries() methods.

// 1. forEach() : Itrate over each element + dont return any array + change original array + cannot break or return early

// 2. map() : itrates over each element + return a new array with transform values + dont change original array

// 3. filter() : create a new array of only condition passed elements + returns a new array + dont change original array

// 4. find() : search the array and return first element that satisfies the condition + if no element pass , it will return undefined

// 5. findIndex() : search the array and return first element's index that satisfies the condition +if no element passed, it will return "-1"

// 6. some() : tests wheather at least one element pass the test + it will return boolean + if no element passed, it will return false

// 7. every() : tests wheater all element pass the test +  it will return boolean +  if any of the elemnt dont pass the test, it will return false.

// 8. push() : add one or more element in end or array and returns new length of array + modifies orignal array

// 9. pop() : remove last elemnt of array + return removed element +  modifies original array

// 10. unshift() : add element in beginning + return new length of array + modifies orignal array

// 11. shift () : remove first element of array + return removed element + modifies original array

// 12. splice() : add,remove,replace element in array + modifies original array + return array of removed elements , if no element removed,it returns blank array + array.splice(startIndex, noOfValuesToDelete, addItem1,addItem2,addItem3,.....)

// 13. concat() : merge 2 or more array + returns new concated array

// 14. slice() : used to get a portion of array + dont modify original array + array.slice(startIndex,endIndex); + return new array with portion

// 15. reduce() : used to reduce an array to single value

// 16. reduceRight() : works from right index of array

// 17. sort() : used to sort the array + returns sorted array + element are converted in string then sort

// 18. reverse() : reverse the order of elements in array + modifies orignal array + returns the reverse array

// 19. includes() : checks if an array or string contains certain element or substring + returns boolean

// 20. indexOf() : used to find first index of specified element in array or string + if not found returns -1

// 21. lastIndexOf() : returns the last index at which element is found + serches from backword

// 22. join() : used to combine all elements of array into single string with specified operator + array.join("-")

// Q. sort [1,2,3,11,22,33] using sort() method. =========================
// => arr.sort((a,b)=>a-b) for increment + arr.sort((a,b)=>b-a) for decriment

// Q. slice vs splice who modify orignal array?? give example =================================================================
// => splice is used to modify orignal array + slice give only shallow copy + splice(1,0,12,13) + slice (2,5)

// Q. what is IIFE ? why it is usefull? ====================================
// => immidiately inveked function + runs code immidiately + keeps variable and functions private and safe beacuse it create private scope so IIFE variables and functions dont conflict with global scope.

// Q. how to create a object without a prototype ? ===============================
// => const obj = Object.create(null) + It dont have .toString(),.hasOwnProperty() default prototype functions in it + dont conflict with inherit functions

// Q. What are wrapper Objects ? ========================
// => premitives [string,number,boolean,null,undefined] dont have methods + So, When try to use methods on primitive, JS wraps it temperory in an object called Wrapper Object + like string = String, number = Number + let str = "hello"; console.log(str.toUpperCase()); + null and undefined dont have wrapper objects

// Q. implicit vs explicit coercion ? =================================
// => Coercion means converting value from one type to another
// => implicit Coercion : when convert automatically,  eg: console.log("5" + 1 )
// => explicit coercion : when manually changed , eg: Number("42")

// Q. How to check value is NaN ? ================================
// => Number.isNaN(value) + gives boolean

// Q. How to check a number is even or odd without using modular operator ? ============================
// => Math.floor(num/2)*2===num ; + if it is true the even other false

// Q. How to check certain property exists in object ? also "in"vs "hasOwnProperty" =============================================
// => using "in" operator + obj.hasOwnProperty("name")

// Q. "in " vs "hasOwnProperty" ? =================================
// => "hasOwnProperty" only check in object's keys not in prototype + "in" operator finds in object's prototype also.

// Q. Function expression and function declaration ? =====================================
// => function expression : const sayHi = function(){console.log("Hi")}
// => function declaration : function sayHi(){console.log("hi")}

// Q. How to check if value is null ?  why typeof null == object ? ===============================
// => using '===' operator
// => typeof null == object becz it is a historical hub in js, null means novalue or empty , now it cannot be changed because live old code working on typeof null = object

// Q. What is "new" keyword do ? ===============================
// => used to create instance of object form constructor function or class

// Q.  What is AJAX ? =======================================
// => Asyncronous JavaScript And XML + it is a technique that send or recieve data form server without reloading the entire page + eg: you fill a form, you enter email to check if already registered, it check in real time without refreshing the page + fetch and axios automatically uses AJAX method

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
// => when function changes the value of states or global variables

// Q.Difference between promise , async await, callbacks? ===========================================================================================
// => Promises : a object that represent 3 states + Pending, fulfilled, rejected + cleaner and easier avoids deep nesting + should use when api calling or chaining tasks
// => Async/Await : makes async code look like synchronous + vary clean and readable + easy error handling with try-catch blocks +
// => Callbacks : a function passed as an argument + using too much callback will result to callback hell + hard to read, debug, maintain + should used when code is simple

// Q. "throw" keyword in js ? =============================================================================
// => used to throw manually error + should be used with try-catch + should throw error with "throw new Error("something went wrong")" object for good practice +  it stops excution of all the loops (in-built or for)

// Q.controlled and uncontrolled components? ========================================================================
// => component that used in form can be controlled or uncontrolled + controlled means react state controls the form data + uncontrolled means when DOM direactly controls the elements , using useRef hook in react is used to directly cange in DOM, value is stored in DOM

// Q.Explain about the Oops concepts 4 principle.========================================================================
// 4 principle of oops :-
// 1. Encapsulation : all the info of the program is grouped is in one place
// 2. Polymorphism : Single Object doing different things according to context
// 3. Inheritence : sharing parents properties with child
// 4. Abstraction : hiding inrelevent info and only showing relevent info to user + ease of using the program to user

// Q.what is use strict in js? ===========================================
// => react's useStrict is differenct +  in js it is used to apply normal rules in the application + makes app more secure and less error + in react we dont want to put "use Strict" because babel, webpack etc enables it automatically + use Strict throw undeclare variables's error, duplicate params name will not accept + this in functions is undifined

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

// Q.what is dead zone in js ? ========================================================
// => Only let and const have dead zone(TDZ) + Dead zone is the time between when variable is declared and when it is initialized + we cannot use let and const before it's declaration

// Q.what is mutation observer in js? =====================================================================
//=> it is built-in api in js which lets you watch changes in DOM tree + const observer = new MutationObserver(callback) + detect new elements or removed elements + good for dynamic UI

// Q. high order functions ?? ================================================================
// => takes function as a argument + returns function as a result + they are called high order functions becz they operate on other functions + some built-in HOF in js : map(), filter(), reduce(), forEach(),sort()

// Q.Private property and private fucntion in js ? ====================================================
// => Works in class based components

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

// Q. What is navigator in js ? ============================================
// => built-in Object + provids info about browser and device environment as giolocations, user online or offline + part of window object (window.navigator)

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

// Q. guess the output ==================================================================================
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

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ React.js ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Q. element vs component ? =======================================================
// element is plain js object that describes a DOM node , const element = <h1>Hello World</h1> + component is a function that returns react elements, comonents can be reused

// Q. how lifting state up in react or pass data from childen to parent ? =======================================================
// => lifting state means moving state from child to parent + used to share data with sibling component

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

// Q.  typescript vs js. ============================================================
// => Js dont provide type checking of variables + in js error catching is at runtime while typescript catch error at compile time

// Q. how would you add a Dynamic title on every page in React?? =====================================================
// => document.title = "about-us page" + we can use react-helmet library also

// Q. virtual DOM Vs Actual DOM ?  ================================================================
// => Dom is a tree structure that represent HTML elements in the browser + Real Dom : it is actual Dom elements in browser, slower for frequent updates, any update will direct update DOM, give less performance for big apps, managed by browser + Virtual Dom : JS copy of real Dom, faster for frequent updates, only updates real dom for bulk changes , give good performance for big apps, managed by react

// Q.What is  currying in react? ====================================================
// => in Currying, function dont take all arguments at once + instead takes only one argument at a time and return a new function each time + useful for breaking one function to many reusable pieces

// Q.What is Data binding in react js? ==================================================================
// => Data binding means a process where data is connected to UI so that UI updates automatically when data changes + in react default is one-way data binding (UniDirectional)

// Q. what is uni directioanl data flow in react? ====================================================================
// => means data goes in one direction only + Parent component holds the state. + It passes data to child components using props + If a child wants to change data, it cannot modify the parent's state directly + Instead, the child calls a function provided by the parent through props + The parent updates the state, and the new data flows down again

// Q.What is anti pattern in react? =========================================================================================
// => anti pattern means common coding practice + patterns you should avoid

// Q.how to handle cors error on front end or postman? ==============================================================================
// =>We use proxy in package.json + "proxy" : "http://localhost:5000"

// Q. we have so many states declared in a component. How to avoid to declare it multiple times ?? ======================
// => const [form,setForm] = useState({name:"",email:"",age:0}) + to update : setForm(prev=>({...prev,name:"john"}))

// Q. What is reconcilation in ReactJs? how it works ===============================================================================
// => it is a process React uses to update the UI effectively when state/props changes + instead re-rendering the entire DOM, react updates only updated parts

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
// => for array : setCount(prev=> [...prev , newValue]) + for object : setCount(prev =>{ ...prev, name:"Jane" })

// Q.What is StrictMode in React ? Why we use it ? ===================================
// => used to highlight potential problems + helps to write better code + sends warnings + re-renders component twice in development mode + it does not impact production + it doesnot fix bugs automatically, it just warns you

// Q. Explain the concept of lazy loading in React and how it can be implemented? ==============================================
// => means only render component when needed, instead of loading everything at once + reduces initial load time + we can lazy load routes, pages, models etc.

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

// Q. React Profiler ============================================
// => a tool helps to measure and analyze performance of react components + import React, { Profiler } from 'react'

// Q.What is React Fiber, and how does it improve React’s performance? ============================================================
// => it is a reconciliation engine of react from react 16 + before fiber react was unable to prioritise the task and renders as syncronous
//
// Q.What is Concurrent Mode in React, and how does it improve UI responsiveness? ============================================================
// => it is a set of new features that let react work on multiple tasks at once + also pause, abort, resume and prioritise rendering tasks. + it is a part of react fiber

// Q.How does useTransition work in React? ============================================================
// => used to prioritize state updates in UI + if 2 states are updating , one is updating suddenly then a loop is running 20000000 times, then second is updating , first state is updating soon and other is updating in some time then we use useTransiton

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
// => custom hooks are normal js function that starts with "use" and can use useState and useEffect in it + custom hooks are used to reuse the logic like fetching data, handling forms accross mulitple components without repeating code.
// => how to use custom hooks : const { data, loading } = useFetch("https://api.example.com/users");

// Q. how to implement context api? give code. ============================================================
// => it have 3 steps :
// Step 1. createContext : to initiate Context API.
// Step 2. Provider : used for update or provide data.
// Step 3. useContext : get data from context api.

// Q.Explain all hooks in React.js. why react hooks are use full? ============================================================
// Ans. hooks are usefull becz = manage state easily + use lifecycle method easily + Reusability of hooks and others.
// => UseState : for update state
// => useEffect : for lifeCycle method
// => useCallback : used for rerendering
// => useMemo : used for reredering optamisation
// => useContext : used in Context API
// => useReducer : alternate of useState hook + it works like redux
// => useRef : used to change dom directely without re-render + used to control any html element + we gell all the control of input field in useRef

// Q. Write a Code for Practical ============================================================
// => Write a code to get data from child to component
// => Write a code to update array and object that is in useState
// => Write a code to create only one state with mulitple states and update it.
// => Write a code of lazy loading
// => Write a code of api polling
// => example of useTransiton Hook
// => give example of React.memo()
// => give example of useCallback.
// => give example of useMemo.
// => give example of custom hooks
// => give example of context API
// => give example of useReducer
// => give example of useRef
// => give code for debouncing
// => give code for throttling
// => give example of curring.
// => Write a code for closures.

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ Node.js ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

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

// process.nextTick() vs setImmidiate()? ============================
// => both used for async task + process.nextTick() has priority on setImmidiate () + process.nextTick() will excute after current JS Call Stack completes [before the event loop conticues] and setImmidiate will excute on the next iteration of the event loop

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
// => under "fs" module + used to stream data + data is read or write in chunks + dont load entire file
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
// through callback, Promises, async/await etc.

// What are the advantages of using the async/await syntax over callbacks and promises? =======================================
// simplified syntex + avoid callback hell + better error handling with try-catch

// How do you handle errors in asynchronous code in Node.js? =======================================
// using callback ((err,data)=>{}) + using promises (.catch()) + async/await (try-catch block)

// Q. Give Status codes =========================================
// => 200 OK – Request successful (standard response).
// => 201 Created – New resource created (e.g., after POST).
// => 202 Accepted – Request accepted, but processing not finished.
// => 204 No Content – Request succeeded, no content to return.
// => 200 OK – Request successful (standard response).
// => 206 Partial Content – Partial response (e.g., for range requests like video streaming).
// => 400 Bad Request – Invalid request syntax.
// => 401 Unauthorized – Authentication required.
// => 403 Forbidden – Request understood but not allowed.
// => 404 Not Found – Resource not found.
// => 405 Method Not Allowed – Request method not supported.
// => 408 Request Timeout – Server timed out waiting for request.
// => 409 Conflict – Conflict in request (e.g., duplicate entry).
// => 429 Too Many Requests – Rate limit exceeded.
// => 500 Internal Server Error – Generic server error.
// => 501 Not Implemented – Server doesn’t support the request method.
// => 502 Bad Gateway – Invalid response from upstream server.
// => 503 Service Unavailable – Server temporarily overloaded or down.
// => 504 Gateway Timeout – Upstream server didn’t respond in time.
// => 505 HTTP Version Not Supported – Unsupported HTTP version.

// is event loop in react.js and node.js different ? =========================================
// => yes + react.js doesn't have its own event loop , it works on browser's event loop +  node's event loop provided by libuv + node handles async ops with libuv

// What are Promises in Node.js, and how do they differ from callbacks?  =======================================
// => promise is an object represent eventual compilation of async operation + states: pending, fulfilled, rejected + more powerful than callback + error handling and chaining cleaner

// Q. How do you handle WebSockets in Node.js for real-time communication? ============================
// => it allows realTime, 2 way communication between client and server without repeating http requests + used for chat apps, instant notifications, live dashboards + only once http connection is stablished + "ws" library is used + instead of using it we use socket.io library for better functions + socket.io is library over websocket + websocket is a protocol

// Q. How can you manage session state in a stateless environment like Node.js? ===========================
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
// => REPL means READ, EVAL, PRINT, LOOP + used to run node.js on CMD

// What is the difference between Node.js and AJAX? ========================================================
// => Node : runs on server side + runs js on server + used to build api,server,backend app
// => AJAX : runs on client-side + send and recieve data without refreshing browser + used to fetch data from server and update UI dynamatically

// What is event-driven programming in Node.js? ========================================================
// => where flow of program works on events + http, fs, net, streams are used for emit events  + it is good for real-time, I/O heavy applications

// What is the difference between spawn() and fork() methods?========================================================
// => both are used in Child_process + spawn() is used to run any script like cmd, python scripts while fork() is used to run only node.js scripts

// What is body-parser in Node.js? ========================================================
// => this middleware is used to parse the body of incoming http requests + when client send request, usually node dont parse it autoamtically in JSON

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
// => Specific middleware : it applies on specific routes

// Q. How to handle file uploads securely so that malicious files cannot be uploaded ===========================
// => limit file size + restrict file types + rename uploaded files + we use "multer" library

// How to handle JSON streaming? =====================================
// JSON streaming means instead of sending or recieving full JSON you send it in chunks + used in large database exports, streaming apis, real-time dashboards

// What is the purpose of NODE_ENV? ===================================
// => it is a variable in .env + it tells if app is in development, test, production + NODE_ENV=development + it changes app behaviour based on environment

// Q. Give code for below things ====================================================

// write a code for schema and model
// write a code for middleware implimentation on Procted routes and global routes
// write a code for connecting a database
// write a code for get,put,patch, post, delete apis with database functions
// write a Promise
// write a code for Promise.all()
// write a code for Promise.race()
// write a code for Promise.getSettled();
// write a code for jwt auth
// make authorization and authentication apis.
// write a code for refresh token and accesstoken
// write a code to click a event using EventEmmiter
// write a code to validate the schema using Joi library

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ Express.js ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// Q. What is Express.js, and why is it popular for web development? ===========================================
// => Node's web framework + it simplifies the process of creating server side logic and apis

// Q. what is "app.use(express.urlencoded({extended:false}))" middleware do ? ================================
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
// => body-parser is middleware used to extract data from body + especially in post , put, patch requests + it is older way to get that + now we get it with "express.json()" and "express.urlencoded()" mehtods

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
// => modular routing means spliting routes into seprate files to keep code clean and organized + as done in management console project in MRM + we create all routes in different files and import them in main index.js

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
// import timeout from "connect-timeout";
// app.use(timeout("5s")) // means every request have 5 seconds to excute
// app.get("/",(req,res)=>{if(req.timeout){res.send("taking too much time")}})

// How do you set custom headers in an Express.js response? ==============================================
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

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ Mongo DB ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

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
