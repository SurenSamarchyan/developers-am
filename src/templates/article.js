import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import {graphql} from 'gatsby'

const Article = ({
                     data: {
                         slug,
                         title,
                         description,
                         coverImage,
                         content
                     }
                 }) => {

    return (
        <div>
            <GatsbyImage image={coverImage.gatsbyImageData} alt={coverImage.alt}/>
            <h1>{title}</h1>

        </div>
    )
}
/*
content {
...RichText
...ImageBlock
...ImageGallery
...VideoUpload
...VideoExternal
...FileList
}*/

export const query = graphql`
    query Article($slug: String!) {
        article: datoCmsArticle(slug: { eq: $slug }) {
            slug
            title
            description
            coverImage {
                gatsbyImageData(aspectRatio: 1.7)
                alt
            }
            
        }
    }
`

export default Article