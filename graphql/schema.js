/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Import GraphQL types.
 */
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

/**
 * Import query types.
 */
import gqlPost from './query/post';
import gqlUser from './query/user';

/**
 * Import mutation types.
 */
import gqlUserUpdate from './mutation/userUpdate';

/**
 * Import database types.
 */
import dbPost from '../database/post';
import dbUser from '../database/user';

/**
 * The GraphQL root query.
 */
var query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: gqlUser,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve(_, args, context) {
        return dbUser(args, context);
      }
    },
    post: {
      type: gqlPost,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve(_, args, context) {
        return dbPost(null, args, context);
      }
    }
  }
});

/**
 * The GraphQL mutations.
 */
var mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    userUpdate: gqlUserUpdate
  }
});

/**
 * Export the GraphQL schema.
 */
export default new GraphQLSchema({
  query: query,
  mutation: mutation
});
