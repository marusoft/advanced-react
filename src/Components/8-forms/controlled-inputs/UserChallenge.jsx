import "../controlled-inputs/style.css";
import { useState } from "react";
import { data } from "../../../data";


// Add user
// Remove user

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = {id: fakeId, name}
    const updatedUser = [...users, newUser]
    setUsers(updatedUser);
    setName("")
    // console.log("Form Submitted");
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>Challenge</h2>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add Users</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      {/* render users below */}
      <h3>Users</h3>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
