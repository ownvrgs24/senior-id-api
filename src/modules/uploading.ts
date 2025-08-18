import fs from "fs";
import sharp from "sharp";

// General function for handling uploads
export const handleUpload = async (params: {
    senior_citizen_id: string;
    file: Express.Multer.File;
    type: "photo" | "signature" | "thumbprint"; // Added 'type' to differentiate directories
}) => {
    const { senior_citizen_id, file, type } = params;

    try {
        const uploadDirectory = `uploads/${type}`;
        await fs.promises.mkdir(uploadDirectory, { recursive: true });
        // Define the file name based on the type and senior citizen ID

        // Prefix based on upload type: P_ for photo, S_ for signature, T_ for thumbprint
        const prefixMap = {
            'photo': 'P_',
            'signature': 'S_',
            'thumbprint': 'T_'
        };

        const fileName = `${prefixMap[type]}${senior_citizen_id}.jpg`;
        const filePath = `${uploadDirectory}/${fileName}`;

        // Convert uploaded file to JPG format and save it
        const jpgBuffer = await sharp(file.buffer).jpeg().toBuffer();
        await fs.promises.writeFile(filePath, jpgBuffer);

        return filePath;
    } catch (error) {
        return Promise.reject(
            `Error uploading ${type} image: ${error instanceof Error ? error.message : String(error)
            }`
        );
    }
};
