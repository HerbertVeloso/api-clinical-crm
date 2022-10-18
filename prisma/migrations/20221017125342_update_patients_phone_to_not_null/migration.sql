/*
  Warnings:

  - Made the column `phone` on table `patients` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "patients" ALTER COLUMN "phone" SET NOT NULL;
