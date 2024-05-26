import useFetchPerson from "./useFetchPerson";

const url = "https://api.github.com/users/marusoft";

const Example = () => {
  const { isLoading, isError, user } = useFetchPerson(url);
  // Order matters
  // Dont place user JSX before loading or error
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error occurs in the application</h2>;
  }
  const { avatar_url, login, name, company, bio } = user;
  return (
    <div>
      <h2>Fetch Data Using Custom Hook</h2>
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
