/*
  Warnings:

  - A unique constraint covering the columns `[pageId,label]` on the table `Equation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Equation_pageId_label_idx";

-- CreateIndex
CREATE UNIQUE INDEX "Equation_pageId_label_key" ON "Equation"("pageId", "label");
