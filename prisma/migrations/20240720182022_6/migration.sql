/*
  Warnings:

  - The primary key for the `Equations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Equations` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "index";

-- AlterTable
ALTER TABLE "Equations" DROP CONSTRAINT "Equations_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Equations_pkey" PRIMARY KEY ("pageName", "label");
