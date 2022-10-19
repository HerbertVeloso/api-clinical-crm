import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email or password invalid");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password invalid");
    }

    const tokenAuth = process.env.TOKEN_AUTH;

    const token = sign({ name: user.name, email }, tokenAuth, {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}
