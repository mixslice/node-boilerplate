/**
 * loglevel: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 */
module.exports = function config() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        loglevel: 'info',
      };

    case 'staging':
      return {
        loglevel: 'verbose',
      };

    default:
      return {
        loglevel: 'debug',
      };
  }
};
