Install react with these command using vite

# npm
npm create vite@latest my-react-app -- --template react

# yarn
yarn create vite my-react-app --template react


# Run your app
npm run vite

# React Hooks

## Important things to note about React Hooks

### General rules of Hooks
- Hooks always start with `use` from react hooks and custom hooks
- Hooks are written/called within function component and at the top level of the component.
- Hooks cannot be called conditionally
  
- `useState()`

```js
/**
 * useState()
 * Returns a stateful value, and a function to update it.
 * in another word, it returns an array with two elements
 * [0] => the current value
 * [1] => and function to update the current value.
 * score = > default value or the current value.
 * setScore = > a function to update default value.
 * state update triggers a re-render
 * @returns 
 */
const UseStateExample = () => {
  // at the top level
  const [score, setScore] = useState(0); 

  const increaseScore = () => {
    setScore(score + 1)
  }

  return (
    <div>
      <h2>UseStateExample</h2>
      <p>You have scored {score} mark</p>
      <button onClick={increaseScore}>increaseScore</button>
    </div>
  );
}
export default UseStateExample
```

```js

export const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

```

```js
import { useState } from "react";
import { data } from "../data";

const UseStateWithArrays = () => {
  const [user, setUser] = useState(data);
  return (
    <div>
      {user.map((item) => {
        // console.log(item)
        const { id, name } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default UseStateWithArrays;

```
- Remove single and Clear all user
  
```js
const UseStateWithArrays = () => {
  const [user, setUser] = useState(data);

  // function to remove user
  const removeUser = (id) => {
    // console.log(id);
    const newUser = user.filter((person) => person.id !== id)
    // console.log(newUser)
    setUser(newUser);
  };

  // function to clear all user
  const clearUsers = () => {
    setUser([]);
  };

  return (
    <div>
      {user.map((item) => {
        // console.log(item)
        const { id, name } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => removeUser(id)}>Remove user</button>
          </div>
        );
      })}
      <button style={{ marginTop: "2rem" }} onClick={clearUsers}>
        Clear users
      </button>
    </div>
  );
};
export default UseStateWithArrays;
```

```js
import { useState } from "react";

const UseStateWithObject = () => {
  const [name, setName] = useState("Kehinde");
  const [age, setNAge] = useState(22);
  const [hobby, setHobby] = useState("Coding Always");

  const displayPerson = () => {
    setName("Alimi");
    setNAge(34);
    setHobby("Love Python");
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys: {hobby}</h4>
      <button onClick={displayPerson}>Show Someone</button>
    </div>
  );
};
export default UseStateWithObject;

```

- Refactoring `useState()` with object

```js

import { useState } from "react";

const UseStateWithObject = () => {
  const [person, setPerson] = useState({
    name: "Kehinde",
    age: 24,
    hobby: "Coding Always",
  });

  const displayPerson = () => {
    setPerson({
      name: "Alimi",
      age: 34,
      hobby: "Love Python",
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

```



- `useEffect()`