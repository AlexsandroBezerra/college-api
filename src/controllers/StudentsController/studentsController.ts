import { StudentsController } from "./types";

import { prismaClient } from "../../database";

export const studentsController: StudentsController = {
  async index(_, response) {
    const students = await prismaClient.student.findMany();

    return response.json(students);
  },

  async create(request, response) {
    const { name, registration } = request.body;

    const student = await prismaClient.student.create({
      data: {
        id: registration,
        name,
      },
    });

    return response.json(student);
  },
};
