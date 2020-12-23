import React from "react";
import PartnerTile from "./partnerTile";

const TopPartners = ({topPartners}) => {
	
	return(
		<ul>
			{
				topPartners.map(partner => (
					<li key={partner.id}>
						<PartnerTile
							title={partner.title}
							coverImageSrc={partner.coverImage?.fixed?.src}
							description={partner.description}
							slug={partner.slug}
						/>
					</li>
				))
			}
		</ul>
	)
}

export default TopPartners;