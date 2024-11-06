const setDefaultPermissions = require('./permissions');

module.exports = async () => {
  await setDefaultPermissions({ strapi });
}; 