import { useState } from "react";

const CodeChallengeOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      <button
        style={{ border: "none", backgroundColor: "#8530ba", color: "#fff" }}
        onClick={() => setShowAlert(!showAlert)}
      >
        Toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4d50a",
        marginTop: ".8rem",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      Hello World
    </div>
  );
};
export default CodeChallengeOne;
