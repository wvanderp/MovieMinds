'use strict';

const fs = require('fs');
const path = require('path');


const baseLocation = path.join(__dirname, '/..', '/db/');

const fileLoc = (id) => {
  const number = id.substr(1, id.length);
  const type = id.substr(0, 1);

  console.log(type, number);

  return `${baseLocation}/${type}/${number}.json`
};

const checkDir = function(fileLoc) {
  const checkPath = path.dirname(fileLoc);

  if (!fs.existsSync(checkPath)) {
    fs.mkdirSync(checkPath);
  }
};

//TODO check for duplicate files
const put = function(type, id, document) {
  checkDir(fileLoc(id));
  fs.writeFileSync(fileLoc(id), document, {flag: 'w+'});
};

//TODO check for confilicts
const update = function(id, document) {
  fs.writeFileSync(fileLoc(id), JSON.stringify(document));
};

const remove = function(id) {
  fs.unlinkSync(fileLoc(id))
};

const get = function(id) {
  return JSON.parse(fs.readFileSync(fileLoc(id)));
};


module.exports = {
  put: put,
  update: update,
  remove: remove,
  get: get
};
