import "./style.css";

const ControlledInput = () => {
  return (
    <form className="form">
      <h2>Hello Controlled Input</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" id="name" className="form-input" />
      </div>
    </form>
  );
};
export default ControlledInput;
