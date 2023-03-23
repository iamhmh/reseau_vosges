import * as jwt from "jsonwebtoken";
import { User } from "../models/user";
import { NextFunction, Request, Response } from "express";
import { sendInvalidParams, sendTokenError } from "../shared/httpFunctions";

export class JwtService {
  private static secret: string = "frffzfzefz";
  private static expirationTime: string = "30d";

  public static generateAccessToken = (user: User): string => {
    return jwt.sign(
      {
        id: user.id,
      },
      JwtService.secret,
      { expiresIn: JwtService.expirationTime }
    );
  };

  private static verify = (token: string) => {
    try {
      const decoded = jwt.verify(token, JwtService.secret);
      if (decoded) {
        return decoded;
      }
    } catch (e) {
      throw e;
    }
  };

  public static protectRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const auth = req.headers.authorization;
      if (req.body.isUserVerified) {
        next();
      }
      if (auth == null) {
        return sendInvalidParams(res, ["Token jwt"]);
      } else {
        const user = this.getUserFromToken(auth);
        if (user) {
          req.body.userData = user;
          next();
        } else {
          return sendTokenError(res);
        }
      }
    } catch (e) {
      return sendTokenError(res);
    }
  }

  public static verifyIsAuthPresent = (req: Request, res: Response, next: NextFunction) => {
    try {
      const auth = req.headers.authorization;

      if (auth) {
        const user = JwtService.getUserFromToken(auth);
        if (user) {
          req.body.userData = user;
          req.body.isUserVerified = true;
          next();
        } else {
          return sendTokenError(res, true);
        }
      } else {
        return sendTokenError(res);
      }
    } catch (e) {
      return sendTokenError(res);
    }
  };

  private static getUserFromToken = (auth: string) => {
    const split = auth?.split(" ");
    if (split && split.length === 2) {
      return JwtService.verify(split[1]);
    } else {
      return null;
    }
  };
}

