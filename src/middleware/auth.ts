import { Response, NextFunction } from "express";
import { JWT_SECRET } from "../core/settings";
import passportJWT from "passport-jwt";
import passport from "passport";

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

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

const checkUserRole =
  (requiredRole: string) => (req: any, res: Response, next: NextFunction) => {
    const user : Record<string, string> = req.user;

    if (user && user.role !== requiredRole) {
      return res.status(401).send("Unauthorized");
    }

    next();
  };

export { checkUserRole };
