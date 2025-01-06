import moment from "moment/moment";

const Header = () => {
  return (
    <div>
      <img src="/public/assets/logo.png" alt="" />
  {moment().format("dddd, MMMM D, YYYY")}
    </div>
  );
};

export default Header;
