# Crypto Arbitrage Bot

<h2>How to install</h2>

```` 
git clone https://github.com/umitbilgin/crypto-arbitrage-bot/
npm i
````

<h2>Examples</h2>

```js
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

```

<h2>Returns</h2>

````
[
  {
    coin: 'BATBTC',
    min: { exchange: 'btcTurk', price: 0.00001689 },
    max: { exchange: 'huobi', price: 0.00001776 },
    percent: 5.15
  },
  {
    coin: 'WXTBTC',
    min: { exchange: 'huobi', price: 1.043e-7 },
    max: { exchange: 'kucoin', price: 1.1e-7 },
    percent: 5.47
  },
  {
    coin: 'DATXETH',
    min: { exchange: 'kucoin', price: 8e-8 },
    max: { exchange: 'huobi', price: 8.45e-8 },
    percent: 5.63
  },
  {
    coin: 'LSKETH',
    min: { exchange: 'huobi', price: 0.000738 },
    max: { exchange: 'kucoin', price: 0.0007844 },
    percent: 6.29
  },
  {
    coin: 'ENJBTC',
    min: { exchange: 'binance', price: 0.00004814 },
    max: { exchange: 'btcTurk', price: 0.0000512 },
    percent: 6.36
  },
  {
    coin: 'PYRUSDT',
    min: { exchange: 'gate', price: 22.35 },
    max: { exchange: 'kucoin', price: 23.7873 },
    percent: 6.43
  },
  {
    coin: 'LSKBTC',
    min: { exchange: 'huobi', price: 0.00005158 },
    max: { exchange: 'gate', price: 0.00005498 },
    percent: 6.59
  },
  {
    coin: 'MANABTC',
    min: { exchange: 'btcTurk', price: 0.00005001 },
    max: { exchange: 'huobi', price: 0.00005365 },
    percent: 7.28
  },
  {
    coin: 'MATICBTC',
    min: { exchange: 'btcTurk', price: 0.00002463 },
    max: { exchange: 'binance', price: 0.00002643 },
    percent: 7.31
  },
  {
    coin: 'COTIUSDT',
    min: { exchange: 'kucoin', price: 0.439383 },
    max: { exchange: 'binance', price: 0.4726 },
    percent: 7.56
  },
  {
    coin: 'COTIBTC',
    min: { exchange: 'kucoin', price: 0.00000727 },
    max: { exchange: 'binance', price: 0.00000783 },
    percent: 7.7
  },
  {
    coin: 'RUFFETH',
    min: { exchange: 'huobi', price: 0.00000122 },
    max: { exchange: 'gate', price: 0.000001315 },
    percent: 7.79
  },
  {
    coin: 'DATAUSDT',
    min: { exchange: 'gate', price: 0.1242 },
    max: { exchange: 'kucoin', price: 0.1353 },
    percent: 8.94
  },
  {
    coin: 'BABYDOGEUSDT',
    min: { exchange: 'gate', price: 2.887e-9 },
    max: { exchange: 'okex', price: 3.145e-9 },
    percent: 8.94
  },
  {
    coin: 'RUFFBTC',
    min: { exchange: 'huobi', price: 8.44e-8 },
    max: { exchange: 'gate', price: 9.2e-8 },
    percent: 9
  },
  {
    coin: 'RUFFUSDT',
    min: { exchange: 'huobi', price: 0.005094 },
    max: { exchange: 'gate', price: 0.005559 },
    percent: 9.13
  },
  {
    coin: 'NBSBTC',
    min: { exchange: 'binance', price: 3.1e-7 },
    max: { exchange: 'huobi', price: 3.438e-7 },
    percent: 10.9
  },
  {
    coin: 'MANBTC',
    min: { exchange: 'huobi', price: 0.0000014225 },
    max: { exchange: 'kucoin', price: 0.00000158 },
    percent: 11.07
  },
  {
    coin: 'MANETH',
    min: { exchange: 'huobi', price: 0.00002024 },
    max: { exchange: 'gate', price: 0.00002263 },
    percent: 11.81
  },
  {
    coin: 'IOTAUSDT',
    min: { exchange: 'huobi', price: 1.2809 },
    max: { exchange: 'gate', price: 1.4588 },
    percent: 13.89
  },
  {
    coin: 'IOTABTC',
    min: { exchange: 'huobi', price: 0.0000211 },
    max: { exchange: 'gate', price: 0.00002416 },
    percent: 14.5
  },
  {
    coin: 'UNIBTC',
    min: { exchange: 'btcTurk', price: 0.0003005 },
    max: { exchange: 'binance', price: 0.0003602 },
    percent: 19.87
  },
  {
    coin: 'MKRBTC',
    min: { exchange: 'binance', price: 0.04645 },
    max: { exchange: 'btcTurk', price: 0.05625 },
    percent: 21.1
  },
  {
    coin: 'AEUSDT',
    min: { exchange: 'gate', price: 0.1368 },
    max: { exchange: 'huobi', price: 0.169 },
    percent: 23.54
  },
  {
    coin: 'AEETH',
    min: { exchange: 'gate', price: 0.00003221 },
    max: { exchange: 'huobi', price: 0.00004 },
    percent: 24.19
  },
  {
    coin: 'AEBTC',
    min: { exchange: 'gate', price: 0.00000226 },
    max: { exchange: 'huobi', price: 0.00000281 },
    percent: 24.34
  },
  {
    coin: 'BTCUSDC',
    min: { exchange: 'gate', price: 47002.33 },
    max: { exchange: 'huobi', price: 60398.5 },
    percent: 28.5
  },
  {
    coin: 'VET3LUSDT',
    min: { exchange: 'gate', price: 0.216 },
    max: { exchange: 'kucoin', price: 0.2953 },
    percent: 36.71
  },
  {
    coin: 'XRPBEARUSDT',
    min: { exchange: 'ftx', price: 1.1e-7 },
    max: { exchange: 'gate', price: 1.533e-7 },
    percent: 39.36
  },
  {
    coin: 'GRINETH',
    min: { exchange: 'gate', price: 0.0000872 },
    max: { exchange: 'kucoin', price: 0.0001452 },
    percent: 66.51
  },
  {
    coin: 'BNB3LUSDT',
    min: { exchange: 'gate', price: 7.3734 },
    max: { exchange: 'kucoin', price: 12.4145 },
    percent: 68.37
  },
  {
    coin: 'GRINBTC',
    min: { exchange: 'gate', price: 0.00000613 },
    max: { exchange: 'kucoin', price: 0.00001036 },
    percent: 69
  },
  {
    coin: 'GRINUSDT',
    min: { exchange: 'gate', price: 0.3697 },
    max: { exchange: 'kucoin', price: 0.625659 },
    percent: 69.23
  },
  {
    coin: 'ADA3SUSDT',
    min: { exchange: 'kucoin', price: 0.6459 },
    max: { exchange: 'gate', price: 1.12435 },
    percent: 74.07
  }
]
````
