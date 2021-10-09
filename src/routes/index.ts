import { Router } from "express";

import { sessionsRouter } from "./sessions.routes";
import { studentsRouter } from "./students.routes";
import { tasksRouter } from "./tasks.routes";

export const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/students", studentsRouter);
routes.use("/tasks", tasksRouter);
