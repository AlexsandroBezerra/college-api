import { Request, Response } from "express";
import { Task } from ".prisma/client";

type CreateTaskBody = {
  title: string;
  reward: number;
};

export interface TasksController {
  index(request: Request, response: Response<Task[]>): Promise<Response>;

  create(
    request: Request<{}, {}, CreateTaskBody, {}>,
    response: Response<Task>
  ): Promise<Response>;
}
