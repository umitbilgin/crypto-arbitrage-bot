const axios = require('axios').default;

const TICKER_URL = "https://data.gateapi.io/api2/1/tickers";

const getGateTicker = async () => {
    let priceInfo = await axios.get(TICKER_URL);
    let ticker = [];
    

    Object.keys(priceInfo.data).forEach(el => {
        ticker.push({
            coin: el.replace("_", "").toUpperCase(),
            price: parseFloat(priceInfo.data[el].last)
        })
    })

    return ticker;
}

module.exports = getGateTicker;