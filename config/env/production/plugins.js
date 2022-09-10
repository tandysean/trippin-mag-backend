module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'strapi-provider-upload-imagekit', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
        providerOptions: {
            publicKey: env('IK_PUBLIC_KEY'),
            privateKey: env("IK_PRIVATE_KEY"),
            urlEndpoint: env("IK_URL"),
          params: {
            folder: "/production/images"  // Defaults to "/" if value is not supplied
          },
        },
      },
    },
    // ...
  });