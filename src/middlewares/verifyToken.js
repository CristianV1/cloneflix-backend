const jwt = require("jsonwebtoken");
const TOKEN_KEY = "cloneflix";

const verifiyAdmin = (req, res, next) => {
  /*
  try {
    console.log(typeof req.body.user.isAdmin);
    if (req.body.user.isAdmin != true) {
      res.status(403).json("You are not alowed to do that!");
    } else {
      console.log("entro al next");
      next();
    }
  } catch (err) {
    res.status(403).json("ERROR WITH THE REQUEST ", err);
  }*/
  try {
    const token = req.headers["authorization"];

    console.log("TOOOOOOOOOOOOOOOOOOOOotoken es: ", token);
    jwt.verify(token, TOKEN_KEY, (err, user) => {
      if (err) {
        res.status(403).json("You are not alowed to do that!");
      } else {
        if (user.isAdmin) {
          req.user = user;
          console.log("logeado correctamente ", user);
          next();
        } else {
          res.status(403).json("You are not an admin!");
        }
      }
    });
  } catch (err) {
    res.status(403).json("ERROR ", err);
  }
};

const verifiyUser = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    jwt.verify(token, TOKEN_KEY, (err, user) => {
      if (err) {
        res.status(403).json("You are not alowed to do that!");
      } else {
        console.log("logeado correctamente ", user);
        req.user = user;
        next();
      }
    });
  } catch (err) {
    res.status(403).json("ERROR ", err);
  }
};

module.exports = { verifiyAdmin, verifiyUser };
