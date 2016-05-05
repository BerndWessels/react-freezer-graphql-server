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
  GraphQLString
} from 'graphql';

import gqlPost from './post';

/**
 * Export the GraphQL User type.
 */
export default new GraphQLObjectType({
  name: 'Comment',
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
    post: {
      type: gqlPost
    }
  })
});
