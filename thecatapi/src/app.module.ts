import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CatsService} from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { ImagesController } from './images/images.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, ImagesController],
  providers: [AppService, CatsService],
})
export class AppModule {}
