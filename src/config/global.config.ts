export * from ".prisma/client";
import { PrismaClient } from "@prisma/client";
import mysql from "mysql2/promise";
import { validateCsvFile, csvFileStorage } from "../modules/uploading";
import multer from "multer";

export default new PrismaClient();

export const mySQLPool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});



export const multerConfig = multer({
    storage: csvFileStorage,
    fileFilter: validateCsvFile,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit
});