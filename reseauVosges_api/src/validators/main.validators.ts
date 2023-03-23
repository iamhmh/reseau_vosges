import { NextFunction, Request, Response } from "express";
import { sendUnprocessable } from "../shared/httpFunctions";
import { validators } from "./validators";

export function validate(validator: string) {
  if (!validators.hasOwnProperty(validator)) {
    throw "Invalid validator";
  } else {
    return async function (req: Request, res: Response, next: NextFunction) {
      try {
        req.body = await validators[validator]().validateAsync(req.body);
        next();
      } catch (e: any) {
        sendUnprocessable(res, e.message);
      }
    };
  }
}