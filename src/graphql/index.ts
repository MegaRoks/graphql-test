import { join } from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

export const getConnectionGraphQL = async () => {
    try {
        const schema = await buildSchema({ resolvers: [`${join(__dirname, '..', 'resolvers', '*.resolver.ts')}`] });
        return new ApolloServer({ schema });
    } catch (err) {
        console.error('err', err);
    }
};
