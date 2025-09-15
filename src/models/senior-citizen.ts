import { unescape } from "querystring";
import prismaDatabase from "../config/global.config";
import {
  Prisma,
  senior_citizen_details,
} from "@prisma/client";

type SeniorCitizenWithRelations = Prisma.senior_citizen_detailsGetPayload<{
  include: {
    client_credential_assets: true;
  };
}>;

export class SeniorCitizenModel {

  // Method to insert multiple senior citizen records into the database
  static async insertBulkSeniorCitizenInfo(
    data: any[] | senior_citizen_details[]
  ): Promise<senior_citizen_details[]> {
    if (!Array.isArray(data)) {
      throw new Error("Data must be an array for bulk insertion");
    }

    const results = await Promise.all(
      data.map(async (item) => {
        return await prismaDatabase.senior_citizen_details.upsert({
          where: {
            id_number: item.id_number || '',
          },
          update: {
            first_name: item.first_name,
            middle_name: item.middle_name || null,
            last_name: item.last_name,
            date_of_birth: item.date_of_birth ? new Date(item.date_of_birth) : new Date(),
            place_of_birth: item.place_of_birth,
            full_address: item.full_address,
            civil_status: item.civil_status || null,
            contact_number: item.contact_number,
            email: item.email || null,
            age_upon_release: parseInt(item.age_upon_release, 10),
            sex_at_birth: item.sex_at_birth,
            id_number: item.id_number,
            date_of_issuance: item.date_of_issuance ? new Date(item.date_of_issuance) : new Date(),
            emergency_relationship: item.emergency_relationship,
            emergency_contact_name: item.emergency_contact_name,
            emergency_contact_number: item.emergency_contact_number,
          },
          create: {
            first_name: item.first_name,
            middle_name: item.middle_name || null,
            last_name: item.last_name,
            date_of_birth: item.date_of_birth ? new Date(item.date_of_birth) : new Date(),
            place_of_birth: item.place_of_birth,
            full_address: item.full_address,
            civil_status: item.civil_status || null,
            contact_number: item.contact_number,
            email: item.email || null,
            age_upon_release: parseInt(item.age_upon_release, 10),
            sex_at_birth: item.sex_at_birth,
            id_number: item.id_number,
            date_of_issuance: item.date_of_issuance ? new Date(item.date_of_issuance) : new Date(),
            emergency_relationship: item.emergency_relationship,
            emergency_contact_name: item.emergency_contact_name,
            emergency_contact_number: item.emergency_contact_number,
          },
        });
      })
    );

    return results;
  }

  // Method to insert senior citizen information into the database
  static async insertSeniorCitizenInfo(
    data: any | senior_citizen_details
  ): Promise<senior_citizen_details> {
    return await prismaDatabase.senior_citizen_details.create({
      data: {
        first_name: data.first_name,
        middle_name: data.middle_name || null, // Handle optional middle name
        last_name: data.last_name,
        // Handle optional suffix
        date_of_birth: data.date_of_birth ? new Date(data.date_of_birth) : '',
        place_of_birth: data.place_of_birth,
        full_address: data.full_address, // Add required full_address property
        civil_status: data.civil_status || null,
        contact_number: data.contact_number,
        email: data.email || null, // Handle optional email
        age_upon_release: data.age_upon_release, // Ensure age is an integer
        sex_at_birth: data.sex_at_birth,
        id_number: data.id_number, // Ensure id_number is provided
        date_of_issuance: data.date_of_issuance ? new Date(data.date_of_issuance) : '',
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

  static async updateSeniorCitizen(id: string, updatedData: any) {
    const data = {
      ...updatedData,
      date_of_birth: new Date(updatedData.date_of_birth),
      date_of_issuance: new Date(updatedData.date_of_issuance),
    };

    return await prismaDatabase.senior_citizen_details.update({
      where: { record_id: id },
      data: data,
    });
  }

  static async markAsPrinted(id: string) {
    return await prismaDatabase.senior_citizen_details.update({
      where: { record_id: id },
      data: {
        is_printed: true,
        date_printed: new Date(),
      },
    });
  }

  static async filterByDateIssued(
    date: Date,
    page: number = 1,
    pageSize: number = 25
  ): Promise<{ result: SeniorCitizenWithRelations[]; count: number }> {
    const safePage = Math.max(1, page | 0);
    const safeSize = Math.max(1, pageSize | 0);
    const offset = (safePage - 1) * safeSize;

    // Ensure we're working with a proper Date object
    const searchDate = new Date(date);

    // Create start and end of day in Philippine Standard Time (UTC+8)
    const startOfDay = new Date(
      searchDate.getFullYear(),
      searchDate.getMonth(),
      searchDate.getDate(),
      0, 0, 0, 0
    );

    const endOfDay = new Date(
      searchDate.getFullYear(),
      searchDate.getMonth(),
      searchDate.getDate(),
      23, 59, 59, 999
    );

    const whereCondition = {
      date_of_issuance: {
        gte: startOfDay,
        lte: endOfDay,
      },
    };

    const [result, count] = await prismaDatabase.$transaction([
      prismaDatabase.senior_citizen_details.findMany({
        where: whereCondition,
        skip: offset,
        take: safeSize,
        include: {
          client_credential_assets: true,
        },
        orderBy: { date_of_issuance: "desc" },
      }),
      prismaDatabase.senior_citizen_details.count({
        where: whereCondition,
      }),
    ]);

    return { result, count };
  }

  static async searchSeniorCitizens(
    searchTerm: string,
    page: number = 1,
    pageSize: number = 25
  ): Promise<{ result: SeniorCitizenWithRelations[]; count: number }> {
    const safePage = Math.max(1, page | 0);
    const safeSize = Math.max(1, pageSize | 0);
    const offset = (safePage - 1) * safeSize;

    const whereCondition = {
      OR: [
        { first_name: { contains: searchTerm } },
        { middle_name: { contains: searchTerm } },
        { last_name: { contains: searchTerm } },
        { id_number: { contains: searchTerm } },
      ],
    };

    const [result, count] = await Promise.all([
      prismaDatabase.senior_citizen_details.findMany({
        where: whereCondition,
        skip: offset,
        take: safeSize,
        include: {
          client_credential_assets: true,
        },
        orderBy: { date_of_issuance: "desc" },
      }),
      prismaDatabase.senior_citizen_details.count({
        where: whereCondition,
      }),
    ]);

    return { result, count };
  }
}
