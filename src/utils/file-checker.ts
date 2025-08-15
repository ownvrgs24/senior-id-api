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

// Helper: accept ONLY .jpg files that are real JPEGs
export async function isStrictJpg(
  file: Express.Multer.File
): Promise<boolean | undefined> {
  const extOk = path.extname(file.originalname).toLowerCase() === ".jpg";
  const mimeOk = file.mimetype === "image/jpeg";

  // Verify JPEG magic number: FF D8 FF
  let magicOk = false;
  try {
    if ((file as any).buffer && (file as any).buffer.length >= 3) {
      const buf = (file as any).buffer.subarray(0, 3);
      magicOk = buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
    } else if ((file as any).path) {
      const fh = await fs.open((file as any).path, "r");
      const buf = Buffer.alloc(3);
      await fh.read(buf, 0, 3, 0);
      await fh.close();
      magicOk = buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
    }
  } catch {
    magicOk = false;
  }

  return extOk && mimeOk && magicOk;
}
