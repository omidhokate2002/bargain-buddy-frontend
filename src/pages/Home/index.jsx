import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      <h1>Home</h1>
      {user && <h2>{user.name}</h2>}
    </div>
  );
};

export default Home;
