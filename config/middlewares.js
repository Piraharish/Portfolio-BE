module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src":["'self'","https:"],
          "default-src": ["'self'"],
          "img-src": ["'self'", "data:", "blob:","market-assets.strapi.io", env("DATABASE_HOST")],"media-src":["'self'","data:","blob:","market-assets.strapi.io", env("DATABASE_HOST")]
        },
      },
    },
  },
];
