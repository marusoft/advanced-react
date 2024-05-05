/**
 * In a React application, the initial render is the first time that the component 
 * tree is rendered to the DOM. It happens when the application first loads, or 
 * when the root component is first rendered. This is also known as "mounting" 
 * the components.
 * Re-renders, on the other hand, happen when the component's state or props change, 
 * and the component needs to be updated in the DOM to reflect these changes. 
 * React uses a virtual DOM to optimize the process of updating the actual DOM, 
 * so that only the necessary changes are made.
 */

import { useEffect } from "react";

/**
 * useEffect(<cb function>, <dependency>)
 * useEffect is a hook in React that allows you to perform side effects 
 * in function components. Some examples of side effects are: subscriptions, 
 * fetching data, directly updating the DOM, event listeners, timers, etc.
 * Accepts a function that contains imperative, possibly effectful code.
 * @param effect — Imperative function that can return a cleanup function
 * @param deps — If present, effect will only activate if the values in
 * the list change.
 * Or
 * accepts two arguments 
 * first argument - cb function
 * second argument - dependency array (optional)
 * by default runs on each render (initial and re-render)
 * if dependency array empty [] runs only on initial render
 */

const UseEffectExample = () => {
  return <div>UseEffectExample</div>;
};
export default UseEffectExample;

useEffect(()=> console.log("hello useEffect"), [])


