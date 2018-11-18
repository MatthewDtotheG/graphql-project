import { buildSchema } from 'graphql';

const schema = buildSchema(`

  type Freind{
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
  }

  type Query{
    hello: String
  }
`)

export default schema;
