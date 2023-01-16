import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Solo deja pasar la data que se espera 
      //en el dto para el payload pero no marca error con los exedentes
      forbidNonWhitelisted: true, //Hace que marque error si existe algun atributo no listado en el dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
