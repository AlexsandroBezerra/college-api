import { Request, Response } from "express";

type CreateSessionBody = {
  email: string;
  password: string;
};

type CreateSessionResponse = {
  token: string;
  refreshToken: string;
};

type UpdateSessionBody = {
  refreshToken: string;
};

export interface SessionsController {
  create(
    request: Request<{}, {}, CreateSessionBody, {}>,
    response: Response<CreateSessionResponse>
  ): Promise<Response>;

  update(
    request: Request<{}, {}, UpdateSessionBody, {}>,
    response: Response<CreateSessionResponse>
  ): Promise<Response>;
}
