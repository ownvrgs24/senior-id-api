// src/helpers/assetHelper.ts
import path from "path";
import { fileExists } from "../utils/file-checker";

export interface ClientCredentialAssets {
    profile_picture: string | null;
    electronic_signature: string | null;
    thumbprint: string | null;
}

/**
 * Builds the three upload paths for a given idNumber,
 * checks each one with `fileExists`, and returns
 * their public URLs or null.
 */
export async function getClientCredentialAssets(idNumber: string): Promise<ClientCredentialAssets> {
    // 1) Resolve project-root "uploads" directory once
    const uploadsRoot = path.join(__dirname, "../../uploads");

    // 2) Define the assets to check
    const definitions = [
        { key: "electronic_signature", folder: "signature", prefix: "S" },
        { key: "thumbprint", folder: "thumbprint", prefix: "T" },
        { key: "profile_picture", folder: "photo", prefix: "P" },
    ] as const;

    // 3) Initialize result object
    const assets: ClientCredentialAssets = {
        profile_picture: null,
        electronic_signature: null,
        thumbprint: null,
    };

    // 4) Check all files in parallel instead of sequentially
    await Promise.all(
        definitions.map(async ({ key, folder, prefix }) => {
            const fileName = `${prefix}_${idNumber}.jpg`;
            const fsPath = path.join(uploadsRoot, folder, fileName);

            // Only check file existence if needed
            if (await fileExists(fsPath)) {
                assets[key] = `/uploads/${folder}/${fileName}`;
            }
        })
    );

    return assets;
}
