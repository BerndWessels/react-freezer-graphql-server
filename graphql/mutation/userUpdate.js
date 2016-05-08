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
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

/**
 * Import query types.
 */
import gqlUser from '../query/user';

/**
 * Import database types.
 */
import {default as dbUser, update} from '../../database/user';

/**
 * Import mutation helper.
 */
import mutation from '../lib/mutation';

/**
 * Export the GraphQL User type.
 */
export default mutation({
  // Mutation name.
  name: 'UpdateUser',
  // Fields supplied by the client.
  inputFields: {
    id: {type: new GraphQLNonNull(GraphQLInt)},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString}
  },
  // Mutated fields returned from the server.
  outputFields: {
    user: {
      type: gqlUser,
      // Parameters are payload from mutateAndGetPayload.
      resolve: ({user, somethingelse}) => {
        return user;
      }
    }
  },
  // Take the input fields, process the mutation and return the output fields.
  mutateAndGetPayload: (inputFields, context) => {
    // Execute the mutation.
    var user = update(inputFields);
    // Return the mutation payload to create the output fields.
    return {
      user: user,
      somethingelse: 4711
    };
  }
});
