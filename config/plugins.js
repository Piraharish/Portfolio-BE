module.exports = ({ env }) => ({
  upload: {
    provider: "strapi-provider-upload-supabase",
    providerOptions: {
      baseUrl: env("SUPABASE_BASE_URL"),
      bucketName: env("SUPABASE_BUCKET_NAME"),
      apiKey: env("SUPABASE_API_KEY"),
      directory:env("SUPABASE_DIRECTORY")
    },
  },
});
