import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateConsultationController } from "../modules/consultations/useCases/createConsultation/CreateConsultationController";
import { FindAllConsultationsController } from "../modules/consultations/useCases/findAllConsultations/FindAllConsultationsController";

const consultationsRoutes = Router();

const createConsultationController = new CreateConsultationController();
const findAllConsultatiosController = new FindAllConsultationsController();

consultationsRoutes.post(
  "/consultation/",
  ensureAuthenticateUser,
  createConsultationController.handle
);

consultationsRoutes.get(
  "/consultation/",
  ensureAuthenticateUser,
  findAllConsultatiosController.handle
);

export { consultationsRoutes };
