import path from 'path';

export default ({ env }) => {
  const client = 'postgres';

  const connections = {
    postgres: {
      connection: {
        connectionString: process.env.NODE_ENV === 'production'
          ? env('DATABASE_PRIVATE_URL')
          : env('DATABASE_PUBLIC_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      pool: { min: 2, max: 10 },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
