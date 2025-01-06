import moment from "moment/moment";
import BrakingNews from "../../home/brakingNews/BrakingNews";


const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src="assets/logo.png" alt="" />
      <p className="text-xl"></p>
  {moment().format("dddd, MMMM D, YYYY")}
  <BrakingNews></BrakingNews>
  
 
    </div>
    
  );
};

export default Header;
