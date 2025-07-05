/*
  Warnings:

  - Made the column `id_number` on table `senior_citizen_details` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` MODIFY `id_number` VARCHAR(191) NOT NULL;
