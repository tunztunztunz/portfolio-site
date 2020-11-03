import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: `Dustin Simensen`,
    siteUrl: 'https://www.dustinsimensen.com',
    description: 'Web development portfolio for Dustin Simensen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'z135q00r',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: 100,
      },
    },
  ],
};
