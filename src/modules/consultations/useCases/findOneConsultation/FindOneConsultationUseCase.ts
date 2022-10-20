import { prisma } from "../../../../database/prismaClient";

interface IFindOne {
  id: string;
}

export class FindOneConsultationUseCase {
  async execute({ id }: IFindOne) {
    const consultation = await prisma.consultations.findFirst({
      where: {
        id,
      },
    });

    return consultation;
  }
}
