import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';



async function bootstrap() {
  config(); // Charge les variables d'environnement depuis le fichier .env
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
