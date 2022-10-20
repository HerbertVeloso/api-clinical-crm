import { Request, Response } from "express";
import { DeleteConsultationUseCase } from "./DeleteConsultationUseCase";

export class DeleteConsultationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteConsutationUseCase = new DeleteConsultationUseCase();

    const result = await deleteConsutationUseCase.execute({ id });

    return response.status(200).json(result);
  }
}
