import { Request, Response } from "express";
import { DeletePatienteUseCase } from "./DeletePatienteUseCase";

export class DeletePatienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletePatienteUseCase = new DeletePatienteUseCase();

    const result = deletePatienteUseCase.execute({ id });

    return response.status(200).json(result);
  }
}
