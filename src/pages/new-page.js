import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";


const NewPage = ({data: {newPage: {pageHeadline, paragraph}}}) => {
    return (
        <Layout>
            <article className="sheet">
                <div className="sheet__inner">
                    <h1>{pageHeadline}</h1>
                    <p>{paragraph}</p>
                </div>
            </article>
        </Layout>
    );
}
export default NewPage

export const NewPageQuery = graphql`
    query NewPage {
        newPage: datoCmsNewPage {
            pageHeadline
            paragraph
        }
    }
`;


