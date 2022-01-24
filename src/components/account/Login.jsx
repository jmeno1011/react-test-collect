import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./account.css";

function Login(props) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  let navigate = useNavigate();
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (id !== "" && pw !== "") {
      const data = {
        id: id,
        pw: pw,
      };
      axios
        .post("/login", data)
        .then((res) => {
          const { accessToken } = res.data;
          console.log(accessToken);
          axios.defaults.headers.common[
            "Authorization"
          ] = `meno ${accessToken}`;
          navigate("/");
        })
        .catch((e) => {
          return console.log(("ERROR : ", e));
        });
    }
  };
  return (
    <>
      <div className="in-title">Login</div>
      {/* <div className="form-wrapper"> */}
      <form className="form" onSubmit={onSubmitHandle}>
        <label>
          ID : <input type="text" name="id" value={id} onChange={onChangeId} />
        </label>
        <label>
          PW :{" "}
          <input type="password" name="pw" value={pw} onChange={onChangePw} />
        </label>
        <button>Log In</button>
      </form>
    </>
  );
}

export default Login;
