import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/theme";

import { uniqueId } from 'lodash'

const Grid = styled.ul`
  display: flex;
  flex-direction: column;

  ${theme.media.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const GridItem = styled.li`
  ${theme.media.md} {
    width: calc(25% - 18px);
  }
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100%;
  }
`
const ContentGrid = ({children}) => (                                                      
    <Grid>
        {children.map(item => (
            <GridItem key={uniqueId('col')}>{item}</GridItem>
        ))}
    </Grid>
)

export default ContentGrid