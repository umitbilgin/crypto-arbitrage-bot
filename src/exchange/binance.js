const axios = require('axios').default;

const EXCHANGE_INFO = "https://www.binance.com/api/v1/exchangeInfo";
const TICKER_URL = "https://www.binance.com/api/v3/ticker/price";

const getBinanceTicker = async () => {
    let ticker = [];
    let exchangeInfo = await axios.get(EXCHANGE_INFO);
    let priceInfo = await axios.get(TICKER_URL);

    exchangeInfo.data.symbols.forEach(el => {
        if (el.isMarginTradingAllowed) {
            let price = priceInfo.data.filter(x => x.symbol == el.symbol)[0].price;
            if (price) {
                ticker.push({
                    coin: el.symbol,
                    price: parseFloat(price)
                })
            }
        }
    })
    return ticker;
}

module.exports = getBinanceTicker;