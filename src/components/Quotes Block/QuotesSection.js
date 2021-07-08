import React from "react";
import styled from "styled-components";
import {GatsbyImage} from "gatsby-plugin-image";
import {useWindowSize} from "../../hooks/useWindowSize";
import {theme} from "../../styles/theme";
import {ContainerBox} from "../common/ContainerBox/ContainerBox";


const QuotesSection = ({text, author, firstBanner, secondBanner}) => {
    const {width} = useWindowSize()
    console.log(theme.media.md)
    return (
        <SectionWrapper>
            <QuoteWrapper>
                <GatsbyImage alt={`${firstBanner.alt}`} image={firstBanner.gatsbyImageData}/>
                <blockquote>
                    <p>{text}
                        <span>{author}</span>
                    </p>
                </blockquote>
            </QuoteWrapper>
            {width > theme.breakpoints.md &&
            <GatsbyImage alt={`${secondBanner.alt}`} image={secondBanner.gatsbyImageData}/>}
        </SectionWrapper>
    )
}


export default QuotesSection


const SectionWrapper = styled(ContainerBox)`
  ${theme.media.md} {
    display: flex;
  }

`
const QuoteWrapper = styled.div`
  flex-grow: 2;
  padding-left: 24px;
  font-size: ${theme.fontSizes.xxl};

  blockquote:before {
    content: "";
  }
  
  span {
    color: ${theme.colors.red};
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeights.semibold};
    padding-left: 25px;
  }

  ${theme.media.sm} {
  }
`




