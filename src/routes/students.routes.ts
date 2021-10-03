import { Router } from "express";

import { studentsController } from "../controllers/StudentsController";
import { tasksStudentsController } from "../controllers/TasksStudentsController";

export const studentsRouter = Router();

studentsRouter.get("/", studentsController.index);
studentsRouter.post("/", studentsController.create);

studentsRouter.post("/:id/tasks", tasksStudentsController.create);
