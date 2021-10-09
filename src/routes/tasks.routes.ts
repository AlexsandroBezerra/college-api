import { Router } from "express";

import { authentication, bodyValidator } from "../middlewares";
import { tasksController } from "../controllers";
import { createTaskValidator } from "../validators";

export const tasksRouter = Router();

tasksRouter.use(authentication());

tasksRouter.get("/", tasksController.index);

tasksRouter.post(
  "/",
  bodyValidator(createTaskValidator),
  tasksController.create
);

tasksRouter.delete("/:id", tasksController.delete);
