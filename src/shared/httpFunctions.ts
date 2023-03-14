import { Response } from "express";
import { BAD_REQUEST, CREATED, FORBIDDEN, NOT_FOUND, OK, UNPROCESSABLE_ENTITY } from "http-status";
import { ForbiddenException, InvalidParams, NotFoundException, UnprocessableException } from "../exceptions/exceptions";

export const sendOK = (res: Response, object: any = {}) => {
  return res.status(OK).json(object);
};

export const sendCreated = (res: Response, object: any) => {
  return res.status(CREATED).json(object);
};

export const sendNotFound = (res: Response, entity: string) => {
  return res.status(NOT_FOUND).json(new NotFoundException(entity));
};

export const sendInvalidParams = (res: Response, params: string[]) => {
  return res.status(BAD_REQUEST).json(new InvalidParams(params));
};

export const sendForbidden = (res: Response, message: string) => {
  return res.status(FORBIDDEN).json(new ForbiddenException(false, message));
};

export const sendTokenError = (res: Response, expired = false) => {
  return res.status(FORBIDDEN).json(new ForbiddenException(expired));
};

export const sendUnprocessable = (res: Response, params: any) => {
  return res.status(UNPROCESSABLE_ENTITY).json(new UnprocessableException(params));
};