import { useEffect, useState } from "react";
/**
 * Fetch github users
 * https://api.github.com/users
 * create a function which performs fetch
 * functionality using the url provided above
 * iterate over the list and display image, user name
 * and link
 * which will only run on initial render
 */

const url = "https://api.github.com/users";

const UseEffectChallenge = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("hello useEffect");

    const fetchUserData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result)
        setUsers(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>hello useEffect Challenge</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UseEffectChallenge;
