const axios = require('axios').default;

const TICKER_URL = "https://www.okex.com/api/v5/public/mark-price?instType=SWAP";

const getOkexTicker = async () => {
    let ticker = [];

    const priceInfo = await axios.get(TICKER_URL);

    priceInfo.data.data.forEach(el => {
        ticker.push({
            coin: el.instId.replace("-SWAP", "").replace("-", ""),
            price: parseFloat(el.markPx)
        })
    });

    return ticker;
}

module.exports = getOkexTicker;