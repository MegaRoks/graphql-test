import { join } from 'path';
import { createConnection } from 'typeorm';

export const getConnectionDatabase = async () => {
    try {
        return createConnection({
            type: process.env.DATABASE_TYPE as 'postgres',
            host: process.env.DATABASE_HOST,
            port: +process.env.DATABASE_PORT,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [`${join(__dirname, '..', 'entities', '*.entity.ts')}`],
            synchronize: true,
            logging: false,
        });
    } catch (err) {
        console.error('err', err);
    }
};
