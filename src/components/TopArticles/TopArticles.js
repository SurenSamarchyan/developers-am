import React from "react";
import ArticleTile from "./ArticleTile";
import ContentGrid from "../common/ContentGrid/ContentGrid";

const TopArticles = ({topArticles}) => {
	
	return(
		<ContentGrid>
			{
				topArticles.map(article => (
					<ArticleTile
						title={article.title}
						coverImageSrc={article.coverImage?.fixed?.src}
						description={article.description}
						slug={article.slug}
					/>
				))
			}
		</ContentGrid>
	)
}

export default TopArticles;