/*
  Warnings:

  - The primary key for the `UserHarvestParticipations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserHarvestParticipations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserHarvestParticipations" DROP CONSTRAINT "UserHarvestParticipations_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserHarvestParticipations_pkey" PRIMARY KEY ("userId", "harvestId");
