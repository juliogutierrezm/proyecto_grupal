const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers["token"];

  if (token) {
    jwt.verify(token, process.env.SECRET, (error, data) => {
      if (error) return res.status(400).json({ message: "Invalid Token" });
      else {
        req.user = data;
        next();
      } 
    });
  } else {
    res.status(400).json({ message: "Need token" });
  }
};

module.exports = verifyToken;

