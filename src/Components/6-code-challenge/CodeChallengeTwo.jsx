import { useState } from "react";

/**
 * user challenge
 * create state value with user default value null
 * create two functions
 * login - set's user equal to object with name property
 * logout - set's user equal to null
 * in jsx use ? to display two different setups
 * h4 with "hello there user name" and logout button
 * h4 with "Please login" and login button
 */

const CodeChallengeTwo = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Alimi" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>User Challenge</h2>
      {user ? (
        <div>
          <h4>hello there {user.name}</h4>
          <button
            style={{
              border: "none",
              backgroundColor: "#ca4d44",
              color: "#fff",
            }}
            onClick={logout}
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button
            style={{
              border: "none",
              backgroundColor: "#449fca",
              color: "#fff",
            }}
            onClick={login}
          >
            login
          </button>
        </div>
      )}
    </div>
  );
};
export default CodeChallengeTwo;
