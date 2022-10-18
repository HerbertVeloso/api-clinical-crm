import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUser) {
    const userExist = await prisma.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (userExist) {
      throw new Error("User already exists");
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: hashPassword,
      },
    });

    return user;
  }
}
