/*
  Warnings:

  - You are about to drop the `seniorcitizendetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `seniorcitizendetails`;

-- CreateTable
CREATE TABLE `senior_citizen_details` (
    `recno` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `suffix` VARCHAR(191) NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `place_of_birth` VARCHAR(191) NOT NULL,
    `civil_status` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `contact_number` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`recno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
