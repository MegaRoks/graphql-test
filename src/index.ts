import 'reflect-metadata';

import { getConnectionDatabase } from './database';
import { getConnectionGraphQL } from './graphql';

async function main() {
    await getConnectionDatabase();
    const server = await getConnectionGraphQL();
    const port = process.env.SERVER_PORT || 8080;
    await server.listen(port);
    console.log(`Server is listening on ${port}`);
}

main();
