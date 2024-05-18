import { useState } from "react";
import "../controlled-inputs/style.css";

const frameworks = ["next", "react", "angular", "vue", "svelte"];

const OtherInput = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("next");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramwork = (e) => {
    setFramework(e.target.value)
  };

  return (
    <div>
      <form className="form">
        <h2
          style={{
            color: "#111",
          }}
        >
          Inputs with labels
        </h2>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramwork}
          >
            {frameworks.map((u) => {
              return <option key={u}>{u}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};
export default OtherInput;
