import { TasksStudentsController } from "./types";

import { prismaClient } from "../../database";

export const tasksStudentsController: TasksStudentsController = {
  async create(request, response) {
    const { id } = request.params;
    const { taskId } = request.body;

    const tasksDoneByStudent = await prismaClient.tasksDoneByStudent.create({
      data: {
        taskId,
        studentId: Number(id),
      },
    });

    return response.status(201).json(tasksDoneByStudent);
  },
};
