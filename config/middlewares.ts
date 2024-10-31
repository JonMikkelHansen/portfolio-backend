export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:', 'http:'],
          upgradeInsecureRequests: null,
        },
      },
      cors: {
        enabled: true,
        origin: ['*'],  // Allow all origins for now
        expose: ['WWW-Authenticate', 'Server-Authorization', 'Access-Control-Allow-Origin'],
        maxAge: 31536000,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
        headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
