import { Router } from "express";
import { tasksStudentsController } from "../controllers/TasksStudentsController";

import { prismaClient } from "../database";

export const studentsRouter = Router();

studentsRouter.get("/", async (_, response) => {
  const students = await prismaClient.student.findMany();

  return response.json(students);
});

studentsRouter.post("/", async (request, response) => {
  const { registration, name } = request.body;

  const student = await prismaClient.student.create({
    data: {
      id: registration,
      name,
    },
  });

  return response.json(student);
});

studentsRouter.use("/:id/tasks", tasksStudentsController.create);
