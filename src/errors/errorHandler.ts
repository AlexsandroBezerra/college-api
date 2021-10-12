import { NextFunction, Request, Response } from "express";

import { AppError } from ".";

export function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: true,
      status: "error",
      message: err.message,
      code: err.code,
    });
  }

  console.error(err);

  return response.status(500).json({
    error: true,
    status: "error",
    message: "Internal server error",
    code: "internal.error",
  });
}
