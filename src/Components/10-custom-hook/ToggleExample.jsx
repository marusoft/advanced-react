import { useState } from "react";

const ToggleExample = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h4>ToggleExample</h4>
      <button type="submit" className="btn btn-block" onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && <h4>Display some stuffs</h4>}
    </div>
  );
}
export default ToggleExample