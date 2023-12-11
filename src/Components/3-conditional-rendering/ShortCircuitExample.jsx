import { useState } from "react"



const ShortCircuitExample = () => {
 const [text, setText] = useState("");
 const [name, setName] = useState("Abraham");
 const [user, setuser] = useState({name: "jacob"})

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
          user && <SampleComponent name={user.name} />
        }
      </div>
    </div>
  );
}


const SampleComponent = ({name}) => {
  return (
    <div>
      <h2>SampleComponent</h2>
      <h2>{name}</h2>
    </div>
  );
}

export default ShortCircuitExample