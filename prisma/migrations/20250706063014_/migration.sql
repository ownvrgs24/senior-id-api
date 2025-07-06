/*
  Warnings:

  - You are about to drop the `senior_citizen_incase_of_emergency` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `senior_citizen_incase_of_emergency` DROP FOREIGN KEY `senior_citizen_incase_of_emergency_record_id_fkey`;

-- AlterTable
ALTER TABLE `senior_citizen_details` ADD COLUMN `emergency_contact_name` VARCHAR(191) NULL,
    ADD COLUMN `emergency_contact_number` VARCHAR(191) NULL,
    ADD COLUMN `emergency_relationship` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `senior_citizen_incase_of_emergency`;
