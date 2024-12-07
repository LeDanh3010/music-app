import jwt from "jsonwebtoken";
require("dotenv").config();

class ConfigJwt {
  createJwt(payload, key, expiresIn) {
    let token = null;
    const options = { expiresIn };
    try {
      token = jwt.sign(payload, key, options);
    } catch (e) {
      console.error(e);
    }
    return token;
  }
  verifyToken(token) {
    const key = process.env.JWT_KEY;
    let decoded = null;
    try {
      decoded = jwt.verify(token, key);
    } catch (e) {
      console.error(e);
    }
    return decoded;
  }
}

export const configJwt = new ConfigJwt();
