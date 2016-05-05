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
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import gqlComment from './comment';
import gqlUser from './user';

/**
 * Export the GraphQL User type.
 */
export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    comments: {
      type: new GraphQLList(gqlComment),
      resolve: (dbUser, args, context) => {
        return null;
      }
    },
    user: {
      type: gqlUser
    }
  })
});
