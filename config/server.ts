export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  url: process.env.NODE_ENV === 'production'
    ? env('PUBLIC_URL', 'http://admin.jonmikkelhansen.dk')
    : 'http://localhost:8080',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    url: process.env.NODE_ENV === 'production'
      ? '/'
      : '/admin',
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  middleware: {
    settings: {
      parser: {
        enabled: true,
        multipart: true,
        formidable: {
          maxFileSize: 200 * 1024 * 1024,
        }
      },
    },
  },
});
