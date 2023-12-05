import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetPriceController } from './get-price/get-price.controller';
import { GetPriceService } from './get-price/get-price.service';
import { GetPriceModule } from './get-price/get-price.module';

@Module({
  imports: [GetPriceModule],
  controllers: [AppController, GetPriceController],
  providers: [AppService, GetPriceService],
})
export class AppModule {}
