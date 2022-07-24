// @ts-check

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config({path: '.env'});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const migrations = {
    directory: path.join(__dirname, 'server', 'migrations'),
};

export const development = {
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    },
    useNullAsDefault: true,
    debug: true,
    migrations,
};

export const production = {
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    },
    useNullAsDefault: true,
    migrations,
};
