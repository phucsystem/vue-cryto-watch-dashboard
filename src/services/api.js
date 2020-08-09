import WS from './ws'
import defaultPair from '@/assets/defaultpair.json'

export default class Api {
    constructor(timeout = 5e3, maxAttempts = 5) {
        this.timeout = timeout;
        this.maxAttempts = maxAttempts;
        this._baseUrl = 'wss://stream.cryptowat.ch/connect?apikey=' + 'JVDEG2PXBE9G6I98DEQ6';
        this.subscription = {};
        this.streams = {
            ticker: (symbol) => `${symbol.toLowerCase()}@ticker`,
        };
    }

    subscribe(cb, options) {
        let ws;
        try {
            let path = this._baseUrl;
            if (this.subscription[path]) {
                return this.subscription[path];
            }
            ws = new WS(path, {
                timeout: this.timeout,
                maxAttempts: this.maxAttempts,
                binaryType: 'arraybuffer',
                onopen: e => console.log('Connected!', e),
                onmessage: e => {
                    var enc = new TextDecoder("utf-8");
                    var arr = new Int8Array(e.data);
                    var jsonData = JSON.parse(enc.decode(arr));
                    console.log(jsonData);
                    if (jsonData.authenticationResult && jsonData.authenticationResult.status === 'AUTHENTICATED') {
                        const subscribe = function (conn, resources) {
                            conn.send(JSON.stringify({
                                subscribe: {
                                    subscriptions: resources.map((resource) => {
                                        return {streamSubscription: {resource: resource}}
                                    })
                                }
                            }));
                        }
                        const resources = defaultPair.map(({resource}) => resource);
                        subscribe(ws.conn, resources);
                        return
                    }

                    if(jsonData.marketUpdate){
                        console.log(marketUpdate);
                        const currency = defaultPair.find(x => x.currencyPairId == jsonData.marketUpdate.market.currencyPairId);
                        jsonData['symbol'] = currency.symbol;
                        cb(jsonData);
                    }
                },
                onreconnect: e => console.log('Reconnecting...', e),
                onmaximum: e => console.log('Stop Attempting!', e),
                onclose: e => {
                    this.removeSubscription(e.endpoint)
                },
                onerror: e => console.log('Error:', e)
            });
            this.subscription[path] = ws
        } catch (ex) {
            console.log("Error :" + ex)
        }
    }

    caller(fname, ...args) {
        return this.streams[fname].call(null, ...args)
    }

    removeSubscription(endpoint) {
        if (this.subscription[endpoint]) {
            delete this.subscription[endpoint]
        }
    }

    closeSubscription(type, isCombined = false, ...args) {
        const endpoint = this.caller(type, ...args);
        const path = this._baseUrl + endpoint;
        const ws = this.subscription[path];
        if (ws) {
            ws.close(1000, "");
        }
    }

    onTicker(options, eventHandler) {
        return this.subscribe(eventHandler, options);
    }
}