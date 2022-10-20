import { prisma } from "../../../../database/prismaClient";

interface IDeleteConsultation {
  id: string;
}

export class DeleteConsultationUseCase {
  async execute({ id }: IDeleteConsultation) {
    const result = await prisma.consultations.delete({
      where: {
        id,
      },
    });

    return result;
  }
}
