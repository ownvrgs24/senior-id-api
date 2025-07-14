-- CreateTable
CREATE TABLE `user_accounts` (
    `recno` INTEGER NOT NULL AUTO_INCREMENT,
    `record_id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `suffix` VARCHAR(191) NULL,
    `role` ENUM('ADMIN', 'ENCODER', 'VIEWER') NOT NULL DEFAULT 'ADMIN',
    `is_deleted` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_accounts_record_id_key`(`record_id`),
    PRIMARY KEY (`recno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
