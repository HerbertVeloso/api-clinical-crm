import { prisma } from "../../../../database/prismaClient";

interface IUpdatePatient {
  id: string;
  patient: {
    name: string;
    phone: string;
    birthday: Date;
    health_insurance: string;
  };
}

export class UpdatePatientUseCase {
  async execute({ id, patient }: IUpdatePatient) {
    const { name, phone, birthday, health_insurance } = patient;

    const patientUpdated = await prisma.patients.update({
      where: {
        id,
      },
      data: {
        name,
        phone,
        birthday,
        health_insurance,
      },
    });

    return patientUpdated;
  }
}
