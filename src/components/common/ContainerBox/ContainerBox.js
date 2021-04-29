import styled from 'styled-components'
import { theme, containerMaxWidths } from '../../../styles/theme'

export const ContainerBox = styled.div`
  max-width: ${containerMaxWidths.sm}px;
  width: calc(100% - ${theme.space.m}px);
  margin-left: auto;
  margin-right: auto;
  
  ${theme.media.md} {
    max-width: ${containerMaxWidths.md}px;
    width: calc(100% - ${theme.space.l}px);
  }

  ${theme.media.lg} {
    max-width: ${containerMaxWidths.lg}px;
    width: calc(100% - ${theme.space.xxl5}px);
  }
  
  ${theme.media.xl} {
    max-width: ${containerMaxWidths.xl}px;
    width: calc(100% - ${theme.space.xxl8}px);
  }
`

