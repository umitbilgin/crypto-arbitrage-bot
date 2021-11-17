const axios = require('axios').default;

const TICKER_URL = "https://ftx.com/api/markets";

const getFTXTicker = async () => {
    let ticker = [];

    const priceInfo = await axios.get(TICKER_URL);
    priceInfo.data.result.forEach(el => {
        if (el.type == 'spot') {
            ticker.push({
                coin: el.name.replace("/", "").replace("-", "").replace("_", ""),
                price: parseFloat(el.last)
            })
        }
    });

    return ticker;
}

module.exports = getFTXTicker;