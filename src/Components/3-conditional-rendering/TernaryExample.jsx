/**
 * Ternary Operator
 * A concise way to express a conditional statement
 * condition ? "do something" : "Do another thing"
 */

import { useState } from "react";

const TernaryExample = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [user, setuser] = useState({ name: "Jacob" });

  return (
    <div>
      <h2>Ternary Example</h2>
      <button
        style={{ border: "none", backgroundColor: "dodgerblue", color: "#fff" }}
      >
        {isEditing ? "Edit" : "Add"}
      </button>
      {user ? (
        <div>
          <h3>hello there {user.name}</h3>
        </div>
      ) : (
        <div>
          <h3>Please login</h3>
        </div>
      )}
    </div>
  );
};
export default TernaryExample;
