import { useState } from "react"


/**
 * useState()
 * Returns a stateful value, and a function to update it.
 * in another word, it returns an array with two elements
 * (1). the current value
 * (2). and function to update the current value.
 * score = > default value or the current value.
 * setScore = > a function to update default value.
 * state update triggers a re-render
 * @returns 
 */

const UseStateExample = () => {
  // console.log(useState("hello useState"))
  // const defaultValue = useState("hello useState")[0];
  // const funcToUpdateDefaultValue = useState("hello useState")[1];

  // console.log(defaultValue);
  // console.log(funcToUpdateDefaultValue);
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1)
  }
  return (
    <div>
      <h1>UseStateExample</h1>
      <p>You have scored {score} mark</p>
      <button onClick={increaseScore}>increaseScore</button>
    </div>
  );
}
export default UseStateExample