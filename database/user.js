/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import post from './post';

var users = [
  {
    id: 1,
    firstName: 'Bernd',
    lastName: 'Wessels'
  },
  {
    id: 2,
    firstName: 'Heribert',
    lastName: 'Fuehrer'
  }
];

users[0].posts = post(users[0], {ids: [1,2,3]}, null);
users[1].posts = post(users[1], {ids: [4]}, null);

export default (args, context) => {
  if (!args || isNaN(args.id)) {
    return null;
  }
  return users.find((user) => user.id === args.id);
}
