import { configJwt } from "../Jwt/JwtConfig";

const extractToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

const CheckUserToken = (req, res, next) => {
  const accessToken = extractToken(req);
  console.log("decoded", req);
  if (accessToken) {
    const decoded = configJwt.verifyToken(accessToken);
  }
  return next();
};

export default CheckUserToken;
