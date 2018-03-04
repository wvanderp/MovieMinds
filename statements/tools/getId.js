const relations = require('../statements/relations');

const ids = [];

relations.forEach((e) => {
  if (e.id !== undefined) {
    ids.push(e.id);
  }
});

// console.log(ids);


const findMissingNumbers = function(arr) {
  // Create sparse array with a 1 at each index equal to a value in the input.
  // eslint-disable-next-line no-sequences
  const sparse = arr.reduce((sparse, i) => (sparse[i] = 1, sparse), []);
  // Create array 0..highest number, and retain only those values for which
  // the sparse array has nothing at that index (and eliminate the 0 value).
  return [...sparse.keys()].filter(i => i && !sparse[i]);
};

const result = findMissingNumbers(ids);

if (result.length === 0) {
  const largest = Math.max(...ids);
  console.log(largest + 1);
} else {
  console.log(result[0]);
}
