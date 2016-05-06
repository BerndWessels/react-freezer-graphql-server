/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * TODO Maybe use ES6 Promise without this import?
 */
import _Promise from 'babel-runtime/core-js/promise';

function resolveMaybeThunk(thingOrThunk) {
  return typeof thingOrThunk === 'function' ? thingOrThunk() : thingOrThunk;
}

/**
 * Import GraphQL types.
 */
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql';

/**
 * A helper to create an easy to use GraphQL mutation.
 *
 * mutateAndGetPayload will receieve an Object with a key for each
 * input field, and it should return an Object with a key for each
 * output field. It may return synchronously, or return a Promise.
 */

/**
 * Returns a GraphQLFieldConfig for the mutation described by the
 * provided MutationConfig.
 */

export default (config) => {
  var name = config.name;
  var inputFields = config.inputFields;
  var outputFields = config.outputFields;
  var mutateAndGetPayload = config.mutateAndGetPayload;

  var augmentedInputFields = function augmentedInputFields() {
    return resolveMaybeThunk(inputFields);
  };
  var augmentedOutputFields = function augmentedOutputFields() {
    return resolveMaybeThunk(outputFields);
  };

  var outputType = new GraphQLObjectType({
    name: name + 'Payload',
    fields: augmentedOutputFields
  });

  var inputType = new GraphQLInputObjectType({
    name: name + 'Input',
    fields: augmentedInputFields
  });

  return {
    type: outputType,
    args: {
      input: {type: new GraphQLNonNull(inputType)}
    },
    resolve: function resolve(_, _ref, info) {
      var input = _ref.input;

      return _Promise.resolve(mutateAndGetPayload(input, info)).then(function (payload) {
        return payload;
      });
    }
  };
}
