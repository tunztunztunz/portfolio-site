import styled from 'styled-components';

export const Container = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (min-width: 600px) {
    padding: 0 2rem;
  }

  @media (min-width: 600px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;
