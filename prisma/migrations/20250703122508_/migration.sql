/*
  Warnings:

  - You are about to drop the column `sex` on the `senior_citizen_details` table. All the data in the column will be lost.
  - Added the required column `sex_at_birth` to the `senior_citizen_details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `client_credential_assets` DROP FOREIGN KEY `client_credential_assets_record_id_fkey`;

-- DropForeignKey
ALTER TABLE `senior_identifier_registry` DROP FOREIGN KEY `senior_identifier_registry_record_id_fkey`;

-- AlterTable
ALTER TABLE `senior_citizen_details` DROP COLUMN `sex`,
    ADD COLUMN `sex_at_birth` ENUM('FEMALE', 'MALE', 'OTHER') NOT NULL;

-- AddForeignKey
ALTER TABLE `client_credential_assets` ADD CONSTRAINT `client_credential_assets_record_id_fkey` FOREIGN KEY (`record_id`) REFERENCES `senior_citizen_details`(`record_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `senior_identifier_registry` ADD CONSTRAINT `senior_identifier_registry_record_id_fkey` FOREIGN KEY (`record_id`) REFERENCES `senior_citizen_details`(`record_id`) ON DELETE CASCADE ON UPDATE CASCADE;
