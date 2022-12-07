import styled from "styled-components";

export const FooterContainer = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media screen and (max-width:768px){
}
`;

export const HorizontalLine = styled.hr`
    color: black;
    margin-left:2em;
    margin-right:2em;
    margin-bottom:1em;
`;

export const FooterText = styled.h4`
    margin-bottom:1em;
    @media screen and (max-width:768px){
        font-size:2em;
}
`;