import styled from 'styled-components';

// This is just an example to show case styled components. and media queries. feel free to edit this file. 
export const Container = styled.div`

width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
font-size: 3em;
font-weight: 700;
@media ${props => props.theme.breakpoints.md} {
    font-size: 4em;
   
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 6em;
  }
`;
