import { buildSchema } from 'graphql';

export default buildSchema(`
    type BookType {
        bookId: Int!
        name: String!
        pageCount: Int!
        authorId: Int!
        author: AuthorType!
    }

    type AuthorType {
        authorId: Int!
        name: String!
    }

    type Query {
        getBooks: [BookType!]!
    }
`);
