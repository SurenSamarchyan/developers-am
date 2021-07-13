import React from 'react'
import {graphql} from "gatsby";
import BannerBlock from "../components/Banner/Banner";
import Seo from "../components/Seo";
import ContentGrid from "../components/common/ContentGrid/ContentGrid";
import ArticleTile from "../components/TopArticles/ArticleTile";


const NewsPage = ({
                      data: {
                          datoCmsNewsPage: {
                              seoSettings,
                              cover,
                              title,
                              allDatoCmsArticle
                          }
                      }
                  }) => {

    console.log(allDatoCmsArticle)

    return (
        <>
            <Seo {...seoSettings}/>

            <BannerBlock
                bgImage={cover}
            />

            <ContentGrid cols={4}>
                {allDatoCmsArticle.nodes.map(newsItem => <ArticleTile {...newsItem} key={newsItem.id}/>)}
            </ContentGrid>

        </>
    )
}

export const query = graphql`
    query {
        allDatoCmsArticle {
            nodes {
                title
                slug
                id
                coverImage {
                    gatsbyImageData
                    title
                }
            }
        }

        datoCmsNewsPage {
            seoSettings {
                title
                description
                image { 
                    fixed(width: 600) {
                        src
                    }
                }
            }
            cover { 
                gatsbyImageData(aspectRatio: 0.8)
            }
            title
        }
    }
`

export default NewsPage

