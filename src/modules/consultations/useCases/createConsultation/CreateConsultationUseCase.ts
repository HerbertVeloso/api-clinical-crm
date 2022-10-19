import { prisma } from "../../../../database/prismaClient";

interface ICreateConsultation {
  patient_id: string;
  date: Date;
  reason: string;
}

export class CreateConsultationUseCase {
  async execute({ patient_id, date, reason }: ICreateConsultation) {
    const consultation = await prisma.consultations.create({
      data: {
        fk_id_patient: patient_id,
        date,
        reason,
      },
    });

    return consultation;
  }
}
