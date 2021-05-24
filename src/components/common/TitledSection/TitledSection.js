import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {ContainerBox} from "../ContainerBox/ContainerBox";

const SectionWrapper = styled(ContainerBox)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 36px;
  margin-bottom: 36px;
  
  ${theme.media.md} {
    flex-direction: row;
    
    margin-top: 48px;
    margin-bottom: 48px;
  }
  ${theme.media.lg} {
    margin-top: 56px;
    margin-bottom: 56px;
  }
  ${theme.media.xl} {
    margin-top: 280px;
    margin-bottom: 280px;
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