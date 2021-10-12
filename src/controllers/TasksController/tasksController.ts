import { TasksController } from "./types";

import { prismaClient } from "../../database";

export const tasksController: TasksController = {
  async index(_, response) {
    const tasks = await prismaClient.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        isEnabled: true,
      },
    });

    return response.json(tasks);
  },

  async create(request, response) {
    const { title, reward } = request.body;

    const task = await prismaClient.task.create({
      data: {
        title,
        reward,
      },
    });

    return response.status(201).json(task);
  },

  async delete(request, response) {
    const { id } = request.params;

    await prismaClient.task.update({
      where: { id: Number(id) },
      data: { isEnabled: false },
    });

    return response.status(204).send();
  },
};
