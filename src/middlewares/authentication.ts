import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";

import { authConfigs } from "../configs";
import { AppError } from "../errors";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticatedMiddleware(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing", 401, "token.required");
  }

  const [scheme, token] = authHeader.split(" ");

  if (!/Bearer$/i.test(scheme)) {
    throw new AppError("Mal-formatted token", 401, "token.invalid");
  }

  try {
    const decoded = jwt.verify(token, authConfigs.jwt.secret);

    const { sub } = decoded as ITokenPayload;
    const id = Number(sub);

    request.user = { id };

    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      throw new AppError("Token expired", 401, "token.expired");
    }

    throw new AppError("Invalid JWT token", 401, "token.invalid");
  }
}

export function addUserInformationToRequest(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing", 401, "token.required");
  }

  const [scheme, token] = authHeader.split(" ");

  if (!/Bearer$/i.test(scheme)) {
    throw new AppError("Mal-formatted token", 401, "token.invalid");
  }

  try {
    const decoded = jwt.decode(token);

    const { sub } = decoded as ITokenPayload;
    const id = Number(sub);

    request.user = { id };

    return next();
  } catch (err) {
    throw new AppError("Invalid JWT token", 401, "token.invalid");
  }
}

type AuthenticationOptions = {
  ensureAuthenticated: boolean;
};

export function authentication(options?: AuthenticationOptions) {
  const ensureAuthenticated = options?.ensureAuthenticated ?? true;

  return ensureAuthenticated
    ? ensureAuthenticatedMiddleware
    : addUserInformationToRequest;
}
