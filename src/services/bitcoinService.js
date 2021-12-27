import { storageService } from './storageService'

const axios = require('axios').default;

async function getData(type) {
    let url = null
    switch (type) {
        case 'marketPrice':
            url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
            break
        case 'bitcoinRate':
            url = 'https://blockchain.info/tobtc?currency=USD&value=1'
            break
        case 'tradeVolume':
            url = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'
            break

    }

    return await _getDataFromType(type, url);
}

async function _getDataFromType(type, url) {
    let data = storageService.load(type)
    if (!data) {
        console.log(`Loading ${type} data from api...`)
        const res = await axios.get(url)
        data = res.data
        storageService.store(type, data)
    }
    return data
}

export {
    getData
}