import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./app.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const fetchUser = async () => {
    const respose = await axios
      .get("login-check")
      .then((res) => {
        if (!res.data["aT"] || res.data["aT"] === "") {
          console.log(res.data["aT"]);
          setIsLogin(false);
        } else {
          setIsLogin(true);
        }
        return res.token;
      })
      .catch((e) => {
        throw e;
      });
  };
  const location = useLocation();
  useEffect(() => {
    fetchUser();
    return () => {
      // setIsLogin(false);
    };
  }, [location, isLogin]);
  return (
    <>
      <div className="title">Test-Collect</div>
      <nav className="nav">
        <Link to="/" className="nav-a">
          Home
        </Link>
        {!isLogin ? (
          <>
            <Link to="login" className="nav-a">
              Login
            </Link>
            <Link to="sign-up" className="nav-a">
              Sign-up
            </Link>
          </>
        ) : (
          <Link to="logout" className="nav-a">
            Logout
          </Link>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default App;
