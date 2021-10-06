import { Request, Response } from "express";
import { Task, TasksDoneByStudent } from ".prisma/client";

type RouteParams = {
  id: string;
};

type CreateTasksStudentsBody = {
  taskId: number;
};

type IndexTaskStudents = {
  score: number
  tasksDone: Task[]
  tasksPending: Task[]
}

export interface TasksStudentsController {
  index(
    request: Request<RouteParams, {}, {}, {}>,
    response: Response<IndexTaskStudents>
  ): Promise<Response>;

  create(
    request: Request<RouteParams, {}, CreateTasksStudentsBody, {}>,
    response: Response<TasksDoneByStudent>
  ): Promise<Response>;
}
