import styled from 'styled-components'
import { EditingArea } from './editing_area'
import { Markdown } from './markdown'

const VerticalLineStyle = styled.div`
  border-left: 2px solid rgba(30, 41, 59, 0.12);
  height: 75%;

  margin-top: 100px;
`

const VerticalLine = () => {
  return (
    <VerticalLineStyle />
  )
}

const ContentStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 6px 1fr;
`

export const Content = () => {
  return (
    <ContentStyled>
      <EditingArea />
      <VerticalLine />
      <Markdown />
    </ContentStyled>
  )
}
