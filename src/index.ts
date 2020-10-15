import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { BookResolver } from './resolvers/book.resolver';

async function main() {
    const port = process.env.SERVER_PORT || 8080;

    await createConnection();
    const schema = await buildSchema({ resolvers: [BookResolver] });
    const server = new ApolloServer({ schema });
    await server.listen(port);
    console.log(`Server is listening on ${port}`);
}

main();
