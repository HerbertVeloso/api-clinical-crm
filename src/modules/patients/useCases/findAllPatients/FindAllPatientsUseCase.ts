import { prisma } from "../../../../database/prismaClient";

export class FindAllPatientsUseCase {
  async execute() {
    const patients = await prisma.patients.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return patients;
  }
}
