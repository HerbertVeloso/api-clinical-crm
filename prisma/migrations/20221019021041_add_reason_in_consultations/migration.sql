/*
  Warnings:

  - Added the required column `reason` to the `consultations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consultations" ADD COLUMN     "reason" TEXT NOT NULL,
ALTER COLUMN "modified_at" DROP NOT NULL;
