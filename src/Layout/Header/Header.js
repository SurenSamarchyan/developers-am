import React from "react";
import useNavLinks from "../../hooks/use-nav-links";
import Navbar from "./NavBar/NavBar";
import {Link} from "gatsby"
import Logo from "../../images/Logo";
import styled from "styled-components";
import {ContainerBox} from "../../components/common/ContainerBox/ContainerBox";

const Header = () => {
    const links = useNavLinks();

    const StyledHeader = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      
      svg {
       
      }
    `

    return (

        <StyledHeader>
            <ContainerBox>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                <Navbar links={links}/>
            </ContainerBox>
        </StyledHeader>
    )
}

export default Header

