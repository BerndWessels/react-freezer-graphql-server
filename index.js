/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

const GRAPHQL_PORT = 8088;

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP(request => ({
  schema: schema,
  context: {some: 'stuff'},
  graphiql: true
})));

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
