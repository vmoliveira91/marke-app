import styled from 'styled-components'
import { Title } from './title'
import { Button } from './button'
import { List } from './list'

const ListAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 15px;
`

export const ListArea = () => {
  return (
    <ListAreaStyle>
      <Title />
      <Button />
      <List />
    </ListAreaStyle>
  )
}
