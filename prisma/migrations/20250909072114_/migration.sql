/*
  Warnings:

  - You are about to alter the column `sex_at_birth` on the `senior_citizen_details` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `senior_citizen_details` ADD COLUMN `for_expedite` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `sex_at_birth` VARCHAR(191) NULL;
