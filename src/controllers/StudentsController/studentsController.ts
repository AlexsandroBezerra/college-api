import { StudentsController } from "./types";

import { prismaClient } from "../../database";
import { AppError } from "../../errors";

export const studentsController: StudentsController = {
  async index(_, response) {
    const students = await prismaClient.student.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        name: true,
        tasksDone: {
          select: {
            task: {
              select: {
                title: true,
                reward: true,
              },
            },
          },
        },
      },
    });

    const studentsWithScore = students.map((student) => {
      const score = student.tasksDone.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.task.reward;
      }, 0);

      return {
        id: student.id,
        name: student.name,
        score,
      };
    });

    return response.json(studentsWithScore);
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
