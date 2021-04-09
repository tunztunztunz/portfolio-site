import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import lowPop from '../../assets/sounds/lowPop.mp3';
import highPop from '../../assets/sounds/highPop.mp3';

const StyledButton = styled.button`
  display: inline-block;
  background: var(--color-background);
  border: 1px solid var(--color-text);
  color: var(--color-text);
  font-size: 1em;
  margin: 0.5rem 1rem 0 0;
  padding: 0.25em 1.25em;
  border-radius: 8px;
  a {
    text-decoration: none;
  }
  :hover {
    cursor: pointer;
    transition: all 600ms;
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-background);
  }
`;

export const Button = ({ children, openVideo }) => {
  const [playActive] = useSound(lowPop, { volume: 0.25 });
  const [playOn] = useSound(highPop, { volume: 0.25 });

  return (
    <StyledButton
      onMouseDown={playActive}
      onMouseUp={playOn}
      onClick={openVideo ? () => openVideo() : () => ''}
    >
      {children}
    </StyledButton>
  );
};
