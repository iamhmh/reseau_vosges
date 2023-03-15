import { UserService } from "../services/user.service";
import { BaseController } from "./base.controller";
import { AlreadyExistException, InvalidParams } from "../exceptions/exceptions";
import { BAD_REQUEST, CREATED, OK, UNPROCESSABLE_ENTITY } from "http-status";
import { User } from "../models/user";
import * as bcrypt from "bcrypt";

export class UserController extends BaseController {

    constructor(private userService: UserService) {
        super();
    }

    public async register(req, res, next) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                throw new InvalidParams("Le nom d'utilisateur et le mot de passe sont requis !");
            }
            const user = await this.userService.findByUsername(username);
            if (user) {
                throw new AlreadyExistException("username already exist");
            }
            const newUser = new User();
            newUser.username = username;
            newUser.password = bcrypt.hashSync(password, 10);
            const result = await this.userService.create(newUser);
            res.status(CREATED).json(result);
        } catch (err) {
            next(err);
        }
    }

    public async login(req, res, next) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                throw new InvalidParams("username and password are required");
            }
            const user = await this.userService.findByUsername(username);
            if (!user) {
                throw new InvalidParams("username or password is invalid");
            }
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch) {
                throw new InvalidParams("username or password is invalid");
            }
            res.status(OK).json(user);
        } catch (err) {
            next(err);
        }
    }
}