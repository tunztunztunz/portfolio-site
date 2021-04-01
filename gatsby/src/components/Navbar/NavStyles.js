import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  position: relative;
  text-transform: uppercase;
  z-index: 2;
  align-self: center;
  background-color: var(--white);
  @media (max-width: 800px) {
    background: var(--white);
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    padding: 0 3rem;
  }
`;

export const Name = styled.a`
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  color: var(--black);
  &:hover {
    color: var(--rose);
    cursor: pointer;
  }
  text-decoration: none;

  @media (max-width: 600px) {
    margin-top: -0.75rem;
    font-size: 1rem;
  }
`;

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 800px) {
    display: flex;
  }
`;
export const Navbox = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  height: 100%;
  @media (max-width: 800px) {
    a {
      margin-left: 3rem;
    }
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    //padding-left: 5rem;
    background-color: var(--white);
    transition: all 0.3s ease-in;
    top: 8vh;
    right: ${(props) => (props.open ? '-100%' : '0')};
  }
`;
export const Hamburger = styled.div`
  display: none;
  background-color: var(--black);
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};
  @media (max-width: 600px) {
    height: 2px;
  }

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: var(--black);
    content: '';
    position: absolute;
    transition: all 0.3s linear;
    @media (max-width: 600px) {
      height: 2px;
    }
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    @media (max-width: 600px) {
      height: 2px;
      display: none;
    }
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
  @media (max-width: 800px) {
    display: flex;
  }
`;
