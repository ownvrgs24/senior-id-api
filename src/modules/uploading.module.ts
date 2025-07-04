import fs from "fs";
import sharp from "sharp";

// General function for handling uploads
export const handleUpload = async (params: {
    senior_citizen_id: string;
    file: Express.Multer.File;
    type: "photo" | "signature"; // Added 'type' to differentiate directories
}) => {
    const { senior_citizen_id, file, type } = params;

    try {
        const uploadDirectory = `uploads/${type}`;
        await fs.promises.mkdir(uploadDirectory, { recursive: true });

        const fileName = `P_${senior_citizen_id}.png`;
        const filePath = `${uploadDirectory}/${fileName}`;

        // Convert uploaded file to PNG format and save it
        const pngBuffer = await sharp(file.buffer).png().toBuffer();
        await fs.promises.writeFile(filePath, pngBuffer);

        return filePath;
    } catch (error) {
        return Promise.reject(
            `Error uploading ${type} image: ${
                error instanceof Error ? error.message : String(error)
            }`
        );
    }
};
