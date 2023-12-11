import { useState } from "react";

const UseStateWithObject = () => {
  const [person, setPerson] = useState({
    name: "Kehinde",
    age: 24,
    hobby: "Coding Always",
  });

  const displayPerson = () => {
    // setPerson({
    //   name: "Alimi",
    //   age: 34,
    //   hobby: "Love Python",
    // });
    //  setPerson({
    //    name: "omotoyosi",
    //  });
      setPerson({
        ...person,
        name: "Omotoyosi",
      });
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button onClick={displayPerson}>Show Someone</button>
    </div>
  );
};
export default UseStateWithObject;
