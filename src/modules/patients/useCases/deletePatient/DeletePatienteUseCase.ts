import { prisma } from "../../../../database/prismaClient";

interface IDeletePatiente {
  id: string;
}

export class DeletePatienteUseCase {
  async execute({ id }: IDeletePatiente) {
    const result = await prisma.patients.delete({
      where: {
        id,
      },
    });

    return result;
  }
}
