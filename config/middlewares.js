module.exports = ({ env }) => [
  "strapi::errors",

  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src": ["self", "http:", "https:"],
          "img-src": [
            "self",
            "data:",
            "blob:",
            env("SUPABASE_API_URL"),
          ],
          'media-src': ["'self'", 'data:', 'blob:', env('SUPABASE_API_URL')],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
