import express from 'express';
import { sequelize } from './sequelize';
import { indexRouter } from "./routes";
import morgan from "morgan";
import cors from "cors";
import { errorMiddleware } from "./shared/middlewares";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/test1", indexRouter);
app.use(errorMiddleware);

sequelize.sync({ alter: true }).then(async () => {});

export default app;