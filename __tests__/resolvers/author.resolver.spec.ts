import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { graphql } from 'graphql';

describe('Author Resolver Tests', () => {
    const schemaString = `
        type Author {
            authorId: String!
            name: String!
            createdAt: String!
            updatedAt: String!
        }

        type Query {
            getAuthorsList: [Author!]!
            getAuthor(authorId: String!): Author!
        }

        input AuthorInput {
            name: String!
        }

        type Mutation {
            createAuthor(data: AuthorInput!): Author!
            updateAuthor(authorId: String!, data: AuthorInput!): Author!
            deleteAuthor(authorId: String!): Boolean!
        }
    `;

    const schema = makeExecutableSchema({ typeDefs: schemaString });
    const schemaWithMocks = addMocksToSchema({ schema });

    it('should get author list', async () => {
        const query = `
            mutation {
                getAuthorsList {
                    authorId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);

        expect(response).toMatchSnapshot();
    });

    it('should get author', async () => {
        const query = `
            query {
                getAuthor(authorId: "qwe123") {
                    authorId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);

        expect(response).toMatchSnapshot();
    });

    it('should create author', async () => {
        const query = `
            mutation {
                createAuthor(data: { name: "Author 1"}) {
                    authorId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);

        expect(response).toMatchSnapshot();
    });

    it('should update author', async () => {
        const query = `
            mutation {
                updateAuthor(authorId: "qwe123", data: { name: "Author 2"}) {
                    authorId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);

        expect(response).toMatchSnapshot();
    });

    it('should delete author', async () => {
        const query = `
            mutation {
                deleteAuthor(authorId: "qwe123")
            }
        `;

        const response = await graphql(schemaWithMocks, query);

        expect(response).toMatchSnapshot();
    });
});
