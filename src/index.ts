import express, { Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './graphql/schema';
import resolver from './graphql/resolver';

const app = express();
const port = process.env.SERVER_PORT;

app.use(
    graphqlHTTP({
        schema,
        rootValue: resolver,
        graphiql: true,
    }),
);

app.get('/', (req: Request, res: Response) => {
    return res.send('API is working');
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
