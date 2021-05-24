import React from "react";
import styled from "styled-components"
import {ContainerBox} from "../common/ContainerBox/ContainerBox";
import {theme} from "../../styles/theme";
import {AnchorLink} from "gatsby-plugin-anchor-links";

const BannerBlock = ({bgImage, title, subtitle}) => {

    const Banner = styled.div`
    {
      display: flex;
      align-items: center;
      background-image: url("${bgImage.url}");
      background-size: cover;
      background-position: center;


      ${theme.media.sm} {
        //   height: 665px;
        //   padding: ;
      }

      ${theme.media.md} {
        height: 655px;
        padding: ${theme.space.xl}px ${theme.space.xxl}px;
      }

      ${theme.media.lg} {
        height: 655px;
        padding: ${theme.space.xxl}px ${theme.space.xl4}px;
      }

      ${theme.media.xl} {
        padding: 120px 300px;
      }

      // why is it needed
      &.opacity-block {
        display: inline;
      }
    }
    `
    const BannerTitle = styled.h1` {
      display: block;

      height: 114px;
      max-width: 484px;
      max-height: 114px;
      padding-top: 30px;

      font-size: ${theme.fontSizes.xl};
      line-height: 120%;
      letter-spacing: 0.07em;
      font-family: Noto Sans Armenian;
      font-style: normal;
      font-weight: normal;
      
      color: ${theme.colors.red};

      ${theme.media.sm} {
        font-size: 24px;
      }

      ${theme.media.md} {
        padding-top: 0px;
        font-size: 32px;
      }
    }`

    const BannerText = styled.p` {
      display: block;
      
      max-width: 600px;
      max-height: 180px;
      margin-top: 24px;

      font-size: ${theme.fontSizes.xxl};
      font-family: Noto Sans Armenian;
      font-style: normal;
      font-weight: ${theme.fontWeights.medium};

      color: ${theme.colors.blue};


      ${theme.media.sm} {
        font-size: ${theme.fontSizes.xl3}
      }
      
      ${theme.media.md} {
        font-size: ${theme.fontSizes.xl3}
      }

    }`

    const BannerButton = styled(AnchorLink)` {
      display: block;

      width: 276px;
      height: 56px;
      margin-top: 40px;
      margin-bottom: 20px;
      padding: 16px 56px;
      border-radius: 10px;

      background-color: ${theme.colors.red};
      
      font-size: 20px;
      text-decoration: none;
      font-family: "Noto Sans Armenian";
      font-style: normal;
      font-weight: ${theme.fontWeights.bold};

      color: white;
    }`





    return (
        <Banner>
            <ContainerBox className='opacity-block'>
                <BannerTitle>{subtitle}</BannerTitle>
                <BannerText>{title}</BannerText>
                <BannerButton to={''} title={'Հաստատել կապ'}/>
            </ContainerBox>
        </Banner>)
}
export default BannerBlock