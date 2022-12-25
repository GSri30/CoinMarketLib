import { CryptoCurrencyType } from './crypto-currency.interface';
import { StatusType } from './status.interface';

export interface GetCryptoCurrencyResponseType{
    data?: CryptoCurrencyType[],
    status: StatusType
}