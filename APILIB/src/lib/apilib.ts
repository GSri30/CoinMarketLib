import CryptoCurrency from '../services/api/index';
import { GetCryptoCurrencyParamsType } from '../models/get-crypto-currency-params.interface';
import { GetCryptoCurrencyResponseType } from '../models/get-crypto-currency-response.interface';

export class APILIB {
    public static getCryptoCurrencies(args: GetCryptoCurrencyParamsType): Promise<GetCryptoCurrencyResponseType> {
        return CryptoCurrency.getCryptoCurrencies(args);
    }
}