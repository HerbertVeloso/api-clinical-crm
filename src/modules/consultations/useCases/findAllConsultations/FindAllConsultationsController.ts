import { Request, Response } from "express";
import { FindAllConsultationsUseCase } from "./FindAllConsultationsUseCase";

export class FindAllConsultationsController {
  async handle(request: Request, response: Response) {
    const findAllConsultationsUseCase = new FindAllConsultationsUseCase();

    const consultations = await findAllConsultationsUseCase.execute();

    return response.status(200).json(consultations);
  }
}
