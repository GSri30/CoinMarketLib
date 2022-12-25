import axios from "axios";
import config from "../env/config";

export default axios.create({
  baseURL: "https://pro-api.coinmarketcap.com",
  timeout: 15000,
  headers: {
    "Content-type": "application/json",
    'X-CMC_PRO_API_KEY': config.CMC_API_KEY
  }
});