import { Request, Response } from "express";
import { TasksDoneByStudent } from ".prisma/client";

type RouteParams = {
  id: string;
};

type CreateTasksStudentsBody = {
  taskId: number;
};

export interface TasksStudentsController {
  create(
    request: Request<RouteParams, {}, CreateTasksStudentsBody, {}>,
    response: Response<TasksDoneByStudent>
  ): Promise<Response>;
}
