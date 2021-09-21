import styled from 'styled-components'
import { useRef, useState } from 'react'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { File } from 'helpers/types/file'

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  return (
    <AppStyle>
      <Sidebar state={files} setState={setFiles} inputRef={inputRef} />
      <Content inputRef={inputRef} />
    </AppStyle>
  )
}

export { App }
