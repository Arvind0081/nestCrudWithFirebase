import {  NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import {  NestApplicationOptions } from '@nestjs/common';

dotenv.config();
const Nest_LOGGING = false;
async function bootstrap() {
  const opts: NestApplicationOptions = {};
  if (!Nest_LOGGING) {
    opts.logger = false;
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
