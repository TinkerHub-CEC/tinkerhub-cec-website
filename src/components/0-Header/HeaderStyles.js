import styled ,{css} from 'styled-components';


export const Container = styled.div`
padding:0px;
margin:0px;
max-height:150px;
width:100%;

@media screen and (max-width:768px){
    
}
`;

export const Navbar=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
padding:5px 50px;
padding-bottom:0;
margin:auto;
background-color:#ADD8E6;
width:100%;

@media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    width:180vh;

}
`;

export const Nav_logo=styled.a`

`;


export const Logo=styled.img`
width:350px;
height:100px;
`;

export const Nav_items=styled.div`
display:flex;
flex-direction:row;
`

export const Nav1=styled.ul`
margin-left:150px;
margin-top:30px;
@media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
}
`;

export const L =styled.a`
text-decoration:none;
color:black;
margin-right:140px;
font-size:1.6em;
font-weight:500;
position:relative;
opacity:0.8;

&:hover{
    opacity:1;
}
&::before{
    content:"";
    position:absolute;
    left:0;
    bottom:0;
    width:0;
    height:3px;
    background:blue;
    transition: all .45s;
}
&:hover::before{
    width:100%;
}
`;

export const Nav2=styled.div`
padding-top: 15px;
display:flex;
flex-direction:row;
margin-left:20px;
`;

export const Nav_media=styled.a`
`

export const Media_logo=styled.img`
width:50px;
height:50px;
margin-right:25px;
`;

export const Nav_toggle=styled.div`
    display:none;
    @media screen and (max-width:768px){
        display: flex;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    

`
export const Bar=styled.div`
    position: relative;
    width: 32px;
    height: 2px;
    background: black;
    transition: all 0.45s ease-in-out;
    &::before,::after{
        content: "";
        position: absolute;
        height: 2px;
        background: black;
        border-radius: 2px;
        transition: all 0.45s ease-in-out;
    }
    ::before{
        width: 25px;
        transform: translateY(-8px);
        right: 0;
    }
    ::after{
        width: 32px;
        transform: translateY(8px);
    }
` 
 

