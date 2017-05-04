var bf = require('node-brainfuck');

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    resolve(bf(data))
  });
}
