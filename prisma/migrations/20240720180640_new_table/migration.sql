/*
  Warnings:

  - You are about to drop the `Equation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Equation" DROP CONSTRAINT "Equation_pageId_fkey";

-- DropTable
DROP TABLE "Equation";

-- DropTable
DROP TABLE "Pages";

-- CreateTable
CREATE TABLE "Equations" (
    "id" SERIAL NOT NULL,
    "pageName" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "latex" TEXT NOT NULL,
    "html" TEXT NOT NULL,

    CONSTRAINT "Equations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Equations_pageName_label_idx" ON "Equations"("pageName", "label");
