import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ModificationHistoryController } from "./controllers/modificationHistory.controller";
import { ModificationHistoryService } from "./services/modificationHistory.service";
import { ModificationHistory, ModificationHistorySchema } from "./schemas/modificationHistory.schema";

/**
 * Module responsible for managing modification history-related components.
 */
@Module({
    /**
     * Registers the controller for handling HTTP requests related to modification history.
     */
    controllers: [ModificationHistoryController],

    /**
     * Registers the service for handling business logic related to modification history.
     */
    providers: [ModificationHistoryService],

    /**
     * Imports the Mongoose module and registers the ModificationHistory schema.
     * This enables database interactions with the modification history collection.
     */
    imports: [
        MongooseModule.forFeature([
            { name: ModificationHistory.name, schema: ModificationHistorySchema },
        ]),
    ],
})
export class ModificationModule {}
