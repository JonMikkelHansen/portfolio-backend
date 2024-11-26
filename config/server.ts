export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  url: env('PUBLIC_URL', 'http://www.jonmikkelhansen.dk'),
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
