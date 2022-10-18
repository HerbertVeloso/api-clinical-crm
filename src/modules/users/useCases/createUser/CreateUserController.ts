import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateClientUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      throw new Error("Missing name,email or password");
    }

    const createClientUseCase = new CreateUserUseCase();

    const result = await createClientUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(200).json(result);
  }
}
