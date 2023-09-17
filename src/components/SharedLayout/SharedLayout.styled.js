import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const MainContainer = styled.div`

    width: 100%;
    padding: 0 20px;


    @media screen and (min-width: 375px) {
  
        width: 375px;
        margin: 0 auto;
  
   
}

@media screen and (min-width: 768px) {
  
        width: 768px;
        padding: 0 32px;
    
}

@media screen and (min-width: 1440px) {
    
        width: 1440px;
        padding: 0 24px;
   
}

`

export const HeaderStyled = styled.header`
   height: 80px;
   padding: 20px 0;
  border-color: black; 
  border-bottom: 1px;
`

export const NavStyled = styled.nav`
   display: flex;
   justify-content: start;
   align-items: center;
  gap: 20px;
  
`


export const NavLinkStyled = styled(NavLink)`
display: inline-block;
text-decoration: none;
color: inherit;
padding: 5px;
font-size: 20px;

&.active{
  color: blue;
}
`