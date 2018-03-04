const relations = require('../relations.build.json');

const findRelationById = function(relationId) {
  //https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
  const result = relations.filter((obj) => {
    return obj.id === relationId;
  });

  return result[0];
};


const getFieldFromRelationByName = function(relation, name) {
  //https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property

  const result = relation.fields.filter((field) => {
    return field.name === name
  });

  return result[0];
};

const expandLRF = function(lrf) {
  //make sure that relationId is a number
  lrf.relationId = Number(lrf.relationId);

  const baseRelation = findRelationById(lrf.relationId);


  const newFields = [];

  const length = lrf.fields.length;

  for (let i = 0; i < length; i++) {
    const fullField = getFieldFromRelationByName(baseRelation, lrf.fields[i].name);
    // console.log(fullField);
    newFields.push(Object.assign(lrf.fields[i], fullField));
  }

  lrf = Object.assign(lrf, baseRelation);

  lrf.fields = newFields;

  return lrf;
};


// <test area>

// const data = {
//   relationId: 5,
//   fields: [
//     {
//       name: 'person',
//       value: 'P1'
//     },
//     {
//       name: 'movie',
//       value: 'M1'
//     }
//   ]
// };

// console.log(expandLRF(data));

// </test area>

module.exports = {
  expandLRF,
  findRelationById,
  getFieldFromRelationByName
};
