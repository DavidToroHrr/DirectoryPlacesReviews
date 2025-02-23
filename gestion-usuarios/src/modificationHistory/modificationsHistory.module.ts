import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ModificationHistoryController } from "./controllers/modificationHistory.controller";
import { ModificationHistoryService } from "./services/modificationHistory.service";

@Module({
    controllers: [ModificationHistoryController],
    providers: [ModificationHistoryService],
    imports: [
        MongooseModule.forFeature([
            { name: 'Modification History', schema: import('./schemas/modificationHistory.schema')},
        ]),
    ],
})
export class ModificationModule {}