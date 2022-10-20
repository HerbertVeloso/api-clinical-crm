import { Router } from "express";
import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";
import { CreateConsultationController } from "../modules/consultations/useCases/createConsultation/CreateConsultationController";
import { DeleteConsultationController } from "../modules/consultations/useCases/deleteConsultatio/DeleteConsultation.Controller";
import { FindAllConsultationsController } from "../modules/consultations/useCases/findAllConsultations/FindAllConsultationsController";
import { FindOneConsultationController } from "../modules/consultations/useCases/findOneConsultation/FindOneConsultationController";
import { UpdateConsultationController } from "../modules/consultations/useCases/updateConsultation/UpdateConsultationController";

const consultationsRoutes = Router();

const createConsultationController = new CreateConsultationController();
const findAllConsultationsController = new FindAllConsultationsController();
const deleteConsultationController = new DeleteConsultationController();
const updateConsultationController = new UpdateConsultationController();
const findOneConsultationController = new FindOneConsultationController();

consultationsRoutes.post(
  "/consultation/",
  ensureAuthenticateUser,
  createConsultationController.handle
);

consultationsRoutes.get(
  "/consultation/",
  ensureAuthenticateUser,
  findAllConsultationsController.handle
);

consultationsRoutes.delete(
  "/consultation/:id",
  ensureAuthenticateUser,
  deleteConsultationController.handle
);

consultationsRoutes.put(
  "/consultation/:id",
  ensureAuthenticateUser,
  updateConsultationController.handle
);

consultationsRoutes.get(
  "/consultation/:id",
  ensureAuthenticateUser,
  findOneConsultationController.handle
);

export { consultationsRoutes };
