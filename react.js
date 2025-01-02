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
// 1. What is React.js  and it's history?
// => facebook created it in 2011

// 2.What are the advantages of react? and disadvantages
// => advantages :- uses virtual DOM + component based architecture (so reusable components) + Unidirectional data flow  (data in application flows in single direction )+ JSX + SEO friendly with Next.js
// => disadvantages :- not major disadvantages

// 3. What are Call, apply and bind methods, what is currying in JavaScript?

// => when we want to attach a function to different object for re-use then we use these methods.

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

// 3. difference between function and class component?
// => function based components :- uses simple js funciton to define component + no render () method needed to return jsx + uses useState hook to manage state + uses useEffect hook to handle side effects and lifecycle behaviours .

// => class based components:- uses ES6's class syntax to define component + require render () to return jsx + uses "this.state" and "setState"  to manage state + uses dedicated life cycle method like componentDidMount(),componentDidUpdate(), componentWillUnmount().

// 4.What are higher-order components?
// => Mostly used in class based components + HOC is a function who takes component as a parameter and returns a new component +
// example:-

// 5. what is typescript and how it's different.
// => developed by microsoft + define datatype of variable + typing error caught instant + JS is dynamic typed and ts is static typed + 
// 6. How are data passed from children to parents in react component?
// 7.Explain UseMemo, UseCallback, UseEffect and all hooks of react.js and lifecycle method in the class component.
// What are lifecycle methods of react? How we can achieve same in functional components?
// custom hook?
// diff between var let const
// Props are immutable and passed from parent component, while state is mutable and managed within the component.
// What are callback function ? Give disadvantages
// Super class is a class that is inherited by another class.
// When to use class component over functional component?
// React.memo or PureComponent
// mounting and shallow concept in testing library
// What is reducer and it's flow
// ES6 features and its use where and why?
// memoization techniques like useMemo and useCallback to prevent unnecessary re-renders
// hat is difference between get for each and map
// how would you add a Dynamic title on every page in React
//  why react hooks are use full?
// How to mock test cases using jest and react-testing library
// what is difference between get props and set props
// What is pure component?
// Virtual DOM is a lightweight copy of the actual DOM.
// what is performance optimization in reactjs
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
