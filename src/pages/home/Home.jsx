import { useLoaderData } from "react-router-dom";
import NewsCard from "../newsCard/NewsCard";
import RightSideNav from "../shared//rightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className=" text-2xl font-bold">Welcome To Home Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        <div className="md:col-span-2 border">
          {news.map((aNews) => (
            <NewsCard key={aNews.id} aNews={aNews}></NewsCard>
          ))}
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
