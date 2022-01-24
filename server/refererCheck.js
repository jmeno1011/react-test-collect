exports.refererCheck = (req, res, next) => {
  if (req.headers.referer === "http://localhost:3000/") {
    console.log("log-in", new Date());
    next();
  } else {
    console.log("Referer Error");
    res.status(403).send("Referer Error");
  }
};
