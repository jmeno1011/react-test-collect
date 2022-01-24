import axios from "axios";
import React, { useState } from "react";

function Join() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };
  const signUp = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      pw: pw,
    };
    axios.post("/sign-up", data).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div className="in-title">Sign-up</div>
      <form className="form" onSubmit={signUp} method="POST">
        <label>
          ID : <input type="text" name="id" onChange={onChangeId} />
        </label>
        <label>
          PW : <input type="password" name="pw" onChange={onChangePw} />
        </label>
        <button>create account</button>
      </form>
    </>
  );
}

export default Join;
