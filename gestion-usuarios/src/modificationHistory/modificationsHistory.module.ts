import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ModificationHistoryController } from "./controllers/modificationHistory.controller";
import { ModificationHistoryService } from "./services/modificationHistory.service";
import { ModificationHistory, ModificationHistorySchema } from "./schemas/modificationHistory.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ModificationHistory.name, schema: ModificationHistorySchema }, // Asegúrate de registrar el modelo
        ]),
    ],
    controllers: [ModificationHistoryController],
    providers: [ModificationHistoryService],
    exports: [
        ModificationHistoryService, 
        MongooseModule.forFeature([ // 👈 Exportamos el modelo para poder usarlo en otros módulos
            { name: ModificationHistory.name, schema: ModificationHistorySchema },
        ]),
    ],
})
export class ModificationHistoryModule {}
