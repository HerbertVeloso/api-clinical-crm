import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreatePatienteController } from "./modules/patients/useCases/createPatient/CreatePatientController";
import { DeletePatienteController } from "./modules/patients/useCases/deletePatient/DeletePatienteController";
import { FindAllPatientsController } from "./modules/patients/useCases/findAllPatients/FindAllPatientsController";
import { FindOnePatientController } from "./modules/patients/useCases/findOnePatient/FindOnePatientController";
import { UpdatePatientController } from "./modules/patients/useCases/updatePatient/UpdatePatientController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();

const authenticateUserController = new AuthenticateUserController();

const createPatientController = new CreatePatienteController();
const findAllPatientsController = new FindAllPatientsController();
const findOnePatientController = new FindOnePatientController();
const updatePatientController = new UpdatePatientController();
const deletePatienteController = new DeletePatienteController();

routes.post("/user/", createUserController.handle);

routes.post("/authenticate/", authenticateUserController.handle);

routes.post(
  "/patient/",
  ensureAuthenticateUser,
  createPatientController.handle
);

routes.get(
  "/patient/",
  ensureAuthenticateUser,
  findAllPatientsController.handle
);

routes.get(
  "/patient/:id",
  ensureAuthenticateUser,
  findOnePatientController.handle
);

routes.put(
  "/patient/:id",
  ensureAuthenticateUser,
  updatePatientController.handle
);

routes.delete(
  "/patient/:id",
  ensureAuthenticateUser,
  deletePatienteController.handle
);

export { routes };
