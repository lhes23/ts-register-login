import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import createHttpError from "http-errors";

export const errorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new createHttpError.Notfound());
};

export const httpErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status).send({
    status: err.status,
    message: err.message,
  });
};
