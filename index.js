import express from 'express';
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema';

const app = express()

app.get('/', (res, req) => {
  res.send('GraphQL is amazing!')
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(8080, () => console.log('Running server on port 8080/graphql'));
