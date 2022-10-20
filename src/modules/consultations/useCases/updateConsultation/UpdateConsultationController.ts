import { Request, Response } from "express";
import { UpdateConsultationUseCase } from "./UpdateConsultationUseCase";

export class UpdateConsultationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { date, reason } = request.body;

    if (!date || !reason) {
      throw new Error("Missisng date or reason");
    }

    const updateConsultationUseCase = new UpdateConsultationUseCase();

    const consultationUpdated = await updateConsultationUseCase.execute({
      id,
      consultation: {
        date,
        reason,
      },
    });

    return response.status(200).json(consultationUpdated);
  }
}
