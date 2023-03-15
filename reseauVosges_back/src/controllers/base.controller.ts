import { NextFunction, Request, Response } from 'express';

export abstract class BaseController {
    protected abstract add(
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<Response>;
    
      protected abstract listAll(
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<Response>;
    
      protected abstract getOne(
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<Response>;
    
      protected abstract update(
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<Response>;
    
      protected abstract delete(
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<Response>;
}