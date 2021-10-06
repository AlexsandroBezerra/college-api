import { TasksStudentsController } from "./types";

import { prismaClient } from "../../database";
import { AppError } from "../../errors";

export const tasksStudentsController: TasksStudentsController = {
  async create(request, response) {
    const { id } = request.params;
    const { taskId } = request.body;

    const task = await prismaClient.task.findFirst({
      where: {
        id: taskId,
        isEnabled: true
      },
    });

    if (!task) {
      throw new AppError('taskId provided is invalid')
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
