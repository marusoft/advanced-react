import { useState } from "react"



const ShortCircuitExample = () => {
 const [text, setText] = useState("");
 const [name, setName] = useState("Abraham");
 const [user, setUser] = useState({name: "jacob", age: 25, isMale: "male"})

  return (
    <div>
      <h1>Short Circuit Example</h1>
      <div>
        <h2>{text || "Default Value"}</h2>
        {text && (
          <div>
            <h2>Anything Return</h2>
            <h2>{name}</h2>
          </div>
        )}
        {/* {!text && (
          <div>
            <h2>Anything Return</h2>
            <h2>{name}</h2>
          </div>
        )} */}

        {
          user && <SampleComponent {...user} />
        }
      </div>
    </div>
  );
}


const SampleComponent = ({name, age, isMale}) => {
  return (
    <div>
      <h2>SampleComponent</h2>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{isMale}</h4>
    </div>
  );
}

export default ShortCircuitExample