import { prisma } from "../../../../database/prismaClient";

interface IUpdateConsultation {
  id: string;
  consultation: {
    date: Date;
    reason: string;
  };
}

export class UpdateConsultationUseCase {
  async execute({ id, consultation }: IUpdateConsultation) {
    const { date, reason } = consultation;

    const consultationUpdated = await prisma.consultations.update({
      where: {
        id,
      },
      data: {
        date,
        reason,
        modified_at: new Date(),
      },
    });

    return consultationUpdated;
  }
}
