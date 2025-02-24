import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Creates a NestJS application using the AppModule
  const app = await NestFactory.create(AppModule);

  // Starts the server on the specified port from environment variables,
  // or defaults to port 3000 if no environment variable is set.
  await app.listen(process.env.PORT ?? 3000);
}

// Calls the bootstrap function to initialize the application
bootstrap();
