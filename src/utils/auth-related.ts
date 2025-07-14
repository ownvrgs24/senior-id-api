import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const comparePassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
};

export const hashPassword = async (password: string) => {
    const passComplexity = 11;
    return await bcrypt.hash(password, passComplexity);
};

export const generateToken = async (payload: any) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    if (!process.env.EXPIRES_IN) {
        throw new Error("EXPIRES_IN is not defined");
    }
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1hr",
        algorithm: "HS256",
    });
};
