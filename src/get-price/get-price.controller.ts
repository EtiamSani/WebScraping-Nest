import { Controller, Get } from '@nestjs/common';
import { GetPriceService } from './get-price.service';

@Controller('get-price')
export class GetPriceController {
    constructor(private priceService: GetPriceService){}
    @Get()
    async getPrice(){
        try {
            return this.priceService.getPrice();
        } catch {
            return { error: 'Failed to fetch scraped price' };
        }
        
    }
}
