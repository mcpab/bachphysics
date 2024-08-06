/*
  Warnings:

  - Added the required column `code` to the `Equation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html` to the `Equation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equation" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "html" TEXT NOT NULL;
