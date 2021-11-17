const axios = require('axios').default;

const TICKER_URL = "https://api.kucoin.com/api/v1/market/allTickers";

const getKucoinTicker = async () => {
    let ticker = [];

    const priceInfo = await axios.get(TICKER_URL);

    priceInfo.data.data.ticker.forEach(el => {
        ticker.push({
            coin: el.symbol.replace("-", "").replace("_", ""),
            price: parseFloat(el.last)
        })
    });

    return ticker;
}

module.exports = getKucoinTicker;