import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();
  const onLogout = () => {
    axios
      .get("/logout")
      .then((res) => {
        console.log(res.data.msg);
        navigate("/");
      })
      .catch((e) => {
        throw e;
      });
  };
  return (
    <div style={{ margin: "10px", cursor: "pointer" }} onClick={onLogout}>
      Logout
    </div>
  );
}
// withRouter
export default Logout;
