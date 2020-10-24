'use strict';

// Modules
const _ = require('lodash');

module.exports = {
  name: 'rails',
  parent: '_recipe',
  config: {
    confSrc: __dirname,
    database: 'mariadb',
  },
  builder: (parent, config) => class LandoRails extends parent {
    constructor(id, options = {}) {
      options = _.merge({}, config, options);
      options.services = _.merge(
          {},
          {
            appserver: {
              type: 'compose',
              ssl: true,
              sslExpose: false,
              moreHttpPorts: [3000],
              services: {
                image: 'bitnami/rails',
                command: 'bundle exec rails server -b 0.0.0.0 -p 3000',
                user: 'root',
                ports: ['3000'],
                environment: {
                  GEM_HOME: '/app/vendor',
                  BUNDLE_DEFAULT_INSTALL_USERS_PATH: '/app/vendor',
                  DATABASE_HOST: 'database',
                  DATABASE_NAME: 'rails',
                },
              },
              build_internal: [
                'rm -f /app/tmp/pids/server.pid',
                'bundle install',
                'yarn',
              ],
            },
            database: {
              authentication: 'mysql_native_password',
              type: options.database,
              portforward: true,
              creds: {
                user: options.recipe,
                password: options.recipe,
                database: options.recipe,
              },
            },
          },
          options.services
      );
      options.tooling = _.merge(
          {},
          {
            bundler: {service: 'appserver'},
            gem: {service: 'appserver'},
            rake: {service: 'appserver'},
            rails: {service: 'appserver'},
            npm: {service: 'appserver'},
            yarn: {service: 'appserver'},
            mysql: {service: 'database'},
          },
          options.tooling
      );
      options.proxy = _.set({}, 'appserver', [`${options.app}.${options._app._config.domain}:3000`]);
      super(id, options);
    };
  },
};
