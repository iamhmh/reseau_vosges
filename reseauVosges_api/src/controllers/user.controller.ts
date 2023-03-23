import { UserService } from "../services/user.service";
import { BaseController } from "./base.controller";
import { Request, Response } from "express";
import { AlreadyExistException, InvalidParams } from "../exceptions/exceptions";
import { BAD_REQUEST, CREATED, OK, UNPROCESSABLE_ENTITY } from "http-status";
import { User } from "../models/user";
import { sendForbidden, sendInvalidParams, sendNotFound, sendOK } from "../shared/httpFunctions";
import * as bcrypt from "bcrypt";
import { JwtService } from "../services/jwt.service";
import { getPagination, getPagingData } from "../shared/functions";

export class UserController extends BaseController {
  constructor(private userService: UserService, private jwtService: JwtService) {
    super();
  }

  public add = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const user = await this.userService.findByEmail(email);
    if (user) {
      return res.status(UNPROCESSABLE_ENTITY).json(new AlreadyExistException(this.userService.name));
    } else {
      req.body.password = await bcrypt.hash(password, 10);
      return res.status(CREATED).json(await this.userService.add(req.body));
    }
  };

  public getOne = async (req: Request, res: Response): Promise<Response> => {
    let { id } = req.params;
    const { userData } = req.body;
    if ((id === null || id === undefined) && (userData === null || userData === undefined)) {
      return res.status(BAD_REQUEST).json(new InvalidParams(["id"]));
    } else {
      if (userData) {
        id = userData.id;
      }
      const user = await this.userService.findById(id);
      user.password = "";
      return res.status(OK).json(user);
    }
  };

  public listAll = async (req: Request, res: Response): Promise<Response> => {
    return sendOK(res, await this.userService.findAll());
  };

  public filter = async (req: Request, res: Response): Promise<Response> => {
    const options = getPagination(req.body);
    const data = await this.userService.findPaginate(options);
    return sendOK(res, getPagingData(data, options.page, options.limit));
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.body;
    let user: User = await this.userService.findById(id);
    user = await this.userService.update(user, req.body);
    return sendOK(res, user);
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user: User = await this.userService.findById(id);
    await this.userService.delete(user);
    return sendOK(res);
  };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const user: User | null = await this.userService.findByEmail(email);
    if (user) {
      if (await bcrypt.compare(password, user.password!)) {
        return sendOK(res, { token: JwtService.generateAccessToken(user), user });
      } else {
        return sendForbidden(res, "Le mot de passe ne correspond pas");
      }
    } else {
      return sendNotFound(res, this.userService.name);
    }
  };

  public changePassword = async (req: Request, res: Response): Promise<Response> => {
    let { userData, id } = req.body;
    if (userData || id) {
      const { confirmPassword, password } = req.body;
      id = userData ? userData.id : id;
      if (confirmPassword === password) {
        const user = await this.userService.findById(id);
        await user.update({ password: await bcrypt.hash(password, 10) });
        return sendOK(res);
      } else {
        return sendInvalidParams(res, ["Les mots de passe ne correspondent pas"]);
      }
    } else {
      return sendNotFound(res, "Utilisateurs");
    }
  };
}
