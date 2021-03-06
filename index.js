const { getAllExchanges, compare } = require("./src/helpers");
const { getBtcTurkTicker, getGateTicker, getFTXTicker, getBinanceTicker } = require("./src/exchange");

(async () => {

    // SELECT ALL EXCHANGES
    let all = await getAllExchanges();

    //Exchanges, Minimum arbitrage percent default = 1
    let arbitrage = compare(all, 2);
    console.log(arbitrage)


    // Select manuel exchanges
    arbitrage = compare({
        btcTurk: await getBtcTurkTicker(),
        binance: await getBinanceTicker(),
        gate: await getGateTicker(),
        ftx: await getFTXTicker(),
    }, 2);

    console.log(arbitrage)
})()
