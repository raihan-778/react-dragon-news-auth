import Header from "./shared/header/Header";
import LeftSideNav from "./shared/leftSideNav/LeftSideNav";
import Navbar from "./shared/navbar/Navbar";
import RightSideNav from "./shared/rightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className=" text-2xl font-bold">Welcome To Home Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
       <div className="border "> <LeftSideNav></LeftSideNav></div>
      
      <div className="md:col-span-2 border"><h2>News is commit soon!</h2></div>
      <div className="border"><RightSideNav></RightSideNav></div>
      </div>
    </div>
  );
};

export default Home;
