/*
  Warnings:

  - Made the column `date_of_issuance` on table `senior_citizen_details` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` MODIFY `date_of_issuance` DATE NOT NULL;
