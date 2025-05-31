-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "ownerId" TEXT,
    "baseTemplateId" INTEGER,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_baseTemplateId_fkey" FOREIGN KEY ("baseTemplateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;
