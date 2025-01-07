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
// Q. What is React.js  and it's history?
// Ans. facebook created it in 2011

// Q. What are the advantages of react? and disadvantages
// Ans.
// => advantages :- uses virtual DOM + component based architecture (so reusable components) + Unidirectional data flow  (data in application flows in single direction )+ JSX + SEO friendly with Next.js
// => disadvantages :- not major disadvantages

// Q. What are Call, apply and bind methods, what is currying in JavaScript?

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

// Q. difference between function and class component?
// Ans.
// => function based components :- uses simple js funciton to define component + no render () method needed to return jsx + uses useState hook to manage state + uses useEffect hook to handle side effects and lifecycle behaviours .

// => class based components:- uses ES6's class syntax to define component + require render () to return jsx + uses "this.state" and "setState"  to manage state + uses dedicated life cycle method like componentDidMount(),componentDidUpdate(), componentWillUnmount().

// Q.What are higher-order components?
// Ans. Mostly used in class based components + HOC is a function who takes component as a parameter and returns a new component

// Q. what is typescript and how it's different.
// Ans. developed by microsoft + define datatype of variable + typing error caught instant + JS is dynamic typed and ts is static typed +

// Q. How are data passed from children to parents in react component?
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

// Q.Explain all hooks in React.js .
// Ans.
// => UseState.
// => useEffect.
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

// => useCallback :- used to memorise a function to prevent unnecessory recalling of function during re-renders + only on changing dependency variable it will trigger re render + in js if we declare 2 same functions with different and compare it then it will be false so when parent re-renders, paraent's function takes as changed and this function passed in child then child component is also re-render so we put parent's function in useCallback. then it will not re-render +
// example:-
// import React, { useState, useCallback } from "react";

// function Parent() {
//   const [count, setCount] = useState(0);

//   // Memoize / freeze the function using useCallback
//   const showMessage = useCallback(() => {
//     alert("Hello from Child!");
//   }, []); // No dependencies, so the function will never be recreated

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child showMessage={showMessage} />
//     </div>
//   );
// }

// function Child({ showMessage }) {
//   console.log("Child rendered");

//   return <button onClick={showMessage}>Show Message</button>;
// }

// export default Parent;

// => useMemo :- avoid re-calling functions during every render + when a function is declared and called in jsx then on every re-reder it excuted so use useMemo.
// example:-
// import {useMemo} from "react";

// const multiCount = useMemo(()=>{console.log("multicount")})

// <div>{multiCount}</div>

// every time when page re-renders then multiCount will call again and again. so we use this function in useMemo.

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

// Q. how to implement context api? give code.
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

// Q.What are lifecycle methods of component in react? How we can achieve same in functional components?
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

// Q. how to make custom hooks ?
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

// Q.diff between var let const ?
// Ans.
// var : function scope + hoisted + allowed to redeclare in same scope and reassign values
// let : block scoped + hoisted but can't use it before declaration + can't redeclare in same scope but reassign value ;
// const : block scoped + hoisted but cant use it before declaration + can't redeclare and can't reassign;

//  Q. Props vs state
//  Ans. Props are immutable and passed from parent component, while state is mutable and managed within the component.

// Q.What are callback function ? Give disadvantages
// Ans. functiion that passed as argument to another function + excuted when parent function excuted fully + used in asyncronous programming
// => disadvantages : nested callback (also known as callback hell) is hard + defecult debugging

// Q.When to use class component over functional component?
// Ans. if working on old project + using older libraries

// Q. what is  React.memo and how to use it?
// Ans. React.memo and useMemo are not same + both used in optimising application + memo works as pure components + memo is HOC + it insures child component will re-render only if it's props updated + generally when you update a state in parent component, child component will also be re-render. in this we use memo in child component +  useCallback hooks looks like same but it rereder's only when dependency array will update. +  memo works on component level while useCallback works on functional level  + if a object is passed as props, react.memo will not work
// example:-
// import React, { useState } from "react";

// // A simple child component
// const ChildComponent = React.memo(({ value }) => {
//   console.log("ChildComponent rendered");
//   return <div>Value: {value}</div>;
// });

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(false);

//   return (
//     <div>
//       <h1>React.memo Example</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
//       <p>Count: {count}</p>
//       <ChildComponent value={count} />
//     </div>
//   );
// };

// export default ParentComponent;

// here when count will update only then child component will re- render and when we update otherState, child component will not re-render.

//  Q. difference between useCallback, useMemo, React.memo?
// Ans. 
// React.memo : - when parent's state is changed, it's children also re-render. so we use React.memo() in child component to stop unnessasory render + it is pure component + also HOC + syntex = export defalut React.memo(child); + it will only re-render when props will change + it works on shallow level only means it wont work on nested objects.

// React.useCallback :- 






// Q.What is reducer and it's flow
// ES6 features and its use where and why?
// hat is difference between get for each and map
// how would you add a Dynamic title on every page in React
//  why react hooks are use full?
// pure functions in React and what are side effects in react, when it is used ?

// what is difference between get props and set props
// Virtual DOM is a lightweight copy of the actual DOM.
// What is function currying
// What is Data binding in react js?
// What is one way data binding?
// Difference between promise and async await ?
// Explain the reducer method in js using the example
// Difference beetween thow and new thow
// What is anti pattern in react?
// how to handle cors error on front end
// what we send in header to authentication
// What is reconcilation in ReactJs
// Explain about the Oops concepts.
// What is the role of babel
// Explain microfrontend approach in react?
// Do you follow CI/CD process?
// What react router dom?
// What is the difference between useref and createRef in React ?
// Explain why and how to update state of components using callback?
// Does React useState Hook update immediately ?
// What is StrictMode in React ?
// Explain the concept of lazy loading in React and how it can be implemented..
// What are some common patterns for managing side effects in React applications?
// Describe the differences between server-side rendering (SSR), client-side rendering (CSR), and static site generation (SSG) in the context of React.
// How do you handle internationalization (i18n) in React applications?
// Explain the concept of tree shaking in the context of React and its benefits.
// What are the advantages and disadvantages of using TypeScript with React?
// Explain the concept of pure components in React and how they differ from regular components.
// What are the differences between controlled and uncontrolled components?
// How to perform automatic redirect after login?
//  How to pass data between sibling components using React router?
// How to prevent re-renders in React?
// lazy loading
