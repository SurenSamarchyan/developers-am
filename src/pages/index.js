import React from 'react'
import Layout from "../components/layout"
import {graphql} from "gatsby";
import BannerBlock from "../components/banner/banner";
import TitledSection from "../components/titledSection";
import TopArticles from "../components/topArticles";

const IndexPage = ({
	                   data: {
		                   datoCmsHomePage: {
			                   bannerBackgroundImage,
			                   bannerTitle,
			                   bannerSubtitle,
			                   description,
			                   topPartnersTitle,
			                   topArticlesTitle,
			                   topArticles
		                   }
	                   }
                   }) => {
	
	return (
		<>
			<Layout>
				<BannerBlock
					bgImage={bannerBackgroundImage}
					title={bannerTitle}
					subtitle={bannerSubtitle}
				/>
				<p>{description}</p>
				<TitledSection title={topPartnersTitle}>
				
				</TitledSection>
				
				<TitledSection title={topArticlesTitle}>
					<TopArticles articles={topArticles}/>
				</TitledSection>
			
			
			</Layout>
		
		</>
	)
}

export const query = graphql`
    query { datoCmsHomePage {
        bannerSubtitle
        bannerTitle
        bannerBackgroundImage {
            alt
            fluid {
                src
            }
        }
        description
        topPartnersTitle
        topPartners {
            id
            title
            slug
            description
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

