import { Router } from "express";

import { sessionsController } from "../controllers/SessionsController";
import { authentication } from "../middlewares";

export const sessionsRouter = Router();

sessionsRouter.post("/", sessionsController.create);

sessionsRouter.get("/me", authentication(), sessionsController.index);

sessionsRouter.post(
  "/refresh",
  authentication({ ensureAuthenticated: false }),
  sessionsController.update
);
