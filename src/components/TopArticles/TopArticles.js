import React from "react";
import ArticleTile from "./ArticleTile";
import ContentGrid from "../Common/ContentGrid/ContentGrid";

const TopArticles = ({topArticles}) => {
	
	return(
		<ContentGrid cols={2}>

			{
				topArticles.map(article => (
					<ArticleTile {...article} key={article.id}
					/>
				))
			}
		</ContentGrid>
	)
}

export default TopArticles;