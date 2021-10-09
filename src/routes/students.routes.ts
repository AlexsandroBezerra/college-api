import { Router } from "express";

import { authentication, bodyValidator } from "../middlewares";
import { studentsController, tasksStudentsController } from "../controllers";

import { createStudentsValidator } from "../validators";

export const studentsRouter = Router();

studentsRouter.get("/:id/tasks", tasksStudentsController.index);

studentsRouter.use(authentication());

studentsRouter.post("/:id/tasks", tasksStudentsController.create);

studentsRouter.get("/", studentsController.index);

studentsRouter.post(
  "/",
  bodyValidator(createStudentsValidator),
  studentsController.create
);
