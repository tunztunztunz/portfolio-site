import styled from 'styled-components';

export const HeaderStyles = styled.section`
  text-align: center;
  margin-bottom: 6rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  justify-items: start;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 8rem;
  h1 {
    color: var(--rose);
  }
`;

export const SingleProjectStyles = styled.div`
  --columns: 1fr;
  display: grid;
  grid-template-columns: var(--columns);
  gap: 2rem;
  justify-items: center;
  text-align: center;
  @media (min-width: 900px) {
    justify-items: center;
    text-align: left;
    --columns: 1fr 2fr;
  }
  p {
    padding: 0 8%;
    margin-bottom: 0;
    text-align: left;
    @media (min-width: 900px) {
      text-align: left;
      padding: 0;
    }
  }
  h2 {
    padding: 0;
    margin: 0;
    display: inline-block;
    top: 0;
  }
  .buttons {
    display: flex;
    justify-content: center;
    Button {
      margin: 0 1rem;
    }
    @media (min-width: 900px) {
      justify-content: start;
    }
  }
  .img-div {
    display: flex;
    flex-direction: column;
  }
  .technology {
    margin-top: 0.5rem;
    align-self: center;
    align-items: end;
    color: var(--rose);
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  .gatsby-image-wrapper {
    margin-top: 0.3rem;
    min-width: 280px;

    @media (min-width: 900px) {
      width: 400px;
      /* height: 280px; */
    }
  }
`;
