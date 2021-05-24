import React from "react";
import styled from "styled-components"
import {ContainerBox} from "../common/ContainerBox/ContainerBox";
import {theme} from "../../styles/theme";
import {AnchorLink} from "gatsby-plugin-anchor-links";

const BannerBlock = ({bgImage, title, subtitle}) => {

    const Banner = styled.div`
    {
      padding: 30px 0;
      display: flex;
      align-items: center;
      background-image: url("${bgImage.url}");
      background-size: cover;
      background-position: center;
      text-align: center;

      ${theme.media.md} {
        min-height: 655px;
        padding: ${theme.space.xl}px 0;
        text-align: left;
      }

      ${theme.media.lg} {
        min-height: 655px;
        padding: ${theme.space.xxl}px 0;
      }

      ${theme.media.xl} {
        padding: 120px 0;
      }

      .opacity-block {
        padding-bottom: 4px;
        
        &::before {
          top: -16px;
          right: -10px;
          bottom: -16px;
          left: -10px;

          ${theme.media.md} {
            top: -16px;
            right: -10px;
            bottom: -16px;
            left: -10px;
          }

          ${theme.media.lg} {
            top: -32px;
            right: 88px;
            bottom: -32px;
            left: -88px;
          }
        }
      }
    }
    `

    const BannerTitle = styled.h1` {
      display: block;

      font-size: 18px;
      line-height: 120%;
      letter-spacing: 0.07em;
      font-weight: 600;

      color: ${theme.colors.red};

      ${theme.media.sm} {
        font-size: 24px;
      }

      ${theme.media.md} {
        max-width: 484px;
        max-height: 114px;
        font-size: 32px;
      }
    }`

    const BannerText = styled.p` {
      display: block;
      margin: 24px 0;
      max-width: 600px;

      font-size: 24px;
      font-style: normal;
      font-weight: ${theme.fontWeights.medium};

      color: ${theme.colors.blue};

      ${theme.media.md} {
        font-size: ${theme.fontSizes.xl3}
        max-height: 180px;
      }

    }`

    const BannerButton = styled(AnchorLink)` {
      display: inline-block;
      height: 48px;
      padding: 12px 32px;
      border-radius: 10px;

      background-color: ${theme.colors.red};

      font-size: 16px;
      text-decoration: none;
      font-style: normal;
      font-weight: ${theme.fontWeights.bold};

      color: white;

      ${theme.media.md} {
        height: 56px;
        padding: 16px 56px;
        font-size: 20px;
      }
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