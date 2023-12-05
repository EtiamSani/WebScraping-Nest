import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio'
import axios from 'axios'

@Injectable()
export class GetPriceService {
    async getPrice(){
        const username = String(process.env.BRIGHT_DATA_USERNAME)
        const password = String(process.env.BRIGHT_DATA_PASSWORD)
        const port = 22225
        const session_id = (1000000 * Math.random()) | 0
        const options = {
            auth: {
                username: `${username}-session-${session_id}`,
                password,
            },
            host: 'brd.superproxy.io:22225',
            port,
            rejectUnauthorized: false,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
            }
        }

        // il y a un lien directement de l'API https://query1.finance.yahoo.com/v7/finance/options/MC.PA A tester quand les marché sont ouvert
        try{
            const response = await axios.get('https://fr.finance.yahoo.com/quote/BTC-EUR', options)
            const $ = cheerio.load(response.data)
            const stockPrice = $('#quote-header-info fin-streamer').attr('value')
            console.log(stockPrice)
        }catch(error) {
            throw new Error(error.message)
        }
    }
}
