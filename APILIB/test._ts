import { APILIB, GetCryptoCurrencyParamsType } from './src';

const main = async () => {
    const config: GetCryptoCurrencyParamsType = {
        limit : 3
    }
    const result = await APILIB.getCryptoCurrencies(config);
    console.log(result);
    return result.status;
}

main();