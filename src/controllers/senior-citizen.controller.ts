import { Request, Response } from "express";
import { SeniorCitizenModel } from "../models/senior-citizen.model";
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

export const addEmergencyContact = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await SeniorCitizenModel.addEmergencyContact(data);
        res.status(201).json({
            message: "Emergency contact added successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error adding emergency contact:", error);
        res.status(500).json({
            message: "An error occurred while adding emergency contact",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};

export const getAllSeniorCitizenInfo = async (req: Request, res: Response) => {
    try {
        const result = await SeniorCitizenModel.getAllSeniorCitizenInfo();
        res.status(200).json({
            message: "All senior citizen information retrieved successfully",
            data: result,
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
            res.status(404).json({
                message: "Senior citizen not found",
            });
        }
        res.status(200).json({
            message: "Senior citizen information retrieved successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while retrieving senior citizen information by ID",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};
