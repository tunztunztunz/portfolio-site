import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Dustin Simensen`,
    siteUrl: 'https://www.dustinsimensen.com',
    description: 'Portfolio site for Dustin Simensen.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        threshold: 0.05,
        once: true,
      },
    },
    {
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
