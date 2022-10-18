import { Router } from "express";

import { AuthenticateUserController } from "../modules/account/authenticateUser/AuthenticateUserController";

const accountRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

accountRoutes.post("/authenticate/", authenticateUserController.handle);

export { accountRoutes };
