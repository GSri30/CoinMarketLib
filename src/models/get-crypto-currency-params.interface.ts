export interface GetCryptoCurrencyParamsType{
    start?: number,
    limit?: number,
    price_min?: number,
    price_max?: number,
    market_cap_min?: number,
    market_cap_max?: number,
    volume_24h_min?: number,
    volume_24h_max?: number,
    circulating_supply_min?: number,
    circulating_supply_max?: number,
    percent_change_24h_min?: number,
    percent_change_24h_max?: number,
    convert?: string,
    convert_id?: string,
    sort?: string,
    sort_dir?: string,
    cryptocurrency_type?: string,
    tag?:string,
    aux?: string
}