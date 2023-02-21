import styled ,{css} from 'styled-components';

export const Navbar=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
position:absolute;
top:4%;
width:98vw;
padding:0 4rem;

@media screen and (max-width:768px){
    position:relative;
    padding:0 4rem;
    top:0.6%;
    left:0%;
    right:0%;
    width:auto;
 }
`;

export const Nav_logo=styled.a`

@media screen and (max-width:768px){
    // width:1000px;
    // height:200px;
}
`;


export const Logo=styled.img`
width:260px;
height:94px;

@media screen and (max-width:768px){
    width:850px;
    height:280px;
`;

export const Nav_toggle=styled.div`
    display:none;
    flex-direction: column;
    cursor: pointer;

    span{
        height: 16px;
        width: 100px;
        background: #7b7fda;
        margin-bottom: 16px;
        border-radius: 5px;
    }

    @media screen and (max-width:768px){
        display: flex;
        width: 100px;
        height: 100px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 8rem;
        margin-right:8rem;
    }
`;

export const Nav_items=styled.div`
display:flex;
justify-content:space-between;
padding-left:130px;

@media screen and (max-width:1440px){
    padding-left:0px;
    
}

@media screen and (max-width:768px){
    overflow:hidden;
    flex-direction:column;
    width:100%;
    align-items:center;
    max-height: ${({ isOpen }) => (isOpen ? "430px" : "0")};
    transition: max-height 0.3s ease-in;
    padding:0;
}
`;

export const Nav1=styled.ul`
// margin-left:150px;
margin-top:30px;
margin-right:82px;
justify-content:space-between;
// align-items:center;
@media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    margin:0;

}
`;

export const Menu =styled.a`
text-decoration:none;
color:black;
margin-right:140px;
padding-bottom:15px;
font-size:1.7em;
font-weight:400;
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
    font-size:3.8em;
    font-weight:600;
    line-height:1.6;
}
`;

export const Nav2=styled.div`
padding-top: 16px;
display:flex;
justify-content:space-between;

@media screen and (max-width:768px){
display:flex;
overflow:hidden;  
align-items:center; 
padding-top:30px;
height:700px;
margin: 0 auto;
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

@media screen and (max-width:768px){
    width:100px;
    height:100px;

}
`;



 


