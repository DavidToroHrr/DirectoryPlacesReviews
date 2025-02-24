import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './places/places.module';  
import { ModificationModule } from './modificationHistory/modificationsHistory.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    /**
     * Importing internal project modules:
     * - `PlacesModule`: Handles place-related data.
     * - `ModificationModule`: Manages modification history records.
     * - `ReviewsModule`: Manages user reviews and Q&A functionality.
     */
    PlacesModule, 
    ModificationModule,
    ReviewsModule,

    /**
     * MySQL database configuration using TypeORM.
     * Credentials are retrieved from environment variables.
     */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'places_directory',
      entities: [__dirname + '/places/entities/*.entity{.ts,.js}'], // Loads entity files from the specified directory
      synchronize: true // Automatically synchronizes schema changes (not recommended in production)
    }),

    /**
     * MongoDB configuration using Mongoose.
     * Authentication is performed using environment variables.
     */
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/demo_nest?authSource=admin`,
      {
        directConnection: true, // Direct connection without replica set
        serverSelectionTimeoutMS: 5000 // Maximum time to select a server
      }
    ),
  ],
  controllers: [], // No controllers defined in the main module
  providers: [], // No providers defined in the main module
})
export class AppModule {}
