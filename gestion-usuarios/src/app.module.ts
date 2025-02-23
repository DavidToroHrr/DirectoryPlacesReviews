import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './places/places.module';  // Asegúrate de importar tu módulo
import { ModificationModule } from './modificationHistory/modificationsHistory.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'places_directory',
      entities: [__dirname + '/places/entities/*.entity{.ts,.js}'],
      synchronize: true


    }),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/demo_nest?authSource=admin`),
    PlacesModule, 
    ModificationModule,
    ReviewsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
