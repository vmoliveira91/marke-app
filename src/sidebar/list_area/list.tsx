import styled from 'styled-components'
import { ListItem } from './list_item'
import { File } from 'helpers/types/file'
import { StateProps } from 'helpers/types/state'

const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 8px;
  width: 85%;

  list-style: none;
  margin: 0;
  padding: 0;
  
  font-weight: 400;
  font-size: 16px;  
`

type ListProps = StateProps<File[]> & {
  handleDelete: Function
}

export const List = ({ state, handleDelete }: ListProps) => {
  return (
    <ListStyle>
      {state && state.map((file) => {
        return (
          <ListItem
            key={file.id}
            file={file}
            handleDelete={handleDelete}
          />
        )
      })}
    </ListStyle>
  )
}
