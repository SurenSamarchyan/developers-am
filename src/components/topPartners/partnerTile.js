import React from "react";

const PartnerTile = ({title, description, slug, coverImageSrc}) => {
	return (
		<a href={`/${slug}`}>
			{coverImageSrc && <img src={coverImageSrc} alt=""/>}
			<h3>{title}</h3>
			<p>{description}</p>
		</a>
)
}

export default PartnerTile