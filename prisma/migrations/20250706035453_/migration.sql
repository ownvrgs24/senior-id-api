/*
  Warnings:

  - You are about to drop the column `left_thumbprint` on the `client_credential_assets` table. All the data in the column will be lost.
  - You are about to drop the column `right_thumbprint` on the `client_credential_assets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `client_credential_assets` DROP COLUMN `left_thumbprint`,
    DROP COLUMN `right_thumbprint`,
    ADD COLUMN `thumbprint` VARCHAR(191) NULL,
    MODIFY `electronic_signature` VARCHAR(191) NULL;
