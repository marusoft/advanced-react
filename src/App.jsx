import "./App.css";

import UseStateExample from "./Components/1-useState-Hook/UseStateExample";
import UseStateWithArrays from "./Components/1-useState-Hook/useStateWithArrays";
import UseStateWithObject from "./Components/1-useState-Hook/UseStateWithObject";
import UseEffectChallenge from "./Components/2-useEffect-Hook/UseEffectChallenge";
import ConditionalRendering from "./Components/3-conditional-rendering/ConditionalRendering";
import Example from "./Components/4-multiple-returns-fetch-data/Example";
import ShortCircuitEvaluation from "./Components/3-conditional-rendering/ShortCircuitEvaluation";
import TernaryExample from "./Components/3-conditional-rendering/TernaryExample";
import CodeChallengeOne from "./Components/5-code-challenge/CodeChallengeOne";
import CodeChallengeTwo from "./Components/6-code-challenge/CodeChallengeTwo";
import Navbar from "./Components/navbar";
import { Home, About } from "./Components/pages/";
import List from "./Components/7-code-challenge/List";
import ControlledInput from "./Components/8-forms/controlled-inputs/ControlledInput";
import UseEffectExample from "./Components/2-useEffect-Hook/UseEffectExample";
import Products from "./Components/2-useEffect-Hook/product/Products";
import UserChallenge from "./Components/8-forms/controlled-inputs/UserChallenge";
import MultipleInput from "./Components/8-forms/controlled-inputs/MultipleInput";
import OtherInput from "./Components/8-forms/controlled-inputs/OtherInput";
import UncontrolledInput from "./Components/8-forms/uncontrolled-input/UncontrolledInput";
import UseRef from "./Components/9-useRef-Hook/UseRef";
import ToggleExample from "./Components/10-custom-hook/ToggleExample";
import ToggleExampleWithCustomHook from "./Components/10-custom-hook/ToggleExampleWithCustomHook";
import FetchData from "./Components/11-custom-hook-challengeOne/FetchData"

const App = () => {
  return (
    <>
      <h1>Hello React Hooks</h1>
      <UseStateExample />
      <UseStateWithArrays />
      <UseStateWithObject />
      <UseEffectChallenge />
      <ConditionalRendering />
      <Example />
      <ShortCircuitEvaluation />
      <TernaryExample />
      <CodeChallengeOne />
      <CodeChallengeTwo />
      <Navbar />
      <Home />
      <About />
      <List />
      <ControlledInput />
      {/* <UseEffectExample /> */}
      <MultipleInput />
      <UserChallenge />
      <OtherInput />
      {/* UncontrolledInput */}
      <UncontrolledInput />
      <UseRef />
      {/* ToggleExample without custom hook  */}
      <ToggleExample />
      {/* ToggleExample with custom hook  */}
      <ToggleExampleWithCustomHook/>
      <FetchData />
      <Products />
    </>
  );
};

export default App;
