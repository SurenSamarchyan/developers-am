import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";

const PartnerTile = ({title, slug, coverImage}) => {

    return (
        <a href={`/${slug}`}>
            {coverImage && <GatsbyImage image={coverImage.gatsbyImageData} alt={`${coverImage.alt}`} style={{maxHeight: 200}}/>}
            <h3>{title}</h3>
        </a>
    )
}

export default PartnerTile