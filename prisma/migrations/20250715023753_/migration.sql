/*
  Warnings:

  - You are about to alter the column `civil_status` on the `senior_citizen_details` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` MODIFY `civil_status` VARCHAR(191) NULL;
