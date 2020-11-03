import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: var(--white);
  color: var(--black);
  font-size: 1em;
  margin: 0.5rem 1rem 0 0;
  padding: 0.25em 1.25em;
  border: 1px solid var(--black);
  border-radius: 8px;
  :hover {
    color: var(--rose);
    border-color: var(--rose);
  }
`;
