-- DropForeignKey
ALTER TABLE "Equation" DROP CONSTRAINT "Equation_pageId_fkey";

-- AddForeignKey
ALTER TABLE "Equation" ADD CONSTRAINT "Equation_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
