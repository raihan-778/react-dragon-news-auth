import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import myClass from "../../../assets/class.png";
import playGround from "../../../assets/playground.png";
import swimming from "../../../assets/swimming.png";

const RightSideNav = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Right Side Nav</h2>
      <div className="mt-2 p-4">
        <h2 className="text-2xl mb-2 text-center">Login With</h2>
        <button className="btn mb-2 w-full btn-ghost">
          <FaGoogle />
          <span>Login With Google</span>
        </button>
        <button className="btn w-full btn-ghost">
          <FaGithub />
          <span>Login With Github</span>
        </button>
      </div>

      <div className="mt-2 p-4">
        <h2 className="text-2xl mb-2 text-center">Find Us On</h2>
        <div
          className="flex p-3 items-center justify-start border rounded-t-md gap-2"
          href=""
        >
          <FaFacebook />
          <span>Facebook</span>
        </div>
        <div
          className="flex p-3 items-center justify-start border  gap-2"
          href=""
        >
          <FaTwitter />
          <span>Twitter</span>
        </div>
        <div
          className="flex p-3 items-center justify-start border rounded-b-md gap-2"
          href=""
        >
          <FaInstagram />
          <span>Instagram</span>
        </div>
      </div>
      {/* Q Zone */}
      <div className="mt-2 p-4">
        <h2 className="text-2xl mb-2 text-center">Q Zone</h2>
        <div className="  mb-2 p-2 ">
          <img src={playGround} alt="" />
        </div>
        <div className="flex p-3 items-center justify-start mb-2 gap-2">
          <img src={swimming} alt="" />
        </div>
        <div className="flex p-3 items-center justify-start mb-2 gap-2">
          <img src={myClass} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
