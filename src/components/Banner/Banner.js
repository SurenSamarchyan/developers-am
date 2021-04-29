import React from "react";
import styled from "styled-components"
import {ContainerBox} from "../common/ContainerBox/ContainerBox";
import {theme} from "../../styles/theme";

const BannerBlock = ({bgImage, title, subtitle}) => {

    const Banner = styled.div`
      padding: ${theme.space.xxl} ${theme.space.xl};
      background-image: url("${bgImage.url}");
      background-size: cover;
      background-position: center;


      ${theme.media.md} {
        height: 655px;
        padding: ${theme.space.xl} ${theme.space.xxl};
      }

      ${theme.media.lg} {
        height: 655px;
        padding: ${theme.space.xxl} ${theme.space.xl4};
      }
      
      ${theme.media.xl} {
        padding: 120px 300px;
      }
    `

    return (
        <Banner>
            <ContainerBox>
                <p>{subtitle}</p>
                <h1>{title}</h1>
            </ContainerBox>
        </Banner>)
}

export default BannerBlock