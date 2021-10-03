import { Router } from "express";

import { studentsRouter } from "./students.routes";
import { tasksRouter } from "./tasks.routes";

export const routes = Router();

routes.use("/students", studentsRouter);
routes.use("/tasks", tasksRouter);
