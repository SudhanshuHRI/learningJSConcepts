import "./App.css";

function App() {

  
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;


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


