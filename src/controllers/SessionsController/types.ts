import { Request, Response } from "express";

type CreateSessionBody = {
  email: string;
  password: string;
};

type CreateSessionResponse = {
  token: string;
};

export interface SessionsController {
  create(
    request: Request<{}, {}, CreateSessionBody, {}>,
    response: Response<CreateSessionResponse>
  ): Promise<Response>;
}
