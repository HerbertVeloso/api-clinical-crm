import { Request, Response } from "express";
import { CreateConsultationUseCase } from "./CreateConsultationUseCase";

export class CreateConsultationController {
  async handle(request: Request, response: Response) {
    const { patient_id, date, reason } = request.body;

    if (!patient_id || !date || !reason) {
      throw new Error("Missing patient id, date or reason");
    }

    const createConsultationUseCase = new CreateConsultationUseCase();

    const consultation = await createConsultationUseCase.execute({
      patient_id,
      date,
      reason,
    });

    return response.status(200).json(consultation);
  }
}
