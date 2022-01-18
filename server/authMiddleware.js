const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = "JWT-SECRET";
exports.auth = (req, res, next) => {
  try {
    req.decoded = jwt.verify(req.headers.authorization, ACCESS_TOKEN_SECRET);
    return next();
  } catch (error) {
    // 토큰 유효 시간 초과의 경우
    if (error.name === "TokenExpiredError") {
      return res.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        code: 401,
        message: "유효하지 않은 토큰입니다.",
      });
    }
  }
};
