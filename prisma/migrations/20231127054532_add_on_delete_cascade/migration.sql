-- DropForeignKey
ALTER TABLE "UserHarvestParticipations" DROP CONSTRAINT "UserHarvestParticipations_harvestId_fkey";

-- DropForeignKey
ALTER TABLE "UserHarvestParticipations" DROP CONSTRAINT "UserHarvestParticipations_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserHarvestParticipations" ADD CONSTRAINT "UserHarvestParticipations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHarvestParticipations" ADD CONSTRAINT "UserHarvestParticipations_harvestId_fkey" FOREIGN KEY ("harvestId") REFERENCES "Harvest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
