import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

let server;

setTimeout(() => {
  server = app.listen(port);
  console.log("Listen on port " + port);
}, 0);
