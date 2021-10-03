import { Router } from "express";

import { prismaClient } from "../database/client";

export const tasksRouter = Router();

tasksRouter.get("/", async (_, response) => {
  const tasks = await prismaClient.task.findMany();

  return response.json(tasks);
});

tasksRouter.post("/", async (request, response) => {
  const { title, reward } = request.body;

  const task = await prismaClient.task.create({
    data: {
      title,
      reward,
    },
  });

  return response.json(task);
});
