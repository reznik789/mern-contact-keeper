const jwt = require("jsonwebtoken");
const config = require("config");

const jenerateTokenByUser = (user) => {
  return new Promise((resolve, reject) => {
    const jwtPayload = {
      user: {
        id: user.id
      }
    };
  
    jwt.sign(
      jwtPayload,
      config.get("jwtSecret"),
      {
        expiresIn: 3600
      },
      (err, token) => {
        if (err) reject(err);
        return resolve(token);
      }
    );
  })
}

module.exports = jenerateTokenByUser;