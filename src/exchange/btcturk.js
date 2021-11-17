const axios = require('axios').default;

const TICKER_URL = "https://api.btcturk.com/api/v2/ticker";

const getBtcTurkTicker = async () => {
    let ticker = [];

    const priceInfo = await axios.get(TICKER_URL);
    priceInfo.data.data.forEach(el => {
        ticker.push({
            coin: el.pair,
            price: parseFloat(el.last)
        })
    });

    return ticker;
}

module.exports = getBtcTurkTicker;