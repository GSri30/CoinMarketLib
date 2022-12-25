import { GetCryptoCurrencyParamsType } from '../../models/get-crypto-currency-params.interface';
import { GetCryptoCurrencyResponseType } from '../../models/get-crypto-currency-response.interface';
import requests from '../../adapters/requests';
import endpoints from './endpoints';

const CryptoCurrency = {
	getCryptoCurrencies: (args: GetCryptoCurrencyParamsType): Promise<GetCryptoCurrencyResponseType> => {
        let response = null;
        return new Promise(async (resolve, reject) => {
            try{
                let url: string = endpoints.get_crypto_currencies;
                for (const [param, value] of Object.entries(args)){
                    url += `?${param}=${value}`;    
                }
                response = requests.get(url);
            } catch(ex) {
                response = null;
                reject(ex);
            }
            if (response) {
                const json = response;
                resolve(json);
            }
        })
    },
};

export default CryptoCurrency;