import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express()

app.get('/', (res, req) => {
  res.send('GraphQL is amazing!')
});

const root = { friend: () => {
  return {
    "id": 2,
    "firstName": "Matt",
    "lastName": "Garrett",
    "gender": "Male",
    "language": "English",
    "email": "gmail@gmail.com"
  }
}};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(8080, () => console.log('Running server on port 8080/graphql'));