import React from 'react'
import {graphql} from "gatsby";
import BannerBlock from "../components/Banner/Banner";
import TitledSection from "../components/common/TitledSection/TitledSection";
import TopArticles from "../components/TopArticles/TopArticles";
import TopPartners from "../components/TopPartners/TopPartners";

const IndexPage = ({
                       data: {
                           datoCmsHomePage: {
                               bannerBackgroundImage,
                               bannerTitle,
                               bannerSubtitle,
                               description,
                               topPartnersTitle,
                               topPartners,
                               topArticlesTitle,
                               topArticles
                           }
                       }
                   }) => {

    return (
        <>
            <BannerBlock
                bgImage={bannerBackgroundImage}
                title={bannerTitle}
                subtitle={bannerSubtitle}
            />

            <TitledSection title={topPartnersTitle} id={'partners'}>
                <TopPartners topPartners={topPartners}/>
            </TitledSection>

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
        description
        topPartnersTitle
        topPartners {
            id
            title
            slug
            description
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

