import React from "react";
import SubMenu from "./SubMenu/SubMenu";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import {theme} from "../../../styles/theme";

const NavBar = ({links}) => {
    const StyledNav = styled.nav`
      li {
        position: relative;
        display: inline-block;
        padding: 0 8px;
        list-style: none;

        &::after {
          content: "";
          
          position: absolute;
          left: 0;
          width: 0;
          bottom: 0;
          height: 2px;
          transition: width .3s ease;
          background-color: ${theme.colors.red};
        }
        
        &:hover {
          &::after {
            left: 16px;
            width: calc(100% - 32px);
          }
        }
      }

      a {
        display: inline-block;
        padding: 32px 8px;

        font-size: ${theme.fontSizes.l};
        font-weight: ${theme.fontWeights.semibold};
        line-height: 27px;
        font-family: Noto Sans Armenian;
        font-style: ${theme.fontWeights.regular};
        text-decoration: none;
        
        color: ${theme.colors.blue};
      }
    `;
     
    return (
        <StyledNav>
            <ul>
                {
                    links.map(link => (
                        <li key={link.id}>

                            <AnchorLink to={link.url} title={link.title}/>
                            {
                                link.treeChildren.length > 0 && <SubMenu subMenuItems={link.treeChildren}/>
                            }
                        </li>
                    ))
                }
            </ul>
        </StyledNav>
    )
}

export default NavBar