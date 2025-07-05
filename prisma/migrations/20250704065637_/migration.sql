/*
  Warnings:

  - You are about to drop the `senior_identifier_registry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `senior_identifier_registry` DROP FOREIGN KEY `senior_identifier_registry_record_id_fkey`;

-- AlterTable
ALTER TABLE `senior_citizen_details` ADD COLUMN `date_of_issuance` DATE NULL;

-- DropTable
DROP TABLE `senior_identifier_registry`;
