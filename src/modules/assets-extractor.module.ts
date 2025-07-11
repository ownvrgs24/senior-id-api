// src/helpers/assetHelper.ts
import path from "path";
import { fileExists } from "../utils/file-checker";
import { log } from "console";

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
    // 1) Resolve your project-root “uploads” directory

    const uploadsRoot = path.join(__dirname, "../../uploads");

    // 2) Define the three assets to check
    const definitions: Array<{
        key: keyof ClientCredentialAssets;
        folder: "photo" | "signature" | "thumbprint";
        prefix: "P" | "S" | "T";
    }> = [
        { key: "electronic_signature", folder: "signature", prefix: "S" },
        { key: "thumbprint", folder: "thumbprint", prefix: "T" },
        { key: "profile_picture", folder: "photo", prefix: "P" },
    ];

    // 3) Initialize all to null
    const assets: ClientCredentialAssets = {
        profile_picture: null,
        electronic_signature: null,
        thumbprint: null,
    };
    ``;
    // 4) Loop and check each file
    for (const { key, folder, prefix } of definitions) {
        const fileName = `${prefix}_${idNumber}.jpg`;
        // build an absolute fs path under your project’s /uploads

        const fsPath = path.join(uploadsRoot, folder, fileName);

        // (optional) console.log to verify the exact paths you’re checking
        console.log("Checking for file at", fsPath);

        if (await fileExists(fsPath)) {
            // build the URL your frontend will hit; leading slash if you serve /uploads statically
            assets[key] = `/uploads/${folder}/${fileName}`;
        }
    }

    return assets;
}
