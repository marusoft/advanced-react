import { useState } from "react";

// Submitting inputs using the FormData API

const UncontrolledInput = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.currentTarget will point to a form or refers to
    // a DOM element that triggers an event
    // console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log(formData); // with these outputs, we access to the available methods in FormData API

    // const name = formData.get("name")
    // console.log(name)
    // const email = formData.get("email")
    // console.log(email)
    // instead of getting each of the form field, we can transform them
    // Object.formEntries()
    // console.log([...formData.entries()])

    // Submitting to a server, we can use this
    // For example which will tranform the form field into object with key-value
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset()
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Hello UnControlled Input</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input name="name" type="text" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input name="email" type="email" id="email" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          name="password"
          type="password"
          id="password"
          className="form-input"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default UncontrolledInput;
