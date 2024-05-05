import { useEffect, useState } from "react";

const ConditionalRendering = () => {
  const [isLoading, setIsLoading] = useState(true);

  const clickButton = () => {

    setIsLoading(true)
  }

  useEffect(() => {
    setTimeout(() => {
      // finsihed fetching data
      setIsLoading(false);
    }, 6000);
  }, []);
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      <button onClick={clickButton}>
        Send
      </button>
      {isLoading? <span>Loading...</span>: <span>Sent</span>}
      <h1>Conditional Rendering in React</h1>
    </div>
  );
};
export default ConditionalRendering;
