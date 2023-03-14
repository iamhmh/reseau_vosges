import { Request, Response, NextFunction } from 'express';
import { Http } from '../exceptions/exceptions'

export const errorMiddleware = (error: Http, req: Request, res: Response, next: NextFunction): void => {
    const status = error.status || 500;
    const message = error.message || "Une erreur est survenue";
    const data = error.data;
    res.status(status).json({
      status,
      message,
      data,
    });
  };
  
  export const use =
    (fn: (req: Request, res: Response, next: NextFunction) => any) => (req: Request, res: Response, next: NextFunction) =>
      Promise.resolve(fn(req, res, next)).catch((err) => {
        console.log(err);
        next(err);
      }
    );
  