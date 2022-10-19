import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new Error("Missing email or password");
    }

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const result = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.status(200).json(result);
  }
}
