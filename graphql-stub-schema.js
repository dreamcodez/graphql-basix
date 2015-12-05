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
  name: 'Coder',
  fields: {
    name: {type: GraphQLString},
    highlights: {type: GraphQLString},
    baconNumber: {type: GraphQLInt}
  }
});

var getCoders = {
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
  name: 'QueryRoot',
  fields: {getCoders}
});

var MutationRoot = new GraphQLObjectType({
  name: 'MutationRoot',
  fields: {logToServer}
});

/* main schema */
module.exports = new GraphQLSchema({
  query: QueryRoot,
  mutation: MutationRoot
});
