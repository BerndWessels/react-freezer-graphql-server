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
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import gqlUser from './user';

/**
 * Import database types.
 */
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
    }
  }
});

/**
 * Export the GraphQL schema.
 */
export default new GraphQLSchema({
  query: query
  // mutation?: ?GraphQLObjectType
});
