import React from "react";
import useNavLinks from "../../hooks/use-nav-links";
import Navbar from "./NavBar/NavBar";
import {Link} from "gatsby";
import styled from "styled-components";
import {ContainerBox} from "../../components/common/ContainerBox/ContainerBox";
import {StaticImage} from "gatsby-plugin-image";

const Header = () => {
    const links = useNavLinks();

    const StyledHeader = styled.header`
     
    `

    const HeaderContainerBox = styled(ContainerBox)`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `

    const LogoWrapper = styled(Link)`
      display: inline-block;
      height: 52px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #0E2B56;
    `
    return (

        <StyledHeader>
            <HeaderContainerBox>
                <LogoWrapper to={'/'}>
                    <StaticImage
                        src={"../../images/Logo.svg"}
                        alt={'Logo'}
                        layout="fixed"
                        width={42}
                        height={54}
                    />
                    Կառուցապատողների <br/> Ասոցիացիա
                </LogoWrapper>
                <Navbar links={links}/>
            </HeaderContainerBox>
        </StyledHeader>
    )
}

export default Header

