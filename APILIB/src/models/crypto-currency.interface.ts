export interface CryptoCurrencyType{
    id: number,
    name: string,
    symbol: string,
    slug: string,
    num_market_pairs: number,
    date_added: string,
    tags: Array<string>,
    max_supply: number,
    circulating_supply: number,
    total_supply: number,
    platform: object,
    cmc_rank: number,
    self_reported_circulating_supply: number,
    self_reported_market_cap: number,
    tvl_ratio: number,
    last_updated: string,
    quote: object
}