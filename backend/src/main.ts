import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ⚠️ CORS MUST COME BEFORE app.listen() ⚠️
  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000'], // Add both frontend ports
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Now start listening
  await app.listen(process.env.PORT ?? 3002);
  console.log(`🚀 Backend running on: http://localhost:${process.env.PORT ?? 3002}`);
}
bootstrap();