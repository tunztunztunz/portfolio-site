import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Projects from '../components/sections/Projects/Projects';
import AboutMe from '../components/sections/AboutMe/AboutMe';
import Contact from '../components/sections/Contact/Contact';
import SEO from '../components/SEO';

const HomepageStyles = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 5rem;
`;

const FourOhFourPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <SEO title="Dustin Simensen" />
      <HomepageStyles>
        <p>Hi!</p>
      </HomepageStyles>
    </>
  );
};

export default FourOhFourPage;

// This query uses filter to find specific person
export const query = graphql`
  query FourOhPourPageQuery {
    allSanityFourPage {
      edges {
        node {
          image {
            asset {
              fluid {
                src
              }
            }
          }
          text
        }
      }
    }
  }
`;
