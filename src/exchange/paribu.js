const axios = require('axios').default;

const TICKER_URL = "https://www.paribu.com/ticker";

const getParibuTicker = async () => {
    let ticker = [];

    const priceInfo = await axios.get(TICKER_URL);

    Object.keys(priceInfo.data).forEach(el => {
        ticker.push({
            coin: el.replace("_", "").replace("-", "").replace("/", ""),
            price: parseFloat(priceInfo.data[el].last)
        })
    })
    
    return ticker;
}

module.exports = getParibuTicker;