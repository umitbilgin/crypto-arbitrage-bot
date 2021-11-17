const {
    getBinanceTicker,
    getBtcTurkTicker,
    getGateTicker,
    getFTXTicker,
    getParibuTicker,
    getOkexTicker,
    getHuobiTicker,
    getKucoinTicker
} = require("./../exchange");

const getAllExchanges = async () => {
    let ret;
    let binance = new Promise(async (res, rej) => {
        res(await getBinanceTicker());
    });

    let btcTurk = new Promise(async (res, rej) => {
        res(await getBtcTurkTicker());
    });

    let gate = new Promise(async (res, rej) => {
        res(await getGateTicker());
    });

    let ftx = new Promise(async (res, rej) => {
        res(await getFTXTicker());
    });

    let paribu = new Promise(async (res, rej) => {
        res(await getParibuTicker());
    });

    let okex = new Promise(async (res, rej) => {
        res(await getOkexTicker());
    });

    let huobi = new Promise(async (res, rej) => {
        res(await getHuobiTicker());
    });

    let kucoin = new Promise(async (res, rej) => {
        res(await getKucoinTicker());
    });

    await Promise.all([binance, btcTurk, gate, ftx, paribu, okex, huobi, kucoin]).then((data) => {
        ret = {
            binance: data[0],
            btcTurk: data[1],
            gate: data[2],
            ftx: data[3],
            paribu: data[4],
            okex: data[5],
            huobi: data[6],
            kucoin: data[7]
        };
    })

    return ret;
}

module.exports = getAllExchanges;