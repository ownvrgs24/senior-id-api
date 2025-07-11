import { Request, Response } from "express";
import { SeniorCitizenModel } from "../models/senior-citizen.model";
import { getClientCredentialAssets } from "../modules/assets-extractor.module";
import { trimObjectValues } from "../utils/object-trimmer";
import { mySQLPool } from "../config/global.config";

// 1) Define your row shape exactly as your columns:
export interface SeniorCitizenRow {
    recno: number;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    suffix: string | null;
    date_of_birth: Date; // or Date if you transform it later
    place_of_birth: string | null;
    civil_status: string | null;
    contact_number: string | null;
    email: string | null;
    age_upon_release: number;
    record_id: string;
    sex_at_birth: string | null;
    full_address: string;
    id_number: string;
    date_of_issuance: Date; // or Date
    emergency_contact_name: string | null;
    emergency_contact_number: string | null;
    emergency_relationship: string | null;
}

/**
 * Controller to handle the registration of senior citizen information.
 * It processes the incoming request, validates the data, and interacts with the model to insert the data into the database.
 *
 * @param {Request} req - The request object containing the senior citizen data.
 * @param {Response} res - The response object used to send back the result or error.
 */
// This controller is responsible for handling the registration of senior citizen information.
// It receives the data from the request, processes it, and calls the model to insert the data into the database.
// If successful, it returns a success message with the inserted data; if an error occurs, it returns an error message.
// The model is responsible for interacting with the database and performing the actual insertion of data.
// The controller acts as a bridge between the request and the model, ensuring that the data is properly formatted and validated before being sent to the model for insertion.
export const register = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await SeniorCitizenModel.insertSeniorCitizenInfo(data);
        res.status(201).json({
            message: "Senior citizen information inserted successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error inserting senior citizen info:", error);
        res.status(500).json({
            message: "An error occurred while inserting senior citizen information",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};

export const getAllSeniorCitizenInfo = async (req: Request, res: Response) => {
    try {
        const result = await SeniorCitizenModel.getAllSeniorCitizenInfo();

        if (!result || result.length === 0) {
            res.status(404).json({ message: "No senior citizens found" });
            return;
        }

        // run all the async maps in parallel and wait for them
        const data = await Promise.all(
            result.map(async (el) => {
                // pull out all three URLs (or null)
                const client_credential_assets = await getClientCredentialAssets(el.id_number);

                // build full_name (no extra spaces if no suffix)
                const full_name = [
                    el.last_name + (el.suffix ? ` ${el.suffix}` : ""),
                    el.first_name + (el.middle_name ? ` ${el.middle_name[0]}.` : ""),
                ].join(", ");

                return trimObjectValues({
                    ...el,
                    client_credential_assets,
                    full_name,
                });
            })
        );

        res.status(200).json({
            message: "All senior citizen information retrieved successfully",
            data: data,
        });
    } catch (error) {
        console.error("Error retrieving senior citizen info:", error);
        res.status(500).json({
            message: "An error occurred while retrieving senior citizen information",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};

export const getSeniorCitizenById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await SeniorCitizenModel.getSeniorCitizenById(id);
        if (!result) {
            res.status(404).json({ message: "Senior citizen not found" });
            return;
        }

        // pull out all three URLs (or null)
        const client_credential_assets = await getClientCredentialAssets(result.id_number);

        // build full_name (no extra spaces if no suffix)
        const full_name = [
            result.last_name + (result.suffix ? " " + result.suffix : ""),
            result.first_name + (result.middle_name ? " " + result.middle_name[0] + "." : ""),
        ].join(", ");

        await insertSeniorCitizenToRemoteDBforQR(result);

        res.status(200).json({
            message: "Senior citizen information retrieved successfully",
            data: trimObjectValues({
                ...result,
                full_name,
                client_credential_assets:
                    result.client_credential_assets ?? client_credential_assets,
            }),
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while retrieving senior citizen information by ID",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};

/**
 * Inserts one SeniorCitizenRow into the Remote DB to QR Verification.
 */
export async function insertSeniorCitizenToRemoteDBforQR(row: SeniorCitizenRow): Promise<void> {
    /**
     * Insert or update a senior citizen record based on record_id.
     * @param row The SeniorCitizenRow object to insert or update
     */
    const sql = `
    INSERT INTO tbl_senior_citizens (
        recno,
        first_name,
        middle_name,
        last_name,
        suffix,
        date_of_birth,
        place_of_birth,
        civil_status,
        contact_number,
        email,
        age_upon_release,
        record_id,
        sex_at_birth,
        full_address,
        id_number,
        date_of_issuance,
        emergency_contact_name,
        emergency_contact_number,
        emergency_relationship
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
        recno = VALUES(recno),
        first_name = VALUES(first_name),
        middle_name = VALUES(middle_name),
        last_name = VALUES(last_name),
        suffix = VALUES(suffix),
        date_of_birth = VALUES(date_of_birth),
        place_of_birth = VALUES(place_of_birth),
        civil_status = VALUES(civil_status),
        contact_number = VALUES(contact_number),
        email = VALUES(email),
        age_upon_release = VALUES(age_upon_release),
        sex_at_birth = VALUES(sex_at_birth),
        full_address = VALUES(full_address),
        id_number = VALUES(id_number),
        date_of_issuance = VALUES(date_of_issuance),
        emergency_contact_name = VALUES(emergency_contact_name),
        emergency_contact_number = VALUES(emergency_contact_number),
        emergency_relationship = VALUES(emergency_relationship)
    `;

    const params = [
        row.recno,
        row.first_name,
        row.middle_name,
        row.last_name,
        row.suffix,
        row.date_of_birth.toISOString().slice(0, 10),
        row.place_of_birth,
        row.civil_status,
        row.contact_number,
        row.email,
        row.age_upon_release,
        row.record_id,
        row.sex_at_birth,
        row.full_address,
        row.id_number,
        row.date_of_issuance.toISOString().slice(0, 10),
        row.emergency_contact_name,
        row.emergency_contact_number,
        row.emergency_relationship,
    ];

    const [result] = await mySQLPool.execute(sql, params);

    console.log(result);
}
