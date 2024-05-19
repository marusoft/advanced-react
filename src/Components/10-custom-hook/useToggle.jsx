import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  // return [show, toggle]; // as an array
  return { show, toggle }; // as an object
};
export default useToggle;