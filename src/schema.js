import {
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

/* these types should be split into separate files in future */
/* suggest using uppercase/class naming for types */

var Coder = new GraphQLObjectType({
  description: 'a coder; aka a code monkey, suitable for programming work',
  name: 'Coder',
  fields: {
    name: {
      description: 'the coders name',
      type: GraphQLString
    },
    highlights: {
      description: 'random highlights or facts about this coders existence',
      type: GraphQLString
    },
    baconNumber: {
      description: 'the distance from bacon; non-descript. mystery.',
      type: GraphQLInt
    }
  }
});

var getCoders = {
  description: 'global list of available coders',
  type: new GraphQLList(Coder),
  resolve: () => [
    { name: 'Mike'
    , highlights: 'frontend, material design, react, awesomeness'
    , baconNumber: 99999
    },
    { name: 'Matt'
    , highlights: 'tutum, snowboarding, graphql?, silly?'
    , baconNumber: 999999
    },
    { name: 'Jovin'
    , highlights: 'yeahhhh man'
    , baconNumber: 999
    },
    { name: 'Chance'
    , highlights: 'windows, security chops, loves enchiladas?'
    , baconNumber: 9999999
    },
    { name: 'Beppu'
    , highlights: 'assembly language, reactjs, shell guru, jujitsumania?'
    , baconNumber: 9999999
    }
  ]
};

var logToServer = {
  type: GraphQLBoolean,
  args: {message: {type: GraphQLString}},
  resolve: (_, args, info) => {
    console.log(args.message)
    return true;
  }
};

var QueryRoot = new GraphQLObjectType({
  description: 'global query object',
  name: 'QueryRoot',
  fields: {getCoders}
});

var MutationRoot = new GraphQLObjectType({
  description: 'global mutation object',
  name: 'MutationRoot',
  fields: {logToServer}
});

/* main schema */
module.exports = new GraphQLSchema({
  description: 'a test schema with koa',
  query: QueryRoot,
  mutation: MutationRoot
});
