const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db = require("./db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
const { refererCheck } = require("./refererCheck");
const app = express();
const PORT = 8008;
const ACCESS_TOKEN_SECRET = "JWT-SECRET";

let corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// process.env.ACCESS_TOKEN_SECRET을 secretOrPrivateKey으로 사용
const generateAccessToken = (id) => {
  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  return jwt.sign({ id }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

app.post("/sign-up", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  //   bcrypt.hash(pw, saltRounds, (err, hash) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     const insert_info = `insert into jwt_test_table (id, password) values(?,?)`;
  //     db.query(insert_info, [id, hash], (err, result) => {
  //       console.log(err);
  //     });
  //   });
  const insert_info = `insert into jwt_test_table (id, password) values('${id}', '${pw}')`;
  db.query(insert_info, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    let accessToken = console.log(`sign-up ${id}`);
  });
});

app.post("/login", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const referer = req.headers.referer;
  console.log("referer : ", referer);
  const select_info = `select * from jwt_test_table where id='${id}' and password='${pw}'`;
  db.query(select_info, (err, result) => {
    if (err) {
      console.log(err);
    }
    let accessToken = generateAccessToken(id);
    console.log("login!");
    console.log(accessToken);
    res.cookie("aT", accessToken, { maxAge: 30000 });
    return res.status(200).send({ accessToken: accessToken });
  });
});

app.get("/login-check", (req, res, next) => {
  return res.status(200).send({
    aT: req.cookies["aT"],
    msg: "success",
  });
});

app.get("/logout", (req, res, next) => {
  res.clearCookie("aT");
  return res.status(200).send({ msg: "cookie delete" });
});

app.listen(PORT, () => {
  console.log(`server open PORT :${PORT}`);
});
