-- CreateEnum
CREATE TYPE "VideoStatus" AS ENUM ('PENDING_UPLOAD', 'UPLOADING', 'UPLOADED', 'PROCESSING', 'READY', 'FAILED');

-- CreateEnum
CREATE TYPE "VideoVisibility" AS ENUM ('PRIVATE', 'UNLISTED', 'PUBLIC');

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "objectKey" TEXT,
    "thumbnailKey" TEXT,
    "status" "VideoStatus" NOT NULL DEFAULT 'PENDING_UPLOAD',
    "visibility" "VideoVisibility" NOT NULL DEFAULT 'PRIVATE',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Video_objectKey_key" ON "Video"("objectKey");

-- CreateIndex
CREATE INDEX "Video_userId_idx" ON "Video"("userId");

-- CreateIndex
CREATE INDEX "Video_status_idx" ON "Video"("status");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
