import { Module } from '@nestjs/common';
import { UserServicesService } from './services/user-services/user-services.service';
import { UserControllersController } from './controllers/user-controllers/user-controllers.controller';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [    
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/demo_nest?authSource=admin`),
  ],
  controllers: [UserControllersController],
  providers: [UserServicesService],
})
export class AppModule {}
