/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2015 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import fs from 'fs';
import path from 'path';
import task from './lib/task';
import schema from '../graphql/schema';

export default task('update schema', async() => {

  let clientSchema = {};

  function processFields(typeName, fields) {
    if (clientSchema.hasOwnProperty(typeName)) {
      return;
    }
    clientSchema[typeName] = {};
    for (let fieldName in fields) {
      let field = fields[fieldName];
      var fieldType = field.type.hasOwnProperty('ofType') ? field.type.ofType : field.type;
      if (fieldType.hasOwnProperty('_fields')) {
        clientSchema[typeName][fieldName] = {type: fieldType.name};
        processFields(fieldType.name, fieldType._fields);
      }
    }
  }

  processFields(schema._queryType._typeConfig.name, schema._queryType._typeConfig.fields);

  var output = `export default ${JSON.stringify(clientSchema, null, 2)}`;
  fs.writeFile(path.join(__dirname, '../graphql/schema.client.js'), output);
});
