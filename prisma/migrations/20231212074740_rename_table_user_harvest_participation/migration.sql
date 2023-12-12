/*
  Warnings:

  - You are about to drop the `UserHarvestParticipations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserHarvestParticipations" DROP CONSTRAINT "UserHarvestParticipations_harvestId_fkey";

-- DropForeignKey
ALTER TABLE "UserHarvestParticipations" DROP CONSTRAINT "UserHarvestParticipations_userId_fkey";

-- DropTable
DROP TABLE "UserHarvestParticipations";

-- CreateTable
CREATE TABLE "UserHarvestParticipation" (
    "userId" TEXT NOT NULL,
    "harvestId" TEXT NOT NULL,
    "status" "UserHarvestParticipationStatus" NOT NULL DEFAULT 'CONFIRMED',

    CONSTRAINT "UserHarvestParticipation_pkey" PRIMARY KEY ("userId","harvestId")
);

-- AddForeignKey
ALTER TABLE "UserHarvestParticipation" ADD CONSTRAINT "UserHarvestParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHarvestParticipation" ADD CONSTRAINT "UserHarvestParticipation_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
