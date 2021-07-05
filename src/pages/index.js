import React from 'react'
import {graphql} from "gatsby";
import styled from "styled-components";
import BannerBlock from "../components/Banner/Banner";
import TitledSection from "../components/common/TitledSection/TitledSection";
import TopArticles from "../components/TopArticles/TopArticles";
import TopPartners from "../components/TopPartners/TopPartners";
import Text from "../components/common/Text";
import {useWindowSize} from "../hooks/useWindowSize";
import ContactUs from "../components/ContactUs/ContactUs";

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
                               bannerBtnText,
                               bannerBtnLink,
                               aboutUsTitle,
                               aboutUsText,
                               topPartnersTitle,
                               topPartners,
                               topArticlesTitle,
                               topArticles,
                               contactUsTitle,
                               contactUsBackgroundImage,
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
                bannerBtnText={bannerBtnText}
                bannerBtnLink={bannerBtnLink}
            />

            <TitledSection title={aboutUsTitle} id={'aboutUs'}>
                <Text text={aboutUsText}
                      as={'div'}
                      color={'#444444'}
                      fontSize={width > 991 ? '32px' : '20px'}
                      lineHeight={'1.5'}
                      textType={'html'}/>
            </TitledSection>

            <div className={`shadow-section`}>
                <TopPartnersSection title={topPartnersTitle} id={'partners'} seeMoreLink={'/'}>
                    <TopPartners topPartners={topPartners}/>
                </TopPartnersSection>
            </div>



            <TitledSection title={topArticlesTitle} id={'news'}>
                <TopArticles topArticles={topArticles}/>
            </TitledSection>

            <ContactUs title={contactUsTitle}
                       bgImage={contactUsBackgroundImage}
            />
        </>

    )
}

export const query = graphql`
    query {
        datoCmsHomePage {
            bannerSubtitle
            bannerTitle
            bannerBackgroundImage {
                url
            }
            bannerBtnText
            bannerBtnLink
            aboutUsTitle,
            aboutUsText,
            topPartnersTitle
            topPartners {
                id
                title
                slug
                coverImage {
                    alt
                    gatsbyImageData(aspectRatio: 1)
                }
            }
            topArticlesTitle
            topArticles {
                id
                title
                slug
                description
                coverImage {
                    gatsbyImageData(aspectRatio: 1.7)
                    alt
                }
            }
            contactUsTitle
            contactUsBackgroundImage {
                url
            }

        }
    }`

export default IndexPage

