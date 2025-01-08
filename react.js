//////////////////////////////////////////// Some Puzzles ///////////////////////////////////////////////////////////////////
// Component State Management Puzzles: Solve challenges that involve managing state in React components.
// Props Drilling and Alternatives Puzzles: Explore ways to manage state without excessive props drilling, like using Context API or Redux.
// Conditional Rendering Puzzles: Create conditional rendering logic to show different components based on certain conditions.
// Dynamic Forms and Controlled Components Puzzles: Handle dynamic forms and controlled components in React.
// Custom Hooks Puzzles: Build and utilize custom hooks to abstract common logic in your components.
// Memoization with useMemo and useCallback Puzzles: Optimize components using memoization techniques.
// Error Boundaries Puzzles: Implement error boundaries to handle errors in the component tree.
// Handling Side Effects with useEffect Puzzles: Solve problems that involve performing side effects in functional components.
// Context API and Global State Puzzles: Use the Context API to manage and share state globally in React apps.
// React Router and Dynamic Routing Puzzles: Implement dynamic routing using React Router.
// Performance Optimization and Lazy Loading Puzzles: Optimize the performance of a React app with lazy loading and React.memo.
// Managing Forms with Form Libraries Puzzles: Handle complex forms using libraries like Formik or React Hook Form.
// Higher-Order Components (HOCs) Puzzles: Create reusable logic by using HOCs.
// Compound Components Puzzles: Solve challenges involving compound components and shared state.
// Portal Usage Puzzles: Use React portals for rendering children outside the parent component’s DOM.
// Refs and Forwarding Refs Puzzles: Solve problems involving refs and ref forwarding in functional components.
// Testing React Components Puzzles: Write test cases using Jest and React Testing Library.
// Micro-Frontends in React Puzzles: Implement micro-frontend architecture using React components.
// Render Props Pattern Puzzles: Use render props to share code between components.
// Virtualization for Large Lists Puzzles: Implement a virtualized list to efficiently render large datasets.
// React Suspense for Data Fetching Puzzles: Use React Suspense to handle data fetching and display loading states.
// Error Handling in Async Functions Puzzles: Handle errors in async functions within React components.
// Animation in React Puzzles: Animate components using CSS or libraries like React Spring.
// Accessibility in React Components Puzzles: Solve accessibility-related challenges by making React components more accessible.
// Server-Side Rendering (SSR) with Next.js Puzzles: Implement SSR with Next.js and solve related challenges.
// Static Generation and Incremental Static Regeneration Puzzles: Solve challenges around static generation and ISR in Next.js.
// Authentication and Authorization Puzzles: Handle authentication and authorization flows in React apps.
// Managing WebSockets in React Puzzles: Use WebSockets to establish real-time communication in React apps.
// Using useLayoutEffect vs useEffect Puzzles: Understand when to use useLayoutEffect over useEffect in React.
// Recursive Components in React Puzzles: Build recursive components like tree structures or nested lists in React.
// React hooks like use Memo, Use Callback, useContext, use Ref, Use Reducer, use Navigate, use Location, use Params

/////////////////////////////////////////////  Exersises  ///////////////////////////////////////////////////////
// Implement counter such that it has 2 buttons to increment and decrement the values
// Find largest element in array without sort, find sum of all element in array, find count of each element in array like how many times each element occurred in array?
// Two arrays passed to one function, then remove the elements passed from source array and present in another array
//Given an array of integers, return the sum of all even numbers.
// Create a new array by adding elements from two different arrays at the same indexes.
// Capitalize last letter of each word in a string
// Convert decimal to binary without using inbuilt functions.
// Number to word like 102 one hundred two

//////////////////////////////////////////////// Questions on React.js ///////////////////////////////////////////

// Q. What is React.js  and it's history?============================================================
// Ans. facebook created it in 2011

// Q. What are the advantages of react? and disadvantages ============================================================
// Ans.
// => advantages :- uses virtual DOM + component based architecture (so reusable components) + Unidirectional data flow  (data in application flows in single direction )+ JSX + SEO friendly with Next.js
// => disadvantages :- not major disadvantages

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

// Q. difference between function and class component? ============================================================
// Ans.
// => function based components :- uses simple js funciton to define component + no render () method needed to return jsx + uses useState hook to manage state + uses useEffect hook to handle side effects and lifecycle behaviours .

// => class based components:- uses ES6's class syntax to define component + require render () to return jsx + uses "this.state" and "setState"  to manage state + uses dedicated life cycle method like componentDidMount(),componentDidUpdate(), componentWillUnmount().

// Q.What are higher-order components? ============================================================
// Ans. Mostly used in class based components + HOC is a function who takes component as a parameter and returns a new component

// Q. what is typescript and how it's different. ============================================================
// Ans. developed by microsoft + define datatype of variable + typing error caught instant + JS is dynamic typed and ts is static typed +

// Q. How are data passed from children to parents in react component? ============================================================
// Ans. through call back function.
// example:-
// function Parent() {
//     const [message, setMessage] = useState('');

//     const handleDataFromChild = (data) => {
//       setMessage(data);
//     };

//     return (
//       <div>
//         <h1>Message from Child: {message}</h1>
//         <Child sendDataToParent={handleDataFromChild} />
//       </div>
//     );
//   }

//   // Child Component
//   function Child({ sendDataToParent }) {
//     const handleClick = () => {
//       sendDataToParent('Hello from Child!');
//     };

//     return <button onClick={handleClick}>Send Data to Parent</button>;
//   }

// Q.Explain all hooks in React.js. why react hooks are use full?============================================================
// Ans. hooks are usefull becz = manage state easily + use lifecycle method easily + Reusability of hooks and others.
// => UseState.
// => useEffect.
// => useCallback : given downwords.
// => useMemo :- given downwords.
// => useContext :- allows you to access data from a React Context api
// => useReducer :- when a lot of useState are used, then we use useReducer
// example:-
// import {useReducer} from react;

// const reducer = (state,action)=>{
//     console.log(state,action)
//     if(action.type == "INCREMENT"){
//         return state +1;
//     }else if(action.type = "DECREMENT"){
//         return state -1;
//     }

// }
// const initialState = 0;
// const [state, dispach] = useReducer(reducer, initialState);

{
  /* <button onclick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
<button onclick={()=> dispatch({type:"DECREMENT"})}>Decrement</button> */
}

// => useRef :- used when we want to manipulate DOM directly through React
// example-
// import { useRef } from "react";
// function App() {
//   let inputRef = useRef(null); // here null is default value.

//   function handleRef() {
//     console.log("hello");
//     inputRef.current.value = "1000";
//     inputRef.current.focus();
//     inputRef.current.style.color = "red";
//     inputRef.current.style.display = "none";
//   }

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onclick={handleRef}>Click</button>
//     </>
//   );
// }

//here input field is usedd to manipulate DOM. ref attribute given to  input to identify.

// Q. how to implement context api? give code. ============================================================
// Ans.
// // step 1 : Creating a context
// import { createContext, useContext } from "react";

// const ThemeContext = createContext();

// // Step 2 : context Provider

// function Provider({ children }) {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // Step 3 : consume the context
// function Consumer() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <button onclick={setTheme(theme === "light" ? "dark" : "light")}>
//       click
//     </button>
//   );
// }

// // Step 4 : use Provider in App

// function App() {
//   return (
//     <Provider>
//       <ThemeToggler />
//     </Provider>
//   );
// }

// Q.What are lifecycle methods of component in react? How we can achieve same in functional components? ========================================
// Ans.
// =>In class component  lifecycle methods are :mounting/componentDidMount()(birth of a component or can say display:block ), updating/componentDidUpdate()(updated yourself with state or props), unmounting/componentWillUnmount()(expire a component or display:none).
// => In function Component same behaviour can achive with useEffect.
// example:-
// import React, { useEffect } from "react";

// function Component() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted");

//     return () => {
//       console.log("Component unmounted");
//     };
//   }, []); // Empty dependency array ensures this runs once

//   useEffect(() => {
//     console.log(`Count updated to: ${count}`);
//   }, [count]); // Runs when `count` changes

//   return <h1>Hello, World!</h1>;
// }

// Q. how to make custom hooks ? ============================================================
// Ans.
// => step 1 : Create useCustomHook.js
// import { useState } from 'react';

// function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);

//   const increment = () => setCount((prev) => prev + 1);
//   const decrement = () => setCount((prev) => prev - 1);
//   const reset = () => setCount(initialValue);

//   return { count, increment, decrement, reset };
// }

// export default useCounter;

// => step 2 : use of hook

// import React from 'react';
// import useCounter from './useCounter';

// function CounterApp() {
//   const { count, increment, decrement, reset } = useCounter(5);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default CounterApp;

// Q.diff between var let const ? ============================================================
// Ans.
// var : function scope + hoisted + allowed to redeclare in same scope and reassign values
// let : block scoped + hoisted but can't use it before declaration + can't redeclare in same scope but reassign value ;
// const : block scoped + hoisted but cant use it before declaration + can't redeclare and can't reassign;

//  Q. Props vs state ============================================================
//  Ans. Props are immutable and passed from parent component, while state is mutable and managed within the component + props are immutable, which means you cannot directly modify or set props within a child component. Props can only be set by the parent component when they pass them down to the child component.

// Q.What are callback function ? Give disadvantages ============================================================
// Ans. functiion that passed as argument to another function + excuted when parent function excuted fully + used in asyncronous programming
// => disadvantages : nested callback (also known as callback hell) is hard + defecult debugging

// Q.When to use class component over functional component? ============================================================
// Ans. if working on old project + using older libraries

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

// all object buit-in functions??

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

// Q. how would you add a Dynamic title on every page in React??=====================================================
//Ans. useEffect(()=>{document.title = "Home - My Website";},[]) + we can also do it with react-router-dom 's useLocation

//
// Q. pure functions and impure functions in js and what are side effects in js. ======================================
// Ans. if we have a component, when we pass 2 variable in a function whose value is static and not changing in whole component then those funtion's output will always return same because we pass static variables as a parameters. so it will called pure function. when we pass dynamic variable or state whos value is changing in compnent then each time output of a function will change so it will called impure function.

// side effect :- side effect is called when function update variable or state's value in it.

// Q. virtual DOM Vs Actual DOM ?  ================================================================
// Virtual DOM is a lightweight copy of the actual DOM + when state changes in a component, react only update it in virtual dom + react dont update actual dom every time + when page re-renders , new updates are shown .

// Q.What is  currying in react?====================================================
// Ans. in curring one funciton with multiple arguments is break in multiple funciton with single arguments + benifits:- reusability of functions + improve code readability etc.
// eg:-
// function Sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(Sum(1)(2)(3))

// Q.What is Data binding in react js? ==================================================================
// Ans. 2 type of data binding:- one way and 2 way + in one way data binding data goes from parent to child component + in two way data binding data flows from both direction + in react one way data binding is commonly used.

// Q. what is uni directioanl data flow in react? ====================================================================
// Ans. in uni-directional data flows from parent to child through props + child cannot modify props, it can be done only by callback + it works on one way data binding.

// Q.Difference between promise and async await ?===========================================================================================
// Ans. Promise : - it is a object + uses .then() and .catch()  + harder to readable + uses .catch() to hadle error
// Async/await :- uses async and await keyword + easy to read + uses try-catch to handle error

// Q. Throw keyword in js ?=============================================================================
// Ans. throw stops the excution of current function and pass the error to the catch block of calling function + if we use try-catch block, throw will send error in catch function.

// Q.What is anti pattern in react?=========================================================================================
// Ans. means write code neglecting core principles as:- changing actual DOM directly + over use of state and props  + not using key in array's loop +

// Q.how to handle cors error on front end?==============================================================================
// Ans. ideally solve it in backend using "cors" library (app.use(cors({origin:"front end url"}))) + in front end add {"proxy":"backend url"} in package.json
// Q.what we send in header to authentication?========================================================================
// Ans. fetch('sdfsfds',{
// method:GET,
// headers:{
//   "Authorization": `Bearern ${yourToken}`,
//   'content-Type':"application/json"
// }
// })

// in postman  > headers > origin > http://www....... (it is not recommended)

// Q.What is reconcilation in ReactJs?===============================================================================
// Ans. process of comparing the current virtual Dom to previous virtual Dom and do minimal update to make virtual dom to actual dom + it efficiently update the UI by minimizing DOM manupulations.

// Q.statefull vs stateless ?===========================================================
// Ans. statefull :- a component that has its own state and manages it internally.
// stateless:- A component that does not maintain its own state and relies entirely on props for data.

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

// Q.Explain microfrontend approach in react?=========================================================
// Ans. microfrontend approch means break application in small, manageble pieces + this approch inspired by microservices(where different parts of application developed, diployed, maintained sepreratly) + each component and feature is modularise and maintain by different teams like e-commerce. 

// Q. What is CI/CD pipeline ? ===========================================================
// Ans. continous integratino and continous deployemnt
// CI (Continous Integration) :- Developers integrate their code changes into a shared repository multiple times a day. Automated tests and builds are triggered to verify the changes.
// CD (Continous Deployment) :- automatically deploying every successful build to a production or staging environment without manual approval.

// example:-
// step1. developer pushes changes to github repo
// step2.github action triggers
// step3. if ci pipeline passes, app is build and passes to production environment autoamtically;


// Q.What is the difference between useref and createRef in React ?==============================
// Ans. useRef used in functional comp and createRef used in class component

// Q.Explain why and how to update state of components using callback? =========================================
// Ans.
// Does React useState Hook update immediately ?
// What is StrictMode in React ?
// Explain the concept of lazy loading in React and how it can be implemented..
// What are some common patterns for managing side effects in React applications?
// Describe the differences between server-side rendering (SSR), client-side rendering (CSR), and static site generation (SSG) in the context of React.
// How do you handle internationalization (i18n) in React applications?
// Explain the concept of tree shaking in the context of React and its benefits.
// What are the advantages and disadvantages of using TypeScript with React?
// Explain the concept of pure components in React and how they differ from regular components.
// How to perform automatic redirect after login?
//  How to pass data between sibling components using React router?
// react 19 fearures
// what is portal in react
// export default vs export 
// what is webpack in react
// how to do SSR in React
// how can we change local server port in react
// slice vs splice who modify orignal array??
