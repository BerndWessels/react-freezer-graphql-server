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
import gqlComment from './comment';
import gqlUser from './user';

/**
 * Export the GraphQL type.
 */
export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    comments: {type: new GraphQLList(gqlComment)},
    content: {type: GraphQLString},
    id: {type: GraphQLInt},
    title: {type: GraphQLString},
    user: {type: gqlUser}
  })
});
