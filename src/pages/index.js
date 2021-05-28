import React from 'react'
import {graphql} from "gatsby";
import styled from "styled-components";
import BannerBlock from "../components/Banner/Banner";
import TitledSection from "../components/common/TitledSection/TitledSection";
import TopArticles from "../components/TopArticles/TopArticles";
import TopPartners from "../components/TopPartners/TopPartners";
import Text from "../components/common/Text";
import SeeMore from "../components/SeeMore/SeeMore";
import {useWindowSize} from "../hooks/useWindowSize";

const TopPartnersSection = styled(TitledSection)`
  background-color: red;
  font-size: 500px;
`

const IndexPage = ({
                       data: {
                           datoCmsHomePage: {
                               bannerBackgroundImage,
                               bannerTitle,
                               bannerSubtitle,
                               aboutUsTitle,
                               aboutUsText,
                               topPartnersTitle,
                               topPartners,
                               topArticlesTitle,
                               topArticles
                           }
                       }
                   }) => {
    const {width} = useWindowSize()

    return (
        <>
            <BannerBlock
                bgImage={bannerBackgroundImage}
                title={bannerTitle}
                subtitle={bannerSubtitle}
            />

            <TitledSection title={aboutUsTitle} id={'aboutUs'}>
                <Text text={aboutUsText}
                      as={'div'}
                      color={'#444444'}
                      fontSize={width > 991 ? '32px' : '20px'}
                      lineHeight={'1.5'}
                      textType={'html'}/>
            </TitledSection>

            <TopPartnersSection title={topPartnersTitle} id={'partners'}>
                <TopPartners topPartners={topPartners}/>
            </TopPartnersSection>

            <TitledSection title={topArticlesTitle} id={'news'}>
                <TopArticles topArticles={topArticles}/>
            </TitledSection>
        </>
    )
}

export const query = graphql`
    query { datoCmsHomePage {
        bannerSubtitle
        bannerTitle
        bannerBackgroundImage {
            url
        }
        aboutUsTitle,
        aboutUsText,
        topPartnersTitle
        topPartners {
            id
            title
            slug
            coverImage {
                alt
                gatsbyImageData
            }
        }
        topArticlesTitle
        topArticles {
            id
            title
            slug
            description
            coverImage {
                fixed {
                    src
                }
            }
        }
    }
    }`

export default IndexPage

