-- CreateTable
CREATE TABLE "Pages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equation" (
    "id" SERIAL NOT NULL,
    "pageId" INTEGER NOT NULL,

    CONSTRAINT "Equation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Equation" ADD CONSTRAINT "Equation_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Pages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
