import { JWT_EXPIRATION, JWT_SECRET } from "../core/settings";
import jwt from "jsonwebtoken";

async function generateToken(jsonPayload: Record<string, string>, sub: number) {
  const expiration = new Date();
  expiration.setDate(expiration.getDate() + JWT_EXPIRATION);
  return jwt.sign(
    {
      ...jsonPayload,
      sub: sub,
      iat: new Date().getTime(),
      exp: expiration.getTime(),
    },
    JWT_SECRET
  );
}

export { generateToken };
