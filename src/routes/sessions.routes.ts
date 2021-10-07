import { Router } from "express";

import { sessionsController } from "../controllers/SessionsController";
import { authentication } from "../middlewares";

export const sessionsRouter = Router();

sessionsRouter.post("/", sessionsController.create);

sessionsRouter.use(authentication({ ensureAuthenticated: false }));

sessionsRouter.post("/refresh", sessionsController.update);
