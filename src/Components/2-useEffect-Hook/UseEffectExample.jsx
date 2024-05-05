import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectExample = () => {
  const [users, setUsers] = useState([]);
  // console.log("users ==", users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // succesfull response
        const data = await fetch(url);
        // console.log('data ==== ', data)
        const result = await data.json();
        setUsers(result);
        // console.log('result ==', result)
      } catch (error) {
        // failure response
        console.log(error)
      }
    };
    fetchUsers();
  }, []);
  // console.log("users ==", users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.login}</p>
          <img src={user.avatar_url} alt="" />
        </div>
      ))}
    </div>
  );
};
export default UseEffectExample;
