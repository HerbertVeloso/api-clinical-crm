import { Request, Response } from "express";
import { UpdatePatientUseCase } from "./UpdatePatientUseCase";

export class UpdatePatientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, phone, birthday, health_insurance } = request.body;

    if (!name || !phone || !birthday || !health_insurance) {
      throw new Error("Missing name, phone, birthday or health insurance");
    }

    const patient = {
      name,
      phone,
      birthday,
      health_insurance,
    };

    const updatePatientUseCase = new UpdatePatientUseCase();

    const result = await updatePatientUseCase.execute({ id, patient });

    return response.status(200).json(result);
  }
}
