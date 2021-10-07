import { Router } from "express";

import { sessionsController } from "../controllers/SessionsController";

export const sessionsRouter = Router();

sessionsRouter.post("/", sessionsController.create);
