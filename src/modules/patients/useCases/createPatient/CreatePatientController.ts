import { Request, Response } from "express";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

export class CreatePatienteController {
  async handle(request: Request, response: Response) {
    const { name, phone, birthday, health_insurance } = request.body;

    if (!name || !phone || !birthday || !health_insurance) {
      throw new Error("Missing name, phone, birthday or health insurance");
    }

    const createPatientUseCase = new CreatePatientUseCase();

    const result = await createPatientUseCase.execute({
      name,
      phone,
      birthday,
      health_insurance,
    });

    return response.status(200).json(result);
  }
}
