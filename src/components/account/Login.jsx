import axios from "axios";
import React, { useState } from "react";
import "./account.css";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (id !== "" && pw !== "") {
      axios({
        method: "post",
        url: "http://localhost:8888/login",
        data: { id: id, pw: pw },
      }).then((res) => {
        console.log(res);
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
