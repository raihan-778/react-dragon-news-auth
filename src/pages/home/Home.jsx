import Header from "./shared/header/Header";
import Navbar from "./shared/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className=" text-2xl font-bold">Welcome To Home Page</h2>
    </div>
  );
};

export default Home;
