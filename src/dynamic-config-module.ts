import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

console.log('Module CONFIG CREATING');
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
console.log('process.env.MONGO_URI: ' + process.env.MONGO_URI);
console.log(join(__dirname, '../envs/.env.production'));
// you must import this const in the head of your app.module.ts
export const configModule = ConfigModule.forRoot({
  envFilePath: [
  //  process.env.ENV_FILE_PATH?.trim() || '',
  //  `.env.${process.env.NODE_ENV}.local`,
  //  `.env.${process.env.NODE_ENV}`, // и могут быть переопределены выше стоящими файлами
   join(__dirname, './envs/.env.production')
  ],
  isGlobal: true
});

console.log('Module CONFIG CREATED');
console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
console.log('process.env.MONGO_URI: ' + process.env.MONGO_URI);
