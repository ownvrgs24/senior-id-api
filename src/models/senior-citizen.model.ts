import prismaDatabase from "../config/global.config";
import { senior_citizen_details } from "../generated/prisma";

export class SeniorCitizenModel {
    // Method to insert senior citizen information into the database
    static async insertSeniorCitizenInfo(data: any): Promise<senior_citizen_details> {
        return await prismaDatabase.senior_citizen_details.create({
            data: {
                first_name: data.first_name,
                middle_name: data.middle_name || null, // Handle optional middle name
                last_name: data.last_name,
                suffix: data.suffix || null, // Handle optional suffix
                date_of_birth: new Date(data.date_of_birth), // Ensure date is in Date format
                place_of_birth: data.place_of_birth,
                full_address: data.full_address, // Add required full_address property
                civil_status: data.civil_status,
                contact_number: data.contact_number,
                email: data.email || null, // Handle optional email
                age_upon_release: parseInt(data.age_upon_release, 10), // Ensure age is an integer
                sex_at_birth: data.sex_at_birth,
                id_number: data.id_number, // Ensure id_number is provided
                date_of_issuance: new Date(data.date_of_issuance), // Ensure date is in Date format
                client_credential_assets: {
                    create: {
                        profile_picture: data.profile_picture,
                        electronic_signature: data.electronic_signature,
                        left_thumbprint: data.left_thumbprint || null, // Handle optional left thumbprint
                        right_thumbprint: data.right_thumbprint || null, // Handle optional right thumbprint
                        remarks: data.remarks || null, // Handle optional remarks
                    },
                },
            },
        });
    }

    // Method to add in case of emergency contact
    static async addEmergencyContact(data: any): Promise<any> {
        return await prismaDatabase.senior_citizen_incase_of_emergency.create({
            data: {
                record_id: data.record_id, // Ensure record_id is provided
                first_name: data.first_name,
                middle_name: data.middle_name || null, // Handle optional middle name
                last_name: data.last_name,
                suffix: data.suffix || null, // Handle optional suffix
                relationship_to_senior: data.relationship_to_senior,
                contact_number: data.contact_number,
                email: data.email || null, // Handle optional email
            },
        });
    }

    // Method to get all senior citizen information
    static async getAllSeniorCitizenInfo(): Promise<senior_citizen_details[]> {
        return await prismaDatabase.senior_citizen_details.findMany({
            include: {
                client_credential_assets: true,
                senior_citizen_incase_of_emergency: true, // Include emergency contacts
            },
        });
    }

    // Method to get senior citizen information by record ID
    static async getSeniorCitizenById(recordId: string): Promise<senior_citizen_details | null> {
        return await prismaDatabase.senior_citizen_details.findUnique({
            where: {
                record_id: recordId,
            },
            include: {
                client_credential_assets: true,
                senior_citizen_incase_of_emergency: true, // Include emergency contacts
            },
        });
    }
}
