import styled from 'styled-components'
import { Header } from './header'
import { ListArea } from './list_area'

const SidebarStyle = styled.aside`
  display: grid;
  grid-template-rows: 1fr 5fr;
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
`

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <Header />
      <ListArea />
    </SidebarStyle>
  )
}
