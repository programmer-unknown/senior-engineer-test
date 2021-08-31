import { RequestHandler, Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";

const validationHandler: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }

  return next();
};

export default validationHandler;
