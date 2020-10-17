import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { graphql } from 'graphql';

describe('Book Resolver Tests', () => {
    const schemaString = `
        type Author {
            authorId: String!
            name: String!
            createdAt: String!
            updatedAt: String!
        }

        type Book {
            bookId: String!
            name: String!
            pageCount: Int!
            authorId: String!
            createdAt: String!
            updatedAt: String!
            author: Author!
        }

        type Query {
            getBooksList: [Book!]!
            getBook(bookId: String!): Book!
        }

        input BookInput {
            name: String!
        }

        type Mutation {
            createBook(data: BookInput!): Book!
            updateBook(bookId: String!, data: BookInput!): Book!
            deleteBook(bookId: String!): Boolean!
        }
    `;

    const schema = makeExecutableSchema({ typeDefs: schemaString });
    const schemaWithMocks = addMocksToSchema({ schema });

    it('should get book list without author', async () => {
        const query = `
            query {
                getBooksList {
                    bookId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);
        expect(response).toMatchSnapshot();
    });

    it('should get book list with author', async () => {
        const query = `
            query {
                getBooksList {
                    bookId name createdAt updatedAt author { authorId name createdAt updatedAt }
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);
        expect(response).toMatchSnapshot();
    });

    it('should get book', async () => {
        const query = `
            query {
                getBook(bookId: "qwe123") {
                    bookId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);
        expect(response).toMatchSnapshot();
    });

    it('should create book', async () => {
        const query = `
            mutation {
                createBook(data: { name: "Book 1"}) {
                    bookId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);
        expect(response).toMatchSnapshot();
    });

    it('should update book', async () => {
        const query = `
            mutation {
                updateBook(bookId: "qwe123", data: { name: "Book 2"}) {
                    bookId name createdAt updatedAt
                }
            }
        `;

        const response = await graphql(schemaWithMocks, query);
        expect(response).toMatchSnapshot();
    });

    it('should delete book', async () => {
        const query = `
            mutation {
                deleteBook(bookId: "qwe123")
            }
        `;

        const response = await graphql(schemaWithMocks, query);
        expect(response).toMatchSnapshot();
    });
});
