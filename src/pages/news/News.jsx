import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";

const News = () => {
  const { id } = useParams();
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="md:col-span-3">
          <h2>News Details: {id}</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default News;
