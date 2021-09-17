import styled from 'styled-components'
import { File } from 'helpers/types/file'
import whiteFile from 'assets/images/file-white-icon.svg'

const ListItemStyle = styled.li`
  display: flex;
  flex-direciton: row;
  align-items: center;

  width: 100%;
  height: 33.88px;
  padding-left: 15px;
  border: none;
  border-radius: 3.39px;

  & a {
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    margin-left: 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
  }
`

type ListItemProps = {
    file: File
}

export const ListItem = ({ file }: ListItemProps) => {
  return (
    <ListItemStyle>
      <img src={whiteFile} alt='File' />
      <a href='/'>{file.name}</a>
    </ListItemStyle>
  )
}
