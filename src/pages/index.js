import React from 'react'
import {graphql} from "gatsby";
import BannerBlock from "../components/Banner/Banner";
import TitledSection from "../components/TitledSection/TitledSection";
import TopArticles from "../components/TopArticles/TopArticles";
import TopPartners from "../components/TopPartners/PartnerTile";

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

            <p>{description}</p>

            <TitledSection title={topPartnersTitle}>
                <TopPartners topPartners={topPartners}/>
            </TitledSection>

            <TitledSection title={topArticlesTitle}>
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
                fixed {
                    src
                }
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

