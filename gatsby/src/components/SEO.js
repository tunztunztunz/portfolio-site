import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ children, location, description, title, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <Helmet>
      {/* Specify which language the website is in for accessibility */}
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <link rel="alternate icon" href="favicon.ico" />
      {/* meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/*  open graph */}
      {location && <meta property="ug:url" content={location.href} />}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      {children}
    </Helmet>
  );
};

export default SEO;
