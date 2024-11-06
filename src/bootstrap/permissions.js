module.exports = async ({ strapi }) => {
  // Find the public role
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  // Define the permissions you want to set
  const permissions = {
    'api::case.case': ['find', 'findOne'],
    'api::company.company': ['find', 'findOne']
  };

  // Update permissions for each content type
  for (const [contentType, actions] of Object.entries(permissions)) {
    for (const action of actions) {
      await strapi.query('plugin::users-permissions.permission').create({
        data: {
          action: `${contentType}.${action}`,
          role: publicRole.id,
          enabled: true,
        },
      });
    }
  }
};
