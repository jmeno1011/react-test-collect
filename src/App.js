import { Link, Outlet } from "react-router-dom";
import "./app.css";
function App() {
  return (
    <>
      <div className="title">Test-Collect</div>
      <nav className="nav">
        <Link to="/" className="nav-a">
          Home
        </Link>
        <Link to="login" className="nav-a">
          Login
        </Link>
        <Link to="sign-up" className="nav-a">
          Sign-up
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
