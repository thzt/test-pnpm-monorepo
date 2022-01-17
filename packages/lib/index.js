const debug = require('debug');

const log = (...args) => {
  debugger;
  return debug('test')(...args);
};

module.exports = {
  log,
};