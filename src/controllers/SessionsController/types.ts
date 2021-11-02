import { Professor } from ".prisma/client";
import { Request, Response } from "express";

type GetSessionResponse = Omit<Professor, "password">;

type CreateSessionBody = {
  email: string;
  password: string;
};

type CreateSessionResponse = {
  token: string;
  refreshToken: string;
  user: Professor;
};

type UpdateSessionResponse = {
  token: string;
  refreshToken: string;
};

type UpdateSessionBody = {
  refreshToken: string;
};

export interface SessionsController {
  index(
    request: Request<{}, {}, {}, {}>,
    response: Response<GetSessionResponse>
  ): Promise<Response>;

  create(
    request: Request<{}, {}, CreateSessionBody, {}>,
    response: Response<CreateSessionResponse>
  ): Promise<Response>;

  update(
    request: Request<{}, {}, UpdateSessionBody, {}>,
    response: Response<UpdateSessionResponse>
  ): Promise<Response>;
}
