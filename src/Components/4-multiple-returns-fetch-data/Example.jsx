import { useEffect, useState } from "react";

const url = "https://api.github.com/users/marusoft";

const Example = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true)
          return
        }
        console.log(response);
        const result = await response.json();
        // console.log(result);
        setUser(result);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error occurs in the application</h2>;
  }
const { avatar_url, login, name, company, bio} = user
  return (
    <div>
      <h2>Fetch Data</h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={login}
      />
      <h2>{name}</h2>
      <h4>work at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default Example;
