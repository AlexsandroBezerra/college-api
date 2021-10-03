import { Router } from "express";

import { tasksController } from "../controllers/TasksController";

export const tasksRouter = Router();

tasksRouter.get("/", tasksController.index);
tasksRouter.post("/", tasksController.create);
