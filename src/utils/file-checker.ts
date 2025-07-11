// src/utils/fileExists.ts

import { promises as fs } from "fs";
import path from "path";

/**
 * Checks whether a file exists at the given path.
 *
 * @param filePath - Absolute or relative path to the file.
 * @returns Promise that resolves to true if the file exists, false otherwise.
 */
export async function fileExists(filePath: string): Promise<boolean> {
    try {
        // Normalize the path to avoid issues with mixed separators
        const normalizedPath = path.resolve(filePath);
        await fs.access(normalizedPath);
        return true;
    } catch {
        return false;
    }
}
