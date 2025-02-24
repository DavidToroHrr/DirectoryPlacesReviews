import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ModificationHistoryController } from "./controllers/modificationHistory.controller";
import { ModificationHistoryService } from "./services/modificationHistory.service";
import { ModificationHistory,  ModificationHistorySchema} from "./schemas/modificationHistory.schema";

@Module({
    controllers: [ModificationHistoryController],
    providers: [ModificationHistoryService],
    imports: [
        MongooseModule.forFeature([
            { name: ModificationHistory.name, schema: ModificationHistorySchema},
        ]),
    ],
})
export class ModificationModule {}