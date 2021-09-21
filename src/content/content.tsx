import { useState, RefObject } from 'react'
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

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
}

const ContentStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 6px 1fr;
`

export const Content = ({ inputRef }: ContentProps) => {
  const [content, setContent] = useState('')

  return (
    <ContentStyled>
      <EditingArea state={content} setState={setContent} inputRef={inputRef} />
      <VerticalLine />
      <Markdown content={content} />
    </ContentStyled>
  )
}
