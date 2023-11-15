import dotenv from "dotenv";

dotenv.config();

const APP_PORT: number = Number(process.env.PORT) || 3000;

//---

const MONGO_URI: string =
  process.env.MONGO_URI || "mongodb://localhost:27017/test";

//---

const JWT_SECRET: string = process.env.JWT_SECRET || "youraccesstokensecret";
const JWT_EXPIRATION: number = Number(process.env.JWT_EXPIRATION) || 1;

export { APP_PORT, MONGO_URI, JWT_SECRET, JWT_EXPIRATION };
