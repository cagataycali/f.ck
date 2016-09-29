var bf = require('node-brainfuck');
var async = require('async');

module.exports = function(data) {
  return new Promise(function(resolve, reject) {
    resolve(bf(data))
  });
}
