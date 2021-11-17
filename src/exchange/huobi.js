const axios = require('axios').default;

const TICKER_URL = "https://api.huobi.pro/market/tickers";

const getHuobiTicker = async () => {
    let ticker = [];

    const priceInfo = await axios.get(TICKER_URL);

    priceInfo.data.data.forEach(el => {
        ticker.push({
            coin: el.symbol.replace("-SWAP", "").replace("-", "").toUpperCase(),
            price: parseFloat(el.close)
        })
    });

    return ticker;
}

module.exports = getHuobiTicker;