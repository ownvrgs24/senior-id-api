-- AlterTable
ALTER TABLE `senior_citizen_details` MODIFY `date_of_birth` DATETIME(3) NOT NULL,
    MODIFY `date_of_issuance` DATETIME(3) NOT NULL,
    MODIFY `date_printed` DATETIME(3) NULL;
