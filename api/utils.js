const randomId = function() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < 10; i++) {text += possible.charAt(Math.floor(Math.random() * possible.length));}

  return text;
};

const genId = function(type) {
  const sId = randomId();

  return `${type}:${sId}`;
};

module.exports = {
  genId: genId
};
