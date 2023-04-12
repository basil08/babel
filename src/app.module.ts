import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import CONFIG from './utils/config';

@Module({
  imports: [MongooseModule.forRoot(CONFIG.MONGODB_URI), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
