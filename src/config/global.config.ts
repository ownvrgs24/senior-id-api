import { PrismaClient } from "../generated/prisma";
import mysql from "mysql2/promise";

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
