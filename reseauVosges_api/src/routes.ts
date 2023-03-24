import { Router } from "express";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { JwtService } from "./services/jwt.service";
import { validate } from "./validators/main.validators";
import { use } from "./shared/middlewares";

const userService = new UserService();
const jwtService = new JwtService();
const userController = new UserController(userService, jwtService);

export const userRouter = Router();
userRouter.get("/", use(JwtService.verifyIsAuthPresent), use(userController.listAll));
userRouter.post("/filter", use(JwtService.verifyIsAuthPresent), use(userController.filter));
userRouter.get("/:id", use(JwtService.verifyIsAuthPresent), use(userController.getOne));
userRouter.post("/", use(JwtService.verifyIsAuthPresent), validate("user"), use(userController.add));
userRouter.put("/", use(JwtService.verifyIsAuthPresent), validate("userUpdate"), userController.update.bind(userController));
userRouter.delete("/:id", use(JwtService.verifyIsAuthPresent), use(userController.delete));
userRouter.post("/login", validate("login"), use(userController.login));
userRouter.post("/changePassword", use(JwtService.verifyIsAuthPresent), use(userController.changePassword));

export const indexRouter = Router();
indexRouter.use("/user", userRouter);
indexRouter.get("/token", JwtService.verifyIsAuthPresent.bind(JwtService), userController.getOne.bind(userController));