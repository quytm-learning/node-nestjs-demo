import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const path = join(__dirname, '/views');

  // app.useStaticAssets(path);
  // app.setBaseViewsDir(path);

  app.use(express.static(join(path)));

  await app.listen(3000);
}

bootstrap();
