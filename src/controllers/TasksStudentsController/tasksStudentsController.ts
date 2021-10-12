import { TasksStudentsController } from "./types";

import { prismaClient } from "../../database";
import { AppError } from "../../errors";

export const tasksStudentsController: TasksStudentsController = {
  async index(request, response) {
    const { id } = request.params;

    const student = await prismaClient.student.findFirst({
      where: { id: Number(id) },
    });

    if (!student) {
      throw new AppError("Student not found", 404);
    }

    const tasksDone = await prismaClient.task.findMany({
      where: {
        isEnabled: true,
        students: {
          some: {
            studentId: Number(id),
          },
        },
      },
    });

    const tasksPending = await prismaClient.task.findMany({
      where: {
        isEnabled: true,
        students: {
          none: {
            studentId: Number(id),
          },
        },
      },
    });

    const score = tasksDone.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.reward;
    }, 0);

    return response.json({
      ...student,
      score,
      tasksDone,
      tasksPending,
    });
  },

  async create(request, response) {
    const { id } = request.params;
    const { taskId } = request.body;

    const task = await prismaClient.task.findFirst({
      where: {
        id: taskId,
        isEnabled: true,
      },
    });

    if (!task) {
      throw new AppError("taskId provided is invalid");
    }

    const tasksDoneByStudent = await prismaClient.tasksDoneByStudent.create({
      data: {
        taskId,
        studentId: Number(id),
      },
    });

    return response.status(201).json(tasksDoneByStudent);
  },
};
