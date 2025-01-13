// 1. interview questions
// 2. practice questions
// 3. Puzzles

//////////////////////////////////////////////// Interview Questions ///////////////////////////////////////////

// Q.element vs component ?=======================================================
// Ans. elements are created by React.createElement(<h1>hello</h1>) + component is js function that returns jsx

// Q.lifting state up in react ? =======================================================
// Ans. sharing common state to siblings components

// Q.why fragments are better then div container =======================================================
// Ans. fragement dont add extra node in DOM Tree so improve performance + keeps jsx structure clean + + fragments are ideal for grouping elements

// Q.why react use className over class =======================================================
// Ans. becz class is reverve keyword in js

// Q. What is React.js  and it's history? ============================================================
// Ans. facebook created it in 2011 + oper source + front end library + built SPA + created by jordan walke(facebook employee) +

// Q. What are the advantages of react? and disadvantages ============================================================
// Ans.
// => advantages :- uses virtual DOM + component based architecture (so reusable components) + Unidirectional data flow  (data in application flows in single direction )+ JSX + SEO friendly with Next.js
// => disadvantages :- not major disadvantages

// Q. difference between function and class component? ============================================================
// Ans.
// => function based components :- uses simple js funciton to define component + no render () method needed to return jsx + uses useState hook to manage state + uses useEffect hook to handle side effects and lifecycle behaviours .

// => class based components:- uses ES6's class syntax to define component + require render () to return jsx + uses "this.state" and "setState"  to manage state + uses dedicated life cycle method like componentDidMount(),componentDidUpdate(), componentWillUnmount().

// Q.What are higher-order components? ============================================================
// Ans. Mostly used in class based components + HOC is a function who takes component as a parameter and returns a new component

// Q. what is typescript and how it's different. ============================================================
// Ans. developed by microsoft + define datatype of variable + typing error caught instant + JS is dynamic typed and ts is static typed

// Q. how would you add a Dynamic title on every page in React??=====================================================
//Ans. useEffect(()=>{document.title = "Home - My Website";},[]) + we can also do it with react-router-dom 's useLocation

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
// Ans. setCount((prevCount) => prevCount + 1);

// Q. Does React useState Hook update immediately ? ==============================================
// Ans. No it dont update immidiately + state updates are ayncronous so when we update state, it updates on next re-render of component + if we want to make update immidiately then put code in useEffect and give dependency that state.

// Q.how to update array or object that is in state in React??===========================================
// Ans.
// update array:
// const addItem = () => {
//   setItems([...items, 4]); // Create a new array and add an item
// };

// updating object:
// const updateName = () => {
//   setUser({ ...user, name: "Jane" }); // Update the 'name' property
// };

// Q.What is StrictMode in React ?===================================
// Ans. strict mode is used to impliment validation + if we don's use priciple or not following rules of react then strict mode send error and warnings + strict mode works in development mode not in production mode + in react development many consoles comes 2 time beacuse of strict mode.

// Q.Explain the concept of lazy loading in React and how it can be implemented?
// Ans. when application become heavy then it takes time to load so with use of lazy loading heavy component will load later and fast component will load first
// eg:-
// import React, { Suspense, lazy } from "react";
// import FirstFastComp from "./";
// const FirstHeavyComponent = lazy(() => import("./firstHeavyComp"));
// const SecondHeavyComponent = lazy(() => import("./secondHeavyComp"));

// function App() {
//   return (
//     <div>
//       <FirstFastComp />
//       <Suspense fallback = {<div>First Lazy component is loading. Please Wait.......</div>}>
//         <FirstHeavyComponent />
//       </Suspense>
//       <Suspense fallback = {<div>Second Lazy component is loading. Please Wait.......</div>}>
//         <SecondHeavyComponent />
//       </Suspense>
//     </div>
//   );
// }

// Q. Describe static site generation (SSG) in the context of React.============================
// Ans. we can use SSG in react with help of Next.js + server side rendering is also called pre-rendering + server side rendering have 2 types.
// 1.Server side rendering (SSR):- when we request a page , each time js is converted to html on server side and server send it to client.
// 2.Static site generation (SSG):- when we make build, at that time js is converted to html and on every request that html comes to client

// ex- we fetch user list and each user details when we get dynamically , each time request goes to server and makes SSR. so we can use SSG to make html of each page on build time. it will speed up . to make SSG we use generateStaticParams() funciton in next.js.

// Q.How do you handle internationalization (i18n) in React applications?===================================
// Ans. develop react app to support multiple languages like hindi, chineese, korien etc. we have libraries for that.

// Q.tree shaking .==================================
// Ans. it is  technique in react which removes unused dependency, functions, code when bundules are made in build. if it is not happen then build will be heavy weight +  webpack module in react do this task automatically with ES6's import/export only + those libraries dont support import/export, they will not be removed( like moment library for date time)

// Q. How to pass data between sibling components using React router? ==========================================
// Ans. we so that with shared state using react router dom + where routing is doing , we create a state. then we send setSharedData to other component and use sharedData state in sibling component.
// eg:-
// import {Router,Routes,Route} from "react-router-dom";

// function App(){
//   const [sharedData,setSharedData] = useState('')
//   return<>
//   <Routes>
//     <Route path ="/sibling1" setSharedData= {setSharedData}/>
//     <Route path = "/sibling2" sharedData={sharedData}/>
//   </Routes>
//   </>
// }

// Q.react 19 and its fearures?====================================================================================
// Ans. released on 25 april 2024 +
// 1.Actions :-use asynchronous functions withe pending states, forms, errors.
// 2. hooks:- useTransition , useOptimistic, useActionState, useFormStatus
// 3."use" function

// Q.export default vs export ? ============================================================================
// Ans.
// 1. export(named exports) :- this allows to export multiple values/ function from file + when importing give specific name.  import {sum,multiply} from "./utils"
// 2. export defalut (defalut export) :- one file can export only one + when importing you dont need to give specific name. ex:- you export Greet then you can import it as GreetFunction.

// Q.what is webpack in react ? ==============================================================================
// Ans. webpack is module bundler to compile js files with their dependencies and create single bundle + march 2012 release date + mainly used to make build + minify js and css + webpack also set entry file . we can change intry file with webpach configration +

// Q.how can we change local server port in react =====================================================================
// Ans. create .env and their declare PORT=3001 and restart.

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

// here input field is usedd to manipulate DOM. ref attribute given to  input to identify.

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

//  Q. Props vs state ============================================================
//  Ans. Props are immutable and passed from parent component, while state is mutable and managed within the component + props are immutable, which means you cannot directly modify or set props within a child component. Props can only be set by the parent component when they pass them down to the child component.

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

// Q.Debouncing in js and react =====================================================================
// Ans. when we use onchange function , it call multiple times when any key presses + debouncing delays the excution of a function for certain time but if in that time any event triggered then its delay time extends + good tech for searchBox's list recommendation
// eg:-
// import React, { useState } from "react";

// const DebouncedSearch = () => {
//   const [query, setQuery] = useState("");
//   const [debouncedQuery, setDebouncedQuery] = useState("");

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);

//
//     clearTimeout(this.debounceTimeout); // Clear previous timer

//     // Set a new timer
//     this.debounceTimeout = setTimeout(() => {
//       setDebouncedQuery(value); // Simulate API call or state update
//     }, 500); // Delay of 500ms
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleInputChange}
//       />
//       <p>Debounced Value: {debouncedQuery}</p>
//     </div>
//   );
// };

// export default DebouncedSearch;

// Q.Throttling in js and react ===========================================================================
// Ans. In throttling function will be called only once in a time  while how many times user clicked the button. it dont reset the time + main difference in them is that throttling dont reset time while debounding restet time on button click + throttling mainly work on scrolling. you want to show a popup on page scroll. of user scroll sudden up and down , then it will not work properly. so we use throttling.
// eg:-
// import React, { useState, useRef } from "react";

// const ThrottledScroll = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const throttleTimeout = useRef(null);

//   const handleScroll = () => {
//     if (throttleTimeout.current) return; // If there's an active timer, skip execution

//     throttleTimeout.current = setTimeout(() => {
//       setScrollPosition(window.scrollY); // Update scroll position
//       throttleTimeout.current = null; // Clear the timer
//     }, 500); // Throttle interval of 500ms
//   };

//   React.useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return <div>Scroll Position: {scrollPosition}</div>;
// };

// export default ThrottledScroll;

// Q.polyfills in react ===========================================================================
// Ans.polyfills are commonly used to ensure compatibility with older browsers like Internet Explorer or older versions of Safari.

// Q.what is portal in react ===================================================================================
// Ans. Normally, React components are rendered as children of their parent components in the DOM hierarchy. However, using a portal, you can render a child component into a separate DOM node outside of this hierarchy.

// Q.API polling ? =========================================================================
// Ans. API Polling is a technique where a client repeatedly makes requests to a server at regular intervals to check for updates or changes + used in live scroes, monitoring data that changes frequently.

//  Q. React Profiler ============================================
// Ans. it is a tool to measure and analyse the performance of react components in application + capture render timings, identifies wasted renders etc.
// eg:-
// import React, { Profiler } from "react";

// function App() {
//   const onRenderCallback = (
//     id, // The "id" of the Profiler tree that has just committed
//     phase, // "mount" or "update"
//     actualDuration, // Time spent rendering the committed update
//     baseDuration, // Estimated time to render without memoization
//     startTime, // When React began rendering this update
//     commitTime, // When React committed this update
//     interactions // Set of interactions triggered during this update
//   ) => {
//     console.log({ id, phase, actualDuration });
//   };

//   return (
//     <Profiler id="App" onRender={onRenderCallback}>
//       <MyComponent />
//     </Profiler>
//   );
// }
// Q. how to make layout in react??
// Ans.Step1: first create a layout file.
// Step 2 : write this code.
// import react from "react";
// import Header from "./header";
// import Footer from "./footer";
// import Main from "./main";
// import Sidebar from "./sidebar";
// import Navbar from "./navbar";

// const Layout = ({ children }) => {
//   return (
   
//       <div className="LayoutContainer">
//         <Navbar />
//         {/* <Header /> */}
//         <div className="d-flex ">
//           <Sidebar />
//           <Main />
//         </div>
//         <Footer />
//       </div>
   
//   );
// };

// export default Layout;

// Step 3 :  inmport this component in app.js

/////////////////////////////////////////////  Exersises  ///////////////////////////////////////////////////////
// Implement counter such that it has 2 buttons to increment and decrement the values
// write a code to create custom hook in React.
// write a code for context api
// write a code to fetch data from child component
// write a code using memoization  useCallback, useMemo, React.Memo
// write a code for update array and object in array
// Find largest element in array without sort, find sum of all element in array, find count of each element in array like how many times each element occurred in array?
// Two arrays passed to one function, then remove the elements passed from source array and present in another array
//Given an array of integers, return the sum of all even numbers.
// Create a new array by adding elements from two different arrays at the same indexes.
// Capitalize last letter of each word in a string
// Convert decimal to binary without using inbuilt functions.
// Number to word like 102 one hundred two

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
