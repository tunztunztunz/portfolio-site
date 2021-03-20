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

const Homepage = ({ data }) => {
  const person = data.person.nodes[0];
  const { projects } = data.projects.edges[0].node;
  console.log(projects);
  return (
    <>
      <SEO title="Dustin Simensen" />
      <HomepageStyles>
        <AboutMe person={person} />
        <Projects projects={projects} />
        <Contact />
      </HomepageStyles>
    </>
  );
};

export default Homepage;

// This query uses filter to find specific person
export const query = graphql`
  query {
    person: allSanityPeople(filter: { name: { eq: "Dustin Simensen" } }) {
      nodes {
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    projects: allSanityProjects {
      edges {
        node {
          projects {
            _rawDescription(resolveReferences: { maxDepth: 10 })
            githubLink
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            liveLink
            name
            slug {
              current
            }
            technology
          }
        }
      }
    }
  }
`;
