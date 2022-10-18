import { Router } from "express";

import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreatePatienteController } from "../modules/patients/useCases/createPatient/CreatePatientController";
import { DeletePatienteController } from "../modules/patients/useCases/deletePatient/DeletePatienteController";
import { FindAllPatientsController } from "../modules/patients/useCases/findAllPatients/FindAllPatientsController";
import { FindOnePatientController } from "../modules/patients/useCases/findOnePatient/FindOnePatientController";
import { UpdatePatientController } from "../modules/patients/useCases/updatePatient/UpdatePatientController";

const patientsRoutes = Router();

const createPatientController = new CreatePatienteController();
const findAllPatientsController = new FindAllPatientsController();
const findOnePatientController = new FindOnePatientController();
const updatePatientController = new UpdatePatientController();
const deletePatienteController = new DeletePatienteController();

patientsRoutes.post(
  "/patient/",
  ensureAuthenticateUser,
  createPatientController.handle
);

patientsRoutes.get(
  "/patient/",
  ensureAuthenticateUser,
  findAllPatientsController.handle
);

patientsRoutes.get(
  "/patient/:id",
  ensureAuthenticateUser,
  findOnePatientController.handle
);

patientsRoutes.put(
  "/patient/:id",
  ensureAuthenticateUser,
  updatePatientController.handle
);

patientsRoutes.delete(
  "/patient/:id",
  ensureAuthenticateUser,
  deletePatienteController.handle
);

export { patientsRoutes };
