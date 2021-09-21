import styled from 'styled-components'
import { RefObject } from 'react'
import { Header } from './header'
import { ListArea } from './list_area'
import { File } from 'helpers/types/file'
import { StateProps } from 'helpers/types/state'

const SidebarStyle = styled.aside`
  display: grid;
  grid-template-rows: 1fr 5fr;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
`

type SidebarProps = StateProps<File[]> & {
  inputRef: RefObject<HTMLInputElement>
  handleDelete: Function
}

export const Sidebar = ({ state, setState, inputRef, handleDelete }: SidebarProps) => {
  return (
    <SidebarStyle>
      <Header />
      <ListArea
        state={state}
        setState={setState}
        inputRef={inputRef}
        handleDelete={handleDelete}
      />
    </SidebarStyle>
  )
}
