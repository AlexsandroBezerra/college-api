import { Router } from "express";

import { bodyValidator } from "../middlewares";
import { tasksController } from "../controllers";
import { createTaskValidator } from "../validators";

export const tasksRouter = Router();

tasksRouter.get("/", tasksController.index);

tasksRouter.post(
  "/",
  bodyValidator(createTaskValidator),
  tasksController.create
);
