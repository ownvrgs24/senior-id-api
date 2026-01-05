import fs from "fs";
import sharp from "sharp";
import multer from "multer";

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

        // Prefix based on upload type: P_ for photo, S_ for signature, T_ for thumbprint aaa
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

export const validateCsvFile = (
    req: Express.Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
) => {
    if (file.mimetype === "text/csv" || file.mimetype === "application/vnd.ms-excel") {
        cb(null, true);
    } else {
        cb(new Error("Only CSV files are allowed!"));
    }
};

export const csvFileStorage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        const uploadDir = "uploads/csv";
        // Check if directory exists, if not, create it
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, file.fieldname + "-" + uniqueSuffix + ".csv");
    },
});


export const handleMultipleUpload = async (params: {
    files: Express.Multer.File[];
    type: "photo" | "signature" | "thumbprint"; // Added 'type' to differentiate directories
}) => {
    const { files, type } = params;
    const uploadDirectory = `uploads/${type}`;
    await fs.promises.mkdir(uploadDirectory, { recursive: true });

    const filePaths: string[] = [];

    for (const file of files) {
        // get the file name without extension
        const fileName = file.originalname.split('.').slice(0, -1).join('.') + '.jpg';
        const filePath = `${uploadDirectory}/${fileName}`;

        // Convert uploaded file to JPG format and save it
        const jpgBuffer = await sharp(file.buffer).jpeg().toBuffer();
        await fs.promises.writeFile(filePath, jpgBuffer);

        filePaths.push(filePath);
    }

    return filePaths;
}
