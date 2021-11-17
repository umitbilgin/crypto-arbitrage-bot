const compare = (exchange = {}, percent = 1) => {

    let prices = {};

    Object.keys(exchange).forEach(el => {
        exchange[el].forEach(e => {

            if (typeof prices[e.coin] !== 'object')
                prices[e.coin] = {};

            prices[e.coin][el] = e.price;
        })

    })

    data = [];

    Object.keys(prices).forEach(el => {
        let min = {
            exchange: "",
            price: 999999999999,
        };

        let max = {
            exchange: "",
            price: 0,
        };

        Object.keys(prices[el]).forEach(e => {
            if (prices[el][e] < min.price) {
                min.exchange = e;
                min.price = prices[el][e];
            }

            if (prices[el][e] > max.price) {
                max.exchange = e;
                max.price = prices[el][e];
            }
        })

        let thisPercent = Math.abs(((100 / min.price) * max.price) - 100)

        if (thisPercent >= percent && thisPercent < 100) {
            if (min.price != 0 && max.price != 0) {

                data.push({
                    coin: el,
                    min: min,
                    max: max,
                    percent: parseFloat(thisPercent.toFixed(2))
                })

                /*
                if (typeof data[el] !== 'object')
                    data[el] = {};

                data[el].min = min;
                data[el].max = max;
                data[el].percent = parseFloat(thisPercent.toFixed(2));
                */
            }
        }

    });

    data.sort(function (a, b) {
        return parseFloat(a.percent) - parseFloat(b.percent);
    });

    return data;
};

module.exports = compare