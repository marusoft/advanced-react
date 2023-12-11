import { Person } from './Person';
/**
 * take a look at the people in array in data.js
 * create List.jsx component
 * in List.jsx import and iterate over people (data)
 * for now just render name
 * once you have list setup separate 
 * Person.jsx component
 * try glean extension
 * in Person render name, nickName, image
 */
// import { useState } from "react";
import { people } from "../../data";

const List = () => {
  // const [person, setPerson] = useState(people);
  return (
    <div>
      <h3>Person Challenge</h3>
      {people.map((p) => {
        return <Person key={p.id} {...p} />;
      })}
    </div>
  );
};
export default List;
