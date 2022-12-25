interface GetCryptoCurrencyParamsType {
    start?: number;
    limit?: number;
    price_min?: number;
    price_max?: number;
    market_cap_min?: number;
    market_cap_max?: number;
    volume_24h_min?: number;
    volume_24h_max?: number;
    circulating_supply_min?: number;
    circulating_supply_max?: number;
    percent_change_24h_min?: number;
    percent_change_24h_max?: number;
    convert?: string;
    convert_id?: string;
    sort?: string;
    sort_dir?: string;
    cryptocurrency_type?: string;
    tag?: string;
    aux?: string;
}

interface CryptoCurrencyType {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: string;
    tags: Array<string>;
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    platform: object;
    cmc_rank: number;
    self_reported_circulating_supply: number;
    self_reported_market_cap: number;
    tvl_ratio: number;
    last_updated: string;
    quote: object;
}

interface StatusType {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
    credit_count: number;
}

interface GetCryptoCurrencyResponseType {
    data?: CryptoCurrencyType[];
    status: StatusType;
}

declare class APILIB {
    static getCryptoCurrencies(args: GetCryptoCurrencyParamsType): Promise<GetCryptoCurrencyResponseType>;
}

export { APILIB, CryptoCurrencyType, GetCryptoCurrencyParamsType, GetCryptoCurrencyResponseType, StatusType };
