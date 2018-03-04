import relations from '../../relations.build.json';

const getRelationsFromType = function(type) {
  const rel = [];
  relations.forEach((e) => {
    if (e.entity0Type === type || e.entity1Type === type) {
      rel.push(e);
    }
  });

  return rel;
};
