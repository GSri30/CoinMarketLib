import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface ENV {
    CMC_API_KEY: string | undefined;
}

interface Config {
    CMC_API_KEY: string;
}

const getConfig = (): ENV => {
    return {
        CMC_API_KEY: process.env.CMC_API_KEY
    }
}

const getSanitzedConfig = (config: ENV): Config => {
    for (const [key, value] of Object.entries(config)) {
      if (value === undefined) {
        throw new Error(`Missing key ${key} in .env`);
      }
    }
    return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;