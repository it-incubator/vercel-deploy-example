import { ConfigModule } from '@nestjs/config';

console.log('Module CONFIG CREATING');
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
console.log('process.env.MONGO_URI: ' + process.env.MONGO_URI);
// you must import this const in the head of your app.module.ts
export const configModule = ConfigModule.forRoot({
  envFilePath: [
    process.env.ENV_FILE_PATH?.trim() || '',
    `.env.${process.env.NODE_ENV}.local`,
    `.env.${process.env.NODE_ENV}`, // и могут быть переопределены выше стоящими файлами
    '.env.production', // сначала берутся отсюда значение
  ],
  isGlobal: true,
});

console.log('Module CONFIG CREATED');
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
console.log('process.env.MONGO_URI: ' + process.env.MONGO_URI);
