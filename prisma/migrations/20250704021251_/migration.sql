/*
  Warnings:

  - Added the required column `full_address` to the `senior_citizen_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` ADD COLUMN `full_address` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `senior_citizen_incase_of_emergency` (
    `recno` INTEGER NOT NULL AUTO_INCREMENT,
    `record_id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `suffix` VARCHAR(191) NULL,
    `contact_number` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `relationship_to_senior` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`recno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `senior_citizen_incase_of_emergency` ADD CONSTRAINT `senior_citizen_incase_of_emergency_record_id_fkey` FOREIGN KEY (`record_id`) REFERENCES `senior_citizen_details`(`record_id`) ON DELETE CASCADE ON UPDATE CASCADE;
