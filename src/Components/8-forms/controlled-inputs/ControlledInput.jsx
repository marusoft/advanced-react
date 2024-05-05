import { useState } from "react";
import "./style.css";

const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleInputChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Hello Controlled Input</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInput;
