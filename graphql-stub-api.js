import express from 'express';
import expressGraphQL from 'express-graphql';
import graphqlStubSchema from './graphql-stub-schema';

var app = express();
app.use('/graphql', expressGraphQL({
  schema: graphqlStubSchema,
  graphiql: true
}));

var port = 1337
console.log(`Listening on ${port}`);
app.listen(port)

