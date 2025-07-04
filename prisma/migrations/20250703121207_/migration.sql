/*
  Warnings:

  - A unique constraint covering the columns `[record_id]` on the table `senior_citizen_details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age_upon_release` to the `senior_citizen_details` table without a default value. This is not possible if the table is not empty.
  - The required column `record_id` was added to the `senior_citizen_details` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` ADD COLUMN `age_upon_release` INTEGER NOT NULL,
    ADD COLUMN `record_id` VARCHAR(191) NOT NULL,
    MODIFY `place_of_birth` VARCHAR(191) NULL,
    MODIFY `civil_status` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `client_credential_assets` (
    `recno` INTEGER NOT NULL AUTO_INCREMENT,
    `record_id` VARCHAR(191) NOT NULL,
    `profile_picture` VARCHAR(191) NOT NULL,
    `electronic_signature` VARCHAR(191) NOT NULL,
    `left_thumbprint` VARCHAR(191) NULL,
    `right_thumbprint` VARCHAR(191) NULL,
    `remarks` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `client_credential_assets_record_id_key`(`record_id`),
    PRIMARY KEY (`recno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `senior_identifier_registry` (
    `recno` INTEGER NOT NULL AUTO_INCREMENT,
    `record_id` VARCHAR(191) NOT NULL,
    `date_of_issuance` DATETIME(3) NOT NULL,
    `reference_number` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `senior_identifier_registry_record_id_key`(`record_id`),
    PRIMARY KEY (`recno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `senior_citizen_details_record_id_key` ON `senior_citizen_details`(`record_id`);

-- AddForeignKey
ALTER TABLE `client_credential_assets` ADD CONSTRAINT `client_credential_assets_record_id_fkey` FOREIGN KEY (`record_id`) REFERENCES `senior_citizen_details`(`record_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `senior_identifier_registry` ADD CONSTRAINT `senior_identifier_registry_record_id_fkey` FOREIGN KEY (`record_id`) REFERENCES `senior_citizen_details`(`record_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
