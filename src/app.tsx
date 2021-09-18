import styled from 'styled-components'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

const AppStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const App = () => {
  return (
    <AppStyle>
      <Sidebar />
      <Content />
    </AppStyle>
  )
}

export { App }
