-- AlterTable
ALTER TABLE `senior_citizen_details` ADD COLUMN `date_printed` DATE NULL,
    ADD COLUMN `is_printed` BOOLEAN NOT NULL DEFAULT false;
