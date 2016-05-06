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

/**
 * Import query types.
 */
import gqlPost from './post';

/**
 * Export the GraphQL type.
 */
export default new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    firstName: {type: GraphQLString},
    id: {type: GraphQLInt},
    lastName: {type: GraphQLString},
    posts: {type: new GraphQLList(gqlPost)}
  })
});
