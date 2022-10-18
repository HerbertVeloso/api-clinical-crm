import { prisma } from "../../../../database/prismaClient";

export class FindOnePatientUseCase {
  async execute(id: string) {
    const patient = await prisma.patients.findFirst({
      where: {
        id,
      },
    });

    return patient;
  }
}
