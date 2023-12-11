import { useState } from "react";
import { data } from "../../data";

const UseStateWithArrays = () => {
  const [user, setUser] = useState(data);

  // function to remove user
  const removeUser = (id) => {
    // console.log(id);
    const newUser = user.filter((person) => person.id !== id)
    // console.log(newUser)
    setUser(newUser);
  };

  // function to clear all user
  const clearUsers = () => {
    setUser([]);
  };

  return (
    <div>
      {user.map((item) => {
        // console.log(item)
        const { id, name } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => removeUser(id)}>Remove user</button>
          </div>
        );
      })}
      <button style={{ marginTop: "2rem" }} onClick={clearUsers}>
        Clear users
      </button>
    </div>
  );
};
export default UseStateWithArrays;
