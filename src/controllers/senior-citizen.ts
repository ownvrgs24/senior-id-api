import { Request, Response } from "express";
import { SeniorCitizenModel } from "../models/senior-citizen";
import { getClientCredentialAssets } from "../modules/assets-extractor";
import { trimObjectValues } from "../utils/object-trimmer";
import { mySQLPool } from "../config/global.config";
import { fileExists } from "../utils/file-checker";

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
    // accept either route params or query params
    const pageRaw = (req.params.current_page ?? req.query.page ?? "1") as string;
    const sizeRaw = (req.params.page_size ?? req.query.pageSize ?? "50") as string;

    const page = Math.max(parseInt(pageRaw, 10) || 1, 1);
    const pageSize = Math.min(Math.max(parseInt(sizeRaw, 10) || 25, 1), 500);

    // ⬇️ your model should return { result: SeniorCitizenWithRelations[]; count: number }
    const { result: rows, count: total } =
      await SeniorCitizenModel.getAllSeniorCitizenInfo(page, pageSize);

    // build the enriched page rows
    const data = await Promise.all(
      rows.map(async (el) => {
        const client_credential_assets = await getClientCredentialAssets(
          el.id_number
        );
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

    const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);

    // return 200 even for empty pages; clients can render "No results"
    res.status(200).json({
      message: "Senior citizen page retrieved successfully",
      data,
      meta: {
        total,
        page,
        pageSize,
        totalPages,
        hasPrev: page > 1,
        hasNext: totalPages > 0 && page < totalPages,
      },
    });
  } catch (error) {
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

    // Get client credential assets
    const client_credential_assets = await getClientCredentialAssets(result.id_number);

    // Build full name
    const full_name = [
      result.last_name + (result.suffix ? ` ${result.suffix}` : ""),
      result.first_name + (result.middle_name ? ` ${result.middle_name[0]}.` : ""),
    ].join(", ");

    // Insert to remote DB if in production
    const PROD = String(process.env.PROD ?? "").toLowerCase() === "true";
    if (PROD) {
      try {
        await insertSeniorCitizenToRemoteDBforQR(result);
      } catch (err) {
        res.status(500).json({
          message: "Failed to insert senior citizen to remote DB for QR verification",
          error: err instanceof Error ? err.message : String(err),
        });
        return;
      }
    }

    res.status(200).json({
      message: "Senior citizen information retrieved successfully",
      data: trimObjectValues({
        ...result,
        full_name,
        client_credential_assets,
      }),
    });

  } catch (error) {
    res.status(500).json({
      message: "An error occurred while retrieving senior citizen information by ID",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export async function updateSeniorCitizen(req: Request, res: Response) {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const result = await SeniorCitizenModel.updateSeniorCitizen(id, updatedData);
    if (!result) {
      res.status(404).json({ message: "Senior citizen not found" });
      return;
    }

    res.status(200).json({
      message: "Senior citizen information updated successfully",
      data: trimObjectValues(result),
    });
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while updating senior citizen information",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export async function markAsPrinted(req: Request, res: Response) {
  const { id } = req.body;
  try {
    const result = await SeniorCitizenModel.markAsPrinted(id);
    if (!result) {
      res.status(404).json({ message: "Senior citizen not found" });
      return;
    }

    res.status(200).json({
      message: "Senior citizen marked as printed successfully",
      data: trimObjectValues(result),
    });
  } catch (error) {
    res.status(500).json({
      message:
        "An error occurred while marking senior citizen as printed",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function searchSeniorCitizens(req: Request, res: Response) {
  try {
    const searchTerm = req.query.searchTerm as string || '';

    // Handle pagination parameters
    const pageRaw = (req.query.page ?? "1") as string;
    const sizeRaw = (req.query.pageSize ?? "50") as string;

    const page = Math.max(parseInt(pageRaw, 10) || 1, 1);
    const pageSize = Math.min(Math.max(parseInt(sizeRaw, 10) || 25, 1), 500);

    // Get search results with pagination
    const { result: rows, count: total } = await SeniorCitizenModel.searchSeniorCitizens(searchTerm, page, pageSize);

    // build the enriched page rows
    const data = await Promise.all(
      rows.map(async (el) => {
        const client_credential_assets = await getClientCredentialAssets(
          el.id_number
        );
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

    // Calculate pagination metadata
    const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);

    res.status(200).json({
      message: "Senior citizens retrieved successfully",
      data,
      meta: {
        total,
        page,
        pageSize,
        totalPages,
        hasPrev: page > 1,
        hasNext: totalPages > 0 && page < totalPages,
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while searching for senior citizens",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function filterByDateIssued(req: Request, res: Response) {
  try {
    // Get date from query params
    const date = req.query.date as string;

    if (!date) {
      res.status(400).json({
        message: "Date parameter is required"
      });
    }

    // Handle pagination parameters
    const pageRaw = (req.query.page ?? "1") as string;
    const sizeRaw = (req.query.pageSize ?? "50") as string;

    const page = Math.max(parseInt(pageRaw, 10) || 1, 1);
    const pageSize = Math.min(Math.max(parseInt(sizeRaw, 10) || 25, 1), 500);

    // Get filtered results with pagination
    const { result: rows, count: total } = await SeniorCitizenModel.filterByDateIssued(
      new Date(date),
      page,
      pageSize
    );

    // Build the enriched page rows
    const data = await Promise.all(
      rows.map(async (el) => {
        const client_credential_assets = await getClientCredentialAssets(el.id_number);
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

    // Calculate pagination metadata
    const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);

    res.status(200).json({
      message: "Senior citizens retrieved successfully",
      data,
      meta: {
        total,
        page,
        pageSize,
        totalPages,
        hasPrev: page > 1,
        hasNext: totalPages > 0 && page < totalPages,
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while searching for senior citizens by date",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

/**
 * Inserts one SeniorCitizenRow into the Remote DB to QR Verification.
 */
export async function insertSeniorCitizenToRemoteDBforQR(
  row: SeniorCitizenRow
): Promise<void> {
  /**
   * Format date with time for database insertion
   */
  const formatDateTimeForDB = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

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
        record_id = VALUES(record_id),
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
    formatDateTimeForDB(row.date_of_birth),
    row.place_of_birth,
    row.civil_status,
    row.contact_number,
    row.email,
    row.age_upon_release,
    row.record_id,
    row.sex_at_birth,
    row.full_address,
    row.id_number,
    formatDateTimeForDB(row.date_of_issuance),
    row.emergency_contact_name,
    row.emergency_contact_number,
    row.emergency_relationship,
  ];

  const [result] = await mySQLPool.execute(sql, params);

  console.log(result);
}



