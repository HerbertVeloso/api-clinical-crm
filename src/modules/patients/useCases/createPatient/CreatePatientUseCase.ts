import { prisma } from "../../../../database/prismaClient";

interface ICreatePatient {
  name: string;
  phone: string;
  birthday: Date;
  health_insurance: string;
}

export class CreatePatientUseCase {
  async execute({ name, phone, birthday, health_insurance }: ICreatePatient) {
    const patient = await prisma.patients.create({
      data: {
        name,
        phone,
        birthday,
        health_insurance,
      },
    });

    return patient;
  }
}
