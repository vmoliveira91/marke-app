import styled from 'styled-components'
import { Title } from './title'
import { Button } from './button'
import { List } from './list'
import { StateProps } from 'helpers/types/state'
import { File } from 'helpers/types/file'

const ListAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 15px;
`

export const ListArea = ({ state, setState }: StateProps<File[]>) => {
  return (
    <ListAreaStyle>
      <Title />
      <Button state={state} setState={setState} />
      <List state={state} setState={setState} />
    </ListAreaStyle>
  )
}
