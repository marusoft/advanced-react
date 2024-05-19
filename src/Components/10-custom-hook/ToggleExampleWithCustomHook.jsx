import useToggle from "./useToggle";

const ToggleExampleWithCustomHook = () => {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h4>ToggleExample with custom hook </h4>
      <button type="submit" className="btn btn-block" onClick={toggle}>
        toggle
      </button>
      {show && <h4>Display some stuffs</h4>}
    </div>
  );
};
export default ToggleExampleWithCustomHook;
