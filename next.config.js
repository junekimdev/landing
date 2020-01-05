const withSass = require('@zeit/next-sass');
module.exports = withSass({
  // @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  // This sets environment variable for SSR
  env: {
    PUBLIC_URL: 'https://landing.junekim.xyz',
  },
  generateBuildId: async () => {
    // @see https://github.com/zeit/next.js/wiki/Deployment
    // When process.env.BUILD_ID is undefined, fall back to the default
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    }

    return null;
  },
  poweredByHeader: false,
});
