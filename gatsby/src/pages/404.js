import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import useSound from 'use-sound';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

import gunshot from '../assets/sounds/gunshot.mp3';
import { Button } from '../components/common/Button';

const FourPageStyles = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 5rem;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .gatsby-image-wrapper {
    margin: 1rem 0;
    min-width: 280px;
    height: 100%;
    @media (min-width: 900px) {
      width: 100%;
      height: 100%;
      max-width: 400px;
      max-height: 100%;
    }
  }
  .Button {
    margin-top: 1rem;
  }
`;

const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
`;

const FourOhFourPage = ({ data }) => {
  const [play, { stop }] = useSound(gunshot, { volume: 1 });
  const page = data.sanityFourPage;
  const [currentImage, setCurrentImage] = useState(page.image.asset.fluid);
  useEffect(() => {
    play();
  }, []);
  return (
    <>
      <Layout>
        <SEO title="Dustin Simensen" />
        <FourPageStyles />
        <ImageContainer>
          <h1>{page.heading}</h1>
          <div
            onMouseEnter={() => {
              play();
              setCurrentImage(page.hoverImage.asset.fluid);
            }}
            onMouseLeave={() => {
              stop();
              setCurrentImage(page.image.asset.fluid);
            }}
          >
            <Img fluid={currentImage} />
          </div>
          <h2>{page.text}</h2>
          <StyledLink to="/">
            <Button>Go Home!</Button>
          </StyledLink>
        </ImageContainer>
      </Layout>
    </>
  );
};

export default FourOhFourPage;

// This query uses filter to find specific person
export const query = graphql`
  query FourOhPourPageQuery {
    sanityFourPage {
      heading
      text
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      hoverImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
