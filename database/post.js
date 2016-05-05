/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export default (user, args, context) => {
  console.log('post', args);
  if (!args) {
    return null;
  }
  if (args.hasOwnProperty('id') && !isNaN(args.id)) {
    return {id: args.id, title: `Post Title ${args.id}`, content: `Post Content ${args.id}`, user: user, comments: null};
  } else if (args.hasOwnProperty('ids') && Array.isArray(args.ids)) {
    return args.ids.map((id) => {
      return {id: id, title: `Post Title ${id}`, content: `Post Content ${id}`, user: user, comments: null};
    });
  }
  console.log('dfgfdgf');
}
