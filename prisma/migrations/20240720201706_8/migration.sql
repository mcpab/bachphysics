/*
  Warnings:

  - You are about to drop the `Equations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Equations";

-- CreateTable
CREATE TABLE "Pages" (
    "id" SERIAL NOT NULL,
    "pageName" TEXT NOT NULL,

    CONSTRAINT "Pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equation" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "latex" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "pageId" INTEGER NOT NULL,
    "number" SERIAL NOT NULL,

    CONSTRAINT "Equation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pages_pageName_key" ON "Pages"("pageName");

-- CreateIndex
CREATE INDEX "Equation_pageId_label_idx" ON "Equation"("pageId", "label");

-- AddForeignKey
ALTER TABLE "Equation" ADD CONSTRAINT "Equation_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Pages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
