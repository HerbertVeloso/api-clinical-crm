import { prisma } from "../../../../database/prismaClient";

export class FindAllConsultationsUseCase {
  async execute() {
    const consultations = await prisma.consultations.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return consultations;
  }
}
