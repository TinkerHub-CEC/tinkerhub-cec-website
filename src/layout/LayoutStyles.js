import styled from 'styled-components';

// This is just an example to show case styled components. and media queries. feel free to edit this file. 
export const Container = styled.div`

width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
animation-name: e;
animation-duration:2s;
@keyframes e{
    from {opacity: 0}
    to {opacity: 1}

@media screen and (max-width: 768px) {
    font-size: 1.5rem;
    width: 90em;

`;
