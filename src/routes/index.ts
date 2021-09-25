import { Router } from "express";

import { studentsRouter } from "./students.routes";

export const routes = Router();

routes.use("/students", studentsRouter);
