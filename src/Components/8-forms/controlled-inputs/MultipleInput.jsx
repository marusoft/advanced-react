import { useState } from "react";
import "../controlled-inputs/style.css";

const MultipleInput = () => {
  // One state value for multiple inputs
  // using the name attribute
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleOnchange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Multiple Input</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={user.name}
          onChange={handleOnchange}
          name="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={user.email}
          onChange={handleOnchange}
          name="email"
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={user.password}
          onChange={handleOnchange}
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default MultipleInput;
