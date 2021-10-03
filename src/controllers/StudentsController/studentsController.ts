import { StudentsController } from "./types";

import { prismaClient } from "../../database";
import { AppError } from "../../errors";

export const studentsController: StudentsController = {
  async index(_, response) {
    const students = await prismaClient.student.findMany();

    return response.json(students);
  },

  async create(request, response) {
    const { name, registration } = request.body;

    try {
      const student = await prismaClient.student.create({
        data: {
          id: registration,
          name,
        },
      });

      return response.status(201).json(student);
    } catch {
      throw new AppError("Student already exists", 409);
    }
  },
};
