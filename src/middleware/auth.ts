import { JWT_SECRET } from "../core/settings";
import passportJWT from "passport-jwt";
import passportBearer from "passport-http-bearer";
import passport from "passport";
import User from "../models/user.model";

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const BearerStrategy = passportBearer.Strategy;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async function (jwtPayload, done) {
      try {
        return done(null, jwtPayload);
      } catch (err) {
        return done(err);
      }
    }
  )
);

const checkUserRole = (req: any, res: any, next: any) => {
  // Assuming user information is stored in req.user after JWT authentication
  const user = req.user;
  console.log(user);

  if (user && user.role === "premium") {
    // User is premium
    return res.send("User is premium");
  } else if (user) {
    // User is not premium
    return res.send("User is not premium");
  } else {
    // Not logged in
    return res.send("Not logged in");
  }
};

export { checkUserRole };
