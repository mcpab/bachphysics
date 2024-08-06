/*
  Warnings:

  - You are about to drop the column `code` on the `Equation` table. All the data in the column will be lost.
  - Added the required column `label` to the `Equation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latex` to the `Equation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Equation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equation" DROP COLUMN "code",
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "latex" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL;
