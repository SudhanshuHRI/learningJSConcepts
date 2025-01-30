// 1. interview questions
// 2. practice questions
// 3. Puzzles

//////////////////////////////////////////////// Interview Questions ///////////////////////////////////////////

// Q.element vs component ?=======================================================

// Q. how lifting state up in react ? =======================================================

// Q.why fragments are better then div container =======================================================


// Q.why react use className over class =======================================================

// Q. What is React.js  and it's history? ============================================================

// Q. What are the advantages of react? and disadvantages ============================================================


// Q. difference between function and class component? ============================================================

// Q.What are higher-order components? ============================================================

// Q. what is typescript and how it's different. ============================================================

// Q. how would you add a Dynamic title on every page in React??=====================================================

// Q. virtual DOM Vs Actual DOM ?  ================================================================

// Q.What is  currying in react?====================================================

// Q.What is Data binding in react js? ==================================================================

// Q. what is uni directioanl data flow in react? ====================================================================

// Q.What is anti pattern in react?=========================================================================================

// Q.how to handle cors error on front end?==============================================================================

// Q.what we send in header to authentication?========================================================================

// Q. we have so many states declared in a component. How to avoid to  declare it multiple times ?? ======================

// Q.What is reconcilation in ReactJs?===============================================================================

// Q.statefull vs stateless ?===========================================================

// Q.Explain microfrontend approach in react?=========================================================

// Q. What is CI/CD pipeline ? ===========================================================

// Q.What is the difference between useref and createRef in React ?==============================

// Q.Explain why and how to update state of components using callback? =========================================

// Q. Does React useState Hook update immediately ? ==============================================

// Q.how to update array or object that is in state in React??===========================================

// Q.What is StrictMode in React ?===================================

// Q.Explain the concept of lazy loading in React and how it can be implemented? ==============================================

// Q. Describe static site generation (SSG) in the context of React.============================

// Q.How do you handle internationalization (i18n) in React applications?===================================

// Q.tree shaking .==================================

// Q. How to pass data between sibling components using React router? ==========================================

// Q.react 19 and its fearures?====================================================================================

// Q.export default vs export ? ============================================================================

// Q.what is webpack in react ? ==============================================================================

// Q.how can we change local server port in react =====================================================================

// Q. How are data passed from children to parents in react component? ============================================================

// Q. how to implement context api? give code. ============================================================

// Q.What are lifecycle methods of component in react? How we can achieve same in functional components? ========================================

// Q. how to make custom hooks ? ============================================================

//  Q. Props vs state ============================================================

// Q.Debouncing in js and react =====================================================================

// Q.Throttling in js and react ===========================================================================

// Q.polyfills in react ===========================================================================

// Q.what is portal in react ===================================================================================

// Q.API polling ? =========================================================================

// Q. React Profiler ============================================

// Q. how to make layout in react?? ==============================================================



// Q. How does React’s reconciliation algorithm work? ============================================================
// Q.What is React Fiber, and how does it improve React’s performance? ============================================================
// Q.Explain the concept of priority scheduling in React Fiber. ============================================================

// Q.What is Concurrent Mode in React, and how does it improve UI responsiveness? ============================================================
// Q.How does useTransition work in React? ============================================================
// Q.What is the difference between Concurrent Mode and Legacy Mode? ============================================================

// Q.What are React’s rendering phases? ============================================================
// Q.How does memoization (React.memo, useMemo, useCallback) optimize performance? ============================================================
// Q.How does React’s batching mechanism work in React 18? ============================================================

// Q.What are the key differences between SSR, SSG, ISR, and CSR? ============================================================
// Q.How does React Server Components (RSC) improve performance? ============================================================
// Q.Explain the working of Next.js middleware and how it affects rendering. ============================================================

// Q.How does the React Context API compare to Redux? ============================================================
// Q.What is the difference between Redux Thunk and Redux Saga? ============================================================
// Q.What are the pros and cons of Recoil, Zustand, and Jotai compared to Redux? ============================================================

// Q.How does React’s hooks dependency array work in useEffect? ============================================================
// Q.What are the best practices to prevent stale closures in hooks? ============================================================
// Q.What is useDeferredValue, and how does it differ from useMemo? ============================================================

// Q.How does React.lazy and Suspense help in code splitting? ============================================================
// Q.What are the challenges of server-side rendering with lazy-loaded components? ============================================================
// Q.How does dynamic imports work in Next.js? ============================================================

// Q.When should you use a custom hook vs. a HOC? ============================================================
// Q.How do you share logic between components efficiently in React? ============================================================
// Q.What are the best practices when designing custom hooks? ============================================================

// Q.How does React’s event delegation work? ============================================================
// Q.What is event pooling, and why was it removed in React 17? ============================================================
// Q.How do you prevent unnecessary re-renders in event handlers? ============================================================

// Q.How does React hydrate the UI in SSR applications? ============================================================
// Q.What is React’s Offscreen Rendering, and how does it work? ============================================================
// Q.Explain React’s Virtual DOM diffing algorithm in detail. ============================================================

// Q.Explain all hooks in React.js. why react hooks are use full? ============================================================
// Ans. hooks are usefull becz = manage state easily + use lifecycle method easily + Reusability of hooks and others.
// => UseState.
// => useEffect.
// => useCallback
// => useMemo 
// => useContext 
// => useReducer 
// => useRef 

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
