import { Request, Response } from "express";
import { FindOnePatientUseCase } from "./FindOnePatientUseCase";

export class FindOnePatientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findOnePatientUseCase = new FindOnePatientUseCase();

    const result = await findOnePatientUseCase.execute(id);

    return response.status(200).json(result);
  }
}
