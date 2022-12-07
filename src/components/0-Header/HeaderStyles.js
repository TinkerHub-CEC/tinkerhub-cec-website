import styled ,{css} from 'styled-components';

export const Navbar=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
padding:10px 50px 0 50px;
margin:auto;
 }
`;

export const Nav_logo=styled.a`

`;


export const Logo=styled.img`
width:350px;
height:100px;
`;

export const Nav_toggle=styled.div`
    display:none;
    flex-direction: column;
    cursor: pointer;

    span{
        height: 4px;
        width: 35px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media screen and (max-width:768px){
        display: flex;
        width: 100px;
        height: 100px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

export const Nav_items=styled.div`
display:flex;
justify-content:space-between;

@media screen and (max-width:768px){
    overflow:hidden;
    flex-direction:column;
    width:100%;
    align-items:center;
    max-height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
    transition: max-height 0.3s ease-in;
}
`;

export const Nav1=styled.ul`
// margin-left:150px;
margin-top:30px;
justify-content:space-between;
// align-items:center;
@media screen and (max-width:768px){
    display:flex;
    flex-direction:column;

}
`;

export const Menu =styled.a`
text-decoration:none;
color:black;
margin-right:140px;
padding-bottom:15px;
font-size:1.7em;
// font-weight:500;
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

@media screen and (max-width:768px){
    margin:0;
}
`;

export const Nav2=styled.div`
padding-top: 20px;
display:flex;
justify-content:space-between;

@media screen and (max-width:768px){
display:flex;
flex-direction:column;
overflow:hidden;  
align-items:center; 
padding:0;
margin-left:1.5rem;
}
`;

export const Nav_media=styled.a`
padding:0 0 10px 0;
margin:0;
`;

export const Media_logo=styled.img`
width:50px;
height:50px;
margin-right:25px;
`;



 


