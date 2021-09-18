import styled from 'styled-components'
import { ListItem } from './list_item'
import { File } from 'helpers/types/file'

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

export const List = () => {
  return (
    <ListStyle>
      {files.map((file) => {
        return <ListItem key={file.id} file={file} />
      })}
    </ListStyle>
  )
}

const files: File[] = [
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
]
