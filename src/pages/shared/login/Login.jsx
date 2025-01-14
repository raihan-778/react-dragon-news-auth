import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Loader from "../loader/Loader";
import Navbar from "../navbar/Navbar";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in login page", location);
  //   const [user, setUser] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        //navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <>
      {" "}
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Loader></Loader>
            <p>
              New here!!Please{" "}
              <span>
                <Link to="/register">Register here!</Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
