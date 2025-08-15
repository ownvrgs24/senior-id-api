import prismaDatabase from "../config/global.config";
import {
  Prisma,
  senior_citizen_details,
  client_credential_assets,
} from "@prisma/client";

type SeniorCitizenWithRelations = Prisma.senior_citizen_detailsGetPayload<{
  include: {
    client_credential_assets: true;
  };
}>;

export class SeniorCitizenModel {
  // Method to insert senior citizen information into the database
  static async insertSeniorCitizenInfo(
    data: any | senior_citizen_details
  ): Promise<senior_citizen_details> {
    return await prismaDatabase.senior_citizen_details.create({
      data: {
        first_name: data.first_name,
        middle_name: data.middle_name || null, // Handle optional middle name
        last_name: data.last_name,
        suffix: data.suffix || null, // Handle optional suffix
        date_of_birth: new Date(data.date_of_birth), // Ensure date is in Date format
        place_of_birth: data.place_of_birth,
        full_address: data.full_address, // Add required full_address property
        civil_status: data.civil_status || null,
        contact_number: data.contact_number,
        email: data.email || null, // Handle optional email
        age_upon_release: data.age_upon_release, // Ensure age is an integer
        sex_at_birth: data.sex_at_birth,
        id_number: data.id_number, // Ensure id_number is provided
        date_of_issuance: new Date(data.date_of_issuance), // Ensure date is in Date format
        emergency_relationship: data.emergency_relationship,
        emergency_contact_name: data.emergency_contact_name,
        emergency_contact_number: data.emergency_contact_number,
      },
    });
  }

  static async getAllSeniorCitizenInfo(
    page: number = 1,
    pageSize: number = 25
  ): Promise<{ result: SeniorCitizenWithRelations[]; count: number }> {
    const safePage = Math.max(1, page | 0);
    const safeSize = Math.max(1, pageSize | 0);
    const offset = (safePage - 1) * safeSize;

    const [result, count] = await Promise.all([
      prismaDatabase.senior_citizen_details.findMany({
        skip: offset,
        take: safeSize,
        include: { client_credential_assets: true },
        orderBy: { date_of_issuance: "desc" },
      }),
      prismaDatabase.senior_citizen_details.count(),
    ]);

    return { result, count };
  }

  // Method to get senior citizen information by record ID
  static async getSeniorCitizenById(
    recordId: string
  ): Promise<SeniorCitizenWithRelations | null> {
    return await prismaDatabase.senior_citizen_details.findUnique({
      where: { record_id: recordId },
      include: {
        client_credential_assets: true,
      },
    });
  }
}
