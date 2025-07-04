/*
  Warnings:

  - Made the column `civil_status` on table `senior_citizen_details` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` MODIFY `civil_status` ENUM('SINGLE', 'MARRIED', 'WIDOWED', 'SEPARATED', 'DIVORCED', 'ANNULLED') NOT NULL;
