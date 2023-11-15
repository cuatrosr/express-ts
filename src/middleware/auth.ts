import { JWT_SECRET, JWT_EXPIRATION } from "@core/settings.ts";
import passportJWT from "passport-jwt";
import passport from "passport";
import jwt from "jsonwebtoken";

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

async function generateToken(jsonPayload: Record<string, number>, sub: number) {
  return jwt.sign(
    {
      ...jsonPayload,
      sub: sub,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + JWT_EXPIRATION),
    },
    JWT_SECRET
  );
}

export { generateToken };
