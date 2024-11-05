module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: 'portfolio',
          resource_type: 'auto',
          eager: [
            { streaming_profile: 'hd', format: 'auto' }
          ],
          eager_async: true,
          timeout: 120000,
        },
        delete: {},
      },
    },
  },
});


