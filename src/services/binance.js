import Api from './api'
import store from '../store'

const wsApi = new Api();

const subscribeSymbol = function (options) {
    wsApi.onTicker(options, (ticker) => {
        if(ticker.marketUpdate){
            const update =  ticker.marketUpdate.tradesUpdate.trades[0];
            const tick = {
                price: parseFloat(parseFloat(update.priceStr).toFixed(2)),
                symbol: ticker.symbol
            };
            store.commit('UPDATE_TICKER', tick)
        }
    })
};

const unSubscribeSymbol = function (symbol) {
    wsApi.closeSubscription('ticker', false, symbol)
};

export {subscribeSymbol, unSubscribeSymbol}