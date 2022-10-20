import { Request, Response } from "express";
import { FindOneConsultationUseCase } from "./FindOneConsultationUseCase";

export class FindOneConsultationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findOneConsultationUseCase = new FindOneConsultationUseCase();

    const consultation = await findOneConsultationUseCase.execute({ id });

    return response.status(200).json(consultation);
  }
}
