const fs = require('fs');
const path = require('path');

const relations = require('./statements/relations');

const buildFile = path.join(__dirname, '../statements.build.json');

const json = JSON.stringify(relations, null, '    ');

// console.log(buildFile);
// console.log(json)
fs.writeFileSync(buildFile, json);

console.log('build successful');
