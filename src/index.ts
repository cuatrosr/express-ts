import express from "express";
import { db } from "./config/connect";
import appRouter from "./routes/router";
import { APP_PORT } from "./core/settings";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/ts", appRouter);

db.then(() => {
  app.listen(APP_PORT, () => {
    console.log(`[server] App listening at http://localhost:${APP_PORT}`);
  });
});
