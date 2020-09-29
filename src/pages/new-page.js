import React from "react";
import graphql from "gatsby";
import Layout from "../components/layout";


const NewPage = ({ data: {new_page} }) => (
	<Layout>
		<p>
			{new_page.paragraphs}
		</p>
	</Layout>
);


export default NewPage

export const query = graphql`
    query NewPageQuery {
        new_page: datoCmsNewPage( date: {} ) {
            id
            pageHeadline
            paragraph
        }
    }
`;


