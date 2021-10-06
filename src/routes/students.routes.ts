import { Router } from "express";

import { bodyValidator } from "../middlewares";
import { studentsController, tasksStudentsController } from "../controllers";

import { createStudentsValidator } from "../validators";

export const studentsRouter = Router();

studentsRouter.get("/", studentsController.index);

studentsRouter.post(
  "/",
  bodyValidator(createStudentsValidator),
  studentsController.create
);

studentsRouter.get("/:id/tasks", tasksStudentsController.index);
studentsRouter.post("/:id/tasks", tasksStudentsController.create);
