import styled from 'styled-components'
import { useState } from 'react'
import { Header } from './header'
import { ListArea } from './list_area'
import { File } from 'helpers/types/file'

const SidebarStyle = styled.aside`
  display: grid;
  grid-template-rows: 1fr 5fr;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
`

export const Sidebar = () => {
  const [files, setFiles] = useState<File[]>(
    [
      {
        id: '01',
        name: 'README.md',
        content: '',
        active: false,
        status: 'editing',
      },
      {
        id: '02',
        name: 'CONTRIBUTING.md',
        content: '',
        active: true,
        status: 'saving',
      },
      {
        id: '03',
        name: 'LICENSE.md',
        content: '',
        active: true,
        status: 'saved',
      },
      {
        id: '04',
        name: 'Links.md',
        content: '',
        active: true,
        status: 'editing',
      },
      {
        id: '05',
        name: 'roadmap.md',
        content: '',
        active: false,
        status: 'editing',
      },
    ],
  )

  return (
    <SidebarStyle>
      <Header />
      <ListArea state={files} setState={setFiles} />
    </SidebarStyle>
  )
}
