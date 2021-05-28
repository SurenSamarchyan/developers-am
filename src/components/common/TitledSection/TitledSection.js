import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {ContainerBox} from "../ContainerBox/ContainerBox";

const SectionWrapper = styled(ContainerBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 36px;
  padding-bottom: 36px;

  ${theme.media.md} {
    flex-direction: row;

    padding-top: 48px;
    padding-bottom: 48px;
  }
  ${theme.media.lg} {
    padding-top: 56px;
    padding-bottom: 56px;
  }
  ${theme.media.xl} {
    padding-top: 280px;
    padding-bottom: 280px;
  }
`
const SectionTitle = styled.h2`
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.05em;
  font-family: Noto Sans Armenian, sans-serif;
  font-weight: 500;
  color: ${theme.colors.red};
  
  ${theme.media.md} {
    max-width: 228px;
    width: 25%;
  }
`

const SectionContent = styled.div`
  ul{
    list-style-type: none;
  }
  
  a{
    text-decoration: none;
  }
  
  ${theme.media.md} {
    max-width: 872px;
    width: 75%;
  }
`

const TitledSection = ({title, id, children}) => (
    <SectionWrapper id={id}>
        <SectionTitle>{title}</SectionTitle>
        <SectionContent>{children}</SectionContent>
    </SectionWrapper>
)

export default TitledSection