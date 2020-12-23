import React from "react";
import ArticleTile from "./articleTile";

const TopArticles = ({topArticles}) => {
	
	return(
		<ul>
			{
				topArticles.map(article => (
					<li key={article.id}>
						<ArticleTile
							title={article.title}
							coverImageSrc={article.coverImage?.fixed?.src}
							description={article.description}
							slug={article.slug}
						/>
					</li>
				))
			}
		</ul>
	)
}

export default TopArticles;