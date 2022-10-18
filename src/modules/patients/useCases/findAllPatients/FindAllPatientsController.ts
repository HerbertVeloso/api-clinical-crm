import { Request, Response } from "express";
import { FindAllPatientsUseCase } from "./FindAllPatientsUseCase";

export class FindAllPatientsController {
  async handle(request: Request, response: Response) {
    const findAllPatientsUseCase = new FindAllPatientsUseCase();

    const result = await findAllPatientsUseCase.execute();

    return response.status(200).json(result);
  }
}
