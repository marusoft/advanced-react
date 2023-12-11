import { useState } from "react";
import ShortCircuitExample from "../../Components/3-conditional-rendering/ShortCircuitExample"

const ShortCircuitEvaluation = () => {

  const [text, setText] = useState("");
  const [name, setName] = useState("Abraham")

  return (
    <div>
      <h1>Short Circuit Evaluation</h1>
      <div>
        <h4>Falsy OR: {text || "Hello World"}</h4>
        <h4>Falsy AND: {text && "Hello World"}</h4>
        <h4>Truthy OR: {name || "Hello World"}</h4>
        <h4>Truthy AND: {name && "Hello World"}</h4>
      </div>
      <div>
        <ShortCircuitExample />
      </div>
    </div>
  );
}
export default ShortCircuitEvaluation