import { TasksController } from "./types";

import { prismaClient } from "../../database";

export const tasksController: TasksController = {
  async index(_, response) {
    const tasks = await prismaClient.task.findMany();

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

    return response.json(task);
  },
};
