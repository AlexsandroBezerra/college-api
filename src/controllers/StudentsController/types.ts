import { Request, Response } from "express";
import { Student } from ".prisma/client";

type CreateStudentBody = {
  registration: number;
  name: string;
};

export interface StudentsController {
  index(request: Request, response: Response<Student[]>): Promise<Response>;

  create(
    request: Request<{}, {}, CreateStudentBody, {}>,
    response: Response<Student>
  ): Promise<Response>;
}
