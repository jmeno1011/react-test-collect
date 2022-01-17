const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const db = require("./db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8888;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.query("select 1", (err, result) => {
    console.log(result);
  });
});

// app.get("/sign-up", (req, res));

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
    }
    console.log(`sign-up ${id}`);
  });
});

app.post("/login", (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const select_info = `select * from jwt_test_table where id='${id}' and password='${pw}'`;
  db.query(select_info, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("login!");
  });
});

app.listen(PORT, () => {
  console.log("server open");
});