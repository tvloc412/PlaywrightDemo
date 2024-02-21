import config from "../env.config.json";

interface EnvConfig {
    APP_URL: string;
    EMAIL: string;
    PASSWORD: string;
}

export class ConfigReader {
    private static readonly envVars = config;

    static getEnvVars(): EnvConfig {
        let environment = process.env.env || "QA";
        const env = this.envVars[environment];
        if (!env) {
            throw new Error(`Invalid environment: ${environment}`);
        }
        return env;
    }

    static get APP_URL(): string {
        return ConfigReader.getEnvVars().APP_URL;
    }

    static get EMAIL(): string {
        return ConfigReader.getEnvVars().EMAIL;
    }

    static get PASSWORD(): string {
        return ConfigReader.getEnvVars().PASSWORD;
    }
}
