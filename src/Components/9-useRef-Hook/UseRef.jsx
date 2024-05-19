import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);
  // console.log(refContainer);

  // this is to show that after the initial render, we have access to the input
  // useEffect(() => {
  //   console.log(refContainer)
  // })

  // this will only run every state value changes
  useEffect(() => {
    // console.log(isMounted);

    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);

  // To create focus on input
  // useEffect(() => {
  //   refContainer.current.focus()
  // })

  // Uncontrolled Input using useRef
  const handleSubmit = (e) => {
    e.preventDefault();
    // Uncontrolled Input using useRef to get the value of the input
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>UseRef</h2>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add Users</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          {/* Uncontrolled Input using useRef to get the value of the input */}
          <input
            type="text"
            className="form-input"
            id="name"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      <h1>Value: {value}</h1>
      <button
        type="submit"
        className="btn btn-block"
        onClick={() => setValue(value + 1)}
      >
        Submit
      </button>
    </div>
  );
};
export default UseRef;
