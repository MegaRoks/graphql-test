import { buildSchema } from 'graphql';

export default buildSchema(`
    type BookType {
        bookId: String!
        name: String!
        pageCount: Int!
        authorId: String!
        author: AuthorType!
    }

    type AuthorType {
        authorId: String!
        name: String!
    }

    type Query {
        getBooks: [BookType!]!
    }
`);
