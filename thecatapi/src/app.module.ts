import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ImagesController } from './images/images.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, ImagesController],
  providers: [AppService],
})
export class AppModule {}
