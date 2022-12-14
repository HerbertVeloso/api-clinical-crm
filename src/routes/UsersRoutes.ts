import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/user/", createUserController.handle);

export { usersRoutes };
