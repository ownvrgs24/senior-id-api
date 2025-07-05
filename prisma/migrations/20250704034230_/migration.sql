/*
  Warnings:

  - A unique constraint covering the columns `[id_number]` on the table `senior_citizen_details` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` ADD COLUMN `id_number` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `senior_citizen_details_id_number_key` ON `senior_citizen_details`(`id_number`);
